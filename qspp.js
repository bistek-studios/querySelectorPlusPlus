let qspp = {};

qspp.version = "1.0.1rc1";

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
	self.getattr = (attr) => {
		return self.element.getAttribute(attr);
	};
	self.setattr = (attr,value) => {
		return self.element.setAttribute(attr,value);
	};
	return self;
};

console.log("Using querySelectorPlusPlus version " + qspp.version);
	return self;
};
