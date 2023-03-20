import React from 'react'
import PageNotFound from '../PageNotFound'

export default function AboutApp() {
    return (
        <>
        <div className='aboutApp hidden md:block'>
            <div className='w-[80%] h-[100vh] mx-auto flex justify-center items-center'>
                <div className='text-white'>
                    <h2 className='text-white uppercase text-[30px] font-bold'>Ứng dụng tiện lợi dành cho người yêu điện ảnh</h2>
                    <p className='text-[20px] font-medium my-4'>Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và đổi quà hấp dẫn.</p>
                    <div className='text-center'>
                        <button className='uppercase py-4 px-8 bg-red-600 font-semibold tracking-wider rounded-lg hover:bg-orange-400'>
                            <a href= 'https://play.google.com/store/apps/details?id=vn.com.lottecinema.android&hl=vi&gl=US' target= '_blank'> App miễn phí - tải về ngay</a>
                            </button>
                    </div>
                </div>
            </div>
        </div>
        <div className='block md:hidden'>
            <PageNotFound />
        </div>
        </>
    )
}
