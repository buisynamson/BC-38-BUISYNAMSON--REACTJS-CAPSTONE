// import { faXmark } from "@fortawesome/free-solid-svg-icons";
// import Swal from "sweetalert2";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Drawer, Space } from "antd";
import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
// import { LOCALSTORAGE_USER } from "../../utils/constant";
// import {
//   getLocalStorage,
//   removeLocalStorage,
//   SwalConfig,
// } from "../../utils/config";
import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";

export default function Header() {
  // const isLogin = useSelector((state) => state.UserReducer.isLogin);
  //   const dispatch = useDispatch()
  //   const navigate= useNavigate()
  //   const [open, setOpen] = useState(false);

  // const onClose = () => {
  //   setOpen (false);
  // };
  return (
    <>
      <header className="bg-gray-400 font-sans leading-normal tracking-normal">
        <nav className="flex items-center justify-between flex-wrap bg-white px-4 py-2 fixed w-full z-10 top-0">
        <img src='https://cdn.iconscout.com/icon/free/png-256/cinema-film-video-clip-movie-multimedia-short-1-18284.png' alt='logo'style={{width:100}}/>
          <span>
          <NavLink className="text-xl font-medium text-orange-500 sm:text-3xl ml-3">
            Movie Capstone
          </NavLink>
          </span>
          <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden">
            <ul className="list-reset lg:flex justify-center flex-1 items-center mb-0">
              <li className="mr-3">
                <Link
                  to="/#movie-list"
                  className="inline-block py-2 px-4 text-black font-media md:text-base hover:text-red-600 no-underline"
                >
                  Phim
                </Link>
              </li>
              <li className="mr-3">
                <Link
                  to="/#menuCinema"
                  className="inline-block py-2 px-4 text-black font-media md:text-base hover:text-red-600 no-underline"
                >
                  Cụm rạp
                </Link>
              </li>
              <li className="mr-3">
                <Link
                  to="/#news"
                  className="inline-block py-2 px-4 text-black font-media md:text-base hover:text-red-600 no-underline"
                >
                  Tin tức
                </Link>
              </li>
              <li className="mr-3">
                <Link
                  to="/#aboutapp"
                  className="inline-block py-2 px-4 text-black font-media md:text-base hover:text-red-600 no-underline"
                >
                  Ứng dụng
                </Link>
              </li>
            </ul>
            <NavLink
              to="register"
              className="mr-3 text-gray-500 hover:text-red-600 text-sm font-semibold border-orange-500 py-2 border-2 px-3 rounded-lg"
            >
              Đăng ký
            </NavLink>
            <NavLink
              to="login"
              className="text-gray-500 hover:text-red-600 hover:bg  text-sm font-semibold border-orange-500 border-2 py-2 px-3 rounded-lg"
            >
              Đăng nhập
            </NavLink>
          </div>
        </nav>
      </header>
    </>
  );
}
