declare type AVAudioSessionCategory = 'Ambient' | 'SoloAmbient' | 'Playback' | 'Record' | 'PlayAndRecord' | 'AudioProcessing' | 'MultiRoute' | 'Alarm';
declare type AVAudioSessionMode = 'Default' | 'VoiceChat' | 'VideoChat' | 'GameChat' | 'VideoRecording' | 'Measurement' | 'MoviePlayback' | 'SpokenAudio';
declare type SoundBasePath = 'MAIN_BUNDLE' | 'DOCUMENT' | 'LIBRARY' | 'CACHES' | string;
export interface SoundOptions {
    readonly rejectOnUnsupportedFeature?: boolean;
    readonly enableSMTCIntegration?: boolean;
}
export declare class Sound {
    private readonly MAIN_BUNDLE;
    private readonly DOCUMENT;
    private readonly LIBRARY;
    private readonly CACHES;
    protected readonly isAndroid: boolean;
    protected readonly isWindows: boolean;
    protected isPlaying: boolean;
    protected _isLoaded: boolean;
    private readonly basePath;
    private readonly _filename;
    private readonly rejectOnUnsupportedFeature;
    private key;
    private volume;
    private onPlaySubscription;
    private pan;
    private duration;
    private numberOfChannels;
    private numberOfLoops;
    private speed;
    constructor(filename: string, basePath?: SoundBasePath, options?: SoundOptions);
    private isRelativePath;
    private registerOnPlay;
    play(): Promise<any>;
    pause(): Promise<void>;
    stop(): Promise<void>;
    reset(): Promise<void>;
    release(): Promise<void>;
    getDuration(): number;
    getNumberOfChannels(): 1 | -1 | 2;
    getVolume(): number;
    setVolume(volume: number): Promise<void>;
    getSystemVolume(): Promise<void>;
    setSystemVolume(volume: number): Promise<void>;
    getPan(): number;
    setPan(pan: number): Promise<void>;
    getNumberOfLoops(): number;
    setNumberOfLoops(loops: number): Promise<void>;
    setSpeed(speed: number): Promise<void>;
    getCurrentSpeed(): number;
    getCurrentTime(): Promise<number>;
    setCurrentTime(time: number): Promise<void>;
    setSpeakerphoneOn(): Promise<void>;
    setSpeakerphoneOff(): Promise<void>;
    enable(): Promise<void>;
    disable(): Promise<void>;
    enableInSilenceMode(): Promise<void>;
    disableInSilenceMode(): Promise<void>;
    setActive(): Promise<void>;
    setInactive(): Promise<void>;
    setCategory(category: AVAudioSessionCategory, mixWithOthers?: boolean): Promise<void>;
    setMode(mode: AVAudioSessionMode): Promise<void>;
    isLoaded(): Promise<void>;
}
export {};
