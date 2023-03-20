function isPalindrome(value) {
    if (value.length <= 2) {
        return 'Input String setidaknya terdiri dari tiga karakter'
    } else {
        for (var i = 0; i < value.length / 2; i++) {
            var indexAwal = value[i];
            var indexAkhir = value[value.length - 1 - i];
            // console.log(indexAwal + ":" + indexAkhir)
            if (indexAwal !== indexAkhir) {
                return 'Bukan Palindrome';
            }

        }
        return 'Palindrome'
    }
}

console.log(isPalindrome('kakak'));