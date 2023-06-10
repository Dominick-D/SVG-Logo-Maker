# 🏷️ SVG Logo Maker 🏷️
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)

## 📚 Description
Once you run the application, it initiates a conversation with you, asking a few questions. It wants to know the text for your logo (up to three characters), the desired color for your text, your choice of a shape (triangle, circle, or square), and the color for that shape.

Based on your responses, the Logo Maker uses object-oriented programming to generate your logo, using different classes for each shape. The result is saved as an SVG file, which you can easily use across your projects.

## 📖 Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## 💽 Installation
To get this application up and running on your own system, follow these steps:
```bash
git clone https://github.com/Dominick-D/SVG-Logo-Maker
cd svg-logo-maker
npm install
```

## 🎯 Usage
[Walkthrough Video 🎥](https://drive.google.com/file/d/1wDfaBBN_2z9j5GyXmjQoRxc6YOgZIx3x/view?usp=sharing)

Once you've successfully installed all the required dependencies, the application is ready for use. Invoke it by running the following command:

```bash
node index.js
```
You'll be presented with a series of prompts to customize your logo. Enter your preferences, and an SVG file will be created based on your inputs.

## 📜 License
This project is licensed under the **MIT** license.

## 👥 Contributing
N/A

## 🧪 Tests
To run tests, be sure to be inside of the 'svg-logo-maker' directory then use the following command:

```bash
$ npm run test
```
You Should see:
```bash
$ npm run test

> svg-logo-maker@1.0.0 test
> jest

 PASS  lib/shapes.test.js
  √ Triangle render (2 ms)
  √ Circle render                                                                                                                                                               
  √ Square render                                                                                                                                                               
                                                                                                                                                                                
Test Suites: 1 passed, 1 total                                                                                                                                                  
Tests:       3 passed, 3 total                                                                                                                                                  
Snapshots:   0 total
Time:        0.867 s
Ran all test suites.

```

## ❓ Questions
If you have any questions about the repo, open an issue or contact me directly at [Here](dominickdonn.me/contact). You can find more of my work on [my portfolio](domdonn.me).
