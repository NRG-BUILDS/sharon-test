import { useState } from "react";
import useFetch from "../hooks/useFetch.js";

const getImgUrl = (pic, folder) => {
  const img = new URL(`../assets/images/${folder}/${pic}`, import.meta.url)
    .href;
  return img;
};

const Footer = () => {
  // const { data, isPending, error } = useFetch("general/site-detail/");
  const data = {
    phone: "+2348033919357",
    address: "7, Jehovhas Witness Road Ivadan",
    email: "sharonbovea@gmail.com",
    hours: "Mon-Sat 6:00am - 4:00pm",
  };
  return (
    <>
      <div className="reveal my-6 h-[70vh] rounded-xl relative mx-4 overflow-clip grid md:grid-cols-2 justify-between items-end">
        <div className="p-4   h-full flex justify-center items-center">
          <h2 className="text-5xl font-bold">
            Stay home & get your daily needs from our shop
          </h2>
        </div>
        <div className=" h-3/4">
          <img
            src={getImgUrl("banner-9.png", "banners")}
            alt=""
            className="h-full w-full object-contain hidden md:block "
          />
        </div>

        <img
          src={getImgUrl("banner-12.png", "backgrounds")}
          alt=""
          className="absolute top-0 left-0 h-full w-full -z-10"
        />
      </div>
      <div className="md:flex gap-4 my-8 w-[90%] mx-auto items-cente justify-center">
        <ClaimCard
          icon={"icon-1.svg"}
          title={"Best Prices & Deals"}
          message={"Orders ₦5000 or more"}
        />
        <ClaimCard
          icon={"icon-3.svg"}
          title={"Great daily deal"}
          message={"When you sign up"}
        />
        <ClaimCard
          icon={"icon-4.svg"}
          title={"Wide assortment"}
          message={"Mega Discount"}
        />
        {/* <ClaimCard icon={'icon-5.svg'} title={'Easy returns'} message={'Within 30 days'}/> */}
      </div>

      {data && (
        <footer className="reveal">
          <div className="grid md:grid-cols-3 gap-y-8 justify-between p-4 w-full">
            <div>
              <img
                src={getImgUrl("logo_VKBBW51.png", "logos")}
                alt=""
                className="w-64"
              />
              <div className="mt-8">
                <div className="flex items-center gap-2 mt-4">
                  <img
                    src={getImgUrl("icon-location.svg", "icons")}
                    alt=""
                    className="w-4"
                  />
                  <p>
                    <b>Address: </b>
                    {data.address}
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <img
                    src={getImgUrl("icon-contact.svg", "icons")}
                    alt=""
                    className="w-4"
                  />
                  <p>
                    <b>Tel: </b>
                    {data.phone}
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <img
                    src={getImgUrl("icon-email-2.svg", "icons")}
                    alt=""
                    className="w-4"
                  />
                  <p>
                    <b>Email: </b>
                    {data.email}
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <img
                    src={getImgUrl("icon-clock.svg", "icons")}
                    alt=""
                    className="w-4"
                  />
                  <p>
                    <b>Hours: </b>
                    {data.hours}
                  </p>
                </div>
              </div>
            </div>
            <div className="grid ">
              <h2 className="text-3xl font-bold">Company</h2>
              <div className="inline-block hover:pl-4 transiton-all duration-300">
                <a
                  href="/"
                  className="hover:text-Green transiton-all duration-300"
                >
                  About Us
                </a>
              </div>
              <div className="inline-block hover:pl-4 transiton-all duration-300">
                <a
                  href="/"
                  className="hover:text-Green transiton-all duration-300"
                >
                  Terms of Service
                </a>
              </div>
              <div className="inline-block hover:pl-4 transiton-all duration-300">
                <a
                  href="/"
                  className="hover:text-Green transiton-all duration-300"
                >
                  Refund Service
                </a>
              </div>
            </div>
            <div className="grid ">
              <h2 className="text-3xl font-bold">Pages</h2>
              <div className="inline-block hover:pl-4 transiton-all duration-300">
                <a
                  href="/"
                  className="hover:text-Green transiton-all duration-300"
                >
                  ViewCart
                </a>
              </div>
              <div className="inline-block hover:pl-4 transiton-all duration-300">
                <a
                  href="/"
                  className="hover:text-Green transiton-all duration-300"
                >
                  Login/Signup
                </a>
              </div>
              <div className="inline-block hover:pl-4 transiton-all duration-300">
                <a
                  href="/"
                  className="hover:text-Green transiton-all duration-300"
                >
                  Contact Us
                </a>
              </div>
            </div>
            <div className="grid ">
              <h2 className="text-3xl font-bold">Categories</h2>
              <div className="inline-block hover:pl-4 transiton-all duration-300">
                <a
                  href="/"
                  className="hover:text-Green transiton-all duration-300"
                >
                  ViewCart
                </a>
              </div>
              <div className="inline-block hover:pl-4 transiton-all duration-300">
                <a
                  href="/"
                  className="hover:text-Green transiton-all duration-300"
                >
                  Login/Signup
                </a>
              </div>
              <div className="inline-block hover:pl-4 transiton-all duration-300">
                <a
                  href="/"
                  className="hover:text-Green transiton-all duration-300"
                >
                  Contact Us
                </a>
              </div>
            </div>
            <div></div>
          </div>
        </footer>
      )}
    </>
  );
};

const ClaimCard = ({ icon, title, message }) => {
  return (
    <div className="reveal bg-gray-100 rounded-lg text-lg p-4 flex items-center gap-4 justify-center max-w-xs mx-auto my-4">
      <img src={getImgUrl(icon, "icons")} alt="" className="w-20" />
      <div className="px-2">
        <h3 className="font-bold">{title}</h3>
        <p className="text-sm opacity-70">{message}</p>
      </div>
    </div>
  );
};

export default Footer;
