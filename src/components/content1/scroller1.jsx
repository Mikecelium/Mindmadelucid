import React, { useEffect, useState, useRef } from 'react'
import Content1 from './content1';




const Scroller1 = () => {

    const [visible, setVisible] = useState(false)
    const scroller1Ref = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY; //Pixels scrolled from top currently
            // const element = document.getElementsByClassName('scroller1')[0];
            const element = scroller1Ref.current
            const elementPosition = element.offsetTop; //Elements y position of top border (relative to closest ancestor)

            if ((scrollPosition >= elementPosition - window.innerHeight) && (scrollPosition <= elementPosition)) {
                setVisible(true)
            } else {
                setVisible(false)
            }   
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            // Clean up the event listener when the component unmounts
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    const divStyle = {
        backgroundColor: 'white',
        width: '50px',
        height: '50px',
        marginTop: '100vw',
        marginBottom: '100vw'
      };

    return (
        <>
            <Content1 visibillity={visible}/>
            <div style={divStyle} className='scroller1' ref={scroller1Ref}></div>
        </>
    );
}


export default Scroller1

