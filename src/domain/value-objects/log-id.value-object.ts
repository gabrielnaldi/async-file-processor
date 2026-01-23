import { LogIdError } from '../errors/value-objects/log-id.errors';

export class LogId {
  private readonly _value: string;

  private constructor(value: string) {
    this._value = value;
  }

  get value() {
    return this._value;
  }

  public static create(value: string) {
    if (value.length === 0) throw LogIdError.notEmpty();

    const log_id = new LogId(value);

    return log_id;
  }
}
