import { https } from "../utils/baseUrl";

export const LayThongTinTaiKhoan = () => https.post('/QuanLyNguoiDung/ThongTinTaiKhoan')

export const LayThongTinPhimNguoiDungEdit = (taiKhoan) => https.post(`/QuanLyNguoiDung/LayThongTinNguoiDung?taiKhoan=${taiKhoan}`)

export const DangNhap = userLogin => https.post('/QuanLyNguoiDung/DangNhap', userLogin)

export const DangKy = userRegister => https.post('/QuanLyNguoiDung/DangKy', userRegister)

export const LayDanhSachNguoiDung = () => https.get(`/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01`)

export const XoaNguoiDung = (taiKhoan) => https.delete(`/QuanLyNguoiDung/XoaNguoiDung?taiKhoan=${taiKhoan}`)

export const LayDanhSachLoaiNguoiDung = () => https.get(`/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung`)

export const CapNhatThongTinNguoiDung = (user) => https.post(`/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,user)

export const ThemNguoiDungService = (user) => https.post(`/QuanLyNguoiDung/ThemNguoiDung`,user)