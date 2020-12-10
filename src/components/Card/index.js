import React from 'react';
import{CardHolder, ProjectName, Tool, CodeBox, SeeCode, Cover, OverLayer, CodeContainer} from './styles';
const Card = ({name,tools,repo,image}) => {
    return (

        <CardHolder>
               <Cover src={image}/>
       <OverLayer>

           <CodeContainer>
                <ProjectName>{name}</ProjectName>
                <Tool>{tools}</Tool>
                <CodeBox>
                <SeeCode 
                target="_blank" 
                rel="noopener noreferrer" 
                href={repo}>
                    Watch me here
                </SeeCode>
                </CodeBox>
           </CodeContainer>
       
        </OverLayer>
    </CardHolder>
    );
};

export default Card;