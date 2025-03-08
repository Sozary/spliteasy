import { RouteObject } from "react-router-dom";
import CreateExpensePage from "../../features/pages/CreateExpensePage";
import CreateGroupPage from "../../features/pages/CreateGroupPage";
import DashboardPage from "../../features/pages/DashboardPage";
import GroupBalancePage from "../../features/pages/GroupBalancePage";
import GroupPage from "../../features/pages/GroupPage";
import GroupsPage from "../../features/pages/GroupsPage";
import LoginPage from "../../features/pages/LoginPage";
import SignUpPage from "../../features/pages/SignUpPage";
import { ProtectedRoute } from "./ProtectedRoute";

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
                path: 'groups/create',
                element: <CreateGroupPage />
            },
            {
                path: 'groups/:id',
                element: <GroupPage />
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