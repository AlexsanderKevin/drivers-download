export default function handleMouseEnterCard(event) {
    const { target } = event;
    const container = target.parentElement;
    const siblings = container.querySelectorAll('[data-card]');

    siblings.forEach((sibling) => sibling.classList.remove('active'));
    target.classList.add('active');
}
