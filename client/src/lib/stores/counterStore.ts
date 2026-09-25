// import { action, makeAutoObservable, observable } from "mobx";

import { makeAutoObservable } from "mobx";

export default class CounterStore {
  title = "Counter store";
  count = 0;

  events: string[] = [];

  constructor() {
    // Automatically make all properties observable and all methods actions
    // makeAutoObservable(this, {
    //   title: observable,
    //   count: observable,
    //   increment: action,
    //   decrement: action,
    // });

    // Simple way Automatically make all properties observable and all methods actions
    makeAutoObservable(this);
  }

  increment = (amount: number = 1) => {
    this.count += amount;
    this.events.push(`Incremented by ${amount} - count is now ${this.count}`);
  };

  decrement = (amount: number = 1) => {
    this.count -= amount;
    this.events.push(`Decremented by ${amount} - count is now ${this.count}`);
  };

  get eventCount() {
    return this.events.length;
  }
}
