import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'argon-dashboard-angular';

  fileToUpload: File | null = null;

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }
  constructor(private httpClient: HttpClient) {
  }

  postFile(event: any) {
    const file: File = event.target.files[0];

    if (file) {

      let fileName = file.name;

      const formData = new FormData();

      formData.append("file", file);
      console.log(formData)
      this.httpClient.post("http://3.21.52.154:3000/admin/uploadCSV_locality", {
       formData
      })
        .subscribe((result: any) => {
          console.log(result)
        })



    }

  }
}
