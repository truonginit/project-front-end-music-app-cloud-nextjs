// components
import { CardItem } from "./CardItem";

export const Card = () => {
    return (
        <>
            <div className="flex items-center gap-x-[20px]">
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
            </div>
        </>
    );
}