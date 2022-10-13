const { readFile, writeFile } =  require("fs").promises;
// readFile and writeFile both will return promise


const getData = async () => {

    try{
        const firstData = await readFile("../content/first.txt", "utf-8");  // readFile will return a promsie
        const secondData = await readFile("../content/second.txt", "utf-8");  // writeFile will return a promsie

        await writeFile("../content/using-readFile-promises.txt", `This is wrote after converting readFile and writefile into promises using 
        ".promises. ${firstData} ${secondData}`);
    }
    catch(err) {
        console.log(err);
    }
    

}

getData();