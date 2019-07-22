export default class Cancel {
  messgae?: string

  constructor(message?: string) {
    this.messgae = message;
  }
}

export function isCancel(value: any): boolean {
  return value instanceof Cancel;
}
