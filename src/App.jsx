import Navigation from "./componets/nav-bar-compo"
import HomePage from "./componets/home-page"
import CardSection from "./componets/treand-films"
import HeroSection from "./componets/Feauter-films"
import BottomBar from "./componets/bottomBar"
import Recomend from "./componets/reco-compo"
import TvShow from "./componets/tv-show"
import TopRated from "./componets/top-rate"
import Fotter from "./componets/fotter"
import {Route , Routes} from 'react-router-dom'
import ErrorPage from "./componets/404"
import SearchArea from "./componets/search-area"
function HomeInterFace (){
  return(<>

  <Routes>

<Route path="/" element={<>
  <Navigation/>
    <HomePage/>
    <CardSection/>
    <HeroSection/>
    <BottomBar/>
    <Recomend/>
    <TvShow/>
    <TopRated/>
    <Fotter/></>}/>

    <Route path="/tv" element={
      <>
      <SearchArea/>
    <BottomBar/>
    </>
    } />



    <Route path="*" element={<>
      <ErrorPage/>
      </>}></Route>
 

    </Routes>
  
  </>)
}

export default HomeInterFace