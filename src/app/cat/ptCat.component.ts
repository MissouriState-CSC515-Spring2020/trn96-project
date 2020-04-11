import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { ApiService } from './../api.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-ptCat',
  templateUrl: './ptCat.component.html',
  styleUrls: ['./ptCat.component.css']
})
export class PtCatComponent {
  videos: any[];
  private unsubscribe$: Subject<any> = new Subject();

  constructor(private ApiService: ApiService) { }


  ngOnInit() {
    this.videos = [];
    this.ApiService
      .getVideosForChanel('UCIcgBZ9hEJxHv6r_jDYOMqg', 5)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(lista => {
        for (let element of lista["items"]) {
          this.videos.push(element)
        }

      });
  }
}