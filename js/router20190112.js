define(['controller20190112'], function(controller) {
    var router = {
        routers: {
            '/home': controller.homeController,
            '/login': controller.loginController,
            '/register': controller.registerController,
            '/resetpassword': controller.resetpasswordController,
            '/tradecenter': controller.tradecenterController,
            // 
            '/accountInfo': controller.accountInfoController,
            '/invited': controller.invitedController,
            '/notices': controller.noticesController,
            '/currency': controller.currencyController,
            '/accountSecurity': controller.accountSecurityController,
            '/identityVerify': controller.identityVerifyController,
            '/launchpad': controller.launchpadController,
            '/collection': controller.collectionController,
            '/loginRecord': controller.loginRecordController,
            '/app': controller.appController,
            // 
            '/myAssets': controller.myAssetsController,
            '/addressManage': controller.addressManageController,
            '/assetsRecord': controller.assetsRecordController,
            '/tradeBill': controller.tradeBillController,
            '/recharge': controller.rechargeController,
            '/withdraw': controller.withdrawController,
            '/apiManager': controller.apiManagerController,
            // 
            //'/newsList': controller.newsListController,
            //'/newsDetail': controller.newsDetailController,
            '/feeList': controller.feeListController,
            '/userAgreement': controller.userAgreementController,
            '/privacyPolicy': controller.privacyPolicyController,
            // 
            '/otc': controller.otcController,
            '/otc/otctrade': controller.otctradeController,
            '/otc/otcmerchant': controller.otcmerchantController,
            '/otc/otcmyorder': controller.otcmyorderController,
            '/otc/otcsetting': controller.otcsettingController,
        },
        init: function() {
            var hasha = location.hash.split('?')[0].substr(1);
            if (hasha) {
                this.routers[hasha].load();
            } else {
                controller.homeController.load();
            }
            var self = this;
            window.addEventListener('hashchange', function() {
                $('.chart-main').hide();
                var hash = location.hash.split('?')[0].substr(1);
                if (hash in self.routers) {
                    self.routers[hash].load();
                } else {

                }
            }, false);
        }
    }
    return router;
});