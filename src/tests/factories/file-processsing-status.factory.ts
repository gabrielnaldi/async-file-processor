import { FileProcessingStatus } from '@src/domain/value-objects/file-processing/file-processing-status.value-object';

export class FileProcessingStatusFactory {
  public static makeAPending(): FileProcessingStatus {
    const pending = FileProcessingStatus.create();

    return pending;
  }

  public static makeAProcessing(): FileProcessingStatus {
    const status = FileProcessingStatusFactory.makeAPending();

    status.markAsProcessing();

    return status;
  }
}
