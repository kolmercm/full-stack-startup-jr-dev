// to do a back-end url fetch request install node fetch library: npm i node-fetch

var fetch = require('node-fetch');
//link comes from https://jobs.github.com/api first link under examples. description=ruby&page=1 is called a query stiring or a way to pass parameters through a url
//if no parameters are entered only shows first page. add a query string for each page and iterate through results until you get an empty page keep adding 1 until you get a page back with 0 results.
const baseURL = 'https://jobs.github.com/positions.json'

async function fetchGithub() {
    //keep track of the page we are on, set resultCount to non-0 value and start on page 0.
    let resultCount = 1, onPage = 0;
    //0 will break our loop
    //push the jobs we get back into an empty array
    const allJobs = [];
    //while loop to get results back by increasing one page at a time.
    while(resultCount > 0) {
        //BaseUrl is constructed above and it starts on onPage, which is 0.App
    const res = await fetch('${baseURL}?page=${onPage}');
    //log out json from response and putting it in our array 
    const jobs = await res.json();
    allJobs.push(...jobs);
    resultCount = jobs.length;
    console.log('got', resultCount, 'jobs');
    //^ logs out how many jobs we get back
    //increase on-page value
    onPage++;
    //repeat loop until you run into an empty page.
   }

    console.log('got', allJobs.length, 'jobs')

}
//call the function again
fetchGithub();

//call the method for testing purposes
module.exports = fetchGithub;