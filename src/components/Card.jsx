import React from 'react';
import '../styles/stylesCard.css'
import {motion} from 'framer-motion/dist/framer-motion';


export default function Card({max,min,name,img,onClose,id}) {
  // acá va tu código
  return (
    
  <motion.div
  drag
  animate={{
    y:20,
    
    opacity:1
  }}
  initial={{
    opacity:0.1
  }}
  transition={{
    type:"spring",
    stiffess:60
  }}
  whileHover={{
    scale:1.05
  }}
  whileTap={{
    scale:0.8
  }}
  
  className='cositas'
  
  
  >
    <div className='parte1'>
  
    <h2 className='h2'>{name}</h2>
    
    <div className='contentBoton'>
    <button className='boton' onClick={()=>onClose(id)}>x</button></div>
    </div>
    <div className='content'>

    <div className='MinMax'>
    <h5 >Temp Min</h5>
    <h5>{min }</h5>
    <h5>Temp Max</h5>
    <h5>{max }</h5>
    </div>
    <div className='contentImg'>
      <img className='img' src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="cosas" />
    </div>
    </div>
  </motion.div>
  
    )
};

