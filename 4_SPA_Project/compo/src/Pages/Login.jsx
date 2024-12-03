import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLoginContext } from "../store/LoginContextApi"
import Nav from '../components/Nav';


export default function Login() {
    const navigate = useNavigate();
    const { setLoggedIn} = useLoginContext();
    const phoneRef = useRef();
    const passwordRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        phoneRef.current.value = "";
        passwordRef.current.value = "";
        setLoggedIn(true)
        navigate("/home")
    }
    return (

        <>
        <Nav/>
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login To View Home Page</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-lg font-semibold mb-2" htmlFor="phone">
                            Phone
                        </label>
                        <input 
                            className="shadow-sm appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200" 
                            id="phone" 
                            type="tel" 
                            placeholder="Enter your phone number" 
                            ref={phoneRef} 
                            autoComplete='tel'
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-lg font-semibold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input 
                            className="shadow-sm appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200" 
                            id="password" 
                            type="password" 
                            placeholder="Enter your password"
                            ref={passwordRef}
                            autoComplete='current-password'
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <button 
                            className="w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500 transition duration-200"
                            type="submit">
                            Sign In
                        </button>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                        <button  
                            className="text-sm text-indigo-600 hover:text-indigo-800 transition duration-200" 
                            href="#">
                            Forgot Password?
                        </button >
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}
