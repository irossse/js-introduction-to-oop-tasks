export default class Time {
  // BEGIN
  static fromString(str){
    const split = str.split(':')
    const newTime = new Time(split[0], split[1])
    return newTime
  }
  // END

  constructor(hours, minutes) {
    this.minutes = minutes;
    this.hours = hours;
  }

  toString() {
    return `${this.hours}:${this.minutes}`;
  }
}
