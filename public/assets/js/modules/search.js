export default function initSearch() {
    const button = document.querySelector('[data-button=search]');
    const input = document.querySelector('[data-input=search]');
    const title = document.querySelector('[data-title=devices-container]');

    function handleClick(event) {
        const { target } = event;
        target.classList.toggle('active');
        input.classList.toggle('active');
        title.classList.toggle('active');
    }

    button.addEventListener('click', handleClick);
}
