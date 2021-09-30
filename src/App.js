import React, { useState, useEffect, useRef, Fragment } from 'react';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Switch,
  Route} from "react-router-dom";
import Home from './components/Pages/Home';

import jsonData from './data.json';
import { useReactToPrint } from 'react-to-print';
import Form from './components/Form';
import Resume from './components/Resume';

const App = () => {
  const [data, setData] = useState();
  const [preset, setPreset] = useState([
    { primary: '#009688', background: '#ebf5f4', skills: '#e5f4f3' },
    { primary: '#2196f3', background: '#e8f4fe', skills: '#e2f2ff' },
    { primary: '#263238', background: '#f0f0f0', skills: '#e0e0e0' },
    { primary: '#3f51b5', background: '#ebedf7', skills: '#e1e3f8' },
  ]);

  const [color, setColor] = useState({
    primary: '#009688',
    background: '#e5f4f3',
    skills: '#e5f4f3',
  });

  useEffect(() => {
    setData(jsonData);
  }, []);

  const printRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });

  return (
    <div className='mainContent'>
        <BrowserRouter>
          <Switch>
          <Route path="/" component={Home} exact />

            <Route path='/form'>
              {data !== undefined && (
                <>
                  <div className='left'>
                    <Form data={data} setData={setData} preset={preset} setColor={setColor} />
                  </div>

                  <div className='right'>
                    <Resume ref={printRef} data={data} color={color} />
                  </div>

                  <button className='printBtn' onClick={handlePrint}>
                    Download CV
                  </button>
                </>
              )}
            </Route>

          </Switch>
        </BrowserRouter>
    </div>
  );
};

export default App;

