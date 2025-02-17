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
import SignUp from "./componets/sign-up"
import SignIn from "./componets/sign-in"
import DetailPage from "./componets/detail-page"
import AccountNav from "./componets/account-nav"
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

    <Route path="/sign-up" element={<>
        <SignUp/>
    </>}/>

    <Route path="/sign-in" element={<>
        <SignIn/>
    </>}/>


    <Route path="/detail" element={<>
      <AccountNav/>
      <DetailPage/>
    <BottomBar/>
    </>}/>

    <Route path="/user-option" element={
      <>
      <AccountNav/>
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