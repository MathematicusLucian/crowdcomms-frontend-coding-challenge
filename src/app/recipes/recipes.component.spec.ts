import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RecipesComponent } from './recipes.component';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http'; 

describe('RecipesComponent', () => {
  let component: RecipesComponent;
  let fixture: ComponentFixture<RecipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipesComponent ],
      imports: [ FormsModule, HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
