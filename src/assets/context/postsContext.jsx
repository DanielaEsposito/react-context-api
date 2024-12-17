import { createContext, useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
//creo il context
const PostContext = createContext();
// esporto il provider
export const PostContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const fetchPosts = () => {
    fetch("http://localhost:3000/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <PostContext.Provider value={{ posts, fetchPosts }}>
      {children}
    </PostContext.Provider>
  );
};
//esporto lo use
export const usePostsContext = () => useContext(PostContext);
