// import JSDOM from 'jsdom';
// const { window } = new JSDOM('');
const $ = require('jquery') // ( window );

export default function createParagraph(text) {
  const paragraph = document.createElement('p');
  paragraph.textContent = text;
  document.body.appendChild(paragraph);
};

createParagraph("Holberton Dashboard");
createParagraph("Dashboard data for the students");
createParagraph("Copyright - Holberton School");
