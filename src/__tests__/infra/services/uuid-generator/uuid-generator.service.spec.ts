import { UUIDGeneratorService } from '@src/infra/services/uuid-generator/uuid-generator.service';

describe('UUID - Generator', () => {
  let service: UUIDGeneratorService;

  beforeAll(() => {
    service = new UUIDGeneratorService();
  });

  it('should GENERATE an UUID', () => {
    const uuid = service.generate();

    expect(uuid).toBeDefined();
    expect(uuid).toMatch(
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
    );
  });
});
