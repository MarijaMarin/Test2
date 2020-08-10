let dinos = [
	{
		id: 0,
		name: 'Scipionyx',
		img: 'http://images.dinosaurpictures.org/Scipionyx_QY_200_3742.jpg',
		cena: 221
	},
	{
		id: 1,
		name: 'Becklespinax',
		img: 'http://images.dinosaurpictures.org/altispinax-becklespinax_e05c.jpg',
		cena: 275
	},
	{
		id: 2,
		name: 'Sciurumimus',
		img: 'http://images.dinosaurpictures.org/Sciurumimus_albersdoerferi_web_fa15.jpg',
		cena: 341
	},
	{
		id: 3,
		name: 'Hypsilophodon',
		img: 'http://images.dinosaurpictures.org/hypsilophodon-1024x636_6963.jpg',
		cena: 189
	},
	{
		id: 4,
		name: 'Dacentrurus',
		img: 'http://images.dinosaurpictures.org/Dacentrurus_20140118_5d27.jpg',
		cena: 315
	},
	{
		id: 5,
		name: 'Iguanodon',
		img: 'http://images.dinosaurpictures.org/Iguanodon_1157950_ea00.jpg',
		cena: 374
	},
	{
		id: 6,
		name: 'Asylosaurus',
		img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Asylosaurus_NT.jpg/440px-Asylosaurus_NT.jpg',
		cena: 301
	},
	{
		id: 7,
		name: 'Efraasia',
		img: 'http://images.dinosaurpictures.org/efraasia_0a4e.jpg',
		cena: 199
	},
	{
		id: 8,
		name: 'Cryptosaurus',
		img:
			'https://images.dinosaurpictures.org/Cryptosaurus/Cryptosaurus_tumblr_inline_on3a5nVchm1rx4yme_1280_94c8.jpg',
		cena: 218
	}
];

const select = document.getElementById('select-dino');
const inputKupac = document.getElementById('kupac');

dinos.forEach((d) => {
	const option = document.createElement('option');
	option.textContent = d.name + d.id;
	select.appendChild(option);
});

const forma = document.getElementById('forma');
const divConatainer = document.getElementById('item-container');

//<div class="item">
//<p><span>Купац:</span> Ана Перић</p>
//<p><span>Напомена:</span> Упаковати као рођендански поклон</p>
//<p><span>Диносаурус: </span> Efraasia</p>//
//<p><span>Цена: </span> 199</p>
//<p><button>Обриши</button></p>
//</div>
const Item = document.getElementsByClassName('item');
const napomena = document.getElementById('napomena');
const button = document.getElementById('button');

forma.addEventListener('submit', () => {
	if (inputKupac.value.trim() !== '' && select.value !== '' && inputKupac.value >= 4) {
		const p = document.createElement('p');
		p.textContent = inputKupac.value;
		console.log(p);
		const p1 = document.createElement('p');
		p1.textContent = select.value;
		const p2 = document.createElement('p');
		p2.textContent = napomena.value;
		Item.appendChild(p);
		Item.appendChild(p1);
		Item.appendChild(p2);
	} else {
		console.log('Neispravan unos');
	}
});

divConatainer.appendChild(Item);
