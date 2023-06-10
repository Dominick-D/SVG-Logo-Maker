const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');
const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters for the logo text:',
    validate: function(value) {
      var valid = value.length <= 3;
      return valid || 'Please enter up to three characters.';
    },
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter a color for the text:',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape for the logo:',
    choices: ['Triangle', 'Circle', 'Square'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter a color for the shape:',
  },
];

inquirer.prompt(questions).then((answers) => {
  let Shape;
  switch (answers.shape) {
    case 'Triangle':
      Shape = Triangle;
      break;
    case 'Circle':
      Shape = Circle;
      break;
    case 'Square':
      Shape = Square;
      break;
  }

  const shape = new Shape(answers.shapeColor);
  const svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shape.render()}
      <text x="50%" y="50%" alignment-baseline="central" text-anchor="middle" font-size="3rem" fill="${answers.textColor}">
        ${answers.text}
      </text>
    </svg>
  `;

  fs.writeFileSync('logo.svg', svgContent);

  console.log('Generated logo.svg');
});
