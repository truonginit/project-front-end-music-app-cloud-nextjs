// components
import { BoxTitle } from "../BoxTitle/BoxTitle";
import { Card } from '../Card/Card';

// interface
// import { SongInterface, SingerOfSongInterface } from '../../interfaces/song';

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

export const Section2 = () => {
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
            
            if(DataSection.length < 5 ) DataSection.push(item);
        })
    });

    return (
        <>
            <div>
                <BoxTitle title="danh mục nổi bật" className="" />
                <Card data = {DataSection} linkTo = {'/categories'} />
            </div>  
        </>
    );
}