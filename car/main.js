let name = null
let speed = null
let maxFuel = null
let fuelConsumption = null

let fuelI = null
let hourI = null

let car = null


let tableData = ''

const speedInput = document.getElementById('speed')
const maxFuelInput = document.getElementById('maxfuel')
const nameInput = document.getElementById('name')
const fuelConInput = document.getElementById('fuelC')
const fuelInput = document.getElementById('fuelInput')
const hoursInput = document.getElementById('hoursInput')

const form = document.getElementById('createform')
const show = document.getElementById('showdiv')
const table = document.getElementById('table')




function handleSpeed(){
    speed = speedInput.value
}

function handleName(){
    name = nameInput.value
}

function handleMaxFuel(){
    maxFuel = maxFuelInput.value
}

function handleFuelC(){
    fuelConsumption = fuelConInput.value
}

function handleDrive(){
    car.drive(Number(hourI))
    generateTable()     
}

function handleFuel(){
    car.fuel(Number(fuelI))
    generateTable()
}

function handleFuelInput(){
    fuelI = fuelInput.value
}

function handleHourInput(){
    hourI = hoursInput.value
}

function createCar(){
    if (name && speed && maxFuel && fuelConsumption){
        car = new Car(name, maxFuel, fuelConsumption, speed)
        form.style.display = 'none'
        show.style.display = 'block'
        generateTable()
    }
}

function generateTable(){
    tableData = ''
    let data = Object.entries(car)
    for (let i = 0; i < data.length; i++){
        tableData += `<tr><td>${data[i][0]}</td><td>${data[i][1]}</td></tr>`
    }
    table.innerHTML = tableData
}




class Car{
    constructor(name, maxFuelCapacity, fuelConsumption, speed){
        this.name = name
        this.maxFuelCapacity = maxFuelCapacity
        this.fuelConsumption = fuelConsumption
        this.speed = speed

        this.distance = 0
        this.fuelCapacity = 0
    }

    fuel(liters){
        if (this.maxFuelCapacity < this.fuelCapacity + liters) {
            throw new Error();
        } else {
            this.fuelCapacity += liters
        }
    }

    drive(hours){
        let fuelForDistance = hours * this.fuelConsumption
        if (this.fuelCapacity - fuelForDistance < 0){
            throw new Error()
        } else {
            this.fuelCapacity -= fuelForDistance
            this.distance += this.speed * hours
        }
    }

    getDistance(){
        console.log(this.distance)
    }
}

