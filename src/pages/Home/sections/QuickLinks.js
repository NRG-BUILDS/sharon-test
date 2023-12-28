const QuickLinks = () => {
  return (
    <section className="py-28 px-2">
      <h2 className="text-3xl my-4">Quickly Jump Into...</h2>
      <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-4">
        <div className="rounded-lg px-10 p-12 max-w-xs flex items-center bg-orange-400 text-white">
          <div>
            <span className="block text-Green text-2xl">Our</span>
            <h2 className="text-3xl">Vetinary and Pet Services</h2>
          </div>
        </div>
        <div className="rounded-lg px-10 p-12 max-w-xs flex items-center bg-Green text-white">
          <div>
            <span className="block text-orange-400 text-lg">Our</span>
            <h2 className="text-3xl">Agribusiness & Consultation Services</h2>
          </div>
        </div>
        <div className="rounded-lg px-10 p-12 max-w-xs flex items-center bg-gray-200 text-white">
          <div>
            <span className="block text-Green text-2xl">Our</span>
            <h2 className="text-3xl text-fontPrimary">
              Poultry Production & Medicare Services
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
