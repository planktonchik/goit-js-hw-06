/*
class Storage {
  constructor(initialItems) {
    this._items = initialItems; // Приватна властивість
  }

  // Метод для отримання товарів
  getItems() {
    return this._items;
  }

  // Метод для додавання нового товару
  addItem(newItem) {
    this._items.push(newItem);
  }

  // Метод для видалення товару
  removeItem(itemToRemove) {
    const index = this._items.indexOf(itemToRemove);
    if (index !== -1) {
      this._items.splice(index, 1);
    }
  }
}

// Тестування
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
*/

class Storage {
  constructor(initialItems) {
    this._items = initialItems; // Приватна властивість
  }

  // Метод для отримання товарів
  getItems() {
    return this._items;
  }

  // Метод для додавання товару
  addItem(newItem) {
    this._items.push(newItem);
  }

  // Метод для видалення товару
  removeItem(itemToRemove) {
    const itemIndex = this._items.indexOf(itemToRemove);
    if (itemIndex !== -1) {
      this._items.splice(itemIndex, 1);
    }
  }
}

// Перевірка роботи класу
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
