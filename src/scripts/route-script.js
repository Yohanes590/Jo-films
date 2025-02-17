const display = document.getElementById("user-display")
export const RouteToTv = (userOption)=>{
    if(userOption=="movie"){
        display.innerText = "Movies"
    }else if(userOption == "tv-show"){
        display.innerText = "Exprole Tv Shows"
    }else if(userOption == "fav"){
        display.innerText = "Favorites"
    }else if(userOption == "live-show"){
        display.innerText = "Live Exprole"
    }else if(userOption == "upcoming"){
        display.innerText = "Exprole Upcomming Videos "
    }
}