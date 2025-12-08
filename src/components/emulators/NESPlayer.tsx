import { useEffect, useRef } from "react";
import { NES } from "jsnes";

// This component will work as a NES emulator
export function NESPlayer({ romPath }: { romPath: string }) {

    // Creating canvas reference
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // Creating nes component reference
    const nesRef = useRef<NES | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current!;
        const context = canvas.getContext("2d")!;

        nesRef.current = new NES({

            // Making the game run in 60 fps
            onFrame: function (frameBuffer: Uint32Array) {
                const imageData = context.getImageData(0, 0, 256, 240);

                for (let i = 0; i < frameBuffer.length; i++) {
                    const color = frameBuffer[i];

                    imageData.data[i * 4 + 0] = (color >> 16) & 0xFF; // R
                    imageData.data[i * 4 + 1] = (color >> 8) & 0xFF;  // G
                    imageData.data[i * 4 + 2] = color & 0xFF;         // B
                    imageData.data[i * 4 + 3] = 0xFF;                 // A
                }

                context.putImageData(imageData, 0, 0);
            },
            // Callback when the rom is loaded
            onStatusUpdate: function (msg: string) {
                console.log(msg);
            },
        });

        return () => {
            nesRef.current = null;
        };
    }, []);

    // Async function to load the rom
    useEffect(() => {
        async function loadROM() {
            const response = await fetch(romPath);
            const arrayBuffer = await response.arrayBuffer();
            const byteArray = new Uint8Array(arrayBuffer);

            // JSNES requires ROM as a binary string
            let romString = "";
            for (let i = 0; i < byteArray.length; i++) {
                romString += String.fromCharCode(byteArray[i]);
            }

            nesRef.current!.loadROM(romString);
            nesRef.current!.frame();
        }

        loadROM();
    }, [romPath]);

    // Returning canvas with the game
    return (
        <canvas
            ref={canvasRef}
            width={256}
            height={240}
            style={{ border: "1px solid white" }}
        />
    );
}
