import { Log } from '@src/domain/entities/log.entity';
import { LogRepository } from '@src/domain/repositories/log.repository';

export class InMemoryLogRepository implements LogRepository {
  private readonly logs: Log[] = [];

  async save(log: Log): Promise<Log> {
    const log_index = this.logs.findIndex(
      existing_log => existing_log.id === log.id,
    );

    const log_already_exists = log_index !== -1;

    if (log_already_exists) this.update(log, log_index);

    if (!log_already_exists) this.create(log);

    return log;
  }

  async findById(id: string): Promise<Log | null> {
    const log_found = this.logs.find(log => log.id === id);

    if (!log_found) return null;

    return log_found;
  }

  async listAll(): Promise<Log[]> {
    return this.logs;
  }

  private create(log: Log) {
    this.logs.push(log);
  }

  private update(log: Log, logIndex: number) {
    this.logs[logIndex] = log;
  }
}
