//turns every words first char into capital form

function titleCase(str) {
    let myArr = str.split(" ");
    let outputString = "";
    for(let i=0;i<myArr.length;i++) {
        outputString += myArr[i][0].toUpperCase()+ myArr[i].slice(1);
        if(i == myArr.length - 1){break;}
            outputString += " ";
    }
    return outputString;
}
