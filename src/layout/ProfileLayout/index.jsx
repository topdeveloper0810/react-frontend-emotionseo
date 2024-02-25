import { Outlet } from "react-router-dom";

// import page part.
import Navbar from "./Navbar";

const ProfileLayout = () => {
  return (
    <div
      className=" flex flex-col justify-center items-center bg-[#171B1F] min-h-[100vh] relative "
      style={{
        backgroundColor: "#217cfd",
        backgroundImage:
          "linear-gradient(193deg, #217cfd 0%, #B721FF 50%, #e60b8c 100%)",
      }}
    >
      <Navbar />
      <div className="p-8 ">
        <Outlet />
      </div>
    </div>
  );
};

export default ProfileLayout;
