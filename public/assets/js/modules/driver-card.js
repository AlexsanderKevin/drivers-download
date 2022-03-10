export default class DriverCard {
    constructor(obj) {
        this.type = obj.type;
        this.path = obj.path;
        this.updatedAt = obj.updated_at;
    }

    typeElement() {
        const type = document.createElement('span');
        type.classList.add('driver-type');
        type.innerText = this.type;

        return type;
    }

    centerInfoContainer() {
        const driverName = document.createElement('span');
        driverName.classList.add('driver-name');
        const regexp = /\/?[a-zA-Z0-9\-]+\//g;
        driverName.innerHTML = this.path.replace(regexp, '');

        const updatedAt = document.createElement('span');
        updatedAt.classList.add('alteration-date');
        updatedAt.innerText = this.updatedAt;

        const container = document.createElement('div');
        container.classList.add('center-info');
        container.appendChild(driverName);
        container.appendChild(updatedAt);
        return container;
    }

    downloadButton() {
        const button = document.createElement('a');
        button.classList.add('download-link');
        button.setAttribute('href', this.path);
        button.innerText = 'Download';
        return button;
    }

    element() {
        const element = document.createElement('div');
        element.classList.add('driver-card');
        element.setAttribute('data-card', '');
        element.appendChild(this.typeElement());
        element.appendChild(this.centerInfoContainer());
        element.appendChild(this.downloadButton());
        return element;
    }
}
