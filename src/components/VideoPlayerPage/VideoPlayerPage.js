import axios from "axios";
import { useEffect, useState } from "react";
import { getVideoEndpoint } from "../../utils/api-utils";
import "./VideoPlayerPage.scss";

const VideoPlayerPage = ({ selectedVideoId }) => {
  const [video, setVideo] = useState(null);
  const getSelectedVideo = async (videoId) => {
    try {
      let response = await axios.get(getVideoEndpoint(videoId));
      setVideo(response.data);
    } catch (err) {
      console.log("Error:", err);
    }
  };

  useEffect(() => {
    getSelectedVideo(selectedVideoId);
  }, [selectedVideoId]);

  if (video === null) {
    return <p>Video is loading please wait...</p>;
  }

  return (
    <main className="video">
      <h1 className="video__title">{video.title}</h1>
      <video controls className="video__player">
        <source src={video.video} type="video/mp4" />
      </video>
    </main>
  );
};

export default VideoPlayerPage;
