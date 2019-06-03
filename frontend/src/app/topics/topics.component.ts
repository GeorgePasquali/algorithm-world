import { Component, OnInit } from '@angular/core';
import { TopicService } from '../topic.service';
import { Topic } from '../Models/Topic';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss']
})
export class TopicsComponent implements OnInit {

  topics: Topic[];

  constructor(private topicService: TopicService) { }

  ngOnInit() {
    this.getTopics();
  }

  getTopics(): void {
    this.topicService.getTopics()
      .subscribe(topics => {
        console.log("ASDASDASDASDADS",topics);
        
        this.topics = topics
      
      });
  }

}
