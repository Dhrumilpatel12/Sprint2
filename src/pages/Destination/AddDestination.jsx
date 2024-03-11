import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AddDestination.css';

function AddDestinationForm() {
    const [formData, setFormData] = useState({
        title: '',
        city: '',
        address: '',
        distance: '',
        rating: '',
        desc: '',
        featured: false
    });

    const [cities, setCities] = useState([]);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        const fetchCities = async () => {
            try {
                const response = await axios.get(`http://localhost:1234/city/${formData.city}`);
                setCities(response.data);
            } catch (error) {
                console.error('Error fetching cities:', error);
                setError('Error fetching cities');
            }
        };

        if (formData.city) {
            fetchCities();
        }
    }, [formData.city]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:1234/destination', formData);
            console.log(response.data); // Handle success
            // Reset the form after successful submission
            setFormData({
                title: '',
                city: '',
                address: '',
                distance: '',
                rating: '',
                desc: '',
                featured: false
            });
        } catch (error) {
            console.error('Error adding destination:', error); // Handle error
        }
    };

    return (
        <div className="form-card">
            <h2>Add Destination</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Title" required />
                </div>
                <div className="form-group">
                    <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" required />
                </div>
                <div className="form-group">
                    <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" required />
                </div>
                <div className="form-group">
                    <input type="number" name="distance" value={formData.distance} onChange={handleChange} placeholder="Distance" required />
                </div>
                <div className="form-group">
                    <input type="number" name="rating" value={formData.rating} onChange={handleChange} placeholder="Rating" min="0" max="5" />
                </div>
                <div className="form-group">
                    <textarea name="desc" value={formData.desc} onChange={handleChange} placeholder="Description" required />
                </div>
                <div className="form-group">
                    <label>
                        Featured:
                        <input type="checkbox" name="featured" checked={formData.featured} onChange={() => setFormData({ ...formData, featured: !formData.featured })} />
                    </label>
                </div>
                <div className="form-group">
                    <button type="submit">Add Destination</button>
                </div>
            </form>
            {error && <p className="error-message">{error}</p>}
        </div>
    );
} 

export default AddDestinationForm;
