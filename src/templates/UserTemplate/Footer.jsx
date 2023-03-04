import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight, faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import { faSquareFacebook, faYoutube, faInstagram, faGooglePlay, faApple } from '@fortawesome/free-brands-svg-icons'
import { NavLink } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="px-4 divide-y bg-neutral-900 text-gray-100">
            <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                <div className="lg:w-1/4">
                    <NavLink to='/' aria-label="Back to homepage" className="flex items-center">
                        <div className='text-xl font-medium text-orange-500 sm:text-2xl '>Movie Capstone</div>
                    </NavLink>
                </div>
                <div className="grid grid-cols-1 text-sm gap-x-3 gap-y-8 lg:w-3/4 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="hidden sm:block space-y-3">
                        <h3 className="tracking-wide text-zinc-200 title-widget text-sm sm:text-lg font-medium">GIỚI THIỆU</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#!" className='text-zinc-300  title-widget-item'><FontAwesomeIcon icon={faAnglesRight} />  VỀ CHÚNG TÔI</a>
                            </li>
                            <li>
                                <a href="#!" className='text-zinc-300 title-widget-item'><FontAwesomeIcon icon={faAnglesRight} /> THỎA THUẬN SỬ DỤNG</a> 
                            </li>
                            <li>
                                <a href="#!" className='text-zinc-300 title-widget-item'><FontAwesomeIcon icon={faAnglesRight} /> QUY CHẾ BẢO MẬT</a>
                            </li>
                            <li>
                                <a href="#!" className='text-zinc-300 title-widget-item'><FontAwesomeIcon icon={faAnglesRight} /> CHÍNH SÁCH BẢO MẬT</a>
                            </li>
                        </ul>
                    </div>
                    <div className="hidden sm:block space-y-3">
                        <h3 className="tracking-wide  text-zinc-200 title-widget text-sm sm:text-lg font-medium">HỖ TRỢ</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#!" className='text-zinc-300 title-widget-item'><FontAwesomeIcon icon={faAnglesRight} /> GÓP Ý</a>
                            </li>
                            <li>
                                <a href="#!" className='text-zinc-300 title-widget-item'><FontAwesomeIcon icon={faAnglesRight} /> SALE & SERVICE</a>
                            </li>
                            <li>
                                <a href="#!" className='text-zinc-300 title-widget-item'><FontAwesomeIcon icon={faAnglesRight} /> RẠP / GIÁ VÉ</a>
                            </li>
                            <li>
                                <a href="#!" className='text-zinc-300 title-widget-item'><FontAwesomeIcon icon={faAnglesRight} /> TUYỂN DỤNG</a>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className=" text-zinc-200 title-widget text-sm sm:text-lg font-medium">KẾT NỐI CAPSTONE MOVIE</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#!" className='text-zinc-300 title-widget-item'><FontAwesomeIcon className='w-8 h-8 md:w-11 md:h-11 mr-3' icon={faSquareFacebook} /></a>
                                <a href="#!" className='text-zinc-300 title-widget-item'><FontAwesomeIcon className='w-8 h-8 md:w-11 md:h-11 mr-3' icon={faYoutube} /></a>
                                <a href="#!" className='text-zinc-300 title-widget-item'><FontAwesomeIcon className='w-8 h-8 md:w-11 md:h-11 mr-3' icon={faInstagram} /></a>
                               
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className=" text-zinc-200 title-widget text-sm sm:text-lg font-medium">DOWNLOAD APP</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#!" className='text-zinc-300 title-widget-item'><FontAwesomeIcon className='w-8 h-8 md:w-11 md:h-11 mr-3' icon={faApple} /></a>
                                <a href="#!" className='text-zinc-300 title-widget-item'><FontAwesomeIcon className='w-8 h-8 md:w-11 md:h-11 mr-3' icon={faGooglePlay} /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="py-6 text-sm text-center text-gray-400">© 1968 Company Co. All rights reserved.</div>
        </footer>
    )
}
