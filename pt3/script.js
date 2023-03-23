function intToBin() {
    var name=prompt('Please Type your Name');
    var int=parseInt(prompt('Please Type an Integer'));
    var Bin=int.toString(2);
    document.write('<p class="out">Hello '+ name + ', you have typed <span>' + int + '</span> and it is equivalent to <span>' + Bin + '</span></p>');
    if (name=='' || name==NaN) {
        name=prompt('No Input was Found, Please Type your Name');
    }
    else if (int=='' || int==NaN) {
        int=prompt('No Input was Found, Please Type your Integer');
    }
    else{
        setTimeout(condLoop, 5000);
    }
    function condLoop() {
        confirm('Do You Want to Try Again?');
        if (confirm(text)==true){
            intToBin();
        }
        else {
            var end=alert('Thank You For Participating');
            end;
        }
    }
}
intToBin();