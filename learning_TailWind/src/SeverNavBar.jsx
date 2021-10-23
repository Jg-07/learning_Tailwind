import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { FaPlus } from "react-icons/fa";

const topics = ['tailwind-css','react','python']
const questions = ['react-dom','jit']
const random = ['memes','quiz']


const SeverNavBar = () => {
    return(
        <div className="sever-nav-bar">
             <span className="sever-head">Channels</span>
             <NavContent headText={"Topics"} selections={topics}/>
             <NavContent headText={"Questions"} selections={questions}/>
             <NavContent headText={"Random"} selections={random}/>
        </div>
    );
};

const NavContent = ({headText,selections}) => {
    const [expanded,setExpanded] = useState(true);

    return(
        <div className="nav-content">
            <div onClick ={() => setExpanded(!expanded)} className=" flex">
                <MdKeyboardArrowRight size='28' />
                <span className="head-text">
                {headText}
                </span>
            </div>
            <span className="pr-4"><FaPlus size="14"/></span>
        </div>
    );
}

export default SeverNavBar