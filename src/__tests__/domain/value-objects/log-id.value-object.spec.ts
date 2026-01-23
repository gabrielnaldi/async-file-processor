import { LogIdError } from '@src/domain/errors/value-objects/log-id.errors';
import { LogId } from '@src/domain/value-objects/log-id.value-object';

describe('Log ID - Value object', () => {
  it('it should be able to create a LOG ID', () => {
    const log_id = LogId.create('1');

    expect(log_id.value).toBeDefined();
  });

  it('should not allow id to be empty', () => {
    const fn = () => LogId.create('');

    try {
      fn();
      fail('FORCED ERROR');
    } catch (error) {
      expect(error).toBeInstanceOf(LogIdError);
      expect((error as LogIdError).name).toBe('LogIdError');
      expect((error as LogIdError).code).toBe('NOT_EMPTY');
    }
  });
});
