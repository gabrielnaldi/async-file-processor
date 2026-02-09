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

  public static create() {
    const fileProcessingStatus = new FileProcessingStatus('PENDING');

    return fileProcessingStatus;
  }
}
