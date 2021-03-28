import { environment } from '../../environments/environment';

export class Endpoints {
  apiRoot: string;
  apiMain: string;

  constructor() {
    this.apiRoot = environment.apiRoot;
    this.apiMain = `${this.apiRoot}.json`;
  }

  public getGetAllUri(): string {
    return this.apiMain;
  }

  public getGetByIdUri(id: string): string {
    return `${this.apiRoot}/${id}.json`;
  }

  public getPostUri(): string {
    return this.apiMain;
  }
}
