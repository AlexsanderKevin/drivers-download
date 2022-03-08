import DeviceElements from './modules/model-radio.js';

async function initComponents() {
    const fetchDevices = await fetch('./json/files.json');
    const devicesJson = await fetchDevices.json();
    const devicesArray = [...devicesJson];

    const devicesElements = devicesArray.reduce((acc, device) => {
        const deviceElement = new DeviceElements(device);
        const devicesContainer = document.querySelector('[data-container=devices]');

        devicesContainer.appendChild(deviceElement.radio());
        devicesContainer.appendChild(deviceElement.label());

        deviceElement.driverCard();
        let accArray = acc;
        accArray = {
            models: [...devicesContainer.querySelectorAll('[data-model]')],
            drivers: [],
        };
        return accArray;
    }, {});
    console.log(devicesElements);
}

initComponents();
