function createElement(type, config={}, ...children) {
  return {
    // $$typeof: Symbol.for('react.element'),
    type,
    props: {...config, children},
  }
}

class Component {
  static isReactComponent = true; // 是一个类组件
  constructor(props) {
    this.props = props;
  }
}

export default {
  createElement,
  Component
}