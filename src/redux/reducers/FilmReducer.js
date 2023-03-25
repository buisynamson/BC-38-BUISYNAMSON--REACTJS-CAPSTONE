import {history} from '../../utils/history'
import { SwalConfig } from "../../utils/config"
import {layThongTinLichChieu} from '../../services/CinemaService'
import {capNhatPhimUpload, layDanhSachPhim, layThongTinPhimChiTiet, themPhimUpload, xoaPhim} from '../../services/FilmService'
import { createSlice } from '@reduxjs/toolkit'


const initialState ={
    arrFilm: [],
    filmDetail: null,
    lichChieuTheoPhim: null,
    thongTinPhim: {}
}


const FilmReducer = createSlice({
    name: "FilmReducer",
    initialState,
    reducers: {
        getFilmList: (state,{type, payload}) =>{
            state.arrFilm = payload
        },
        getFilmDetail : (state,{type, payload}) => {
            state.filmDetail =payload
        },

        getLichChieuTheoPhim: (state, {type, payload}) => {
            state.lichChieuTheoPhim= payload
        },

        layThongTinPhim: (state, {type,payload}) => {
            state.thongTinPhim =payload
        }
    }
});

export const {getFilmList, getFilmDetail, getLichChieuTheoPhim, layThongTinPhim} = FilmReducer.actions

export default FilmReducer.reducer

export const callApiLichChieuTheoPhim =(value) => async(dispatch) => {
    try {
        const apiLichChieu = await layThongTinLichChieu(value)
        dispatch(getLichChieuTheoPhim(apiLichChieu.data.content))

    } catch (err) {
        console.log(err);
    }
}


export const callApiFilm = async(dispatch) => {
    try {
        const apiFilm= await layDanhSachPhim()
        dispatch(getFilmList(apiFilm.data.content))
    } catch (err) {
        console.log(err);
    }
}


export const themPhimApi= async(formData) => {
    try{
        await themPhimUpload(formData)
        SwalConfig('Thêm phim thành công', 'success', true)
        history.push('/admin/film')
        
    } catch (err) {
        // console.log(err);
        SwalConfig(`${err.response.data.content}`, 'error', true, 3000)
    }
}


export const callApiThongTinPhim = (maPhim) => async(dispatch) => {
    try {
        const result = await layThongTinPhimChiTiet(maPhim)
        dispatch(layThongTinPhim(result.data.content))
    } catch (err) {
        console.log(err);
    }
}


export const capNhatPhim= async (formData) => {
    try {
        await capNhatPhimUpload(formData)
        SwalConfig('Cập nhật thành công', 'success', true)
        history.push('/admin/film')
    } catch(err) {
        SwalConfig(`${err.response.data.content}`, 'error', true, 3000)
    }
}

export const callApiXoaPhim = (maPhim) => async (dispatch) => {
    try {
        const result = await xoaPhim (maPhim) 
        dispatch(callApiFilm)
        SwalConfig(result.data.content, 'success', false)
        history.push('/admin/film')
    } catch(err) {
        SwalConfig(`${err.response.data.content}`, 'error', true, 3000)
    }
}