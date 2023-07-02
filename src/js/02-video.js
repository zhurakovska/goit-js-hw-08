import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const div = document.getElementById('vimeo-player');
const player = new Player(div, {
  id: 76979871,
  height: 360,
  width: 640
});

const onPlay = function(data) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(data))
};

player.on('timeupdate', throttle(onPlay, 1000));

// const timeString = localStorage.getItem('videoplayer-current-time');
// const timeParse = JSON.parse(timeString)

// player.setCurrentTime(timeParse.seconds)

const timeString = localStorage.getItem('videoplayer-current-time');
if (timeString) {
    const timeParse = JSON.parse(timeString);
    player.setCurrentTime(timeParse.seconds)
} else {
  console.log('error')
}