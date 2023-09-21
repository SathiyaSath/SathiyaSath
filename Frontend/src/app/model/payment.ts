import { Booking } from "./booking";

export class Payment {
    payment_id: number;
    amount: number;
    method: string;
    cardNumber: string;
    expYear: string;
    cvv: string;
    paidDate: Date;
    booking: Booking;
  
    constructor(
      payment_id: number,
      amount: number,
      method: string,
      booking: Booking,
      cardNumber: string,
      expYear: string,
      cvv: string,
      paidDate: Date
    ) {
      this.payment_id = payment_id;
      this.amount = amount;
      this.method = method;
      this.booking = booking;
      this.cardNumber = cardNumber;
      this.expYear = expYear;
      this.cvv = cvv;
      this.paidDate = paidDate;
    }
  }
  