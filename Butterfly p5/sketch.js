let table;
let canvas;

let imgs = {} ;
let selectMenu;

let year;

let yearArray = {};
let amazonArray = {};
let bflyArray = {};
let image = {};


function preload() {
  table = loadTable('csv/amazon.csv', 'csv', 'header');
  
  
  
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style("z-index", "-1");
  imageMode(CENTER);
  
  selectMenu = createSelect();
  
  for(let i = 0; i <table.getRowCount(); i++) {
  year = table.getNum(i , 'year');
  selectMenu.option(year);
  
  }
}



function draw() {
  background(220);
}