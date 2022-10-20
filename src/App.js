import { RouterProvider } from 'react-router-dom';
import './App.css';
import Header from './Component/Shared/Header/Header';
import { router } from './Routes/Router';

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
