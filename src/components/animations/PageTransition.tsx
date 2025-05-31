"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState, useRef } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

const TILES_COUNT = 5;
const TRANSITION_DURATION = 0.7;
const STAGGER_DELAY = 0.2;

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isBackNavigation, setIsBackNavigation] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // Track navigation history as a stack (like browser history)
  const navigationStackRef = useRef<string[]>([]);
  const lastPathRef = useRef<string>("");

  // Create tiles array
  const tiles = Array.from({ length: TILES_COUNT }, (_, i) => i);

  useEffect(() => {
    // Handle initial page load
    if (isInitialLoad) {
      navigationStackRef.current = [pathname];
      lastPathRef.current = pathname;
      setIsInitialLoad(false);
      return;
    }

    const currentStack = navigationStackRef.current;
    const lastPath = lastPathRef.current;

    // Check if this is a back navigation
    // Back navigation happens when:
    // 1. The new pathname exists in our stack
    // 2. AND the last page we were on is the one right after this page in the stack
    const currentPageIndex = currentStack.indexOf(pathname);
    const lastPageIndex = currentStack.indexOf(lastPath);

    const isGoingBack =
      currentPageIndex !== -1 &&
      lastPageIndex !== -1 &&
      lastPageIndex === currentPageIndex + 1;

    console.log("Navigation Debug:", {
      from: lastPath,
      to: pathname,
      stack: currentStack,
      currentIndex: currentPageIndex,
      lastIndex: lastPageIndex,
      isBack: isGoingBack,
    });

    setIsBackNavigation(isGoingBack);
    setIsTransitioning(true);

    // Update navigation stack
    if (isGoingBack) {
      // Going back: remove pages after current page from stack
      navigationStackRef.current = currentStack.slice(0, currentPageIndex + 1);
    } else {
      // Going forward: add new page to stack
      // But first, check if we're going to a page that exists later in the stack
      // If so, remove everything after current position first
      const existingPageIndex = currentStack.indexOf(pathname);
      if (existingPageIndex > lastPageIndex) {
        // We're going forward to a page that exists later in history
        navigationStackRef.current = currentStack.slice(0, lastPageIndex + 1);
      }
      navigationStackRef.current.push(pathname);
    }

    // Update last path reference
    lastPathRef.current = pathname;

    // Reset transition state after animation completes
    const totalDuration =
      TRANSITION_DURATION * 1000 +
      (TILES_COUNT - 1) * STAGGER_DELAY * 1000 +
      300;
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, totalDuration);

    return () => clearTimeout(timer);
  }, [pathname, isInitialLoad]);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      // Browser back/forward detected - the pathname will change and trigger the main useEffect
      // This just ensures we're aware a browser navigation happened
      console.log("Browser back/forward detected");
    };

    // Handle beforeunload to track when user is navigating away
    const handleBeforeUnload = () => {
      // User is leaving the site, reset our tracking
      navigationStackRef.current = [];
    };

    window.addEventListener("popstate", handlePopState);
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <>
      {/* Page Transition Overlay */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            key={`transition-${pathname}-${
              isBackNavigation ? "back" : "forward"
            }`}
            className="fixed inset-0 z-[999] pointer-events-none"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, delay: TRANSITION_DURATION + 0.2 }}
          >
            {/* Forward Navigation - Top to Bottom */}
            {!isBackNavigation &&
              tiles.map((index) => (
                <motion.div
                  key={`forward-tile-${index}`}
                  className="absolute left-0 bg-[#007AE5]"
                  style={{
                    top: `${index * 20}%`,
                    height: "20%",
                  }}
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  exit={{ width: 0 }}
                  transition={{
                    duration: TRANSITION_DURATION,
                    delay: index * STAGGER_DELAY,
                    ease: "easeInOut",
                  }}
                />
              ))}

            {/* Back Navigation - Bottom to Top */}
            {isBackNavigation &&
              tiles.map((index) => (
                <motion.div
                  key={`back-tile-${index}`}
                  className="absolute left-0 bg-[#007AE5]"
                  style={{
                    top: `${index * 20}%`,
                    height: "20%",
                  }}
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  exit={{ width: 0 }}
                  transition={{
                    duration: TRANSITION_DURATION,
                    delay: (TILES_COUNT - 1 - index) * STAGGER_DELAY, // Reverse delay
                    ease: "easeInOut",
                  }}
                />
              ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.5,
            delay: isTransitioning ? TRANSITION_DURATION + 0.3 : 0,
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
