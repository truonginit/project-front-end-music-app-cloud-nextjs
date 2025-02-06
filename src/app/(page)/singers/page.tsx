/* eslint-disable @typescript-eslint/no-explicit-any */
import { BoxTitle } from "@/app/components/BoxTitle/BoxTitle";
import { Card } from "@/app/components/Card/Card";
import type { Metadata } from "next";

// Metadata
export const metadata: Metadata = {
  title: "Danh sách ca sĩ",
  description: "Ứng dụng nghe nhạc trực tuyến",
};

// firebase
import { ref, get } from "firebase/database";
import { Database } from '@/app/config/firebaseConfig'; // định ngh

// Lấy danh sách ca sĩ
const getListSinger = async () => {
  const result = await get(ref(Database, 'singers'));
  
  const singers: any[] = [];
  result.forEach(item => { singers.push({ 
      id: item.key, 
      ...item.val() 
    }) 
  });

  return singers;  // response mảng data
}

export default async function SingerPage() {
  const singers = await getListSinger();
  return (
      <>
        <BoxTitle title="Danh Sách Ca Sĩ" className=""/>

        <Card 
          linkTo="/singers/"
          data = {singers}
          className=""
        />
      </>
    );
}
