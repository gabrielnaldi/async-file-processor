import { Injectable } from '@nestjs/common';
import { IdGeneratorService } from '@src/application/interfaces/services/id-generator/id-generator.service';
import { Log } from '@src/domain/entities/log.entity';
import { LogRepository } from '@src/domain/repositories/log.repository';
import { LogId } from '@src/domain/value-objects/log-id.value-object';
import { CreateLogInput } from './create-log.input';

@Injectable()
export class CreateLogUseCase {
  constructor(
    private readonly logRepository: LogRepository,
    private readonly idGenerator: IdGeneratorService,
  ) {}

  public async execute(input: CreateLogInput) {
    const generator_id = this.idGenerator.generate();

    const log_id = LogId.create(generator_id);

    const log_entity = Log.create({
      id: log_id,
      filePath: input.filePath,
    });

    const log_created = await this.logRepository.save(log_entity);

    return log_created;
  }
}
