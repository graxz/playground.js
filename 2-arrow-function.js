// const square = function(x) {
//     return x * x
// }

// const square = (x) => {
//     return x * x
// }

// const square = (x) => x * x 

// console.log(square(3))

const evento = {
    name: 'Aniversário',
    guestList: ['Isaddora', 'Caique', 'Mattheus'],
    printGuestList() {
        console.log(`Lista de convidados de ${this.name}`)

        this.guestList.forEach((guest) => {
            console.log(`${guest} está participando de ${this.name}!`)
        })
    }
}

evento.printGuestList()