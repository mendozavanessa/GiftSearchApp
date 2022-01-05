import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GiftSearchApp = () => {

    //const categories = ['One Piece', 'Naruto', 'Dragon Ball'];
    const [categories, setCategories] = 
                            useState(['One Piece'])
    /*const handleAdd = () => {
        //setcategories([ 'Attack on Titan', ...categories]);
        setcategories( cats => ['Attack on Titan', ...categories])
    }*/

    return (
        <div>
            <h2>GiftSearchApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr/>
            <ol>
                {
                    categories.map( (category) => (
                        <GifGrid 
                            key = {category} 
                            category={category}
                        />
                    ))
                }
            </ol>

        </div>
    )
}
