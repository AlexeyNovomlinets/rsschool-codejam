const sum = (a, b) => a + b;
const make = (...args) => {
    if (typeof args[0] === 'function') {
      const func = args[0];
      return (this.arguments || []).reduce(func);
    }

    this.arguments = [...(this.arguments || []), ...args];
    return make;
};
