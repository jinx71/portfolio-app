import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Blog from '../Component/Pages/Blog/Blog';
import Home from '../Component/Pages/Home/Home';
import ProjectDetails from '../Component/Pages/ProjectDetails/ProjectDetails';
import ProjectWrapper from '../Component/Pages/ProjectWrapper/ProjectWrapper';
import Main from '../Layout/Main/Main';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/projects',
                element: <ProjectWrapper></ProjectWrapper>
            },
            {
                path: '/project/:id',
                element: <ProjectDetails></ProjectDetails>
            },
            {
                path: '/blogs',
                element: <Blog></Blog>
            }

        ]
    }
])
