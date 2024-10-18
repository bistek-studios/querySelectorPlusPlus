let qspp = {};

qspp.querySelector = (selector) => {
	let self = {};
	self.selector = selector;
	self.element = document.querySelector(self.selector);
	self.gethtml = () => {
		return self.element.innerHTML;
	};
	self.sethtml = (html) => {
		self.element.innerHTML = html;
	};
	self.on = (event,callback) => {
		self.element.addEventListener(event,callback);
	};
	self.show = () => {
		self.element.style.display = "block";
	};
	self.hide = () => {
		self.element.style.display = "none";
	};
	return self;
};