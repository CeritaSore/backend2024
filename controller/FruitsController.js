import { fruit } from "../data/Fruit.js";
// /**
//  * TODO 3:
//  * - import fruits dari data/fruits.js
//  * - refactor variabel ke ES6 variable
//  */
// var fruits = "";
let fruits = fruit;

// /**
//  * TODO 4:
//  * - Buat method index.
//  * - Refactor function ke ES6 Arrow Function
//  * - Tampilkan data fruits.
//  *
//  * @hint - Gunakan looping for of
//  */
export const index = () => {
  console.log(fruits);
};
// /**
//  * TODO 5:
//  * - Buat method store.
//  * - Refactor function ke ES6 Arrow Function
//  * - Menambahkan data baru ke array fruits.
//  *
//  * @param {string} name - Nama buah.
//  *
//  * @hint - Gunakan method push
//  */
// function store(name) {}
export const store = (name) => {
  fruits.push(name);
  console.log(fruits);
};
// /**
//  * TODO 6:
//  * - Buat method update.
//  * - Refactor function ke ES6 Arrow Function
//  * - Memperbarui data fruits.
//  *
//  * @param {number} position - Posisi atau index yang ingin diupdate.
//  * @param {string} name - Nama buah yang baru.
//  */
// function update(position, name) {}
export const update = (position, name) => {
  fruits[position] = name;
  console.log(fruits);
};
// /**
//  * TODO 7:
//  * - Buat method destroy.
//  * - Refactor function ke ES6 Arrow Function
//  * - Menghapus data fruits.
//  *
//  * @param {number} position - Posisi atau index yang ingin dihapus
//  *
//  * @hint - Gunakan method splice
//  */
// function destroy(position) {}
export const destroy = (position) => {
  if (position >= 0 && position < fruits.length) {
    fruits.splice(position, 1);
    console.log(fruits);
  }
};
// /**
//  * TODO 8: export method index, store, update, dan destroy
//  */
// module.exports = "";
