
export default function ContactImage() {
    const ImageSource = '../images/Paul_Jhon_Magbanua,_White_sleeves.png';
    const ImageVariables = 'h-90 mt-5'
     
    return (
      
            <div className=" text-black sm:mx-auto lg:mr-20 lg:ml-auto justify-items-center text-center max-w-md ml-auto mt-10 order-1 max:sm-order-2 sm:order-2 lg:order-1">
            <img src={ImageSource} className={ImageVariables} alt="Paul Jhon Magbanua wearing white sleeves" />
            <p className="text-center px-20 mt-5 mb-10 font-secondary text-gray">Whether you need a website, CRM setup, or workflow automation, I’m here to help. Send your message and let’s get started.</p>

            <h1 className="text-green text-header font-primary font-bold sm:mx-10">Paul Jhon Magbanua</h1>
            <p className="text-sm font-secondary sm:mx-20">Front-End Developer | Digital Marketing & Creative Content Specialist</p>
            </div>
      
    )
}