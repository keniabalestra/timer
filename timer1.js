const timer = process.argv.slice(2);
let numbers = timer.filter(number => {
  return number > 0;
});
for (let num of numbers) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, Number(num) * 1000);
};