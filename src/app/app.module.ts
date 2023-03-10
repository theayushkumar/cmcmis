import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MatSelectModule } from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MAT_DATE_LOCALE, NativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { HttpClientModule, } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {NgToastModule} from 'ng-angular-popup';
import {MatMenuModule} from '@angular/material/menu';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from "ngx-ui-loader";
import { PartyComponent } from './admin/party/party.component';
import { UnitComponent } from './admin/unit/unit.component';
import { GstComponent } from './admin/gst/gst.component';
import { WeightComponent } from './admin/weight/weight.component';
import { CategoryComponent } from './admin/category/category.component';
import { SizeComponent } from './admin/size/size.component';
import { ItemComponent } from './admin/item/item.component';
import { EmployeeComponent } from './admin/employee/employee.component';
import { CustomerComponent } from './admin/customer/customer.component';
import { AreaComponent } from './admin/area/area.component';
import { AreaAllocateComponent } from './admin/area-allocate/area-allocate.component';
import { AddEditGstComponent } from './admin/add-edit-gst/add-edit-gst.component';
import { AddEditWeightComponent } from './admin/add-edit-weight/add-edit-weight.component';
import { AddEditCategoryComponent } from './admin/add-edit-category/add-edit-category.component';
import { AddEditPartyComponent } from './admin/add-edit-party/add-edit-party.component';
import { AddEditUnitComponent } from './admin/add-edit-unit/add-edit-unit.component';
import { AddEditSizeComponent } from './admin/add-edit-size/add-edit-size.component';
import { AddEditItemComponent } from './admin/add-edit-item/add-edit-item.component';
import { AddEditEmployeeComponent } from './admin/add-edit-employee/add-edit-employee.component';
import { AddEditCustomerComponent } from './admin/add-edit-customer/add-edit-customer.component';
import { AddEditAreaComponent } from './admin/add-edit-area/add-edit-area.component';
import { AddEditAreaAllocateComponent } from './admin/add-edit-area-allocate/add-edit-area-allocate.component';
import { PurchaseComponent } from './admin/purchase/purchase.component';
import { SaleComponent } from './admin/sale/sale.component';
import { DuesComponent } from './admin/dues/dues.component';
import { RecieptComponent } from './admin/reciept/reciept.component';
import { AccountComponent } from './admin/account/account.component';
import { ExpenseComponent } from './admin/expense/expense.component';
import { PurchaseReportComponent } from './admin/purchase-report/purchase-report.component';
import { SaleReportComponent } from './admin/sale-report/sale-report.component';
import { StockReportComponent } from './admin/stock-report/stock-report.component';
import { PurchaseCancelComponent } from './admin/purchase-cancel/purchase-cancel.component';
import { SaleCancelComponent } from './admin/sale-cancel/sale-cancel.component';
import { AddEditAccountComponent } from './admin/add-edit-account/add-edit-account.component';
import { AddEditExpenseComponent } from './admin/add-edit-expense/add-edit-expense.component';
import { AddEditSaleComponent } from './admin/add-edit-sale/add-edit-sale.component';
import { AddEditPurchaseComponent } from './admin/add-edit-purchase/add-edit-purchase.component';
import { ProductionComponent } from './admin/production/production.component';
import { MaterialHandoverComponent } from './admin/material-handover/material-handover.component';
import { AddEditMaterialHandoverComponent } from './admin/add-edit-material-handover/add-edit-material-handover.component';
import { AddEditProductionComponent } from './admin/add-edit-production/add-edit-production.component';
import { ProductComponent } from './admin/product/product.component';
import { AddEditProductComponent } from './admin/add-edit-product/add-edit-product.component';

import { LoginpageComponent } from './loginpage/loginpage.component';
import { BillpageComponent } from './admin/billpage/billpage.component';
import {MatCardModule} from '@angular/material/card';
import { CancelBillComponent } from './admin/cancel-bill/cancel-bill.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ReceivedComponent } from './admin/received/received.component';
import {
  ConfirmBoxConfigModule,
  DialogConfigModule,
  NgxAwesomePopupModule,
  ToastNotificationConfigModule,
} from '@costlydeveloper/ngx-awesome-popup';
import { ExpencetypeComponent } from './admin/expencetype/expencetype.component';
import { AddExpencetypeComponent } from './admin/add-expencetype/add-expencetype.component';
import { ProfitComponent } from './admin/profit/profit.component';
import { LossComponent } from './admin/loss/loss.component';
import { EmpLoginComponent } from './employee/emp-login/emp-login.component';
import { EmpHomeComponent } from './employee/emp-home/emp-home.component';
import { EmpDashboardComponent } from './employee/emp-dashboard/emp-dashboard.component';
import { ViewportComponent } from './admin/viewport/viewport.component';
import { DecimalPipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent, 
    PartyComponent,
    UnitComponent,
    GstComponent,
    WeightComponent,
    CategoryComponent,
    SizeComponent,
    ItemComponent,
    EmployeeComponent,
    CustomerComponent,
    AreaComponent,
    AreaAllocateComponent,     
    AddEditGstComponent,    
    AddEditWeightComponent,
    AddEditCategoryComponent,
    AddEditPartyComponent,
    AddEditUnitComponent,
    AddEditSizeComponent,
    AddEditItemComponent,
    AddEditEmployeeComponent,
    AddEditCustomerComponent,
    AddEditAreaComponent,
    AddEditAreaAllocateComponent,
    PurchaseComponent,
    SaleComponent,
    DuesComponent,
    RecieptComponent,
    AccountComponent,
    ExpenseComponent,
    PurchaseReportComponent,
    SaleReportComponent,
    StockReportComponent,
    PurchaseCancelComponent,
    SaleCancelComponent,  
    AddEditAccountComponent,
    AddEditExpenseComponent,
    AddEditSaleComponent,
    AddEditPurchaseComponent,
    ProductionComponent,
    MaterialHandoverComponent,
    AddEditMaterialHandoverComponent,
    AddEditProductionComponent,
    ProductComponent,
    AddEditProductComponent,
    LoginpageComponent,
    BillpageComponent,
    CancelBillComponent,
    HomepageComponent,
    ReceivedComponent,
    ExpencetypeComponent,
    AddExpencetypeComponent,
    ProfitComponent,
    LossComponent,
    EmpLoginComponent,
    EmpHomeComponent,
    EmpDashboardComponent,
    ViewportComponent,
  ],
  imports: [
    DecimalPipe,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatToolbarModule,
    MatDialogModule,
    MatTableModule,
    NgbModule, 
    MatSelectModule,
    MatDatepickerModule, 
    MatSlideToggleModule,
    NativeDateModule,
    MatNativeDateModule,
    MatRippleModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule, 
    MatSortModule,
    MatPaginatorModule, 
    NgToastModule ,
    MatMenuModule,
    NgxUiLoaderModule,
    MatCardModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground:true,
    }),
    NgxAwesomePopupModule.forRoot({
      colorList: {
        success: '#3caea3', // optional
        info: '#2f8ee5', // optional
        warning: '#ffc107', // optional
        danger: '#e46464', // optional
        customOne: '#3ebb1a', // optional
        customTwo: '#bd47fa', // optional (up to custom five)

        
      },
    }),
    ConfirmBoxConfigModule.forRoot(),

    DialogConfigModule.forRoot(), // optional
    ToastNotificationConfigModule.forRoot(), // optional

    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  
}
