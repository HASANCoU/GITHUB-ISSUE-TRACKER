
# JavaScript Concepts

## 01. Difference between `var`, `let`, and `const`

### var
- `var` is the old way to declare variables.
- It is **function scoped**, meaning it works inside a function block.
- It can be **redeclared and updated**.

**Example:**

```javascript
var name = "Hasan";
var name = "Rahim"; // Allowed
```

---

### let
- `let` was introduced in **ES6**.
- It is **block scoped**, meaning it only works inside `{ }`.
- It **can be updated but cannot be redeclared in the same scope**.

**Example:**

```javascript
let name = "Hasan";
let name = "Rahim"; // Not allowed
name = "Rahim"; // Allowed
```

---

### const
- `const` is also **block scoped**.
- It **cannot be updated or redeclared**.
- It must be **assigned a value when declared**.

**Example:**

```javascript
const name = "Hasan";
const name = "Rahim"; // Not allowed
name = "Rahim"; // Not allowed
```
## 02. What is the Spread Operator (`...`)?

The spread operator (`...`) is used to **expand elements of an array or object**.

It is commonly used to:
- Copy arrays
- Merge arrays
- Copy objects

### Example with Array

```javascript
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];

console.log(newNumbers);
```

### Example with Object

```javascript
const user = { name: "Hasan", age: 22 };

const updatedUser = { ...user, city: "Dhaka" };
```

---

## 03. Difference between `map()`, `filter()`, and `forEach()`



### map()
- Creates a **new array** after transforming each element.It apply something on each element of the array and store in a new array.

```javascript
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
```

---

### filter()
- Creates a **new array with elements that pass a condition**.

```javascript
const numbers = [1, 2, 3, 4];
const even = numbers.filter(num => num % 2 === 0);
```

---

### forEach()
- Executes a function for each element.
- **Does not return a new array**.

```javascript
const numbers = [1, 2, 3];
numbers.forEach(num => console.log(num));
```

---

## 04. What is an Arrow Function?

An arrow function is a **shorter way to write functions** introduced in ES6.

### Example

Normal Function:

```javascript
function add(a, b) {
  return a + b;
}
```

Arrow Function:

```javascript
const add = (a, b) => a + b;
```

Arrow functions make the code **shorter and cleaner**.

---

## 05. What are Template Literals?

Template literals are used to create strings easily using **backticks (` `)**.

They allow:
- Variable insertion
- Multi-line strings

### Example

```javascript
const name = "Hasan";
const message = `Hello, my name is ${name}`;

console.log(message);
```

This is easier than traditional string concatenation.

---


# Assignment-05: GitHub Issues Tracker


### **API Endpoints:**
###  **All Issues:** 
  - https://phi-lab-server.vercel.app/api/v1/lab/issues 


###  **Single Issue:**
   - https://phi-lab-server.vercel.app/api/v1/lab/issue/{id}

   - Example: https://phi-lab-server.vercel.app/api/v1/lab/issue/33


###  **Search Issue:** https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q={searchText}

   - Example:  https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=notifications


---



# GITHUB-ISSUE-TRACKER
