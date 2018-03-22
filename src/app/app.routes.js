import { homePageComponent } from "./pages/home-page.component";
import { postsComponent } from './pages/posts.component';
import { notFoundComponent } from './pages/not-found.component';

export const appRoutes = [
    {path: '', component: homePageComponent },
    {path: 'posts', component: postsComponent },
    {path: '**', component: notFoundComponent }
];