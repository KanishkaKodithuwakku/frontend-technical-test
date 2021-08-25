
import React from 'react';
import Pagination from '../Pagination';
import {fireEvent, getByTestId, render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import Post from './../../post/Post';

test("When selecting the limit, it should be equal to the expected number of posts", ()=>{
    const post = [{id:1,title:"test",body:"test body"}];
    const adataarray= {
        id:1,
        title:"Loren Gray",
        body:"Loren Gray Beech (born April 19, 2002) is an American model, singer and social media personality "
    
    };

    const { getByTestId }  = render(<Pagination data={post}  RenderComponent={Post}/>);
    const filterelm = getByTestId('page-filter');

    /**
     * initial value should be 10
     */
    expect(filterelm.value).toBe("10");
    fireEvent.change(filterelm, {
        target:{
            value:"20"
        }
    })

    expect(filterelm.value).toBe("20");


});