// Coding Rainbow
// Daniel Shiffman
// http://patreon.com/codingtrain
// Code for: https://youtu.be/fcdNSZ9IzJM

let tree = [];
let leaves = [];

let count = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  let a = createVector(width / 2, height);
  let b = createVector(width / 2, height - 300);
  
  let root = new Branch(a, b);

  tree[0] = root;

  
  
}

function iterateTree() {
  for (let i = tree.length-1; i >= 0; i--) {
    if (!tree[i].finished && frameCount<400) {
      tree.push(tree[i].branchA());
      tree.push(tree[i].branchB());
    }
    tree[i].finished = true;
  }
  count++;

  if (count === 7) {
    for (var i = 0; i < tree.length; i++) {
      if (!tree[i].finished) {
        let leaf = tree[i].end.copy();
        leaves.push(leaf);
      }
    }
  }

}

function draw() {
    clear();

  for (var i = 0; i < tree.length; i++) {
    tree[i].show();
    tree[i].jitter();
  }

 

  

  let leafAngle=0;

  for (var i = 0; i < leaves.length; i++) {
    fill("#27df34");
    noStroke();
    push();
    translate(leaves[i].x, leaves[i].y);
    rotate(leafAngle);
    console.log(leafAngle[i])
    ellipse(0, 0, 20, 35);
    // stroke("#0583F2");
    // strokeWeight(6);
    // line(0, -17, 0, 17);
    pop();
    leaves[i].y += random(0, 2);
    leaves[i].x += random(-2, 2);
  
    leafAngle+=PI/3;
  }

  if (frameCount%50==0){
    iterateTree();
  }
  if (frameCount%200==0){
    redraw(0);
  }


  

}