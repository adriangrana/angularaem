import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
      path: '',
      redirectTo: 'page1',
      pathMatch: 'full',
  },
  {
      path: 'page1',
      loadChildren: () => import('./page1/page1.module').then(m => m.Page1Module),
      runGuardsAndResolvers: 'always',
  },
  {
    path: 'page2',
    loadChildren: () => import('./page2/page2.module').then(m => m.Page2Module),
    runGuardsAndResolvers: 'always',
},
 
];
@NgModule({
  imports: [
      RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true, onSameUrlNavigation: 'reload' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
