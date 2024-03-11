

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import BoardPage from './pages/Board/Board';
import Calendar from './pages/Calendar/Calendar';
import Dashboard from './pages/Dashboard/Dashboard';
import DataGrid from './pages/DataGrid/DataGrid';
import LocationForm from './pages/LocationForm/LocationForm';
import AddAttraction from './pages/Destination/AddAttrction';
import AddDestination from './pages/Destination/AddDestination';
import Showdestination from './pages/Destination/Showdestination';
import EditDestination from './pages/Destination/EditDestination';
import SearchDestination from './pages/Destination/SearchDestination';
const App = () => {
  return (
    <div id="dashboard">
      <BrowserRouter>
        <Routes>EditDestination
          <Route path="/" element={<Layout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="board" element={<BoardPage />} />
            <Route path="users" element={<DataGrid />} />
            <Route path="LocationForm" element={<LocationForm />} />
            <Route path="AddAttraction" element={<AddAttraction />} />
            <Route path="AddDestination" element={<AddDestination />} />
            <Route path="showDestination" element={<Showdestination />} />
            <Route path="edit/:id" element={<EditDestination />} />
            <Route path="SearchDestination" element={<SearchDestination />} />
          </Route>
        
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
