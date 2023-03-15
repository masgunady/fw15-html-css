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

let dataDiri = {
    name: "Gunadi Pratama Sulistiawan",
    age: 26,
    hoobues: ["Olraga", "Music"],
    is_married: true,
    school_list: [{
            major: "SMK",
            year_in: "2011",
            year_out: "2014"
        },
        {
            major: "Bachelor Degree",
            year_in: "2014",
            year_out: "2019"
        }
    ],
    skill: [{
            skill_name: "Laravel",
            level: "Junior"
        },
        {
            skill_name: "CI",
            level: "Junior"
        }
    ],
    interesting_coding: true

}

console.log(dataDiri);


const mtk = 80;
const bahasaIndonesia = 90;
const bahasaInggris = 89;
const ipa = 69;

let nilaiUN = [mtk, bahasaIndonesia, bahasaInggris, ipa];

rataRata = Sum