export class LogError extends Error {
  private readonly _code: string;

  constructor(message: string, code: string) {
    super(message);

    this.name = 'LogError';

    this._code = code;
  }

  get code() {
    return this._code;
  }

  public static alreadyProcessing() {
    const error_message = 'Log already being processed.';

    const error_code = 'ALREADY_PROCESSING';

    const error = new LogError(error_message, error_code);

    return error;
  }
}
