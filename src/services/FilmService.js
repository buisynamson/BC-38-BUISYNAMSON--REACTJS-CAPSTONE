import { https } from "../utils/baseUrl";
import { GROUPID } from '../utils/constant'

export const layDanhSachPhim= () => https.get(`/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`, null)

export const layThongTinPhimChiTiet =(id) => https.get(`/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`)

export const themPhimUpload = (formData) => https.post(`/QuanLyPhim/ThemPhimUploadHinh`, formData)

export const capNhatPhimUpload = (formData) => https.post(`/QuanLyPhim/CapNhatPhimUpload`, formData)

export const xoaPhim = (maPhim) => https.delete(`/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`)