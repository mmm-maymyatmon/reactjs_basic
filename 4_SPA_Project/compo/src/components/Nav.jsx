import React from 'react'
import logoImg from "../images/logo.jpg"
import { useLoginContext } from '../store/LoginContextApi'
import { useNavigate } from 'react-router-dom';

export default function Nav() {
    const navigate = useNavigate();
    const { loggedIn, setLoggedIn } = useLoginContext();

    const handleLogout = () => {
        setLoggedIn(false);
        navigate("/login");
    }

    return (
        <nav className="flex items-center justify-between p-4 bg-gray-800 text-white shadow-lg flex-wrap">
            <div className="w-1/2 md:w-auto">
                <img src={logoImg} alt="logo" className="h-12 w-auto" />
            </div>
            <div className="w-1/2 md:w-auto flex justify-end">
                <ul className="flex space-x-6">
                    <li>
                        <button 
                            className="text-lg font-medium hover:text-blue-400 transition-colors" 
                            onClick={() => alert('Download initiated')}>
                            Download
                        </button>
                    </li>
                    <li>
                        <button 
                            onClick={handleLogout} 
                            className="text-lg font-medium hover:text-blue-400 transition-colors">
                            { loggedIn ? "Logout" : "Login" }
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
