import "../componet-style/tv-style.css"
import { FaTv } from "react-icons/fa";
import { FaGripLines } from "react-icons/fa";
import image from '../assets/banner3.jpg'
import { FaPlayCircle } from "react-icons/fa";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
function TvShow (){
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
    
            <div className="tv-show-componet">

                <div className="header-part">
                <h2>Tv Show <FaTv/></h2>
                <h3>Tv Programs Entertainment <FaGripLines/></h3>
                </div>

                    

                    <div className="tv-show-cards">


                    <Slider {...settings}>

                    <div className="slide slide1">
                          {/*  card part end */}
                          <div className="each-tv-card">
                                        <div className="image">
                                                <div className="absoute-button" id="absoute-button">
                                                <FaPlayCircle size="35"/>
                                                </div>
                                                <img src={image} alt="" />
                                        </div>


                                <div className="tv-discription">
                                        <h3>Movie Title</h3>
                                      <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        Tenetur quaerat delectus cum veritatis eveniet maiores </p>
                                        <p id="rate">3.4</p>
                                        <button>Watch Now <FaPlayCircle /></button>
                                </div>
                            </div>
                              {/*  card part end */}
                        </div>        



                        <div className="slide slide2">
                          {/*  card part end */}
                          <div className="each-tv-card">
                                        <div className="image">
                                                <div className="absoute-button" id="absoute-button">
                                                <FaPlayCircle size="35"/>
                                                </div>
                                                <img src={image} alt="" />
                                        </div>


                                <div className="tv-discription">
                                        <h3>Movie Title</h3>
                                      <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        Tenetur quaerat delectus cum veritatis eveniet maiores </p>
                                        <p id="rate">3.4</p>
                                        <button>Watch Now <FaPlayCircle /></button>
                                </div>
                            </div>
                              {/*  card part end */}
                        </div>   




                        <div className="slide slide3">
                          {/*  card part end */}
                          <div className="each-tv-card">
                                        <div className="image">
                                                <div className="absoute-button" id="absoute-button">
                                                <FaPlayCircle size="35"/>
                                                </div>
                                                <img src={image} alt="" />
                                        </div>


                                <div className="tv-discription">
                                        <h3>Movie Title</h3>
                                      <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        Tenetur quaerat delectus cum veritatis eveniet maiores </p>
                                        <p id="rate">3.4</p>
                                        <button>Watch Now <FaPlayCircle /></button>
                                </div>
                            </div>
                              {/*  card part end */}
                        </div>   




                        <div className="slide slide4">
                          {/*  card part end */}
                          <div className="each-tv-card">
                                        <div className="image">
                                                <div className="absoute-button" id="absoute-button">
                                                <FaPlayCircle size="35"/>
                                                </div>
                                                <img src={image} alt="" />
                                        </div>


                                <div className="tv-discription">
                                        <h3>Movie Title</h3>
                                      <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        Tenetur quaerat delectus cum veritatis eveniet maiores </p>
                                        <p id="rate">3.4</p>
                                        <button>Watch Now <FaPlayCircle /></button>
                                </div>
                            </div>
                              {/*  card part end */}
                        </div>   




                           </Slider>

                    </div>


            </div>
    
    </>)
}

export default TvShow