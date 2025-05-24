                            import { lazy } from 'react'
                            import { Navigate } from "react-router-dom";

                            import AuthLayout from '../partials/layouts/AuthLayout'
                            import PortalLayout from '../partials/layouts/PortalLayout'
                            import Unauthorized from "../partials/pages/auth/Unauthorized";
                            import StyleTest from '../partials/pages/StyleTest';
                            import AdminRoute from '../routing/AdminRoute'; 
                            import ProtectedRoute from '../routing/ProtectedRoute'; 

                            const NotFound = lazy(() => import('../partials/pages/NotFound'))

                            const SignUp = lazy(() => import('../partials/pages/auth/SignUp'))
                            const SignIn = lazy(() => import('../partials/pages/auth/SignIn'))

                            const UserDashboard = lazy(() => import('../partials/pages/user/Dashboard'))
                            const UserBookings = lazy(() => import('../partials/pages/user/Bookings'))
                            const UserEvents = lazy(() => import('../partials/pages/user/Events'))
                            const UserYourTickets = lazy(() => import('../partials/pages/user/YourTickets'))
                            const UserEventDetails = lazy(() => import('../partials/pages/user/EventDetails'));

                            const AdminDashboard = lazy(() => import('../partials/pages/admin/Dashboard'))
                            const AdminBookings = lazy(() => import('../partials/pages/admin/Bookings'))
                            const AdminEvents = lazy(() => import('../partials/pages/admin/Events'))
                            const AdminEventDetails = lazy(() => import('../partials/pages/admin/EventDetails'));




                           export const routes = [
                        
                            {
                                children: [
                                    { path: '/', element: <Navigate to="/dashboard" replace /> }
                                ]
                            },
                        
                            {
                                layout: AuthLayout,
                                children: [
                                    { path: '/signup', element: <SignUp /> },
                                    { path: '/login', element: <SignIn /> },
                                    { path: '/denied', element: <Unauthorized /> },
                                ]
                            },

                            {
                                layout: PortalLayout,
                                protected: true,
                                children: [
                                    {
                                        path: '/dashboard',
                                        element: (
                                            <ProtectedRoute>
                                                <UserDashboard />
                                            </ProtectedRoute>
                                        )
                                    },
                                    {
                                        path: '/bookings',
                                        element: (
                                            <ProtectedRoute>
                                                <UserBookings />
                                            </ProtectedRoute>
                                        )
                                    },
                                    {
                                        path: '/events',
                                        element: (
                                            <ProtectedRoute>
                                                <UserEvents />
                                            </ProtectedRoute>
                                        )
                                    },

                                    { 
                                        path: '/events/details/:id', 
                                        element:(
                                            <ProtectedRoute>
                                                <UserEventDetails />
                                            </ProtectedRoute>
                                        )
                                    },
                                    {
                                        path: '/your-tickets',
                                        element: (
                                            <ProtectedRoute>
                                                <UserYourTickets />
                                            </ProtectedRoute>
                                        )
                                    }
                                ]
                            },
                        
                            {
                                layout: PortalLayout,
                                protected: true,
                                adminOnly: true,
                                children: [
                                    {
                                        path: '/admin/dashboard',
                                        element: (
                                            <AdminRoute>
                                                <AdminDashboard />
                                            </AdminRoute>
                                        )
                                    },
                                    {
                                        path: '/admin/bookings',
                                        element: (
                                            <AdminRoute>
                                                <AdminBookings />
                                            </AdminRoute>
                                        )
                                    },
                                    {
                                        path: '/admin/events',
                                        element: (
                                            <AdminRoute>
                                                <AdminEvents />
                                            </AdminRoute>
                                        )
                                    },
                                    { 
                                        path: '/admin/events/details/:id', 
                                        element: (
                                            <AdminRoute>
                                                <AdminEventDetails />
                                            </AdminRoute>
                                        )
                                    },
                                ]
                            },
                        
                            {
                                children: [
                                    { path: '*', element: <NotFound /> }
                                ]
                            },
                        
                            {
                                layout: null,
                                adminOnly: false,
                                protected: false,
                                children: [
                                    {
                                        path: '/style-test',
                                        element: <StyleTest />
                                    }
                                ]
                            }
                        ];
