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