import React from 'react';
import CenterIcons from './individualComponents/FooterImages';

export default function FooterSection() {
    return (
        <footer className='bg-primary text-white pt-15'>
            <article className="grid grid-cols-2 max-w-6xl mx-auto p-4 md:p-0 gap-40">
                <div className="flex-1 md:flex-1">
                    <p className="text-smallParagraph">Paul Jhon Magbanua</p>
                    <h1 className="text-header mb-8">Building digital experiences that help brands grow.</h1>
                    <form action="/Thankyou" className="relative w-full max-w-lg">
                    <input 
                    type="email" 
                    placeholder="yourname@email.com"
                    className="bg-transparent border-2 border-white rounded-lg p-3 w-full pr-24 focus:outline-none focus:ring-2 focus:ring-green-400" />
                    <button className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md bg-green-500 px-4 py-1 text-sm font-semibold text-gray-800">
                    →
                    </button>
                    </form>
                </div>



                <div className="flex-1 md:flex-2 ml-20">
                    <h1 className="text-header mb-1 ">Contact Information:</h1>
                    <p className="text-largeParagraph ml-2">work.paulmagbanua@gmail.com</p>
                    <p className="text-largeParagraph ml-2">+63 9958222528</p>
                    <p className="text-largeParagraph ml-2">Philippines</p>
                </div>
             </article>
             <CenterIcons />
             <FooterText />
    </footer>
        
    )
}

export function FooterText() {
    return (
        <div className='w-full bg-bottomFooter text-center text-[#C1C3C7] py-6 mt-20'>
            <p>© 2025 All Rights Reserved. <br /> Front-End Development • Digital Marketing • Creative Content Production</p>
        </div>
    )
}
