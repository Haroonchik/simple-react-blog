import { posts } from '../../shared/projectData';
import { getAmountOfPosts } from '../../shared/projectLogic';
import './BlogContent.css';


export const BlogContent = () => {

  const blockPosts = posts.map((item) => {
    return (
      <div key={item.id} className="post">
        <h2>{item.title}</h2>
        <p>
          {item.description}
        </p>
      </div>
    );
  })

  return (
    <>
      <h1>Simple Blog</h1>
      <div className="posts">
        {blockPosts}
      </div>

      <div className="count">
        <button onClick = {() => console.log(getAmountOfPosts(posts))} >Get amount of posts</button>
      </div>

    </>
  );
}
