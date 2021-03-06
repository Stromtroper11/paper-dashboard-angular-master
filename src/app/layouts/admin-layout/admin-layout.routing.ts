import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
import {QrComponent} from '../../pages/qr/qr.component';
import { DisplayQrComponent } from 'app/pages/display-qr/display-qr.component';
import { ProcessRedeemComponent } from 'app/pages/process-redeem/process-redeem.component';
import { ProductMaster } from 'app/pages/product-master/product-master.component';
import { LoginComponent } from 'app/pages/login/login.component';
import { NotificationComponent } from 'app/pages/notification/notification.component';
import { AccountComponent } from 'app/pages/account/account.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TableComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'productMaster',  component: ProductMaster },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'qr',             component: QrComponent },
    { path: 'displayQr',      component: DisplayQrComponent },
    { path: 'Redeemption',    component: ProcessRedeemComponent },
    { path: 'notification',    component: NotificationComponent },
    { path: 'login',         component: LoginComponent },
    { path: 'account',         component: AccountComponent }
];
