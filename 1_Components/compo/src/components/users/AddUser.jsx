import React from 'react'
import { useState } from 'react'

const AddUser = (props) => {
    const [image, setImage] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [uuid, setUuid] = useState('')

    const imageChangeHandler = (e) => {
        setImage(e.target.value)
    }

    const nameChangeHandler = (e) => {
        setName(e.target.value)
    }

    const phoneChangeHandler = (e) => {
        setPhone(e.target.value)
    }

    const uuidChangeHandler = (e) => {
        setUuid(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        const newUser = {
            image,
            name,
            phone,
            uuid
        }
        props.addUser(newUser)
        console.log(newUser)
    }



    return (
        <>
            <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
                <div className="w-full max-w-lg">
                    <form onSubmit={submitHandler} className="bg-white shadow-xl rounded-lg p-8 space-y-6">
                        <h2 className="text-2xl font-semibold text-center text-indigo-700 mb-4">Add New User</h2>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-1" htmlFor="image">
                                Profile Image URL
                            </label>
                            <input
                                onChange={imageChangeHandler}
                                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-indigo-500"
                                id="image"
                                type="text"
                                placeholder="https://example.com/image.jpg"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-1" htmlFor="name">
                                Full Name
                            </label>
                            <input
                                onChange={nameChangeHandler}
                                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-indigo-500"
                                id="name"
                                type="text"
                                placeholder="John Doe"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-1" htmlFor="phone">
                                Phone Number
                            </label>
                            <input
                                onChange={phoneChangeHandler}
                                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-indigo-500"
                                id="phone"
                                type="text"
                                placeholder="+123 456 789"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-1" htmlFor="uuid">
                                UUID
                            </label>
                            <input
                                onChange={uuidChangeHandler}
                                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-indigo-500"
                                id="uuid"
                                type="text"
                                placeholder="Unique User ID"
                            />
                        </div>

                        <div className="text-center">
                            <button
                                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                                type="submit"
                            >
                                Create User
                            </button>
                        </div>
                    </form>
                </div>
            </div>


        </>
    )
}

export default AddUser