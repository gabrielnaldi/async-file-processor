import { LogRepository } from '@src/domain/repositories/log.repository';
import { ListLogsUseCase } from '@src/application/use-cases/logs/list-logs/list-logs.use-case';
import { InMemoryLogRepository } from '@src/infra/databases/in-memory/log.in-memory.repository';
import { LogFactory } from '@src/__tests__/domain/factories/log.factory';
import { Log } from '@src/domain/entities/log.entity';

describe('List Logs - Use Case', () => {
  let useCase: ListLogsUseCase;
  let repository: LogRepository;

  beforeEach(async () => {
    repository = new InMemoryLogRepository();
    useCase = new ListLogsUseCase(repository);
  });

  it('should list all LOGS', async () => {
    const pending_log = LogFactory.buildPending();

    await repository.save(pending_log);

    const logs = await useCase.execute();

    expect(logs).toHaveLength(1);
    expect(logs[0]).toBeInstanceOf(Log);
  });

  it('should return an empty list when there are no LOGs', async () => {
    const logs = await useCase.execute();

    expect(logs.length).toBe(0);
  });
});
