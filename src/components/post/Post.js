import React from "react";

function Post(props){

    const {id,title,body} = props.data;

    return  <tr>
                <th scope="row" data-testid="post_id">{id}</th>
                <td data-testid="post_title">{title}</td>
                <td data-testid="post_content">{body}</td>
            </tr>
}

export default Post;