import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import {
  IonHeader,
  IonButtons,
  IonBackButton,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent
} from '@ionic/angular';

import { ApiService, Project } from '../../services/api';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.page.html',
  styleUrls: ['./project-detail.page.scss'],
  imports: [
    CommonModule,
    IonHeader,
    IonButtons,
    IonBackButton,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent
  ],
})
export class ProjectDetailPage implements OnInit {
  project = signal<Project | undefined>(undefined);
  loading = signal(true);
  error = signal('');

  constructor(
    private route: ActivatedRoute,
    private api: ApiService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (!Number.isInteger(id) || id <= 0) {
      this.error.set('Die Projekt-ID ist ungültig.');
      this.loading.set(false);
      return;
    }

    this.api.getProject(id).subscribe({
      next: (data) => {
        this.project.set(data);
        this.loading.set(false);
      },
      error: (error: unknown) => {
        console.error('PROJECT DETAIL ERROR:', error);
        this.error.set('Das Projekt konnte nicht geladen werden.');
        this.loading.set(false);
      }
    });
  }
}
