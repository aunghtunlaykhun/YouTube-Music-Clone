import './tool.css';
import { CurrentProgress, Play_back, Play_Pause, ProgressBarC, Repeat, Shuffle } from '../../config/customTools';
import React, { useRef, useState, useEffect } from 'react';
import { Play_Next } from '../../config/customTools';
import { CurrentTime } from '../../config/customTools';
import { Duration } from '../../config/customTools';
import { useMusicContext } from '../../config/music_context';

export const Tools = React.memo(() => {
    const { resultState, dispatch } = useMusicContext();
    const [hoverTime, setHoverTime] = useState<number | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const divRef = useRef<HTMLDivElement | null>(null);
    const audios = resultState.audioRef?.current;
    console.log('current music is playing on',resultState.currentTime);
    const animationFrameId = useRef<number | null>(null);
    console.log('play state is on play or not in tools',resultState.isOnplay);
    

    const calculateProgress = (clientX: number) => {
        if (!divRef.current || !resultState.duration) return { newProgress: 0, newTime: 0 };

        const rect = divRef.current.getBoundingClientRect();
        console.log(rect.left);
        console.log('rect-width',rect.width);
        console.log('mouse' , clientX);
        const offsetX = clientX - rect.left;
        let newProgress = (offsetX / rect.width) * 100;

        // Clamp the progress between 0 and 100
        newProgress = Math.max(0, Math.min(newProgress, 100));

        const newTime = (newProgress / 100) * resultState.duration;
        return { newProgress, newTime };
    };

    const updateUI = (clientX: number) => {
        const { newProgress, newTime } = calculateProgress(clientX) || {};
        if (newTime !== undefined) {
            setHoverTime(newTime);
            dispatch({ type: 'update_currentTime', payload: newTime });
            dispatch({ type: 'update_progress', payload: newProgress });
            if (audios) {
                audios.currentTime = newTime; // Set the audio element's current time
            }
        }
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (isDragging) {
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
            animationFrameId.current = requestAnimationFrame(() => updateUI(e.clientX));
        }
    };

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault();
        setIsDragging(true); // Start dragging
        updateUI(e.clientX); // Update immediately when starting to drag
    };

    const handleMouseUp = () => {
        if (isDragging) {
            setIsDragging(false); // Stop dragging
            setHoverTime(null);
        }
    };

    const handleMouseLeave = () => {
        if (isDragging) {
            setIsDragging(false);
            setHoverTime(null);
        }
    };

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('mouseleave', handleMouseLeave);

            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };
    }, [isDragging]);

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60).toString().padStart(2, '0');
        return `${minutes}:${seconds}`;
    };

    return (
        <>
            
            <div 
                ref={divRef} 
                className="progress_container" 
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
            >
                <div className="line"></div>
                <ProgressBarC />
                <CurrentProgress />
                {hoverTime !== null && (
                    <div
                        className="hover_time_tooltip"
                        style={{
                            position: "absolute",
                            top: "-20px",
                            left: `${(hoverTime / resultState.duration) * 100}%`,
                            transform: "translateX(-50%)",
                            backgroundColor: "black",
                            color: "white",
                            fontSize: '0.6em',
                            padding: "2px 5px",
                            userSelect: 'none',
                            borderRadius: "4px",
                            pointerEvents: 'none', // Prevent tooltip from interfering with dragging
                        }}
                    >
                        {Math.floor(hoverTime / 60)}:{Math.floor(hoverTime % 60).toString().padStart(2, "0")}
                    </div>
                )}
            </div>

            <div className="time_container">
                <CurrentTime />
                <Duration />
            </div>

            <div className="Play_button_container">
                <Shuffle />
                <Play_back />
                <Play_Pause />
                <Play_Next />
                <Repeat />
            </div>
        </>
    );
});
