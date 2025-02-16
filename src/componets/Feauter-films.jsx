import '../componet-style/feauter-films.css'
import filmPoster from '../assets/banner4.avif'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaPlayCircle } from "react-icons/fa";
import { FaCrown } from "react-icons/fa";
import { MdMovieCreation } from "react-icons/md";
function HeroSection (){
    const settings = {
        dots: true,
        infinite: true,
        speed: 600, 
        slidesToShow: 5, 
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

        <div className="feauter-section">

        

            <div className="text-banner-section">
                <center>

                <h1>Featured <span id='yellow-color'>Movies<MdMovieCreation/></span> </h1>
                <div className="line"></div>
                <h2>A Collection of <span id='yellow-color'>Block</span>busters</h2>
                </center>
            </div>



                {/* Card Start */}

            <div className="card-section-flex-part">
                
            <Slider {...settings}>

    <div className="slide slide1">
<div className="card-section">
                            <div className="film-poster">
                                <img src={filmPoster} />
                            </div>

                            <div className="discription-part">
                                <h2>Movie Title <FaCrown /></h2>
                                <h3>⭐⭐4.4⭐⭐</h3>
                                <p>discription</p>
                                <button>Watch Now <FaPlayCircle /> </button>
                            </div>
                     </div>
    </div>


    <div className="slide slide2">
<div className="card-section">
                            <div className="film-poster">
                                <img src={filmPoster} />
                            </div>

                            <div className="discription-part">
                                <h2>Movie Title <FaCrown /></h2>
                                <h3>⭐⭐4.4⭐⭐</h3>
                                <p>discription</p>
                                <button>Watch Now <FaPlayCircle /> </button>
                            </div>
                     </div>
    </div>


    <div className="slide slide3">
<div className="card-section">
                            <div className="film-poster">
                                <img src={filmPoster} />
                            </div>

                            <div className="discription-part">
                                <h2>Movie Title <FaCrown /></h2>
                                <h3>⭐⭐4.4⭐⭐</h3>
                                <p>discription</p>
                                <button>Watch Now <FaPlayCircle /> </button>
                            </div>
                     </div>
    </div>


    <div className="slide slide4">
<div className="card-section">
                            <div className="film-poster">
                                <img src={filmPoster} />
                            </div>

                            <div className="discription-part">
                                <h2>Movie Title <FaCrown /></h2>
                                <h3>⭐⭐4.4⭐⭐</h3>
                                <p>discription</p>
                                <button>Watch Now <FaPlayCircle /> </button>
                            </div>
                     </div>
    </div>

    
    <div className="slide slide5">
<div className="card-section">
                            <div className="film-poster">
                                <img src={filmPoster} />
                            </div>

                            <div className="discription-part">
                                <h2>Movie Title <FaCrown /></h2>
                                <h3>⭐⭐4.4⭐⭐</h3>
                                <p>discription</p>
                                <button>Watch Now <FaPlayCircle /> </button>
                            </div>
                     </div>
    </div>

  </Slider>


            </div>


        </div>
    
    </>)
}

export default HeroSection