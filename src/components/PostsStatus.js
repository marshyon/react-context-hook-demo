// import { useUser } from '../state/UserContext.js';
import { usePosts } from '../state/PostsContext.js';

export default function Posts() {
  const posts = usePosts();
  return (
    <div>
      {posts.posts.map((post) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}


