/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

// components
import { BoxTitle } from "@/app/components/BoxTitle/BoxTitle";
import { FormButtonSubmit } from "@/app/components/Form/FormButtonSubmit";
import { FormInput } from "@/app/components/Form/FormInput";

// firebase auth
import { FirebaseAuth } from "@/app/config/firebaseConfig";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from "next/navigation";

// đăng nhập bằng email và mật khẩu
const signInWithEmailPassword = async (email: any, password: any) => {
    try {
        const user = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        if(user) return user;
    }
    catch(error) {
        console.log(error);
    }
}

export const FormLogin = () => {
    const router = useRouter();

    const handleLogin = async (event: any) => {
        event.preventDefault(); // chặn sự kiện load trang của submit

        const email = event.target.email.value;
        const password = event.target.password.value;
        const user = await signInWithEmailPassword(email, password);

        // có thể chọt vào realtime firebase để lấy thêm thông tin 
        if(user) {
            router.push('/');   // chuyển đến trang chủ
        }
    }
    
    return (
        <>
            {/* form đăng nhập */}
            <form 
              action=""
              className="w-[500px]"
              onSubmit={handleLogin}
            >
              {/* title */}
              <div className="text-center">
                <BoxTitle title="Đăng Nhập Tài Khoản" className="" />
              </div>

              <FormInput name="email"       title="email" type="email" placeholder="Ví dụ: levana@gmail.com"/>
              <FormInput name="password"    title="mật khẩu" type="password" />
              <FormButtonSubmit text="Đăng Nhập" />

            </form>
        </>
    );
}