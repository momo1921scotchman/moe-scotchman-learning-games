import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import VideoNav from "../../components/VideoNav/VideoNav";
import VideoPlayerPage from "../../components/VideoPlayerPage/VideoPlayerPage";
import { getVideosEndpoint } from "../../utils/api-utils";

const HomePage = () => {
  const [videos, setVideos] = useState(null);
  const { videoId } = useParams();
  const getVideos = async () => {
    let response = await axios.get(getVideosEndpoint());
    setVideos(response.data);
  };
  useEffect(() => {
    getVideos();
  }, []);

  if (videos === null) {
    return <p>Please wait...</p>;
  }

  const selectedVideoId = videoId || videos[0].id;

  const filteredVideos = videos.filter((video) => {
    return selectedVideoId !== video.id;
  });

  return (
    <main className="main">
      <VideoPlayerPage
        selectedVideoId={selectedVideoId}
        className="main__video-player"
      />
      <VideoNav videos={filteredVideos} className="main__video-nav" />
    </main>
  );
};

export default HomePage;
