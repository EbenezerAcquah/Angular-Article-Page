import { Routes } from '@angular/router';
import { Home } from './home/home';
import { ArticleDetail } from './article-detail/article-detail';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'article/:id', component: ArticleDetail },
  { path: '**', redirectTo: '' }
];
