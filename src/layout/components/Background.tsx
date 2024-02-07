interface VideoBackgroundProps {
  url: string;
  blurSize?: number | string;
}

function VideoBackground(props: VideoBackgroundProps) {
  const videoBg = (
    <video
      className="w-full h-full object-cover"
      loop
      autoPlay
      muted
      src={props.url}
    ></video>
  );

  const imageBg = (
    <div
      className="w-full h-full object-cover bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url(${props.url})` }}
    ></div>
  );

  const checkBgType = () => {
    if (props.url.includes("mp4")) {
      return videoBg;
    } else {
      return imageBg;
    }
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen">
      <div className="ground-glass"></div>
      {checkBgType()}
    </div>
  );
}

export default VideoBackground;
