function to_sentence(arr) {
    let mystr = "";
    for(let i=0;i<arr.length;i++){
        if(i == arr.length -1) {
            //console.log("son eleman");
            mystr += `and ${arr[i]}`;
            break;
        }
        mystr += arr[i] + ", ";
    }
    return mystr;
}
