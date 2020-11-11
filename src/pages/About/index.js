import React, {useState} from 'react';
import {quotes} from './data';
import {AboutBack,AboutFront} from '../../components'
import Split from 'react-split'
import {} from './styles';
import './stylesheet.css';

const About = () => {

    const [quote, setQuote]=useState( "Technology, like art, is a soaring exercise of the human imagination",);

    const handleQuote =()=>{
        setQuote( quotes[Math.floor(Math.random() * quotes.length)]);
    }

   
    return (
            <Split
                style={{display:"flex"}}
                sizes={[50, 50]}
                minSize={450,450}
                expandToMin={false}
                gutterSize={5}
                gutterAlign="center"
                snapOffset={30}
                dragInterval={1}
                direction="horizontal"
                cursor="col-resize"
            >
                <AboutFront
                quote={quote}
                onClick={handleQuote}
                ></AboutFront>
                <AboutBack></AboutBack>
                
            </Split>
    );
};

export default About;