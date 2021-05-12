
$(function() {
	new Slider({
		images: '.slider img',
		auto: true,
		rate: 2000
	});
});
$(function() {
	new Slider({
		images: '.car_showcase img',
		auto: true,
		rate: 2000
	});
});
function Slider(obj) {
	this.images = $(obj.images);
	this.auto = obj.auto;
	this.rate = obj.rate || 1000;
	var i = 0;
	var slider = this;
	this.next = function () {
		slider.images.eq(i).removeClass('shown');
		if(i == slider.images.length - 1) {
			i = 0;	
		}
		else {
			i++;
		}
		slider.images.eq(i).addClass('shown');
	}
	if (slider.auto) {
		setInterval(slider.next, slider.rate);		
	}
};
function menubar() {
	var x = document.getElementById("bar");
	if (x.className === "navbar") {
		x.className += " responsive";
	}
	else {
		x.className = "navbar";	
	}
}

function update(url) {
 	document['big_car'].src=url;
}