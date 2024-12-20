export const FormButtonSubmit = (props: { text: string }) => {
    const { text } = props;
    return (
        <>
            <button 
                type="submit"
                className="text-[16px] font-[700] dark:text-darkModeText dark:bg-darkModeActive w-full p-[14px] rounded-[6px] capitalize"
            >
                {text}
            </button>
        </>
    );
}