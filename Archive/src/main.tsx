import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

//import tailwind css
import './index.css'

//Redux
import { Provider } from 'react-redux'
import { store } from './Redux/store'

//shopping cart
import { CartProvider } from './Context/ShoppingCartContext.tsx'

//motion
import { AnimatePresence } from 'framer-motion'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <CartProvider>
        <AnimatePresence>
          <App />
        </AnimatePresence>
      </CartProvider>
    </Provider>
  </React.StrictMode>,
)
