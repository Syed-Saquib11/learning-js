# 🔑 Essential Object Methods in JavaScript

---

## 🔹 Creating & Copying

* **`Object.assign(target, ...sources)`** → Shallow copy / merge objects.

  ```js
  let obj = { a: 1 };
  let copy = Object.assign({}, obj);
  ```

* **Spread operator `{ ...obj }`** → Modern way to shallow copy.

  ```js
  let copy = { ...obj };
  ```

---

## 🔹 Inspection (checking properties)

* **`Object.keys(obj)`** → Array of property names (strings).

  ```js
  Object.keys({a:1, b:2}); // ["a","b"]
  ```

* **`Object.values(obj)`** → Array of property values.

  ```js
  Object.values({a:1, b:2}); // [1,2]
  ```

* **`Object.entries(obj)`** → Array of `[key, value]` pairs.

  ```js
  Object.entries({a:1, b:2}); // [["a",1], ["b",2]]
  ```

* **`Object.hasOwn(obj, key)`** → Check if property exists **on object itself** (not prototype).

  ```js
  Object.hasOwn({a:1}, "a"); // true
  ```

* (Older way: `obj.hasOwnProperty("a")`, but `Object.hasOwn` is safer.)

---

## 🔹 Freezing & Sealing

* **`Object.freeze(obj)`** → Makes object completely **immutable** (no adding, deleting, or changing props).

  ```js
  let obj = { a: 1 };
  Object.freeze(obj);
  obj.a = 2; // ignored in strict mode → error
  ```

* **`Object.seal(obj)`** → Can **change values**, but **can’t add/remove properties**.

  ```js
  let obj = { a: 1 };
  Object.seal(obj);
  obj.a = 2;  // ✅ allowed
  obj.b = 3;  // ❌ ignored
  ```

---

## 🔹 Prototype & Meta

* **`Object.create(proto)`** → Creates a new object with a specific prototype.

  ```js
  let parent = { greet: () => "hi" };
  let child = Object.create(parent);
  console.log(child.greet()); // "hi"
  ```

* **`Object.getPrototypeOf(obj)`** → Returns the prototype.

* **`Object.setPrototypeOf(obj, proto)`** → Sets the prototype (not used much, can be slow).

---

## 🔹 Property Descriptors (advanced but useful to know)

* **`Object.getOwnPropertyDescriptor(obj, prop)`** → Info about a property.
* **`Object.defineProperty(obj, prop, descriptor)`** → Define custom property behavior.

  ```js
  let obj = {};
  Object.defineProperty(obj, "id", {
    value: 101,
    writable: false
  });
  console.log(obj.id); // 101
  obj.id = 202;        // ignored (read-only)
  ```

---

#  The "Always Use" Shortlist


* `Object.keys()`
* `Object.values()`
* `Object.entries()`
* `Object.assign()` or `{...obj}`
* `Object.freeze()` / `Object.seal()`
