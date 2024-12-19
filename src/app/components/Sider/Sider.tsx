// components
import { SiderLogo } from './SiderLogo';
import { SiderList } from './SiderList';

export const Sider = () => {
    return (
        <>  
            <div className='w-[280px]'>
                <nav className="dark:bg-darkModePrimary w-[280px] h-[100vh] fixed" >
                    <SiderLogo/>
                    <SiderList />
                </nav>
            </div>
        </>
    );
}