// components
import { BoxTitle } from "../boxtitle/BoxTitle";
import { ListenALotList } from "./ListenALotList";

export const ListenALot = () => {
    return (
        <>
            <div className="xl:w-[425px] w-full ml-[20px]">
                <BoxTitle title="Nghe nhiều" className="" />
                <ListenALotList />
            </div>
        </>
    );
}