const fs = require('fs');

//read

// fs.readFile('./creativecoder.txt', (err,data) =>
// {
//     if(err) {
//         console.log(err)
//     }

//     console.log(data.toString());
// });

//write

// if (!fs.existsSync('./creativecoder.txt')) {
//     fs.writeFile('./creativecoder.txt','HelloWorld', (err) => {
//            if(err){
//                console.log(err);
//            }
            
//          console.log('after writing files');
//          })
// } else {
//     //console.log('file exist');

//     //delete 
//     fs.unlink('./creativecoder.txt', (err) => {
//         if(err) {
//             console.log(err);
//         }

//         console.log('file deleted');
//     });
//}
// fs.writeFile('./creativecoder.txt','HelloWorld', (err) => {
//     if(err){
//         console.log(err);
//     }
    
//     console.log('after writing files');
// });

// console.log('latest lines of code');

//creating folder 
// fs.mkdir('./new-folder', (err)=> {
//     if(err) {
//         console.log(err);
//     }

//     console.log('folder created');
// });

//deleting folder
// fs.rmdir('./new-folder', (err)=> {
//     if(err) {
//         console.log(err);
//     }

//     console.log('folder deleted');
// });