import '../componet-style/card-style.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import poseter1 from '../assets/banner2.jpg'
import poseter2 from '../assets/banner3.jpg'
import poseter3 from '../assets/banner5.jpg'
import { FaCirclePlay } from "react-icons/fa6";
function CardSection (){
    const settings = {
        dots: true,
        infinite: true,
        speed: 600, 
        slidesToShow: 4, 
        slidesToScroll: 1, 
        centerMode:true,
        centerPadding:"0px",
        responsive: [
            {
              breakpoint: 1024, 
              settings: {
                slidesToShow: 2,
                centerMode: true,
              },
            },
            {
              breakpoint: 768, 
              settings: {
                slidesToShow: 1, 
                centerMode: false, 
              },
            },
          ],
          autoplay: true, 
          autoplaySpeed: 1500,
      };
    
    return(<>

    <div className="back-banner">
    <center>
      <h1>Trean<span id='light-blue'>ding</span></h1>
<div className="line"></div>
<h2><span id='light-blue' >Mov</span>ies</h2>
</center>


    <div className="carding-section">


            <div className="felx-card-section">

            <Slider {...settings}>

            <div className="slide slide1">
{/*  glass cart */}

                    <div className="each-card">
                            <div className="movi-photo">
                              
                                <img src={poseter2}  />
                            
                            </div>
                                    <div className="movi-info">
                                    <h3>Movie Title</h3>
                                    <h3>⭐ 8.5/10</h3>
                                    
                                    <button>Watch Now <FaCirclePlay /></button>
                                    </div>
                        </div> 
                        
{/*  glass cart */}                   
            </div>
         
        

            <div className="slide slide1">
{/*  glass cart */}

                    <div className="each-card">
                            <div className="movi-photo">
                              
                                <img src={poseter3}  />
                                
                            </div>
                                    <div className="movi-info">
                                    <h3>Movie Title</h3>
                                    <h3>⭐ 8.5/10</h3>
                                    
                                    <button>Watch Now <FaCirclePlay /></button>
                                    </div>
                        </div> 
                        
{/*  glass cart */}                   
            </div>
         


         

            <div className="slide slide1">
{/*  glass cart */}

                    <div className="each-card">
                            <div className="movi-photo">
                                <img src={poseter1}  />
                            </div>
                                    <div className="movi-info">
                                    <h3>Movie Title</h3>
                                    <h3>⭐ 8.5/10</h3>
                                    
                                    <button>Watch Now <FaCirclePlay /></button>
                                    </div>
                        </div> 
                        
{/*  glass cart */}                   
            </div>
         


            <div className="slide slide1">
{/*  glass cart */}

                    <div className="each-card">
                            <div className="movi-photo">
                                <img src={poseter3}  />
                            </div>
                                    <div className="movi-info">
                                    <h3>Movie Title</h3>
                                    <h3>⭐ 8.5/10</h3>
                                    
                                    <button>Watch Now <FaCirclePlay /></button>
                                    </div>
                        </div>
                        
{/*  glass cart */}                   
            </div>





      </Slider>


            </div>


    </div>
    </div>
    </>)
}

export default CardSection