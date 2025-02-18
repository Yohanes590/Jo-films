


export const RouteToTv = (userOption)=>{
    const display = document.getElementById("user-display")
    document.querySelector(".side-menu-hidden").style.width="0%"
    if(userOption=="movie"){
        display.innerText = "Movies"
    }else if(userOption == "tv-show"){
        display.innerText = "Exprole Tv Shows"
    }else if(userOption == "fav"){
        display.innerText = "Favorites"
    }else if(userOption == "live-show"){
        display.innerText = "Live Exprole"
    }else if(userOption == "upcoming"){
        display.innerText = "Exprole Upcomming Videos"
    }
}

export function gettingRoute (Route){
    console.log(Route)
   window.location=`/user-option/${Route}`
}