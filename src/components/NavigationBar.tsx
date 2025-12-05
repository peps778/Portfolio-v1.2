import React, { useState } from 'react';

const Logo = '../images/Paul_Jhon_Magbanua_Logo-white.png';

// Tailwind Variables
const NavBarVariables =
  'bg-primary font-poppins p-2 flex justify-between items-center mt-5 w-[95%] max-w-6xl mx-auto rounded-4xl px-6 sticky top-4 z-10 sm:sticky sm:top-5';

const textHover =
  'hover:scale-110 transform transition duration-300 ease-in-out hover:text-green';

const buttonHover =
  'py-1 px-6 bg-green rounded-full border border-white hover:bg-green-400 hover:scale-110 transform transition duration-300 ease-in-out';

function NavigationBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className={NavBarVariables}>
        {/* LEFT SIDE – LOGO & NAME */}
        <div id="LogoAndName" className="flex items-center gap-3">
          <img
            src={Logo}
            alt="Website logo of Paul Jhon Magbanua"
            className="h-14 md:h-16"
          />
          <h1 className="text-white font-bold text-lg md:text-xl leading-tight hover:text-green">
            Paul Jhon <br /> Magbanua
          </h1>
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-12 text-colorForText text-2xl">
          <li className={textHover}>
            <a href="/#home">Home</a>
          </li>
          <li className={textHover}>
            <a href="/#about">About</a>
          </li>
          <li className={textHover}>
            <a href="/#skills">Skills</a>
          </li>
          <li className={textHover}>
            <a href="/#experience">Experience</a>
          </li>
          <li className={textHover}>
            <a href="/#education">Education</a>
          </li>
          <li>
            <button className={buttonHover}>
              <a href="/Contact">Contact</a>
            </button>
          </li>
        </ul>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-white text-4xl hover:text-green"
          onClick={() => setOpen(!open)}
        >
          {open ? '✕' : '☰'}
        </button>
      </nav>

      {/* MOBILE MENU DROPDOWN */}
      {open && (
        <div className="md:hidden bg-primary text-white rounded-3xl mt-2 w-[90%] mx-auto px-6 py-4 text-xl space-y-4 sticky top-25">
          <a className="block hover:text-green" href="/#home" onClick={() => setOpen(false)}>
            Home
          </a>
          <a className="block hover:text-green" href="/#about" onClick={() => setOpen(false)}>
            About
          </a>
          <a className="block hover:text-green" href="/#skills" onClick={() => setOpen(false)}>
            Skills
          </a>
          <a className="block hover:text-green" href="/#experience" onClick={() => setOpen(false)}>
            Experience
          </a>
          <a className="block hover:text-green" href="/#education" onClick={() => setOpen(false)}>
            Education
          </a>
          <button className={`${buttonHover} w-full`} onClick={() => setOpen(false)}>
            <a href="/Contact">Contact</a>
          </button>
        </div>
      )}
    </>
  );
}

export default NavigationBar;
