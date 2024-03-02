/* Edit this file */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]'); 
const ranges = player.querySelectorAll('.player__slider');
function changeSeekTime(dir){
    dir==='forward' ? (video.currentTime += 25) : (video.currentTime -= 10);
}

toggle.addEventListener('click', ()=>{
    if(video.paused){
        toggle.innerText = '❚ ❚';
        video.play();
    }else{
        video.pause();
        toggle.innerText = '►';
        
    }
});
video.addEventListener('timeupdate' , ()=>{
    let widthInPercentage = (video.currentTime * 100)/video.duration;
    progressBar.style.width = `${widthInPercentage}%`;
});

skipButtons[1].addEventListener('click',()=>changeSeekTime('forward'));
skipButtons[0].addEventListener('click', ()=>changeSeekTime('backward'));

ranges[0].addEventListener('change' ,()=>{
    let selectedValue = ranges[0].value;
    video.volume = selectedValue
});
ranges[1].addEventListener('change',()=>{
    let selectedValue = ranges[1].value;
    video.playbackRate = selectedValue;
});