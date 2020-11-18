import React,{useEffect,useState} from 'react';
import {NavBar, SideBar} from '../../components/index';
import {MainContainer, Section } from './styles';
import {Loader} from '../../components';

const Main = ({section}) => {

    const [loaded, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(()=>{
        setTimeout(() => {
            setLoading(true)
        }, 2000);

    },[])

    const toggle = () =>{
        setIsOpen(!isOpen)
    }

    return (
       <div>
           {
               !loaded ? <Loader></Loader> :
              <div>
                   <SideBar isOpen={isOpen} toggle={toggle}></SideBar>
               <MainContainer>
                    <NavBar></NavBar>
                    <Section>
                            {section}
                    </Section>
               </MainContainer>
               </div> 
           }
       </div>
    );
};

export default Main;