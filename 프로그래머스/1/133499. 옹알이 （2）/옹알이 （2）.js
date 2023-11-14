function solution(babbling) {
    var answer = 0;
    babbling.map((b) => {
        b = b.replaceAll("ayaaya", ".")
            .replaceAll("yeye", ".")
            .replaceAll("woowoo", ".")
            .replaceAll("mama", ".")
            .replaceAll("aya", " ")
            .replaceAll("ye", " ")
            .replaceAll("woo", " ")
            .replaceAll("ma", " ");

        if(b.trim() == "")
            answer++;
    })
    
    return answer;
}