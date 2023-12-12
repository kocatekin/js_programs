function compress(str) {
    let temp = str[0];
    let outputString = "";
    let cnt = 0;
    for(let i=0;i<str.length;i++) {
        
        if(str[i] === temp) {
            cnt++;
            //console.log(`temp is ${temp} and cnt is ${cnt}`);
        }
        else {
            outputString += temp+""+cnt;
            temp = str[i];
            cnt = 1;
            //console.log(`temp is ${temp} and cnt is ${cnt}`);    
        }
    }
    outputString += temp+""+cnt;
    return outputString;
}
