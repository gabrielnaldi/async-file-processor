import { Log } from '@src/domain/entities/log.entity';
import { LogError } from '@src/domain/errors/logs/log.errors';

describe('Log - Entity', () => {
  it('should be able to successfully create an Log', () => {
    const log_entity = Log.create({
      id: '1',
      filePath: '/example/path',
    });

    expect(log_entity).toBeDefined();
    expect(log_entity).toBeInstanceOf(Log);
  });

  it('should make sure that every Log is created with PENDING status', () => {
    const log_entity = Log.create({
      id: '1',
      filePath: '/example/path',
    });

    expect(log_entity).toBeDefined();

    expect(log_entity).toBeInstanceOf(Log);

    expect(log_entity.status).toBe('PENDING');
  });

  it('should be able to mark a Log as PROCESSING', () => {
    const log_entity = Log.create({
      id: '1',
      filePath: '/example/path',
    });

    log_entity.markAsProcessing();

    expect(log_entity.status).toBe('PROCESSING');
  });

  it('should be able to mark a PROCESSING Log as COMPLETED', () => {
    const log_entity = Log.create({
      id: '1',
      filePath: '/example/path',
    });

    log_entity.markAsProcessing();

    log_entity.markAsCompleted();

    expect(log_entity.status).toBe('COMPLETED');
  });

  it('should be able to mark a PROCESSING Log as FAILED', () => {
    const log_entity = Log.create({
      id: '1',
      filePath: '/example/path',
    });

    log_entity.markAsProcessing();

    log_entity.markAsFailed();

    expect(log_entity.status).toBe('FAILED');
  });

  it('should be able to REFRESH update date', () => {
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

  it('should REFRESH update date after marking a Log as PROCESSING', () => {
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

  it('should REFRESH update date after marking a Log as COMPLETED', () => {
    jest.useFakeTimers();

    const log_entity = Log.create({
      id: '1',
      filePath: '/example/path',
    });

    const datetime_before = log_entity.updatedAt.getTime();

    jest.advanceTimersByTime(100);

    log_entity.markAsProcessing();

    log_entity.markAsCompleted();

    const datetime_after = log_entity.updatedAt.getTime();

    expect(datetime_after).toBeGreaterThan(datetime_before);

    jest.useRealTimers();
  });

  it('should REFRESH update date after marking a Log as FAILED', () => {
    jest.useFakeTimers();

    const log_entity = Log.create({
      id: '1',
      filePath: '/example/path',
    });

    const datetime_before = log_entity.updatedAt.getTime();

    jest.advanceTimersByTime(100);

    log_entity.markAsFailed();

    const datetime_after = log_entity.updatedAt.getTime();

    expect(datetime_after).toBeGreaterThan(datetime_before);

    jest.useRealTimers();
  });

  it('should not allow a PROCESSING Log to me marked as PROCESSING', () => {
    const log_entity = Log.create({
      id: '1',
      filePath: '/example/path',
    });

    log_entity.markAsProcessing();

    const fn = () => log_entity.markAsProcessing();

    try {
      fn();
    } catch (error) {
      expect(error).toBeInstanceOf(LogError);
      expect((error as LogError).name).toBe('LogError');
      expect((error as LogError).code).toBe('ALREADY_PROCESSING');
    }
  });

  it('should not allow a PENDING Log to me marked as COMPLETED', () => {
    const log_entity = Log.create({
      id: '1',
      filePath: '/example/path',
    });

    const fn = () => log_entity.markAsCompleted();

    try {
      fn();
    } catch (error) {
      expect(error).toBeInstanceOf(LogError);
      expect((error as LogError).name).toBe('LogError');
      expect((error as LogError).code).toBe('COMPLETE_A_PENDING');
    }
  });

  it('should not allow a COMPLETED Log to me marked as COMPLETED', () => {
    const log_entity = Log.create({
      id: '1',
      filePath: '/example/path',
    });

    log_entity.markAsProcessing();

    const fn = () => log_entity.markAsCompleted();

    try {
      fn();
    } catch (error) {
      expect(error).toBeInstanceOf(LogError);
      expect((error as LogError).name).toBe('LogError');
      expect((error as LogError).code).toBe('ALREADY_COMPLETED');
    }
  });
});
