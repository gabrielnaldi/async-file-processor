import { FileProcessingCreateContract } from '@src/domain/contracts/file-processing/file-processing.contract';
import { FileProcessing } from '@src/domain/entities/file-processing.entity';
import { Id } from '@src/domain/value-objects/common/id.value-object';

describe('FileProcessing - Entity', () => {
  const valid_id = Id.create('1');

  const DATA_EXAMPLE: FileProcessingCreateContract = {
    id: valid_id,
    originalName: 'example',
    mimeType: 'PDF',
    size: 100,
    tempPath: '/var/temp',
  };

  it('should create a file processing entity successfully', () => {
    const entity = FileProcessing.create(DATA_EXAMPLE);

    expect(entity).toBeDefined();
    expect(entity).toBeInstanceOf(FileProcessing);
  });

  it('should make sure every properties was assigned', () => {
    const entity = FileProcessing.create(DATA_EXAMPLE);

    expect(entity.id).toBe('1');
    expect(entity.originalName).toBe('example');
    expect(entity.mimeType).toBe('PDF');
    expect(entity.size).toBe(100);
    expect(entity.tempPath).toBe('/var/temp');
    expect(entity.status).toBe('PENDING');
    expect(entity.createdAt).toBeInstanceOf(Date);
    expect(entity.updatedAt).toBeInstanceOf(Date);
    expect(entity.finalPath).toBeNull();
    expect(entity.errorReason).toBeNull();
    expect(entity.processedAt).toBeNull();
  });
});
