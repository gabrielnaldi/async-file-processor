import { Id } from '@src/domain/value-objects/common/id.value-object';

describe('ID - Value Object', () => {
  it('should be able to create an Id', () => {
    const id = Id.create('valid-1');

    expect(id).toBeInstanceOf(Id);
    expect(id).toBeDefined();
    expect(id.value).toBe('valid-1');
  });
});
