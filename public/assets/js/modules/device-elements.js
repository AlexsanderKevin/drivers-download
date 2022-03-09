import handleMouseEnter from './handle-mouse-enter-card.js';
import DriverCard from './driver-card.js';

export default class DeviceElements {
    constructor(obj) {
        this.device = obj.device;
        this.id = obj.device.replace(' ', '').toLowerCase();
        this.drivers = obj.drivers;
    }

    radio() {
        const radioInput = document.createElement('input');
        radioInput.setAttribute('type', 'radio');
        radioInput.setAttribute('name', 'device-model');
        radioInput.setAttribute('id', this.id);
        radioInput.setAttribute('data-model', 'input');

        return radioInput;
    }

    label() {
        const label = document.createElement('label');
        label.classList.add('device-label');
        label.setAttribute('for', this.id);
        label.innerText = this.device;
        label.setAttribute('data-model', 'label');

        return label;
    }

    driversContainer() {
        const container = document.createElement('div');
        container.setAttribute('data-container', 'drivers');
        container.classList.add('drivers-container');
        const { drivers } = this;

        drivers.forEach((driver, index) => {
            const card = new DriverCard(driver).element();
            container.appendChild(card);
            if (index === 0) card.classList.add('active');
        });

        const cards = container.querySelectorAll('[data-card]');
        cards.forEach((card) => {
            card.addEventListener('mouseenter', handleMouseEnter);
        });

        return container;
    }
}
