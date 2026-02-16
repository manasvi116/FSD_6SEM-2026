import {readFile} from "./readandwritefile.js" ;
// comsole.log(readFile("./student.json"));
const  readFiledata = async(path) =>{
    try{
        const fileData = await readFile(path);
        console.log(fileData);
    }catch(err){
        console.log("error");
    }
}
readFiledata("./student.json");
