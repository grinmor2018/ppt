import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { RouterTestingModule } from '@angular/router/testing';


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Form must return invalid', ()=> {
    const name = component.form.controls['name'];
    name.setValue('');
    expect (component.form.invalid).toBeTrue();
  });

  it('Form must return valid', ()=> {
    const name = component.form.controls['name'];
    name.setValue('Berta');
    expect (component.form.invalid).toBeFalse();
  });

  it('On click Join, returns true', ()=> {
    const name = component.form.controls['name'];
    name.setValue('Berta');
    const btnElement = fixture.debugElement.query(By.css('button'));
    btnElement.nativeElement.removeAttribute("disabled");
    btnElement.nativeElement.click();
    expect(component.result).toBeTrue();
  })

});
