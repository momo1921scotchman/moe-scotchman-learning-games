import { Link } from "react-router-dom";
import "./VideoNav.scss";

const VideoNav = ({ videos }) => {
  return (
    <aside className="video-nav">
      <h3>Teaching Video Series</h3>
      <ul className="video-nav__list">
        {videos.map((video) => {
          return (
            <li key={video.id} className="video-nav__item">
              <Link to={`/${video.id}`} className="video-nav__link">
                <p className="video-nav__title">{video.title}</p>
                <img
                  src={video.image}
                  alt=""
                  className="video-nav__thumbnail"
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default VideoNav;
