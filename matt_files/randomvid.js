function generateRandom(min, max, exclude) {
    var num = Math.floor(Math.random() * (max - min)) + min;

    return (num == exclude) ? generateRandom(min, max, exclude) : num;
}


var videos = [
    [ "1.mp4", 0.2, 1.0 ],
    [ "2.mp4", 0.2, 1.0 ],
	[ "3.mp4", 0.2, 1.0 ],
	[ "4.mp4", 0.2, 1.0 ],	
];

var lastVideo = localStorage.getItem("lastVideo");
var currentVideo = generateRandom(0, videos.length, lastVideo);

localStorage.setItem("lastVideo", currentVideo);

document.getElementById('player').innerHTML = "<source src='img/" + videos[currentVideo][0] + "' type='video/mp4'>";
document.getElementById('player').volume = videos[currentVideo][1];
document.getElementById('player').playbackRate = videos[currentVideo][2];

document.getElementsByTagName('input')[0].value = videos[currentVideo][1];

window.addEventListener('touchstart', function videoStart() {
    document.querySelector('video').play();
    removeEventListener('touchstart', videoStart);
});

setInterval(function() {
    if (titleKeyframes.keyframes.length == titleKeyframes.currentKeyframe + 1) {
        titleKeyframes.currentKeyframe = 0;
    } else {
        titleKeyframes.currentKeyframe++;
    }

    document.getElementsByTagName("title")[0].innerHTML = titleKeyframes.keyframes[titleKeyframes.currentKeyframe];
}, titleKeyframes.interval);
