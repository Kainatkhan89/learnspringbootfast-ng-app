import {ITutorial} from "../learning-path/tutorial.model";

export interface IProgress {
  userId: string;
  completedTutorialIds: number[];
}
