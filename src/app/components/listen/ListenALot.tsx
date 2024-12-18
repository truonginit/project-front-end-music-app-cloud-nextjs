// components
import { BoxTitle } from "../boxtitle/BoxTitle";
import { ListenALotList } from "./ListenALotList";

export const ListenALot = () => {
    return (
        <>
            <div className="w-[425px] ml-[20px]">
                <BoxTitle title="Nghe nhiều" className="" />
                <ListenALotList />
            </div>
        </>
    );
}