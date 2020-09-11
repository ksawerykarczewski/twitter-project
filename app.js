async function postTweet() {
    // TODO: validate input fields
    // Pretend that all the data is valid
    var data = new FormData(document.querySelector("#formTweet"));

    // get the data from the form and 
    // it will make it ready to be passed via AJAX
    let bridge = await fetch('api-create-tweet.php', {
        "method": "POST",
        "body": data
    })
    if (bridge.status != 200) {
        console.log('error');
    }
    //console.log(bridge);
    let sResponse = await bridge.text()
    console.log(sResponse);
    //let jResponse = JSON.parse(sResponse) // convert text into JSON
    //console.log(jResponse);
}

setInterval(async function () {
    var connection = await fetch('api-get-tweets.php');
    var tweet = await connection.text();
    // Convert text to JSON
    let jTweet = JSON.parse(tweet);
    // clean the array
    document.querySelector("#tweets").innerHTML = '';

    for (let i = 0; i < jTweet.length; i++) {
        console.log(jTweet[i].id);
        console.log(jTweet[i].message);
        var divTweet =
            `<div class="tweet" data-id="${jTweet[i].id}">
                <p>${jTweet[i].message}</p>
                <button id="${jTweet[i].id}">Delete tweet</button>
            </div>`;

        document.querySelector("#tweets").insertAdjacentHTML('afterbegin', divTweet);
    }

}, 3000);