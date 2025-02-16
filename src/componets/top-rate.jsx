import '../componet-style/topRated.css'
import { FaCertificate } from "react-icons/fa6";
import posterOne from '../assets/banner6.avif'
import { FaCirclePlay } from "react-icons/fa6";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
function TopRated (){
    const settings = {
        dots: true,
        infinite: true,
        speed: 600, 
        slidesToShow: 3, 
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
    
            <div className="topRated-place">

            <center>
                <div className="topRated-header">
                    <h2><FaCertificate/> Top Rated</h2>
                    <div className="line"></div>
                    <h3>Movies Box Office</h3>
                </div>
            </center>


            <div className="top-rated-card">


<Slider {...settings}>
                {/*Card Start Here!*/}

                <div className="slide slide1">
                <div className="each-rate-card">

                    <div className="play-button">
                <div className="detail-page">
                    <center>
                    <FaCirclePlay size="40"/>
                    <h2>Movie Tile</h2>
                    <h3>3.5</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur 
                        adipisicing elit. Harum architecto alias </p>
                    </center>
                </div>
                    </div>
                    
                    <div className="movie-poster">
                        <img src={posterOne}/>
                    </div>

                </div>
                </div>
                {/*Card End Here!*/}




                {/*Card Start Here!*/}

                <div className="slide slide1">
                <div className="each-rate-card">

                    <div className="play-button">
                <div className="detail-page">
                    <center>
                    <FaCirclePlay size="40"/>
                    <h2>Movie Tile</h2>
                    <h3>3.5</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur 
                        adipisicing elit. Harum architecto alias </p>
                    </center>
                </div>
                    </div>
                    
                    <div className="movie-poster">
                        <img src={posterOne}/>
                    </div>

                </div>
                </div>
                {/*Card End Here!*/}





                                {/*Card Start Here!*/}

                                <div className="slide slide1">
                <div className="each-rate-card">

                    <div className="play-button">
                <div className="detail-page">
                    <center>
                    <FaCirclePlay size="40"/>
                    <h2>Movie Tile</h2>
                    <h3>3.5</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur 
                        adipisicing elit. Harum architecto alias </p>
                    </center>
                </div>
                    </div>
                    
                    <div className="movie-poster">
                        <img src={posterOne}/>
                    </div>

                </div>
                </div>
                {/*Card End Here!*/}





                                {/*Card Start Here!*/}

                                <div className="slide slide1">
                <div className="each-rate-card">

                    <div className="play-button">
                <div className="detail-page">
                    <center>
                    <FaCirclePlay size="40"/>
                    <h2>Movie Tile</h2>
                    <h3>3.5</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur 
                        adipisicing elit. Harum architecto alias </p>
                    </center>
                </div>
                    </div>
                    
                    <div className="movie-poster">
                        <img src={posterOne}/>
                    </div>

                </div>
                </div>
                {/*Card End Here!*/}

                </Slider>
            </div>



            </div>
    
    </>)
}

export default TopRated
