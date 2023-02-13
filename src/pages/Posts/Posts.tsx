import { Post } from "../../types/models";

interface PostProps {
  posts: Post[]
}

const Posts = ({ posts }: PostProps) => {
  if (!posts.length) return <h1>Loading...</h1>

  return (
    <>
      {posts.map((post: Post) =>
        <div key={post.id.toString()}>
          <h1>{post.title}</h1>
          <h2>{post.content}</h2>
        </div>
      )}
    </>
    );
}

export default Posts;