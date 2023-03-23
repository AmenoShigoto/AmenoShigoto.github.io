let sente = prompt('Please type a Sentence Here');
document.getElementById('sent').innerHTML = sente;

// function sendet() {
//     //Number of Vowels
//     document.getElementById('vow').innerHTML = ;
//     //Shortest Word
//     document.getElementById('short').innerHTML = ;
//     //Longest Word
//     document.getElementById('long').innerHTML = ;

// }
// sendet();

sente.charAt();
sente.indexOf();
sente.lastIndexOf();
sente.length;
sente.substring();
sente.split;
sente.replace;
sente.concat();




function vowNum() {
    let senind = [sente];
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowCount = 0;
    for (let i = 0; i < sente.length; i++) {
        if (vowels.includes(senind[i].toLowerCase())) {
            vowCount++;
        }
    }
}

document.getElementById('test').innerHTML = vowNum();