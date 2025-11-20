import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { MOCK_ARTICLES } from '../data/mock-articles';
import { Article } from '../models/article';

@Component({
  selector: 'app-home',
  imports: [RouterLink, DatePipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  articles: Article[] = MOCK_ARTICLES;
}
