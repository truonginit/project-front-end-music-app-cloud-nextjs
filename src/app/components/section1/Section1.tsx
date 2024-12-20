// components
import { Banner } from "../Banner/Banner";
import { Song } from '../Song/Song';
import { BoxTitle } from "../BoxTitle/BoxTitle";

export const Section1 = () => {
    return (
        <>
            <div className="flex items-end mb-[30px]" > {/* wrap */}
                <Banner />

                <div className="w-[425px] ml-[20px]">
                    <BoxTitle title="Nghe nhiều" className="" />
                    <Song />  {/* nghe nhiều */}
                </div>
            </div>
        </>
    );
}