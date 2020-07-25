import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
interface ExtractorData {
  id: string;
  title: string;
  description: string;
  url: string;
}
@Component({
  selector: 'app-extractor',
  templateUrl: './extractor.component.html',
  styleUrls: ['./extractor.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExtractorComponent {
  code = new FormControl('');
  data: BehaviorSubject<ExtractorData> = new BehaviorSubject(null);
  data$: Observable<ExtractorData> = this.data.asObservable();

  async getLink(): Promise<void> {
    const { value } = this.code;
    const baseUrlDev = 'http://localhost:3002';
    const baseUrlProd = window.location.origin;
    const isProd = !!~window.location.origin.indexOf('heroku');
    const baseUrl = isProd ? baseUrlProd : baseUrlDev;
    const urlData = await fetch(`${baseUrl}/url?code=${value}`)
      .then(e => e.json())
      .catch(err => {
        console.log(`Error:`, err);
        return {};
      });
    // console.table(urlData);
    // console.log(environment.production);
    this.data.next(urlData);
  }
}
