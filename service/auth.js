const sessionIdToUserMap = new Map(); //It is the state of the stateful authentication method.

function setUser(id, user){
    sessionIdToUserMap.set(id, user);
}

function getUser(id){
    return sessionIdToUserMap.get(id);
}

module.exports={
    setUser,
    getUser
}