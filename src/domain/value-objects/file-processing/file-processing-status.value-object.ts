import { FileProcessingStatusType } from '@src/domain/types/file-processing/file-processing-status.type';

export class FileProcessingStatus {
  private _value: FileProcessingStatusType;

  private constructor(value: FileProcessingStatusType) {
    this._value = value;
  }

  // GETTERS
  get value() {
    return this._value;
  }

  // TRANSITIONS
  public markAsProcessing() {
    this._value = 'PROCESSING';
  }

  public markAsCompleted() {
    if (this._value !== 'PROCESSING')
      throw new Error('Only processing files can be completed!');

    this._value = 'COMPLETED';
  }

  public markAsFailed() {
    if (this._value !== 'PROCESSING')
      throw new Error('Only processing files can fail!');

    this._value = 'FAILED';
  }

  public static create() {
    const fileProcessingStatus = new FileProcessingStatus('PENDING');

    return fileProcessingStatus;
  }
}
