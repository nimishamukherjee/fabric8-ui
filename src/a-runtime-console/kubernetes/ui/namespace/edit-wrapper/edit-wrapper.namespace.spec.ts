import { TestAppModule } from './../../../../app.test.module';
/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {MockBackend} from "@angular/http/testing";
import {RequestOptions, BaseRequestOptions, Http} from "@angular/http";
import {RestangularModule} from "ng2-restangular";
import {NamespaceEditWrapperComponent} from "./edit-wrapper.namespace.component";
import {NamespaceEditToolbarComponent} from "../edit-toolbar/edit-toolbar.namespace.component";
import {NamespaceEditComponent} from "../edit/edit.namespace.component";
import {KubernetesStoreModule} from "../../../kubernetes.store.module";
import {MomentModule} from "angular2-moment";
import {ModalModule} from "ngx-modal";
import {FormsModule} from "@angular/forms";

describe('NamespaceEditWrapperComponent', () => {
  let namespace: NamespaceEditWrapperComponent;
  let fixture: ComponentFixture<NamespaceEditWrapperComponent>;

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        imports: [
          RouterTestingModule.withRoutes([]),
          RestangularModule.forRoot(),
          FormsModule,
          MomentModule,
          ModalModule,
          KubernetesStoreModule,
          TestAppModule
        ],
        declarations: [
          NamespaceEditWrapperComponent,
          NamespaceEditToolbarComponent,
          NamespaceEditComponent,
        ],
        providers: [
          MockBackend,
          { provide: RequestOptions, useClass: BaseRequestOptions },
          {
            provide: Http, useFactory: (backend, options) => {
              return new Http(backend, options);
            }, deps: [MockBackend, RequestOptions],
          },
        ],
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NamespaceEditWrapperComponent);
    namespace = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => { expect(namespace).toBeTruthy(); });
});
