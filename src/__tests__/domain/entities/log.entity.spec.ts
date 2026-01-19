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

  it('should make sure that every log is created with PENDING status', () => {
    const log_entity = Log.create({
      id: '1',
      filePath: '/example/path',
    });

    expect(log_entity).toBeDefined();
    expect(log_entity).toBeInstanceOf(Log);
    expect(log_entity.status).toBe('PENDING');
  });

  it('should be able to mark a log as PROCESSING', () => {
    const log_entity = Log.create({
      id: '1',
      filePath: '/example/path',
    });

    log_entity.markAsProcessing();

    expect(log_entity.status).toBe('PROCESSING');
  });

  it('should be able to mark a log as COMPLETED', () => {
    const log_entity = Log.create({
      id: '1',
      filePath: '/example/path',
    });

    log_entity.markAsCompleted();

    expect(log_entity.status).toBe('COMPLETED');
  });

  it('should be able to refresh update date', () => {
    jest.useFakeTimers();

    const log_entity = Log.create({
      id: '1',
      filePath: '/example/path',
    });

    const datetime_before = log_entity.updatedAt.getTime();

    jest.advanceTimersByTime(100);

    log_entity.refreshUpdatedAt();

    const datetime_after = log_entity.updatedAt.getTime();

    expect(datetime_after).toBeGreaterThan(datetime_before);

    jest.useRealTimers();
  });

  it('should refresh update date after marking a log as PROCESSING', () => {
    jest.useFakeTimers();

    const log_entity = Log.create({
      id: '1',
      filePath: '/example/path',
    });

    const datetime_before = log_entity.updatedAt.getTime();

    jest.advanceTimersByTime(100);

    log_entity.markAsProcessing();

    const datetime_after = log_entity.updatedAt.getTime();

    expect(datetime_after).toBeGreaterThan(datetime_before);

    jest.useRealTimers();
  });
});
