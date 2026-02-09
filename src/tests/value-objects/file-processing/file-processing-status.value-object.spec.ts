import { FileProcessingStatus } from '@src/domain/value-objects/file-processing/file-processing-status.value-object';

describe('FileProcessingStatus - Value Object', () => {
  it('should make sure to always be created with PENDING value', () => {
    const fileProcessingStatus = FileProcessingStatus.create();

    expect(fileProcessingStatus.value).toBe('PENDING');
  });
});
