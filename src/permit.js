let jids = [
    "pyromoniac_92e@talk.kik.com",
    "fx3k_td3@talk.kik.com",
  ],
    perm = (current) => {
    for (let i = 0; i < jids.length; i++) {
        const jid = jids[i];
        if(current == jid){
            return true;
        }
        
    }
    return false;
}

module.exports = {jids: jids, perm: perm};