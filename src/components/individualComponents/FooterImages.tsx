const TelegramIcon = './images/telegram-icon.png';
const InstagramIcon = './images/instagram-icon.png';
const FacebookIcon = './images/facebook-icon.png';
const LinkedInIcon = './images/linkedin-icon.png';
const WhatsAppIcon = './images/whatsapp-icon.png';
const GitHubIcon = './images/github-icon.png';

const socialIcons = [
    { src: TelegramIcon, alt: 'Telegram', url: '#' },
    { src: InstagramIcon, alt: 'Instagram', url: '#' },
    { src: FacebookIcon, alt: 'Facebook', url: '#' },
    { src: LinkedInIcon, alt: 'LinkedIn', url: '#' },
    { src: WhatsAppIcon, alt: 'WhatsApp', url: '#' },
    { src: GitHubIcon, alt: 'GitHub', url: '#' },
]


 export default function CenterIcons() {
    return (
        <div className="flex flex-col items-center mt-30">
            <div className="flex justify-center items-center gap-3">

                {socialIcons.map((icon, index) => (
                    <a key={index} href={icon.url} target="_blank" rel="noopener noreferrer" className="w-10 h-10">
                        <img src={icon.src} alt={icon.alt} className="w-full h-full object-cover rounded-full" />
                    </a>
                ))}
            </div>

            
            <hr className="border-t border-white my-5 w-full max-w-xs" />
            
            
            <p className="text-center text-white text-lg mt-0 mb-4 tracking-wider">
                Skilled • Collaborative • Detail Oriented
            </p>
        </div>
    );
}