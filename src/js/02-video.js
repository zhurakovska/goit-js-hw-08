import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const player = new Player('vimeo-player');

const onPlay = function(data) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(data))
};

player.on('timeupdate', throttle(onPlay, 1000));

const timeString = localStorage.getItem('videoplayer-current-time');
if (timeString) {
    const timeParse = JSON.parse(timeString);
    player.setCurrentTime(timeParse.seconds)
} else {
  console.log('Play time not found in localStorage');
}