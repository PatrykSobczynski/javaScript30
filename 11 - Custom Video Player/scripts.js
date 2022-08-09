const player_video = document.querySelector(".player__video");

const player_button_toggle = document.querySelector(".toggle");

const progress = document.querySelector(".progress");
const progress_filled = document.querySelector(".progress__filled");

const video_volume = document.getElementsByName("volume")[0];
const video_speed = document.getElementsByName("playbackRate")[0];

const videoSkip = document.querySelector("[data-skip='25']");
const videoSkipBack = document.querySelector("[data-skip='-10']");

function handlePlayButton() {

    if (player_video.paused) {
        player_video.play();
        player_button_toggle.innerText = "❚ ❚";
    } else {
        player_video.pause();
        player_button_toggle.innerText = "►"
    }
}

function updateProgressBar() {
    const percent = (player_video.currentTime / player_video.duration) * 100;
    progress_filled.style.flexBasis = `${percent}%`;
}

function videoVolume(e) {
    player_video.volume = e.target.value;
}

function videoSpeed(e) {
    player_video.playbackRate = e.target.value;
}

function video10secBack() {
    player_video.currentTime -= 10;
}

function video25secForward() {
    player_video.currentTime += 25;
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * player_video.duration;
    player_video.currentTime = scrubTime;
}


player_video.addEventListener("click", handlePlayButton);
player_video.addEventListener("timeupdate", updateProgressBar)

player_button_toggle.addEventListener("click", handlePlayButton);

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

video_volume.addEventListener("change", videoVolume);
video_volume.addEventListener("mousemove", videoVolume);

video_speed.addEventListener("change", videoSpeed);
video_speed.addEventListener("mousemove", videoSpeed);

videoSkip.addEventListener("click", video25secForward);
videoSkipBack.addEventListener("click", video10secBack);





