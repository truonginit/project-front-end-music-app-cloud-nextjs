import type { Metadata } from "next";

// components
import { BoxTitle } from "@/app/components/BoxTitle/BoxTitle";
import { CardItem } from "@/app/components/Card/CardItem";

// Metadata
export const metadata: Metadata = {
  title: "Danh mục bài hát",
  description: "Ứng dụng nghe nhạc trực tuyến",
};

// firebase
import { ref, onValue } from "firebase/database";

// firebase config
import { Database } from '../../config/firebaseConfig';

// interface
import * as CategoryInterface from '../../interfaces/categories'; 
import * as SingerInterface from '../../interfaces/singer';

// Intersection type (hợp nhiều interface làm 1), dùng dấu &
type GeneralInterface = CategoryInterface.Category & SingerInterface.Singer;

// collection lấy dữ liệu từ firebase
const categoriesRef = ref(Database, 'categories'); 

export default function CategoryPage() {
    // mảng chứa data 
    const DataSection: GeneralInterface[] = [];

    onValue(categoriesRef, (categoryItems) => {
        categoryItems.forEach( categoryItem => {
            const categoryId   = categoryItem.key;
            const categoryData = categoryItem.val();
            
            const item: GeneralInterface = {
                id: categoryId, 
                title: categoryData.title, 
                description: categoryData.description, 
                image: categoryData.image
            };
            
            if(DataSection.length < 10 ) DataSection.push(item);
        })
    });

    return (
        <>
          <div>
            <BoxTitle title="Danh mục bài hát" className=""/>

            <div className="grid grid-cols-5 gap-[20px]">
              {
                DataSection 
                ? DataSection.map( ( item, index ) => 
                    <CardItem 
                        key={index} 
                        data = {item}
                        linkTo= {'categories'}
                    />)
                : ""
              }
            </div>
          </div>
        </>
      );
}
