import React from 'react';
const About = '../components/AboutSection'

const Logo = '../images/Paul_Jhon_Magbanua_Logo-white.png';

// Tailwind Variables
const NavBarVariables = 'bg-black font-poppins p-2 flex justify-center mt-5 w-fit justify-self-center rounded-4xl px-10 sticky top-4 max-w-6xl z-10'
const textHover = 'hover:scale-110 transform transition duration-30 ease-in-out hover:text-green'
const buttonHover = 'py-1 px-6 bg-green rounded-2xl stroke-1 border border-white hover:bg-green-400 hover:scale-110 transform transition duration-30 ease-in-out'

function NavigationBar() {
    return (
        <>
        <nav className={NavBarVariables}>
            <ul className='flex items-center place-content-stretch gap-15 w-fit justify-center text-colorForText text-2xl'>
                <li>
                    <div id="LogoAndName" className='flex items-center w-fit'>
                         <img src={Logo} alt='Website logo of Paul Jhon Magbanua' className='h-16'/>
                         <h1 className='text-white font-bold '>Paul Jhon <br /> Magbanua</h1>
                    </div>
                </li>
                <li className={textHover}>
                    <a href='/'>Home</a>
                </li>
                <li className={textHover}>
                    <a href='#About'>About</a>
                </li>
                <li className={textHover}>
                    <a href="#Skills">Skills</a>
                </li>
                <li className={textHover}>
                    <a href="/">Experience</a>
                </li>
                <li className={textHover}>
                    <a href="/">Education</a>
                </li>
                <li>
                    <button className={buttonHover} ><a href="/Contact">Contact</a></button>
                </li>
            </ul>
            
        </nav>
        
        </>
    );
}

export default NavigationBar;