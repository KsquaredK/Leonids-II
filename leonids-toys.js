const toys = [{
    id: 1,
    toyName: "MegaBubbleBlaster",
    manufacturer: "Local Bubble",
    inStock: true,
    backOrdered: false,
    height: 26,
    weight: 2.75,
    price: 39.99,
    numberInStock: 8
},

{
    id: 2,
    toyName: "Mr. Bouncy",
    manufacturer: "Rubber Crafters",
    inStock: false,
    backOrdered: true,
    height: 38,
    weight: 54,
    price: 129.99,
    numberInStock: 0
},

{
    id: 3,
    toyName: "Baby's First Tweezers",
    manufacturer: "Home Salon",
    inStock: true,
    backOrdered: false,
    height: 0.25,
    weight: 0.75,
    price: 6.99,
    numberInStock: 12
}, 

  {
    id: 4,
    toyName: "You Can Really Fly!",
    manufacturer: "AeroNature",
    inStock: true,
    backOrdered: false,
    height: 8,
    weight: 18,
    price: 349.99,
    numberInStock: 7
    
    },
{
    id: 6,
    toyName: "Skateboard Sidecar",
    manufacturer: "Low",
    inStock: true,
    backOrdered: false,
    height: 28,
    weight: 22,
    price: 69.99,
    numberInStock: 3
    
    }
]
for (const toy of toys) {
    console.log(`Price for ${toy.toyName} is $${toy.price}`)
}

const plasticPup = {
    id: 7,
    toyName: "Plastic Pup",
    manufacturer: "Recycled Rubbish",
    inStock: true,
    backOrdered: false,
    height: 2,
    weight: 4,
    price: 2.99,
    numberInStock: 144
};

const fire = {
    id: 8,
    toyName: "Fire",
    manufacturer: "Kindler",
    inStock: true,
    backOrdered: false,
    height: 30,
    weight: 8,
    price: 12.99,
    numberInStock: 14
};


toys.push(plasticPup, fire);



for (const toy of toys) {
    console.log(`${toy.toyName} is new from ${toy.manufacturer}, and it costs $${toy.price}.`)
}

// Step through the array of toys
for (const toy of toys) {
    // Add 0.4 grams to the weight of each toy
    toy.price = (toy.price * 0.2).toFixed(2);

    // Add the weight to the output
    console.log(`The ${toy.manufacturer} ${toy.toyName} is available now at Leonid's, and costs $${toy.price}.`)
}

const toyToFind = 6

for (const toy of toys) {
    // Only one toy will cause the condition below to evaluate to true
    if (toy.id === toyToFind) {
        toy.weight = toy.weight + 0.4
        console.log(`The ${toy.manufacturer} ${toy.toyName} costs ${toy.price} dollars. It weighs ${toy.weight} grams.`)
    }
}

const wizarder = {
    toyName: "Wizarder",
    manufacturer: "Necromancy",
    inStock: true,
    backOrdered: false,
    height: 56,
    weight: 12,
    price: 67.99,
    numberInStock: 1
};

/*-- function (with a single parameter) for adding toy w/ unique id to db --*/
const addToyToInventory = (toyObject) => {
    /*-- Step 1: Get maximum id current in array --*/

    // Get index of last item in array
    const lastIndex = toys.length - 1
    // Get the last object in the array
    const currentLastToy = toys[lastIndex]
    // Get id property value of last toy
    const maxId = currentLastToy.id

    /*
        Step 2: Increase the current max id by 1
    */
    const idForNewToy = maxId + 1

 /*
        Step 3: Add the id property to the toy object
    */
    toyObject.id = idForNewToy
     /*
        Step 4: Add the toy object to the array
    */
    toys.push(toyObject)
}

/*
    Now that the function is defined, you can invoke it
    and put a value in the parenthesis (a.k.a. the argument).
    The object will be stored in the `ToyObject`
    parameter for use in the function. "Wizarder" is a toy object, 
    and is the argument passed in here to the addToyToInventory function.
*/
addToyToInventory(wizarder);

for (const toy of toys) {
    console.log(`${toy.toyName} is new from ${toy.manufacturer}, and it costs $${toy.price}.`)
}
console.log(toys);