export class Train {

    trainId: number;
    trainNumber: string;
    trainName: string;
    capacity: Int16Array;
    departure: Date;
    arrival: Date;
    source: string;
    destination: string;
    ticket_amount: DoubleRange;


    constructor(
        trainId: number,
        trainNumber: string,
        trainName: string,
        capacity: Int16Array,
        departure: Date,
        arrival: Date,
        source: string,
        destination: string,
        ticket_amount: DoubleRange,
    )

    {
        this.trainId = trainId;
        this.trainNumber = trainNumber;
        this.trainName = trainName;
        this.capacity = capacity;
        this.departure = departure;
        this.arrival = arrival;
        this.source = source;
        this.destination = destination;
        this.ticket_amount = ticket_amount;
       
        
      }
}
