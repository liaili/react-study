function createElement(type, config={}, ...children) {
  return {
    // $$typeof: Symbol.for('react.element'),
    type,
    props: {...config, children},
  }
}

export default {
  createElement
}