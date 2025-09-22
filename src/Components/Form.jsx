import React, { useState, useEffect } from 'react';
import "./form.css";


const Form = ({ addMutation, updateMutation, updateDataApi, setUpdateDataApi }) => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
    });

    // 🟢 Pre-fill form when editing
    useEffect(() => {
        if (updateDataApi && Object.keys(updateDataApi).length > 0) {
            setFormData({
                title: updateDataApi.volumeInfo?.title || "",
                description: updateDataApi.volumeInfo?.description || "",
            });
        }
    }, [updateDataApi]);

    // 🟢 Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // 🟢 Handle form submit (Add or Update)
    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (updateDataApi && updateDataApi.id) {
            // Editing existing post
            const { title, description } = formData;

            updateMutation.mutate({
                id: updateDataApi.id,
                updatedPost: {
                    title: title,
                    description: description,
                    subtitle: updateDataApi.volumeInfo?.subtitle,
                    authors: updateDataApi.volumeInfo?.authors,
                }
            });

            // Reset after update
            setFormData({ title: "", description: "" });
            setUpdateDataApi({});
        } else {
            // Adding new post
            addMutation.mutate(formData);
            setFormData({ title: "", description: "" });
        }
    };

    return (
        <form className='form' onSubmit={handleFormSubmit}>
            <label htmlFor="title" className='form-label'>Title:</label>
            <input
                type="text"
                autoComplete='off'
                id='title'
                name='title'
                placeholder='Enter Title'
                value={formData.title}
                onChange={handleInputChange}
            />
            <label htmlFor="description" className='form-label'>Description:</label>
            <input
                type="text"
                autoComplete='off'
                id='description'
                name='description'
                placeholder='Enter Description'
                value={formData.description}
                onChange={handleInputChange}
            />
            <button type="submit"> {updateDataApi?.id ? updateMutation.isLoading ? "Updating..." : "Update Post"
                : addMutation.isLoading ? "Adding..." : "Add Post"}
            </button>
        </form>
    );
};

export default Form;
