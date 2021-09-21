// createPizzaDough=>3000ms=>DOugh ready
//   rollPizzaBase=>2000ms=>Base ready
//     addSauce=>1000ms=>Added sauce
//       addToppings=>1000ms=>Added toppings
//         bakePizza=>4000ms=>Prepared

//           Deleivered Pizza

function createPizzaDough(callback) {
  setTimeout(() => {
    console.log("Pizza Dough created");
    callback();
  }, 3000);
}

function rollPizzaBase(callback) {
  setTimeout(() => {
    console.log("Base is ready");
    callback();
  }, 2000);
}

function addSauce(callback) {
  setTimeout(() => {
    console.log("Added a sauce");
    callback();
  }, 1000);
}

function addToppings(callback) {
  setTimeout(() => {
    console.log("Added toppings");
    callback();
  }, 1000);
}

function bakePizza(callback) {
  setTimeout(() => {
    console.log("Pizza is prepared");
    callback();
  }, 6000);
}

createPizzaDough(() => {
  rollPizzaBase(() => {
    addSauce(() => {
      addToppings(() => {
        bakePizza(() => {
          console.log("Pizzz is deleivered");
        });
      });
    });
  });
});
