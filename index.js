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


function ubahHurufKonsonan(kata) {


    if (!isNaN(kata)) {
        return 'Input harus berupa string!'
    } else {

        const vokal = ['a', 'A'];
        let hasil = '';

        for (let i = 0; i < kata.length; i++) {
            if (vokal.includes(kata[i])) {
                hasil += 'o';
            } else {
                hasil += kata[i];
            }
        }

        return hasil;
    }

}

console.log(ubahHurufKonsonan('12344'));