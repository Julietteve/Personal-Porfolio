import React from 'react';
import{CardHolder, ProjectName, Tool, CodeBox, SeeCode, Cover, OverLayer} from './styles';
const Card = ({name,tools,repo,image}) => {
    return (

        <CardHolder>
               <Cover src={image}/>
       <OverLayer>
        <ProjectName>{name}</ProjectName>
        <Tool>{tools}</Tool>
        <CodeBox>
        <SeeCode 
        target="_blank" 
        rel="noopener noreferrer" 
        href={repo}>
            See the code
        </SeeCode>
        </CodeBox>
        </OverLayer>
    </CardHolder>
    );
};

export default Card;