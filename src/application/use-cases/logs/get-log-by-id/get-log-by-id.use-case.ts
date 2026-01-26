import { Injectable } from '@nestjs/common';
import { LogRepository } from '@src/domain/repositories/log.repository';

@Injectable()
export class GetLogByIdUseCase {
  constructor(private readonly logRepository: LogRepository) {}

  public async execute(id: string) {
    const log_found = await this.logRepository.findById(id);

    return log_found;
  }
}
