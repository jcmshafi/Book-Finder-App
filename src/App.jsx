import Footer from "./Components/Footer/Footer";
import MainSection from "./Components/MainSections/MainSection";
import Navbar from "./Components/Navbar/Navbar";

export default function App() {
  
  return (
    <>
      <Navbar />
      <div className="my-10 lg:my-14">
        <MainSection />
      </div>
      <Footer />
    </>
  );
}
