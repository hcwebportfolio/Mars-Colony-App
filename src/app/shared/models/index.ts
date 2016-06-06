

export interface IAlien {

    type: string,
    submitted_by: string,
    description: string,
    id: string

}

export interface IOccupation {

   name: string,
   id: string,
   description: string

}

export class Colonist {

   constructor (
        public name: string,
        public age: string,
        public job_id: string,
        public id?: string
    ) {}

}

export class Encounter {

     constructor (
        public atype: string,
        public date: string,
        public action: string,
        public colonist_id: string
    ) {
      this.date = this.formatDate;

    }

    get formatDate(){
      let date = new Date();
      return `${date.getFullYear()} - ${date.getMonth()} -
      ${date.getDate()}`

    }
}
