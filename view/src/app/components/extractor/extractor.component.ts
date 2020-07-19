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

  getLink() {
    this.link = this.code.value;
  }
}
