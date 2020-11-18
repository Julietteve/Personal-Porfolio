import React from 'react';
import {MdMenu} from 'react-icons/md'
import {Container, Icon} from './styles';

const MobileNav = ({toggle, color, iconColor}) => {
    return (
        <Container color={color} >
            <Icon onClick={toggle} iconColor={iconColor}>
               <MdMenu/>
            </Icon>
        </Container>
    );
};

export default MobileNav;