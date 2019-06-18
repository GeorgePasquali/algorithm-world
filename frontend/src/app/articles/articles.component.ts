import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { Article } from '../Models/Article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  articles: Article[];

  constructor(private articlesService: ArticlesService) { }

  ngOnInit() {
    this.getArticles();
  }

  getArticles(): void {
    this.articlesService.getArticles()
      .subscribe(articles => {
        console.log("ASDASDASDASDADS",articles);
        
        this.articles = articles
      
      });
  }

}
