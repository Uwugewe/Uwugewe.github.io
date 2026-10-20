class List {
  constructor() {
    this.init();
  }

  lists = [
    '.menu-items', '.menu-items--foccacia', '.menu-items--calzone', '.menu-items--salads', '.menu-items--kids', '.menu-items--other'
  ]

  init() {
    this.lists.forEach(list => {
      const items = document.querySelectorAll(`${list} .menu-item-name`);
      const colors = ['#FF8C00', '#006400ff', '#E53935']; // pomarańczowy, zielony, czerwony

      items.forEach((el, i) => {
        el.textContent = (i + 1).toString();
        el.style.color = colors[i % colors.length];
        el.style.fontWeight = 'bold';
      });
    })
  }
}

export default List;