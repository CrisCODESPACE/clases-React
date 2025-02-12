// import { useState, useEffect } from "react";

// const PostComponent = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => response.json())
//       .then((data) => setPosts(data));
//   }, []);

//   return <div>{posts.length} posts encontrados</div>;
// };

// export default PostComponent;
import useFetch from "../hooks/useFetch";

function PostComponent() {
  const posts = useFetch("https://jsonplaceholder.typicode.com/posts");

  return <div>{posts.length} posts encontrados a través del Custom Hook</div>;
}

export default PostComponent;
