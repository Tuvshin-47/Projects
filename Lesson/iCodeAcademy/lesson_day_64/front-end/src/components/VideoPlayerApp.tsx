import React, { useState } from "react";
import { VideoPlayer } from "./VideoPlayer";

export const VideoPlayerApp = (): React.ReactElement => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <>
            <button onClick={() => {
                setIsPlaying(!isPlaying);
            }}>{isPlaying ? 'Pause' : 'Play'}</button>

            <VideoPlayer
                isPlaying={isPlaying}
                src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" />
        </>
    );
}

