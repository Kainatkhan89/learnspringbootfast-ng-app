import {InMemoryDbService} from "angular-in-memory-web-api";
import {IModule} from "../../models/learning-path/module.model";
import {ILearningPath} from "../../models/learning-path/learning-path.model";
import {IProgress} from "../../models/progress/progress.model";

export class LearningPathData implements InMemoryDbService {
  mockModule1: IModule = {
    id: 0,
    number: 1,
    title: 'Spring Boot: The Concepts',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    styles: {
      color: 'INDIGO',
      icon: 'BOOK'
    },
    tutorials: [
      {
        id: 0,
        moduleId: 0,
        title: 'Lorem Ipsum Tutorial',
        durationSeconds: 90,
        completed: false,
        videoUrl: '',
        startFilesUrl: '',
        finishedFilesUrl: '',
      },
      {
        id: 1,
        moduleId: 0,
        title: 'Lorem Ipsum Tutorial',
        durationSeconds: 90,
        completed: false,
        videoUrl: '',
        startFilesUrl: '',
        finishedFilesUrl: '',
      },
      {
        id: 2,
        moduleId: 0,
        title: 'Lorem Ipsum Tutorial',
        durationSeconds: 90,
        completed: false,
        videoUrl: '',
        startFilesUrl: '',
        finishedFilesUrl: '',
      },
      {
        id: 3,
        moduleId: 0,
        title: 'Lorem Ipsum Tutorial',
        durationSeconds: 90,
        completed: false,
        videoUrl: '',
        startFilesUrl: '',
        finishedFilesUrl: '',
      },
    ]
  }

  mockModule2: IModule = {
    id: 1,
    number: 2,
    title: 'Getting Started',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    styles: {
      color: 'TEAL',
      icon: 'FLAG'
    },
    tutorials: [
      {
        id: 4,
        moduleId: 1,
        title: 'Lorem Ipsum Tutorial',
        durationSeconds: 90,
        completed: false,
        videoUrl: '',
        startFilesUrl: '',
        finishedFilesUrl: '',
      },
      {
        id: 5,
        moduleId: 1,
        title: 'Lorem Ipsum Tutorial',
        durationSeconds: 90,
        completed: false,
        videoUrl: '',
        startFilesUrl: '',
        finishedFilesUrl: '',
      },
      {
        id: 6,
        moduleId: 1,
        title: 'Lorem Ipsum Tutorial',
        durationSeconds: 90,
        completed: false,
        videoUrl: '',
        startFilesUrl: '',
        finishedFilesUrl: '',
      },
      {
        id: 7,
        moduleId: 1,
        title: 'Lorem Ipsum Tutorial',
        durationSeconds: 90,
        completed: false,
        videoUrl: '',
        startFilesUrl: '',
        finishedFilesUrl: '',
      },
    ]
  }

  mockModule3: IModule = {
    id: 2,
    number: 3,
    title: 'Controllers and Services',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    styles: {
      color: 'PURPLE',
      icon: 'TERMINAL'
    },
    tutorials: [
      {
        id: 8,
        moduleId: 2,
        title: 'Lorem Ipsum Tutorial',
        durationSeconds: 90,
        completed: false,
        videoUrl: '',
        startFilesUrl: '',
        finishedFilesUrl: '',
      },
      {
        id: 9,
        moduleId: 2,
        title: 'Lorem Ipsum Tutorial',
        durationSeconds: 90,
        completed: false,
        videoUrl: '',
        startFilesUrl: '',
        finishedFilesUrl: '',
      },
      {
        id: 10,
        moduleId: 2,
        title: 'Lorem Ipsum Tutorial',
        durationSeconds: 90,
        completed: false,
        videoUrl: '',
        startFilesUrl: '',
        finishedFilesUrl: '',
      },
      {
        id: 11,
        moduleId: 2,
        title: 'Lorem Ipsum Tutorial',
        durationSeconds: 90,
        completed: false,
        videoUrl: '',
        startFilesUrl: '',
        finishedFilesUrl: '',
      },
    ]
  }

  mockModule4: IModule = {
    id: 3,
    number: 4,
    title: 'Validations and Error Handling',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    styles: {
      color: 'PINK',
      icon: 'WARNING'
    },
    tutorials: [
      {
        id: 12,
        moduleId: 3,
        title: 'Lorem Ipsum Tutorial',
        durationSeconds: 90,
        completed: false,
        videoUrl: '',
        startFilesUrl: '',
        finishedFilesUrl: '',
      },
      {
        id: 13,
        moduleId: 3,
        title: 'Lorem Ipsum Tutorial',
        durationSeconds: 90,
        completed: false,
        videoUrl: '',
        startFilesUrl: '',
        finishedFilesUrl: '',
      },
      {
        id: 14,
        moduleId: 3,
        title: 'Lorem Ipsum Tutorial',
        durationSeconds: 90,
        completed: false,
        videoUrl: '',
        startFilesUrl: '',
        finishedFilesUrl: '',
      },
      {
        id: 15,
        moduleId: 3,
        title: 'Lorem Ipsum Tutorial',
        durationSeconds: 90,
        completed: false,
        videoUrl: '',
        startFilesUrl: '',
        finishedFilesUrl: '',
      },
    ]
  }

