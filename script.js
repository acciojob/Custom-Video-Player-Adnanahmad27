/* Edit this file */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const volume = ranges[0];
const speed = ranges[1]; 
const backwardBtn = skipButtons[0];
const forwardBtn = skipButtons[1];
function changeSeekTime(dir){
    dir==='forward' ? (video.currentTime += 25) : (video.currentTime -= 10);
}

video.addEventListener('timeupdate' , ()=>{
    let widthInPercentage = (video.currentTime * 100)/video.duration;
    progressBar.style.width = `${widthInPercentage}%`;
});

forwardBtn.addEventListener('click',()=>changeSeekTime('forward'));
backwardBtn.addEventListener('click', ()=>changeSeekTime('backward'));

volume.addEventListener('change' ,()=>{
    let selectedValue = volume.value;
    video.volume = selectedValue
});
speed.addEventListener('change',()=>{
    let selectedValue = speed.value;
    video.playbackRate = speedMap[selectedValue];
});
toggle.addEventListener('click' , () => {
	if(video.paused){
		toggle.innerText = '❚ ❚'; 
		video.play();
	}else{
		video.pause();
		toggle.innerText = '► '
	}
})
