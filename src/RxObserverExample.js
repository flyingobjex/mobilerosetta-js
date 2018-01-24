import Rx from 'rxjs'

export class RxObserverExample {

  constructor(){

    const self = this;

    this.author = new Rx.Subject();
    this.author.subscribe((a = {"name": "default"}) => {
      self.currentName = a.name || 'no name';
      self.currentID = a.id || 999
    });
  }

  describe() {
    return `Author: ${this.currentName}, ID: ${this.currentID}`
  }
}
