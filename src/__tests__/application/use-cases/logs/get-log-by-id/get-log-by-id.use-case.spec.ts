import { LogFactory } from '@src/__tests__/domain/factories/log.factory';
import { GetLogByIdUseCase } from '@src/application/use-cases/logs/get-log-by-id/get-log-by-id.use-case';
import { Log } from '@src/domain/entities/log.entity';
import { LogRepository } from '@src/domain/repositories/log.repository';
import { InMemoryLogRepository } from '@src/infra/databases/in-memory/log.in-memory.repository';

describe('GetLogById - Use case', () => {
  let repository: LogRepository;
  let useCase: GetLogByIdUseCase;

  beforeEach(() => {
    repository = new InMemoryLogRepository();
    useCase = new GetLogByIdUseCase(repository);
  });

  it('should be able to GET a LOG by ID', async () => {
    const pending_log = LogFactory.buildPending();

    await repository.save(pending_log);

    const log_found = await useCase.execute('1');

    expect(log_found).toBeDefined();
    expect(log_found).toBeInstanceOf(Log);
    expect(log_found?.id).toBe('1');
    expect(log_found?.status).toBe('PENDING');
  });
});
