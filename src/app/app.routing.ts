import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from '../app/main/main.component';

const routes: Routes = [
    { path: '', redirectTo: 'main-page', pathMatch: 'full' },
    { path: 'main-page', component: MainComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRouting {
}