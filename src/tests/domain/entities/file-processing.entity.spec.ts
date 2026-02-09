import { FileProcessingCreateContract } from '@src/domain/contracts/file-processing/file-processing.contract';
import { FileProcessing } from '@src/domain/entities/file-processing.entity';

describe('FileProcessing - Entity', () => {
  const DATA_EXAMPLE: FileProcessingCreateContract = {
    id: '',
    originalName: '',
    mimeType: '',
    size: 0,
    tempPath: '',
  };

  it('should create a file processing entity successfully', () => {
    const entity = FileProcessing.create(DATA_EXAMPLE);

    expect(entity).toBeDefined();
    expect(entity).toBeInstanceOf(FileProcessing);
  });
});
