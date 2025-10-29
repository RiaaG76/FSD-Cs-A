function Book(props){
    const image=React.createElement('img',{
        src:props.image,
    //  src:"https://cdn.kobo.com/book-images/36355093-2a30-46ec-8177-94ac97e985a8/1200/1200/False/principles-of-physics-from-quantum-field-theory-to-classical-mechanics.jpg", 
     width:200,
        height:280,
        alt:"Book Image"
    },null);
const h3=React.createElement('h3',{}, props.tile);
const h4=React.createElement('h4',{}, props.price);
const btn=React.createElement('button',{}, "Add to cart");
const child=React.createElement('div',{className:"card"}, image,h3,h4,btn);
return child;
}


const books=[{image:"", tile:"Physics" , price:200},
{image:"", tile:"Chemistry" , price:300},
{image:"", tile:"Maths" , price:400}
]
const bookele=books.map(b=>(
    React.createElement(Book,{
        image: b.image,
        title: b.title,
        price: b.price
    },null)
))
const booklist=React.createElement("div",{className: "book-list"},bookele);
const parent=document.getElementById("root");
const root=ReactDOM.createRoot(parent);
root.render(booklist);