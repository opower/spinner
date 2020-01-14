let symbols = [
  '\r|   ',
  '\r/   ',
  '\r-   ',
  '\r\\   ',
  '\r|   ',
  '\r/   ',
  '\r-   ',
  '\r\\   ',
];
  
  
let time = 100;
for (let i = 0; i < symbols.length; i++) {
  setTimeout(() => {
    process.stdout.write(symbols[i]);
  }, time + (i * 200));
  
}


