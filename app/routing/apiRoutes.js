const friendsArray = require("../data/friends.js");
module.exports = function(app) {
    app.get('/api/friends', function(request, response) {
        console.log(response)
        return response.json(friendsArray)
    }) 

    app.post('/api/friends', function(req, res) {
        let sums = [];
        let scores = req.body.scores;
        for (let i = 0; i < friendsArray.length; i++) {
            let amount = 0;
            for (j = 0;j < scores.length; j++) {
                let difference = Math.abs(friendsArray[i].scores[j] - scores[j]); 
                console.log(difference);
                amount = amount + difference;
            }
            sums.push(amount);  
            console.log(sums)
        }
    })
}
