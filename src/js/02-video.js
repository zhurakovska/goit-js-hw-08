import Player from '@vimeo/player';

const div = document.getElementById('vimeo-player');
const player = new Player(div, {
  id: 76979871,
  height: 360,
  width: 640
});

const onPlay = function(data) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
};

player.on('timeupdate', onPlay);

const timeString = localStorage.getItem('videoplayer-current-time');
const timeParse = JSON.parse(timeString)

player.setCurrentTime(timeParse.seconds).then(function(seconds) {
    console.log(seconds)    
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                // the time was less than 0 or greater than the video’s duration
                break;
    
            default:
                // some other error occurred
                break;
        }
    });     