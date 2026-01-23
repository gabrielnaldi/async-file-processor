import { CreateLogContract } from '@src/domain/contracts/logs/create-log.contract';
import { Log } from '@src/domain/entities/log.entity';
import { LogId } from '@src/domain/value-objects/log-id.value-object';

export class LogFactory {
  public static buildPending(override?: Partial<CreateLogContract>) {
    const log_id = override?.id || LogId.create('1');

    const pending_log = Log.create({
      id: log_id,
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
