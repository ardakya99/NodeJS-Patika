function getData(data) {
  return new Promise((resolve, reject) => {
    // promise dönüyoruz.
    console.log("Veriler alınmaya çalışılıyor..");

    if (data) {
      resolve("Verilen alındı");
    } else {
      reject("Veriler alınamadı");
      f;
    }
  });
}

function cleanData(receivedData) {
  // promise dönüyoruz.
  return new Promise((resolve, reject) => {
    console.log("Veriler düzenleniyor..");

    if (receivedData) {
      resolve("Verilen düzenlendi");
    } else {
      reject("Veriler düzenlenemedi");
    }
  });
}

//   getData(true)
//     .then(result => {
//         console.log(result)
//         return cleanData(false)
//     }).then(result => {
//         console.log(result)
//     }).catch(err => {
//         console.log(err)
//     })

//ASYNC -- AWAIT

// async function processData() {
//   try {
//     const receivedData = await getData(false);
//     console.log(receivedData);
//     const celanedData = await cleanData(true);
//     console.log(celanedData);
//   } catch (err) {
//     console.error(err);
//   }
// }

// processData();

const books = [
  { name: "Kitap1", author: "Yazar1" },
  { name: "Kitap2", author: "Yazar2" },
  { name: "Kitap3", author: "Yazar3" },
];

const listBooks = () => {
  books.map((book) => {
    console.log(book.name);
  })
};

const addBook = (newBook) => {
  const promise1 = new Promise((resolve,reject) => {
    books.push(newBook);
    resolve(books);
    // reject("Bir hata oluştu");
  });

  return promise1;
};

// addBook({ name: "Kitap4", author: "Yazar4" })
//   .then(() => {
//     console.log("Yeni Liste");
//     listBooks();
//   })
//   .catch((err) => {
//     console.log(err);
//   });

async function showBooks(){

  try{
    await addBook({ name: "Kitap4", author: "Yazar4" })
    listBooks();
  }catch(err){
    console.log(err);
  }
  
  }

  showBooks();