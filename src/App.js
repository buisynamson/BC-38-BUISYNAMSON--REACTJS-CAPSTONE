import {Route, Routes, unstable_HistoryRouter as HistoryRouter} from 'react-router-dom'
import { history } from './utils/history'
import UserTemplate from './templates/UserTemplate/UserTemplate';
import Home from './pages/User/Home';
import PageNotFound from './pages/PageNotFound';
import Detail from './pages/User/Detail';
import Login from './pages/User/Login'
import Register from './pages/User/Register';
import './App.css';

function App() {
  return (
    <HistoryRouter history={history}>
      <Routes>
        <Route path='/' element={<UserTemplate />}>
        <Route index path='/' element={<Home />} />
        <Route path='*' element={<PageNotFound />} />
        <Route path='pagenotfound' element={<PageNotFound />} />
        <Route path='detail/:id' element={<Detail />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />

           </Route>
      </Routes>
    </HistoryRouter>
  );
}

export default App;
