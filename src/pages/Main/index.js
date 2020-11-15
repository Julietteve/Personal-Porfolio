import React,{useEffect,useState} from 'react';
import {NavBar} from '../../components/index';
import {MainContainer, Section } from './styles';
import {Loader} from '../../components';

const Main = ({section}) => {

    const [loaded, setLoading] = useState(false);

    useEffect(()=>{
        setTimeout(() => {
            setLoading(true)
        }, 2000);

    },[])

    return (
       <div>
           {
               !loaded ? <Loader></Loader> :
               <MainContainer>
                    <NavBar></NavBar>
                    <Section>
                            {section}
                    </Section>
               </MainContainer>

           }
       </div>
    );
};

export default Main;