export class Log {
  private readonly properties: {
    id: string;
    filePath: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
  };

  private constructor(contract: {
    id: string;
    filePath: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
  }) {
    this.properties = contract;
  }

  static create(createContract: { id: string; filePath: string }) {
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
