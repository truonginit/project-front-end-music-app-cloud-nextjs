// components
import { ListenALotItem } from './ListenALotItem';

export const ListenALotList = () => {
    return (
        <>
            <div className='flex flex-col gap-y-[12px]'>
                <ListenALotItem />
                <ListenALotItem />
                <ListenALotItem />
            </div>
        </>
    );
}