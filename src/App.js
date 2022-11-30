import "@fontsource/montserrat";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { SignUp } from "./Components/Pages/Auth/SignUp";
import { Count } from "./Components/Pages/FeaturesPage/Count/Count";
import Goods from "./Components/Pages/FeaturesPage/Goods/Goods";
import Packing from "./Components/Pages/FeaturesPage/Packing/Packing";
import Relocation from "./Components/Pages/FeaturesPage/Relocation/Relocation";
import TaxRay from "./Components/Pages/FeaturesPage/TaxRay/TaxRay";
import HomePage from "./Components/Pages/HomePage/HomePage";
import FAQ from "./Components/Pages/LearnPage/FAQ/FAQ";
import MyProfile from "./Components/Pages/MyProfile/MyProfile";
import OurPrice from "./Components/Pages/PricesPage/OurPrice/OurPrice";
import RateCalculator from "./Components/Pages/PricesPage/RateCalculator/RateCalculator";
import { Res } from "./Components/Pages/ShipNow/Res";
import ShipNow from "./Components/Pages/ShipNow/ShipNow";
import Footer from "./Components/Shared/Footer/Footer";
import Navbar from "./Components/Shared/Navbar/Navbar";
function App() {
  const queryClient = new QueryClient()
  const [dta, setDta] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setDta(data))
  }, [])
  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ fontFamily: 'Montserrat, sans-serif' }} >

        <h1>This is Data {dta.length}</h1>
        {/* ============== DATA  */}
        <div>
          {
            dta.map(da => <div>
              <h1>userId id :{da?.userId}</h1>
              <h1>{da?.title}</h1>
              <p>{da?.body}</p>
            </div>)
          }
        </div>



        {/* <Navbar  ></Navbar>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ourPrices" element={<OurPrice />} />
          <Route path="/rateCalculator" element={<RateCalculator />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/dashboard" element={<MyProfile />} />
          <Route path="/packing" element={<Packing />} />
          <Route path="/taxray" element={<TaxRay />} />
          <Route path="/dangerousgoods" element={<Goods />} />
          <Route path="/relocation" element={<Relocation />} />
          <Route path="/count/:id" element={<Count />} />
          <Route path="/shipnow" element={<ShipNow />} />
          <Route path="/signin" element={<SignUp />} />
          <Route path="/res" element={<Res />} />
        </Routes>
        <Footer></Footer> */}
      </div>
    </QueryClientProvider>
  );
}

export default App;