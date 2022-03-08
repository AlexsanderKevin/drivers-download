export default class ModelRadio {
    constructor(obj) {
        this.device = obj.device;
        this.id = obj.device.replace(' ', '').toLowerCase();
        this.bios = obj.bios;
        this.audio = obj.audio;
        this.camera = obj.camera;
        this.keyboard = obj.keyboard;
    }

    radio() {
        const radioInput = document.createElement('input');
        radioInput.setAttribute('type', 'radio');
        radioInput.setAttribute('name', 'device-model');
        radioInput.setAttribute('id', this.id);
        radioInput.setAttribute('data-model', '');

        return radioInput;
    }

    label() {
        const label = document.createElement('label');
        label.classList.add('device-label');
        label.setAttribute('for', this.id);
        label.innerText = this.device;
        label.setAttribute('data-model', '');

        return label;
    }
}
