import DeviceElements from './modules/device-elements.js';

async function initComponents() {
    const fetchDevices = await fetch('./json/files.json');
    const devicesJson = await fetchDevices.json();
    const devicesArray = [...devicesJson];

    const devicesElements = devicesArray.reduce((acc, device) => {
        const deviceElement = new DeviceElements(device);
        const devicesContainer = document.querySelector('[data-container=devices]');
        const driversSection = document.querySelector('[data-section=drivers]');

        devicesContainer.appendChild(deviceElement.radio());
        devicesContainer.appendChild(deviceElement.label());
        driversSection.appendChild(deviceElement.driversContainer());

        let accArray = acc;
        accArray = {
            models: {
                input: [...devicesContainer.querySelectorAll('[data-model=input]')],
                label: [...devicesContainer.querySelectorAll('[data-model=label]')],
            },
            drivers: [...driversSection.querySelectorAll('[data-container=drivers]')],
        };
        return accArray;
    }, {});

    devicesElements.models.label[0].classList.add('active');
    devicesElements.drivers[1].classList.add('active');
}

initComponents();
