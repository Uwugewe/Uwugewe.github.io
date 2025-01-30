class Styles {
  add(target, styleName, value) {
    target.style[styleName] = value;
  };
  remove(target, styleName){
    target.style.removeProperty(styleName);
  };
  addMany(target, styles){
    for (let [key, value] of Object.entries(styles)) {
      target.style[key] = value;
    }
  }
}

export default Styles;