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

    driverCard(driver) {
        const cardElement = document.createElement('div');
        cardElement.classList.add('driver-card');

        const type = document.createElement('span');
        type.classList.add('driver-type');
        type.innerText = driver.type;

        const centerInfo = document.createElement('div');
        centerInfo.classList.add('center-info');

        const updatedAt = document.createElement('span');
        updatedAt.classList.add('alteration-date');
        updatedAt.innerText = driver.updated_at;

        const driverName = document.createElement('span');
        driverName.classList.add('driver-name');
        driverName.innerText = 'driver-version-tralala';
        centerInfo.appendChild(updatedAt);
        centerInfo.appendChild(driverName);

        const downloadButton = document.createElement('a');
        downloadButton.setAttribute('href', driver.path);
        downloadButton.classList.add('download-link');
        downloadButton.innerText = 'Download';

        cardElement.appendChild(type);
        cardElement.appendChild(centerInfo);
        cardElement.appendChild(downloadButton);
        return cardElement;
    }

    driversContainer() {
        const container = document.createElement('div');
        container.setAttribute('data-container', 'drivers');
        container.classList.add('drivers-container');
        const { drivers } = this;

        drivers.forEach((driver, index) => {
            const card = this.driverCard(driver);
            container.appendChild(card);

            if (index === 0) card.classList.add('active');
        });

        return container;
    }
}
