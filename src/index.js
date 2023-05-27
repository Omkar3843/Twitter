const express = require('express');
const connect = require('./config/database');

const app = express();
const {TweetRepository} = require('./repository/index');
const TweetService = require('./services/tweet-service');


app.listen(4000, async () =>{
    console.log('Server Started');
    await connect();
    console.log('Mongo db connected');
    // let repo = new HashtagRepository();
    // await repo.bulkcreate([
    //     {
    //         title: 'Trend',
    //         tweets: []
    //     },
    //     {
    //         title: 'Excited',
    //         tweets: []
    //     },
    //     {
    //         title: 'Fun',
    //         tweets: []
    //     },
    //     {
    //         title: 'Python',
    //         tweets: []
    //     },
    // ]);
    // const response = await repo.findByName(['Excited', 'Trend']);
    // console.log(response);

    let service = new TweetService();
    const tweet = await service.create({
        content: 'is #tweets working ?'
    });
    console.log(tweet);
});