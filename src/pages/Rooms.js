import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import { auth } from "../firbase";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChalkboardTeacher, faAdd } from "@fortawesome/free-solid-svg-icons";

function Rooms() {
  const user = auth.currentUser;
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      return navigate("/403", { replace: true });
    }
  }, []);

  return (
    <div className="h-screen">
      <NavBar />
      <div className="flex justify-between pt-24">
        <div className="bg-gray-200/25 flex flex-col flex-[0.2] gap-5 p-5 h-screen max-h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-yellow-500 scrollbar-track-gray-200 scrollbar-thumb-rounded-full">
          <div className="flex flex-col ites-center justify-center gap-2 bg-gray-200 rounded-lg px-2 py-6 text-center shadow-md cursor-pointer hover:bg-gray-300">
            <FontAwesomeIcon
              icon={faChalkboardTeacher}
              className="text-[25px]"
            />
            01
          </div>
          <div className="flex flex-col ites-center justify-center gap-2 bg-gray-200 rounded-lg px-2 py-6 text-center shadow-md cursor-pointer hover:bg-gray-300">
            <FontAwesomeIcon
              icon={faChalkboardTeacher}
              className="text-[25px]"
            />
            02
          </div>
          <div className="flex flex-col ites-center justify-center gap-2 bg-gray-200 rounded-lg px-2 py-6 text-center shadow-md cursor-pointer hover:bg-gray-300">
            <FontAwesomeIcon
              icon={faChalkboardTeacher}
              className="text-[25px]"
            />
            02
          </div>
          <div className="flex flex-col ites-center justify-center gap-2 bg-gray-200 rounded-lg px-2 py-6 text-center shadow-md cursor-pointer hover:bg-gray-300">
            <FontAwesomeIcon
              icon={faChalkboardTeacher}
              className="text-[25px]"
            />
            02
          </div>
          <div className="flex flex-col ites-center justify-center gap-2 bg-yellow-500 text-white rounded-lg px-2 py-6 text-center shadow-md cursor-pointer hover:bg-yellow-500/25 hover:text-yellow-500 hover:shadow-yellow-500/25 transition-all ease-in-out duration-200">
            <FontAwesomeIcon icon={faAdd} className="text-[25px]" />
          </div>
        </div>
        <div>CHAT GOES HERE</div>
        <div className="bg-gray-200/25 flex flex-col flex-[0.2] gap-5 p-5 h-screen max-h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-yellow-500 scrollbar-track-gray-200 scrollbar-thumb-rounded-full">
          <div className="flex flex-col ites-center justify-center gap-2 bg-gray-200 rounded-lg px-2 py-6 text-center shadow-md cursor-pointer hover:bg-gray-300">
            <FontAwesomeIcon
              icon={faChalkboardTeacher}
              className="text-[25px]"
            />
            01
          </div>
          <div className="flex flex-col ites-center justify-center gap-2 bg-yellow-500 text-white rounded-lg px-2 py-6 text-center shadow-md cursor-pointer hover:bg-yellow-500/25 hover:text-yellow-500 hover:shadow-yellow-500/25 transition-all ease-in-out duration-200">
            <FontAwesomeIcon icon={faAdd} className="text-[25px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rooms;
