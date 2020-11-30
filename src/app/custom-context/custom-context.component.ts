import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { CustomContextService } from '../custom-context.service';

@Component({
  selector: 'app-custom-context',
  templateUrl: './custom-context.component.html',
  styleUrls: ['./custom-context.component.scss']
})
export class CustomContextComponent implements OnInit {

  currentContext: string;

  currentContext$ = this.contextService.getActive();
  availableContexts$ = this.contextService.getAll();

  constructor(private contextService: CustomContextService) { }

  ngOnInit(): void {
    this.currentContext$.pipe(take(1)).subscribe((ctx) => this.currentContext = ctx);
  }

  onChange(): void {
    this.contextService.setActive(this.currentContext);
  }

}
