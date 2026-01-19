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
    const error_message = 'Log already PROCESSING';

    const error_code = 'ALREADY_PROCESSING';

    const error = new LogError(error_message, error_code);

    return error;
  }

  public static completeAPending() {
    const error_message = 'PENDING Logs can not be marked as COMPLETED.';

    const error_code = 'COMPLETE_A_PENDING';

    const error = new LogError(error_message, error_code);

    return error;
  }
}
