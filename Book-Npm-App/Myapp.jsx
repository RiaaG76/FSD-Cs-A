import Book from "./Book";
function Myapp(){
    const data=[
        {image:"",title:"Physics",price: 456},
        {image:"",title:"Chemistry",price: 546},
        {image:"",title:"Math",price: 476}
    ];
    return(
        <div>
        <h1><center>Book Store</center></h1>
        <div className='booklist'>
          <Book/>
          <Book/>
          <Book/>
        </div>
        </div>
    );
}
export default Myapp;