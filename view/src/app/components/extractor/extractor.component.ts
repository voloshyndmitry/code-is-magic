import { ChangeDetectionStrategy, Component, OnInit, SimpleChanges, OnChanges, forwardRef } from '@angular/core';
import { FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-extractor',
  templateUrl: './extractor.component.html',
  styleUrls: ['./extractor.component.less'],
  providers: [
    {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ExtractorComponent),
    multi: true,
    },
    ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExtractorComponent implements OnInit, OnChanges {
  code = new FormControl('');
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {

  }
}
