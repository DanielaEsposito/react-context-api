import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Show() {
  const postID = useParams().id;
  console.log(postID);

  const [post, setPost] = useState(null);

  useEffect(() => {
    fetchPost(postID);
  }, []);
  const fetchPost = (id) => {
    const url = `http://localhost:3000/posts/${id}`;
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          console.error("Errore nel fetch: ", res.status);
          throw new Error("Errore nel recupero dei dati");
        }
        return res.json();
      })
      .then((data) => {
        setPost(data);
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="containere">
      {/* <div className="col">
        <div className="card">
          <div className="card-img-container">
            <img
              src={`http://localhost:3000${post.img}`}
              className="card-img-top img-fluid img-post"
              alt=""
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <div className="post-tags">
              <div className="tag ">
                {post.tags.map((tag, index) => (
                  <span key={index} className="badge me-3 my-2">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
