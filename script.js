// toggle class active

const navigasi = document.querySelector('.navigasi');

//ketika menu di klik

document.querySelector('#menu').onclick = () =>{
	navigasi.classList.toggle('active');
}

// klik diluar sidebar untuk menghilangkan navigasi/menu

const menu = document.querySelector('#menu');

document.addEventListener('click', function(e){
	if(!menu.contains(e.target) && !navigasi.contains(e.target)){
		navigasi.classList.remove('active');
	}
});