import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import Home from '../components/Home';
import { me } from './store';
import AboutUs from '../components/AboutUs';
import MyAccount from '../components/MyAccount';
import Pantry from '../components/Pantry';
import Login from '../components/Login';
import AllMeals from '../components/allRecipes';
import MealDetail from '../components/recipe';

const AppRoutes = () => {
  return (
    <div>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route to="/home" element={<Home />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/myaccount" element={<MyAccount />} />
          <Route path="/pantry" element={<Pantry />} />
          <Route path="/allrecipes" element={<AllMeals />} />
          <Route path="/recipe" element={<MealDetail />} />
        </Routes>
    </div>
  );
};

export default AppRoutes;

