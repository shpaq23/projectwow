export abstract class GenericIconType<T> {
  abstract readonly url: string;
  abstract readonly data: T;
  abstract getDisplayName(): string;
}
