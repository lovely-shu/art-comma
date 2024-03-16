import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Div = styled.div`
    z-index:999;
    position : fixed;
    top:0;
    display:flex;
    align-items:center;
    justify-content: space-evenly;
    width:100%;
    height:70px;
    background-color:#ed6130;
    .menuList{
        display:flex;
        list-style:none;
        justify-content: space-evenly;
        width:100%;
        align-items:center;
    };
         
    h1{
    
        text-align:right;
        width:300px;
        &:hover{
            opacity:0.5;
            transition: all 0.4s ease-in-out;
        }
       #title{
        text-decoration:none;
        color:white;
       }

    }
    .menu{
        text-decoration:none;
        color:white;
        height:30px;
        text-align:center;
        line-height:2;
      
    }
    li{
        width:110px;
        height:30px;
        display:flex;
        align-items:center;
        justify-content:center;
        
        &:hover{
            transform:translateX(10px);
            opacity:0.5;
            transition: all 0.5s ease-in-out;
            }

    }

    span{
        color: #d4ed30;
    }
`

const MenuBar = () => {
    return (
        <Div className='menuContainer'>
            <h1><Link id='title'>Art<span>,</span>Studio</Link></h1>
            <ul className='menuList'>
                <li><Link className='menu'>브랜드 소개</Link></li>
                <li><Link className='menu'>연습실 안내</Link></li>
                <li><Link className='menu'>지점 안내</Link></li>
                <li><Link className='menu'>창업 & 체인 안내</Link></li>
            </ul>
        </Div>
    );
};

export default MenuBar;