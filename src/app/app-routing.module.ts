import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponentComponent } from './test-component/test-component.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DemoResolverService } from './resolvers/demo-resolver/demo-resolver.service';

const routes: Routes = [
    {
        path: '',
        component: HomePageComponent
    },
    {
        path: 'resolver-component',
        component: TestComponentComponent,
        resolve: {
            "allBooksForWriter": DemoResolverService
        }
    }
];

// configures NgModule imports and exports
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }