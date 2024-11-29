import { ModeToggle } from "@/components/mode-toggle";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <>
      <div className="p-4 flex justify-between items-center backdrop-blur fixed w-full ">
        <div className="">
          <h1 className="text-xl font-semibold cursor-default">100xChat</h1>
        </div>
        <div>
          <ModeToggle />
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default RootLayout;
