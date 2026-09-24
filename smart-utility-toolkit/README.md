# Smart Utility Toolkit

<p align="center">
  <strong>A modular Node.js toolkit built with core modules</strong><br>
  CLI utilities • Custom modules • HTTP routing • File management • Secure randomness
</p>

---

## Overview

**Smart Utility Toolkit** is a collection of practical Node.js utilities designed to demonstrate fundamental backend development concepts using only Node.js core modules.

The project focuses on clean modular structure, command-line interaction, HTTP routing, file handling, reusable modules, and random value generation without relying on external packages or frameworks.

## Features

### Command-Line Calculator

A simple CLI calculator that accepts operation and numeric arguments through `process.argv`.

Supported operations:

- Addition
- Subtraction
- Multiplication
- Division
- Invalid operation handling
- Division-by-zero handling

#### Usage

```bash
node calculator.js add 10 5
```

Example:

```text
Result: 15
```

Other examples:

```bash
node calculator.js subtract 10 5
node calculator.js multiply 10 5
node calculator.js divide 10 5
```

---

### Reusable Custom Modules

The project demonstrates how Node.js modules can be created and reused across files.

#### `isEven.js`

Provides an `isEven()` function for checking whether a number is even.

```javascript
module.exports = isEven;
```

The module is imported with:

```javascript
const isEven = require("./modules/isEven");
```

Example output:

```text
Checking numbers...
10 is even: true
7 is even: false
20 is even: true
15 is even: false
```

#### `logger.js`

Provides a reusable timestamped logging function.

Example:

```text
[3:30:15 PM] Checking numbers...
```

---

### HTTP Server

A lightweight HTTP server built with Node.js's native `http` module.

#### Routes

| Method | Route | Response |
|---|---|---|
| `GET` | `/` | Welcome to Node Server |
| `GET` | `/about` | About Page |
| `GET` | `/contact` | Contact Page |
| `GET` | Any other route | 404 - Page Not Found |

#### Run

```bash
node server.js
```

Then open the localhost address shown in the terminal.

Example:

```text
http://localhost:6969/
```

The port can be changed directly in `server.js`.

---

### File Manager

A simple file management utility using the Node.js `fs` module.

Operations include:

| Operation | Node.js Method |
|---|---|
| Create | `writeFile()` |
| Read | `readFile()` |
| Update | `appendFile()` |
| Delete | `unlink()` |

#### Run

```bash
node fileManager.js
```

Example output:

```text
File Created
File Content: Hello Node.js
File Updated
Updated Content: Hello Node.js
Learning FS Module
File Deleted
```

---

### Random Dice Generator

A dice simulator using the Node.js `crypto` module to generate random values from **1 through 6**.

It supports a single roll and multiple rolls using a loop.

#### Run

```bash
node dice.js
```

Example:

```text
Dice Rolled: 3
Multiple Dice Rolls:
Roll 1: 2
Roll 2: 1
Roll 3: 6
Roll 4: 4
Roll 5: 5
```

The results change between executions because the values are randomly generated.

## Project Structure

```text
smart-utility-toolkit/
│
├── calculator.js       # Command-line calculator
├── app.js              # Custom module demonstration
├── server.js           # HTTP server and routing
├── fileManager.js      # File operations
├── dice.js             # Random dice generator
├── test.txt            # Temporary file used by fileManager.js
│
└── modules/
    ├── isEven.js       # Even-number checker
    └── logger.js       # Timestamped logger
```

## Technology Stack

| Technology | Purpose |
|---|---|
| **Node.js** | JavaScript runtime |
| **JavaScript** | Application logic |
| **Terminal / PowerShell** | Running and testing utilities |
| `process` | Command-line argument handling |
| `http` | HTTP server and routing |
| `fs` | File system operations |
| `crypto` | Random number generation |

## Getting Started

### Prerequisites

Install Node.js and verify the installation:

```bash
node --version
```

### Clone the Project

```bash
git clone <your-repository-url>
cd smart-utility-toolkit
```

### Run the Utilities

Calculator:

```bash
node calculator.js add 10 5
```

Custom modules:

```bash
node app.js
```

File manager:

```bash
node fileManager.js
```

Dice generator:

```bash
node dice.js
```

HTTP server:

```bash
node server.js
```

Keep the server process running while testing the routes in a browser or Postman.

## Architecture

```text
                    Smart Utility Toolkit
                             │
        ┌────────────────────┼────────────────────┐
        │                    │                    │
   CLI Utilities       HTTP Server         File Utilities
        │                    │                    │
 calculator.js          server.js        fileManager.js
        │
        └──────────────┐
                       │
                 Custom Modules
                       │
              ┌────────┴────────┐
              │                 │
          isEven.js         logger.js

                     Random Utility
                          │
                       dice.js
                          │
                       crypto
```

Each file has a focused responsibility, making the project easy to understand, test, and extend.

## Design Principles

- **Modular:** functionality is separated into focused files.
- **Reusable:** custom modules can be imported wherever needed.
- **Lightweight:** no third-party dependencies are required.
- **Readable:** the code is kept simple and easy to maintain.
- **Practical:** each utility demonstrates a common Node.js capability.

## Testing Checklist

```text
[ ] Calculator performs all four operations
[ ] Invalid calculator input is handled
[ ] Division by zero is handled
[ ] Custom modules load successfully
[ ] Logger displays timestamps
[ ] HTTP server starts successfully
[ ] Home route works
[ ] About route works
[ ] Contact route works
[ ] Invalid route returns 404
[ ] File create/read/update/delete operations work
[ ] Dice values remain between 1 and 6
[ ] Multiple dice rolls are generated
```

## Future Improvements

Possible extensions for the project include:

- Add more calculator operations
- Add command-line options for the number of dice rolls
- Save dice history to a file
- Add more HTTP routes
- Return JSON responses from the server
- Add stronger input validation
- Introduce automated testing

## License

This project is intended for learning and personal development.

---

<p align="center">
  Built with Node.js • JavaScript • Core Modules
</p>
