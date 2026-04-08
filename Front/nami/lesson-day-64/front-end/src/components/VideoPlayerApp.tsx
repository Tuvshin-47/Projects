import React, { useState } from 'react';
import { VideoPlayer } from './VideoPlayer';

export const VideoPlayerApp = (): React.ReactElement => {
  const [isPLaying, setIsPlaying] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setIsPlaying(!isPLaying);
        }}
      >
        {' '}
        {isPLaying ? 'Pause' : 'Play'}
      </button>
      <VideoPlayer
        isPlaying={isPLaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
    </>
  );
};
