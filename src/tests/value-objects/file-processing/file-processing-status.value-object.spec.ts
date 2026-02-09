import { FileProcessingStatus } from '@src/domain/value-objects/file-processing/file-processing-status.value-object';
import { FileProcessingStatusFactory } from '@src/tests/factories/file-processsing-status.factory';

describe('FileProcessingStatus - Value Object', () => {
  it('should make sure to always be created with PENDING value', () => {
    const fileProcessingStatus = FileProcessingStatus.create();

    expect(fileProcessingStatus.value).toBe('PENDING');
  });

  it('should be able to transition to PROCESSING', () => {
    const fileProcessingStatus = FileProcessingStatus.create();

    fileProcessingStatus.markAsProcessing();

    expect(fileProcessingStatus.value).toBe('PROCESSING');
  });

  it('should be able to transition to COMPLETE', () => {
    const fileProcessingStatus = FileProcessingStatusFactory.makeAProcessing();

    fileProcessingStatus.markAsCompleted();

    expect(fileProcessingStatus.value).toBe('COMPLETED');
  });

  it('should be able to transition to FAILED', () => {
    const fileProcessingStatus = FileProcessingStatusFactory.makeAProcessing();

    fileProcessingStatus.markAsFailed();

    expect(fileProcessingStatus.value).toBe('FAILED');
  });

  it('should not allow a status different from PROCESSING to transition to COMPLETED', () => {
    const status = FileProcessingStatusFactory.makeAPending();

    const fn = () => status.markAsCompleted();

    expect(fn).toThrow('Only processing files can be completed!');
  });
});
