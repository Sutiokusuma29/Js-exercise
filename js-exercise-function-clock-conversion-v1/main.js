function clockConversion(hour, params){
  if (hour < 1){
    return "Hour cannot be under 1"
}else if (params === "minutes"){
  return hour * 60
}else if (params === "seconds"){
  return hour * 3600
}
}

console.log(clockConversion(2, 'minutes'));
console.log(clockConversion(3, 'seconds'));
  
  module.exports = clockConversion;