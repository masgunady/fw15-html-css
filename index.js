function isPalindrome(value) {
    if (!isNaN(value)) {
        return 'Input must be string'
    } else if (value.length <= 2) {
        return 'String min 3 character'
    } else {
        for (var i = 0; i < value.length / 2; i++) {
            var indexAwal = value[i];
            var indexAkhir = value[value.length - 1 - i];

            if (indexAwal !== indexAkhir) {
                return 'Not Palindrome';
            }
        }
        return 'Palindrome'
    }
}

console.log(isPalindrome('aku'));

// let kata = 'buku';
// var msg = 'Palindrome'
// for (var i = 0; i < kata.length / 2; i++) {
//     var indexAwal = kata[i];
//     var indexAkhir = kata[kata.length - 1 - i];

//     // console.log(indexAwal + ":" + indexAkhir);
//     if (indexAwal !== indexAkhir) {
//         var msg = 'Not Palindrome'
//     }
// }

// console.log(`${kata} ${msg}`);

// let kata = 'uu';
// console.log(kata.length)
// if (kata.length <= 2) {
//     console.log('kurang dr 2')
// } else {
//     console.log('lebih')
// }