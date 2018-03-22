import { zebra } from '../tools/util'

export class Component {
	constructor (config) {
		this.template = config.template,
		this.selector = config.selector,
		this.element = null
	}

	render() {
		this.element = document.querySelector(this.selector);
		if (!this.element){
			console.log(`Component with selector ${this.selector} is not used`);
			return;
		}
		const transformedTemplate = this.template
		this.element.innerHTML = this.template;

		this._initEvents();
	}

	_initEvents(){
		if (zebra.isUndefined(this.events)){
			return;
		}
		const events = this.events();
		Object.keys(events).forEach(key =>{
			const eventKeys = key.split(' ');
			const targetElement = this.element.querySelector(eventKeys[1]);
			targetElement.addEventListener(eventKeys[0], this[events[key]].bind(this));
		});
	}
}