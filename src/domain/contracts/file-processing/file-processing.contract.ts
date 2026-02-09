import { Id } from '@src/domain/value-objects/common/id.value-object';

export interface FileProcessingContract {
  // REQUIRED
  id: Id;
  originalName: string;
  mimeType: string;
  size: number;
  tempPath: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  // OPTIONALS
  finalPath: string | null;
  errorReason: string | null;
  processedAt: Date | null;
}

export interface FileProcessingCreateContract {
  id: Id;
  originalName: string;
  mimeType: string;
  size: number;
  tempPath: string;
}
