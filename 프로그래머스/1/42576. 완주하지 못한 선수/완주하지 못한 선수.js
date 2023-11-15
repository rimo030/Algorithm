function solution(participant, completion) {
    const map = new Map();
    
    for (const c of completion) {
        map.set(c, map.has(c) ? map.get(c)+1 : 1);
    }
    
    for (const p of participant) {
        if(!map.has(p))
            return p;
        else
            map.set(p, map.get(p)-1);
    }
    
    let answer;
    map.forEach((val, key, map) => {
        if(val < 0)
            answer =  key;
    })
    return answer;

    /*
    while(participant.length > 0){
        let p = participant.pop(); 
        let search = completion.indexOf(p);
        if(search === -1)
            return p;
        else 
            completion[search] = '';
    }
    */
}