// RightsWindows.js
"use client";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash, faWindowMinimize, faWindowMaximize, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function RightsWindows() {
    const [rights, setRights] = useState([]);
    const [isWindowMinimized, setIsWindowMinimized] = useState(false);

    useEffect(() => {
        fetch("http://localhost:3001/rights")
            .then((response) => response.json())
            .then((data) => setRights(data))
            .catch((err) => console.error(err));
    }, []);

    const toggleMinimize = () => setIsWindowMinimized(!isWindowMinimized);

    return (
        <div className="flex items-center justify-center h-screen bg-gray-200">
            <div className="relative w-3/4 bg-white border border-gray-400 shadow-lg rounded-lg">
                {/* Windows Title Bar */}
                <div className="flex justify-between items-center bg-gray-800 text-white px-4 py-2 rounded-t-lg">
                    <span>Rights Management</span>
                    <div className="flex gap-2">
                        <button onClick={toggleMinimize}>
                            <FontAwesomeIcon icon={faWindowMinimize} />
                        </button>
                        <button>
                            <FontAwesomeIcon icon={faWindowMaximize} />
                        </button>
                        <button>
                            <FontAwesomeIcon icon={faTimes} className="text-red-500" />
                        </button>
                    </div>
                </div>
                {/* Content */}
                {!isWindowMinimized && (
                    <div className="p-4">
                        <table className="w-full border-collapse border border-gray-300">
                            <thead>
                                <tr className="bg-gray-800 text-white">
                                    <th className="border border-gray-300 p-2">No</th>
                                    <th className="border border-gray-300 p-2">Patient Rights</th>
                                    <th className="border border-gray-300 p-2">Thai Name</th>
                                    <th className="border border-gray-300 p-2">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rights.map((right, index) => (
                                    <tr key={index}>
                                        <td className="border border-gray-300 p-2">{index + 1}</td>
                                        <td className="border border-gray-300 p-2">{right.Patient_Rights}</td>
                                        <td className="border border-gray-300 p-2">{right.Thai_Rights_Name}</td>
                                        <td className="border border-gray-300 p-2 flex gap-2">
                                            <button className="text-blue-500">
                                                <FontAwesomeIcon icon={faPenToSquare} />
                                            </button>
                                            <button className="text-red-500">
                                                <FontAwesomeIcon icon={faTrash} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}
