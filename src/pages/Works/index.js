import React, {useEffect, useState} from 'react';
import {ContainerWork, Scroll, Foot, Choose,ToolContainer, Button,CardContainer,Filter} from './styles';
import {porfolio, tools} from './data';
import {Card, Footer} from '../../components'

const Works = () => {

    const [filter, setFilter]= useState("All");
    const [projects,setProjects]=useState([]);

    useEffect(()=>{
        setProjects(porfolio)
    }, [])

    useEffect(()=>{
        setProjects([]);
        const filteredProjects = porfolio.map(work=>(
            {
            ...work,
            filtered: work.tools.includes(filter)
            }
        ))
        setProjects(filteredProjects);
    },[filter]);

    return (
       <ContainerWork>
           <Filter>
               <Choose> Filter by technology</Choose>>
               <Scroll>scroll → </Scroll>
               <ToolContainer>
               { 
                    tools.map((tool, index)=>(
                    <Button active={filter === tool} key={index} onClick={()=>setFilter(tool)}>{tool}</Button>
                    ))
               }
               </ToolContainer>
           </Filter>
           <CardContainer>
               {
                 projects.map((project, index)=> project.filtered === true ?(
                <Card
                    key={index}
                    name={project.name}
                    tools={project.tools.filter((i)=>(i !== "All")).join(" ")}
                    repo={project.repo}
                    image={project.image}
                />
                ): "")
           }
           </CardContainer>
           <Foot>
               <Footer></Footer>
           </Foot>
       </ContainerWork>
    );
};

export default Works;