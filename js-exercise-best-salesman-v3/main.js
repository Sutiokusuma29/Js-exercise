function rekapSalesByName(data, name) {
    let totalSales = 0;

    
    data.forEach(sale => {
        if (sale.salesName === name) {
            totalSales += sale.totalSales;
        }
    });

    return totalSales;
}

function salesReport(data, correction) {
    
    // Inisialisasi penjualan per penjual
    let totalSalesByName = {
        Adi: 0,
        Budi: 0,
        Poltak: 0,
        Sri: 0,
        Udin: 0
    };
    
    // Menghitung penjualan awal
    data.forEach(sale => {
        if (totalSalesByName.hasOwnProperty(sale.salesName)) {
            totalSalesByName[sale.salesName] += sale.totalSales;
        } else {
            console.log(`Sales tidak dikenal: ${sale.salesName}`);
        }
    });
    
    // Proses koreksi
    correction.forEach(corr => {
        if(totalSalesByName.hasOwnProperty(corr.salesName)){
        switch (corr.type) {
            case 'tambah':
                totalSalesByName[corr.salesName] += corr.totalSales;
                break;
            case 'koreksi':
                totalSalesByName[corr.salesName] = corr.totalSales; // Mengurangi total penjualan
                break;
            // Bisa tambahkan kasus lain seperti 'kurang' jika ada tipe koreksi lain
            default:
                console.log(`Koreksi diterapkan untuk ${corr.salesName}: ${corr.type}, total sales: ${corr.totalSales}`);
        }
    }else {
        console.log (`Sales tidak dikenal: ${corr.salesName}`)
    }
    });
    
    // Menghitung total penjualan bulanan
    const monthlySales = Object.values(totalSalesByName).reduce((acc, sales) => acc + sales, 0);
    
    // Menentukan penjual terbaik
    let bestSalesman = '';
    let maxSales = 0;
    
    for (const [name, totalSales] of Object.entries(totalSalesByName)) {
        if (totalSales > maxSales) {
            maxSales = totalSales;
            bestSalesman = `Penjualan terbanyak dilakukan oleh ${name} dengan total penjualan dalam 1 bulan sebesar ${totalSales}`;
        }
    }
    
    // Hasil akhir
    const result = {
        monthlySales,
        totalSalesByName,
        bestSalesman
    };
    
    return result;
    
}

module.exports = {
    salesReport,
    rekapSalesByName
}