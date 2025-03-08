import { MainLayout } from "./features/layouts/MainLayout"
import { Toaster } from 'react-hot-toast';
import GroupBalancePage from "./features/pages/GroupBalancePage";
import LoginPage from "./features/pages/LoginPage";
import SignUpPage from "./features/pages/SignUpPage";
import DashboardPage from "./features/pages/DashboardPage";
import CreateGroupPage from "./features/pages/CreateGroupPage";
import GroupPage from "./features/pages/GroupPage";
import GroupsPage from "./features/pages/GroupsPage";
import { useEffect, useState } from "react";
import CreateExpensePage from "./features/pages/CreateExpensePage";
function App() {
  const pages = [
    { name: "Login", component: <LoginPage /> },
    { name: "SignUp", component: <SignUpPage /> },
    { name: "Dashboard", component: <DashboardPage /> },
    { name: "Create Group", component: <CreateGroupPage /> },
    { name: "Group Details", component: <GroupPage /> },
    { name: "Groups", component: <GroupsPage /> },
    { name: "Balance Settlement", component: <GroupBalancePage /> },
    { name: "Create Expense", component: <CreateExpensePage /> },
  ];
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        // Go to previous page
        setCurrentPageIndex((prev) =>
          prev === 0 ? pages.length - 1 : prev - 1
        );
      } else if (event.key === "ArrowRight") {
        // Go to next page
        setCurrentPageIndex((prev) =>
          prev === pages.length - 1 ? 0 : prev + 1
        );
      }
    };

    // Add event listener
    window.addEventListener("keydown", handleKeyPress);

    // Cleanup
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);
  return (
    <MainLayout>
      <CreateExpensePage />
      {/* {pages[currentPageIndex].component} */}
      <Toaster position="top-center" />
    </MainLayout>
  )
}
export default App;
