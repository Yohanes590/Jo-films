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
import '../scripts/route-script'
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

    return(<>

           <div className="search-around">

            {/*  Hidden Menu Part */}


         



            <div className="tv-show-header">

                   <div className="left-border"><h3 id='user-display'> </h3></div> 
                   <div className="left-border"><p> Exporle Videos For Free </p></div> 

                   
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