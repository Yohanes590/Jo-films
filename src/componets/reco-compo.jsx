import '../componet-style/reco-style.css'
import poster from '../assets/banner7.avif'
import { FaPlayCircle } from "react-icons/fa";
import { FaPager } from "react-icons/fa";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaCrown } from "react-icons/fa";
const Recomend = ()=>{
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
    
    <div className="recomened">



    <div className="reco-line">
        <div className="left-line">
            <h2>Recomended <FaPager/></h2>
                <h3>For You Page </h3>
            </div>
    </div>


            <div className="recomended-card">


        

                <div className="reco-card">
                <div className="poster">
                    <img src={poster}  />
                </div>
                <div className="dscription">
                    <h3>Movie Name <FaCrown/></h3>
                    <p>Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. 
                         perferendis, </p>
                         <button>Watch Now <FaPlayCircle/></button>
                </div>
                </div>
 

            
                <div className="reco-card">

                <div className="poster">
                    <img src={poster}  />
                </div>
                <div className="dscription">
                    <h3>Movie Name <FaCrown/></h3>
                    <p>Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. 
                         perferendis, </p>
                         <button>Watch Now <FaPlayCircle/></button>
                </div>
                </div>
 

 
                <div className="reco-card">

                <div className="poster">
                    <img src={poster}  />
                </div>
                <div className="dscription">
                    <h3>Movie Name <FaCrown/></h3>
                    <p>Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. 
                         perferendis, </p>
                         <button>Watch Now <FaPlayCircle/></button>
                </div>
                </div>
 

 
                <div className="reco-card">

                <div className="poster">
                    <img src={poster}  />
                </div>
                <div className="dscription">
                    <h3>Movie Name <FaCrown/></h3>
                    <p>Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. 
                         perferendis, </p>
                         <button>Watch Now <FaPlayCircle/></button>
                </div>
                </div>
 

 
                <div className="reco-card">

                <div className="poster">
                    <img src={poster}  />
                </div>
                <div className="dscription">
                    <h3>Movie Name <FaCrown/></h3>
                    <p>Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. 
                         perferendis, </p>
                         <button>Watch Now <FaPlayCircle/></button>
                </div>
                </div>
 

 
                <div className="reco-card">

                <div className="poster">
                    <img src={poster}  />
                </div>
                <div className="dscription">
                    <h3>Movie Name <FaCrown/></h3>
                    <p>Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. 
                         perferendis, </p>
                         <button>Watch Now <FaPlayCircle/></button>
                </div>
                </div>
        

        
                <div className="reco-card">

                <div className="poster">
                    <img src={poster}  />
                </div>
                <div className="dscription">
                    <h3>Movie Name <FaCrown/></h3>
                    <p>Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. 
                         perferendis, </p>
                         <button>Watch Now <FaPlayCircle/></button>
                </div>
                </div>
 

 
                <div className="reco-card">

                <div className="poster">
                    <img src={poster}  />
                </div>
                <div className="dscription">
                    <h3>Movie Name <FaCrown/></h3>
                    <p>Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. 
                         perferendis, </p>
                         <button>Watch Now <FaPlayCircle/></button>
                </div>
                </div>
 

 
                <div className="reco-card">

                <div className="poster">
                    <img src={poster}  />
                </div>
                <div className="dscription">
                    <h3>Movie Name <FaCrown/></h3>
                    <p>Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. 
                         perferendis, </p>
                         <button>Watch Now <FaPlayCircle/></button>
                </div>
                </div>
            </div>
            </div>

    
    </>)
}

export default Recomend