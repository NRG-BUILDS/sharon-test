const Hero = () => {
  return (
    <>
      <div className="hero h-screen flex items-center relative">
        <img
          src={require("../../../assets/images/banners/hero-bg.jpg")}
          alt=""
          className="z-0 absolute top-0 left-0 w-full h-full brightness-50 object-cover"
        />
        <div className="max-w-4xl p-5 relative z-10">
          <span className="block text-Green text-xl font-semibold">
            Welcome to
          </span>
          <h1 className="special py-3 text-5xl font-extrabold">
            Sharon Bovea Agribusiness
          </h1>
          <span className="block text-Green text-xl font-semibold">
            ...your one stop for all things agribusiness.
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
