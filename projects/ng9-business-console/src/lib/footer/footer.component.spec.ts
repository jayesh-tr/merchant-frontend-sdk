// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { FooterComponent } from './footer.component';

// describe('FooterComponent', () => {
//   let component: FooterComponent;
//   let fixture: ComponentFixture<FooterComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ FooterComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(FooterComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

import { render } from '@testing-library/angular';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  it('should render the component', async () => {
    const { getByText } = await render(FooterComponent);
    expect(getByText('footer component works!'));
  });
});
