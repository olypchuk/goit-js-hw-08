import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(takeValueSeconds,1000));

player.setCurrentTime(localStorage.getItem("videoplayer-current-time"))
    
function takeValueSeconds(data) {
     localStorage.setItem("videoplayer-current-time", Number.parseInt(data.seconds));
     

    }