import {
  Route,
  Routes,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import { history } from "./utils/history";
import UserTemplate from "./templates/UserTemplate/UserTemplate";
import Home from "./pages/User/Home";
import PageNotFound from "./pages/PageNotFound";
import Detail from "./pages/User/Detail";
import Login from "./pages/User/Login";
import Register from "./pages/User/Register";
import InforUser from "./pages/User/InforUser";
import BookingTicket from "./pages/User/BookingTicket";
import News from "./pages/User/News";
import AboutApp from "./pages/User/AboutApp";
import AdminTemplate from "./templates/AdminTemplate/AdminTemplate";
import Dashboard from "./pages/Admin/Dashboard";
import Film from './pages/Admin/Film/Film';
import Showtime from './pages/Admin/Film/Showtime';
import AddNewFilm from './pages/Admin/Film/AddNewFilm';
import Users from './pages/Admin/Users/Users'
import EditFilm from './pages/Admin/Film/EditFilm';
import AddNewUser from './pages/Admin/Users/AddNewUser';
import EditUser from './pages/Admin/Users/EditUser';

function App() {
  return (
    <HistoryRouter history={history}>
      <Routes>
        <Route path="/" element={<UserTemplate />}>
          <Route index path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="pagenotfound" element={<PageNotFound />} />
          <Route path="detail/:id" element={<Detail />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="inforUser" element={<InforUser />} />
          <Route path="booking/:id" element={<BookingTicket />} />
          <Route path="news" element={<News />} />
          <Route path="aboutapp" element={<AboutApp />} /> </Route>

          <Route path="/admin" element={<AdminTemplate />}>
          <Route path="/admin" index element={<Dashboard />} />
          <Route path="user" element={<Users />} />
          <Route path="user/addnewuser" element={<AddNewUser />} />
          <Route path="user/edit/:taiKhoan" element={<EditUser />} />
          <Route path="film" element={<Film />} />
          <Route path="film/edit/:id" element={<EditFilm />} />
          <Route path="film/showtime/:id/:tenPhim" element={<Showtime />} />
          <Route path="film/addnewfilm" element={<AddNewFilm />} />
          <Route path="showtime" element={<Showtime />} />
        </Route>
      </Routes>
    </HistoryRouter>
  );
}
export default App;
