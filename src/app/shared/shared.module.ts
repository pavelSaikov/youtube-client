import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SHARED_COMPONENTS } from './components/index';
import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';

@NgModule({
  declarations: [SharedComponent, ...SHARED_COMPONENTS],
  imports: [CommonModule, SharedRoutingModule],
})
export class SharedModule {}
