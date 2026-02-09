export interface FileProcessingContract {
  // REQUIRED
  id: string;
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
  id: string;
  originalName: string;
  mimeType: string;
  size: number;
  tempPath: string;
}
