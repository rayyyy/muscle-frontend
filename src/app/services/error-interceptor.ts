import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../components/organisms/error-dialog/error-dialog.component';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(public dialog: MatDialog) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // TODO: apiサーバーのときのみ
    const req = request.clone();
    return next.handle(req).pipe(
      catchError(res => {
        let type = ''
        let message = ''

        switch (res.status) {
          case 400:
          case 422:
            type = 'リクエストエラー'
            message = 'リクエスト内容が正しくありません。内容をご確認の上、再度実施頂けますでしょうか？'
            break;
          case 401:
            type = '認証エラー'
            message = '解決しない場合は、再度ログインをしてください'
            break;
          case 404:
            type = '未検出エラー'
            message = 'お探しの情報は見つかりませんでした'
            break;
          default:
            type = 'サーバーエラー'
            message = '解決しない場合はお問い合わせをお願いします'
            break;
        }

        this.dialog.open(ErrorDialogComponent, {
          data: {type: type, message: message}
        });

        return throwError(res);
      })
    );
  }
}