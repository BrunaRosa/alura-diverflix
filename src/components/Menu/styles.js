import styled from 'styled-components' ;
import Button from '../Button' ;

export const LogoImage = styled.img`
    max-width: 168px;
    
    @media (max-width: 800px) {
        max-width: 105px;
    }
`;

export const MenuWrapper = styled.nav`
    height: 94px;
    width: 100%;
    z-index: 100;

    top:0;
    left:0;
    padding-left: 5%;
    padding-right: 5%;
    position: fixed;
    
    align-items: center;
    display: flex;
    justify-content: space-between;

    background-color: var(--black);
    border-bottom: 2px solid var(--primary);

    @media( max-width: 800px) {
        height: 40px;
        justify-content: center;
    }
`;

export const ButtonLink = styled(Button)`
    border: 1px solid var(--white);
    border-radius: 4px;
    color: var(--white);
    font-size: 16px;
    font-weight: bold;
    padding: 16px 24px;
    text-decoration: none;
    transition: opacity .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
    
    @media( max-width: 800px) {
        border: 0;
        border-radius: 0;
        bottom: 0;
        background-color: var(--primary);
        color: var(--white);
        left: 0;
        right: 0;
        outline: 0;
        position: fixed;
        text-align: center;
    }   
`;
