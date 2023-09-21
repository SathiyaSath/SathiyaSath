//import { User } from './user.model'; // Import the User class if needed
//import { Bus } from './bus.model'; // Import the Bus class if needed

export class Booking {
  booking_id: number;
  date: Date;
  status: string;
  source: string;
  destination: string;
  departure: Date;
  arrival: Date;
  bus_id: number;
  userid: number;
 // user: User; // If you have a User class
 // bus: Bus; // If you have a Bus class

  constructor(
    booking_id: number,
    date: Date,
    status: string,
    source: string,
    destination: string,
    departure: Date,
    arrival: Date,
    bus_id: number,
    userid: number,
   // user?: User,
    //bus?: Bus
  ) {
    this.booking_id = booking_id;
    this.date = date;
    this.status = status;
    this.source = source;
    this.destination = destination;
    this.departure = departure;
    this.arrival = arrival;
    this.bus_id = bus_id;
    this.userid = userid;
  //  this.user = user || null; // Initialize with null or provide a default value
   // this.bus = bus || null; // Initialize with null or provide a default value
  }
}

