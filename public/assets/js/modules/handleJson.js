import DeviceElements from './device-elements.js';
import handleDeviceSelection from './device-selection.js';
// import apiTest from './api-test.js';

// apiTest();

export default async function handleJson() {
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

        let accObj = acc;
        accObj = {
            models: {
                input: [...devicesContainer.querySelectorAll('[data-model=input]')],
                label: [...devicesContainer.querySelectorAll('[data-model=label]')],
            },
            drivers: [...driversSection.querySelectorAll('[data-container=drivers]')],
        };
        return accObj;
    }, {});

    devicesElements.models.label[0].classList.add('active');
    devicesElements.drivers[0].classList.add('active');

    const { label: labels } = devicesElements.models;
    const { drivers } = devicesElements;

    handleDeviceSelection(labels, drivers);
}
