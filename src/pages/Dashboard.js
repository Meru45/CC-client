import React, { useState } from "react";

const Dashboard = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [selectedFile, setSelectedFile] = useState({});
    const [previewImage, setPreviewImage] = useState(null);

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };

    const handleAgeChange = (event) => {
        setAge(event.target.value);
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => setPreviewImage(e.target.result);
            reader.readAsDataURL(file);
        } else {
            setPreviewImage(null);
        }
    };

    const handleSubmit = (event) => {
        // form submission logic here
        const formData = new FormData();
        formData.append("img", selectedFile.pictureAsFile);

        for (let key of formData.entries()) {
            console.log(key[0] + ", " + key[1]);
        }

        console.log(formData);
        // Clear the form after successful submission
        // setFirstName("");
        // setLastName("");
        // setAge("");
        // setSelectedFile(null);
        // setPreviewImage(null);
        event.preventDefault();
    };

    return (
        <div className="container mx-auto py-10 px-4">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <div className="flex flex-col">
                    <label
                        htmlFor="firstName"
                        className="text-lg font-medium mb-2"
                    >
                        First Name:
                    </label>
                    <input
                        id="firstName"
                        type="text"
                        className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={firstName}
                        onChange={handleFirstNameChange}
                        required
                    />
                </div>
                <div className="flex flex-col">
                    <label
                        htmlFor="lastName"
                        className="text-lg font-medium mb-2"
                    >
                        Last Name:
                    </label>
                    <input
                        id="lastName"
                        type="text"
                        className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={lastName}
                        onChange={handleLastNameChange}
                        required
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="age" className="text-lg font-medium mb-2">
                        Age:
                    </label>
                    <input
                        id="age"
                        type="number"
                        className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={age}
                        onChange={handleAgeChange}
                        required
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="image" className="text-lg font-medium mb-2">
                        Image:
                    </label>
                    <input
                        id="image"
                        type="file"
                        className="p-2"
                        onChange={handleFileChange}
                        required
                    />
                    {previewImage && (
                        <img
                            src={previewImage}
                            alt="Image preview"
                            className="w-30 h-30 object-cover square-full mt-2"
                        />
                    )}
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white rounded-md p-2 font-medium"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Dashboard;