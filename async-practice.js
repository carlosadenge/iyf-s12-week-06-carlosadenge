// ============================================
// WEEK 6 - ASYNC PRACTICE
// Student: Carlos Adenge
// ============================================

console.log("===== TASK 11.1: Understanding Async =====");

// --- Synchronous (runs in order) ---
console.log("1 - Start");
console.log("2 - Middle");
console.log("3 - End");

// --- Asynchronous (does not block) ---
console.log("A - Start");

setTimeout(() => {
    console.log("B - This is delayed (2 seconds)");
}, 2000);

console.log("C - End");

console.log("A");

setTimeout(() => console.log("B"), 0);

console.log("C");

setTimeout(() => console.log("D"), 100);

console.log("E");
