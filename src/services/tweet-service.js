const { TweetRepository ,HashtagRepository } = require('../repository/index');

class TweetService {
    constructor() {
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }

    async create(data) {
        const content = data.content;
        const tags = content.match(/#[a-zA-Z0-9_]+/g).map((tag) => tag.substring(1));
        // Above is regex extracts hashtags for # seperated
        console.log("current tags are", tags);
        const tweet = await this.tweetRepository.create(data);
        const alreadyPrsentTags = await this.hashtagRepository.findByName(tags);
        console.log("alerady prsent tags are", alreadyPrsentTags);
        let newtags = tags.filter(tag => !alreadyPrsentTags.includes(tag));
        console.log(newtags);
        newtags = newtags.map(tag => {
            return {title: tag, tweets: [tweet.id]}
        });

        const response = await this.hashtagRepository.bulkcreate(newtags);
        console.log(response);
        // todo create hashtag and add here
        /*
        * const newtags = tags.filter(tag => !alreadyPrsentTags.includes(tag));
        * 
        * 1. bulcreate(multiple things in one query)
        * 2.filter title  of hashing based on multiple tags
        * 3.How to add tweet id inside all the hashtags
        */
        return tweet;
    }
}

module.exports = TweetService;

/*
data means content be like:
this is my #first #tweet . I am really #exicted
*/