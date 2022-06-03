import fs from "fs";

export default  async function handler(req, res) {

   const dir = await fs.promises.readdir('contactData')
    
   await fs.promises.writeFile(`contactData/${dir.length + 1}.json`,JSON.stringify(req.body))
    res.status(200).json({'name':"jibon"})
  }
  
