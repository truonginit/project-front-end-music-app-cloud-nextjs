/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

// components
import { BoxTitle } from "@/app/components/BoxTitle/BoxTitle";
import { FormButtonSubmit } from "@/app/components/Form/FormButtonSubmit";
import { FormInput } from "@/app/components/Form/FormInput";

// firebase auth
import { FirebaseAuth } from "@/app/config/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
  
// realtime fire base
import { Database } from "@/app/config/firebaseConfig";
import { set, ref } from 'firebase/database';
import { useRouter } from "next/navigation";

// đăng ký vào firebase auth
async function createNewUserAccount(email: string, password: string) {
    try {
        const userCredential = await createUserWithEmailAndPassword( FirebaseAuth, email, password );
        const user = userCredential.user;
        return user;
    } 
    catch (error: any) {
        console(error.message);
    }
}

// save thông tin tài khoản vào realtime firebase
const saveOnRealtimeFirebase = async (info: any) => {
    const { uid, fullName, email    } = info;
    set(ref(Database, `users/${uid}`), {
        fullName, 
        email
    });
}

export const FormSignUp = () => {
    const router = useRouter();

    // đăng ký tài khoản
    const handleSignUp = async (event: any) => {
        event.preventDefault(); //chặn sự kiện submit form
        
        const fullName = event.target.fullName.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        if(fullName && email && password) {
            const user = await createNewUserAccount(email, password);   // firebase auth chỉ lưu được email và mật khẩu
            console.log(`user::`, user);

            // để truy vấn dễ dàng ta sẽ lưu thông tin user chi tiết vào realtime firebase
            const info: any = {
                uid: user?.uid,
                fullName,
                email
            }
            await saveOnRealtimeFirebase(info);

            // sau khi tạo và save xong hết thì ta chuyển hướng trang đến thẳng trang chủ luôn vì nó đã login heehee
            router.push('/');
        }
    }

    return (
        <>
             {/* form đăng nhập */}
             <form 
              action=""
              className="w-[500px]"
              onSubmit={handleSignUp}
            >
              {/* title */}
              <div className="text-center">
                <BoxTitle title="Đăng Ký Tài Khoản" className="" />
              </div>

              <FormInput name="fullName"    title="Họ Tên" type="text" placeholder="Ví dụ: Le Van A"/>
              <FormInput name="email"       title="email" type="email" placeholder="Ví dụ: levana@gmail.com"/>
              <FormInput name="password"    title="mật khẩu" type="password" />
              <FormButtonSubmit text="Đăng Ký" />

            </form>
        </>
    );
}