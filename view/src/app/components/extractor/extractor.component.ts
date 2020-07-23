import { ChangeDetectionStrategy, Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-extractor',
  templateUrl: './extractor.component.html',
  styleUrls: ['./extractor.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExtractorComponent implements OnInit, OnChanges {
  code = new FormControl('');
  link: BehaviorSubject<string> = new BehaviorSubject('');
  link$: Observable<string> = this.link.asObservable();

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('-----', changes);

  }

  async getLink(): Promise<void> {
    const { value } = this.code;
    const baseUrl = 'http://localhost:3002';
    const urlData = await fetch(`${baseUrl}/url?code=${value}`)
      .then(e => e.json())
      .catch(err => {
        console.log(`Error:`, err);
        return {};
      });
    console.table(urlData);
    this.link.next(urlData?.url);
  }
}
