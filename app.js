console.log("Let's get this party started!");

async function getGif(input) {
	try {
		const res = await axios.get('http://api.giphy.com/v1/gifs/search', {
			params: {
				q: input,
				api_key: 'pNg1Af1TJEVwawZl33yt7U5MxcnElFS9'
			}
		});
		let num = Math.floor(Math.random() * 50);
		const gif = res.data.data[num].images.fixed_height.url;
		appendGif(gif);
	} catch (err) {
		alert('Please give a valid search parameter!');
	}
}

// function appendGif(gif) {
// 	let container = document.querySelector('#gifBox');
// 	let div = document.createElement('div');
// 	div.classList.add('col-4');
// 	let img = document.createElement('img');
// 	img.classList.add('img-fluid');
// 	img.classList.add('img-thumbnail');
// 	img.src = gif;
// 	div.append(img);
// 	container.append(div);
// }

function appendGif(gif) {
	let $img = $('<img>').addClass('img-fluid img-thumbnail m-2').attr('src', gif);
	$('#gifBox').append($img);
}

// const searchBtn = document.querySelector('#search');
// searchBtn.addEventListener('click', (e) => {
// 	const input = document.querySelector('#input');
// 	e.preventDefault();
// 	getGif(input.value);
// 	input.value = '';
// });

$('#search').click((e) => {
	e.preventDefault();
	getGif($('input').val());
	$('input').val('');
});

// const destroyBtn = document.querySelector('#destroy');
// destroyBtn.addEventListener('click', (e) => {
// 	e.preventDefault();
// 	const gifBox = document.querySelector('#gifBox');
// 	gifBox.innerHTML = '';
// 	console.log('Deleted');
// });

$('#destroy').click($('gifBox').html(''));
