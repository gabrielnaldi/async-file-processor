export class Id {
  private _value: string;

  private constructor(value: string) {
    this._value = value;
  }

  get value() {
    return this._value;
  }

  public static create(value: string) {
    const id = new Id(value);

    return id;
  }
}
