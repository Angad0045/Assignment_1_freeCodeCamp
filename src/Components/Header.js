import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "../Utilise/firebase";
import { UserAuth } from "../Context/AuthContext";

const Header = () => {
  const Navigate = useNavigate();

  const { logOut, user } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
      Navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-[#0A0A23] w-screen flex flex-grow justify-between items-center py-1">
      <div className="relative hidden xl:inline-flex text-gray-400 ml-3 w-20 items-center">
        {/* LHS_Search_Box */}
        <MagnifyingGlassIcon className="absolute  h-5 left-1" />
        <input
          className="bg-[#3B3B4F] pl-7 pr-48 md:pr-24 text-lg"
          type="text"
          placeholder="Search8,000+tutorials"
        />
      </div>

      {/* Middle_Logo */}
      <div className="ml-2 xl:ml-0 cursor-pointer">
        <img
          className="w-52"
          src="https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg"
          alt="Logo"
        />
      </div>

      <div className="space-x-3 mr-3 font-bold">
        {/* RHS_Buttons */}
        <button className="relative hidden md:inline-flex text-white px-2 py-1 bg-transparent border-2 border-white hover:bg-white hover:text-[#0A0A23]">
          Menu
        </button>

        {user ? (
          <button
            onClick={handleSignOut}
            className="px-2 py-1 mr-2 md:mr-0 bg-gradient-to-b from-yellow-300 to-yellow-400 border-2 border-yellow-500 hover:from-yellow-400 hover:to-yellow-500"
          >
            Sign Out
          </button>
        ) : (
          <button
            onClick={() => Navigate("signup")}
            className="px-2 py-1 mr-2 md:mr-0 bg-gradient-to-b from-yellow-300 to-yellow-400 border-2 border-yellow-500 hover:from-yellow-400 hover:to-yellow-500"
          >
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
