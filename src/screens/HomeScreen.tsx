
import Footer from "../components/LayoutProps/Home/Footer";
import Hero from "../components/LayoutProps/Home/Hero";
import NavBar from "../components/LayoutProps/Home/Navbar";

export default function HomeScreen() {
  return (
    <>
      <div className="flex flex-col bg-neutral-700">
        <NavBar />
        <Hero />
        <Footer />
      </div>
    </>
  );
}
