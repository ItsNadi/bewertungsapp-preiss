import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Project {
  id?: number;
  teamId: number;
  titel: string;
  beschreibung?: string;
  praesentationsdatum: string;
  Team?: Team;
  Evaluations?: Evaluation[];
}

export interface Team {
  id: number;
  name: string;
  klasse?: string;
}

export interface Criterion {
  id: number;
  name: string;
  maxScore?: number;
  weight?: number;
}

export interface Juror {
  id: number;
  name: string;
  email?: string;
}

export interface Evaluation {
  id: number;
  projectId: number;
  criterionId: number;
  jurorId: number;
  score: number;
  comment?: string;
  Criterion?: Criterion;
  Juror?: Juror;
}

@Injectable({ providedIn: 'root' })
export class ApiService {
  private url = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.url}/projects`);
  }

  getProject(id: number): Observable<Project> {
    return this.http.get<Project>(`${this.url}/projects/${id}`);
  }
}
