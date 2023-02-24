import { ToastContainer } from 'react-toastify';
import './App.css';

import { AuthProvider } from './contexts/AuthContextProvider';
import { BlogProvider } from './contexts/BlogContextProvider';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BlogProvider>
        <AppRouter />
        <ToastContainer />
      </BlogProvider>
    </AuthProvider>
    </div>
  );
}

export default App;
