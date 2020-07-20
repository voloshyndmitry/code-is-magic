import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-extractor',
  templateUrl: './extractor.component.html',
  styleUrls: ['./extractor.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExtractorComponent implements OnInit {
  code = new FormControl('');
  link: string;

  ngOnInit(): void {
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
    this.link = urlData?.url;
  }
}
