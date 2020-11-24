function render(element, container) {
  if (typeof element === 'string' || typeof element === 'number' || typeof element === 'boolean') {
    return container.appendChild(document.createTextNode(element));
  }
  var type, props;
  type = element.type;
  props = element.props;
  var isReactComponent = type.isReactComponent;
  if (isReactComponent) {
    var componentInstance = new type(props);
    element = componentInstance.render();
    type = element.type;
    props = element.props;
  } else if (typeof type === 'function') {
    element = type(props);
    type = element.type;
    props = element.props;
  }

  var dom = renderDOM(type, props)
  container.appendChild(dom);

}

function renderDOM(type, props) {
  let dom = document.createElement(type);
  for (const propName in props) {
    if (propName === 'children') {
      props.children.forEach(child => render(child, dom))
    } else if (propName === 'className') {
      dom.className = props[propName];
    } else if (propName === 'style') {
      const styleObj = props[propName];
      for (const attr in styleObj) {
        dom.style[attr] = styleObj[attr];
      }

    }else {
      dom.setAttribute(propName, props[propName]);
    }
  }
  return dom;
}

export default {
  render
}