import Navbar from "@/components/common/Navbar";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full p-2">
       <div
      className="fixed top-0 left-0 right-0 z-50 px-2 pt-2 lg:relative lg:top-0 lg:left-0 lg:right-0 lg:z-50 lg:px-0 lg:pt-0"
    >
        <Navbar />
      </div>
      {children}
    </div>
  );
}
