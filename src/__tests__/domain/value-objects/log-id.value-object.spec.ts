import { LogId } from '@src/domain/value-objects/log-id.value-object';

describe('Log ID - Value object', () => {
  it('it should be able to create a LOG ID', () => {
    const log_id = LogId.create('1');

    expect(log_id.value).toBeDefined();
  });
});
