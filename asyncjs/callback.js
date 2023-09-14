
// const func1 = () => {
//     console.log("Func 1 tamamlandı")
// }
// const func2 = () => {
//     console.log("Func 2 tamamlandı")
// }
// const func3 = () => {
//     console.log("Func 3 tamamlandı")
// }

// func1();
// func3();
// func2();
// const func1 = () => {
//   console.log("Func 1 tamamlandı");
//   func2();
// };

// const func2 = () => {
//   console.log("Func 2 tamamlandı");
//   func3();
// };
// const func3 = () => {
//   console.log("Func 3 tamamlandı");
// };

// func1();

// const func1 = () => {
//     console.log("Func 1 tamamlandı");
//     func3();
//   };
  
//   const func2 = () => {
//     console.log("Func 2 tamamlandı");
    
//   };
//   const func3 = () => {
//     console.log("Func 3 tamamlandı");
//     func2();
//   };
  
//   func1();

  // Single Thread ---- Js Senkron


//   let x = 5;
//   console.log("1. gelen veri:",x);
// setTimeout(() => {
//     x = x + 5;
//     console.log("2. gelen veri:",x); 
// }, 1000);
  

//   x = x + 5;
//   console.log("3. gelen veri:",x);

const books = [
    {name: 'Kitap1', author: "Yazar1"},
    {name: 'Kitap2', author: "Yazar2"},
    {name: 'Kitap3', author: "Yazar3"}
];

const listBooks = () => {
    books.map(book => {
        console.log(book.name);
    })
};




const addBook = (newBook,callback) => {
    books.push(newBook);
    callback();
}
// listBooks();

addBook({name: 'Kitap4', author: "Yazar4"}, listBooks);