import ReactDOM from 'react-dom/client'
//import FullStack2d from './FullStack2de'
import React from 'react';
//import App from './App_FullStack2'
/* Ideme to vyladit riamo s orginalnym zdojakom */
import App from './App'
import PhoneBookDB from './PhoneBookDB';
import Currency from './Currency'
import Countries from './Countries'
import Footer from './components/Footer'




    ReactDOM.createRoot(document.getElementById('root')).render(
      <><PhoneBookDB />
      <br></br>
      <div><Currency /></div>
      <br></br>
      <div> <Countries /> </div>
      <App /> 
      <br></br>
      <Footer />
      </>
    )
    





