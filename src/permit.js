let jids = [
    "hugh_jaynus_xcv@talk.kik.com",
    "dragtheboose_8qd@talk.kik.com",
    "quietly_cxh@talk.kik.com",
    "heedthebaw12_9ua@talk.kik.com",
    "filoia_28r@talk.kik.com",
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
