import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { MOCK_ARTICLES } from '../data/mock-articles';
import { Article } from '../models/article';

@Component({
  selector: 'app-article-detail',
  imports: [RouterLink, DatePipe],
  templateUrl: './article-detail.html',
  styleUrl: './article-detail.css',
})
export class ArticleDetail implements OnInit {
  article: Article | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.article = MOCK_ARTICLES.find(a => a.id === id);
  }
}
