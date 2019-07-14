import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IngredientsComponent } from './ingredients.component';
import { FormsModule } from '@angular/forms';  
import { Pipe } from '@angular/core'; 

describe('IngredientsComponent', () => {
  let component: IngredientsComponent;
  let fixture: ComponentFixture<IngredientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientsComponent ],
      imports: [ FormsModule, Pipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
