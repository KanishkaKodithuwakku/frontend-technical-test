import logo from './logo.svg';
import './App.css';
import Pagination from './components/Pagination/Pagination';
import Post from './components/post/Post';
import React, { useState, useEffect } from 'react';
import SpinnerImage from './spinner.gif';
const axios = require('axios').default;
const url = 'https://jsonplaceholder.typicode.com/posts';

function App() {

const [pageCount,setPageCount] =  useState(20);
const [currentPage,setCurrentPage] = useState(1);
const [totalPosts,setTotalPosts] = useState(110);
const [posts, setPosts] = useState([]);
const [error, setError] = useState(''); 
const [isLoading,setLoading] = useState(false);


const SpinnerComponent = () => {
  const spinnersytle = {
    position:'fixed',
    top:'50%',
    left:'50%',
    width:50,
    height:50
  };
    return <img src={SpinnerImage} alt="Loading" style={spinnersytle}/>;
};

const fetchAllPosts = ()=>{
  setLoading(true);
    try {
      axios.get(url)
        .then(function ({data}) {
          setLoading(false);
          setPosts(data)
      })
    }catch (error) {
      throw new Error('Opps! somethign went wrong!.');
      }
}

    useEffect(() => {
      fetchAllPosts();
    }, []);

  return (
    <div className='container'>
      { isLoading ? <SpinnerComponent/>  : null }
      <Pagination
        data={posts}
        RenderComponent={Post}
       />
    </div>
  );
}

export default App;
