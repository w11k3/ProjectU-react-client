import UsersList from './components/UsersList';
import CreateUser from './components/CreateUser';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import RetriveUser from './components/RetrieveUser';

// eslint-disable-next-line
const App = () => {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<UsersList />} />
            <Route path="/create" element={<CreateUser />} />
            <Route path="/:userId/" element={<RetriveUser />} />
          </Routes>
        </BrowserRouter>
    </>
  );
};

export default App;