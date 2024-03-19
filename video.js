function playVideo(banner, frame) {
    banner.style.display = 'none';
    frame.style.display = 'block';
    frame.src = "https://www.youtube.com/embed/wVkD89V1-BQ?autoplay=1"
}

const banner = document.querySelector(".video");
const frame = document.querySelector(".video__frame");

const playVideoEvent = banner.addEventListener('click', (e)=>{
    playVideo(banner, frame)
});