//returns the array with unique elements
function uniq(arr) {
            let mySet = new Set(arr);
            let myArr = [...mySet];
            return myArr;
      }

//uses fisher-yates algorithm to shuffle an array
function shuffle(arr) {
            for (let i = arr.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
            return arr;
        }

//trims an array - remove empty elements from the dynamic array
function trim(arr) {
            let newArr = [];
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] != '') {
                    newArr.push(arr[i]);
                }
            }
            return newArr;
        }

//turns the first char of the str into uppercase 
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
