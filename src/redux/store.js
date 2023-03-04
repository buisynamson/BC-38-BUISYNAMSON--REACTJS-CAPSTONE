import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../redux/reducers/UserReducer"
import BannerReducer from '../redux/reducers/BannerReducer'
import FilmReducer from "../redux/reducers/FilmReducer"
import CinemaReducer from "../redux/reducers/CinemaReducer";
import BookingReducer from "../redux/reducers/BookingReducer"

export const store = configureStore({
    reducer: {
        BannerReducer,
        UserReducer,
        FilmReducer,
        CinemaReducer,
        BookingReducer
    }
})

