import React, { useState, useEffect } from 'react';


function Pagination({ data, RenderComponent }) {
    
    const [currentPage, setCurrentPage] = useState(1);
    const [pageLimit,setPageLimit] = useState(5);
    const [dataLimit,setDataLimit] = useState(10);
    const [pages,setPages] = useState(Math.round(data.length / dataLimit));
    const next = ">>";
    const prev = "<<";
  
    function goToNextPage() {
        if(currentPage!=pages){
            setCurrentPage((page) => page + 1);
        }
    }
  
    function goToPreviousPage() {
        if(currentPage !=1){
            setCurrentPage((page) => page - 1);
        }
    }

    function goToLastPage() {
        setCurrentPage(pages);
    }
  
    function changePage(event) {
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
    }
  
    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return data.slice(startIndex, endIndex);
    };
  
    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
    };


    useEffect(() => {
        setPages(Math.round(data.length / dataLimit));
    });  
  
    return (
        <div>
       

       <ul className="nav">
            <li className="nav-item">
                {data.length} Total Posts
            </li>
            <li className="nav-item" style={{paddingLeft:20, paddingRight:20}}>
               |
            </li>
            <li className="nav-item">
               Page {currentPage} / {pages}
            </li>
        </ul>
     
        <div className="container">
        <table className="table">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Body</th>
            </tr>
        </thead>
            <tbody>

            {getPaginatedData().map((d, idx) => (
                <RenderComponent key={idx} data={d} />
             ))}

            </tbody>
        </table>
        </div>
        
        <nav>
            <ul className="pagination">
              <li>
              {/* <input min="5" value={dataLimit} type="number" className="form-control" style={{width:100,marginRight:10}} onChange={ event => setDataLimit(event.target.value)}/> */}
              <select data-testid="page-filter" className="form-select" style={{width:100,marginRight:20}} value={dataLimit} onChange={e => { setDataLimit(Number(e.target.value)) }} >
                 {[5, 10, 20, 30, 40, 50].map(dataLimit => ( <option key={dataLimit} value={dataLimit}> {dataLimit} </option> ))}
                  </select>
              </li>
              <li
                onClick={goToPreviousPage}
                className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}
              >
                <span className="page-link">{prev}</span>
              </li>
        
              {getPaginationGroup().map((item, index) => (
                <li
                  key={index}
                  onClick={changePage}
                  className={`page-item ${currentPage === item ? 'active' : null}`}
                >
                  <span className="page-link">{item}</span>
                </li>
              ))}
        
              <li
                onClick={goToNextPage}
                className={`page-item ${currentPage === pages ? 'disabled' : ''}`}
              >
                <span className="page-link">{next}</span>
              </li>
              <li
                onClick={goToLastPage}
                className="page-item"
              >
                <span className="page-link">{pages}</span>
              </li>
            </ul>
        </nav>
      </div>
    );
  }

  export default Pagination;