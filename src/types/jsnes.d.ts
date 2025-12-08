declare module "jsnes" {
    export class NES {
        constructor(options: unknown);
        loadROM(romData: string): void;
        frame(): void;
        buttonDown(port: number, button: number): void;
        buttonUp(port: number, button: number): void;
    }
}