import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DeleteAcceptanceModalComponent} from './delete-acceptance-modal.component';

describe('DeleteAcceptanceModalComponent', () => {
  let component: DeleteAcceptanceModalComponent;
  let fixture: ComponentFixture<DeleteAcceptanceModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteAcceptanceModalComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAcceptanceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
