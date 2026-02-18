import { Outlet } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Root() {
  return (
    <div className="min-h-screen bg-[#f8f6f1]">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
