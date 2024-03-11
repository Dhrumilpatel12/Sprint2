import React from 'react';
import './Dashboard.css'; // Import CSS file for styling

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <h1>Welcome to Travel Dashboard</h1>
            <div className="dashboard-info">
                <div className="info-card">
                    <h2>Total Destinations</h2>
                    <p>100</p>
                </div>
                <div className="info-card">
                    <h2>Total Bookings</h2>
                    <p>500</p>
                </div>
                <div className="info-card">
                    <h2>Total Revenue</h2>
                    <p>$100,000</p>
                </div>
            </div>
            <div className="dashboard-summary">
                <h2>Summary</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mattis, justo nec tempor ullamcorper, ex neque varius risus, ac efficitur justo libero sed mauris.</p>
            </div>
            <div className="dashboard-actions">
                <h2>Actions</h2>
                <ul>
                    <li>Create New Destination</li>
                    <li>View Bookings</li>
                    <li>Manage Users</li>
                </ul>
            </div>
        </div>
    );
}

export default Dashboard;
