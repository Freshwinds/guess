/**
 * Created by freshwinds on 17-7-18.
 */
function guess_re(riddle,guess) {
    var a_count=0;
    var b_count=0;

    for(var i=0;i<guess.length;i++){
        var loc=riddle.indexOf(guess[i]);
        if(loc!=-1){
            loc==i?a_count++:b_count++;
        }
    }
    return  `${a_count}A${b_count}B`;

}
