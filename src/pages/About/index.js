import React from 'react';
import {quotes} from './data';
import {} from './styles'

const About = () => {

    const quote = quotes[Math.floor(Math.random() * quotes.length)]
    return (
        <div>
           {quote}
        </div>
    );
};

export default About;