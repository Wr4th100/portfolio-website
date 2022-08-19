import './App.css';
import Spline from '@splinetool/react-spline';
import styled from 'styled-components';
import {useState, useEffect } from 'react';
import SpacebarPic from './icons/space-bar 1.png'
import Welcome from './components/Welcome'
import HeaderImage from'./assets/roshanlogo.png'

function App() {

  const [space, setSpace] = useState(false)
  const [box, showBox] = useState(false)
  

  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.keyCode === 32) {
        setSpace(true)
        setTimeout(() => {
          showBox(true)
        } , 3000)
      }
    }
    , true)
  }, [])  

  let widthScreen = window.innerWidth
  console.log(widthScreen)
  return (
      <Wrapper >
        {widthScreen > 600 ? 
        <Spline className="spline-logo" scene="https://prod.spline.design/BIpEg0OfkNlI0WoA/scene.splinecode"/> 
        : <img src={HeaderImage} alt="Logo" className='imagelogo'/>}
        {widthScreen > 600 ?
        <Content > 
          {space ? <div><p> </p> <img src="" alt=""/> </div>: <div> 
            <p> Press Space </p> <img src={SpacebarPic} alt='spacebar' className='spacebarlogo'/> 
            </div>}  
        </Content> : null}
        {widthScreen < 600 ? <Welcome /> : box ? <Welcome /> : null}
        {widthScreen < 600 ? <div className='footer'> <p> Made with <span role='img' aria-label='heart'>❤️</span> by Roshan </p> </div> : null}
      </Wrapper>
  )}

const Wrapper = styled.div`
  
  position: relative;
  width: 100%;
  height: 100vh;
  
  .spline-logo {
    position: absolute;
    margin: 0;
    top: 0;
  }

  .imagelogo {
    position: absolute;
    margin: 0;
    top: 0;
    object-fit: contain;
    width: 100%;
  }
`
const Content = styled.div`
  position: relative;
  bottom: -80%;
  left: -3%;  

  div {
    position: absolute;
    left: 50%;
    text-align: center;
    font-family: GothamLight;
    font-size: 20px;
    color: #fff;
  }
`

export default App;
