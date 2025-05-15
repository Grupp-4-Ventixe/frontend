                            import { lazy } from 'react'
                            import { Navigate } from "react-router-dom";

                            import AuthLayout from '../partials/layouts/AuthLayout'
                            import PortalLayout from '../partials/layouts/PortalLayout'
                            import Unauthorized from "../partials/pages/auth/Unauthorized";
                            import StyleTest from '../partials/pages/StyleTest';


                            const NotFound = lazy(() => import('../partials/pages/NotFound'))

                            const SignUp = lazy(() => import('../partials/pages/auth/SignUp'))
                            const SignIn = lazy(() => import('../partials/pages/auth/SignIn'))

                            const UserDashboard = lazy(() => import('../partials/pages/user/Dashboard'))
                            const UserBookings = lazy(() => import('../partials/pages/user/Bookings'))
                            const UserEvents = lazy(() => import('../partials/pages/user/Events'))
                            const UserYourTickets = lazy(() => import('../partials/pages/user/YourTickets'))

                            const AdminDashboard = lazy(() => import('../partials/pages/admin/Dashboard'))
                            const AdminBookings = lazy(() => import('../partials/pages/admin/Bookings'))
                            const AdminEvents = lazy(() => import('../partials/pages/admin/Events'))


                            export const routes = [
                                {
                                    children: [
                                        { path: '/',element: <Navigate to="/dashboard" replace /> }
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
                                        { path: '/dashboard', element: <UserDashboard /> },
                                        { path: '/bookings', element: <UserBookings /> },
                                        { path: '/events', element: <UserEvents /> },
                                        { path: '/your-tickets', element: <UserYourTickets /> },
                                    ]
                                },
                                {
                                    layout: PortalLayout,
                                    protected: true,
                                    adminOnly: true,
                                    children: [
                                        { path: '/admin/dashboard', element: <AdminDashboard /> },
                                        { path: '/admin/bookings', element: <AdminBookings /> },
                                        { path: '/admin/events', element: <AdminEvents /> },
                                    ]
                                },
                                {
                                    children: [
                                        { path: '*', element: <NotFound /> }
                                    ]
                                },
                                
                                // Tillfällig stil-testvy för utveckling
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
                            ]
