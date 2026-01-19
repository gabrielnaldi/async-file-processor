import { CreateLogContract } from '../contracts/logs/create-log.contract';
import { LogContract } from '../contracts/logs/log.contract';
import { LogStatusValues } from '../types/logs/logs.types';

export class Log {
  private readonly properties: LogContract;

  private constructor(contract: LogContract) {
    this.properties = contract;
  }

  get status() {
    return this.properties.status;
  }

  get updatedAt() {
    return this.properties.updatedAt;
  }

  refreshUpdatedAt() {
    this.properties.updatedAt = new Date();
  }

  markAsProcessing() {
    if (this.properties.status === 'PROCESSING')
      throw new Error('Log already being processed.');

    this.properties.status = LogStatusValues.PROCESSING;
    this.refreshUpdatedAt();
  }

  markAsCompleted() {
    this.properties.status = LogStatusValues.COMPLETED;
    this.refreshUpdatedAt();
  }

  markAsFailed() {
    this.properties.status = LogStatusValues.FAILED;
    this.refreshUpdatedAt();
  }

  static create(createContract: CreateLogContract) {
    const default_status = 'PENDING';

    const now = new Date();

    const log_entity = new Log({
      id: createContract.id,
      filePath: createContract.filePath,
      status: default_status,
      createdAt: now,
      updatedAt: now,
    });

    return log_entity;
  }
}
