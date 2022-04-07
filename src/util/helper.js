
let printDate = () => {
    let date = new Date();
    console.log(date.toDateString());
}
let printMonth = () => {
    let date = new Date();
    console.log(`Current Month ${date.getMonth() + 1}`);
}   

let getBatchInfo = () => {
    let batchName = "Uranium ";
    let weekName = "Week-3 and Day- 3";
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let d = new Date();
    let dayName = days[d.getDay()];
    
    let theTopic = `Node js is open source runtime environment for javascript and npm is a package manager for Nodejs that have many reusable codes packages. package.json file specify main, dependency, name,version,author,description. NPM is CLI (command line interface) where we install dependency by npm i and we can run js file using node file.js command. Localhost is over local machine server and we need any random number port than we use route to run our js file.
    1) package.json file showing the application information .
        a) Main ="index.js" ==> index.js is a file conatins code which runs first in application .
        b) Dependencies = is used to specify package/library which we wand to add. an installation of package is done by the command run in a terminal => npm i file Index.js.
    2) when we run the index.js , we have to first go to src folder and the run a command node index.js and when we go to the browser's url, we write localhost:3000/test-me .
    3) localhost specifies that it runs in a local machine. 
    4) Port no  3000 is a specific number, it identifies the particular process pakage.json- In this specific content is will be present as like name description etc.. main- it is the primary code of our application NPM- it is a Node Pakage Manager in which we download our libraries local host is the ip address of our local machine. We learn about some specific command also npm I- install our pakage node filename--to run the pakage ctrl+c - to exit from server that's all with my end.`

    console.log(`The batch name is:- ${batchName} and Week Name:- ${weekName} and Day Name:- ${dayName} and The topic for today is Nodejs module system:- ${theTopic}`);
}


module.exports = { printDate, printMonth, getBatchInfo }
