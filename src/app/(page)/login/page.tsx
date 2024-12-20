// components
import { BoxTitle } from "@/app/components/BoxTitle/BoxTitle";
import { FormButtonSubmit } from "@/app/components/Form/FormButtonSubmit";
import { FormInput } from "@/app/components/Form/FormInput";

import type { Metadata } from "next";

// Metadata
export const metadata: Metadata = {
  title: "Đăng nhập",
  description: "Ứng dụng nghe nhạc trực tuyến",
};

export default function Login() {
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
                <BoxTitle title="Đăng Nhập Tài Khoản" className="" />
              </div>

              <FormInput type="email" placeholder="Ví dụ: levana@gmail.com"/>
              <FormInput type="password" />
              <FormButtonSubmit text="Đăng Nhập" />

            </form>
        </div>

      </>
    );
}
