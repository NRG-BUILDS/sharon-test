const Loader = ({ message = "Loading..." }) => {
  return (
    <>
      <div className="w-full h-full flex items-center justify-center">
        <div>
          <div className="loader animate-spin w-20 h-20 mx-auto rounded-full border-2 border-t-gray-400"></div>
          <span className="block my-6">{message}</span>
        </div>
      </div>
    </>
  );
};

export default Loader;
