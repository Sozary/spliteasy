import { RouteObject } from "react-router-dom";
import CreateExpensePage from "../../features/expense/pages/CreateExpensePage";
import { ProtectedRoute } from "./ProtectedRoute";
import LoginPage from "@/features/auth/pages/LoginPage";
import SignUpPage from "@/features/auth/pages/SignUpPage";
import DashboardPage from "@/features/dashboard/pages/DashboardPage";
import GroupBalancePage from "@/features/group/pages/GroupBalancePage";
import GroupsPage from "@/features/group/pages/GroupsPage";

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
                path: 'dashboard',
                element: <DashboardPage />
            },
            {
                path: 'groups',
                element: <GroupsPage />
            },
            {
                path: 'groups/:groupId',
                element: <GroupsPage />
            },
            {
                path: 'groups/:id/balance',
                element: <GroupBalancePage />
            },
            {
                path: 'groups/:id/expenses/create',
                element: <CreateExpensePage />
            }
        ]
    }
];