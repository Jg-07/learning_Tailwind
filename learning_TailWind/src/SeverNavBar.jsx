import React from "react";

const SeverNavBar = () => {
    return(
        <div className="fixed z-[-1] top-0 left-16 w-60 h-screen
         bg-gray-800 text-white font-bold flex flex-col
         ">
             <NavHeader/>
        </div>
    );
};

const NavHeader = () => {
    return(
        <div className="sever-head">
            Channels
        </div>
    );
}

export default SeverNavBar