  mockModule5: IModule = {
    id: 4,
    number: 5,
    title: 'Testing with Spring Boot',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    styles: {
      color: 'YELLOW',
      icon: 'SHIELD'
    },
    tutorials: [
      {
        id: 16,
        moduleId: 4,
        title: 'Lorem Ipsum Tutorial',
        durationSeconds: 90,
        completed: false,
        videoUrl: '',
        startFilesUrl: '',
        finishedFilesUrl: '',
      },
      {
        id: 17,
        moduleId: 4,
        title: 'Lorem Ipsum Tutorial',
        durationSeconds: 90,
        completed: false,
        videoUrl: '',
        startFilesUrl: '',
        finishedFilesUrl: '',
      },
      {
        id: 18,
        moduleId: 4,
        title: 'Lorem Ipsum Tutorial',
        durationSeconds: 90,
        completed: false,
        videoUrl: '',
        startFilesUrl: '',
        finishedFilesUrl: '',
      },
      {
        id: 19,
        moduleId: 4,
        title: 'Lorem Ipsum Tutorial',
        durationSeconds: 90,
        completed: false,
        videoUrl: '',
        startFilesUrl: '',
        finishedFilesUrl: '',
      },
    ]
  }

  mockModule6: IModule = {
    id: 5,
    number: 6,
    title: 'Data Access',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    styles: {
      color: 'FUCHSIA',
      icon: 'DATABASE'
    },
    tutorials: [
      {
        id: 20,
        moduleId: 5,
        title: 'Lorem Ipsum Tutorial',
        durationSeconds: 90,
        completed: false,
        videoUrl: '',
        startFilesUrl: '',
        finishedFilesUrl: '',
      },
      {
        id: 21,
        moduleId: 5,
        title: 'Lorem Ipsum Tutorial',
        durationSeconds: 90,
        completed: false,
        videoUrl: '',
        startFilesUrl: '',
        finishedFilesUrl: '',
      },
      {
        id: 22,
        moduleId: 5,
        title: 'Lorem Ipsum Tutorial',
        durationSeconds: 90,
        completed: false,
        videoUrl: '',
        startFilesUrl: '',
        finishedFilesUrl: '',
      },
      {
        id: 23,
        moduleId: 5,
        title: 'Lorem Ipsum Tutorial',
        durationSeconds: 90,
        completed: false,
        videoUrl: '',
        startFilesUrl: '',
        finishedFilesUrl: '',
      },
    ]
  }

  mockModule7: IModule = {
    id: 6,
    number: 7,
    title: 'Securing our API',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    styles: {
      color: 'ROSE',
      icon: 'LOCK'
    },
    tutorials: [
      {
        id: 24,
        moduleId: 6,
        title: 'Lorem Ipsum Tutorial',
        durationSeconds: 90,
        completed: false,
        videoUrl: '',
        startFilesUrl: '',
        finishedFilesUrl: '',
      },
      {
        id: 25,
        moduleId: 6,
        title: 'Lorem Ipsum Tutorial',
        durationSeconds: 90,
        completed: false,
        videoUrl: '',
        startFilesUrl: '',
        finishedFilesUrl: '',
      },
      {
        id: 26,
        moduleId: 6,
        title: 'Lorem Ipsum Tutorial',
        durationSeconds: 90,
        completed: false,
        videoUrl: '',
        startFilesUrl: '',
        finishedFilesUrl: '',
      },
      {
        id: 27,
        moduleId: 6,
        title: 'Lorem Ipsum Tutorial',
        durationSeconds: 90,
        completed: false,
        videoUrl: '',
        startFilesUrl: '',
        finishedFilesUrl: '',
      },
    ]
  }

  mockModule8: IModule = {
    id: 7,
    number: 8,
    title: 'Deploying our API',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    styles: {
      color: 'SKY',
      icon: 'PLANE'
    },
    tutorials: [
      {
        id: 28,
        moduleId: 7,
        title: 'Lorem Ipsum Tutorial',
        durationSeconds: 90,
        completed: false,
        videoUrl: '',
        startFilesUrl: '',
        finishedFilesUrl: '',
      },
      {
        id: 29,
        moduleId: 7,
        title: 'Lorem Ipsum Tutorial',
        durationSeconds: 90,
        completed: false,
        videoUrl: '',
        startFilesUrl: '',
        finishedFilesUrl: '',
      },
      {
        id: 30,
        moduleId: 7,
        title: 'Lorem Ipsum Tutorial',
        durationSeconds: 90,
        completed: false,
        videoUrl: '',
        startFilesUrl: '',
        finishedFilesUrl: '',
      },
      {
        id: 31,
        moduleId: 7,
        title: 'Lorem Ipsum Tutorial',
        durationSeconds: 90,
        completed: false,
        videoUrl: '',
        startFilesUrl: '',
        finishedFilesUrl: '',
      },
    ]
  }

  learningPath: ILearningPath = { modules: [this.mockModule1, this.mockModule2, this.mockModule3, this.mockModule4,
    this.mockModule5, this.mockModule6, this.mockModule7, this.mockModule8] }

  progressData: IProgress = {
    userId: 'SnfKNtkKYsPIds52hGh9aTtSEb92',
    completedTutorialIds: [0, 1, 2, 3]
  };

  createDb() {
    return {learningPath: this.learningPath, progress: this.progressData};
  }
}
