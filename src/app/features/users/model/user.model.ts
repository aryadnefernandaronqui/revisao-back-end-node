import { randomUUID } from 'crypto';
export default class User {
  #id;
  #name;
  #age;

  constructor(name: string, age: number) {
    this.#id = randomUUID();
    this.#name = name;
    this.#age = age;
  }

  get id(): string {
    return this.#id;
  }

  get name(): string {
    return this.#name;
  }

  get age(): number {
    return this.#age;
  }

  toJSON(){
    return {
      id: this.#id,
      name: this.#name,
      age: this.#age
    }
  }
}
