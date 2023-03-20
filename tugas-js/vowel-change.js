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

console.log(ubahHurufKonsonan('jakarta'));