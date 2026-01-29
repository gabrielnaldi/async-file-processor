import { Injectable } from '@nestjs/common';
import { IdGenerator } from '@src/application/interfaces/id-generator/id-generator.service';

@Injectable()
export class UUIDGeneratorService implements IdGenerator {
  public generate() {
    const id = crypto.randomUUID();

    return id;
  }
}
