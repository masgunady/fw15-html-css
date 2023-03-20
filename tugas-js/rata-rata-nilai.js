const mtk = 80;
const bahasaIndonesia = 90;
const bahasaInggris = 89;
const ipa = 69.3;

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
hasilPembulatan = hasil;
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