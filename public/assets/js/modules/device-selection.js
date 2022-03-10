export default function handleDeviceSelection(labels, drivers) {
    function handleClick(event) {
        labels.forEach((label) => label.classList.remove('active'));
        drivers.forEach((driver) => driver.classList.remove('active'));

        const { target: eventTarget } = event;
        eventTarget.classList.add('active');

        const targetDevice = eventTarget.getAttribute('data-target');
        drivers.forEach((driver) => {
            if (driver.getAttribute('data-target') === targetDevice) {
                driver.classList.add('active');
            }
        });
    }

    labels.forEach((label) => {
        label.addEventListener('click', handleClick);
    });
}
