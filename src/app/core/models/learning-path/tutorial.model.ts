export interface ITutorial {
  id: number;
  moduleId: number;
  title: string;
  durationSeconds: number;
  completed: boolean;
  videoUrl: string;
  startFilesUrl: string;
  finishedFilesUrl: string;
}
