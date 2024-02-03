import {ITutorial} from "../learning-path/tutorial.model";

export interface IProgressCardView {
  percentageProgress: number;
  lastCompletedTutorial: ITutorial | undefined;
  tutorialToResumeFrom: ITutorial | undefined;
}
