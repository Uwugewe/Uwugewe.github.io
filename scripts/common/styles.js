class Styles {
  static add(target, styleName, value) {
    target.style[styleName] = value;
  };
  static remove(target, styleName){
    target.style.removeProperty(styleName);
  };
  static addMany(target, styles){
    for (let [key, value] of Object.entries(styles)) {
      target.style[key] = value;
    }
  }
}

export default Styles;