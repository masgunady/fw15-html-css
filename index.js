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

console.log('==========================================================================')
const mtk = 80;
const bahasaIndonesia = 90;
const bahasaInggris = 89;
const ipa = 69;

let nilaiUN = [mtk, bahasaIndonesia, bahasaInggris, ipa];

let total = 0;
for (let i = 0; i < nilaiUN.length; i++) {
    if (nilaiUN[i] === '') {
        console.log("Nilai Harus diisi")
        return;
    } else {

        total += parseFloat(nilaiUN[i]);
        var hasil = total / nilaiUN.length;
    }
}
hasilPembulatan = Math.round(hasil);
if (hasilPembulatan <= 59) {
    console.log(`Rata-rata = ${hasilPembulatan}`);
    console.log(`Grade E`)
} else if (hasilPembulatan >= 60 && hasilPembulatan <= 69) {
    console.log(`Rata-rata = ${hasilPembulatan}`);
    console.log(`Grade D`)
} else if (hasilPembulatan >= 70 && hasilPembulatan <= 79) {
    console.log(`Rata-rata = ${hasilPembulatan}`);
    console.log(`Grade C`)
} else if (hasilPembulatan >= 80 && hasilPembulatan <= 89) {
    console.log(`Rata-rata = ${hasilPembulatan}`);
    console.log(`Grade B`)
} else if (hasilPembulatan >= 90 && hasilPembulatan <= 100) {
    console.log(`Rata-rata = ${hasilPembulatan}`);
    console.log(`Grade A`)
} else {
    console.log("Format invalid");
}