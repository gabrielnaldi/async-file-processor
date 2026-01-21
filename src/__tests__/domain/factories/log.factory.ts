import { CreateLogContract } from '@src/domain/contracts/logs/create-log.contract';
import { Log } from '@src/domain/entities/log.entity';

export class LogFactory {
  public static buildPending(override?: Partial<CreateLogContract>) {
    const pending_log = Log.create({
      id: override?.id || '1',
      filePath: override?.filePath || '/example/path',
    });

    return pending_log;
  }

  public static buildProcessing(override?: Partial<CreateLogContract>) {
    const log = this.buildPending(override);

    log.markAsProcessing();

    return log;
  }

  public static buildCompleted(override?: Partial<CreateLogContract>) {
    const log = this.buildProcessing(override);

    log.markAsCompleted();

    return log;
  }

  public static buildFailed(override?: Partial<CreateLogContract>) {
    const log = this.buildProcessing(override);

    log.markAsFailed();

    return log;
  }
}
