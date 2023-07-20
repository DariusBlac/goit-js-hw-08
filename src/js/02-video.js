import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

const STORAGE_KEY = 'videoplayer-current-time';

const onPlay = function (data) {
  localStorage.setItem(STORAGE_KEY, data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

// Перевіряємо чи є збережений час в localStorage

const currentTime = localStorage.getItem(STORAGE_KEY);
if (currentTime) {
  player.setCurrentTime(currentTime);
}