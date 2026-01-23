export class LogIdError extends Error {
  private readonly _code: string;

  constructor(message: string, code: string) {
    super(message);

    this._code = code;

    this.name = 'LogIdError';
  }

  get code() {
    return this._code;
  }

  static notEmpty() {
    const error_message = 'LOG ID must not be empty';

    const error_code = 'NOT_EMPTY';

    const error = new LogIdError(error_message, error_code);

    return error;
  }
}
