import { MainLayout } from "./features/layouts/MainLayout"
import { Toaster } from 'react-hot-toast';
import DashboardPage from "./features/pages/DashboardPage";


function App() {
  return (
    <MainLayout>
      <DashboardPage />
      <Toaster position="top-center" />
    </MainLayout>
  )
}

export default App
