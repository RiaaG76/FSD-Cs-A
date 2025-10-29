const image=document.createElement('img');
image.src="";
image.width=200;
image.height=200;
image.alt="Book Image";

const h3=document.createElement('h3');
h3.innerText="Tile: Physics";

const h4=document.createElement('h4');
h4.innerText="Price: Rs.200";
const btn=document.createElement('button');
btn.innerText="Add to cart";

const child=document.createElement('div');
child.className="card";
child.append(image);
child.append(h3);
child.append(h4);
child.append(btn);

const parent=document.getElementById("root");
parent.append(child);