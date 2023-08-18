import { styled } from "styled-components";

export const Items = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
    width: 48%;
    @media screen and (max-width: 1200px) {
        width: 80%;
    }
`
export const Item = styled.div`
    width: 30%;
    height: auto;
    text-align: center;
    margin-top: 10%;
    font-size: 20px;
    &  img{
        border-radius: 20px;
        display: inline-block;
        width: 50%;
        height: auto;
        box-shadow: 3px 3px 6px 3px #0000008c;
        transition: 0.5s;
        &:hover{
            transform: translateY(-10px);
        }
    }
`
export const Menus = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around; 
    margin: 20px 0 60px;
`


export const Menu = styled.div`
    border-bottom: 1px solid black;
    display: flex;
    width: calc(50% - 50px);
    height: auto;
    align-items: center;
    margin-top: 20px;

    @media screen and (max-width: 1200px) {
        width: 95%;
    }

    & img{
        mix-blend-mode: darken;
        width: 30%;
    }
`