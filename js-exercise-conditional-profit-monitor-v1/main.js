
function profitMonitor(todayProfit, lastProfit) {
  if (todayProfit > lastProfit) {
      const profitIncrease = todayProfit - lastProfit;
      return `Profit naik sebanyak ${profitIncrease} point`;
  } else if (todayProfit < lastProfit) {
      const profitDecrease = lastProfit - todayProfit;
      return `Profit turun sebanyak ${profitDecrease} point`;
  } else {
      return 'Profit stabil';
  }
}

console.log(profitMonitor(100, 50)); // Profit naik sebanyak 50 point.
console.log(profitMonitor(50, 100)); // Profit turun sebanyak 50 point.
console.log(profitMonitor(100, 100)); // Profit stabil.

module.exports = profitMonitor;
