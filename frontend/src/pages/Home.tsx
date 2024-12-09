import HomeImage from "../assets/homeImage.svg";
const Home = () => {
  return (
    <>
      <div className=" h-screen relative">
        <div className="p-5 flex items-center h-full">
          <div>
            <h1 className="text-[#756AB6] text-2xl">
              Stay{" "}
              <span className="text-[#433878] font-bold text-4xl">
                Connected
              </span>{" "}
              Effortlessly.
            </h1>
            <h3 className="text-[#756AB6]">Chat anytime anywhare</h3>
            <button>Sign in</button>
          </div>
        </div>
        <div className="h-96 absolute bottom-10 right-0">
          <img className="h-full" alt="HomeImage" src={HomeImage} />
        </div>
      </div>
    </>
  );
};
export default Home;
