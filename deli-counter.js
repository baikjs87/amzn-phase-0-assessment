// 1. Write your functions here

const katzDeli = []


function line(array) {
    const customerList = []
    if (array.length === 0) {
        return `The line is currently empty.`
    }
    else {
        for (let i = 0; i < array.length; i++) {
            const customersInLine = `${i+1}. ${array[i]}`
            customerList.push(customersInLine)
        }
        return `The line is currently: ${customerList.join(" ")}`
    }
}



function takeANumber(array, customer) {
    array.push(customer)
    console.log(`Welcome, ${customer}. You are number ${array.length} in line.`)
}



function nowServing(array) {
    if (array.length === 0) {
        console.log(`There is nobody waiting to be served!`)
    }
    else {
        console.log(`Currently serving ${array[0]}`)
        array.shift()
    }
}



// 2. Example Usage

takeANumber(katzDeli, "Ada") //=> Welcome, Ada. You are number 1 in line.
takeANumber(katzDeli, "Grace") //=> Welcome, Grace. You are number 2 in line.
takeANumber(katzDeli, "Kent") //=> Welcome, Kent. You are number 3 in line.

line(katzDeli) //=> "The line is currently: 1. Ada 2. Grace 3. Kent"

nowServing(katzDeli) //=> "Currently serving Ada."

line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent"

takeANumber(katzDeli, "Matz") //=> Welcome, Matz. You are number 3 in line.

line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent 3. Matz"

nowServing(katzDeli) //=> "Currently serving Grace."

line(katzDeli) //=> "The line is currently: 1. Kent 2. Matz"