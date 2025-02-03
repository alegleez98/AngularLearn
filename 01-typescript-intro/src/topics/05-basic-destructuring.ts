interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "NuevaYol",
    details: {
        author: 'Bad Bunny',
        year: 2025
    }
}

const song = 'Un baile Inolvidable'

const {song: anotherSong, songDuration: duration, details} = audioPlayer;
const {author} = details;

console.log('Song: ', anotherSong);
console.log('Duration: ', duration);
console.log('Author: ', author);


export {};