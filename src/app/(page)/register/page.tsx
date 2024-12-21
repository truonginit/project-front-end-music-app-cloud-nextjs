import type { Metadata } from "next";

// Metadata
export const metadata: Metadata = {
  title: "Đăng ký",
  description: "Ứng dụng nghe nhạc trực tuyến",
};

// components
import { BoxTitle } from "@/app/components/BoxTitle/BoxTitle";
import { FormButtonSubmit } from "@/app/components/Form/FormButtonSubmit";
import { FormInput } from "@/app/components/Form/FormInput";

export default function Register() {
  return (
      <>
        <div className="w-full h-full flex items-center justify-center">
            {/* form đăng nhập */}
            <form 
              action=""
              className="w-[500px]"
            >
              {/* title */}
              <div className="text-center">
                <BoxTitle title="Đăng Ký Tài Khoản" className="" />
              </div>

              <FormInput title="Họ Tên" type="text" placeholder="Ví dụ: Le Van A"/>
              <FormInput title="email" type="email" placeholder="Ví dụ: levana@gmail.com"/>
              <FormInput title="mật khẩu" type="password" />
              <FormButtonSubmit text="Đăng Ký" />

            </form>
        </div>

      </>
  );
}
