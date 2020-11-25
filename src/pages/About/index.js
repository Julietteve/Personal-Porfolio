import React, {useState} from 'react';
import {quotes} from './data';
import {AboutBack,AboutFront,Footer} from '../../components';
import {Container, Foot} from './styles';

const About = () => {
    
        const [quote, setQuote]=useState({
            quote:  "Technology, like art, is a soaring exercise of the human imagination",
            author: "Daniel Bell"
        });

    const handleQuote =()=>{
        setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }

    return (
        <Container>
            <AboutFront
            quote={quote.quote}
            author={quote.author}
            onClick={handleQuote}
            />
            <AboutBack/> 
            <Foot>
               <Footer></Footer>
                  </Foot>
        </Container>
    );
};

export default About;