import {ActivatedRouteSnapshot} from "@angular/router";
import {TutorialService} from "../services/tutorial/tutorial.service";
import {inject} from "@angular/core";
import {Observable, of} from "rxjs";
import {ITutorialPageViewModel} from "../models/view-models/tutorial-page-view.model";

export const tutorialPageResolver = (route: ActivatedRouteSnapshot): Observable<ITutorialPageViewModel | null> => {
  const tutorialService: TutorialService = inject(TutorialService);
  const tutorialIdStr: string | null = route.paramMap.get('tutorialId');
  const tutorialId: number | null = tutorialIdStr ? parseInt(tutorialIdStr, 10) : null;

  if (tutorialId != null) {
    return tutorialService.getTutorialPageData$(tutorialId);
  } else {
    return of(null);
  }
}
