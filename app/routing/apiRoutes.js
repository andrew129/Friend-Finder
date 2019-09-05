const friendsArray = require("../data/friends.js");

module.exports = function(app) {
    app.get('/api/friends', function(request, response) {
        console.log(response)
        return response.json(friendsArray)
    }) 

    app.post('/api/:friends', function(req, res) {

        friendsArray.push(req.body)

        res.json(true)

        for (let i = 0; i < friendsArray.length; i++) {

            console.log(friendsArray[i].scores)
        }
    })
}

function numberFinder() {

    let scores = []
    

    for (let i = 0; i < friendsArray.length; i++) {
        friendsArray[i].scores -= req.body.scores

    }
}
