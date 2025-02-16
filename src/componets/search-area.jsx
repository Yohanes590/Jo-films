import '../componet-style/search-area.css'
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { MdDeleteOutline } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { use, useState } from 'react';
import { MdFavorite } from "react-icons/md";
import { CiVideoOn } from "react-icons/ci";
import { GrUpdate } from "react-icons/gr";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaPlayCircle } from "react-icons/fa";
import photoBanner from '../assets/banner5.jpg'
function SearchArea(){


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

    const [ open , setOpen ] = useState(true)
    const ChangeState = ()=>{
        if(open == true){
            setOpen(false)
            document.querySelector(".profile-information").style.height="140px"
        }else{
            setOpen(true)
            document.querySelector(".profile-information").style.height="0px"
        }
    }

    const [respo , setRespo] = useState(true)

const OpenResponcive = ()=>{
    if(respo == true){
        setRespo(false)
        document.querySelector(".side-menu-hidden").style.width="100%"
    }else{
        setRespo(true)
        document.querySelector(".side-menu-hidden").style.width="0%"
    }
}

    return(<>

           <div className="search-around">

            {/*  Hidden Menu Part */}


           <div className="side-menu-hidden">
                
                <div className="center-items">

                    <h2> - Profile Setting</h2>

                    <div className="each-center-item"><span>example@gmail.com</span></div>
                    <div className="each-center-item"><span>Favorites <MdFavorite/></span></div>
                    <div className="each-center-item"><span>LiveShow <CiVideoOn/></span></div>
                    <div className="each-center-item"><span>UpComing <GrUpdate/></span></div>
                    <div className="each-center-item"><span>Logout <CiLogout/></span></div>
                    <div className="each-center-item"><span>Delete Account <MdDeleteOutline/> </span></div>
                </div>
            </div>

            {/*  Hidden Menu Part */}

                <div className="search-nav-bar">

                    <div className="search-side">

                        <div className="search-box">
                         <div className="search-icon"><CiSearch/></div>   <input type="text" placeholder='Search ...'/><button>Search</button>
                        </div>

                    </div>


                    <div className="clint-buttons">
                        <div className="recomend"><a href="http://">Home</a></div>
                        <div className="recomend"><a href="http://">Movie</a></div>
                        <div className="recomend"><a href="http://">TvShow</a></div>
                        <div className="recomend"><a href="http://">Favorites</a></div>
                        <div className="recomend"><a href="http://">LiveShow</a></div>
                        <div className="recomend"><a href="http://">Upcoming</a></div>
                    </div>

                    <div className="profile-button">
                        <div className="profile-class" onClick={ChangeState}><CgProfile size="25"/></div>
                    </div>

                    <div className="hidden-profile-button">
                        <div className="profile-class" onClick={OpenResponcive}><CgProfile size="25"/></div>
                    </div>
                </div>



{/*Responce Section */}


            <div className="profile-information">

                <div className="button-section">
                <div className="back-button">
                <span>example@gmail.com</span>
            </div>
            <div className="back-button">
                <span>Logout <CiLogout size="20"/></span>
            </div>
            <div className="back-button">
                <span>Delete Account <MdDeleteOutline size="20"/> </span>
            </div>
                </div>


            </div>




            <div className="tv-show-header">

                   <div className="left-border"><h3>Tv Show Entertainment </h3></div> 
                   <div className="left-border"><p> Recommendations </p></div> 
            </div>


            {/* Recomended  Video Slider */}

                <div className="recomended-videos">


                        {/* Single card start */}
                      <div className="reco-card-info">


                            <div className="absolute-postion">
                                    <div className="ab-items">
                                    <h1><FaPlayCircle size="55"/></h1>
                                    <h2>Movie Title</h2>
                                    <h3>Rate</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur
                                         adipisicing elit. Similique quam soluta </p>
                                    </div>
                                </div>   
                           <div className="poster-position">
                                <img src={photoBanner} />
                            </div>                         

                        </div>  
                        {/* Single card end */}



  {/* Single card start */}
  <div className="reco-card-info">


<div className="absolute-postion">
        <div className="ab-items">
        <h1><FaPlayCircle size="55"/></h1>
        <h2>Movie Title</h2>
        <h3>Rate</h3>
        <p>Lorem ipsum dolor sit amet consectetur
             adipisicing elit. Similique quam soluta </p>
        </div>
    </div>   
<div className="poster-position">
    <img src={photoBanner} />
</div>                         

</div>  
{/* Single card end */}



  {/* Single card start */}
  <div className="reco-card-info">


<div className="absolute-postion">
        <div className="ab-items">
        <h1><FaPlayCircle size="55"/></h1>
        <h2>Movie Title</h2>
        <h3>Rate</h3>
        <p>Lorem ipsum dolor sit amet consectetur
             adipisicing elit. Similique quam soluta </p>
        </div>
    </div>   
<div className="poster-position">
    <img src={photoBanner} />
</div>                         

</div>  
{/* Single card end */}




  {/* Single card start */}
  <div className="reco-card-info">


<div className="absolute-postion">
        <div className="ab-items">
        <h1><FaPlayCircle size="55"/></h1>
        <h2>Movie Title</h2>
        <h3>Rate</h3>
        <p>Lorem ipsum dolor sit amet consectetur
             adipisicing elit. Similique quam soluta </p>
        </div>
    </div>   
<div className="poster-position">
    <img src={photoBanner} />
</div>                         

</div>  
{/* Single card end */}




  {/* Single card start */}
  <div className="reco-card-info">


<div className="absolute-postion">
        <div className="ab-items">
        <h1><FaPlayCircle size="55"/></h1>
        <h2>Movie Title</h2>
        <h3>Rate</h3>
        <p>Lorem ipsum dolor sit amet consectetur
             adipisicing elit. Similique quam soluta </p>
        </div>
    </div>   
<div className="poster-position">
    <img src={photoBanner} />
</div>                         

</div>  
{/* Single card end */}





  {/* Single card start */}
  <div className="reco-card-info">


<div className="absolute-postion">
        <div className="ab-items">
        <h1><FaPlayCircle size="55"/></h1>
        <h2>Movie Title</h2>
        <h3>Rate</h3>
        <p>Lorem ipsum dolor sit amet consectetur
             adipisicing elit. Similique quam soluta </p>
        </div>
    </div>   
<div className="poster-position">
    <img src={photoBanner} />
</div>                         

</div>  
{/* Single card end */}



  {/* Single card start */}
  <div className="reco-card-info">


<div className="absolute-postion">
        <div className="ab-items">
        <h1><FaPlayCircle size="55"/></h1>
        <h2>Movie Title</h2>
        <h3>Rate</h3>
        <p>Lorem ipsum dolor sit amet consectetur
             adipisicing elit. Similique quam soluta </p>
        </div>
    </div>   
<div className="poster-position">
    <img src={photoBanner} />
</div>                         

</div>  
{/* Single card end */}



  {/* Single card start */}
  <div className="reco-card-info">


<div className="absolute-postion">
        <div className="ab-items">
        <h1><FaPlayCircle size="55"/></h1>
        <h2>Movie Title</h2>
        <h3>Rate</h3>
        <p>Lorem ipsum dolor sit amet consectetur
             adipisicing elit. Similique quam soluta </p>
        </div>
    </div>   
<div className="poster-position">
    <img src={photoBanner} />
</div>                         

</div>  
{/* Single card end */}



  {/* Single card start */}
  <div className="reco-card-info">


<div className="absolute-postion">
        <div className="ab-items">
        <h1><FaPlayCircle size="55"/></h1>
        <h2>Movie Title</h2>
        <h3>Rate</h3>
        <p>Lorem ipsum dolor sit amet consectetur
             adipisicing elit. Similique quam soluta </p>
        </div>
    </div>   
<div className="poster-position">
    <img src={photoBanner} />
</div>                         

</div>  
{/* Single card end */}



  {/* Single card start */}
  <div className="reco-card-info">


<div className="absolute-postion">
        <div className="ab-items">
        <h1><FaPlayCircle size="55"/></h1>
        <h2>Movie Title</h2>
        <h3>Rate</h3>
        <p>Lorem ipsum dolor sit amet consectetur
             adipisicing elit. Similique quam soluta </p>
        </div>
    </div>   
<div className="poster-position">
    <img src={photoBanner} />
</div>                         

</div>  
{/* Single card end */}

                        

                </div>



           </div>



    
    </>)
}

export default SearchArea