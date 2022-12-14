// src/components/AllPosts.js

import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import sanityClient from "../Client.js";

import PaginatedItems from "./Pagination/PaginatedItems.js";


export default function AllPosts() {

  const [allPostsData, setAllPosts] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"] | order(publishedAt desc){
        title,
        slug,
        publishedAt,
        mainImage{
        asset->{
          _id,
          url
        }
      }
    }`
      )
      .then(res => {
        setAllPosts(res)
      })
      .catch(console.error);

  }, []);

  if (allPostsData.length === 0 ) return <div>Loading...</div>;

  return (
    <> 
    <PaginatedItems itemsPerPage={12} allPostsData={allPostsData}/>
    </>
  );
}