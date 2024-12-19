// icon
import { FaHouse, FaMusic, FaPodcast, FaHeart, FaUserPlus, FaUser, FaRightFromBracket} from "react-icons/fa6";

// components
import { SiderItem } from './SiderItem';

export const SiderList = () => {
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
            <ul className='px-[20px] py-[30px]'> 
                {dataSider.map((item, index) => (
                    <SiderItem key={index} icon={item.icon} title={item.title} href={item.href} />
                ))}
            </ul>
        </>
    );
}