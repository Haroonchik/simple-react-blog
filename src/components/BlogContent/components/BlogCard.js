import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
export const BlogCard = ({ title, description, likePost, liked }) => {

  const heartFill = liked ? "crimson" : "black"

  return (
    <div className="post">
      <h2>{title}</h2>
      <p>
        {description}
      </p>
      <div>
        <button onClick={likePost}>
          <FavoriteTwoToneIcon style={{fill: heartFill}}/>
        </button>
      </div>
    </div>
  );

}