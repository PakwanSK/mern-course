import React from 'react'
import { Provider } from "@/components/ui/provider"
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Navbar from "./component/Navbar";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
      <Navbar />
        <App />
      
      
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
