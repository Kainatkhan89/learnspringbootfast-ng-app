import {ITutorial} from "../learning-path/tutorial.model";

export interface ITutorialPageViewModel {
  currentTutorial: ITutorial;
  nextTutorialId: number | undefined;
  previousTutorialId: number | undefined;
}
