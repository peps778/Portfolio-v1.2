
export default function ContactImage() {
    const ImageSource = '../images/Paul_Jhon_Magbanua,_White_sleeves.png';
    const ImageVariables = 'h-90 mt-5'
     
    return (
        <>
            <div className=" text-black rounded-2xl justify-items-center text-center w-[90%] max-w-md ml-auto">
            <img src={ImageSource} className={ImageVariables} alt="Paul Jhon Magbanua wearing white sleeves" />
            <p className="text-center px-25 mb-10">Whether you need a website, CRM setup, or workflow automation, I’m here to help. Send your message and let’s get started.</p>

            <h1 className="text-green text-header font-bold">Paul Jhon Magbanua</h1>
            <p className="text-sm">Front-End Developer | Digital Marketing & Creative Content Specialist</p>
            </div>
        </>
    )
}