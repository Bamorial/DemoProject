import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectboxComponent } from './projectbox.component';

describe('ProjectboxComponent', () => {
  let component: ProjectboxComponent;
  let fixture: ComponentFixture<ProjectboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectboxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
