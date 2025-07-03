

"use client";
import { signInWithGoogle } from '@/firebase';
import useCounterStore from '@/store/useCounterStore';
import Link from 'next/link';
import { useState } from 'react';



const Header = ({ }) => {
        const [isLoggedIn, setIsLoggedIn] = useState(false);
        const { count, decrease } = useCounterStore();
        
        const navItem = [
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About' },
                { href: '/blog', label: 'Blog' },
        ];

        const handleSignIn = async () => {
                try {
                        await signInWithGoogle();
                        setIsLoggedIn(true);
                } catch (error) {
                        console.error("Google sign-in failed:", error);
                }
        };

        return (
                <div className="flex justify-between">  
                        <h1>logo {count}</h1>
                        <ul className="flex gap-4">
                                {
                                        navItem.map((item, index) => (
                                                <li key={index}>
                                                        <Link href={item.href}>
                                                                {item.label}
                                                        </Link>
                                                </li>
                                        ))
                                }
                        </ul >
                        <button className="border px-4 py-2 rounded" onClick={handleSignIn}>sign in with Google</button>
                </div>
        );
};
export default Header;