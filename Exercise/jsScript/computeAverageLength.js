// Number 6 given a function, compute average length of two word

function averageLen (str1,str2){
    let len1 = str1.length;
    let len2 = str2.length;
    let averageLen = (len1+len2)/2
    return averageLen;
}
console.log(averageLen("code","programs"));