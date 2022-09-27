type Pepito = {
  days?: number[];
  start_date?: Date;
  end_date?: Date;
};

export class Employee {
  private name: string;
  private between_days: any;
  private between_dates: any;

  public constructor(_name: string, _availability: Pepito) {
    this.name = _name;
    this.procAvailability(_availability);
  }

  public procAvailability(a: Pepito) {
    if (a instanceof Array) {
      this.between_days = a; // hacer algo con a
    }

    if (a instanceof Object) {
      this.between_dates = a; // hacer algo con a
    }
  }

  public getName(): string {
    return this.name;
  }

  public availableDateByDay(days: number[]) {
    return days;
  }

  public availableDateByDate(start_date: Date, end_date: Date) {
    return start_date.getDay() - end_date.getDay();
  }
}
