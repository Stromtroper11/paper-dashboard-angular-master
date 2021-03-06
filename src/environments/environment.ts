// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  qrListUrl:'https://rvbackoffice.herokuapp.com/api/getQrList',
  qrUpdateUrl: 'https://rvbackoffice.herokuapp.com/api/updateQrList',
  qrRequestUrl: 'https://rvbackoffice.herokuapp.com/api/generateQRExcel',
  fileDownloadUrl:'https://rvbackoffice.herokuapp.com/api/downloadExcel/',
  redemptionListtUrl:'https://rvbackoffice.herokuapp.com/api/redeemRequests/',
  redemptionPosttUrl:'https://rvbackoffice.herokuapp.com/api/postRedeemRequests/',
  productMasterUploadUrl:'https://rvbackoffice.herokuapp.com/api/upload/productMaster',
  productListUrl: 'https://rvbackoffice.herokuapp.com/api/getProductList',
  appUserListUrl: 'https://rvbackoffice.herokuapp.com/user/list',
  appUserCreateUrl: 'https://rvbackoffice.herokuapp.com/user/createUser',
  appUserUpdateUrl: 'https://rvbackoffice.herokuapp.com/user/updateUser',
  authenticationUrl: 'https://rvbackoffice.herokuapp.com/login',
  notificationListUrl: 'https://rvbackoffice.herokuapp.com/api/notification/list',
  createNotificationUrl: 'https://rvbackoffice.herokuapp.com/api/notification/public',
  UserListUrl: 'https://rvbackoffice.herokuapp.com/api/account/list',
  showKycUrl: 'https://rvbackoffice.herokuapp.com/api/account/showKyc',
  UserUpdateUrl: 'https://rvbackoffice.herokuapp.com/api/account/updateUser',
  kycApprovalUrl: 'https://rvbackoffice.herokuapp.com/api/account/kyc',
  qrStatUrl: "https://rvbackoffice.herokuapp.com/api/qrStats/qr",
  redeemStatUrl: "https://rvbackoffice.herokuapp.com/api/qrStats/qr1",
  totalRedeemUrl:"https://rvbackoffice.herokuapp.com/api/analytic/total/points/redeemed/2019-12-01",
  totalScannedUrl:"https://rvbackoffice.herokuapp.com/api/analytic/total/points/scanned/2019-12-01",
  totalUserUrl:"https://rvbackoffice.herokuapp.com/api/analytic/total/user",
};
