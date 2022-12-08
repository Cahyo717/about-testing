function cetakNilai(input){
    console.log("Cetak nilai ini berapa" + input);
}

function sum(bilangan1,bilangan2,masukinFungsiDong){
    const result = bilangan1 + bilangan2;
    console.log(result);
    masukinFungsiDong(result);
}

sum(2, 8, cetakNilai)

async()=>{}


function sum2(bilangan1,bilangan2){
    const result = bilangan1 + bilangan2;
    return result;
}

const variableFungsi = sum1(bilangan1, bilangan2);

const variableFungsi2 = sum2(bilangan1, bilangan2) => {
    const result = bilangan1 + bilangan2;
    return result;
};

const variableFungsi3 = sum3(bilangan1, bilangan2) => bilangan1 + bilangan2
