export class LogId {
  private readonly _value: string;

  private constructor(value: string) {
    this._value = value;
  }

  get value() {
    return this._value;
  }

  public static create(value: string) {
    const log_id = new LogId(value);

    return log_id;
  }
}
