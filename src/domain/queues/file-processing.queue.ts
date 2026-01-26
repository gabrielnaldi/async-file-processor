import { FileQueuePayload } from '../types/queues/file-queue.types';

export abstract class FileProcessingQueue {
  abstract enqueueFile(payload: FileQueuePayload): void;
}
