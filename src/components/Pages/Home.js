import { Button } from '@material-ui/core'
import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import './Main.css';

import mainImg from "./Devp.png";

function Home() {
  
    return (
        <>
        <div className="main">
            <Header/>
            <div className="container">
                <div className="description">
                    <h1 className="heading">A Resume Builder that Makes Life Easier</h1>
                    <p className="para">Create nothing but the best with us.</p>
                    <Link style={{textDecoration:'none'}} to="/form">
                    <Button className="create">Create Resume</Button>
                    </Link>
                </div>
                <div className="img-container">
                    <img className = "rezi" src={mainImg} alt="picture"/>
                </div>
            </div> 
            <Footer/>              
        </div>
        </>
    )
}

export default Home