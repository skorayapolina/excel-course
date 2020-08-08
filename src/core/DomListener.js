import {capitalize} from '@core/utils';

export class DomListener {
  constructor($root, listeners) {
    if (!$root) {
      throw new Error('No $root provided for DomListener!');
    } else {
      this.$root = $root;
      this.listeners = listeners;
    }
  }

  initDOMListeners() {
    if (this.listeners) {
      this.listeners.forEach(listener => {
        const method = getMethodName(listener);
        if (!this[method]) {
          throw new Error(`Method is not impl in ${this.name} Component`);
        }
        this[method] = this[method].bind(this);
        this.$root.on(listener, this[method]);
      })
    }
  }

  removeDomListeners() {
    if (this.listeners) {
      this.listeners.forEach(listener => {
        const method = getMethodName(listener);
        this.$root.off(listener, this[method]);
      })
    }
  }
}

function getMethodName(eventName) {
  return 'on' + capitalize(eventName);
}
