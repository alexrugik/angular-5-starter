import {Injector} from '@angular/core';
import {UIRouter} from '@uirouter/angular';
import {STATES} from '@app/shared/consts/states';

export const uiRouterConfigFn = function (router: UIRouter, injector: Injector) {
  router.urlService.rules.otherwise({state: STATES.PAGE_NOT_FOUND});
};

