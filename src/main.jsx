import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import * as App from './App.jsx'

import NavBar from './components/NavBar'
import Footer from './components/Footer'






const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
<HashRouter>
	<NavBar />
    <Routes>
		<Route path="/" element={<App.Index />} />
		<Route path="/*" element={<App.NotFound />} />
		<Route path="/about-us" element={<App.AboutUs />} />

		<Route path="/roof-claims" element={<App.RoofClaims />} />
		<Route path="/residential-roof" element={<App.ResidentialRoof />} />
		<Route path="/commercial-roof" element={<App.CommercialRoof />} />
		<Route path="/rain-gutters-and-painting-services" element={<App.RainGuttersAndPaintingServices />} />

		<Route path="/roofing-products" element={<App.RoofingProducts />} />
		<Route path="/our-vendors" element={<App.OurVendors />} />
		<Route path="/blog" element={<App.Blog />} />
		<Route path="/reviews" element={<App.Reviews />} />
		<Route path="/contact-us" element={<App.ContactUs />} />
    </Routes>
	<Footer />
</HashRouter>
)
