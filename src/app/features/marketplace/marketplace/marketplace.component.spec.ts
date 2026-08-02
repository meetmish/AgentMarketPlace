import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgentHubComponent } from './marketplace.component';

describe('AgentHubComponent', () => {
  let component: AgentHubComponent;
  let fixture: ComponentFixture<AgentHubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentHubComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AgentHubComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
