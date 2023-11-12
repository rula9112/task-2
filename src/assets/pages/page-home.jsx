import Futuers from "../component/Feutures/Futuers"
import Power from "../component/POWER/Power"
import CustomerLove from "../component/custumerLove/CustomerLove"
import Different from "../component/different/Different"
import Footer from "../component/footer/Footer"
import Hero from "../component/hero/Hero"
import MyNavbar from "../component/navbar/MyNavbar"
import NewArrivals from "../component/new Arrivals/NewArrivals"

export default function  Home (){
    return(
        <>
      <Hero />
      <Different />
      <Power />
      <Futuers />
      <NewArrivals />
      <CustomerLove />
      <Footer />
        </>
    )
}