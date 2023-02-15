const arg = process.argv.slice(2);

// process.stdout.write('\x07');

for (const time of arg) {
  if (arg < 0) {
    break;
  } else if (arg == "") {
    break;
  }
  setTimeout(
    () => process.stdout.write('\x07'),
    time * 1000
  );
}; 