export default function dropdown(identifier, menuIdentifier) {
  document.addEventListener('click', (e) => {
    const isDropdownButton = e.target.classList.contains(identifier);
    if (!isDropdownButton && e.target.closest(`.${menuIdentifier}`)) return;

    let currentDropdown;
    if (isDropdownButton) {
      currentDropdown = e.target.nextElementSibling;
      currentDropdown.classList.toggle('active-dropdown');
    }

    document.querySelectorAll('.active-dropdown').forEach((item) => {
      if (item === currentDropdown) return;

      item.classList.remove('active-dropdown');
    });
  });
}
