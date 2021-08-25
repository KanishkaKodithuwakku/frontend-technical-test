import React from 'react';
import Post from '../Post';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

test("o	Each post must be have id, title, post", () =>{
    const adataarray= {
        id:1,
        title:"Loren Gray",
        body:"Loren Gray Beech (born April 19, 2002) is an American model, singer and social media personality "
    
    };
    const { getByTestId } = render(<Post data={adataarray}/>);
    const postId = getByTestId("post_id");
    const postTitle = getByTestId("post_title");
    const postcontent = getByTestId("post_content");


    expect(postId.textContent).not.toEqual("");
    expect(postTitle.textContent).not.toEqual("");
    expect(postcontent.textContent).not.toEqual("");

});


