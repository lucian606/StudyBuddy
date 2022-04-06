import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {

    const [navbarShown, setNavbarShown] = useState(true);

    const handleNavbar = () => {
        setNavbarShown(!navbarShown);
    }

    const handleLogout = () => {
        window.sessionStorage.removeItem("user");
        window.localStorage.removeItem("user");
    }

    return (
        <nav class="flex items-center justify-between flex-wrap bg-blue-500">
            <div class="flex items-center flex-shrink-0 text-white mr-2 pl-4">
                <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
                <span class="font-semibold text-xl tracking-tight">StudyBuddy</span>
            </div>
            <div className="lg:hidden mt-2 mr-5">
                <button onClick={handleNavbar} className="flex items-center px-3 py-2 border rounded text-blue-200 border-blue-400 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                    </svg>
                </button>
            </div>
            <div class={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${!navbarShown && 'hidden'}`}>
                <div class="text-sm lg:flex-grow">
                    <NavLink to="/" className="block mt-5 lg:inline-block text-xl lg:mt-0 text-blue-200 hover:text-white ml-4">
                        HomePage
                    </NavLink>
                    <NavLink to="/subject_generator" className="block mt-5 lg:inline-block text-xl lg:mt-0 text-blue-200 hover:text-white ml-4">
                        Subject Generator
                    </NavLink>
                    <NavLink to="" className="block ml-4 mt-5 mb-5 lg:inline-block text-xl lg:mt-0 text-blue-200 hover:text-white">
                        Statistics
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/login" onClick={handleLogout} className="inline-block lg:inline-block text-xl lg:mt-0 text-blue-200 hover:text-white ml-4 mr-4">
                        Sign Out
                    </NavLink>
                </div>
            </div>
        </nav>
    )

    return (
        <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
                <span className="font-semibold text-xl tracking-tight">StudyBuddy</span>
            </div>
            <div className={`flex justify-between w-full block flex-grow lg:flex lg:items-center lg:w-auto `}>
                <div className={`text-sm block lg:flex lg:flex-grow ${!navbarShown && 'hidden'}`}>
                    <NavLink to="/" className="block mt-4 lg:inline-block text-xl lg:mt-0 text-blue-200 hover:text-white mr-4">
                        HomePage
                    </NavLink>
                    <NavLink to="/subject_generator" className="block mt-4 lg:inline-block text-xl lg:mt-0 text-blue-200 hover:text-white mr-4">
                        Subject Generator
                    </NavLink>
                    <NavLink to="" className="block mt-4 lg:inline-block text-xl lg:mt-0 text-blue-200 hover:text-white">
                        Statistics
                    </NavLink>
                </div>
                <NavLink to="/login" onClick={handleLogout} className="block mt-4 lg:inline-block text-2xl lg:mt-0 text-blue-200 hover:text-white">
                            Sign Out
                </NavLink>
            </div>
            <div className="lg:hidden pt-4">
                <button onClick={handleNavbar} className="flex items-center px-3 py-2 border rounded text-blue-200 border-blue-400 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                    </svg>
                </button>
            </div>
        </nav>
    );
}