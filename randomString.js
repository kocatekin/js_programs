/*
date: 26-Şub-2024 15:57:47
purpose: to create x number of strings of length y
*/


LOWER_CHAR = Array.from("abcdefghijklmnopqrstuvwxyz");
DIGITS = Array.from("0123456789");
UPPER_CHAR = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
ARR = [LOWER_CHAR, DIGITS, UPPER_CHAR];

function genString(n=6, times=1) {
    let myString = "";
    let lastArr = [];
    for(let i=0;i<times;i++) {
        for(let j=0;j<n;j++) {
            myRnd = Math.floor(Math.random() * ARR.length);
            myArr = ARR[myRnd];
            myString += myArr[Math.floor(Math.random() * myArr.length)];
        }
        lastArr.push(myString);
        myString = "";
    }

    return lastArr.join(", ");
};

genString(8,4); //generate 4 8-letter strings


