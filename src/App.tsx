import { MainLayout } from "./features/layouts/MainLayout"
import { Toaster } from 'react-hot-toast';
import GroupPage from "./features/pages/GroupPage";

function App() {
  return (
    <MainLayout>
      <GroupPage />
      <Toaster position="top-center" />
    </MainLayout>
  )
}

export default App
