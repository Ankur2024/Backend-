import fs from 'fs';

/*
//syncronous call
fs.writeFileSync("./test.txt", "File Data");
*/

/*
//Async
fs.writeFile("./test1.txt", "File Async", (err) => console.log(err));
*/

/*
const result = fs.readFileSync('./contacts.txt', 'utf-8');
console.log(result);
*/


/*
fs.readFile('./contacts.txt','utf-8', (err, result) => {
    if(err){
        console.log("Error : ", err);
    }else{
        console.log(result);
    }
})
*/

/*
fs.appendFileSync("./test2.txt",new Date().getDate().toLocaleString());
fs.copyFileSync("./test2.txt","./copy.txt");
fs.unlinkSync('./copy.txt');
console.log(fs.statSync("./test.txt"));
*/