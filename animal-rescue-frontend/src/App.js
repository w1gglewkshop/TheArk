import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Adopt from './pages/Adopt';
import AdoptApply from './pages/AdoptApply';
import Volunteer from './pages/Volunteer';
import Donate from './pages/Donate';
import LostFound from './pages/LostFound';
import Events from './pages/Events';
import Admin from './pages/Admin';
import Success from './pages/Success';
import AdminAnimals from './pages/AdminAnimals';
import AdminApplications from './pages/AdminApplications';
import AdminVolunteers from './pages/AdminVolunteers';
import AdminEvents from './pages/AdminEvents';
import AdminBlog from './pages/AdminBlog';
import AdminUsers from './pages/AdminUsers';
import Dashboard from './pages/Dashboard';
import './App.css';
import './pages/Home.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/adopt" element={<Adopt />} />
        <Route path="/adopt/apply" element={<AdoptApply />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/lost-found" element={<LostFound />} />
        <Route path="/events" element={<Events />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/animals" element={<AdminAnimals />} />
        <Route path="/admin/applications" element={<AdminApplications />} />
        <Route path="/admin/volunteers" element={<AdminVolunteers />} />
        <Route path="/admin/events" element={<AdminEvents />} />
        <Route path="/admin/blog" element={<AdminBlog />} />
        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path="/success" element={<Success />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
