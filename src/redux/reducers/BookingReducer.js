import { createSlice } from "@reduxjs/toolkit";

const ThongTinPhim = {
  maLichChieu: '',
  tenCumRap: '',
  tenRap:'',
  diaChi: '',
  tenPhim: '',
  hinhAnh:'',
  ngayChieu: '',
  gioChieu: '',
}

const initialState ={
  chiTietPhongVe: {
    thongTinPhim: ThongTinPhim,
    danhSachGhe: [],
  },
  danhSachGheDangDat: [],
  danhSachGheKhachDat: [{maGhe: 75561},]
}

const BookingReducer = createSlice ({
  name: "BookingReducer",
  initialState,
  reducers: {
    layDanhSachPhongVe: (state, {type, payload}) => {
      state.chiTietPhongVe = payload
    },
    datGhe: (state,{type, payload})=> {
      let gheDangChon = state.danhSachGheDangDat.find(ghe => ghe.maGhe === payload.maGhe)
      if(!gheDangChon) { // nếu ghế đang chọn ko nằm trong danh sách ghế đã chọn thì push vào
        state.danhSachGheDangDat.push(payload)
      } else { // nếu ghế đang chọn đã có danh sách ghế đã chọn thì trả về danh sách ghế đang chọn
        state.danhSachGheDangDat = state.danhSachGheDangDat.filter(ghe => ghe.maGhe !== payload.maGhe)
      }
    },
    xoaDanhSachGheDangDat: (state, {type, payload}) => {
      state.danhSachGheDangDat=[]
    },
  }
})

export const {layDanhSachPhongVe, datGhe, xoaDanhSachGheDangDat} = BookingReducer.actions;
export default BookingReducer.reducer
