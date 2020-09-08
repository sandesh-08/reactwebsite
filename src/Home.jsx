import React from 'react';
import web from '../src/images/img2.svg'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import Common from './Common';


const Home = () =>{
    return(
        <>
            <Common 
            name='Grow your business with ' 
            imgsrc={web} 
            visit="/services" 
            btnname="Get Started"
            />
        </>
    );
};
export default Home;