//react
import { useLayoutEffect } from 'react'

//react route dom
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

//page
import CheckOutPage from './Pages/CheckOutPage';

//component
import ShoppingCart from './Components/ShoppingCart';
import Header from './Components/Header';


// Scroll to the top of the page when the location changes
function ScrollToTop() {
  const location = useLocation();

  useLayoutEffect(() => {
    // Scroll to the top of the page when the location changes
    window.scrollTo(0, 0);
  }, [location]);

  // Return null as this component doesn't render anything
  return null;
}




function App() {
  return (
    <BrowserRouter>

      <ScrollToTop />

      <Header />

      <ShoppingCart />

      <Routes>
        <Route path="/" element={(<CheckOutPage />)} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
