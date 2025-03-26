/*
class StringBuilder {
  constructor(initialValue) {
    this._value = initialValue; // Приватна властивість value
  }

  // Метод для отримання поточного значення value
  getValue() {
    return this._value;
  }

  // Метод для додавання рядка в кінець value
  padEnd(str) {
    this._value += str;
  }

  // Метод для додавання рядка на початок value
  padStart(str) {
    this._value = str + this._value;
  }

  // Метод для додавання рядка на початок і в кінець value
  padBoth(str) {
    this._value = str + this._value + str;
  }
}

// Перевірка роботи класу
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."

builder.padStart("^");
console.log(builder.getValue()); // "^."

builder.padEnd("^");
console.log(builder.getValue()); // "^.^"

builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
*/

/*
class StringBuilder {
  constructor(initialValue) {
    this._value = initialValue; // Приватна властивість
  }

  // Метод для отримання значення приватної властивості
  getValue() {
    return this._value;
  }

  // Метод для додавання рядка в кінець
  padEnd(str) {
    this._value += str;
  }

  // Метод для додавання рядка на початок
  padStart(str) {
    this._value = str + this._value;
  }

  // Метод для додавання рядка на початок і в кінець
  padBoth(str) {
    this._value = str + this._value + str;
  }
}

// Перевірка роботи класу
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."

builder.padStart("^");
console.log(builder.getValue()); // "^."

builder.padEnd("^");
console.log(builder.getValue()); // "^.^"

builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
*/

class StringBuilder {
  #value; // Оголошуємо приватну властивість

  constructor(initialValue) {
    this.#value = initialValue;
  }

  // Метод для отримання значення приватної властивості
  getValue() {
    return this.#value;
  }

  // Метод для додавання рядка в кінець
  padEnd(str) {
    this.#value += str;
  }

  // Метод для додавання рядка на початок
  padStart(str) {
    this.#value = str + this.#value;
  }

  // Метод для додавання рядка на початок і в кінець
  padBoth(str) {
    this.#value = str + this.#value + str;
  }
}

// Перевірка роботи класу
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."

builder.padStart("^");
console.log(builder.getValue()); // "^."

builder.padEnd("^");
console.log(builder.getValue()); // "^.^"

builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
