const TelegramIcon = '../images/telegram-icon.png';
const InstagramIcon = '../images/instagram-icon.png';
const FacebookIcon = '../images/facebook-icon.png';
const LinkedInIcon = '../images/linkedin-icon.png';
const WhatsAppIcon = '../images/whatsapp-icon.png';
const GitHubIcon = '../images/github-icon.png';

const socialIcons = [
    { src: TelegramIcon, alt: 'Telegram', url: 'https://t.me/workpaulM' },
    { src: InstagramIcon, alt: 'Instagram', url: 'https://www.instagram.com/magbanuapauljhon/' },
    { src: FacebookIcon, alt: 'Facebook', url: 'https://www.facebook.com/Pmagbanua01' },
    { src: LinkedInIcon, alt: 'LinkedIn', url: 'https://ph.linkedin.com/in/paul-jhon-magbanua-51a46527b' },
    { src: WhatsAppIcon, alt: 'WhatsApp', url: '+63 995 822 2528' },
    { src: GitHubIcon, alt: 'GitHub', url: 'https://github.com/peps778' },
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
            
            
            <p className="text-center text-white text-lg mt-0 mb-4 tracking-wider font-secondary">
                Skilled • Collaborative • Detail Oriented
            </p>
        </div>
    );
}