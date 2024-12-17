// components
import { SiderItem } from './SiderItem';
import { SiderLogo } from './SiderLogo';

// icon
import { FaHouse, FaMusic, FaPodcast, FaHeart, FaUserPlus, FaUser, FaRightFromBracket} from "react-icons/fa6";

export const Sider = () => {
    // data của sider
    const dataSider = [
        { icon: <FaHouse />, title: 'Trang Chủ', href: '/' },
        { icon: <FaMusic />, title: 'Danh Mục Bài Hát', href: '/categories' },
        { icon: <FaPodcast />, title: 'Ca Sĩ', href: '/singers' },
        { icon: <FaHeart />, title: 'Bài Hát Yêu Thích', href: '/wishlist' },
        { icon: <FaUserPlus />, title: 'Đăng Ký', href: '/register' },
        { icon: <FaUser />, title: 'Đăng Nhập', href: '/login' },
        { icon: <FaRightFromBracket />, title: 'Đăng Xuất', href: '/logout' },
    ];

    return (
        <>
            <nav className="dark:bg-darkModePrimary w-[280px] h-[100vh]" >
                <SiderLogo/>
                <ul className='px-[20px] py-[30px]'> 
                    {dataSider.map(item => (
                        <SiderItem icon={item.icon} title={item.title} href={item.href} />
                    ))}
                </ul>
            </nav>
        </>
    );
}