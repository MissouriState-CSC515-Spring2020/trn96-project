import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { ApiService } from './../api.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-ptAbout',
  templateUrl: './ptAbout.component.html',
  styleUrls: ['./ptAbout.component.css']
})
export class PtAboutComponent {

  videos: any[];
  private unsubscribe$: Subject<any> = new Subject();

  constructor(private ApiService: ApiService) { }


  ngOnInit() {
    this.videos = [];
    this.ApiService
      .getVideosForChanel('UCIcgBZ9hEJxHv6r_jDYOMqg', 1)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(lista => {
        for (let element of lista["items"]) {
          this.videos.push(element)
        }

      });
  }

}