// interface cho box title
interface  InterfaceBoxTitle {
    title: string;
    className: string;
}

export const BoxTitle = (props: InterfaceBoxTitle) => {
    const { title, className } = props;
    return (
        <>
            <h3 className={"text-[24px] font-[700] dark:text-darkModeText capitalize mb-[20px]" + className}>
                {title}
            </h3>
        </>
    );
}