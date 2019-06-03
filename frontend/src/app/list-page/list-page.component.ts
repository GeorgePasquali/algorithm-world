import { Component, OnInit } from '@angular/core';
import { TopicService } from '../topic.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {

  listTitle: string = "List Name"
  topics: any;

  constructor(private TopicService: TopicService) { }

  ngOnInit() {
    this.getTopics();
  }

  getTopics(){
    this.topics = this.TopicService.getTopics();
  }

}
