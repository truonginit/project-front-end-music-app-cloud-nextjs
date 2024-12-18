// components
import { CardItem } from "./CardItem";

// interface 
interface InterfaceProps {
    className: string
}

export const Card = (props: InterfaceProps) => {
    const { className } = props;

    return (
        <>
            <div className={"flex items-center gap-x-[20px] mb-[30px]" + className}>
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
            </div>
        </>
    );
}