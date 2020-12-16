const myClient = [
    { id: 1, name: "Ivan Ivanov", email: "ivanov@mail.ru" },
    { id: 2, name: "Petr Petrov", email: "petrov@mail.ru" },
    { id: 3, name: "Sidr Sidorov", email: "sidorov@mail.ru" }
]

const myTicket = [
    { id: 1, id_client: 1, departure_airport: "DEM", arrival_airport: "ABB" },
    { id: 2, id_client: 2, departure_airport: "SVO", arrival_airport: "CCA" },
    { id: 3, id_client: 3, departure_airport: "DEM", arrival_airport: "LAX" }
]

const myBooking = [
    { id: 1, id_client: 1, checkin_date: "14-07-2020", checkout_date: "01-08-2020" },
    { id: 2, id_client: 2, checkin_date: "10-12-2020", checkout_date: "28-12-2020" },
    { id: 3, id_client: 3, checkin_date: "30-01-2021", checkout_date: "02-02-2021" }
]


const myVisa = [
    { id: 1, arrayIds: [2, 2], country: 'Germany' },
    { id: 2, arrayIds: [3, 3], country: 'Spain' },
    { id: 3, arrayIds: [1, 1], country: 'Estonia' }
]

function getClientByEmail(email) {
    return new Promise((resolve, reject) => {
        console.log("start client");
        setTimeout(() => {
            console.log("finish client");
            let success = true;
            if (success) {
                let client = myClient.find(item => item.email === email);
                resolve(client);
            } else {
                reject("error while client");
            }
        }, 1000);
    });
}

function getBookingByIdClient(id_client) {
    return new Promise((resolve, reject) => {
        console.log("start booking");
        setTimeout(() => {
            console.log("finish booking");
            let success = true;
            if (success) {
                let booking = myBooking.find(item => item.id_client === id_client);
                resolve(booking);
            } else {
                reject("error while booking");
            }
        }, 1000);
    });
}

function getTicketByIdClient(id_client) {
    return new Promise((resolve, reject) => {
        console.log("start ticket");
        setTimeout(() => {
            console.log("finish ticket");
            let success = true;
            if (success) {
                let ticket = myTicket.find(item => item.id_client === id_client);
                resolve(ticket);
            } else {
                reject("error while ticket");
            }
        }, 1000);
    });
}

function getVisa(id_booking, id_ticket) {
    return new Promise((resolve, reject) => {
        console.log("start visa");
        setTimeout(() => {
            console.log("finish visa");
            let visa;
            let success = true;
            if (success) {
                let arrayIds = [id_booking, id_ticket];
                for (let item of myVisa) {
                    for (let i = 0; i < arrayIds.length; i++) {
                        if (arrayIds[i] === item.arrayIds[i]) {
                            visa = item
                        }
                    }
                }
                resolve(visa);
            } else {
                reject("error while visa");
            }
        }, 1000);
    });
}

(async function () {
    let str = "ivanov@mail.ru";
    try {
        let client = await getClientByEmail(str);
        let arrayInit = [getBookingByIdClient(client.id), getTicketByIdClient(client.id)];
        let ids = await Promise.all(arrayInit);
        let visa = await getVisa(ids["0"].id, ids["1"].id);
        console.log(visa)
    } catch (err) {
        console.log(err)
    }
})()
