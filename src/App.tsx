import { MainLayout } from "./features/layouts/MainLayout"
import { Toaster } from 'react-hot-toast';
import SignUpPage from "./features/pages/SignUpPage";


function App() {
  return (<MainLayout>
    <SignUpPage />
    <Toaster position="top-center" />
  </MainLayout>)
}

export default App
