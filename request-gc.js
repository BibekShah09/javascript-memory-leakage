// Execute the following code with --expose-gc flag: node --expose-gc expose-gc.js

try {
  if (global.gc) {
    console.log("garbage collection request proceeded");
    global.gc();
  }
} catch (e) {
  console.log("Failed to proceed");
  process.exit();
}
