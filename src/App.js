import Head from './header';
import Mainbody from './main';
import SwitchCurrency from './Currency';
import React, {useState, useEffect} from 'react';
import Foot from './footer';
import Detail from './detail';
import { BrowserRouter as Router, Routes, Route, json } from "react-router-dom";



function App() {

  const [productstate, setProductstate] = useState([]);
  const [selects, setSelect]=useState();

  const [zmw, setzmw] = useState([]);
  const [gbp, setgbp] = useState([]);
  const [jpy, setjpy] = useState([]);
  const [eur, seteur] = useState([]);

  var myHeaders = new Headers();
  myHeaders.append("apikey", "4FPMh75TkOTwd0mJ43Eotucw5dh7fNZt");

  var requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  };

  useEffect(() => {
    fetch(
      "https://api.apilayer.com/exchangerates_data/latest?symbols=ZMW,GBP,JPY,EUR&base=USD",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setzmw(Object.values(result.rates)[0]);
        setgbp(Object.values(result.rates)[1]);
        setjpy(Object.values(result.rates)[2]);
        seteur(Object.values(result.rates)[3]);
      })
      .catch((error) => console.log("error", error));
  }, []);




  useEffect(() => {
    fetch(`https://fakestoreapi.com/products?limit=10`)
      .then((response) => response.json())
      .then((json) => setProductstate(json));
  }, []);


 


  return (
    <div className="App">
      <Router>
        <Routes>
              <Route path='/' element={<><Head/><SwitchCurrency 
              select={selects} setSelect={setSelect}/><Mainbody 
              productstate ={productstate} setProductstate = {setProductstate}
              selects={selects} zmw={zmw} gbp={gbp} jpy={jpy} eur={eur}/> </>}/>
              <Route path='/detail/:id' element={<><Detail selects={selects} 
                      zmw={zmw} gbp={gbp} jpy={jpy} eur={eur}/> </>} />
        </Routes>
      </Router>
      <Foot/>
    </div>
  );
}

export default App;

// <Head/>
//             <SwitchCurrency/>
//             <Mainbody/>