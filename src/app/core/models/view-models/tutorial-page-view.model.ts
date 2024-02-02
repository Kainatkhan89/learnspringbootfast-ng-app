import {ITutorial} from "../learning-path/tutorial.model";

export interface TutorialPageViewModel {
  currentTutorial: ITutorial;
  nextTutorialId: number | null;
  previousTutorialId: number | null;
}
