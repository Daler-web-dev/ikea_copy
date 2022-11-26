var acc = document.getElementsByClassName("accordion");
var i;

let actimg = document.querySelector(".accordion").lastElementChild;
for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function () {
		/* Toggle between adding and removing the "active" class,
		to highlight the button that controls the panel */
		this.classList.toggle("active");
		actimg.classList.toggle("actimg");

		/* Toggle between hiding and showing the active panel */
		var panel = this.nextElementSibling;
		if (panel.style.display === "block") {
			panel.style.display = "none";
		} else {
			panel.style.display = "block";
		}
	});
}

let liked = JSON.parse(localStorage.getItem("liked")) || []
let basket_create = document.querySelector(".basket_create");
let totalPrice = []

for (let like of liked) {
	axios.get("http://localhost:7777/array/" + like)
	.then((res) => {
		if(res.data) {
			reloadBaskets(res.data, basket_create);
		}
	});
}

let totalElem = document.querySelectorAll(".total");

function reloadBaskets(item, place) {
	let img = item.media[0];
	let basket_create_box = document.createElement("div");
	let box_left = document.createElement("div");
	let prodo_img = document.createElement("img");

	let box_info = document.createElement("div");

	let div = document.createElement("div");
	let box_name = document.createElement("h1");
	let box_subtitle = document.createElement("p");

	let onpions = document.createElement("div");
	let howmash = document.createElement("select");
	let form = document.createElement("form");

	let remove = document.createElement("p");
	let shoping_list = document.createElement("p");

	let prod_price = document.createElement("p");

	basket_create_box.classList.add("basket_create_box");

	box_left.classList.add("box_left");
	prodo_img.classList.add("prodo_img");
	box_info.classList.add("box_info");
	box_name.classList.add("box_name");
	box_subtitle.classList.add("box_subtitle");
	onpions.classList.add("onpions");
	howmash.classList.add("howmash");
	remove.classList.add("remove");
	shoping_list.classList.add("shoping_list");
	prod_price.classList.add("prod_price");

	form.name = "howmany";

	for (let i = 1; i <= 100; i++) {
		let optionn = document.createElement("option");
		optionn.value = i;
		optionn.innerHTML = i;
		howmash.append(optionn);
	}
	prodo_img.src = img;
	prod_price.innerHTML = "€ " + item.price;

	box_name.innerHTML = item.name;
	box_subtitle.innerHTML = item.subtitle;
	remove.innerHTML = "Remove product";
	shoping_list.innerHTML = "Move to shopping list >>";

	place.append(basket_create_box);
	basket_create_box.append(box_left, prod_price);
	box_left.append(prodo_img, box_info);
	box_info.append(div, onpions);
	div.append(box_name, box_subtitle);
	onpions.append(form, remove, shoping_list);
	form.append(howmash);

	howmash.onchange = () => {
		let total = +howmash.value * item.price
		prod_price.innerHTML = "€ " + total;
		
		let finded = totalPrice.find(el => el.id === item.id)

		finded.qt = howmash.value
		calculateSum(totalPrice)
	}

	remove.onclick = () => {
		liked = liked.filter(el => el !== item.id)
		totalPrice = totalPrice.filter(el => el.id !== item.id)

		localStorage.setItem('liked', JSON.stringify(liked))
		basket_create_box.remove()


		calculateSum(totalPrice)
	}

	item.qt = howmash.value

	totalPrice.push(item)
	calculateSum(totalPrice)
}

function calculateSum(arr) {
	let total = 0

	for(let item of arr) {
		total += item.price * item.qt
	}

	totalElem.forEach(element => element.innerHTML = "€ " + total)
}