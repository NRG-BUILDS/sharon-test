const About = () => {
  return (
    <section className="bg-Green bg-opacity-5 px-4 py-20" id="about">
      <div className="grid md:grid-cols-2 items-center gap-8 mx-auto max-w-5xl">
        <div>
          <h2 className="text-3xl my-4">About Us</h2>
          <p className="py-4 font-semibold">
            We Believe In Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.
          </p>
          <p className="pb-4">
            Welcome to Sharon Bovea. Here you can discover sound expertise in
            animal & pet care. We have grown on the principles of health, and
            care. We also aim to give our customers perfect nutrition through
            our healthy agro-products.
          </p>
          <div className="my-6">
            <h3 className="text-2xl">Quickly Jump Into...</h3>
          </div>
          <div className=" flex flex-wrap md:justify-start justify-center gap-4">
            <div className="rounded-lg px-4 py-4 max-w-[130px] flex items-center border-2 hover:bg-orange-400 hover:text-white transition-all border-orange-400 ">
              <div>
                <span className="block text-Green font-semibold">Our</span>
                <h2 className="text-lg">Vetinary and Pet Services</h2>
              </div>
            </div>
            <div className="rounded-lg px-4 py-4 max-w-[130px] flex items-center border-2 hover:bg-Green hover:text-white transition-all border-Green ">
              <div>
                <span className="block text-orange-400 font-semibold">Our</span>
                <h2 className="text-lg">
                  Agribusiness & Consultation Services
                </h2>
              </div>
            </div>
            <div className="rounded-lg px-4 py-4 max-w-[130px] flex items-center border-2 hover:bg-gray-200 transition-all border-gray-200 ">
              <div>
                <span className="block text-Green font-semibold">Our</span>
                <h2 className="text-lg">
                  Poultry Production & Medicare Services
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full aspect-square flex items-center relative">
          <div className=" w-11/12 aspect-square rounded-full overflow-clip mx-auto">
            <img
              alt=""
              src={require("../../../assets/images/banners/hero/chicken.jpg")}
              className=" w-full h-full object-cover"
            />
          </div>
          <div className=" w-4/12 absolute bottom-0 shadow-2xl right-0 aspect-square rounded-full overflow-clip border-t-8 border-l-8 border-Green">
            <img
              alt=""
              src={require("../../../assets/images/banners/hero/dogs.jpg")}
              className=" w-full h-full object-cover"
            />
          </div>
          <div className=" w-4/12 absolute top-0 shadow-2xl left-0 aspect-square rounded-full overflow-clip border-b-8 border-r-8 border-orange-300">
            <img
              alt=""
              src={require("../../../assets/images/banners/hero/pigs.jpg")}
              className=" w-full h-full object-cover "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
