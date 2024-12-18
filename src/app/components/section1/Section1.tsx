// components
import { Banner } from "../banner/Banner";
import { Song } from '../song/Song';

export const Section1 = () => {
    return (
        <>
            <div className="flex items-end xl:flex-nowrap flex-wrap mb-[30px]" > {/* wrap */}
                <Banner />
                <Song />  {/* nghe nhiều */}
            </div>
        </>
    );
}