import "../componet-style/nav-bar.css"
import { MdOutlineMenuOpen , MdClose } from "react-icons/md";
import { useState } from "react";
import '../scripts/nav-bar'
import { nav_animation } from "../scripts/nav-bar";
import { RouteToTv ,gettingRoute } from '../scripts/route-script.js'
function Navigation(){
    nav_animation()
    const [openMenu , setOpen] = useState(true)
    const openHiddenMenu = ()=>{
         if(openMenu == true){
        setOpen(false)
            document.querySelector(".hidden-side-menu").style.width="100%"
         }else{
        setOpen(true)
            document.querySelector(".hidden-side-menu").style.width="0%"
         }
    }
    return(<>
    
    <div className="navigation-bar">
        
        <div className="logo">
            <h1>Jo <span id="red-color">Films</span></h1>
        </div>

        <div className="ancers">
            <a onClick={()=>{gettingRoute("home")}}>Home</a>
            <a onClick={()=>{gettingRoute("tv-show")}}>Tv</a>
            <a onClick={()=>{gettingRoute("movie")}}>Movie</a>
            <a onClick={()=>{gettingRoute("upcoming")}}>Search</a>
        </div>

        <div className="buttons">
            <button>Sign In</button>
            <button>Sign Up</button>
        </div>

        <div id="hidden-menu-display" onClick={openHiddenMenu} className="hidden-menu-icon">
        <MdOutlineMenuOpen size={40}/>
        </div>

    </div>

    <div className="hidden-side-menu">
        
            <div className="component">

            <div className="ancers">
            <a >Home</a><br/><br/>
            <a >Tv</a><br/><br/>
            <a >Movie</a><br/><br/>
            <a >Search</a><br/><br/>
            </div>


            <div className="buttons">
            <button>Sign In</button><br/>
            <button>Sign Up</button><br/>
            </div>
            </div>



    </div>
    
    </>)
}

export default Navigation