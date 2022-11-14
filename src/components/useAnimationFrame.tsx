import React, { useEffect } from "react";

export const useAnimationFrame = (callback: (time: number) => void, play: boolean) => {
    const requestRef = React.useRef<number>();
    const previousTimeRef = React.useRef<number>();

    const animate = (time: number) => {
        if (!play) {
            previousTimeRef.current = undefined
            return
        }
        if (previousTimeRef.current != undefined) {
            const deltaTime = time - previousTimeRef.current;
            callback(deltaTime)
        }
        previousTimeRef.current = time;
        requestRef.current = requestAnimationFrame(animate);
    }

    useEffect(() => {
        requestRef.current = requestAnimationFrame(animate);
        return () => {
            if (requestRef.current) cancelAnimationFrame(requestRef.current)
        }
    }, [play])
}
