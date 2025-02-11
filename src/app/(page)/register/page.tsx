import type { Metadata } from "next";

// Metadata
export const metadata: Metadata = {
  title: "Đăng ký",
  description: "Ứng dụng nghe nhạc trực tuyến",
};

// component
import { FormSignUp } from "./Form";

export default function Register() {
  return (
      <>
        <div className="w-full h-full flex items-center justify-center">
          <FormSignUp />
        </div>

      </>
  );
}
