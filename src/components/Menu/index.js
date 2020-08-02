import React from 'react';
import Logo from '../../assets/img/Logo.png';
import  { LogoImage, MenuWrapper,ButtonLink} from './styles.js'

function Menu() {
    return (
        <MenuWrapper className="Menu">
            <a href="/" >
                <LogoImage src={Logo} alt="DiverFlix logo"/>
            </a>

            <ButtonLink as="a" className="ButtonLink" href="/">
                Novo vídeo
            </ButtonLink>
        </MenuWrapper>
    );
}

export default Menu;