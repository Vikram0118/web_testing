import React from 'react'
import {useState, useRef, useEffect} from 'react'

const Hero = () => {
    const [myname, setName] = useState(0)
    const nameRef = useRef()

    const texts = [
        'PATIENCE',
        'DISIPLINE',
        'FOCUS',
        'DEDICATION'
      ];

    useEffect(() => {
        const interval = setInterval( () => {
            setName(prevIndex => (prevIndex + 1) % texts.length) 
            nameRef.current.style.animationPlayState = "running"
        },3000);
        return () => clearInterval(interval);
}, []);

  return (
        <div className='max-w-4xl  flex grow items-end '>
            <div className='h-20 w-96 z-10 bg-white'></div>
            <div className='h-20 w-1 bg-black'></div>
            <div ref={nameRef} className="C_name text-5xl z-0">{texts[myname]}</div>
        </div>
  )
}

export default Hero