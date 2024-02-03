import {ITutorial} from "../learning-path/tutorial.model";

export interface IProgressCardViewModel {
  percentageProgress: number;
  lastCompletedTutorial: ITutorial | undefined;
  tutorialToResumeFrom: ITutorial | undefined;
}
