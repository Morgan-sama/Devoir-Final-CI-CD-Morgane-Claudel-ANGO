import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageComponent } from './page.component';

describe('PageComponent', () => {
  let component: PageComponent;
  let fixture: ComponentFixture<PageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageComponent]
    });
    fixture = TestBed.createComponent(PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as text 'Morgane Claudel ANGO'`,()=>{
    const fixture = TestBed.createComponent(PageComponent)
    const accueil = fixture.componentInstance;
    expect(accueil.infos).toEqual('Morgane Claudel ANGO');
  });

  it(`should have as text '-ING4 ISI'`,()=>{
    const fixture = TestBed.createComponent(PageComponent)
    const accueil = fixture.componentInstance;
    expect(accueil.niveau).toEqual('-ING4 ISI');
  })

  
});
