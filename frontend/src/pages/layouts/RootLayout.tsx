import { Outlet, useNavigate } from "react-router";

const RootLayout = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/");
  };
  return (
    <>
      <div className="p-2 flex justify-between items-center backdrop-blur fixed bg-[#A594F9] w-full z-10">
        <div className="">
          <h1
            className="text-2xl cursor-default text-[#E5D9F2] font-bold"
            onClick={clickHandler}
          >
            100xChat
          </h1>
        </div>
      </div>
      <br />
      <Outlet />
    </>
  );
};

export default RootLayout;
