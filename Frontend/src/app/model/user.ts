export class User {
    userid: number;
    first_name: string;
    last_name: string;
    username: string;
    password: string;
    email_id: string;
  
    constructor( userid: number,first_name: string,last_name: string,username: string,
        password: string,email_id: string) {
            this.userid = userid;
            this.first_name = first_name;
            this.last_name = last_name;
            this.username = username;
            this.password = password;
            this.email_id = email_id;
     
    }
  }
