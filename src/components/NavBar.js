import React from 'react'
import {NavLink} from "react-router-dom"
import { SocialIcon } from 'react-social-icons';
 
export default function NavBar() {
    return (
        
        <header className="bg-black">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to = "/" 
                    exact
                    activeClassName="text-white"
                    className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-red-900 text-4xl font-bold cursive tracking widest">
                    Dovydas
                    </NavLink>
                    <NavLink to = "/post" 
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-red-900"
                    activeClassName="text-blue-100 bg-blue-800"
                    >
                    Blog Post
                    </NavLink>
                    <NavLink to = "/project"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-red-900"
                    activeClassName="text-blue-100 bg-blue-800"
                    >
                    Projects
                    </NavLink>
                    <NavLink to = "/about"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-red-900"
                    activeClassName="text-blue-100 bg-blue-800" // active nurodo ar langas aktyvus
                    >
                    About Me!
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url= "https://www.linkedin.com/in/dovydas-leskauskas-5476781a1/" className= "mr-4" target="_blank" fgcolor="#fff" style={{height: 35,with:35}}/>
                    <SocialIcon url= "https://github.com/Dowydass" className= "mr-4" target="_blank" fgcolor="#fff" style={{height: 35,with:35}}/>
                    <SocialIcon url= "" className= "mr-4" target="_blank" fgcolor="#fff" style={{height: 35,with:35}}/>
                </div>
            </div>
        </header>
    )
}


