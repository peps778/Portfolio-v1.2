import ContactForm from './individualComponents/ContactForm';
import ContactImage from './individualComponents/ContactImage';

export default function ContactSection() {
    return (

        <main className='grid grid-cols-2 max-w-8xljustify-center items-center mb-40 mx-auto '>
            {/* Image and caption */}
       
                <ContactImage />
      
            {/* CONTACT FORM COMPONENT */}
                <ContactForm />
        </main>
    )
}