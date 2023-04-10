const axios = require('axios')
/*function randomQuote(){
    axios.get('https://api.quotable.io/random').then(
      (response)=>{console.log(response.data)},
      (error)=>{console.log(error)}
   )
}*/

async function randomQuote(){
      try{
        response = await axios.get("https://api.quotable.io/random")
        console.log(response.data)
      }
      catch(e)
      {
        console.log(e)
      }
      
}

randomQuote();
console.log("After Code.....")