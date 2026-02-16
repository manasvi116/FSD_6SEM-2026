import { json } from "body-parser";
import fs from "fs/promises"
import path from "path"
const readFile = async (path) => {
    try {
        const data = await fs.readFile(path, "utf-8");
        return JSON.parse(data);

    }catch(err){
        return "unable to read file";
    }
   

}