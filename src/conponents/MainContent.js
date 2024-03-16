import React from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import mainImg from "./img/common.jpg"

const images = require.context("../ImgMain",false,/\.(png|jpe?g|svg|webp)$/)
const keys = images.keys();
const imgList = keys.map(key=>images(key))


const settings = {
    dots:true,
    infinite:true,
    speed:2000,
    slidesToShow:1,
    slidesToScroll:1,
    autoplay: true,
    autoplaySpeed: 1500

};


const Div = styled.div`
width:820px;
height:1000px;
margin:0 auto;

`
const ImgDiv = styled.div`
margin:0;
@keyframes bounce {
    0%{
        transform: translateY(-200px);
    }
    
    20%, 50%, 80%, 100% {
      
      transform: translateY(0);
    }
    40% {
     
      transform: translateY(-30px);
    }
    60% {
     
      transform: translateY(-20px);
    }
  }
animation:bounce 3s ease-in-out both;
`


const MainContent = () => {
    return (
        <div style={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            width:'100%'
        }}>

            <ImgDiv style={{margin:'100px auto'}}><img width="300px" height="300px"
                src={mainImg} alt='main'/></ImgDiv>
             <Div>
          
          <Slider {...settings}>
                  {imgList.map(img=>(
                      <div><img style={{margin:'0 10px',boxShadow:'5px 5px 5px -4.5px black',borderRadius:'20px' }} width={800} src={img} alt="cup"/></div>))}
                      
              </Slider>
          
          </Div>

        
        </div>
    );
};

export default MainContent;