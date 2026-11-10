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

console.log("\n===== TASK 11.2: Callback Hell & Promises =====");

// ---------- CALLBACK HELL (BAD) ----------
function getUserData(userId, callback) {
    setTimeout(() => {
        callback({ id: userId, name: "Carlos Adenge" });
    }, 1000);
}

function getUserPosts(userId, callback) {
    setTimeout(() => {
        callback([
            { id: 1, title: "My first post" },
            { id: 2, title: "Learning JavaScript" }
        ]);
    }, 1000);
}

function getPostComments(postId, callback) {
    setTimeout(() => {
        callback([
            { id: 1, text: "Great post!" },
            { id: 2, text: "Thanks for sharing" }
        ]);
    }, 1000);
}

// This is the "Pyramid of Doom" - hard to read and maintain
getUserData(1, function(user) {
    console.log("User:", user);
    getUserPosts(user.id, function(posts) {
        console.log("Posts:", posts);
        getPostComments(posts[0].id, function(comments) {
            console.log("Comments:", comments);
        });
    });
});

// ---------- CREATING A PROMISE ----------
const myPromise = new Promise((resolve, reject) => {
    const success = true;

    setTimeout(() => {
        if (success) {
            resolve("It worked!");
        } else {
            reject("Something went wrong");
        }
    }, 1000);
});

myPromise
    .then(result => {
        console.log("Success:", result);
    })
    .catch(error => {
        console.log("Error:", error);
    });

// ---------- PROMISE VERSION (GOOD) ----------
function getUserDataPromise(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId > 0) {
                resolve({ id: userId, name: "Carlos Adenge" });
            } else {
                reject("Invalid user ID");
            }
        }, 1000);
    });
}

function getUserPostsPromise(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId > 0) {
                resolve([
                    { id: 1, title: "My first post" },
                    { id: 2, title: "Learning JavaScript" }
                ]);
            } else {
                reject("Could not get posts");
            }
        }, 1000);
    });
}

function getPostCommentsPromise(postId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (postId > 0) {
                resolve([
                    { id: 1, text: "Great post!" },
                    { id: 2, text: "Thanks for sharing" }
                ]);
            } else {
                reject("Could not get comments");
            }
        }, 1000);
    });
}
