import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaFacebook, FaTwitter } from "react-icons/fa";

// Define la estructura de los enlaces sociales
interface SocialLink {
    icon: React.ReactNode;
    path: string;
}

// Props del componente
interface SocialsProps {
    containerStyles?: string;
    iconsStyles?: string;
}

// Arreglo de íconos y rutas
const socialLinks: SocialLink[] = [
    { icon: <FaGithub />, path: "https://github.com/Juanjoyita" },
    { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/juan-jose-calvache-1b8a92334/" },
    { icon: <FaFacebook />, path: "https://www.facebook.com/juanjo.calvache.3" },
    { icon: <FaTwitter />, path: "https://x.com/Juanjoyita_12" }
];

const Socials: React.FC<SocialsProps> = ({ containerStyles = "", iconsStyles = "" }) => {
    return (
        <div className={containerStyles}>
            {socialLinks.map((item, index) => (
                <Link 
                    key={index} 
                    href={item.path} 
                    className={iconsStyles} 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    {item.icon}
                </Link>
            ))}
        </div>
    );
};

export default Socials;
