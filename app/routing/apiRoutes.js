const friendsArray = require("../data/friends.js");
module.exports = function(app) {
    app.get('/api/friends', function(request, response) {
        console.log(response)
        return response.json(friendsArray)
    }) 

    app.post('/api/:friends', function(req, res) {
        // function add(accumulator, a) {
        //     return accumulator += a
        // }

        for (let i = 0; i < friendsArray.length; i++) {
            let numArr = []
            var scores = friendsArray[i].scores
            numArr.push(scores)
            console.log(numArr)
        }
        // let sumArray = [];
        // sumArray.push(scores.reduce(add, 0))
        // console.log(sumArray)
    })
}
