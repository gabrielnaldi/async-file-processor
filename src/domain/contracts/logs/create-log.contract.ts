import { LogId } from '@src/domain/value-objects/log-id.value-object';

export interface CreateLogContract {
  id: LogId;
  filePath: string;
}
