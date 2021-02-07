export class Option<T = any> {
  constructor(public readonly value: T,
              public readonly displayValue: string) {
  }
}
