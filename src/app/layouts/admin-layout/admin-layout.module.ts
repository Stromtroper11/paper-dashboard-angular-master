import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent }       from '../../pages/dashboard/dashboard.component';
import { UserComponent }            from '../../pages/user/user.component';
import { TableComponent }           from '../../pages/table/table.component';
import { TypographyComponent }      from '../../pages/typography/typography.component';
import { IconsComponent }           from '../../pages/icons/icons.component';
import { NotificationsComponent }   from '../../pages/notifications/notifications.component';
import { UpgradeComponent }         from '../../pages/upgrade/upgrade.component';
import {QrComponent}                from '../../pages/qr/qr.component';
import {DisplayQrComponent}         from '../../pages/display-qr/display-qr.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { ProcessRedeemComponent } from 'app/pages/process-redeem/process-redeem.component';
import { ProductMaster } from 'app/pages/product-master/product-master.component';
import { LoginComponent } from 'app/pages/login/login.component';
import { NotificationComponent } from 'app/pages/notification/notification.component';
import { AccountComponent } from 'app/pages/account/account.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    TableComponent,
    UpgradeComponent,
    TypographyComponent,
    IconsComponent,
    NotificationsComponent,
    QrComponent,
    DisplayQrComponent,
    ProcessRedeemComponent,
    ProductMaster,
    LoginComponent,
    NotificationComponent,
    AccountComponent
  ]
})

export class AdminLayoutModule {}
