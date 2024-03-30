// Write a recursive function that is passed a string which can contain any text, including different kinds of brackets: {} [] ().

// function balanceBrackets(str, open=0, closed=0, i=0){
//     // base case 
//     if(i >= str.length - 1) {
//         console.log('End');
//         console.log("open:", open);
//         console.log("closed:", closed);
//         return (open == closed) ? true : false;
//     }

//     console.log(i);
//     console.log("open:", open);
//     console.log("closed:", closed);
//     if(str[i] == '(' || str[i] == '[' || str[i] == '{') return balanceBrackets(str, open += 1, closed, i += 1);
//     if(str[i] == ')' || str[i] == ']' || str[i] == '}') return balanceBrackets(str, open, closed += 1, i += 1);

//     return balanceBrackets(str, open, closed, i += 1);
// }

function balanceBrackets(str, bracks=['()','[]','{}'], open=0, closed=0, i=0){
    // base case 
    if(i >= str.length) {
        return open == closed ? true : false;
        // return false;
    }else if(closed > open){
        return false;
    }
    for(b in bracks){
        if(str[i] == bracks[b][0]) {
            open += 1;
        }else if(str[i] == bracks[b][1]) {
            closed += 1;
        };
    }

    return balanceBrackets(str, bracks, open, closed, i+=1);
}

module.exports = { balanceBrackets }