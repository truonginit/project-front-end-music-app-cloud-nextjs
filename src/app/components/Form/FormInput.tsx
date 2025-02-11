/* eslint-disable @typescript-eslint/no-explicit-any */
export const FormInput = (props: any ) => {
    const { title, type, placeholder, name } = props;

    return (
        <>
            <div  className="flex flex-col gap-y-[5px] w-full rounded-[6px] truncate mb-[15px]">
                  <label htmlFor="" className="text-[14px] font-[600] dark:text-darkModeText capitalize">
                    {title}  <span className="text-red-600">*</span>
                  </label>
                  <input 
                    name = {name}
                    type = {type}
                    placeholder = {placeholder}
                    className = "w-full outline-none p-[14px] rounded-[6px]"
                    defaultValue={""}
                  />
            </div>
        </>
    );
}