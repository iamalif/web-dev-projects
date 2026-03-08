const evenFriends = (friends) => {
    let selected = [];
    for(const friend of friends){
        if(friend.length%2===0){
            selected.push(friend);
        }
    }
    return selected;
};

const friends = ['ben', 'tenaaa', 'rena', 'zen', 'yen'];
console.log(evenFriends(friends));