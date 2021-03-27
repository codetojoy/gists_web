export class Util {
  constructor() {}

  tracer(msg: string): string {
    const now = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
    return `TRACER [${now}] ${msg}`;
  }
}
