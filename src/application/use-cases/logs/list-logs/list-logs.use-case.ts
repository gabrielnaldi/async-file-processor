import { Injectable } from '@nestjs/common';
import { Log } from '@src/domain/entities/log.entity';
import { LogRepository } from '@src/domain/repositories/log.repository';

@Injectable()
export class ListLogsUseCase {
  constructor(private readonly logsRepository: LogRepository) {}

  public async execute(): Promise<Log[]> {
    const logs = await this.logsRepository.listAll();

    return logs;
  }
}
