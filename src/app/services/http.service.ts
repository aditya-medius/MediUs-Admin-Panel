import { Injectable } from '@angular/core';
import { HttpClient,} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.url);
  }

  getcomments(){
    return this.http.get("https://jsonplaceholder.typicode.com/comments?postId=1")
  }

  dataFun()
  {
    return this.http.post(
      'http://3.21.52.154:3000/admin/addSpeciality',
      {
        specialityName:"i am  API"
      }
    )
  }
}
