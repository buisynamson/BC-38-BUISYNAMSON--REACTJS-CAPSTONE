import{https} from"../utils/baseUrl";
import {GROUPID}from "../utils/constant";

export const layThongTinLichChieuHeThongRap= () => https.get(`/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`);

export const layThongTinLichChieu =(maPhim) => https.get(`/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`);

export const layThongTinHeThongRap = () => https.get(`/QuanLyRap/LayThongTinHeThongRap`)

export const layThongTinCumRapTheoHeThong = (maHeThongRap) => https.get(`/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`)


