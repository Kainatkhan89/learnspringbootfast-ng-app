import {InMemoryDbService} from "angular-in-memory-web-api";
import {Observable} from "rxjs";
import {IProgress} from "../../models/progress/progress.model";

export class ProgressData implements InMemoryDbService {

  progressData: IProgress = {
    userId: 'SnfKNtkKYsPIds52hGh9aTtSEb92',
    completedTutorialIds: [0, 1, 2, 3]
  };

  createDb(): {} | Observable<{}> | Promise<{}> {
    return {progress: this.progressData};
  }
}
