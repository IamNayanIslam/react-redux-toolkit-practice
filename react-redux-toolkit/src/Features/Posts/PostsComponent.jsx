import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./PostsSlice";
import SinglePostComponent from "./SinglePostComponent";
import { ClockLoader } from "react-spinners";

const PostsComponent = () => {
  const postsState = useSelector((state) => state.posts);
  const { posts, isLoading, error } = postsState;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  console.log(posts);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-10">
      {isLoading && <ClockLoader />}
      {error && <h3>Something Went Wrong</h3>}
      {posts &&
        posts.slice(0, 10).map((post) => {
          return <SinglePostComponent key={post.id} post={post} />;
        })}
    </div>
  );
};

export default PostsComponent;
