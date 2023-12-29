import { useState } from "react";

const Checkout = ({ setModal }) => {
  const [form, setForm] = useState({
    name: null,
    email: null,
    state: null,
    town: null,
  });
  const [statePicked, setState] = useState(null);
  const handleInput = (e, field) => {
    setForm({ ...form, [field]: e.target.value });
  };
  const getTownsForState = (stateArray, stateName) => {
    const stateObject = stateArray.find((stateObj) => stateName in stateObj);
    return stateObject ? stateObject[stateName] : null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <section className="w-screen h-screen z-50 bg-black flex justify-center items-end md:justify-end md:items-center md:p-8 bg-opacity-50 fixed top-0 left-0">
      <div className="relative w-10/12 max-w-[400px] h-[95%] max-h-[1200px]">
        <div className="absolute w-12 h-12 rounded-full -top-6 -right-6 md:top-0 md:-left-14 text-white bg-black bg-opacity-50">
          <button
            onClick={() => setModal(false)}
            className="w-full h-full flex items-center justify-center"
          >
            <i className="fa-solid fa-close text-2xl"></i>
          </button>
        </div>
        <div className="bg-white h-full overflow-y-auto rounded-t-xl md:rounded-xl p-4  ">
          <h2 className="text-3xl mb-4">Order Information</h2>

          <div className="">
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="mb-2">
                <label htmlFor="f_name" className="my-1">
                  Name
                </label>
                <input
                  type="text"
                  required
                  onChange={(e) => {
                    handleInput(e, "name");
                  }}
                  className="w-full border border-gray-300 p-4 rounded-md outline-none focus:border-orange-400 hover:border-Green transition-all"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="f_name" className="my-1">
                  Email
                </label>
                <input
                  type="email"
                  required
                  onChange={(e) => {
                    handleInput(e, "email");
                  }}
                  className="w-full border border-gray-300 p-4 rounded-md outline-none focus:border-orange-400 hover:border-Green transition-all"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="f_name" className="my-1">
                  State
                </label>
                <select
                  required
                  onChange={(e) => {
                    handleInput(e, "state");
                    setState(e.target.value);
                  }}
                  className="w-full border border-gray-300 p-4 rounded-md outline-none focus:border-orange-400 hover:border-Green transition-all"
                >
                  {nigeriaStates.map((state) => (
                    <option>{state}</option>
                  ))}
                </select>
              </div>
              {statePicked && (
                <div className="mb-2">
                  <label htmlFor="f_name" className="my-1">
                    Town/City
                  </label>
                  <select
                    required
                    value={form.town}
                    onChange={(e) => {
                      handleInput(e, "town");
                    }}
                    className="w-full border border-gray-300 p-4 rounded-md outline-none focus:border-orange-400 hover:border-Green transition-all"
                  >
                    {getTownsForState(nigeriaTowns, statePicked).map((town) => (
                      <option value={town}>{town}</option>
                    ))}
                  </select>
                </div>
              )}
              <div className="mt-12">
                <button
                  type="submit"
                  className="w-full block py-3 bg-black text-white font-semibold rounded-md hover:bg-Green active:bg-orange-400"
                >
                  Order Now
                </button>
              </div>
              <div className="grid grid-cols-3 items-center px-4 my-6">
                <div className="border-t border-orange-200 h-0"></div>
                <p className="text-center">or</p>
                <div className="border-t border-orange-200 h-0"></div>
              </div>

              <button
                type="submit"
                className="w-1/2 mx-auto block py-2 text-white text-sm font-semibold rounded bg-Green active:bg-orange-400"
              >
                Order via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;

const nigeriaTowns = [
  {
    Abia: [
      "Select town",
      "Umuahia",
      "Aba",
      "Ohafia",
      "Arochukwu",
      "Isiala Ngwa",
      "Bende",
    ],
  },
  {
    Adamawa: [
      "Select town",
      "Yola",
      "Jimeta",
      "Mubi",
      "Numan",
      "Ganye",
      "Hong",
    ],
  },
  {
    "Akwa Ibom": [
      "Select town",
      "Uyo",
      "Eket",
      "Ikot Ekpene",
      "Oron",
      "Abak",
      "Itu",
    ],
  },
  {
    Anambra: [
      "Select town",
      "Awka",
      "Onitsha",
      "Nnewi",
      "Ekwulobia",
      "Agulu",
      "Ozubulu",
    ],
  },
  {
    Bauchi: [
      "Select town",
      "Bauchi",
      "Azare",
      "Misau",
      "Jama'are",
      "Katagum",
      "Dass",
    ],
  },
  {
    Bayelsa: [
      "Select town",
      "Yenagoa",
      "Brass",
      "Ogbia",
      "Nembe",
      "Sagbama",
      "Ekeremor",
    ],
  },
  {
    Benue: [
      "Select town",
      "Makurdi",
      "Gboko",
      "Katsina-Ala",
      "Otukpo",
      "Adikpo",
      "Agatu",
    ],
  },
  {
    Borno: [
      "Select town",
      "Maiduguri",
      "Jere",
      "Biur",
      "Monguno",
      "Bama",
      "Dikwa",
    ],
  },
  {
    "Cross River": [
      "Select town",
      "Calabar",
      "Ugep",
      "Ogoja",
      "Ikom",
      "Obudu",
      "Boki",
    ],
  },
  {
    Delta: [
      "Select town",
      "Asaba",
      "Warri",
      "Sapele",
      "Ughelli",
      "Agbor",
      "Abraka",
    ],
  },
  {
    Ebonyi: [
      "Select town",
      "Abakaliki",
      "Afikpo",
      "Onueke",
      "Ishieke",
      "Ohaozara",
      "Ezza",
    ],
  },
  {
    Edo: [
      "Select town",
      "Benin City",
      "Auchi",
      "Uromi",
      "Ikpoba Hill",
      "Igueben",
      "Ekpoma",
    ],
  },
  {
    Ekiti: [
      "Select town",
      "Ado-Ekiti",
      "Ikere-Ekiti",
      "Oye-Ekiti",
      "Ijero Ekiti",
      "Emure Ekiti",
      "Ikole Ekiti",
    ],
  },
  {
    Enugu: [
      "Select town",
      "Enugu",
      "Nsukka",
      "Agbani",
      "Awgu",
      "Oji River",
      "Nkanu",
    ],
  },
  {
    Gombe: [
      "Select town",
      "Gombe",
      "Dukku",
      "Kumo",
      "Yamaltu/Deba",
      "Funakaye",
      "Kaltungo",
    ],
  },
  {
    Imo: [
      "Select town",
      "Owerri",
      "Okigwe",
      "Orlu",
      "Mgbidi",
      "Nkwerre",
      "Oguta",
    ],
  },
  {
    Jigawa: [
      "Select town",
      "Dutse",
      "Hadejia",
      "Birnin Kudu",
      "Gumel",
      "Kazaure",
      "Malammadori",
    ],
  },
  {
    Kaduna: [
      "Select town",
      "Kaduna",
      "Zaria",
      "Kafanchan",
      "Sabon Gari",
      "Sanga",
      "Jema'a",
    ],
  },
  {
    Kano: ["Select town", "Kano", "Katsina", "Daura", "Gaya", "Rano", "Bichi"],
  },
  {
    Katsina: [
      "Select town",
      "Katsina",
      "Funtua",
      "Daura",
      "Dutsin-Ma",
      "Kankia",
      "Malumfashi",
    ],
  },
  {
    Kebbi: [
      "Select town",
      "Birnin Kebbi",
      "Argungu",
      "Yauri",
      "Zuru",
      "Dandi",
      "Koko/Besse",
    ],
  },
  {
    Kogi: [
      "Select town",
      "Lokoja",
      "Anyigba",
      "Okene",
      "Idah",
      "Ibaji",
      "Dekina",
    ],
  },
  {
    Kwara: [
      "Select town",
      "Ilorin",
      "Offa",
      "Share",
      "Omu-Aran",
      "Irepodun",
      "Kaiama",
    ],
  },
  {
    Lagos: [
      "Select town",
      "Lagos Island",
      "Ikeja",
      "Badagry",
      "Epe",
      "Ikorodu",
      "Agege",
    ],
  },
  {
    Nasarawa: [
      "Select town",
      "Lafia",
      "Keffi",
      "Akwanga",
      "Nasarawa",
      "Karu",
      "Obi",
    ],
  },
  {
    Niger: [
      "Select town",
      "Minna",
      "Bida",
      "Suleja",
      "Kontagora",
      "Lapai",
      "Agaie",
    ],
  },
  {
    Ogun: [
      "Select town",
      "Abeokuta",
      "Ijebu-Ode",
      "Sagamu",
      "Ilaro",
      "Ota",
      "Ifo",
    ],
  },
  {
    Ondo: [
      "Select town",
      "Akure",
      "Ondo",
      "Owo",
      "Okitipupa",
      "Irele",
      "Akoko",
    ],
  },
  {
    Osun: ["Select town", "Osogbo", "Ile-Ife", "Ede", "Ilesa", "Ikire", "Iwo"],
  },
  {
    Oyo: [
      "Select town",
      "Ibadan",
      "Ogbomoso",
      "Iseyin",
      "Eruwa",
      "Saki",
      "Okeho",
    ],
  },
  {
    Plateau: [
      "Select town",
      "Jos",
      "Bukuru",
      "Shendam",
      "Langtang",
      "Pankshin",
      "Barkin Ladi",
    ],
  },
  {
    Rivers: [
      "Select town",
      "Port Harcourt",
      "Bonny",
      "Degema",
      "Ikwerre",
      "Khana",
      "Oyigbo",
    ],
  },
  {
    Sokoto: [
      "Select town",
      "Sokoto",
      "Tambuwal",
      "Wurno",
      "Kware",
      "Bodinga",
      "Silame",
    ],
  },
  {
    Taraba: [
      "Select town",
      "Jalingo",
      "Bali",
      "Serti",
      "Gashaka",
      "Kurmi",
      "Zing",
    ],
  },
  {
    Yobe: [
      "Select town",
      "Damaturu",
      "Nguru",
      "Gashua",
      "Geidam",
      "Buni Yadi",
      "Machina",
    ],
  },
  {
    Zamfara: [
      "Select town",
      "Gusau",
      "Tsafe",
      "Anka",
      "Talata Mafara",
      "Maru",
      "Bakura",
    ],
  },
];

const nigeriaStates = [
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
];
