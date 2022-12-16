import React, { useEffect, useState } from "react";
import ReactPaginate from 'react-paginate';
import Items from "./Items";

export default function PaginatedItems(props) {
    const { itemsPerPage, allPostsData } = props;
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const [slicedPosts, setSlicedPost] = useState(allPostsData);
  
    useEffect(()=>{
  
      console.log("item offset", itemOffset);
      console.log("end offset", endOffset);
  
      setSlicedPost(allPostsData.slice(itemOffset, endOffset))
  
    }, [allPostsData, itemOffset, endOffset])
  
    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
  
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    console.log("sliced posts", slicedPosts);
    // const currentItems = allPostsData.slice(itemOffset, endOffset);
    // console.log(allPostsData.slice(0, 4));
    const pageCount = Math.ceil(allPostsData.length / itemsPerPage);
  
    // console.log("current data: ");
    // console.log(currentItems);
  
    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % allPostsData.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    };

    return (
        <>
          <Items allPostsData={slicedPosts} />
          <ReactPaginate
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel="<"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
          />
        </>
      );
    }