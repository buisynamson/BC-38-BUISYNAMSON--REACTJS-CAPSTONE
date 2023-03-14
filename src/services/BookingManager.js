import { https } from "../utils/baseUrl";
import { ThongTinDatVe } from "../_core/models/ThongTinDatVe";


export const LayDanhSachPhongVeService = (maLichChieu) => https.get(`QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`)

export const DatVe = (thongTinDatVe = new ThongTinDatVe()) => https.post(`QuanLyDatVe/DatVe`, thongTinDatVe)

export const TaoLichChieu = (dataLichChieu) => https.post(`QuanLyDatVe/TaoLichChieu`, dataLichChieu)