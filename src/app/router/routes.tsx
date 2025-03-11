// src/app/router/routes.tsx
import { RouteObject } from "react-router-dom";
import { StackNavigationProvider } from '@/shared/context/StackNavigationContext';
import LoginPage from "@/features/auth/pages/LoginPage";
import SignUpPage from "@/features/auth/pages/SignUpPage";
import { RedirectToDashboard } from "@/features/dashboard/components/RedirectToDashboard";
import DashboardPage from "@/features/dashboard/pages/DashboardPage";
import GroupsPage from "@/features/group/pages/GroupsPage";
import { GlobalViewLayout } from "@/shared/layouts/GlobalViewLayout";
import { ProtectedRoute } from "./ProtectedRoute";
import { Outlet } from "react-router-dom";

// Wrap the provider around the routes that need stack navigation
const StackLayout = () => {
    return (
        <StackNavigationProvider>
            <Outlet />
        </StackNavigationProvider>
    );
};

export const routes: RouteObject[] = [
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        path: '/signup',
        element: <SignUpPage />
    },
    {
        path: '/',
        element: <ProtectedRoute />,
        children: [
            {
                element: <StackLayout />,
                children: [
                    {
                        element: <GlobalViewLayout />,
                        children: [
                            {
                                index: true,
                                element: <RedirectToDashboard />
                            },
                            {
                                path: 'dashboard',
                                element: <DashboardPage />
                            },
                            {
                                path: 'groups',
                                children: [
                                    {
                                        index: true,
                                        element: <GroupsPage />
                                    },
                                    {
                                        path: ':groupId',
                                        element: <GroupsPage />
                                    },
                                    {
                                        path: 'create',
                                        element: <GroupsPage />
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
];