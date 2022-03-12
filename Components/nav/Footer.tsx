import Link from 'next/link'
import Discord from '../Images/Discord';
import Medium from '../Images/Medium';
import Reddit from '../Images/Reddit';
import Telegram from '../Images/Telegram';
import Twitter from '../Images/Twitter';

const Col1 = () =>{
    const title = "Company";
    const links = [
        {
            name: "XRDAO",
            href: "/"
        },
        {
            name: "XDT",
            href: "/XDT"
        },
        {
            name: "RoadMap",
            href: "/Road_Map"
        },
        {
            name: "Careers",
            href: "/Careers"
        }
    ]
    return(
        <div>
            <div className="underline  text-2xl md:text-4xl">
                {/* Title */}
                {title}
            </div>
            <div>
                <ul>
                    <div className="py-2">
                {/* Map Links */}
                {links.map((link) => (
                    <div className="hover:text-white">
                        <li>
                            <Link href={link.href} >
                                <a>{link.name}</a>
                            </Link>
                        </li>
                    </div>
                ))}
                </div>
                </ul>
            </div>
        </div>
    )
};
const Col2 = () =>{
    const title = "Support";
    const links = [
        {
            name: "About Us",
            href: "/About"
        },
        {
            name: "Terms & Policy",
            href: "/T&P"
        }
    ];
    return(
        <div>
            <div className="underline text-2xl md:text-4xl">
                {/* Title */}
                {title}
            </div>
            <div>
                <ul>
                    <div className="py-2">
                {/* Map Links */}
                {links.map((link) => (
                    <div className="hover:text-white">
                        <li>
                            <Link href={link.href} >
                                <a>{link.name}</a>
                            </Link>
                        </li>
                    </div>
                ))}
                </div>
                </ul>
            </div>
        </div>
    )
};
const Col3 = () =>{
    const title = "Support";
    const links = [
        {
            name: "About Us",
            href: "/About_Us"
        },
        {
            name: "Terms & Policy",
            href: "/T&P"
        }
    ];
    return(
        <div>
            <div className="underline text-2xl md:text-4xl">
                {/* Title */}
                {title}
            </div>
            <div>
                <ul>
                    <div className="py-2">
                {/* Map Links */}
                {links.map((link) => (
                    <div className="hover:text-white">
                        <li>
                            <Link href={link.href} >
                                <a>{link.name}</a>
                            </Link>
                        </li>
                    </div>
                ))}
                </div>
                </ul>
            </div>
        </div>
    )
};
const Col4 = () => {
    const title = "Help & FAQ"
    const links = [
        {
            name: "Support",
            href: "/Support"
        },
        {
            name: "Contact Us",
            href: "/Contact"
        }
    ];
    return(
        <div>
            <div className="underline break-normal text-2xl md:text-4xl">
                {/* Title */}
                {title}
            </div>
            <div>
                <ul>
                    <div className="py-2">
                {/* Map Links */}
                {links.map((link) => (
                    <div className="hover:text-white">
                        <li>
                            <Link href={link.href} >
                                <a>{link.name}</a>
                            </Link>
                        </li>
                    </div>
                ))}
                </div>
                </ul>
            </div>
        </div>
    )
}

const Footer = () => {
    return (
        <>
        <div>
        <br />
            <div className="grid grid-cols-3">
                <div className="px-10 md:px-10"><Col1 /></div>
                <div className="px-5 md:px-10"><Col2/></div>
                <div className="px-5 md:px-10"><Col4/></div>
                </div>
                <div className="p-5 flex w-screen space-x-3  md:space-x-10 justify-center">
                    <Link href="https://twitter.com/XRDAO_App" target="_blank">
                        <a><Twitter /></a>
                    </Link>
                    <Link href="https://medium.com/@xrdao" target="_blank">
                        <a>
                            <Medium />
                            </a>
                    </Link>
                    
                    <Link href="https://www.reddit.com/r/XRDAO/" target="_blank">
                        <a>
                    <Reddit />
                        </a>
                    </Link>

                    <Link href="https://t.me/+pOLMTAL7ga9hNWFh" target="_blank"><a>
                    <Telegram />
                    </a></Link>

                    <Link href="https://discord.gg/DPetMTYt" target="_blank"><a>
                    <Discord/>
                        </a></Link>
                </div>
        </div>
        </>
    );
};


export default Footer; 