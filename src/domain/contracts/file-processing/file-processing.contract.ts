export interface FileProcessingContract {
  id: string;
  originalName: string;
  mimeType: string;
  size: number;
  status: string;
  tempPath: string;
  finalPath: string | null;
  errorReason: string | null;
  createdAt: Date;
  updatedAt: Date;
  processedAt: Date | null;
}

export interface FileProcessingCreateContract {
  id: string;
  originalName: string;
  mimeType: string;
  size: number;
  tempPath: string;
}
