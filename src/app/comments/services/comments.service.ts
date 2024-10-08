import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentInterface } from '../types/comment.interface';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CommentsService {
  private apiUrl = 'https://67051ff7031fd46a830ebef9.mockapi.io/api/v1/comments'; // Replace with your MockAPI URL

  constructor(private httpClient: HttpClient) {}

  getComments(): Observable<CommentInterface[]> {
    return this.httpClient.get<CommentInterface[]>(this.apiUrl);
  }

  createComment(
    text: string,
    parentId: string | null = null
  ): Observable<CommentInterface> {
    return this.httpClient.post<CommentInterface>(this.apiUrl, {
      body: text,
      parentId,
      createdAt: new Date().toISOString(),
      userId: '1',
      username: 'Ramshid N K', // You can change this as needed
    });
  }

  updateComment(id: string, text: string): Observable<CommentInterface> {
    return this.httpClient.patch<CommentInterface>(`${this.apiUrl}/${id}`, {
      body: text,
    });
  }

  deleteComment(id: string): Observable<{}> {
    return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }
}
