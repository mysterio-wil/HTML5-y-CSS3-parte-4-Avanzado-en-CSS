function main() {
    var depth = 128;
    //your code goes here
    var day = 0;
    var total = 0;
    while(total<depth){
        day = day + 1;
        total = total + 7;
        if(total >= depth){
            console.log(day);
            break;
        }
        total = total - 2;
    }
}