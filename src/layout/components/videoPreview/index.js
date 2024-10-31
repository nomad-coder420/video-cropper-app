import ReactPlayer from "react-player";
import classes from "./styles.module.css";
import videoPlayerImage from "../../../assets/images/video-player.png";

const VideoPreview = ({
  videoplayback,
  videoRef,
  previewVideoRef,
  videoState,
  aspectRatio,
  cropperPosition,
  showCropper,
}) => {
  if (!videoRef.current) {
    return null;
  }

  const previewHeight = 500;
  const previewWidth = previewHeight * aspectRatio;

  const cropperXOffset =
    (cropperPosition.x / videoRef.current.wrapper.clientHeight) * previewHeight;

  return (
    <div className={classes.videoPreviewContainer}>
      <div className={classes.previewHeader}>
        <p className={classes.previewHeaderText}>Preview</p>
      </div>
      <div
        className={classes.previewVideoContainer}
        style={{
          width: `${previewWidth}px`,
          height: `${previewHeight}px`,
          display: showCropper ? "block" : "none",
        }}
      >
        <ReactPlayer
          url={videoplayback}
          ref={previewVideoRef}
          playing={videoState.isPlaying}
          playbackRate={videoState.playbackSpeed.value}
          volume={videoState.volume}
          width="auto"
          height={previewHeight}
          style={{
            position: "absolute",
            left: -cropperXOffset,
          }}
        />
      </div>
      <div
        className={classes.noPreviewContainer}
        style={{ display: showCropper ? "none" : "flex" }}
      >
        <img
          src={videoPlayerImage}
          className={classes.previewImage}
          alt="video-player"
        />
        <p className={classes.noPreviewHeading}>Preview not available</p>
        <p className={classes.noPreviewText}>
          Please click on "Start Cropper" and then play video
        </p>
      </div>
    </div>
  );
};

export default VideoPreview;
