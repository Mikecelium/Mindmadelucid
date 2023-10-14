import React, { useEffect, useState } from 'react'
import Content4 from './content4';




const Scroller4 = () => {

    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY; //Pixels scrolled from top currently
            const element = document.getElementsByClassName('scroller4')[0];
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
            <Content4 visibillity={visible}/>
            <div style={divStyle} className='scroller4'></div>
        </>
    );
}


export default Scroller4

