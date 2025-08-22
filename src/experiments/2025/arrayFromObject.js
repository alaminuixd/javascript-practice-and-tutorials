class MyFileList {
  constructor(...files) {
    files.forEach((file, index) => {
      this[index] = file; // numeric keys
    });
    this.length = files.length;
  }

  item(index) {
    return this[index] || null;
  }
}

// Example "File" objects (just dummy objects here)
const fileA = { name: "photo.jpg", size: 1234 };
const fileB = { name: "doc.pdf", size: 4567 };
const fileC = { name: "cat.png", size: 3268 };
const fileD = { name: "flower.jpg", size: 6460 };
const fileE = { name: "elephant", size: 8182 };

// Create a custom FileList
const myFiles = new MyFileList(fileA, fileB, fileC, fileD, fileE);

console.log(myFiles); // MyFileList {0: {...}, 1: {...}, length: 2}
console.log(myFiles[0]); // { name: "photo.jpg", size: 1234 }
console.log(myFiles.item(1)); // { name: "doc.pdf", size: 4567 }
console.log(myFiles.length); // 2
console.log(myFiles instanceof MyFileList); // true
