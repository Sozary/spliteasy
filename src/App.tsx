import { MainLayout } from "./features/layouts/MainLayout"
import { Toaster } from 'react-hot-toast';
import CreateGroupPage from "./features/pages/CreateGroupPage";

function App() {
  return (
    <MainLayout>
      <CreateGroupPage />
      <Toaster position="top-center" />
    </MainLayout>
  )
}

export default App
