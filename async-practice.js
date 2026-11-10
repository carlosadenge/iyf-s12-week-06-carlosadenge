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
// Predicted order: A, C, E, B, D

// Old-style callback example
function fetchData(callback) {
    setTimeout(() => {
        const data = { name: "Carlos", age: 22 };
        callback(data);
    }, 1000);
}

fetchData(function(data) {
    console.log("Data received:", data);
});

// Simulate loading user data from a database
function loadUser(userId, callback) {
    console.log(`Loading user ${userId}...`);

    setTimeout(() => {
        // Simulate successful database lookup
        const user = {
            id: userId,
            name: "Carlos Adenge",
            email: "carlosadenge@gmail.com",
            role: "Student"
        };
        callback(user);
    }, 1500); // 1.5 second delay
}

// Test it
loadUser(1, function(user) {
    console.log("User loaded:", user);
});


