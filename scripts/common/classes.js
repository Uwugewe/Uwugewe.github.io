class Classes {
  static add(target, className) {
    target.classList.add(className);
  };
  static toggle(target, className){
    target.classList.toggle(className);
  };
}

export default Classes;