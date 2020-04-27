window.onload = function() {
	let clickNum = 0;
	document.getElementById("start").onclick = function() {
		clickNum++;
		if(clickNum == 1) {
			this.innerHTML = '点击播放听歌';
			setTimeout(function() {
				document.getElementById("start").innerHTML = '制作人：屠永涛';
			}, 4000);
			(function() {
				let rotateVal = 0 // 旋转角度
				let timer; // 定时器
				// 鼠标悬浮在图片上时，停止旋转，即清除定时器
				document.getElementById('img').onmousemove = function() {
					clearInterval(timer);
				}
				// 鼠标离开图片时，继续旋转，即继续运行定时器
				document.getElementById('img').onmouseleave = function() {
					rotate();
				}
				// 设置定时器
				function rotate() {
					timer = setInterval(function() {
						var img = document.getElementById('img');
						rotateVal += 1;
						// 设置旋转属性(顺时针)
						img.style.transform = 'rotate(' + rotateVal + 'deg)';
						// 设置旋转时的动画  匀速0.1s
						img.style.transition = '0.1s linear';
					}, 100);
				}

				let auto = document.querySelector('.btn1');
				let musicBtn = document.getElementById('music');
				let voice = document.getElementById("voice");
				let next = document.getElementById("next");
				let prev = document.getElementById("prev");

				function check() {
					if(music.paused) {
						music.play();
					} else {
						music.pause();
						clearInterval(timer);
					}
				}

				auto.onclick = function() {
					/*对切换按钮进行设置并对音乐进行暂停和播放*/
					if(music.paused) {
						auto.children[0].style.opacity = '0';
						auto.children[1].style.opacity = '1';
						rotate();
					} else {
						auto.children[0].style.opacity = '1';
						auto.children[1].style.opacity = '0';
					}
					check();

				}
				/*对音量改变做监听*/
				voice.onchange = function() {
					music.volume = voice.value;
					let range = document.getElementById("voice");
					text = document.getElementById("num");
					text.innerHTML = eval(Math.floor(range.value * 100));
				}

				let srcs = ['voice/涛声依旧.mp3', 'voice/我的将军啊.mp3', 'voice/追梦赤子心.mp3', 'voice/铃儿响叮当.mp3'];
				let names = ['涛声依旧', '我的将军啊', '追梦赤子心', '铃儿响叮当'];
				let bgs = ['bgs/bg1.png', 'bgs/bg2.png', 'bgs/bg3.png', 'bgs/bg4.png'];
				let userName = document.getElementById("username");
				let img = document.getElementById("img");

				function slideTo(index) {
					music.src = srcs[index];
					userName.innerText = names[index];
					img.src = bgs[index];
				}

				let index = 0;
				next.onclick = function() {
					index++;
					if(index === 4) {
						index = 0;
					}
					slideTo(index);
					check();
				}
				prev.onclick = function() {
					index--;
					if(index === -1) {
						index = 3;
					}
					slideTo(index);
					check();
				}
			})();
		} else {
			return;
		}

	}

}