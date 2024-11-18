import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Link from 'next/link';
import { CiMenuFries } from "react-icons/ci";
import { usePathname } from 'next/navigation';
import * as Dialog from '@radix-ui/react-dialog';


const links = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "About me ",
        path: "/AboutMe"
    },
    {
        name: "projects",
        path: "/Projects"
    },
    {
        name: "experiences",
        path: "/experiences"
    },
    {
        name: "Tastes",
        path: "/tastes"
    },
    {
        name: "contact",
        path: "/contact"
    }
];

export const MobileNav = () => {
    const pathname = usePathname();
    
    return (
        <Sheet>
            <SheetTrigger className='flex justify-center items-center'>
                <div className="text-[32px] text-purple-500">
                    <CiMenuFries />
                </div>
            </SheetTrigger>
            <SheetContent className='flex flex-col p-4'>
                {/* Logo */}
                <div className='mt-32 mb-10 text-center text-2xl'>
                    <Link href="/">
                        <h1 className='text-4xl font-semibold'>
                            Juanjo<span className='text-purple-400'>.</span>
                        </h1>
                    </Link>
                </div>

                {/* Nav */}
                <nav className='flex flex-col justify-center items-center gap-8'>
                    {links.map((link, index) => (
                        <Link
                            href={link.path}
                            key={index}
                            className={`${
                                link.path === pathname 
                                    ? "text-purple-400 border-b-2 border-purple-950" 
                                    : ""
                            } text-xl capitalize hover:text-purple-400 transition-all`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;