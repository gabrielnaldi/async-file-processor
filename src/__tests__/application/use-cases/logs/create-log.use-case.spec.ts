import { IdGenerator } from '@src/application/interfaces/id-generator/id-generator.interface';
import { CreateLogInput } from '@src/application/use-cases/logs/create-log/create-log.input';
import { CreateLogUseCase } from '@src/application/use-cases/logs/create-log/create-log.use-case';
import { LogRepository } from '@src/domain/repositories/log.repository';
import { InMemoryLogRepository } from '@src/infra/databases/in-memory/log.in-memory.repository';
import { UUIDGeneratorService } from '@src/infra/services/uuid-generator/uuid-generator.service';

describe('CreateLog - Use case', () => {
  let repository: LogRepository;
  let idGeneratorService: IdGenerator;
  let useCase: CreateLogUseCase;

  beforeEach(async () => {
    repository = new InMemoryLogRepository();
    idGeneratorService = new UUIDGeneratorService();
    useCase = new CreateLogUseCase(repository, idGeneratorService);
  });

  it('should be able to create a log', async () => {
    const log_input: CreateLogInput = { filePath: 'example' };

    const output = await useCase.execute(log_input);

    expect(output).toBeDefined();
    expect(output.id).toMatch(/^[0-9a-fA-F-]{36}$/);
    expect(output.filePath).toBe('example');
  });
});
