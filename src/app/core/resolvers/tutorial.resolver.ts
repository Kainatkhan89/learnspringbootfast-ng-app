import {ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot} from "@angular/router";
import {ITutorial} from "../models/learning-path/tutorial.model";
import {TutorialService} from "../services/tutorial/tutorial.service";
import {inject} from "@angular/core";
import {map, Observable, of} from "rxjs";

export const tutorialResolver = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ITutorial | null> => {
  const tutorialService: TutorialService = inject(TutorialService);
  const tutorialIdStr: string | null = route.paramMap.get('tutorialId');
  const tutorialId: number | null = tutorialIdStr ? parseInt(tutorialIdStr, 10) : null;

  if (tutorialId != null) {
    return tutorialService.getTutorialById$(tutorialId).pipe(
      map(tutorial => {
        if (tutorial) {
          return tutorial;
        } else {
          return null
        }
      })
    )
  } else {
    return of(null);
  }
}
