function travelDiscount(id, amount) {
let status = "";

    if (id.startsWith("STD")){
        status = "STUDENT";
    }else if (id.startsWith("CORP")){
        status = "CORPORATE";
    }else {
         return "Maaf, voucher yang anda miliki tidak valid!";
    }


let hargaUtama = 0;
let diskon = 0;
    if (status === "STUDENT"){
        hargaUtama = 20000;
    if (amount > 20){
        diskon = 0.2;
    }
}else if (status  === "CORPORATE"){
    hargaUtama = 50000;
    if (amount > 30){
        diskon = 0.25;
    }
}
let hargaTotal = hargaUtama * amount;
let totalTagihan = hargaTotal - (hargaTotal * diskon);


        return `Selamat! Voucher untuk ${status} dengan id ${id} berhasil di redeem, total yang harus dibayarkan sebesar Rp. ${totalTagihan}.`;
    
    
  
}

console.log(travelDiscount("STD9845-8461-121", 11));
console.log(travelDiscount("CORP8135-4612-912", 30));
console.log(travelDiscount("STD7601-639-184", 36));
console.log(travelDiscount("CORP5611-8456-999", 31));
console.log(travelDiscount("8347-7-9124365", 99));
console.log(travelDiscount("XYZ8135461-2-912", 1));

module.exports = travelDiscount
