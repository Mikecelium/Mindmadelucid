import React, { useEffect, useState } from 'react'
import Content3 from './content3';




const Scroller3 = () => {

    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY; //Pixels scrolled from top currently
            const element = document.getElementsByClassName('scroller3')[0];
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
            <Content3 visibillity={visible}/>
            <div style={divStyle} className='scroller3'></div>
        </>
    );
}


export default Scroller3

