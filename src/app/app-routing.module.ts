import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
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
import { AddEditSaleComponent } from './admin/add-edit-sale/add-edit-sale.component';
import { AddEditPurchaseComponent } from './admin/add-edit-purchase/add-edit-purchase.component';
import { ProductionComponent } from './admin/production/production.component';
import { MaterialHandoverComponent } from './admin/material-handover/material-handover.component';
import { ProductComponent } from './admin/product/product.component';
import { ExpencetypeComponent } from './admin/expencetype/expencetype.component';
import { ProfitComponent } from './admin/profit/profit.component';
import { LossComponent } from './admin/loss/loss.component';
import { EmpHomeComponent } from './employee/emp-home/emp-home.component';
import { EmpDashboardComponent } from './employee/emp-dashboard/emp-dashboard.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ViewportComponent } from './admin/viewport/viewport.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { EmpLoginComponent } from './employee/emp-login/emp-login.component';




const routes: Routes = [
      // {path:'', redirectTo:'/', pathMatch: 'full'},
      {path:'',component:LoginpageComponent},
      {path:'login',component:LoginpageComponent},
      {path:'emplogin', component:EmpLoginComponent},
      {path:'home', component:HomepageComponent,
      children:[
        {path:'', component:DashboardComponent},
        {path:'dashbaord', component:ViewportComponent,
          children:[
            {path:'', component:DashboardComponent},
            {path:'party',component:PartyComponent},
            {path:'unit',component:UnitComponent},
            {path:'gst',component:GstComponent},
            {path:'weigth',component:WeightComponent},
            {path:'category',component:CategoryComponent},
            {path:'size',component:SizeComponent},
            {path:'item',component:ItemComponent},
            {path:'employee',component:EmployeeComponent},
            {path:'customer',component:CustomerComponent},
            {path:'area',component:AreaComponent},
            {path:'area_allocate',component:AreaAllocateComponent},
            {path:'dues',component:DuesComponent},
            {path:'reciept',component:RecieptComponent},
            {path:'account',component:AccountComponent},
            {path:'expense',component:ExpenseComponent},
            {path:'purchase_report',component:PurchaseReportComponent},
            {path:'sale_report',component:SaleReportComponent},
            {path:'stock_report',component:StockReportComponent},
            {path:'purchase_cancel',component:PurchaseCancelComponent},
            {path:'production',component:ProductionComponent},
            {path:'material_handover',component:MaterialHandoverComponent},
            {path:'product',component:ProductComponent},
            {path:'sale',component:SaleComponent},

          ]
      },
        {path:'party',component:PartyComponent},
        {path:'unit',component:UnitComponent},
        {path:'gst',component:GstComponent},
        {path:'weigth',component:WeightComponent},
        {path:'category',component:CategoryComponent},
        {path:'size',component:SizeComponent},
        {path:'item',component:ItemComponent},
        {path:'employee',component:EmployeeComponent},
        {path:'customer',component:CustomerComponent},
        {path:'area',component:AreaComponent},
        {path:'area_allocate',component:AreaAllocateComponent},

        {path:'purchase',component:ViewportComponent,
          children:[
            {path:'', component:PurchaseComponent},
            {path:'add_edit_purchase',component:AddEditPurchaseComponent},

          ]
        },
        {path:'sale',component:ViewportComponent,
          children:[
            {path:'', component:SaleComponent},
            {path:'add_edit_sale',component:AddEditSaleComponent},
          ]
         },
        {path:'dues',component:DuesComponent},
        {path:'reciept',component:RecieptComponent},
        {path:'account',component:AccountComponent},
        {path:'expense',component:ExpenseComponent},
        {path:'purchase_report',component:PurchaseReportComponent},
        {path:'sale_report',component:SaleReportComponent},
        {path:'stock_report',component:StockReportComponent},
        {path:'purchase_cancel',component:PurchaseCancelComponent},
        {path:'sale_cancel',component:SaleCancelComponent},
        {path:'production',component:ProductionComponent},
        {path:'material_handover',component:MaterialHandoverComponent},
        {path:'product',component:ProductComponent},
        {path:'expencetype',component:ExpencetypeComponent},
        {path:'profit',component:ProfitComponent},
        {path:'loss',component:LossComponent},
        {path:'**', component:HomepageComponent}


      ]
      },
      
      {path:'**',component:HomepageComponent},
 
]
  
@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})] ,

  exports: [RouterModule]
})
export class AppRoutingModule { }
