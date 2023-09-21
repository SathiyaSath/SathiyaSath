export class Booking {
    booking_id: number;
    date: Date;
    status: string;
    source: string;
    destination: string;
    departure: Date;
    arrival: Date;

    constructor(
        booking_id: number,
    date: Date,
    status: string,
    source: string,
    destination: string,
    departure: Date,
    arrival: Date,
    )
    
    {
        this.booking_id = booking_id;
       // this.trainNumber = trainNumber;
       // this.trainName = trainName;
       // this.capacity = capacity;
        this.departure = departure;
        this.arrival = arrival;
        this.source = source;
        this.destination = destination;
       // this.ticket_amount = ticket_amount;
       
        
      }

}
