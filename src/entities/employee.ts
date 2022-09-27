export class Employee {
  private name: string;

  public constructor(_name: string) {
    this.name = _name;
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
