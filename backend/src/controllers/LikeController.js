const Tweet = require('../models/Tweet');

//Controller dos Likes nos Tweets
module.exports = {
    async store (req, res) {
        const tweet = await Tweet.findById(req.params.id);

        tweet.set({ likes: tweet.likes + 1 });

        tweet.save();
        
        req.io.emit('like', tweet);

        return res.json(tweet);
    }
};