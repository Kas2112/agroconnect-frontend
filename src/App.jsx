// frontend/src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import InstallPrompt from './components/InstallPrompt';
import Login from './pages/Login';
import Register from './pages/Register';
import Marketplace from './pages/Marketplace';
import CreateAd from './pages/CreateAd';
import MyListings from './pages/MyListings';
import AdDetails from './pages/AdDetails';
import MyApplications from './pages/MyApplications';
import ReceivedApplications from './pages/ReceivedApplications';
import ChatList from './pages/ChatList';
import ChatScreen from './pages/ChatScreen';
import Gigs from './pages/Gigs';
import CreateGig from './pages/CreateGig';
import GigDetails from './pages/GigDetails';
import MyGigs from './pages/MyGigs';
import MyGigApplications from './pages/MyGigApplications';
import ReceivedGigApplications from './pages/ReceivedGigApplications';
import Transactions from './pages/Transactions';
import BankDetails from './pages/BankDetails';

function App() {
  return (
    <Router>
      <InstallPrompt />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/create-ad" element={<CreateAd />} />
        <Route path="/my-listings" element={<MyListings />} />
        <Route path="/ad/:id" element={<AdDetails />} />
        <Route path="/my-applications" element={<MyApplications />} />
        <Route path="/received-applications" element={<ReceivedApplications />} />
        <Route path="/messages" element={<ChatList />} />
        <Route path="/chat/:conversationId" element={<ChatScreen />} />
        <Route path="/gigs" element={<Gigs />} />
        <Route path="/create-gig" element={<CreateGig />} />
        <Route path="/gig/:id" element={<GigDetails />} />
        <Route path="/my-gigs" element={<MyGigs />} />
        <Route path="/my-gig-applications" element={<MyGigApplications />} />
        <Route path="/received-gig-applications" element={<ReceivedGigApplications />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/bank-details" element={<BankDetails />} />
        <Route path="/" element={<Navigate to="/marketplace" />} />
      </Routes>
    </Router>
  );
}

export default App;