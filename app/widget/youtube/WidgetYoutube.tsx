import YouTube, { YouTubePlayer } from "react-youtube";

interface WidgetYoutube {
  height?: string;
  width?: string;
  vidId: string;
}

const WidgetYoutube = (props: WidgetYoutube) => {
  const opts = {
    height: "280",
    width: "550",
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <div>
      <YouTube
       
        videoId={props?.vidId?.split("?v=")[1] ?? ""}
        opts={opts}
      />
    </div>
  );
};

export default WidgetYoutube;
