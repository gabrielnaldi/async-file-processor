import {
  FileProcessingContract,
  FileProcessingCreateContract,
} from '../contracts/file-processing/file-processing.contract';
import { ValidationAttributes } from '../types/file-processing/validation-attributes.type';
import { FileProcessingStatus } from '../value-objects/file-processing/file-processing-status.value-object';

export class FileProcessing {
  private props: FileProcessingContract;

  private constructor(contract: FileProcessingContract) {
    this.props = contract;
  }

  // GETTERS
  get id() {
    return this.props.id.value;
  }

  get originalName() {
    return this.props.originalName;
  }

  get mimeType() {
    return this.props.mimeType;
  }

  get size() {
    return this.props.size;
  }

  get tempPath() {
    return this.props.tempPath;
  }

  get status() {
    return this.props.status.value;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get updatedAt() {
    return this.props.updatedAt;
  }

  get finalPath() {
    return this.props.finalPath;
  }

  get errorReason() {
    return this.props.errorReason;
  }

  get processedAt() {
    return this.props.processedAt;
  }

  // FACTORIES
  public static create(createContract: FileProcessingCreateContract) {
    FileProcessing.validateAttributes({ ...createContract });

    const now = new Date();

    const fileStatus = FileProcessingStatus.create();

    const contractData: FileProcessingContract = {
      id: createContract.id,
      originalName: createContract.originalName,
      mimeType: createContract.mimeType,
      size: createContract.size,
      tempPath: createContract.tempPath,
      status: fileStatus,
      finalPath: null,
      errorReason: null,
      createdAt: now,
      updatedAt: now,
      processedAt: null,
    };

    const entity = new FileProcessing(contractData);

    return entity;
  }

  // VALIDATIONS
  private static validateAttributes(attributes: ValidationAttributes) {
    if (attributes.originalName === '')
      throw new Error('Property "originalName" must not be empty!');

    if (attributes.mimeType === '')
      throw new Error('Property "mimeType" must not be empty!');

    if (attributes.tempPath === '')
      throw new Error('Property "tempPath" must not be empty!');

    if (attributes.size <= 0)
      throw new Error('Property "size" must be positive!');
  }
}
