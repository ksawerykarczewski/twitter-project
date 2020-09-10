async function postTweet() {
    // TODO: validate input fields
    // Pretend that all the data is valid
    var data = new FormData(document.querySelector("#formTweet"))
    // get the data from the form and 
    // it will make it ready to be passed via AJAX
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

var latestReceivedTweetId = 0; // 3

setInterval(async function () {
    // let connection = await fetch('api-get-latest-tweets.php?latestReceivedTweetId='+latestReceivedTweetId)
    let connection = await fetch(`api-get-tweets.php?latestReceivedTweetId=${latestReceivedTweetId}`);
    console.log(connection);

    if (connection.status != 200) {
        //alert('Something is wrong in the system');
        console.log('Something is wrong in the system');
    }

    //let sTweets = await connection.text();
    //let aTweets = JSON.parse(sTweets); // PHP json_decode
    var sTweets = await connection.text();
    //console.log(JSON.parse(sTweets));
    let jTweets = JSON.parse(sTweets); // PHP json_decode

    for (var i = 0; i < jTweets.length; i++) {
        latestReceivedTweetId = aTweets[i].id;

        var divTweet = `
        <div class="tweet" id="${latestReceivedTweetId}">
          <p>${aTweets[i].title}</p>
          <p>${aTweets[i].body}</p>
          <button>delete</button>
        </div>`
        document.querySelector("#tweets").insertAdjacentHTML('afterbegin', divTweet);
    }
    //console.log(aTweets);


    console.log('latestReceivedTweetId', latestReceivedTweetId);
}, 5000);

// setInterval(async function () {
//     var connection = await fetch('api-get-tweets.php');

//     if (connection.status != 200) {
//         alert('Something is wrong in the system')
//     }

//     var sTweets = await connection.text();
//     //console.log(JSON.parse(sTweets));
//     let jTweets = JSON.parse(sTweets); // PHP json_decode


//     for (let i = 0; i < jTweets.length; i++) {
//         const tweet = jTweets[i];
//         console.log(tweet.id);
//         var divTweet = `
//         <div class="tweet" id="${tweet.id}">
//             <p>${tweet.message}</p>
//             <button>delete</button>
//         </div>`;

//         if (tweet.id == ) {
//             break;
//         } else {
//             //document.querySelector("#tweets").innerText += tweet.message;
//             //document.querySelector("#tweets").insertAdjacentHTML('afterbegin', divTweet);
//         }
//     }
// }, 2000);



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
