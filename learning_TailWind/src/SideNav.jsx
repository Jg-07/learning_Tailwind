import React from "react";
import { FaPython,FaDiscord } from "react-icons/fa";
import { DiCodeigniter } from "react-icons/di";
import { BsPlus,BsFillLightningFill } from "react-icons/bs";


const SideNav = () => {
    return(
        <div className=" fixed top-0 left-0 h-screen w-16 m-0 pt-2
        flex flex-col shadow-lg items-center text-white bg-gray-900">
            <SideBarLogo icon={<FaDiscord size="32"/>} />
            <hr className=" border-gray-800 w-8 border-t-2 rounded-md m-2"/>
            <SideBarIcon icon= {<DiCodeigniter size='30'/>} />
            <SideBarIcon icon= {<BsPlus size='35'/>} />
            <SideBarIcon icon= {<FaPython size='30'/>} />
            <SideBarIcon icon= {<BsFillLightningFill size='30'/>}/>
        </div>
    );
};

const SideBarIcon = (props) =>{
    return(
        <div className="sidebar-icon">
            {props.icon}
        </div>
    );
}

const SideBarLogo = (props) =>{
    return(
        <div className="sidebar-logo">
            {props.icon}
        </div>
    );
}

export default SideNav