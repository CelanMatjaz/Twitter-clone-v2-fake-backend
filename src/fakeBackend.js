const USERS = [
    { username: '123', password: '123', email: 'email1@email.com', _id: 1 },
    { username: '1234', password: '123', email: 'email2@email.com', _id: 2 },
    { username: '12345', password: '123', email: 'email3@email.com', _id: 3 },
    { username: '123456', password: '123', email: 'email4@email.com', _id: 4 },
]

const date = new Date();
const realDate = date => `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`;

const TWEETS = [
    { userID: 1, username: '123', title: 'Title1', body: 'Body1', date: realDate(date), _id: 1 },
    { userID: 1, username: '123', title: 'Title2', body: 'Body2', date: realDate(date), _id: 2 },
    { userID: 2, username: '1234', title: 'Title3', body: 'Body3', date: realDate(date), _id: 3 },
    { userID: 2, username: '1234', title: 'Title4', body: 'Body4', date: realDate(date), _id: 4 },
    { userID: 3, username: '12345', title: 'Title5', body: 'Body5', date: realDate(date), _id: 5 },
    { userID: 4, username: '123456', title: 'Title6', body: 'Body6', date: realDate(date), _id: 6 },
    { userID: 1, username: '123', title: 'Title7', body: 'Body7', date: realDate(date), _id: 7 },
    { userID: 3, username: '12345', title: 'Title8', body: 'Body8', date: realDate(date), _id: 8 },
]

class fakeBackend{
    constructor(){
        this.tweets = TWEETS;
        this.users = USERS;
    }

    getTweets = username => {
        
        if(username){
            const tweets = this.tweets.filter(tweet => tweet.username === username);
            return tweets;
        }
        return this.tweets;
    }

    getTweet = id => {
        return this.tweets.filter(tweet => tweet._id === parseInt(id))[0];
    }

    login = ({email, password}) => {
        const user = this.users.find(user => user.email === email);
        if(user && user.password === password){
            return {
                status: 'Login_success',
                userInfo: {
                    id: user._id,
                    username: user.username,
                    email: user.email
                }
            }
        }
        return {
            errors: ['Could not log user in']
        }
    }

    register = ({email, username, password, passwordRepeat}) => {
        const user = this.users.find(user => user.email === email || user.username === username);
        if(!user && password === passwordRepeat){
            const newUser = {
                username,
                email,
                password,
                _id: Math.random()
            }
            this.users.push(newUser);
            return {
                status: 'Register_success'
            }
        }
        return {
            errors: ['Could not register new account']
        }
    }

    addTweet = (tweet, id, username) => {
        const newTweet = {
            ...tweet,
            userID: id,
            username,
            date: realDate(new Date()),
            _id: Math.random()
        }

        this.tweets.push(newTweet);

        return {
            msg: 'Tweet was added'
        }
    }

    editTweet = ({title, body}, id) => {
        this.tweets.map(tweet => {
            if(tweet._id === parseInt(id)){
                tweet.body = body;
                tweet.title = title;
            }
            return tweet;
        });
        return { msg: 'Tweet was updated' };
    }

    deleteTweet = id => {
        const newTweets = this.tweets.filter(tweet => {
            console.log(tweet._id !== id);
            return tweet._id !== id
        });
        if(newTweets.length === this.tweets.length){
            return {}
        }        
        this.tweets = newTweets;
        return {
            msg: 'Tweet was deleted'
        }
    }
}

export default new fakeBackend();

