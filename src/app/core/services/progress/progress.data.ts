import {InMemoryDbService} from "angular-in-memory-web-api";
import {Observable} from "rxjs";

export class ProgressData implements InMemoryDbService {

  progressData = {};

  createDb(): {} | Observable<{}> | Promise<{}> {
    return {progress: this.progressData};
  }

}
