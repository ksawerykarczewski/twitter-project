async function postTweet() {
    // TODO: validate input fields

    // Pretend that all the data is valid
    var data = new FormData(document.querySelector("#formTweet"))
    // get the data from the form and 
    // it will make it ready to be passed via AJAX
    // console.log(data.get('tweetTitle'))
    let bridge = await fetch('api-create-tweet.php', {
        "method": "POST",
        "body": data
    })
    if (bridge.status != 200) {
        console.log('error')
    }
    //console.log(bridge);
    let sResponse = await bridge.text()
    console.log(sResponse);
    //let jResponse = JSON.parse(sResponse) // convert text into JSON
    //console.log(jResponse.id)
}

// promises
// async await
// async function getName(){
//   var connection = await fetch('api-get-name.php')
//   var tweet = await connection.text()
//   document.querySelector("#userName").innerText = tweet
// }

// setInterval(async function(){
//   var connection = await fetch('api-get-name.php')
//   var tweet = await connection.text();
//   document.querySelector("#userName").insertAdjacentText('beforeend', tweet)
// }, 1000)
