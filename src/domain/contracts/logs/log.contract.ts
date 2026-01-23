import { LogStatus } from '@src/domain/types/logs/logs.types';
import { LogId } from '@src/domain/value-objects/log-id.value-object';

export interface LogContract {
  id: LogId;
  filePath: string;
  status: LogStatus;
  createdAt: Date;
  updatedAt: Date;
}
