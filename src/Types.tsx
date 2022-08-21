class Link {
    source = '';
    target = '';
    value = '';
  
    constructor(source, target, value) {
      this.source = source;
      this.target = target;
      this.value = value;
    }
}

class Node {
    label = '';

    constructor(label) {
        this.label = label;
    }
}

export {
    Link,
    Node,
}