import React from 'react';
import {ContainerWork, Card, OverLayer,SeeCode, Cover, Tool, ProjectName, CodeBox} from './styles';
import {proyects} from './data';

const Works = () => {
    return (
       <ContainerWork>
           {
            proyects.map((proyect, index)=>(
                <Card key={index}>
                 <Cover src={proyect.image}/>
                <OverLayer>
                    <ProjectName>{proyect.name}</ProjectName>
                    <Tool>{proyect.tools}</Tool>
                    <CodeBox>
                    <SeeCode 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    href={proyect.repo}>
                        {`<Code/>`}
                    </SeeCode>
                    </CodeBox>
                </OverLayer>
            </Card>
    ))
           }
       </ContainerWork>
    );
};

export default Works;