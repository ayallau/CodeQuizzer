import { Component, OnInit } from '@angular/core';
import { Topic } from '../../models/topic';
import { TopicsService } from '../../services/topics.service';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {
  topics: Topic[] = [];
  isLoading = true;
  error = '';

  constructor(private topicsService: TopicsService) {}

  ngOnInit(): void {
    this.topicsService.getTopics().subscribe({
      next: (topics) => {
        this.topics = topics;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Failed to load topics';
        this.isLoading = false;
      }
    });
  }
} 