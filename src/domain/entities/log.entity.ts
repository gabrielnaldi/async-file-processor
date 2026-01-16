import { CreateLogContract } from '../contracts/logs/create-log.contract';
import { LogContract } from '../contracts/logs/log.contract';

export class Log {
  private readonly properties: LogContract;

  private constructor(contract: LogContract) {
    this.properties = contract;
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
