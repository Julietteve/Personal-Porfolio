import React, {useState} from 'react';
import {quotes} from './data';
import {AboutBack,AboutFront} from '../../components'
import Split from 'react-split';
import './stylesheet.css';

const About = () => {
    
        const [quote, setQuote]=useState({
            quote:  "Technology, like art, is a soaring exercise of the human imagination",
            author: "Daniel Bell"
        });

    const handleQuote =()=>{
        setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }

    return (
            <Split
                style={{display:"flex"}}
                sizes={[50,50]}
                minSize={520,520}
                expandToMin={false}
                gutterSize={5}
                gutterAlign="center"
                snapOffset={30}
                dragInterval={1}
                direction="horizontal"
                cursor="col-resize"
            >
                <AboutFront
                quote={quote.quote}
                author={quote.author}
                onClick={handleQuote}
                />
                <AboutBack/> 
            </Split>
    );
};

export default About;