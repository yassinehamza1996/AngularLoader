import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoaderService } from 'src/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'testloader';
  loading : boolean = false
  constructor(private loaderService : LoaderService){

  }
  ngOnInit(): void {

    this.loaderService.getLoadingStatus().subscribe(status=>{
      this.loading = status
    })
  }

}
