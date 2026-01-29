import { Injectable } from '@nestjs/common';
import { IdGenerator } from '@src/application/interfaces/id-generator/id-generator.interface';
import { Log } from '@src/domain/entities/log.entity';
import { LogRepository } from '@src/domain/repositories/log.repository';
import { LogId } from '@src/domain/value-objects/log-id.value-object';
import { CreateLogInput } from './create-log.input';
import { CreateLogOutput } from './create-log.output';

@Injectable()
export class CreateLogUseCase {
  constructor(
    private readonly logRepository: LogRepository,
    private readonly idGenerator: IdGenerator,
  ) {}

  public async execute(input: CreateLogInput): Promise<CreateLogOutput> {
    const generator_id = this.idGenerator.generate();

    const log_id = LogId.create(generator_id);

    const log_entity = Log.create({
      id: log_id,
      filePath: input.filePath,
    });

    const log_created = await this.logRepository.save(log_entity);

    const output: CreateLogOutput = {
      id: log_created.id,
      filePath: log_created.filePath,
    };

    return output;
  }
}
