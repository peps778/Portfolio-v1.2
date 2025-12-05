import ContactForm from './individualComponents/ContactForm';
import ContactImage from './individualComponents/ContactImage';

export default function ContactSection() {
    return (

        <section className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-0 max-w-8xl justify-center items-center mb-40 mx-auto bg-whiteBackground '>
            {/* Image and caption */}
       
                <ContactImage />
      
            {/* CONTACT FORM COMPONENT */}
                <ContactForm />
        </section>
    )
}