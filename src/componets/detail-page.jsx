import '../componet-style/detail-page.css'
import filmPoster from '../assets/banner5.jpg'
import { MdFavorite } from "react-icons/md";
import ProfilPic  from '../assets/prodfile.webp'
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { FaCalendarCheck } from "react-icons/fa";
import { RiEnglishInput } from "react-icons/ri";
import thePoster from '../assets/banner6.avif'
function DetailPage(){
    return(<>

        <div className="detail-page">


            <div className="flex-poster">


                {/* Film Poster start here */}

                <div className="film-poster">

                    <div className="poster-photo">
                        <img src={filmPoster}  />
                    </div>
                


                    <div className="poster-title">
                        <h1>Film Title</h1> 
                        <p>simple paragraph here</p>
                        <div className="period">
                            <h3><MdOutlineAccessTimeFilled size="25"/></h3>
                            <h3><FaCalendarCheck size="25"/></h3>
                            <h3><RiEnglishInput size="25"/></h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur 
                            adipisicing elit. Ducimus, iure? Odit </p>

                            <div className="middel-bar">
                                
                            <label> Action</label>
                                <label> Horror</label>
                                <label> Romance</label>
                                <label> SinceFiction</label>
                            </div>

                            <div className="option-buttons">
                                <button id='watch-now'>WATCH NOW</button>
                                <button id='trailer'>TRAILER</button>
                    <button id='fav-icon'><MdFavorite/></button>

                             </div><br/><br/>
                    </div>




                </div>

                {/* Film Poster end here */}



                <div className="actors-information">

                    <div className="actors-profile-picture">

                        <div className="profile-heder"><h2>Actors</h2></div><br/>

                    {/* Looped Area start */}

                            <div className="profile-button">
                            <div className="profile"><img src={ProfilPic} /></div> 
                            <div className="actor-info">
                                <h3>Some Name Of Shit</h3>
                                <p>lavi</p></div>
                                
                                </div>


                                
                            <div className="profile-button">
                            <div className="profile"><img src={ProfilPic} /></div> 
                            <div className="actor-info">
                                <h3>Some Name Of Shit</h3>
                                <p>lavi</p></div>
                                
                                </div>


                                
                            <div className="profile-button">
                            <div className="profile"><img src={ProfilPic} /></div> 
                            <div className="actor-info">
                                <h3>Some Name Of Shit</h3>
                                <p>lavi</p></div>
                                
                                </div>


                                
                            <div className="profile-button">
                            <div className="profile"><img src={ProfilPic} /></div> 
                            <div className="actor-info">
                                <h3>Some Name Of Shit</h3>
                                <p>lavi</p></div>
                                
                                </div>


                                
                            <div className="profile-button">
                            <div className="profile"><img src={ProfilPic} /></div> 
                            <div className="actor-info">
                                <h3>Some Name Of Shit</h3>
                                <p>lavi</p></div>
                                
                                </div>


                                
                            <div className="profile-button">
                            <div className="profile"><img src={ProfilPic} /></div> 
                            <div className="actor-info">
                                <h3>Some Name Of Shit</h3>
                                <p>lavi</p></div>
                                
                                </div>



                                
                            <div className="profile-button">
                            <div className="profile"><img src={ProfilPic} /></div> 
                            <div className="actor-info">
                                <h3>Some Name Of Shit</h3>
                                <p>lavi</p></div>
                                
                                </div>



                                
                            <div className="profile-button">
                            <div className="profile"><img src={ProfilPic} /></div> 
                            <div className="actor-info">
                                <h3>Some Name Of Shit</h3>
                                <p>lavi</p></div>
                                
                                </div>
                    {/* Looped Area start */}

                            
   

                    </div>

                </div>


            </div>


{/* Recomend */}


                <div className="recomendation">

                <div className="heder"><h2>Recomended</h2></div>


                    <div className="flex-recomended">

                {/* Looped Box Start Here! */}
                        <div className="reco-box-one">

                                    <div className="reco-poster-pic"><img src={thePoster} /></div>
                                    <div className="reco-title">
                                        <h3>The Move Title</h3>
                                        <p>Some Movie Paragraph</p>
                                        <p>Rate ⭐⭐⭐</p>
                                    </div>

                        </div>
                        




                        <div className="reco-box-one">

                                    <div className="reco-poster-pic"><img src={thePoster} /></div>
                                    <div className="reco-title">
                                        <h3>The Move Title</h3>
                                        <p>Some Movie Paragraph</p>
                                        <p>Rate ⭐⭐⭐</p>
                                    </div>

                        </div>




                        


                        <div className="reco-box-one">

<div className="reco-poster-pic"><img src={thePoster} /></div>
<div className="reco-title">
    <h3>The Move Title</h3>
    <p>Some Movie Paragraph</p>
    <p>Rate ⭐⭐⭐</p>
</div>

</div>






<div className="reco-box-one">

<div className="reco-poster-pic"><img src={thePoster} /></div>
<div className="reco-title">
    <h3>The Move Title</h3>
    <p>Some Movie Paragraph</p>
    <p>Rate ⭐⭐⭐</p>
</div>

</div>





<div className="reco-box-one">

<div className="reco-poster-pic"><img src={thePoster} /></div>
<div className="reco-title">
    <h3>The Move Title</h3>
    <p>Some Movie Paragraph</p>
    <p>Rate ⭐⭐⭐</p>
</div>

</div>



<div className="reco-box-one">

<div className="reco-poster-pic"><img src={thePoster} /></div>
<div className="reco-title">
    <h3>The Move Title</h3>
    <p>Some Movie Paragraph</p>
    <p>Rate ⭐⭐⭐</p>
</div>

</div>


                        
                {/* Looped Box End Here! */}


                    </div>


                </div>

        </div>
    
    
    </>)
}

export default DetailPage