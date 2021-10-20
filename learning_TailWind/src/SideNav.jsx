import React from "react";
import { FaPython,FaDiscord } from "react-icons/fa";
import { DiCodeigniter } from "react-icons/di";
import { BsPlus,BsFillLightningFill } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";


const SideNav = () => {
    return(
        <div className=" fixed top-0 left-0 h-screen w-16 m-0 pt-2
        flex flex-col shadow-lg items-center text-white bg-gray-900">
            <SideBarLogo icon={<FaDiscord size="32"/>} />
            <hr className=" border-gray-700 w-8 border-t-2 rounded-md m-2"/>
            <SideBarIcon icon= {<DiCodeigniter size='30'/>} text="FireShip 🔥"/>
            <SideBarIcon icon= {<FaPython size='30'/>} text="Py-Community 🐍"/>
            <SideBarIcon icon= {<BsPlus size='35'/>} text="Join Sever 🤝"/>
            <SideBarIcon icon= {<BsFillLightningFill size='30'/>} text="Boost-Up ⚡️"/>
            <hr className=" border-gray-700 w-8 border-t-2 rounded-md m-2"/>
            <SideBarIcon icon= {<IoMdSettings size='30'/>} text="Settings ⚙️"/>
        </div>
    );
};

const SideBarIcon = ({icon, text}) =>{
    return(
        <div className="sidebar-icon group">
            {icon}

            <span className="sidebar-tooltip group-hover:scale-100">
                {text}
            </span>
        </div>
    );
}

const SideBarLogo = ({icon ,text ='Home'}) =>{
    return(
        <div className="sidebar-logo group">
            {icon}

            <span className="sidebar-tooltip group-hover:scale-100">
                {text}
            </span>
        </div>
    );
}

export default SideNav