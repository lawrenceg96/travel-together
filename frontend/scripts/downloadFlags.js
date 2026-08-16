const fs = require("fs");
const path = require("path");

const {
  getCode,
} = require("country-list");



const countriesFile =
  path.join(
    process.cwd(),
    "lib/countries.ts"
  );


const flagsFolder =
  path.join(
    process.cwd(),
    "public/images/flags"
  );



if (!fs.existsSync(flagsFolder)) {

  fs.mkdirSync(
    flagsFolder,
    {
      recursive:true,
    }
  );

}





const file =
  fs.readFileSync(
    countriesFile,
    "utf8"
  );





const ids =
  [
    ...file.matchAll(
      /id:\s*"([^"]+)"/g
    )
  ]
  .map(
    match =>
      match[1]
  );






function idToName(id){

  return id
    .replaceAll(
      "-",
      " "
    )
    .replace(
      /\b\w/g,
      char =>
        char.toUpperCase()
    );

}






async function downloadFlag(
  id
){


  const name =
    idToName(id);



  const code =
    getCode(name);



  if(!code){

    console.log(
      "Skipping:",
      name
    );

    return;

  }





  const url =
    `https://flagcdn.com/w640/${code.toLowerCase()}.png`;





  try{


    const response =
      await fetch(url);



    if(!response.ok){

      console.log(
        "Failed:",
        name
      );

      return;

    }




    const buffer =
      await response.arrayBuffer();





    fs.writeFileSync(

      path.join(
        flagsFolder,
        `${id}.jpg`
      ),

      Buffer.from(buffer)

    );



    console.log(
      "Downloaded:",
      id
    );


  }

  catch(error){

    console.log(
      "Error:",
      id
    );

  }



}








async function run(){


  console.log(
    `Found ${ids.length} countries`
  );



  for(
    const id of ids
  ){

    await downloadFlag(id);

  }



  console.log(
    "Finished"
  );


}




run();