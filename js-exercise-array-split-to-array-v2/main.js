function splitToArr(str) {
    let result = [];
    let name = '';

    if(str === undefined){
        return "Invalid input";
    }else if(str.length === 0){
        return "Data not available"
    }else {
        for(let  i = 0; i < str.length; i++){
            if(str[i] !== ';' && str[i] !== "-" && str[i] !== ''){
                if(name.length === 0){
                    name += str[i].toUpperCase();
                }else{
                    name += str[i];
                }
            }else {
                if(name.length > 0){
                result.push(name);
                name = '';
                }
            }
        }
        if(name.length > 0){
        result.push(name)
        }
    }
    return result.map(n => {
        return n;
    });
}

console.log(splitToArr("annisa;dimitri-alvin;fajar-mirza;tandry"))
console.log(splitToArr("ganang.prakoso-ivan.tjendra-haekal.yudhistira;ridza.adhandra-ganda.sipayung;diaz.kautsar"))
console.log(splitToArr(""))
console.log(splitToArr())

module.exports = splitToArr