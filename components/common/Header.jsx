

"use client";
import useCounterStore from '@/store/useCounterStore';
import Link from 'next/link';
import { useState } from 'react';



const Header = ({ }) => {
        const [isLoggedIn, setIsLoggedIn] = useState(true);
        const{count , decrease}=useCounterStore()
        
        const navItem = [
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About' },
                { href: '/blog', label: 'Blog' },
        ];
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
{
<button onClick={decrease} className="text-white bg-red-500 px-4 py-2 rounded">-1</button>
}


        
</div>
        
    )
}
export default Header;