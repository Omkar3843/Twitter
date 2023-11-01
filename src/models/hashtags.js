const mongoose = require('mongoose');

const hashtagsSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    tweets: [
        {
            // multiple tweet id for hastag
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tweet'
            // reference is Tweet
        }
    ]
}, {timestamps: true});

const Hashtag = mongoose.model('Hashtag', hashtagsSchema);
module.exports = Hashtag;