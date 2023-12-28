import Button from "../../../components/Button";

const Vet = () => {
  const { day, hour, daysArray, minutes } = updateTimes();
  return (
    <>
      <section className="py-28 px-4 bg-fontPrimary">
        <h2 className="text-3xl text-white py-4">Our Vetrinary Services</h2>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="md:col-span-3 overflow-x-auto flex gap-4">
            <div className="flex-none bg-white max-w-[250px] rounded-lg overflow-clip">
              <img
                src={require("../../../assets/images/banners/clinic.jpg")}
                alt=""
                className="h-40 w-full  object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-2xl">Vetrinary Clinics</h3>
                <p className="my-4">
                  Our veterinary clinics are equipped with state-of-the-art
                  equipment and personal. We offer animal and pet treatment and
                  surgery.
                </p>
                <Button>
                  <span>Plan a visit</span>
                  <i className="fa-solid fa-ios-forward"></i>
                </Button>
              </div>
            </div>
            <div className="flex-none bg-white max-w-[250px] rounded-lg overflow-clip">
              <img
                src={require("../../../assets/images/banners/petmart.jpg")}
                alt=""
                className="h-40 w-full  object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-2xl">Pet Mart</h3>
                <p className="my-4">
                  Visit our pet mart today and choose from our vast portfolio of
                  top-bred dogs. We're also available for consultancy
                </p>
                <Button>
                  <span>Plan a visit</span>
                  <i className="fa-solid fa-ios-forward"></i>
                </Button>
              </div>
            </div>
            <div className="flex-none bg-white max-w-[250px] rounded-lg overflow-clip">
              <img
                src={require("../../../assets/images/banners/pharmacy.jpg")}
                alt=""
                className="h-40 w-full  object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-2xl">Vetrinary Pharmacy</h3>
                <p className="my-4">
                  Purchase top quality drugs & feed from our licensed pharmacy.
                  Get all your pet's nutritional needs at one stops
                </p>
                <Button>
                  <span>Plan a visit</span>
                  <i className="fa-solid fa-ios-forward"></i>
                </Button>
              </div>
            </div>
            <div className="flex-none bg-white max-w-[250px] rounded-lg overflow-clip">
              <img
                src={require("../../../assets/images/banners/pharmacy.jpg")}
                alt=""
                className="h-40 w-full  object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-2xl">Vetrinary Pharmacy</h3>
                <p className="my-4">
                  Our veterinary clinics are equipped with state-of-the-art
                  equipment and personal. We offer animal and pet treatment and
                  surgery.
                </p>
                <Button>
                  <span>Plan a visit</span>
                  <i className="fa-solid fa-ios-forward"></i>
                </Button>
              </div>
            </div>
          </div>
          <div className="md:col-span-1 border rounded-xl p-4 text-white">
            <h4 className="font-bold text-xl my-2">Ofice Hours</h4>
            <ul>
              <li className="my-2">Monday:</li>
              <li className="my-2">Tuesday:</li>
              <li className="my-2">Wednesday:</li>
              <li className="my-2">Thurday:</li>
              <li className="my-2">Friday:</li>
            </ul>
            <div className="my-12">
              <p className="font-semibold">
                <span className="p-1 rounded text-orange-100 bg-orange-500 text-sm">
                  {daysArray[day]} {hour}:{minutes}
                </span>
              </p>
              <p className="text-3xl my-2">
                {day === 6 || (0 && 18 > hour > 8) ? (
                  <span>
                    Currently <b>Closed</b>
                  </span>
                ) : (
                  <span>
                    Currently <b>Open</b>
                  </span>
                )}
              </p>
              <a
                href="tel:+2348033919357"
                className="bg-Green p-1  font-semibold rounded-md items-center gap-2 w-fit mr-3"
              >
                Call us now
              </a>{" "}
              +2348033919357
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Vet;

const updateTimes = () => {
  const date = new Date();
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const day = date.getDay();
  const daysArray = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  //   if (hour >= 1 && hour <= 11) {
  //     greeting.innerHTML = "Good Morning";
  //   } else if (12 <= hour && hour <= 16) {
  //     greeting.innerHTML = "Good Day";
  //   } else if ((17 <= hour && hour <= 23) || hour == 0) {
  //     greeting.innerHTML = "Good Evening";
  //   } else {
  //     console.log("oops");
  //   }

  //   for (let i = 0; i < daysArray.length; i++) {
  //     if (day === i && hour < 18) {
  //       status.innerHTML = daysArray[i] + ", Currently Open";
  //       closeTime.innerHTML = "Till 6pm This Evening";
  //     } else if (day === i && hour >= 18) {
  //       status.innerHTML = daysArray[i] + ", Currently Closed";
  //       closeTime.innerHTML = "Till 6am Tomorrow";
  //     }
  //     if ((day === i && day === 6) || (day === i && day === 0)) {
  //       status.innerHTML = daysArray[i] + ", Currently Closed";
  //       closeTime.innerHTML = "Till 6am Monday";
  //     }
  //   }
  return { hour, day, daysArray, minutes };
};
