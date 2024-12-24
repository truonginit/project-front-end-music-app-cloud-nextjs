// components
import { BoxTitle } from "../BoxTitle/BoxTitle";
import { Card } from '../Card/Card';

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
const singerRef = ref(Database, 'singers'); 

export const Section3 = () => {
        // mảng chứa data 
        const DataSection: GeneralInterface[] = [];
        
        onValue(singerRef, (singerItems) => {
            singerItems.forEach( singerItem => {
                const categoryId   = singerItem.key;
                const categoryData = singerItem.val();
                
                const item: GeneralInterface = {
                    id: categoryId,
                    title: categoryData.title,
                    description: categoryData.description,
                    image: categoryData.image,
                };

                if(DataSection.length < 5 ) DataSection.push(item);
            })
        });

    return (
        <>
            <BoxTitle title="Ca sĩ nổi bật"  className=""/>
            <Card data = {DataSection} linkTo = {'/singers'} />     
        </>
    );
}