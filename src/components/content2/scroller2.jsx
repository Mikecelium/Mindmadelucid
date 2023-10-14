import React, { useEffect, useState } from 'react'
import Content2 from './content2';




const Scroller2 = () => {

    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY; //Pixels scrolled from top currently
            const element = document.getElementsByClassName('scroller2')[0];
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
            <Content2 visibillity={visible}/>
            <div style={divStyle} className='scroller2'></div>
        </>
    );
}


export default Scroller2

