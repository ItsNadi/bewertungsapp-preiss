import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel
} from '@ionic/angular';

import { ApiService, Project } from '../../services/api';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
  imports: [
    CommonModule,
    RouterModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel
  ],
})
export class ProjectsPage implements OnInit {
  projects = signal<Project[]>([]);
  loading = signal(true);
  error = signal('');

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getProjects().subscribe({
      next: (data) => {
        this.projects.set(Array.isArray(data) ? data : []);
        this.loading.set(false);
      },
      error: (error: unknown) => {
        console.error('PROJECT ERROR:', error);
        this.error.set('Die Projekte konnten nicht geladen werden.');
        this.loading.set(false);
      }
    });
  }
}
