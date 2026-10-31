// ============================================
// PART B — Promises + chaining
// ============================================

function getUser(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!userId) return reject(new Error("Missing userId"));
      resolve({ id: userId, name: nameFor(userId) });
    }, 400);
  });
}

function getOrders(user) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 101, amount: 20 },
        { id: 102, amount: 35 },
      ]);
    }, 400);
  });
}

function getOrderTotal(orders) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const total = orders.reduce((sum, o) => sum + o.amount, 0);
      resolve(total);
    }, 400);
  });
}

// Chain — keep `user` alive by returning it together with the next value
getUser(1)
  .then((user) => {
    return getOrders(user).then((orders) => ({ user, orders }));
  })
  .then(({ user, orders }) => {
    return getOrderTotal(orders).then((total) => ({ user, total }));
  })
  .then(({ user, total }) => {
    console.log(`B: ${user.name} spent ${total}`);
  })
  .catch((err) => console.error("B error:", err.message));


// ============================================
// PART C — async/await
// ============================================

async function checkout(userId) {
  try {
    const user = await getUser(userId);
    const orders = await getOrders(user);
    const total = await getOrderTotal(orders);
    console.log(`C: ${user.name} spent ${total}`);
  } catch (err) {
    console.error("C error:", err.message);
  }
}

checkout(1);


// ============================================
// BONUS — parallel with Promise.all
// ============================================

Promise.all([getUser(1), getUser(2)])
  .then(([u1, u2]) => {
    console.log(`Bonus: ${u1.name} and ${u2.name}`);
  })
  .catch((err) => console.error("Bonus error:", err.message));
