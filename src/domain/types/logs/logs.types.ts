export type LogStatus = 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'FAILED';

export const LogStatusValues = {
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
} as const;
