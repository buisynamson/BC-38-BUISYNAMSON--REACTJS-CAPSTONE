
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { history } from "../../utils/history";
import LoadingPage from "../LoadingPage";
import HomeCarousel from "../../components/Home/HomeCarousel";
import MenuCinema from "../../components/Home/MenuCinema";
import MovieList from "../../components/Home/MovieList";
import { layThongTinLichChieuHeThongRap } from "../../services/CinemaService";
import { layHeThongRapChieu } from "../../redux/reducers/CinemaReducer";
import { callApiFilm } from "../../redux/reducers/FilmReducer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const { arrFilm } = useSelector((state) => state.FilmReducer);
  const { heThongRapChieu } = useSelector(state => state.CinemaReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    history.listen(() => {
      window.scrollTo(0, 0);
    });
    dispatch(callApiFilm);

    const getApiHeThongRapChieu = async () => {
      try {
        const apiHeThongRap = await layThongTinLichChieuHeThongRap();
        dispatch(layHeThongRapChieu(apiHeThongRap.data.content));
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
    getApiHeThongRapChieu()
  }, [])

  return (
    <div>
      {isLoading ?  <LoadingPage /> : <>
          <HomeCarousel />
          <MovieList arrFilm={arrFilm}/>
          <MenuCinema heThongRapChieu= {heThongRapChieu} />
        </>}
    </div>
  );
}

// import React from 'react'

// function Home() {
//   return (
//     <div>Home</div>
//   )
// }

// export default Home

