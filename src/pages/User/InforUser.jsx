import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageNotFound from "../PageNotFound";
import { callApiThongTinNguoiDung } from "../../redux/reducers/UserReducer";
import { Tabs } from "antd";
import moment from "moment";
import _ from "lodash";

const thongTinUser = (thongTinNguoiDung) =>{
    return <div className="h-[100vh] relative">
        <section className="p-6 bg-gray-500">
            <h2 className="text-white font-bold text-2xl mb-4">Thông tin tài khoản</h2>
            <div className='grid grid-cols-1 lg-grid-cols-2 gap-4'>
                <div>
                    <p className="font-semibold text-[17px] mb-1">Tài khoản</p>
                    <input readOnly type='text' value={thongTinNguoiDung?.taiKhoan} className='p-2 border-none w-full rounded-sm-text-[16px]' />
                </div>

                <div>
                    <p className="font-semibold text-[17px] mb-1">Email</p>
                    <input readOnly type='text' value={thongTinNguoiDung?.email} className='p-2 border-none w-full rounded-sm-text-[16px]'/>
                </div>

                <div>
                    <p className="font-semibold text-[17px] mb-1">Số điện thoại</p>
                    <input readOnly type='text' value={thongTinNguoiDung?.soDT} className='p-2 border-none w-full rounded-sm-text-[16px]'/>
                </div>

                <div>
                    <p className="font-semibold text-[17px] mb-1">Họ tên</p>
                    <input readOnly type='text' value={thongTinNguoiDung?.hoTen} className='p-2 border-none w-full rounded-sm-text-[16px]'/>
                </div>

                <div>
                    <p className="font-semibold text-[17px] mb-1">Loại tài khoản</p>
                    <input readOnly type='text' value={thongTinNguoiDung?.maLoaiNguoiDung} className='p-2 border-none w-full rounded-sm-text-[16px]'/>
                </div>

            </div>
        </section>
    </div>
}

const ketQuaDatVe =(thongTinNguoiDung) => {
    const renderTicketItem = () => {
        return thongTinNguoiDung.thongTinDatVe?.map((item,index) => {
            return <div key={index} className='p-2 lg:w-1/3 md:w-1/2 w-full'>
                <div className="h-full flex items-center border-gray-200 border p-4">
                <img src={item.hinhAnh} alt='team' className="w-16 h-16 bg-gray-100 object-cover object-center  "/>
                <div className="flex-grow">
                    <h2>{item.tenPhim}</h2>
                    <h2>{_.first(item.danhSachGhe).tenHeThongRap} - {_.first.apply(item.danhSachGhe).tenCumRap}</h2>
                    <p className="text-gray-500">Ngày đặt: {moment(item.ngayDat).format('DD-MM-YYYY ~ hh:MM:A')}</p>
                    <p className="text-gray-500">Thời lượng: {item.thoiLuongPhim} phút</p>
                    <p>Ghế: {item.danhSachGhe.map((ghe,iGhe)=>{
                        return <button key={iGhe} className='mb-2 text-orange-600'>{ghe.tenGhe}</button>
                    })}</p>
                </div>
                </div>
            </div>
        })
    }
    return <div>
        <section className="text-gray-600 body-font"> 
    <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-col text-center w-full mb-10">
            <h1 className="sm:text-3xl tex-2xl font-medium title-font mb-4 uppercase text-gray-900">Lịch sử đặt vé</h1>
        </div>
        <div className="flex flex-wrap -m-2">
            {renderTicketItem()}
        </div>
    </div>
        </section>
    </div>
}


export default () => {
    const {thongTinNguoiDung, isLogin} = useSelector(state => state.UserReducer)
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(callApiThongTinNguoiDung)
    }, [])
    const items = [
        {label: <span className="text-[11px] sm:text=[14px]">01. THÔNG TIN NGƯỜI DÙNG</span>, key: 1, children: thongTinUser(thongTinNguoiDung)},
        {label: <span className="text-[11px] sm:text=[14px]">02. LỊCH SỬ ĐẶT VÉ</span>, key:2, children: ketQuaDatVe(thongTinNguoiDung)},
    ];
    return (
        <>
        {isLogin ? <Tabs className='pt-[6rem] min-h-[100vh] booking' items={items} /> : <PageNotFound/> }
        </>
    )
}

