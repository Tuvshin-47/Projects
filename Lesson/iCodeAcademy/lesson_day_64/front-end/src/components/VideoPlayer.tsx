import React, { useEffect, useRef } from "react";

interface VideoPlayerProps {
    src: string
    isPlaying: boolean
}

export const VideoPlayer = ({ src, isPlaying }: VideoPlayerProps): React.ReactElement => {
    const ref = useRef<any>(null);

    useEffect(()=>{
        if (isPlaying) {
            ref.current.play();
        } else {
            ref.current.pause();
        }
        console.log('hi');
    })
    


    return (
        <>
            <video ref={ref} src={src} loop playsInline />
        </>
    )
}