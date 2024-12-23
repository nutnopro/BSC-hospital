"use client";
export default function Body() {
    return (
        <div className="container max-w-7xl mx-auto my-20 pb-20 px-4">
            {/* Header Section */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-white mb-4">BSC Hospital - We care for you</h1>
            </div>

            {/* Service Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
                <div className="bg-gradient-to-r from-purple-500 to-indigo-600 shadow-lg rounded-lg p-6 border-t-4 border-white hover:scale-105 transform transition duration-300 ease-in-out">
                    <h2 className="text-3xl font-bold text-white mb-6">Our Services</h2>
                    <ul className="list-disc list-inside text-white space-y-2">
                        <li className="flex items-center">
                            <span className="material-icons mr-3">local_hospital</span> Emergency care
                        </li>
                        <li className="flex items-center">
                            <span className="material-icons mr-3">scalpel</span> General surgery
                        </li>
                        <li className="flex items-center">
                            <span className="material-icons mr-3">healing</span> Internal medicine
                        </li>
                        <li className="flex items-center">
                            <span className="material-icons mr-3">pregnant_woman</span> Obstetrics and gynecology
                        </li>
                        <li className="flex items-center">
                            <span className="material-icons mr-3">child_care</span> Pediatrics
                        </li>
                        <li className="flex items-center">
                            <span className="material-icons mr-3">radiology</span> Radiology
                        </li>
                        <li className="flex items-center">
                            <span className="material-icons mr-3">local_pharmacy</span> Pharmacy
                        </li>
                        <li className="flex items-center">
                            <span className="material-icons mr-3">laboratory</span> Laboratory services
                        </li>
                        <li className="flex items-center">
                            <span className="material-icons mr-3">fitness_center</span> Physical therapy
                        </li>
                        <li className="flex items-center">
                            <span className="material-icons mr-3">nutrition</span> Nutrition counseling
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
