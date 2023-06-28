let btns =document.querySelectorAll('.btn')
let pop = document.querySelector('.trailer-container')
let video = document.querySelector('video')
let play = false

btns.forEach(btn => {
    btn.addEventListener('click',() => {
       pop.classList.toggle('active')
       play = !play;
       console.log(play)
       if(play){
        video.play()
       }else{
        video.pause()
        video.currentTime = 0
       }
    })
})