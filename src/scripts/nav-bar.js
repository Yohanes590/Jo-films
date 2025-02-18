export function nav_animation (){
   setTimeout(() => {
      document.querySelector('.navigation-bar').style.display="flex"
   }, 5000);
   addEventListener('scroll',()=>{
      const Yaxis = scrollY
      if(Yaxis > 145){
         document.querySelector('.navigation-bar').style.backdropFilter="blur(10px)"
      }else{
         document.querySelector('.navigation-bar').style.backdropFilter="blur(0px)"
      }
   })
}
