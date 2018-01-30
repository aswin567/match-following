import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { MatchFollowingComponent } from './match-following/match-following.component';

const appRoute: Routes = [
    {
        path: '',
        redirectTo: '/mf/teacher',
        pathMatch: 'full'
    },
    {
        path: 'mf/:id',
        component: MatchFollowingComponent
    },
    {
        path: 'mf1/:id',
        component: MatchFollowingComponent
    }

]

@NgModule({
    imports: [
      RouterModule.forRoot(appRoute)
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRouting { }