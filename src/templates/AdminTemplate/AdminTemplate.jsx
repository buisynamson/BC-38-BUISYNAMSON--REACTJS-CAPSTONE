import { NavLink, Outlet } from 'react-router-dom'
import {MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined, SnippetsOutlined, FileAddOutlined} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useEffect, useState } from 'react';
import { getLocalStorage, removeLocalStorage } from '../../utils/config';
import { LOCALSTORAGE_USER } from '../../utils/constant';
import useRoute from '../../hooks/useRoute';
import { LayThongTinTaiKhoan } from '../../services/UserService';
import LoadingPage from '../../pages/LoadingPage';
import PageNotFound from '../../pages/PageNotFound';
const { Header, Sider, Content } = Layout;

export default function AdminTemplate() {
    const [collapsed, setCollapsed] = useState(false);
    const { navigate } = useRoute()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const token = getLocalStorage(LOCALSTORAGE_USER)
        if (!token) {
            navigate('/login')
        }
        else if (token.maLoaiNguoiDung !== 'QuanTri') {
            navigate('/pagenotfound')
        }
        else {
            const callApiThongTinNguoiDungCheckAdmin = async () => {
                try {
                    const apiNguoiDung = await LayThongTinTaiKhoan()
                    if (apiNguoiDung.data.content.maLoaiNguoiDung !== token.maLoaiNguoiDung) {
                        navigate('/pagenotfound')
                    }else {
                        setIsLoading(false)
                    }
                } catch (error) {
                    removeLocalStorage(LOCALSTORAGE_USER)
                    navigate('/pagenotfound')
                }
            }
            callApiThongTinNguoiDungCheckAdmin()
        }
    })

    return (
        <>
            {isLoading ? <LoadingPage /> : <>
            {/* Màn hình từ 1280px trở lên mới cho vào trang Admin */}
            <div className='hidden xl:block'>
                <Layout className='min-h-screen'>
                    <Sider trigger={null} collapsible collapsed={collapsed} className=''>
                        <NavLink to='/' aria-label="Back to homepage" className="flex items-center justify-center p-2">
                        <img  src='https://cdn.iconscout.com/icon/free/png-256/cinema-film-video-clip-movie-multimedia-short-1-18284.png' alt='logo'style={{width:'4rem'}}/>
                        </NavLink>
                        <Menu
                            theme="dark"
                            mode="inline"
                            items={[
                                {
                                    key: '1',
                                    icon: <UserOutlined />,
                                    label: 'User',
                                    children: [{
                                        key: '11',
                                        icon: <SnippetsOutlined />,
                                        label: <NavLink to='user'>User Manager</NavLink>,
                                    },
                                    {
                                        key: '12',
                                        icon: <FileAddOutlined />,
                                        label: <NavLink to='user/addnewuser'>Add User</NavLink>,
                                    },
                                    ]
                                },
                                {
                                    key: '2',
                                    icon: <SnippetsOutlined />,
                                    label: 'Film',
                                    children: [{
                                        key: '21',
                                        icon: <SnippetsOutlined />,
                                        label: <NavLink to='film'>Film Manager</NavLink>,
                                    },
                                    {
                                        key: '22',
                                        icon: <FileAddOutlined />,
                                        label: <NavLink to='film/addnewfilm'>Add Film</NavLink>,
                                    },
                                    ]
                                },
                
                            ]}
                        />
                    </Sider>
                    <Layout className="site-layout">
                        <Header className="site-layout-background pl-4 text-[1.8rem]">
                            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                className: 'trigger',
                                onClick: () => setCollapsed(!collapsed),
                            })}
                        </Header>
                        <Content
                            className="site-layout-background contentAdmin"
                            style={{
                                margin: '24px 16px',
                                padding: 24,
                                minHeight: 500,
                            }}>
                            <Outlet />
                        </Content>
                    </Layout>
                </Layout>
            </div>
            {/* Màn hình dưới 1280px KHÔNG cho vào trang Admin */}
             <div className="block xl:hidden">
                <PageNotFound />
            </div>
            </>}
        </>
    );
};
