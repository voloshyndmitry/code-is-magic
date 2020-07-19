import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
exports: [HttpClientModule, FormsModule, ReactiveFormsModule],
})
export class AngularModule {}