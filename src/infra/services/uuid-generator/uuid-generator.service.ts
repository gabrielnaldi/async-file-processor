import { Injectable } from '@nestjs/common';
import { IdGeneratorService } from '@src/application/interfaces/services/id-generator/id-generator.service';

@Injectable()
export class UUIDGeneratorService implements IdGeneratorService {
  public generate() {
    const id = crypto.randomUUID();

    return id;
  }
}
