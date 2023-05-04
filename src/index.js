const express = require('express');
const connect = require('./config/database');

const app = express();
const TweetRepository = require('./repository/tweet-repository');
const Comment = require('./models/comment');

app.listen(4000, async () =>{
    console.log('Server Started');
    await connect();
    console.log('Mongo db connected');
    // const tweet = await Tweet.create({
    //     content: 'Third tweet',
        // userEmail: 'a@b.com'
    // });
    // const tweets = await Tweet.find({userEmail: 'a@b.com'});
    const tweetRepo = new TweetRepository();
    const tweet = await tweetRepo.create({content: 'Tweet with comment schema'});
    // console.log(tweet);
    // const comment = await Comment.create({content: 'new commenr'});
    // tweet.comments.push(comment);
    // await tweet.save();
    console.log(tweet[0].contentWithEmail);
});