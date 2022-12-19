// src/components/AllPosts.js
import React, { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import sanityClient from "../Client.js";
import PaginatedItems from "../components/Pagination/PaginatedItems.js";

export default function FilterPosts() {
  const [allPostsData, setAllPosts] = useState([]);
  const { title } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post" && "${title}" in categories[]->title] | order(publishedAt desc){
        title,
        slug,
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
  }, [allPostsData, title]);

  if (allPostsData.length === 0 ) return <div>Loading...</div>;

  return (
    <> 
    <PaginatedItems itemsPerPage={12} allPostsData={allPostsData}/>
    </>
  );
}