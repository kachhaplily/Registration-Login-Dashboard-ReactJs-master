import logo from './logo.svg';
import './App.css';
import SignIn from './Registration/SignIn';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Login/Login';
import { Dashboard } from './Account/Dashboard';
import { Provider } from 'react-redux';
import store from './ReduxStore/store/store';
import Navbar from './Navbar/Navbar';
import { Route,  Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <Provider store={store}>
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='regi' element={<SignIn />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
