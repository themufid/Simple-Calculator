var fs = require("fs"); 
 
const { read } = require("fs"); 
const readline = require("readline"); 
const reader = readline.createInterface({ 
  input: process.stdin, 
  output: process.stdout, 
}); 
 
console.log("Simpel Kalkulator"); 
console.log("Pilih operator kamu dengan memasukkan angka (10-40)"); 
console.log("============"); 
console.log("1. Tambah(+)"); 
console.log("2. Kurang(-)"); 
console.log("3. Kali(*)"); 
console.log("4. Bagi(/)"); 
 
reader.question("Pilih Operator yang kamu inginkan :", (operator) => { 
  reader.question("Masukkan Angka Pertama kamu : ", (inputSepuluh) => { 
    reader.question("Masukkan Angka Kedua kamu :", (inputDuapuluh) => { 
      console.log("============================================="); 
      console.log("Masukkan Angka Pertama kamu" + inputSepuluh); 
      console.log("Masukkan Angka Kedua kamu" + inputDuapuluh); 
      console.log("=============================================="); 
      if (operator == "10") { 
        var hasil = parseInt(inputSepuluh) + parseInt(inputDuapuluh); 
      } else if (operator == "20") { 
        var hasil = parseInt(inputSepuluh) - parseInt(inputDuapuluh); 
      } else if (operator == "30") { 
        var hasil = parseInt(inputSepuluh) / parseInt(inputDuapuluh); 
      } else if (operator == "40") { 
        var hasil = parseInt(inputSepuluh) * parseInt(inputDuapuluh); 
      } else { 
        console.log("Operator yang kamu pilih salah"); 
      } 
      console.log("Hasilnya adalah :" + hasil); 
      fs.appendFile("hasil.txt", "Hasilnya adalah :" + hasil, function (err) { 
        if (err) throw err; 
        console.log("disimpan"); 
      }); 
    }); 
  }); 
});