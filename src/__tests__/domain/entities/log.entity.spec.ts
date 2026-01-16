import { Log } from '@src/domain/entities/log.entity';

describe('Log - Entity', () => {
  it('should be able to successfully create an log', () => {
    const log_entity = Log.create({
      id: '1',
      filePath: '/example/path',
    });

    expect(log_entity).toBeDefined();
    expect(log_entity).toBeInstanceOf(Log);
  });
});
