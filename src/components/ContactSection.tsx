import ContactForm from './individualComponents/ContactForm';
import ContactImage from './individualComponents/ContactImage';
const Logo = '../images/Paul_Jhon_Magbanua_Logo-white.png';


export default function ContactSection() {
    return (

        <section className='bg-whiteBackground ' >
            <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-0 max-w-8xl justify-center items-center mb-40 mx-auto' >
                 <ContactImage />
                <ContactForm />
            </div>
               
        </section>
    )
}