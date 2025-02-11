// components
import { FormLogin } from "./Form";

import type { Metadata } from "next";

// Metadata
export const metadata: Metadata = {
  title: "Đăng nhập",
  description: "Ứng dụng nghe nhạc trực tuyến",
};

export default function Login() {
  return (
      <>
        <div className="w-full h-full flex items-center justify-center"> {/* center: căn giữa element nằm bên trong */}
          <FormLogin />
        </div>

      </>
    );
}
