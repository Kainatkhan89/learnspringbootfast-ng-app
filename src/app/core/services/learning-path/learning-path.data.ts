import {InMemoryDbService} from "angular-in-memory-web-api";
import {IModule} from "../../models/learning-path/module.model";
import {ILearningPath} from "../../models/learning-path/learning-path.model";

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

  learningPath: ILearningPath = { modules: [this.mockModule1, this.mockModule2, this.mockModule3, this.mockModule4,
    this.mockModule5, this.mockModule6, this.mockModule7, this.mockModule8] }

  createDb() {
    return {learningPath: this.learningPath};
  }
}
