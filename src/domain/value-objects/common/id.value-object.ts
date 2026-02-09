export class Id {
  private _value: string;

  private constructor(value: string) {
    this._value = value;
  }

  get value() {
    return this._value;
  }

  public static create(value: string) {
    if (value === '') throw new Error('Id must not be empty!');

    const id = new Id(value);

    return id;
  }
}
