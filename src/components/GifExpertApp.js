import React, { useState } from 'react';
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

export const GifExpertApp = () => {

//    const categories = ['One Punch', 'The Office'];

    const [categories, setCategories] = useState(['The Office']);

    //const handleAdd = () => {
        //setCategories(['New', ...categories]);
    //    setCategories(categories => ['Nuevo', ...categories]);//set recibe un callback
    //}

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <div>
                {categories.map( category => (
                    <GifGrid 
                        key={category}
                        category={category}
                    />
                ))}
            </div>
        </>
    );
}
