import React from 'react';
import MenuBar from './MenuBar';
import styled from 'styled-components';

import MainContent from './MainContent';

const Div= styled.div`
margin:0;
@keyframes fadeInUp {
    0% {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
animation:fadeInUp 1s
`

const MainHome = () => {
    return (
       <Div>
       <MenuBar/>
       <div style={{marginTop:"30px"}}>
       <MainContent/>
        </div>
       </Div>
    );
};

export default MainHome;