import { Log } from '../entities/log.entity';

export abstract class LogRepository {
  abstract save(log: Log): Promise<Log>;
  abstract findById(id: string): Promise<Log | null>;
  abstract listAll(): Promise<Log[]>;
}
