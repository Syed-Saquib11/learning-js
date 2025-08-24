---

# ⚡ JavaScript Control Flow — Cheat Sheet

## 1. Conditionals

### **if / else if / else**

```js
if (num < 10) {
  console.log("Small");
} else if (num <= 20) {
  console.log("Medium");
} else {
  console.log("Large");
}
```

### **Ternary Operator**

```js
let age = 18;
let status = (age >= 18) ? "Adult" : "Minor";
```

---

## 2. Switch

```js
let day = 3;

switch (day) {
  case 1: console.log("Monday"); break;
  case 2: console.log("Tuesday"); break;
  case 3: console.log("Wednesday"); break;
  default: console.log("Invalid day");
}
```

---

## 3. Loops

### **for loop**

```js
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

### **while loop**

```js
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
```

### **do…while**

```js
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);
```

### **for…of (arrays)**

```js
const fruits = ["apple", "mango", "banana"];
for (let fruit of fruits) {
  console.log(fruit);
}
```

### **for…in (objects)**

```js
const user = { name: "Ali", age: 22 };
for (let key in user) {
  console.log(key, user[key]);
}
```

---

## 4. Loop Control

```js
for (let i = 1; i <= 10; i++) {
  if (i === 5) break;    // exit loop
  if (i % 2 === 0) continue; // skip iteration
  console.log(i);
}
```

---

## 5. Error Handling

```js
try {
  let data = JSON.parse('{"name":"Ali"}');
  console.log(data.name);
} catch (err) {
  console.log("Error:", err.message);
} finally {
  console.log("Done!");
}
```

---

# 🚀 Big Picture

* **if/else & switch** → decision making
* **loops** → repeating tasks
* **break/continue** → fine control inside loops
* **try/catch/finally** → keep app alive when errors happen

---
