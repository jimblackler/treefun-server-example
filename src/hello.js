const fs = require('fs');
const jsdom = require('jsdom');
const treefun2 = require('treefun2');

const dom = new jsdom.JSDOM();
const window = dom.window;
const document = window.document;

const tree = [{
  label: 'World',
  children: [{
    label: 'Europe',
    children: [{
      label: 'France',
    }, {
      label: 'Germany'
    }]
  }]
}];

treefun2.treeToDiagram(document, document.body, tree, {}, '');
fs.writeFileSync('diagram.svg', document.body.innerHTML);
