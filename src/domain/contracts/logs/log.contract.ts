import { LogStatus } from '@src/domain/types/logs/logs.types';

export interface LogContract {
  id: string;
  filePath: string;
  status: LogStatus;
  createdAt: Date;
  updatedAt: Date;
}
