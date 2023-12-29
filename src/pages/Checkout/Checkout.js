import { useState } from "react";

const Checkout = () => {
  const [form, setForm] = useState({
    name: null,
    email: null,
    state: null,
    town: null,
  });
  const [statePicked, setState] = useState(null);
  const handleInput = (e, field) => {
    setForm({ ...form, [field]: e.target.value });
    console.log(form);
  };
  const handleSubmit = () => {
    return;
  };
  return (
    <section className="w-screen h-screen z-20 bg-black flex justify-center bg-opacity-50 fixed top-0 left-0">
      <div className="bg-white w-11/12 rounded-t-xl md:rounded-xl p-4 absolute bottom-0  ">
        <h2 className="text-3xl mb-4">Order Information</h2>

        <div className="">
          <form onSubmit={() => handleSubmit()}>
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
                  onChange={(e) => {
                    handleInput(e, "town");
                  }}
                  className="w-full border border-gray-300 p-4 rounded-md outline-none focus:border-orange-400 hover:border-Green transition-all"
                >
                  {() => {
                    for (let i in nigeriaTowns) {
                      if (Object.keys(nigeriaTowns[i])[0] === statePicked) {
                        return <option>{nigeriaTowns[i][0]}</option>;
                      }
                    }
                  }}
                </select>
              </div>
            )}
            <div className="mt-12">
              <button className="w-full block py-3 bg-black text-white font-semibold rounded-md hover:bg-Green active:bg-orange-400">
                Order Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Checkout;

const nigeriaTowns = [
  { Abia: ["Umuahia", "Aba", "Ohafia", "Arochukwu", "Isiala Ngwa", "Bende"] },
  { Adamawa: ["Yola", "Jimeta", "Mubi", "Numan", "Ganye", "Hong"] },
  { "Akwa Ibom": ["Uyo", "Eket", "Ikot Ekpene", "Oron", "Abak", "Itu"] },
  { Anambra: ["Awka", "Onitsha", "Nnewi", "Ekwulobia", "Agulu", "Ozubulu"] },
  { Bauchi: ["Bauchi", "Azare", "Misau", "Jama'are", "Katagum", "Dass"] },
  { Bayelsa: ["Yenagoa", "Brass", "Ogbia", "Nembe", "Sagbama", "Ekeremor"] },
  { Benue: ["Makurdi", "Gboko", "Katsina-Ala", "Otukpo", "Adikpo", "Agatu"] },
  { Borno: ["Maiduguri", "Jere", "Biur", "Monguno", "Bama", "Dikwa"] },
  { "Cross River": ["Calabar", "Ugep", "Ogoja", "Ikom", "Obudu", "Boki"] },
  { Delta: ["Asaba", "Warri", "Sapele", "Ughelli", "Agbor", "Abraka"] },
  { Ebonyi: ["Abakaliki", "Afikpo", "Onueke", "Ishieke", "Ohaozara", "Ezza"] },
  { Edo: ["Benin City", "Auchi", "Uromi", "Ikpoba Hill", "Igueben", "Ekpoma"] },
  {
    Ekiti: [
      "Ado-Ekiti",
      "Ikere-Ekiti",
      "Oye-Ekiti",
      "Ijero Ekiti",
      "Emure Ekiti",
      "Ikole Ekiti",
    ],
  },
  { Enugu: ["Enugu", "Nsukka", "Agbani", "Awgu", "Oji River", "Nkanu"] },
  { Gombe: ["Gombe", "Dukku", "Kumo", "Yamaltu/Deba", "Funakaye", "Kaltungo"] },
  { Imo: ["Owerri", "Okigwe", "Orlu", "Mgbidi", "Nkwerre", "Oguta"] },
  {
    Jigawa: [
      "Dutse",
      "Hadejia",
      "Birnin Kudu",
      "Gumel",
      "Kazaure",
      "Malammadori",
    ],
  },
  { Kaduna: ["Kaduna", "Zaria", "Kafanchan", "Sabon Gari", "Sanga", "Jema'a"] },
  { Kano: ["Kano", "Katsina", "Daura", "Gaya", "Rano", "Bichi"] },
  {
    Katsina: [
      "Katsina",
      "Funtua",
      "Daura",
      "Dutsin-Ma",
      "Kankia",
      "Malumfashi",
    ],
  },
  {
    Kebbi: ["Birnin Kebbi", "Argungu", "Yauri", "Zuru", "Dandi", "Koko/Besse"],
  },
  { Kogi: ["Lokoja", "Anyigba", "Okene", "Idah", "Ibaji", "Dekina"] },
  { Kwara: ["Ilorin", "Offa", "Share", "Omu-Aran", "Irepodun", "Kaiama"] },
  { Lagos: ["Lagos Island", "Ikeja", "Badagry", "Epe", "Ikorodu", "Agege"] },
  { Nasarawa: ["Lafia", "Keffi", "Akwanga", "Nasarawa", "Karu", "Obi"] },
  { Niger: ["Minna", "Bida", "Suleja", "Kontagora", "Lapai", "Agaie"] },
  { Ogun: ["Abeokuta", "Ijebu-Ode", "Sagamu", "Ilaro", "Ota", "Ifo"] },
  { Ondo: ["Akure", "Ondo", "Owo", "Okitipupa", "Irele", "Akoko"] },
  { Osun: ["Osogbo", "Ile-Ife", "Ede", "Ilesa", "Ikire", "Iwo"] },
  { Oyo: ["Ibadan", "Ogbomoso", "Iseyin", "Eruwa", "Saki", "Okeho"] },
  {
    Plateau: [
      "Jos",
      "Bukuru",
      "Shendam",
      "Langtang",
      "Pankshin",
      "Barkin Ladi",
    ],
  },
  {
    Rivers: ["Port Harcourt", "Bonny", "Degema", "Ikwerre", "Khana", "Oyigbo"],
  },
  { Sokoto: ["Sokoto", "Tambuwal", "Wurno", "Kware", "Bodinga", "Silame"] },
  { Taraba: ["Jalingo", "Bali", "Serti", "Gashaka", "Kurmi", "Zing"] },
  { Yobe: ["Damaturu", "Nguru", "Gashua", "Geidam", "Buni Yadi", "Machina"] },
  { Zamfara: ["Gusau", "Tsafe", "Anka", "Talata Mafara", "Maru", "Bakura"] },
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
