import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FakeLoaderService } from './services/loader/fake-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  constructor(public loadingService: FakeLoaderService){
  }

  ngOnInit(): void {
 
  }

  title = 'angular-rxjs-example';
}
