import React from 'react'
import { Navigate, Route, Routes} from 'react-router-dom';
import { Dashboard,  } from '../pages/Dashboard';
import { UsersPage } from '../pages/UsersPage';
import { AddUserForm } from '../components/AddUserForm';
import { Navbar } from '../components/Navabar';

export const AppRouter = () => {
  return (
    <>
        <Navbar />
        <Routes>
            <Route path="/" element= {<Dashboard />} />
            <Route path="users" element = {<UsersPage />}/>
            <Route path="form" element = {<AddUserForm />} />

            <Route path="/" element = {<Navigate to="/users" />} />
        </Routes>
    </>
  )
}
