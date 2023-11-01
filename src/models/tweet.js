const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        max: [250, 'Tweet cannot be more than 250 characters']
    },
    hashtags: [
        // Here hastage has beacouse multiple hastage are prsent
        {
            // tweet has hastag
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Hashtag'
        }
    ]
}, {timestamps: true});
// TImeStamp stores CreatedAt ans UpdatedAt

// tweetSchema.virtual('contentWithEmail').get(function process(){
//     return `${this.content} \nCreated by: ${this.userEmail}`;
// })

// tweetSchema.pre('save', function(next) {
//     // console.log('Inside a hook');
//     this.content = this.content + '...';
//     next();
// })

const Tweet = mongoose.model('Tweet', tweetSchema);
module.exports = Tweet;