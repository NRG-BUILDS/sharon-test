import About from "./sections/About";
import Hero from "./sections/Hero";
import QuickLinks from "./sections/QuickLinks";
import Store from "./sections/Store";
import Vet from "./sections/Vet";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      {/* <QuickLinks /> */}
      <Vet />
      <Store />
    </>
  );
};

export default Home;
