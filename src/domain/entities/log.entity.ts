import { CreateLogContract } from '../contracts/logs/create-log.contract';
import { LogContract } from '../contracts/logs/log.contract';
import { LogError } from '../errors/logs/log.errors';
import { LogStatusValues } from '../types/logs/logs.types';

export class Log {
  private readonly properties: LogContract;

  private constructor(contract: LogContract) {
    this.properties = contract;
  }

  get id() {
    return this.properties.id.value;
  }

  get status() {
    return this.properties.status;
  }

  get filePath() {
    return this.properties.filePath;
  }

  get updatedAt() {
    return this.properties.updatedAt;
  }

  refreshUpdatedAt() {
    this.properties.updatedAt = new Date();
  }

  markAsProcessing() {
    if (this.properties.status === 'PROCESSING')
      throw LogError.alreadyProcessing();

    if (this.properties.status === 'COMPLETED')
      throw LogError.processACompleted();

    this.properties.status = LogStatusValues.PROCESSING;
    this.refreshUpdatedAt();
  }

  markAsCompleted() {
    if (this.properties.status === 'PENDING') throw LogError.completeAPending();

    if (this.properties.status === 'COMPLETED')
      throw LogError.alreadyCompleted();

    if (this.properties.status === 'FAILED') throw LogError.completeAFailed();

    this.properties.status = LogStatusValues.COMPLETED;
    this.refreshUpdatedAt();
  }

  markAsFailed() {
    if (this.properties.status === 'PENDING') throw LogError.failAPending();

    if (this.properties.status === 'FAILED') throw LogError.alreadyFailed();

    if (this.properties.status === 'COMPLETED') throw LogError.failACompleted();

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
