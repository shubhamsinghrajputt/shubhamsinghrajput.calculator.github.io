// billAmountInput for bill amount
// tipsAmountInput for tips
// noOfPeople for people count
// perPersonTotal for total perperson

const billAmount = document.getElementById('billAmountInput')
const tips = document.getElementById('tipsAmountInput')
const peopleSNo = document.getElementById('noOfPeople')
const totalAmountPPerson = document.getElementById('perPersonTotal')

// Convert PeoplesNo into numbers
let noOfPeople = Number(peopleSNo.innerText)

const calculateBill = () => {

    // convert totalBill into number
    const totalBill = Number(billAmount.value)

    // convert tips into number and then covert it into percentage
    const tipsPercentage = Number(tips.value) / 100

    // calculate tips amount here
    const tipsAmount = tipsPercentage * totalBill

    // calculate total amount in total
    const bill = tipsAmount + totalBill

    // split the amount between peoples
    const amountPerPerson = bill / noOfPeople

    // Updates the totalAmount to DOM
    totalAmountPPerson.innerText = `$${amountPerPerson.toFixed(2)}`
}

const incresePeople = () => {
    
    // incresing the amount of peoples
    noOfPeople += 1
    // Update DOM
    peopleSNo.innerText = noOfPeople
    // Update to CalculateBill function
    calculateBill()
}

const decresingPeople = () => {
    
    // function to check the amount is equalto 1 or less or not
    if(noOfPeople <= 1)
        return

    // decrease the amount of peoples
    noOfPeople -= 1
    // Update DOM
    peopleSNo.innerText = noOfPeople
    // Update to CalculateBill function
    calculateBill()
}