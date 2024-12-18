// components
import { Banner } from "../banner/Banner";
import { ListenALot } from '../listen/ListenALot';

export const Section1 = () => {
    return (
        <>
            <div className="flex items-end" > {/* wrap */}
                <Banner />
                <ListenALot />  {/* nghe nhiều */}
            </div>
        </>
    );
}