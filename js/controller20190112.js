define(["dataService20181216", "viewService"], function(dataService, viewService) {
    var $MainView = $("#MainView");
    $("#tv_chart_container").hide();
    var language = "zh" || "en";
    if (localStorage.getItem("language")) {
        language = localStorage.getItem("language");
    }
    var aside_zh = ["基本信息", "实名认证", "安全中心", "收款方式", "地址管理", "充提记录", "交易账单", "我的资产", "API管理", "注册邀请", "账户信息", "账户安全", "收款设置", "上一页", "下一页", "第一页"],
        aside_en = ["Account", "Authentication", "Security", "Collection", "Address", "Records", "Orders", "My Assets", "API", "Invitation", "Account Information", "Account Security", "Collection Settings", "last page", "next page", "the first page"],
        aside_arr = language == "en" ? aside_en : aside_zh;
    language == "en" ? $(".yuyan").text("English") : $(".yuyan").text("简体中文");
    var message_arr = [
        "NOT_SUFFICIENT_FUNDS",
        "LANG_NO_LOGIN",
        "LANG_ILLEGAL_CURRENCY",
        "LANG_CANNOT_WITHDRAW",
        "LANG_ILLEGAL_ADDRESS",
        "LANG_ILLEGAL_AMOUNT",
        "LANG_WITHDRAW_AMOUNT_MIN_THAN_MIN_TIP",
        "LANG_SMSCODE_ERR_TIP",
        "LANG_SEC_PWD_TIP",
        "LANG_GOOGLE_CODE_ERROR",
        "LANG_AUTH_IDENTITY_FIRST",
        "LANG_ILLEGAL_WITHDRAW_ID",
        "LANG_ILLEGAL_WITHDRAW_STATUS",
        "LANG_SMSCODE_NULL_TIP",
        "LANG_WITHDRAW_ADDR_NULL_TIP",
        "LANG_WITHDRAW_LABEL_NULL_TIP",
        "LANG_MAIL_NULL_TIP",
        "LANG_PWD_NULL_TIP",
        "LANG_ALREADY_REG_FINDPWD",
        "LANG_ACCOUNT_LOCKED",
        "LANG_PLEASE_LOGIN_AFTER_REGISTRATION",
        "LANG_PWD_SAME_TIP",
        "LANG_ILLEGAL_FROM",
        "LANG_ACCOUNT_NOT_EXIST",
        "LANG_MAIL_FAIL",
        "LANG_INVALID_EMAIL_OR_PASSWORD",
        "LANG_ID_NUM_ALREADY_EXIST",
        "LANG_AUTH_IDENTITY_SUB_SUCCESS",
        "LANG_ILLEGAL_SIGN",
        "LANG_ORDER_DOES_NOT_EXIST",
        "LANG_MARKET_ORDER_CANNOT_BE_CANCELLED",
        "LANG_ORDER_IS_DONE_OR_CANCELED",
        "LANG_ILLEGAL_SYMBOL",
        "LANG_STOP_EX",
        "LANG_ILLEGAL_O_NO",
        "LANG_ILLEGAL_VOLUME",
        "LANG_ILLEGAL_PRICE",
        "LANG_ILLEGAL_O_TYPE",
        "LANG_ILLEGAL_O_PRICE_TYPE",
        "LANG_ILLEGAL_SOURCE",
        "LANG_ILLEGAL_TRADE_PAIR",
        "LANG_LITTLE_THAN_MIN_BUYVOLUME_TIP",
        "LANG_LITTLE_THAN_MIN_BUYAMOUNT_TIP",
        "LANG_LITTLE_THAN_MIN_SELLVOLUME_TIP",
        "LANG_STOP_ONE_EX",
        "LANG_ILLEGAL_ORDER_ID",
        "LANG_POOL_NO_ADDRESS_EXISTS",
        "LANG_ADDRESS_ALREADY_EXISTS",
        "LANG_REDIS_ERROR",
        "LANG_ORDER_STATUS_ERR",
        "LANG_OLD_GOOGLE_CODE_ERROR",
        "NO_SUFFICIENT_FUNDS",
        "LANG_OLD_PWD_ERR_TIP",
        "LANG_ERROR_A_TYPE",
        "LANG_A_TYPE_ONLY_ONE_RECORD",
        "LANG_AUTH_IDENTITY_FIRST",
        "LANG_SEC_PWD_ERR_TIP",
        "LANG_ILLEGAL_ADS_TYPE",
        "LANG_ILLEGAL_ADS_ID",
        "LANG_ILLEGAL_AMOUNT",
        "LANG_ILLEGAL_ACCOUNT_TYPE",
        "LANG_WAITING_ORDER_MAX_THAN_2",
        "LANG_WAITING_ORDER_CONFIRM_MAX_THAN_2",
        "LANG_ORDER_NOT_EXISTS",
        "LANG_ORDER_ALREADY_CONFIRMED",
        "LANG_SMSCODE_ERR_TIP",
        "LANG_ILLEGAL_CHECK_CODE",
        "SALES_NUMBER_MULTIPLE_100",
        "FULL_AMOUNT",
        "LANG_REPEAT_ADDRESS",
        "LANG_ILLEGAL_GT_CHECK_CODE",
        "LANG_API_COUNT_MAX_3",
        "CURRENCY_ACCOUNT_NOT_EXISTS",
        "Sell_successfully",
        "Buy_successfully",
        "Sent_successfully",
        "Complete_information",
        "Successfully_modified",
        "LANG_LIMIT_OPERTION",
    ];
    var message_arr_zh = [
        "账号资金不足",
        "请先登录",
        "不存在的币种",
        "暂停提现",
        "不存在的地址",
        "错误的数量",
        "提现金额小于最低提现额",
        "验证码错误",
        "交易密码错误",
        "谷歌验证码错误",
        "请先完成实名认证",
        "错误的提现ID",
        "提现状态不为待处理，不能取消",
        "验证码必填",
        "提现地址必填",
        "提现标签必填",
        "请输入邮箱",
        "请输入密码",
        "该账号已注册",
        "该账号被锁定",
        "该账号未完成注册",
        "安全密码和登录密码不能一致",
        "请求来源非法",
        "账号不存在",
        "发送验证码失败",
        "账号或密码错误",
        "证件号已经存在",
        "身份认证申请提交成功",
        "错误的签名",
        "订单不存在",
        "市价单不允许取消",
        "订单已成交或已经取消",
        "错误的交易对",
        "暂停交易",
        "错误的订单号",
        "错误的数量",
        "错误的价格",
        "错误的订单类型",
        "错误的价格类型",
        "错误的订单来源",
        "错误的交易对",
        "数量小于最小买入数量",
        "总额小于最小买入总额",
        "数量小于最小卖出数量",
        "暂停交易",
        "错误的订单ID",
        "地址池地址已经用完",
        "充值地址已经存在",
        "缓存服务器错误",
        "订单状态错误",
        "原谷歌验证码错误",
        "余额不足",
        "原密码错误",
        "错误的账户类型(只支持 银行卡 支付宝 微信)",
        "一个账户类型（银行卡、微信、支付宝）只能绑定一个账户",
        "请先完成实名认证",
        "交易密码错误",
        "广告类型错误",
        "广告ID不存在",
        "数量不符合要求，比如小于广告要求的最低金额或大于广告要求的最高金额",
        "请完善对应的收款设置",
        "超过两个订单未付款，不能再添加新订单",
        "超过两个订单待处理，不能再添加新订单",
        "订单不存在",
        "订单不是待付款状态",
        "验证码错误！",
        "错误的验证码",
        "卖出的数量必须是100的倍数",
        "数量不符合要求，广告额度已用完",
        "添加地址重复",
        "按钮验证错误",
        "申请api个数不能超过3个",
        "资金账户不存在",
        "卖出成功",
        "买入成功",
        "发送成功",
        "请完善表单信息",
        "修改成功",
        "提币限额"
    ];
    var message_arr_en = [
        "Account fund is insufficient",
        "Please login first",
        "Nonexistent currency",
        "Suspension of cash withdrawal",
        "Nonexistent address",
        "Wrong quantity",
        "Amount to be withdrawn is less than the minimum withdrawal amount",
        "Wrong verification code",
        "Wrong transaction password",
        "Wrong Google verification code",
        "Please complete the real-name certification first",
        "Wrong withdrawal ID",
        "Withdrawal status is not pending, so it cannot be canceled",
        "Verification code is required",
        "Withdrawal address is required",
        "Withdrawal label is required",
        "Please enter your mailbox",
        "Please enter your password",
        "The account number has been registered",
        "The account number is locked",
        "The account number has not been registered yet",
        "The security password and login password cannot be the same",
        "The source of the request is illegal",
        "The account number does not exist",
        "Failed to send verification code",
        "Wrong account number or password",
        "The document number already exists",
        "Identification authentication application is submitted successfully",
        "Wrong signature",
        "Order does not exist",
        "Market order is not allowed to be canceled",
        "Order has been closed or canceled",
        "Wrong transaction pair",
        "Suspension of transaction",
        "Wrong order number",
        "Wrong quantity",
        "Wrong price",
        "Wrong order type",
        "Wrong price type",
        "Wrong order source",
        "Wrong transaction pair",
        "Quantity is less than minimum purchase quantity",
        "Total amount is less than minimum purchase total amount",
        "Quantity is less than minimum selling quantity",
        "Suspension of transaction",
        "Wrong order ID",
        "The address of address pool has been used up",
        "The recharge address already exists",
        "Cache server error",
        "Order status error",
        "The original Google verification code is incorrect",
        "The balance is insufficient",
        "The original password is incorrect",
        "Wrong account type (only accepting bank card, Alipay, WeChat)",
        "One account type (bank card, WeChat, Alipay) can only bind one account",
        "Please complete the real-name authentication first",
        "Wrong transaction password",
        "Wrong advertisement type",
        "Advertisement ID does not exist",
        "Amount does not meet the requirements, such as less than the minimum amount required by advertisement or more than the maximum amount required by advertisement",
        "Please improve the corresponding collection settings",
        "If more than two orders are unpaid, no new orders can be added",
        "More than two orders are pending, no new orders can be added",
        "Order does not exist",
        "Order is not pending payment status",
        "Verification code is incorrect!",
        "Wrong verification code",
        "The quantity sold must be a multiple of 100",
        "Quantity does not meet the requirements, and advertising quota has been used up",
        "Duplicate address added",
        "Button validation error",
        "No more than three apis can be applied for",
        "Fund account does not exist",
        "Sell successfully",
        "Buy successfully",
        "Sent successfully",
        "Please complete the form information",
        "Successfully modified",
        "Withdrawal limit"
    ]
    var message_dialog = language == "en" ? message_arr_en : message_arr_zh;
    var login_state;
    var $headlogin = $("#headlogin");
    var $headlogout = $("#headlogout");
    isUserLogin();

    var arrx_zh = ["用户协议", "隐私协议", "API文档", "公告中心", "费率说明", "上币申请",
        "QQ群", "微信", "币币交易", "法币交易", "LaunchPad", "注册", "登录", "资产管理", "APP下载","联系我们"
    ];
    var arrx_en = ["User Agreement", "Privacy Policy", "API Doc", "Announcement",
        "Rate Description", "Apply For Listing", "QQ group", "WeChat", "Exchange", "OTC", "LaunchPad", "Sign Up", "Log In", "Assets", "app Download","Contact Us"
    ];
    var arrx = language == "en" ? arrx_en : arrx_zh;
    $(`<li class="tradecenter">
            <a href="#/tradecenter">${arrx[8]}</a>
            <!-- <i class="fa fa-caret-down" aria-hidden="true"></i> -->
        </li>
        <li class="otc">
            <a href="#/otc">${arrx[9]}</a>
            <!-- <i class="fa fa-caret-down" aria-hidden="true"></i> -->
        </li>
        <li class="currency">
            <a href="http://god.zero666666.cn/addcurrency" target="_blank">${arrx[5]}</a>
            <!-- <i class="fa fa-caret-down" aria-hidden="true"></i> -->
        </li>
        <li class="notices">
            <a href="#/notices">${arrx[3]}</a>
            <!-- <i class="fa fa-caret-down" aria-hidden="true"></i> -->
        </li>
        <li class="invited">
            <a href="#/invited" >${language=="en"?"Invite":"邀请返佣"}</a>
            <!-- <i class="fa fa-caret-down" aria-hidden="true"></i> -->
        </li>`).appendTo($(".head-nav"))
        $(`<div class="fter">
        <div class="fter-table">
            <div class="fter-cell first-cell">
                <div><img width="100px" src="../images/logo1.png" alt="logo"/></div>
                <div style="margin-top:6px;font-size:18px;">${language=="en" ? "A Black Horse for Block Chain Trading Platform":"全球高标准数字资产交易平台" }</div>
                <div style="margin-top:6px;">2018-2019 zeroexchang.vip</div>
            </div>
            <div class="fter-cell">
                <div class="c-title">${language=="en" ? "Customer Service":"客户服务" }</div>
                <div><a href="javascript:;">${arrx[5]}</a></div>
                <div><a  href="./apidocs/api-doc.html" target="_blank">${arrx[2]}</a></div>
                <div><a  href="#/privacyPolicy">${arrx[1]}</a></div>
            </div>
            <div class="fter-cell">
                <div class="c-title">${language=="en" ? "Help Center":"帮助中心" }</div>
                <div><a  href="#/feeList">${arrx[4]}</a></div>
                <div><a  href="#/notices">${arrx[3]}</a></div>
                <div><a  href="#/userAgreement">${arrx[0]}</a></div>
            </div>
            <div class="fter-cell last-cell">
                <div class="c-title">${language=="en" ? "Contact Us":"联系我们" }</div>
                <div style="margin-top:6px;">${language=="en" ? "Official Mailbox":"官方邮箱" }: <a href="#" target="_blank" style="background:none;">zero666666@sina.com</a></div>
                <div style="margin-top:6px;">
                    <a href="#" target="_blank"></a>
                    <a href="#" target="_blank"></a>
                    <a href="#" target="_blank"></a>
                    <a href="javascript:;" class="ft-img">
                        <img src="../images/qrcode3.png" />
                    </a>
                    <a href="javascript:;" class="ft-img">
                        <img src="../images/qrcode2.png" />
                    </a>
                </div>
            </div>

        </div>


        
    </div>`).appendTo($(".h-footer"));
    $(".app-download").click(function(){
        if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
            window.location.href = "./download/app.html";
        } else {
            window.location.href = "#/app";
        }
    });
    function isUserLogin() {
        var ul_language = $(`<ul class="drop-menu drop-menu-language f-cb"></ul>`).appendTo($(".change-language"))
        $("<li><a>English</a></li>").click(function() {
            if (language == "en") return false;
            language = "en";
            message_dialog = message_arr_en;
            localStorage.setItem("language", "en");
            window.location.reload(true);
        }).appendTo(ul_language);
        $(" <li><a>简体中文</a></li>").click(function() {
            if (language == "zh") return false;
            language = "zh";
            message_dialog = message_arr_zh;
            localStorage.setItem("language", "zh");
            window.location.reload(true);
        }).appendTo(ul_language);

        // 获取用户登录信息
        dataService.membershipService.getMember().then(function(response) {
            if (response.state == 1) {
                //用户处于登录状态，将状态保存到session
                login_state = true;
                var userInfo = response.data;
                sessionStorage.setItem("loginState", JSON.stringify(login_state));
                sessionStorage.setItem("useruid", JSON.stringify(userInfo.uid));
                $headlogout.empty();
                 $headlogin.append(
                    `<li class="user li-asset-manager">
                        <a href="#/myAssets">${arrx[13]} </a> 
                    </li>`
                );
                // $headlogin.append(
                //     `<li class="user li-asset-manager">
                //         <a href="#/myAssets">${arrx[13]} </a> 
                //     </li>`
                // );
                var $li_user_center = $(
                    '<li class="user li-user-center"></li>'
                ).appendTo($headlogin);
                $(`<a href="#/accountInfo" class="geren"></a>`).appendTo($li_user_center);
                topbarUserOptionList();
            } else {
                login_state = false;
                sessionStorage.setItem("loginState", JSON.stringify(login_state));
                $headlogin.empty();
                $headlogout.empty();
                $headlogout.append(`
                    <li>
                        <a href="#/register" >${arrx[11]}</a>
                    </li>
                    <li style="color:#fff">|</li>
                    <li>
                        <a href="#/login" class="do-lodin" >${arrx[12]}</a>
                    </li>
                `);
            }
        });
    }

    function userLogout() {
        login_state = false;
        sessionStorage.setItem("loginState", JSON.stringify(login_state));
        $headlogin.empty();
        $headlogout.empty();
        $headlogout.append(`
            <li>
                <a href="#/register" >${arrx[11]}</a>
            </li>
            <li style="color:#fff">|</li>
            <li>
                <a href="#/login" style="">${arrx[12]}</a>
            </li>
        `);
        location.href = "#/login";
    }

    function topbarUserOptionList() {
        var $li_asset_manager = $(".home-header .li-asset-manager");
        var $li_user_center = $(".home-header .li-user-center");
        var $asset_manager = $(".home-header .asset-manage");
        var $user_center = $(".home-header .user-center");
        $li_asset_manager.mouseover(function() {
            $asset_manager.css({
                display: "block",
                transition: "1s"
            });
        }).mouseleave(function() {
            $asset_manager.css({
                display: "none",
                transition: "1s"
            });
        });
        $li_user_center.mouseover(function() {
            $user_center.css({
                display: "block",
                transition: "1s"
            });
        }).mouseleave(function() {
            $user_center.css({
                display: "none",
                transition: "1s"
            });
        });
    }

    function hintDialog(state, icolor, content) {
        $("#hintDialog").remove();
        var $hint_dialog = $('<div id="hintDialog"></div>').appendTo($("body"));
        var $p = $('<p><i class="fa ' + state + ' " style="color:' + icolor + ';"></i>' + content + "</p>").appendTo($hint_dialog);
        setTimeout(next, 3000);

        function next() {
            $("#hintDialog").remove();
        }
    }

    $('.home-footer .icon-wrap a').mouseover(function() {
        $('.home-footer .icon-wrap img').css('display', 'block');
    }).mouseleave(function() {
        $('.home-footer .icon-wrap img').css('display', 'none');
    });

    var $li_user_lan = $('.home-header .change-language');
    var $lan = $('.home-header .drop-menu-language');
    $li_user_lan.mouseover(function() {
        $lan.css({
            display: "block",
            transition: "1s"
        });
    }).mouseleave(function() {
        $lan.css({
            display: "none",
            transition: "1s"
        });
    });

    var home = {
        load: function() {
            var ticker1 = 0;
            viewService.getTemplate("view/home.html").then(function(resHtml) {
                var $wrapper = $(resHtml);
                $MainView.html($wrapper);
                $MainView.css("background-image", "none");
                loadBannerBlock($wrapper);
                loadNoticeBlock($wrapper);
                tickerShow($wrapper);
                $(".tradecenter").removeClass("cur");
                $(".tradecenter").siblings().removeClass("cur");
                var arr_zh = ["自选市场", "QC市场", "USDT市场","ETH市场", "请输入币种/搜索", "币种",
                    "实时价格", "24H涨跌幅", "24H最高价", "24H最低价", "24H成交量", "操作", "查看更多",
                    "下载", "24H行情，极速掌握，安全的全球交易，智能极简操作，投资者的首选。", "数据专业 ","开户交易"," 及时提醒"," 闪电成交",
                    "服务", "24*36小时无间隙专业的客服团队提供快速的解决方案和多种沟通渠道", "快速交易", "自主研发高速撮合引擎,海量交易并发下稳健可靠运行妥善处理每一笔委托",  "持续分红",
                    "Zero每月将平台60%利润用于用户分红大力回馈Zero的社区用户", "安全稳定", "多重签名,保证冷钱包硬盘加密,严密认证和防护机制"
                ];
                var arr_en = ["Favorites", "USDT Market", "USDT Market", "ETH Market", "please input currency/search",
                    "Currency", "Real-time price", "24H Quote change", "24H Hight", "24H Low", "24H Volume", "Action", "Show more",
                    "Download", "24H Quotes, Speed ​​Mastery, Secure Global Trading, Smart Minimal Operation, Investors' Choice.", "Data Professional", "Bank Opening", "Timely Reminder", "Lightning Deal", "Service ", "24 * 36 hours without gaps professional customer service team to provide fast solutions and a variety of communication channels", "fast transaction", "independent research and development of high-speed matching engine, massive transactions and stable and reliable operation properly handle each commission ", "Continuous Dividend", "Zero uses 60% of the platform's monthly profit for user dividends to give back to Zero's community users", "Security and stability", "Multi-signature, guarantee cold wallet hard disk encryption, strict authentication and protection mechanism"
                ];
                var arr1 = language == "en" ? arr_en : arr_zh;
                $(`
                <span style="display:none;">
                    <em class="uppercase" >${arr1[1]}</em>
                </span>
                <span class="cur">
                    <em class="uppercase" >${arr1[2]}</em>
                </span>
                <span>
                    <em class="uppercase" >${arr1[3]}</em>
                </span>
                <span class="last-one">
                    <em class="">
                        ${arr1[0]}
                    </em>
                </span>
               `).appendTo($("#tickerType"));
               $('.inner-intro0').html(`<p>${language == "en"?'Zero':"Zero"}<span>${language == "en"?'Platform advantages':"平台优势"}</span></p>`)
               $(`<div class="right-h1">${language == "en"?'APP DOWNLOAD':"APP下载"} </div>
                    <div class="right-h1"></div>
                  <div class="right-h3">${language == "en"?"24H market, very fast grasp. Get on the black horse, grab the black horse in the coin circle":"24H行情，极速掌握。上Zero，抓住币圈Zero"}</div>
                  <div class="android-ios-position">
                      <div><img src="images/iOS.png" alt="" >IOS</div>
                      <div><img src="images/Android.png" alt="">Android</div>
                  </div>`).appendTo($(".inner-intro2-right"));
                $(`<span></span>
                <span class="pairs">${arr1[5]}</span>
                <span class="last-price">
                    <i class="f-fl">${arr1[6]}</i>
                </span>
                <span class="change">
                    <i class="f-fl">${arr1[7]}</i>
                </span>
                <span class="high">
                    ${arr1[8]}
                </span>
                <span class="low">
                    ${arr1[9]}
                </span>
                <span class="amount">
                    <i class="f-fl">${arr1[10]}</i>              
                </span>
                <span class="option">
                    <i>${arr1[11]}</i>              
                </span>
                `).appendTo($(".ticker-content-head"));
                $(".inner-intro2").html(` <div>
            
                                            <div class="f-fl">
                                            <div class="inner-intro2-title"><span>APP</span>${arr1[13]}</div>
                                                <div class="inner-intro2-title2">${arr1[14]}</div>
                                                <div class="inner-intro2-contain">
                                                    <span>${arr1[15]}</span>
                                                    <span>${arr1[16]}</span>
                                                    <span>${arr1[17]}</span>
                                                    <span>${arr1[18]}</span>
                                                </div>
                                           </div>
                                           <div class="f-fr">
                                                <div class="app-download">
                                                    <div class="and-download ">
                                                       android${arr1[13]}
                                                      <!-- <div class="a1">
                                                           <img src="../images/download-mobile1.png" alt="" width="100" height="100">
                                                       </div>-->
                                                   </div>
                                                   <div class="ios-download ">
                                                        ios${arr1[13]}
                                                        <!--<div class="b1">
                                                            <img src="../images/download-mobile1.png" alt="" width="100" height="100">
                                                        </div>-->
                                                    </div>
                                                </div>
                                                <div class="head-phone">
                                                    <img src="../images/head_phone.png" alt="">
                                                </div>   
                                                    
                                           </div>
                                       </div>`);
                $(".inner-intro1-list").html(`<div class="inner-intro1-box ">

                                                <div class="inner-intro1-title "><img src="../images/service_icon.png" alt=""></div>
                                                 <div class="inner1-box">
                                                 <p>—${arr1[19]}</p>
                                                    <div class="inner-intro1-contain" >
                                                        <div>${arr1[20]}</div>
                                                    </div>
                                                   </div> 

                                            </div>
                                            
                                            <div class="inner-intro1-box f-fr1 ">
                                                <div class="inner-intro1-title "><img src="../images/service_icon_1.png" alt=""></div>
                                                 <div class="inner1-box ">
                                                 <p>—${arr1[21]}</p>
                                                    <div class="inner-intro1-contain" >
                                                        <div>${arr1[22]}</div>
                                                    </div>
                                                   </div> 
                                            </div>
                                            <div class='clear'></div>
                                            <!-- <div class="ob-line"></div> -->
                                            <div class="inner-intro1-box ">
                                                <div class="inner-intro1-title "><img src="../images/service_icon_2.png" alt=""></div>
                                                 <div class="inner1-box ">
                                                 <p>—${arr1[23]}</p>
                                                    <div class="inner-intro1-contain">
                                                        <div>${arr1[24]}</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="inner-intro1-box f-fr1">
                                                <div class="inner-intro1-title "><img src="../images/service_icon_3.png" alt=""></div>
                                                <div class="inner1-box ">
                                                <p>—${arr1[25]}</p>
                                                    <div class="inner-intro1-contain">
                                                        <div>${arr1[26]}</div>
                                                    </div>
                                                </div>
                                            </div><div class='clear'></div>`);
                 $(".android-ios-position div").click(function(){
                    if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
                        window.location.href = "./download/app.html";
                    } else {
                        window.location.href = "#/app";
                    }
                })
                var loop = setInterval(function() {
                    if (location.hash != "#/home" && location.hash != "") {
                        clearInterval(loop);
                    }
                    tickerShow($wrapper);
                }, 3000);

                $('#iOSBtn').mouseover(function() {
                    $('img.iOSImg').css('display', 'block');
                }).mouseleave(function() {
                    $('img.iOSImg').css('display', 'none');
                });
                $('#AndroidBtn').mouseover(function() {
                    $('img.AndroidImg').css('display', 'block');
                }).mouseleave(function() {
                    $('img.AndroidImg').css('display', 'none');
                });

            });
       

            function sortNumber(a, b) {
                return a.order - b.order;
            }

            function sortNumberq1(a, b) {
                return a.close - b.close;
            }

            function sortNumberq11(a, b) {
                return b.close - a.close;
            }

            function sortNumberq2(a, b) {
                a = a.close - a.open;
                b = b.close - b.open;
                return a - b;
            }

            function sortNumberq22(a, b) {
                a = a.close - a.open;
                b = b.close - b.open;
                return b - a;
            }

            function sortNumberq3(a, b) {
                return a.volume - b.volume;
            }

            function sortNumberq33(a, b) {
                return b.volume - a.volume;
            }

            function tickerShow($wrapper) {
                dataService.marketService.getAllTicker().then(function(response) {
                    var all_ticker = response.data;
                    var all_tickersym_obj = {};
                    var all_tickersym_arr = [];
                    var five_ticker_arr = [];
                    var $trade_boxs = $wrapper.find(".trade-boxs").html("");
                    var $trade_boxs_number = 0;
                    var ethzc_ticker_close = 0;
                    var usdtzc_ticker_close = 0;
                    for (var i in all_ticker) {
                        var symbol = i.split("_")[0];
                        all_tickersym_arr.push(symbol);
                        all_tickersym_obj[symbol] = all_ticker[i];
                        five_ticker_arr.push(all_ticker[i]);
                        if (all_ticker["ethusdt_ticker"]) {
                            ethzc_ticker_close = all_ticker["ethusdt_ticker"].close;
                        }
                        // if (all_ticker["usdtqc_ticker"]) {
                        //     usdtzc_ticker_close = all_ticker["usdtqc_ticker"].close;
                        // }
                    }
                    five_ticker_arr.sort(sortNumber);
                    for (var n = 0; n < five_ticker_arr.length; n++) {
                        $trade_boxs_number++;
                        if ($trade_boxs_number <= 5) {
                            loadDataToFiveShowTb($trade_boxs, n, five_ticker_arr);
                        }
                    }
                    var $search = $("#searchWrap input");
                    dataService.marketService.getFavorite().then(function(response) {
                        var user_favorite = response.data;
                        var state = response.state;
                        $search.on("input propertychange", function() {
                            var aftersearch_arr = [];
                            var aftersearch_obj = {};
                            aftersearch_arr = all_tickersym_arr.filter(item => item.indexOf($(this).val()) != -1);
                            for (var i in all_tickersym_obj) {
                                var position = $.inArray(i, aftersearch_arr);
                                if (position >= 0) {
                                    aftersearch_obj[i] = all_tickersym_obj[i];
                                }
                            }
                            loadDataToTb($wrapper, aftersearch_obj, user_favorite, state, ethzc_ticker_close, usdtzc_ticker_close);
                        });
                        if (!$search.val()) {
                            loadDataToTb($wrapper, all_tickersym_obj, user_favorite, state, ethzc_ticker_close, usdtzc_ticker_close);
                        }
                    });
                });
                tabSlider();

            }


             function loadNoticeBlock($wrapper) {
                dataService.newsService.getNewsList(304, 1, 3).then(function (response) {
                    if (response.state == 1) {
                        var lists = response.data.list;
                        var $listWrapper = $wrapper.find("#news");
                        // <span class="sep">/</span>
                        // console.log(lists);
                        for (var i = 0;i < lists.length ; i++) {
                            $listWrapper.append(`
                            <a href="#/notices?id=${lists[i].id}" target="_blank">${lists[i].a_title}</a>
                            `);
                        }
                        AutoScroll();
                    }
                });
            }

            function AutoScroll() {

                var num=$("#news").find("a").length;
                if (num>1) {
                    setInterval(function(){ 
                    $('#news').animate({
                        marginTop:"-40px"
                    },2000,function(){
                        $(this).css({marginTop : "0"}).find(":first").appendTo(this);
                    });
                }, 8000); 
                }
               
            }



            function loadBannerBlock($wrapper) {
                dataService.newsService.getNewsBanner().then(function(response) {
                    if (response.state == 1) {
                        var banners = response.data;
                        var $swiperWrapper = $wrapper.find("#swiperWrapper");
                        for (var i = 0; i < banners.length; i++) {
                            // console.log(banners[i].a_img_file);
                            var $swiperSlide = $('<div class="swiper-slide"></div>').css({
                                'background-image': `url(${banners[i].a_img_file})`,
                                'background-repeat': 'no-repeat',
                                'background-position': 'center center',
                                'background-size': "100% 100%"
                            });
                            $(`<a target="_blank" href="#/notices?id=${banners[i].id}"></a>`).appendTo($swiperSlide);
                            $swiperWrapper.append($swiperSlide);
                        }
                        initSwiper();
                    }
                });
            }

            function upAndDown(all_ticker, i, price_precision) {
                var open = all_ticker[i].open.toFixed(price_precision);
                var close = all_ticker[i].close.toFixed(price_precision);
                var sign;
                if (open - close < 0) {
                    sign = "+";
                } else {
                    sign = "";
                }
                var price_percent = sign + (((close - open) * 100) / open).toFixed(2) + "%";
                return price_percent;
            }

            function loadDataToFiveShowTb($trade_boxs, i, all_ticker) {
                // 价格精度
                var minorplus = all_ticker[i].close - all_ticker[i].open;
                var volume_precision = all_ticker[i].volumePrecision;
                var price_precision = all_ticker[i].pricePrecision;
                var price_percent = upAndDown(all_ticker, i, price_precision);
                var $trade_box = $('<div class="trade-box"></div>').click(function() {
                    location.href = "#/tradecenter?symbol=" + all_ticker[i].symbol;
                    window.location.reload(true);
                }).appendTo($trade_boxs);
                var $inner = $('<div class="inner-trade-box"></div>').appendTo($trade_box)
                var $tb_row1 = $('<div class="tb-row1 tb-row f-cb"></div>').appendTo($inner);
                $('<span class="uppercase f-fl"></span>').text(all_ticker[i].dspName).appendTo($tb_row1);
                $(`<span class="rate f-fr"></span>`).addClass(minorplus < 0 ? "fall fall-bg" : "rise rise-bg").text(price_percent).appendTo($tb_row1);
                var $tb_row2 = $('<div class="tb-row2 tb-row"></div>').appendTo($inner);
                $(`<span>${all_ticker[i].high.toFixed(price_precision)}<em> / ${all_ticker[i].low.toFixed(price_precision)}</em></span>`).appendTo($tb_row2);
                var $tb_row3 = $('<div class="tb-row3 tb-row f-cb"></div>').appendTo($inner);
                var $span = $("<span></span>").appendTo($tb_row3);
                $("交易额：").appendTo($span);
                $(`<em class="amount">${all_ticker[i].volume.toFixed(volume_precision)}
                        <em class="uppercase"> ${all_ticker[i].baseCurrencyName}</em>
                   </em>`).appendTo($span);
            }

            function loadDataToTb($wrapper, all_ticker, user_favorite, state, ethzc_ticker_close, usdtzc_ticker_close) {
                var $ticker_user = $wrapper.find("#userTicker").html("");
                var $ticker_zc = $wrapper.find("#zcTicker").html("");
                var $ticker_eth = $wrapper.find("#ethTicker").html("");
                var $ticker_usdt = $wrapper.find("#btcTicker").html("");
                var user_favorite_arr = [];
                for (var i in user_favorite) {
                    user_favorite_arr.push(user_favorite[i].pair_dsp_name);
                }
                var all_ticker_arr = [];
                for (var j in all_ticker) {
                    all_ticker_arr.push(all_ticker[j]);
                }
                switch (ticker1) {
                    case 0:
                        all_ticker_arr.sort(sortNumber);
                        break;
                    case 1:
                        all_ticker_arr.sort(sortNumberq1);
                        break;
                    case 2:
                        all_ticker_arr.sort(sortNumberq11);
                        break;
                    case 3:
                        all_ticker_arr.sort(sortNumberq2);
                        break;
                    case 4:
                        all_ticker_arr.sort(sortNumberq22);
                        break;
                    case 5:
                        all_ticker_arr.sort(sortNumberq3);
                        break;
                    case 6:
                        all_ticker_arr.sort(sortNumberq33);
                        break;

                }
                for (var k = 0; k < all_ticker_arr.length; k++) {
                    var volume_precision = all_ticker_arr[k].volumePrecision;
                    var price_precision = all_ticker_arr[k].pricePrecision;
                    var areaId = all_ticker_arr[k].areaId;
                    symbol = all_ticker_arr[k].symbol.toUpperCase();
                    var position = $.inArray(symbol, user_favorite_arr);
                    var open = all_ticker_arr[k].open.toFixed(price_precision);
                    var close = all_ticker_arr[k].close.toFixed(price_precision);
                    var sign;
                    if (open - close < 0) {
                        sign = "+";
                    } else {
                        sign = "";
                    }
                    if (state == 1) {
                        if (position >= 0) {
                            var $dl = loadDataToDl(position, symbol, all_ticker_arr, volume_precision, price_precision, k, sign, close, open, ethzc_ticker_close, usdtzc_ticker_close);
                            $ticker_user.append($dl);

                        }
                    }
                    if (areaId == "1") {
                        var $dl = loadDataToDl(position, symbol, all_ticker_arr, volume_precision, price_precision, k, sign, close, open, ethzc_ticker_close, usdtzc_ticker_close);
                        $ticker_zc.append($dl);

                    }

                    if (areaId == "2") {
                        var $dl = loadDataToDl(position, symbol, all_ticker_arr, volume_precision, price_precision, k, sign, close, open, ethzc_ticker_close, usdtzc_ticker_close);
                        $ticker_eth.append($dl);


                    }
                    if (areaId == "3") {
                        var $dl = loadDataToDl(position, symbol, all_ticker_arr, volume_precision, price_precision, k, sign, close, open, ethzc_ticker_close, usdtzc_ticker_close);
                        $ticker_usdt.append($dl);

                    }
                }
            }

            function loadDataToDl(position, symbol, ticker, volume_precision, price_precision, i, sign, close, open, ethzc_ticker_close, usdtzc_ticker_close) {
                var convertCNY;
                if (ticker[i].areaId == "1") {
                    convertCNY = ticker[i].close.toFixed(2);
                } else if (ticker[i].areaId == "2") {
                    convertCNY = ticker[i].close * ethzc_ticker_close;
                    convertCNY = convertCNY.toFixed(2);
                } else if (ticker[i].areaId == "3") {
                    convertCNY = ticker[i].close;
                    convertCNY = convertCNY.toFixed(2);
                }
                var $dl = $("<dl></dl>");
                $("<dt></dt>").appendTo($dl);
                var $dd = $("<dd></dd>").appendTo($dl);
                var $coinunit = $('<div class="coin-unit"></div>').appendTo($dd);
                var $span = $("<span></span>").appendTo($coinunit);
                // 判断收藏按钮的状态
                if (position >= 0) {
                    // 在收藏数组中 为激活状态
                    var clicktimes = 0;
                    var $star = $("<i></i>").attr("class", "fa fa-heart sc").click(function(e) {
                            $(this).addClass("sc");
                            e.stopPropagation();
                            clicktimes++;
                            if (clicktimes % 2 == 0) {
                                dataService.marketService.favorite(symbol).then(function(response) {
                                    if (response.state == 1) {
                                        $star.removeClass("sc");
                                        $star.addClass("sc");
                                        hintDialog("fa-check-circle", "#f5a622", "收藏" + symbol + "成功");
                                    } else if (response.state == -1) {
                                        var msg_position = $.inArray(response.msg, message_arr);
                                        hintDialog("fa-exclamation-circle", "#b34242", message_dialog[msg_position]);
                                        if (response.msg == 'LANG_NO_LOGIN') {
                                            setTimeout(function() {
                                                userLogout();
                                            }, 2000);
                                        }
                                    }
                                });
                            } else {
                                dataService.marketService.favoriteDel(symbol).then(function(response) {
                                    if (response.state == 1) {
                                        $star.removeClass("sc");
                                        $star.addClass("sc");
                                        hintDialog("fa-check-circle", "#f5a622", "取消收藏" + symbol + "成功");
                                    } else if (response.state == -1) {
                                        var msg_position = $.inArray(response.msg, message_arr);
                                        hintDialog("fa-exclamation-circle", "#b34242", message_dialog[msg_position]);
                                        if (response.msg == 'LANG_NO_LOGIN') {
                                            setTimeout(function() {
                                                userLogout();
                                            }, 2000);
                                        }
                                    }
                                });
                            }
                        })
                        .appendTo($span);
                } else {
                    // 不在收藏数组中 为未激活状态
                    var clicktimes = 0;
                    var $star = $("<i></i>").attr("class", "fa fa-heart").click(function(e) {
                        e.stopPropagation();
                        clicktimes++;
                        if (clicktimes % 2 == 0) {
                            dataService.marketService.favoriteDel(symbol).then(function(response) {
                                if (response.state == 1) {
                                    $star.removeClass("sc");
                                    hintDialog("fa-check-circle", "取消收藏" + symbol + "成功");
                                } else if (response.state == -1) {
                                    var msg_position = $.inArray(response.msg, message_arr);
                                    hintDialog("fa-exclamation-circle", "#b34242", message_dialog[msg_position]);
                                    if (response.msg == 'LANG_NO_LOGIN') {
                                        setTimeout(function() {
                                            userLogout();
                                        }, 2000);
                                    }
                                }
                            });
                        } else {
                            dataService.marketService.favorite(symbol).then(function(response) {

                                if (response.state == 1) {
                                    $star.addClass("sc");
                                    hintDialog("fa-check-circle", "#b34242", "收藏" + symbol + "成功");

                                } else if (response.state == -1) {
                                    var msg_position = $.inArray(response.msg, message_arr);
                                    hintDialog("fa-exclamation-circle", "#b34242", message_dialog[msg_position]);
                                    if (response.msg == 'LANG_NO_LOGIN') {
                                        setTimeout(function() {
                                            userLogout();
                                        }, 2000);
                                    }
                                }
                            });
                        }
                    }).appendTo($span);
                }
                // 给涨跌幅上色
                var $currency = $('<span class="currency"></span>').appendTo($coinunit);
                $(`<em class="base-currency">${ticker[i].baseCurrencyName.toUpperCase()}<em class="desc"> / ${ticker[i].quoteCurrencyName.toUpperCase()}</em></em>`).appendTo($currency);
                $(`<span class="price">${ticker[i].close.toFixed(price_precision)}<em class="desc"> ≈$${convertCNY}</em></span>`).appendTo($coinunit);
                if (sign == "+") {
                    if (close == 0 && open == 0) {
                        $(`<span class="rate rise">${ "0%"}</span>`).appendTo($coinunit);
                    } else {
                        $(`<span class="rate rise">${(((close - open) * 100) / open).toFixed(2) +"%"}</span>`).appendTo($coinunit);
                    }

                } else if (sign == "") {
                    if (close == 0 && open == 0) {
                        $(`<span class="rate fall">${ "0%"}</span>`).appendTo($coinunit);
                    } else {
                        $(`<span class="rate fall">${Math.abs(((close - open) * 100) / open).toFixed(2) +"%"}</span>`).appendTo($coinunit);
                    }

                }
                $(`<span class="high">${ticker[i].high.toFixed(price_precision)}</span>`).appendTo($coinunit);
                $(`<span class="low">${ticker[i].low.toFixed(price_precision)}</span>`).appendTo($coinunit);
                $(`<span class="amount">${ticker[i].volume.toFixed(volume_precision)}</span>`).appendTo($coinunit);
                $(`<span class="option"><img src="../images/op_exchange.png"></span>`).click(function () {
                    location.href = "#/tradecenter?symbol=" + symbol.toLowerCase();
                    window.location.reload(true);
                }).appendTo($coinunit);
                return $dl;
            }

            function tabSlider() {
                var $tab = $("#tickerType > span");
                var $tabcon = $("#tickerList > div");

                $tab.each(function() {
                    $(this).click(function() {
                        tabShow($(this).index());
                    });
                });

                function tabShow(a) {
                    $tab.each(function() {
                        $(this).removeClass("cur");
                    });
                    $tabcon.each(function() {
                        $(this).removeClass("cur");
                    });
                    $($tab[a]).addClass("cur");
                    $($tabcon[a]).addClass("cur");
   
                }
            }

            function initSwiper() {
                new Swiper(".swiper-container", {
                    loop: true,
                    slidesPerView: 'auto',
                    loopedSlides: 4,
                    autoplay: true,
                     navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev"
                    }
                });
            }
        }
    };
    var login = {
        load: function() {
            viewService.getTemplate("view/login.html").then(function(resHtml) {
                var $wrapper = $(resHtml);
                $MainView.html($wrapper);
                $MainView.css("background-image", "none");
                var isclick = true;
                var arr_zh = ["登录", "手机号码", "登录密码", "忘记密码？", "没有账号？", "注册", "一个", "登录",
                    "密码不能为空！", "账号不能为空！", "账号格式不正确！"
                ];
                var arr_en = ["User Login", "Mobile Number / E-mail", "Login Password", "Forgot your password?", "No account?", " Register", "", "Log in", "Password cannot be empty", "Account name cannot be empty", "The account format is incorrect!"];
                var arr = language == "en" ? arr_en : arr_zh;
                $(`<div class="title">${arr[0]}</div>
                    <div class="input-wrap" id="userAccount">
                        <span>${arr[1]}</span>
                        <input type="text" placeholder="">
                    </div>
                    <div class="input-tip"></div>
                    <div class="input-wrap" id="userPwd">
                        <span>${arr[2]}</span>
                        
                    </div>
                    <div class="input-tip"></div>
                    <div style="position:absolute;right:20px;top:205px;">
                            <a href="#/resetpassword" style="color:#f3bb2b;">${arr[3]}</a>
                        </div>
                    <div id="captcha2"></div>
                    
                    <div class="login-forget" id="loginBtn">
                        <button type="button" class="login-btn" style="width: 100%">${arr[7]}</button>
                    </div>
                    <div style="text-align: center;margin-top: 30px;">
                        <a href="#/register" style="color:#f3bb2b">${arr[5]}</a>
                    </div>
                    `).appendTo($(".inner-form"));
                $(".tradecenter").removeClass("cur");
                $(".tradecenter").siblings().removeClass("cur");
                var regPhone = new RegExp("^[1][3,4,5,6,7,8,9][0-9]{9}$");
                var regEmail = new RegExp("^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(.[a-zA-Z0-9-]+)*.[a-zA-Z0-9]{2,6}$");
                var $userAccount = $wrapper.find("#userAccount");
                var $userPwd = $wrapper.find("#userPwd");
                useraccountIdentification($userAccount, regPhone, regEmail, arr);
                userpasswordIdentification($userPwd, arr);
                dataService.membershipService.getGtValidateCode().then(function(response) {
                    response = JSON.parse(response);
                    if (response.success == 1) {
                        loadRobotIdentification(isclick, response, $userAccount, $userPwd);
                    } else {
                        hintDialog("fa-exclamation-circle", "#b34242", message_dialog['LANG_ILLEGAL_GT_CHECK_CODE']);
                    }
                });
            });

            function userpasswordIdentification($userPwd, arr) {
                $('<input type="password"  autocomplete="new-password" placeholder="">').blur(function() {
                    $(this).siblings().css("top", "-10px");
                    if ($(this).val().trim() == "") {
                        $(this).siblings().css("top", "20px");
                        $userPwd.next().text(arr[8]).css({
                            color: "#f3bb2b",
                            transition: ".6s"
                        });
                    } else {
                        $userPwd.next().text("");
                    }
                }).appendTo($userPwd);
                $('#userPwd input').focus(function() {
                    $(this).siblings().css("top", "-10px");
                    $userPwd.next().text("")
                })
            }

            function useraccountIdentification($userAccount, regPhone, regEmail, arr) {
                $('#userAccount input').focus(function() {
                    $(this).siblings().css("top", "-20px");
                    $userAccount.next().text("");
                })
                $('#userAccount input').blur(function() {

                    if ($(this).val().trim() == "") {
                        $(this).siblings().css("top", "20px");
                        $userAccount.next().text(arr[9]).css({
                            color: "#f3bb2b",
                            transition: ".6s"
                        });
                    } else if (!regEmail.test($(this).val()) && !regPhone.test($(this).val())) {
                        $userAccount.next().text(arr[10]).css({
                            color: "#f3bb2b",
                            transition: ".6s"
                        });
                    } else {
                        $userAccount.next().text("");
                    }
                }).appendTo($userAccount);
            }

            function loadRobotIdentification(isclick, response, $userAccount, $userPwd) {
                initGeetest({
                    gt: response.gt,
                    challenge: response.challenge,
                    new_captcha: response.new_captcha,
                    offline: !response.success,
                    product: "popup",
                    width: "400px",
                }, function(captchaObj) {
                    captchaObj.appendTo("#captcha2");
                    $('#loginBtn button').click(function() {
                        var result = captchaObj.getValidate();
                        if (!result) {
                            hintDialog("fa-exclamation-circle", "#b34242", language == "en" ? 'Please complete the button validation' : '请完成按钮验证');
                        } else {
                            if (isclick) {
                                isclick = false;
                                var data = {
                                    m_name: $userAccount.find("input").val(),
                                    m_pwd: $userPwd.find("input").val(),
                                    geetest_challenge: result.geetest_challenge,
                                    geetest_validate: result.geetest_validate,
                                    geetest_seccode: result.geetest_seccode
                                }
                                dataService.membershipService.memberLogin(data).then(function(response) {
                                    if (response.state == 1) {
                                        isUserLogin();
                                        location.href = "#/home";
                                    } else if (response.state == -1) {
                                        var msg_position = $.inArray(response.msg, message_arr);
                                        hintDialog("fa-exclamation-circle", "#b34242", message_dialog[msg_position]);
                                        setTimeout(function() {
                                            captchaObj.reset();
                                        }, 1500);
                                    }
                                });
                                setTimeout(function() {
                                    isclick = true;
                                }, 1000);
                            }
                        }
                    });
                });
            }
        }
    };
    var register = {
        load: function() {
            viewService.getTemplate("view/register.html").then(function(resHtml) {
                var $wrapper = $(resHtml);
                $MainView.html($wrapper);
                $MainView.css("background-image", "none");
                $(".tradecenter").removeClass("cur");
                $(".tradecenter").siblings().removeClass("cur");
                var arr_zh = ['注册', "手机号码", "图片验证码", "验证码", "发送验证码", "登录密码",
                    "确认密码", "邀请人UID（选填）", "我已阅读并同意", "《服务协议》", "已有账号", "登录", "注册", "立即登录",
                    "手机号码不能为空！", "账号格式不正确！", "图片验证码不能为空！", "手机号码或者图片验证码错误",
                    "验证码不能为空！", "密码不能为空！", "确认密码不能为空！", "两次输入密码不一致！", "注册成功", "该账号已注册,请登录",
                ];
                var arr_en = ["User Registration", "Mobile Number / E-mail", "Picture verification code",
                    "Code", "Get code", "Password", "Confirm Password", "Inviter UID (optional)", "I have read and agree", "User Agreement", "Existing account？", "Log in", "Sign Up", "Log in immediately",
                    "Mobile number or e-mail address cannot be empty!", "The account format is incorrect!", "Verification code cannot be empty!", "Mobile number or Image verification code error",
                    "Verification code cannot be empty!", "Password cannot be empty!", "Password confirm cannot be empty!", "Two input passwords do not match!", "Successfully registered ", "This account is already registered,please login"
                ];
                var arr = language == "en" ? arr_en : arr_zh;
                $(`<div class="title">${arr[0]}</div>
                <div class="change-reg-way-input">
                <div class="input-wrap">
                    <span>${arr[1]}</span>
                    <input type="text" placeholder="" id="userRegAccount">
                </div>
                <div class="input-tip"></div>
                <div class="input-wrap img-validate f-cb">
                    <span>${arr[2]}</span>
                    <input class="f-fl" type="text" width="65%" placeholder="" id="userRegImgCode">
                    <img class="imgCodeBtn f-fl" src="" alt="" id="imgCode">
                </div>
                <div class="input-tip"></div>
                <div class="input-wrap mobile-validate f-cb">
                    <span>${arr[3]}</span>
                    <input class="f-fl" type="text" width="65%" placeholder="" id="userRegMCode">
                    <button type="button" class="codeBtn f-fl" id="codeBtn">${arr[4]}</button>
                </div>
                <div class="input-tip"></div>
                <div class="input-wrap">
                    <span>${arr[5]}</span>
                    <input type="password"  autocomplete="new-password" placeholder="" id="loginPwd">
                </div>
                <div class="input-tip"></div>
                <div class="input-wrap">
                    <span>${arr[6]}</span>
                    <input type="password"  autocomplete="new-password" placeholder="" id="confirmPwd">
                </div>
                <div class="input-tip"></div>
                <div class="input-wrap">
                    <span>${arr[7]} </span>
                    <input type="text" placeholder="" id="inviterId">
                </div>
                <div class="input-tip"></div>
            </div>
            <div class="agreement">
                <input type="checkbox" id="Agreement">
                ${arr[8]}<a href="#/register" target="_blank"> ${arr[9]} </a>
                <span class="f-fr" style="color: #646a8e">${arr[10]}<a href="#/login" style="color: #f3bb2b">${arr[11]}</a></span> 
            </div>
            <div class="reg-back">
                <button type="button" id="regBtn" style="width: 100%;">${arr[12]}</button>
                <button type="button" id="backLoginBtn" style="display: none;">${arr[13]}</button>
            </div>`).appendTo($("#regis"))
                var regPhone = new RegExp("^[1][3,4,5,7,8,9][0-9]{9}$");
                var regEmail = new RegExp("^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(.[a-zA-Z0-9-]+)*.[a-zA-Z0-9]{2,6}$");
                var userRegAccount = $wrapper.find("#userRegAccount");
                var userRegAccount_state = false;
                var userRegImgCode = $wrapper.find("#userRegImgCode");
                var imgCode = $wrapper.find("#imgCode");
                var userRegMCode = $wrapper.find("#userRegMCode");
                var codeBtn = $wrapper.find("#codeBtn");
                var loginPwd = $wrapper.find("#loginPwd");
                var loginPwd_state = false;
                var confirmPwd = $wrapper.find("#confirmPwd");
                var inviterId = $wrapper.find("#inviterId");
                var $regBtn = $("#regBtn");
                if (location.hash.indexOf('?') != -1) {
                    // console.log(location.hash.split('?')[1].split('=')[1]);
                    inviterId.val(location.hash.split('?')[1].split('=')[1]);
                    $("#inviterId").prev().css("top", "-10px");
                }
                var agreement = $wrapper.find("#Agreement");
                $("#regis input").focus(function() {

                    $(this).prev().css("top", "-10px")
                })
                $("#regis input").blur(function() {
                    if ($(this).val()) {

                    } else {
                        $(this).prev().css("top", "20px")
                    }

                })
                userRegAccount.blur(function() {
                    if ($(this).val().trim() == "") {
                        $(this).parent().next().text(arr[14]).css({
                            color: "#f3bb2b",
                            transition: ".6s"
                        });
                        userRegAccount_state = false;
                    } else if (!regEmail.test($(this).val()) && !regPhone.test($(this).val())) {
                        $(this).parent().next().text(arr[15]).css({
                            color: "#f3bb2b",
                            transition: ".6s"
                        });
                        userRegAccount_state = false;
                    } else {
                        userRegAccount.parent().next().text("");
                        userRegAccount_state = true;
                    }
                });
                getKaptcha(imgCode);
                imgCode.click(function(e) {
                    e.stopPropagation();
                    getKaptcha(imgCode);
                });
                userRegImgCode.blur(function() {
                    if ($(this).val().trim() == "") {
                        $(this).parent().next().text(arr[16]).css({
                            color: "#f3bb2b",
                            transition: ".6s"
                        });
                    } else {
                        userRegImgCode.parent().next().text("");
                    }
                });
                codeBtn.click(function() {
                    var isimgCode = userRegImgCode.val();
                    var isclick = codeBtn.prop('disabled');
                    if (isclick == true || isimgCode == '') {
                        return;
                    }
                    var code = userRegImgCode.val();
                    var token = imgCode.attr("data-token");
                    var useraccount = userRegAccount.val();
                    if (userRegAccount_state) {
                        dataService.accountService.getMail(token, code, useraccount, "reg").then(function(response) {
                            if (response.state == 1) {
                                var msg_position = $.inArray('Sent_successfully', message_arr);
                                hintDialog("fa-check-circle", "#1c9547", message_dialog[msg_position]);
                                countDownBtn(codeBtn);
                            } else if (response.state == -1) {
                                var msg_position = $.inArray(response.msg, message_arr);
                                hintDialog("fa-exclamation-circle", "#b34242", message_dialog[msg_position]);
                                getKaptcha(imgCode);
                            }
                        });
                    } else {
                        getKaptcha(imgCode);
                        hintDialog("fa-exclamation-circle", "#b34242", arr[17]);
                    }
                });
                userRegMCode.blur(function() {
                    if ($(this).val().trim() == "") {
                        $(this).parent().next().text(arr[18]).css({
                            color: "#f3bb2b",
                            transition: ".6s"
                        });
                    } else {
                        userRegMCode.parent().next().text("");
                    }
                });
                loginPwd.blur(function() {
                    if ($(this).val().trim() == "") {
                        $(this).parent().next().text(arr[19]).css({
                            color: "#f3bb2b",
                            transition: ".6s"
                        });
                        loginPwd_state = false;
                    } else if (loginPwd.val() != confirmPwd.val()) {
                        confirmPwd.parent().next().text(arr[21]).css({
                            color: "#f3bb2b",
                            transition: ".6s"
                        });
                        loginPwd_state = false;
                    } else {
                        loginPwd.parent().next().text("");
                        confirmPwd.parent().next().text("");
                        loginPwd_state = true;
                    }
                });
                confirmPwd.blur(function() {
                    if ($(this).val().trim() == "") {
                        $(this).parent().next().text(arr[20]).css({
                            color: "#f3bb2b",
                            transition: ".6s"
                        });
                        loginPwd_state = false;
                    } else if (loginPwd.val() != confirmPwd.val()) {
                        $(this).parent().next().text(arr[21]).css({
                            color: "#f3bb2b",
                            transition: ".6s"
                        });
                        loginPwd_state = false;
                    } else {
                        loginPwd.parent().next().text("");
                        confirmPwd.parent().next().text("");
                        loginPwd_state = true;
                    }
                });
                $("#backLoginBtn").click(function() {
                    location.href = "#/login";
                });
                $regBtn.click(function() {
                    $regBtn.find('.loading').css('display', 'block');
                    var data = {
                        m_name: userRegAccount.val(),
                        m_pwd: loginPwd.val(),
                        sms_code: userRegMCode.val(),
                        introduce_m_id: inviterId.val()
                    };

                    if (userRegAccount_state && loginPwd_state) {
                        $regBtn.prop('disabled', true);
                        dataService.membershipService.member(data).then(function(response) {
                            if (response.state == 1) {
                                $regBtn.prop('disabled', false);
                                location.href = "#/login";
                                hintDialog("fa-check-circle", "#1c9547", arr[22]);
                            } else {
                                $regBtn.prop('disabled', false);
                                getKaptcha(imgCode);
                                var msg_position = $.inArray(response.msg, message_arr);
                                hintDialog(
                                    "fa-exclamation-circle",
                                    "#b34242",
                                    message_dialog[msg_position]
                                );
                            }
                        });
                    } else {
                        var msg_position = $.inArray('Complete_information', message_arr);
                        hintDialog("fa-exclamation-circle", "#b34242", message_dialog[msg_position]);
                    }
                });

                function getKaptcha(code) {
                    dataService.accountService.getKaptcha().then(function(response) {
                        var imgcode = response.check_code_img;
                        var tokencode = response.check_code_token;
                        code.attr({
                            src: imgcode,
                            "data-token": tokencode
                        });
                    });
                }

                function countDownBtn($btn) {
                    var second = 60;
                    if (second > 0) {
                        second--;
                        $btn.text(second + 's');
                        $btn.prop('disabled', true);
                        $btn.addClass('forbidBtn');
                    }
                    var msgInterval = setInterval(function() {
                        if (second > 0) {
                            second--;
                            $btn.text(second + 's');
                            $btn.prop('disabled', true);
                            $btn.addClass('forbidBtn');
                        }
                        if (second == 0) {
                            clearInterval(msgInterval);
                            $btn.text(arr[4]);
                            $btn.prop('disabled', false);
                            $btn.removeClass('forbidBtn');
                        }
                    }, 1000);
                }
            });
        }
    };
    var resetpassword = {
        load: function() {
            viewService.getTemplate("view/resetpassword.html").then(function(resHtml) {
                var $wrapper = $(resHtml);
                $MainView.html($wrapper);
                $MainView.css("background-image", "none");
                $(".tradecenter").removeClass("cur");
                $(".tradecenter").siblings().removeClass("cur");
                var arr_zh = ['忘记密码', "手机号码", "图片验证码", "验证码", "发送验证码", "登录密码", "确认密码", "确认",
                        "立即登录", "手机号码不能为空！", "账号格式不正确！", "图片验证码不能为空！", "手机号码错误",
                        "验证码不能为空！", "密码不能为空！", "确认密码不能为空！", "两次输入密码不一致！"
                    ],
                    arr_en = ['Forgot Password', "Mobile Number / E-mail", "Picture verification code",
                        "Code", "Get code", "Password", "Confirm Password", "Confirm", "Log in immediately",
                        "Mobile number or e-mail address cannot be empty!", "The account format is incorrect!", "Verification code cannot be empty!", "Mobile number error",
                        "Verification code cannot be empty!", "Password cannot be empty!", "Password confirm cannot be empty!", "Two input passwords do not match!"
                    ],
                    arr = language == "en" ? arr_en : arr_zh;
                $(`<div class="title">${arr[0]}</div>
                <div class="input-wrap user_account">
                    <span>${arr[1]}</span>
                    <input type="text" placeholder="">
                </div>
                <div class="input-tip"></div>
                <div class="input-wrap img-code">
                    <span>${arr[2]}</span>
                    <input type="text" placeholder="">
                    <img class="imgCodeBtn f-fr" src="" alt="" id="imgCode">
                </div>
                <div class="input-tip"></div>
                <div class="input-wrap mail-code">
                    <span>${arr[3]}</span>
                    <input type="text" placeholder="" id="mailCode">
                    <button class="f-fr">${arr[4]}</button>
                </div>
                <div class="input-tip"></div>
                <div class="input-wrap user-password">
                    <span>${arr[5]}</span>
                    <input type="password"  autocomplete="new-password" placeholder="">
                </div>
                <div class="input-tip"></div>
                <div class="input-wrap confirm-password">
                    <span>${arr[6]}</span>
                    <input type="password"  autocomplete="new-password" placeholder="">
                </div>
                <div class="input-tip"></div>
                <button class="confirm-btn" style="margin-right: 50px;" id="confirmBtn">${arr[7]}</button>
                <button class="confirm-btn" style="background: none;color:#f3bb2b;border:none" id="backLoginBtn">${arr[8]}</button>`).appendTo($("#resetpsw"));
                var regPhone = new RegExp("^[1][3,4,5,7,8,9][0-9]{9}$");
                var regEmail = new RegExp("^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(.[a-zA-Z0-9-]+)*.[a-zA-Z0-9]{2,6}$");
                var $user_account = $wrapper.find(".user_account input");
                var $user_account_state;
                var $img_code = $wrapper.find(".img-code input");
                var $img_code_btn = $wrapper.find(".img-code img");
                var $mail_code = $wrapper.find(".mail-code input");
                var $mail_code_btn = $wrapper.find(".mail-code button");
                var $user_password = $wrapper.find(".user-password input");
                var $confirm_password = $wrapper.find(".confirm-password input");
                var $confirmBtn = $("#confirmBtn");
                $("#resetpsw input").focus(function() {
                    $(this).prev().css("top", "-10px")
                })
                $("#resetpsw input").blur(function() {
                    if ($(this).val() == "") {
                        $(this).prev().css("top", "20px")
                    }

                })
                $("#backLoginBtn").click(function() {
                    location.href = "#/login";
                });
                $user_account.blur(function() {
                    if ($(this).val().trim() == "") {
                        $(this).parent().next().text(arr[9]).css({
                            color: "#f3bb2b",
                            transition: ".6s"
                        });
                        user_account_state = false;
                    } else if (!regEmail.test($(this).val()) && !regPhone.test($(this).val())) {
                        $(this).parent().next().text(arr[10]).css({
                            color: "#f3bb2b",
                            transition: ".6s"
                        });
                        user_account_state = false;
                    } else {
                        $user_account.parent().next().text("");
                        $user_account_state = true;
                    }
                });
                getKaptcha($img_code_btn);
                $img_code_btn.click(function(e) {
                    e.stopPropagation();
                    getKaptcha($img_code_btn);
                });
                $img_code.blur(function() {
                    if ($(this).val().trim() == "") {
                        $(this).parent().next().text(arr[11]).css({
                            color: "#f3bb2b",
                            transition: ".6s"
                        });
                    } else {
                        $img_code.parent().next().text("");
                    }
                });
                var useraccount;
                $mail_code_btn.click(function() {
                    var isimgCode = $img_code.val();
                    var isclick = $mail_code_btn.prop('disabled');
                    if (isclick == true || isimgCode == '') {
                        return;
                    }
                    code = $img_code.val();
                    token = $img_code_btn.attr("data-token");
                    useraccount = $user_account.val();
                    if ($user_account_state) {
                        dataService.accountService.getMail(token, code, useraccount, "forgot").then(function(response) {
                            if (response.state == 1) {
                                var msg_position = $.inArray('Sent_successfully', message_arr);
                                hintDialog("fa-check-circle", "#1c9547", message_dialog[msg_position]);
                                countDownBtn($mail_code_btn);
                            } else if (response.state == -1) {
                                getKaptcha($img_code_btn);
                                var msg_position = $.inArray(response.msg, message_arr);
                                hintDialog("fa-exclamation-circle", "#b34242", message_dialog[msg_position]);
                            }
                        });
                    } else {
                        hintDialog("fa-exclamation-circle", "#b34242", arr[12]);
                    }
                });
                $mail_code.blur(function() {
                    if ($(this).val().trim() == "") {
                        $(this).parent().next().text(arr[13]).css({
                            color: "#f3bb2b",
                            transition: ".6s"
                        });
                    } else {
                        $mail_code.parent().next().text("");
                    }
                });
                $user_password.blur(function() {
                    if ($(this).val().trim() == "") {
                        $(this).parent().next().text(arr[14]).css({
                            color: "#f3bb2b",
                            transition: ".6s"
                        });
                    } else {
                        $user_password.parent().next().text("");
                    }
                });
                $confirm_password.blur(function() {
                    if ($(this).val().trim() == "") {
                        $(this).parent().next().text(arr[15]).css({
                            color: "#f3bb2b",
                            transition: ".6s"
                        });
                    } else if ($confirm_password.val() != $user_password.val()) {
                        $(this).parent().next().text(arr[16]).css({
                            color: "#f3bb2b",
                            transition: ".6s"
                        });
                    } else {
                        $confirm_password.parent().next().text("");
                    }
                });
                $confirmBtn.click(function() {
                    $confirmBtn.prop('disabled', true);
                    $confirmBtn.find('.loading').css('display', 'block');
                    var sms_code = $mail_code.val();
                    var m_pwd = $confirm_password.val();
                    if (sms_code && m_pwd && $user_account.val()) {
                        $confirmBtn.prop('disabled', 'true');
                        $confirmBtn.find('.loading').css('display', 'block');
                        var data = {
                            m_name: $user_account.val(),
                            m_pwd: m_pwd,
                            sms_code: sms_code
                        };
                        dataService.membershipService.forgotV2(data).then(function(response) {
                            if (response.state == 1) {
                                $confirmBtn.prop('disabled', false);
                                var msg_position = $.inArray('Successfully_modified', message_arr);
                                hintDialog("fa-check-circle", "#1c9547", message_dialog[msg_position]);
                                location.href = "#/login";
                            } else if (response.state == -1) {
                                $confirmBtn.prop('disabled', false);
                                getKaptcha($img_code_btn);
                                var msg_position = $.inArray(response.msg, message_arr);
                                hintDialog("fa-exclamation-circle", "#b34242", message_dialog[msg_position]);
                            }
                        });
                    } else {
                        var msg_position = $.inArray('Complete_information', message_arr);
                        hintDialog("fa-exclamation-circle", "#b34242", message_dialog[msg_position]);
                    }
                });

                function getKaptcha(code) {
                    dataService.accountService.getKaptcha().then(function(response) {
                        var imgcode = response.check_code_img;
                        var tokencode = response.check_code_token;
                        code.attr({
                            src: imgcode,
                            "data-token": tokencode
                        });
                    });
                }

                function countDownBtn($btn) {
                    var second = 60;
                    if (second > 0) {
                        second--;
                        $btn.text(second + 's');
                        $btn.prop('disabled', true);
                        $btn.addClass('forbidBtn');
                    }
                    var msgInterval = setInterval(function() {
                        if (second > 0) {
                            second--;
                            $btn.text(second + 's');
                            $btn.prop('disabled', true);
                            $btn.addClass('forbidBtn');
                        }
                        if (second == 0) {
                            clearInterval(msgInterval);
                            $btn.text(language == "en" ? "Get Code" : '获取验证码');
                            $btn.prop('disabled', false);
                            $btn.removeClass('forbidBtn');
                        }
                    }, 1000);
                }
            });
        }
    };
    var tradecenter = {
        load: function() {
            var hashsymbol = "BTCUSDT";
            var oldhashsymbol = "BTCUSDT";
            var widget = "";
            var _TVjsApi = new TVjsApi(location.hash.split('?')[0].substr(1) === '/tradecenter' ? location.hash.split('=')[1] : 'btcusdt');
            
            viewService.getTemplate("view/tradecenter.html").then(function(resHtml) {
                // $("#tv_chart_container").show();
               
                var $wrapper = $(resHtml);
                $MainView.html($wrapper);
                
                _TVjsApi.language=language;
                var hash = location.hash.split("=")[1] || '';
                if (location.hash.split('?')[0].substr(1) === '/tradecenter') {
                    $(".tradecenter").addClass("cur");
                    $(".tradecenter").siblings().removeClass("cur");
                } else {
                    $(".tradecenter").removeClass("cur");
                }
                if (hash) {
                    hashsymbol = hash;
                }
                var arr_zh = ["最新价", " 24H涨跌", "24H最高价", "24H最低价", "24H成交量", "价格",
                    " 数量",
                    "成交金额", "自选", "币种", "搜索币种", "最新交易", "时间", "交易单", "可用", "充值",
                    "买入价格", "卖出价格", "买入量", "卖出量",
                    "交易额", "买入", "卖出", "当前委托", "历史委托", "类型", "已成交", "未成交", "操作", "状态", "委托量", "成交均价", "成交价"
                ];
                var arr_en = ["Latest Price", "24H change", "24H Hight", "24H Low", "24H Volume", "Price", "Quantity",
                    "Total", "Favorites", "Currency", "Search currency", "Latest Transaction", "Time", "Transactions", "Available", "Top up", "Buying Price", "Selling Price", "Buying Volume", "Selling Volume",
                    "Transaction Amount", "Buy", "Sell", "Open Orders", "Order History", "Type", "Completed", "Uncompleted", "Operation", "Status", "Amount", "AveragePrice", "Price"
                ];
                var arr1 = language == "en" ? arr_en : arr_zh;
                
                $wrapper.find(".op-self").text(arr1[8]);
                $('<input class="uppercase" type="text" placeholder="'+arr1[10]+'">').appendTo($(".mt-search-wrap"))
                $(`<span>${arr1[9]}</span><span>${arr1[0]}</span><span>${arr1[1]}</span>`).appendTo($('.mt-sort-wrap'));
                $(`<dl class="price"><dt>${arr1[5]}<span class="uppercase">(<i></i>)</span></dt></dl>
                   <dl class="amount f-tl"><dt>${arr1[6]}<span class="uppercase">(<i></i>)</span></dt></dl>
                   <dl class="time"><dt>${arr1[12]}</dt></dl>`).appendTo($(".market-header"));
                $(`<span class="price">${arr1[5]}(<i></i>)</span>
                    <span class="num">${arr1[6]}(<i></i>)</span>
                    <span class="amount">${arr1[7]}</span>`).appendTo($(".main-header .header"))
                $wrapper.find(".price-lan").html(arr1[5]+"/<i></i>");
                $wrapper.find(".amount-lan").html(arr1[6]+"/<i></i>");
                $wrapper.find(".new_price-lan").text(arr1[0]);
                $wrapper.find(".total-lan").text(arr1[20]);
                $wrapper.find(".hign-lan").text(arr1[2]);
                $wrapper.find(".low-lan").text(arr1[3]);
                $wrapper.find(".all-lan").text(arr1[4]);
                $wrapper.find(".time-lan").text(language=="en" ? "Real time transaction":"实时成交");
                $(`<div class="tr2-c1">
                        <div class="tr2-c1-inner">
                            <div class="head f-cb">
                                <div class="f-fl entrust">
                                    <span class="cur">${arr1[23]}</span>
                                    <span>${arr1[24]}</span>
                                </div>
                            </div>
                            <div class="main">
                                <div class="main-list cur" id="currentList">
                                    <div class="head-list">
                                        <span>${arr1[12]}</span>
                                        <span>${arr1[9]}</span>
                                        <span>${arr1[25]}</span>
                                        <span>${arr1[5]}</span>
                                        <span>${arr1[26]}</span>
                                        <span>${arr1[27]}</span>
                                        <span>${arr1[28]}</span>
                                    </div>
                                    <div class="current-list list"></div>
                                </div>
                                <div class="main-list" id="historyList">
                                    <div class="head-list">
                                        <span>${arr1[12]}</span>
                                        <span>${arr1[9]}</span>
                                        <span>${arr1[25]}</span>
                                        <span>${arr1[32]}</span>
                                        <span>${arr1[26]}</span>
                                        <span>${arr1[31]}</span>
                                        <span>${arr1[29]}</span>
                                    </div>
                                    <div class="history-list list"></div>
                                </div>
                            </div>
                        </div>
                    </div>`).appendTo($("#tr2Inner"));
                     _TVjsApi.init();
                dataService.marketService.getTicker(hashsymbol).then(function(response) {

                    var baseCurrencyName = response.baseCurrencyName;
                    var quoteCurrencyName = response.quoteCurrencyName;
                    var symbol = response.symbol.toUpperCase();
                    var baseCurrencyName = response.baseCurrencyName;
                    var current_price_precision = response.pricePrecision;
                    var current_volume_precision = response.volumePrecision;
                    loadAllCurrencyName(quoteCurrencyName, baseCurrencyName);
                    userBuyInPanel(symbol, quoteCurrencyName, current_price_precision, current_volume_precision);
                    userSoldOutPanel(symbol, quoteCurrencyName, current_price_precision, current_volume_precision);
                    getCoinInfo(baseCurrencyName);
                });
                //  变换
                tradeSummary(hashsymbol);
                var loop1 = setInterval(function() {
                    window.addEventListener("hashchange", function() {
                        this.clearInterval(loop1);
                    });
                    tradeSummary(hashsymbol);
                }, 3000);
                currentEntrustPanel(hashsymbol);
                historyEntrustPanel(hashsymbol);
                tabSlider_ticker();
                tabSlider_entrust();
                depthSlider();
                
                // end

                // 卖出
                $("#pcRow2C1 .sold-out .sold-out-button").click(function() {

                    var data = {
                        "o_price_type": "limit",
                        "o_type": "sell",
                        "price": $("#pcRow2C1 .sold-out .sold-out-price input").val(),
                        "source": "web",
                        "symbol": hashsymbol.toUpperCase(),
                        "volume": $("#pcRow2C1 .sold-out .sold-out-sum input").val()
                    }
                    dataService.orderService.orderCreate(data).then(function(response) {
                        if (response.state == 1) {
                            var msg_position = $.inArray('Sell_successfully', message_arr);
                            hintDialog("fa-check-circle", "#1c9547", message_dialog[msg_position]);
                            tradeSummary(hashsymbol);
                            currentEntrustPanel(hashsymbol);
                            historyEntrustPanel(hashsymbol);

                        } else if (response.state == -1) {
                            var msg_position = $.inArray(response.msg, message_arr);
                            hintDialog("fa-exclamation-circle", "#b34242", message_dialog[msg_position]);
                            if (response.msg == 'LANG_NO_LOGIN') {
                                userLogout();
                            }
                        }
                        $("#pcRow2C1 .sold-out .sold-out-price input").val('');
                        $("#pcRow2C1 .sold-out .sold-out-sum input").val('');
                        $('#pcRow2C1 .sold-out .transfer-cny').html('');
                        removePointerCur($("#pcRow2C1 .sold-out .input-range .range .pointer"));
                        // dragbarProgress($("#pcRow2C1 .sold-out .input-range .drag_bar"), $("#pcRow2C1 .sold-out .input-range .progress"), $("#pcRow2C1 .sold-out .input-range .range"), 0);
                        $("#pcRow2C1 .sold-out .trade-total input").text(parseFloat(0).toFixed(8));
                    });
                });
                // 买入
                $("#pcRow2C1 .buy-in .buy-in-button").click(function() {
                    var data = {
                        "o_price_type": "limit",
                        "o_type": "buy",
                        "price": $("#pcRow2C1 .buy-in .buy-in-price input").val(),
                        "source": "web",
                        "symbol": hashsymbol.toUpperCase(),
                        "volume": $("#pcRow2C1 .buy-in .buy-in-sum input").val()
                    }
                    dataService.orderService.orderCreate(data).then(function(response) {
                        if (response.state == 1) {
                            tradeSummary(hashsymbol);
                            var msg_position = $.inArray('Buy_successfully', message_arr);
                            hintDialog("fa-check-circle", "#1c9547", message_dialog[msg_position]);
                            currentEntrustPanel(hashsymbol);
                            historyEntrustPanel(hashsymbol);

                        } else if (response.state == -1) {
                            var msg_position = $.inArray(response.msg, message_arr);
                            hintDialog("fa-exclamation-circle", "#b34242", message_dialog[msg_position]);
                            if (response.msg == 'LANG_NO_LOGIN') {
                                userLogout();
                            }
                        }
                        $("#pcRow2C1 .buy-in .buy-in-price input").val('');
                        $("#pcRow2C1 .buy-in .buy-in-sum input").val('');
                        $('#pcRow2C1 .buy-in .transfer-cny').html('');
                        removePointerCur($("#pcRow2C1 .buy-in .input-range .range .pointer"));
                        // dragbarProgress($("#pcRow2C1 .buy-in .input-range .drag_bar"),$("#pcRow2C1 .buy-in .input-range .progress"), $("#pcRow2C1 .buy-in .input-range .range"), 0);
                        $("#pcRow2C1 .buy-in .trade-total input").text(parseFloat(0).toFixed(8));
                    });
                });

            });
            /*kline*/

            /*kline end*/
            function sortNumber(a, b) {
                return a.order - b.order;
            }

            function getCoinInfo(baseCurrencyName) {
                dataService.marketService.getCurrencyInfo(baseCurrencyName).then(function(response) {
                    var data = response.data;
                    if (data) {
                        $('#tr3Inner .coin-intro .title').text(data.name);
                        $('#tr3Inner .coin-intro .desc').text(data.introduce_en);
                        $('#tr3Inner table .release-time').text(data.release_time);
                        $('#tr3Inner table .release-price').text(data.release_price);
                        $('#tr3Inner table .release-amount').text(data.release_amount);
                        $('#tr3Inner table .circulation').text(data.circulation_amount);
                        $('#tr3Inner table .official-website a').attr('href', data.site).text(data.site);
                        $('#tr3Inner table .white-paper a').attr('href', data.white_paper).text(data.white_paper);
                        $('#tr3Inner table .block-search a').attr('href', data.block_search).text(data.block_search);
                    }
                });
            }

            function tradeSummary(hashsymbol) {
                dataService.marketService.getSummary(hashsymbol, '1min', '0', '1', 'market').then(function(response) {
                    var ticker = response.data.ticker;
                    var current_price_precision = ticker.pricePrecision;
                    var current_volume_precision = ticker.volumePrecision;
                    var tickersMap = response.data.tickersMap;
                    var ethzc_ticker_close = 0;
                    var usdtzc_ticker_close = 0;
                    var btczc_ticker_close = 0;
                    if (tickersMap["ethusdt_ticker"]) {
                        ethzc_ticker_close = tickersMap["ethusdt_ticker"].close;
                    }
                    if (tickersMap["usdtqc_ticker"]) {
                        usdtzc_ticker_close = tickersMap["usdtqc_ticker"].close;
                    }
                    if (tickersMap["btcusdt_ticker"]) {
                        btczc_ticker_close = tickersMap["btcusdt_ticker"].close;
                    }
                    var currencyLst = "";
                    if (response.data.currencyLst) {
                        currencyLst = response.data.currencyLst;
                    }
                    var baseCurrencyName = response.data.ticker.baseCurrencyName;
                    var quoteCurrencyName = response.data.ticker.quoteCurrencyName;
                    var depth = response.data.depth;
                    var trade = response.data.trade;
                    var convertCNY;
                    if (ticker.areaId == "1") {
                        convertCNY = ticker.close;
                    } else if (ticker.areaId == "2") {
                        convertCNY = ticker.close * ethzc_ticker_close;
                    } else if (ticker.areaId == "3") {
                        convertCNY = ticker.close ;
                    }
                    var $search = $("#miniTicker .mt-search-wrap input");
                    var allTickerObj = {};
                    var allTickerArr = [];
                    for (var i in tickersMap) {
                        var tickerMapSymbol = tickersMap[i].symbol;
                        allTickerArr.push(tickerMapSymbol);
                        allTickerObj[tickerMapSymbol] = tickersMap[i];
                    }
                    dataService.marketService.getFavorite().then(function(response) {
                        var state = response.state;
                        var userFavorite = response.data;
                        $search.on('input propertychange', function() {
                            var userSearchObj = {};
                            var userSearchArr = [];
                            userSearchArr = allTickerArr.filter(item => item.indexOf($(this).val()) != -1);
                            for (var i in allTickerObj) {
                                var positionSearch = $.inArray(i, userSearchArr);
                                if (positionSearch > -1) {
                                    userSearchObj[i] = allTickerObj[i];
                                }
                            }
                            loadDataToMiniTicker(state, userSearchObj, userFavorite);
                            loadTradePanelHeader(ticker, convertCNY, ethzc_ticker_close, usdtzc_ticker_close, btczc_ticker_close, current_price_precision, current_volume_precision, userSearchObj, userFavorite);
                        });
                        if (!$search.val()) {
                            loadDataToMiniTicker(state, allTickerObj, userFavorite);
                            loadTradePanelHeader(ticker, convertCNY, ethzc_ticker_close, usdtzc_ticker_close, btczc_ticker_close, current_price_precision, current_volume_precision, allTickerObj, userFavorite);
                        }
                    });
                    var fixedBuyPrice = ticker.fixedBuyPrice;
                    $('#pcRow2C1').attr('data-fixedPrice', fixedBuyPrice);
                    if (fixedBuyPrice > 0) {
                        $("#pcRow2C1 .buy-in .buy-in-price input").val(fixedBuyPrice).trigger('input').attr('readonly', true);
                    }
                    // 顶部

                    soldOutCanUseHeader(ticker, currencyLst, baseCurrencyName);
                    buyInCanUseHeader(ticker, currencyLst, quoteCurrencyName);
                    $("#depth .transform em").text(convertCNY.toFixed(2));
                    $("#depth .sell-buy-bar-num em").text(convertCNY.toFixed(2));
                    loadDepthPanel(depth, current_price_precision, current_volume_precision);
                    currentTimeTradePanel(trade, current_price_precision, current_volume_precision);
                });
            }
            //交易自选
            function loadDataToMiniTicker(state, allTickerObj, userFavorite) {
                var userFavoriteObj = {};
                var userFavoriteArr = [];
                var $ticker_user = $("#miniUserTicker").html("");
                var $ticker_zc = $("#miniZCTicker").html("");
                var $ticker_eth = $("#miniETHTicker").html("");
                var $ticker_usdt = $("#miniUSDTTicker").html("");
                if (state == 1) {
                    for (var i = 0; i < userFavorite.length; i++) {
                        var favorSymbol = userFavorite[i].pair_dsp_name.toLowerCase();
                        if (allTickerObj[favorSymbol]) {
                            userFavoriteObj[favorSymbol] = allTickerObj[favorSymbol];
                            userFavoriteArr.push(favorSymbol);
                        }
                    }
                    for (var j in userFavoriteObj) {
                        var $dl = loadTickerAreaData(j, allTickerObj, userFavoriteArr);
                        $ticker_user.append($dl);
                    }
                }
                var all_ticker_arr = [];
                for (var j in allTickerObj) {
                    all_ticker_arr.push(allTickerObj[j]);
                    all_ticker_arr.sort(sortNumber);
                }
                for (var i = 0; i < all_ticker_arr.length; i++) {
                    var areaId = all_ticker_arr[i].areaId;
                    if (areaId == 1) {
                        var $dl = loadTickerAreaData(i, all_ticker_arr, userFavoriteArr);
                        $ticker_zc.append($dl);
                    }
                    if (areaId == 2) {
                        var $dl = loadTickerAreaData(i, all_ticker_arr, userFavoriteArr);
                        $ticker_eth.append($dl);
                    }
                    if (areaId == 3) {
                        var $dl = loadTickerAreaData(i, all_ticker_arr, userFavoriteArr);
                        $ticker_usdt.append($dl);
                    }
                }
            }

            function loadTickerAreaData(i, all_ticker_arr, userFavoriteArr) {
                var pairDspName = all_ticker_arr[i].symbol.toUpperCase();
                var lowerpairDspName = all_ticker_arr[i].symbol;
                var pricePrecision = all_ticker_arr[i].pricePrecision;
                var tickerRiseFallPercent = riseFallPercent(all_ticker_arr[i], pricePrecision);
                var isinarray = $.inArray(lowerpairDspName, userFavoriteArr);
                var $dl = $('<dl class="f-cb"></dl>').click(function() {
                    // location.href = "#/tradecenter?symbol=" + lowerpairDspName;
                    // window.location.reload(true);
                    $(this).siblings().find(".coin-unit").removeClass("cur");
                    $(this).find(".coin-unit").addClass("cur");
                    tradeSummary(lowerpairDspName);
                    hashsymbol = lowerpairDspName;
                    currentEntrustPanel(hashsymbol);
                    historyEntrustPanel(hashsymbol);
                    _TVjsApi.symbol = hashsymbol;
                    _TVjsApi.widget.chart().setSymbol(hashsymbol.toLocaleUpperCase());
                    dataService.marketService.getTicker(hashsymbol).then(function(response) {
                        var baseCurrencyName = response.baseCurrencyName;
                        var quoteCurrencyName = response.quoteCurrencyName;
                        var symbol = response.symbol.toUpperCase();
                        var baseCurrencyName = response.baseCurrencyName;
                        var current_price_precision = response.pricePrecision;
                        var current_volume_precision = response.volumePrecision;
                        loadAllCurrencyName(quoteCurrencyName, baseCurrencyName);
                        userBuyInPanel(symbol, quoteCurrencyName, current_price_precision, current_volume_precision);
                        userSoldOutPanel(symbol, quoteCurrencyName, current_price_precision, current_volume_precision);
                        getCoinInfo(baseCurrencyName);
                    });

                });
                $("<dt></dt>").appendTo($dl);
                var $dd = $("<dd></dd>").appendTo($dl);
                if( all_ticker_arr[i].symbol.toUpperCase() == hashsymbol.toUpperCase()){
                    var $coin_unit = $('<div class="coin-unit cur media-coin-unit"></div>').appendTo($dd);
                }else{
                    var $coin_unit = $('<div class="coin-unit media-coin-unit"></div>').appendTo($dd);
                }
                
                var $span = $("<span></span>").appendTo($coin_unit);
                if (isinarray >= 0) {
                    var clicktimes = 0;
                    var $star = $('<i class="fa fa-heart sc "></i>').click(function(e) {
                        e.stopPropagation();
                        clicktimes++;
                        if (clicktimes % 2 == 0) {
                            dataService.marketService.favorite(pairDspName).then(function(response) {
                                if (response.state == 1) {
                                    
                                    $star.addClass("sc");
                                    hintDialog("fa-check-circle", "#1c9547", language=="en"?"Collection":"收藏" + pairDspName + language=="en"?"Success":"成功");
                                } else {
                                    var msg_position = $.inArray(response.msg, message_arr);
                                    hintDialog("fa-exclamation-circle", "#b34242", message_dialog[msg_position]);
                                }
                            });
                        } else {
                            dataService.marketService.favoriteDel(pairDspName).then(function(response) {
                                if (response.state == 1) {
                                    
                                    $star.removeClass("sc");
                                    hintDialog("fa-check-circle", "#1c9547",language=="en"?"Cancel Collection":"取消收藏" + pairDspName + language=="en"?"Success":"成功");
                                } else {
                                    var msg_position = $.inArray(response.msg, message_arr);
                                    hintDialog("fa-exclamation-circle", "#b34242", message_dialog[msg_position]);
                                }
                            });
                        }
                    }).appendTo($span);
                } else {
                    var clicktimes = 0;
                    var $star = $('<i class="fa fa-heart"></i>').click(function(e) {
                        e.stopPropagation();
                        clicktimes++;
                        if (clicktimes % 2 == 0) {
                            dataService.marketService.favoriteDel(pairDspName).then(function(response) {
                                if (response.state == 1) {
                                    $star.removeClass("sc");
                                    hintDialog("fa-check-circle", "#1c9547", language=="en"?"Cancel Collection":"取消收藏" + pairDspName + language=="en"?"Success":"成功");
                                } else {
                                    var msg_position = $.inArray(response.msg, message_arr);
                                    hintDialog("fa-exclamation-circle", "#b34242", message_dialog[msg_position]);
                                }
                            });
                        } else {
                            dataService.marketService.favorite(pairDspName).then(function(response) {
                                if (response.state == 1) {
                                    $star.addClass("sc");
                                    hintDialog("fa-check-circle", "#1c9547", language=="en"?"Collection":"收藏" + pairDspName + language=="en"?"Success":"成功");
                                } else {
                                    var msg_position = $.inArray(response.msg, message_arr);
                                    hintDialog("fa-exclamation-circle", "#b34242", message_dialog[msg_position]);
                                }
                            });
                        }
                    }).appendTo($span);
                }
                $('<em class="base-currency"></em>').text(' ' + all_ticker_arr[i].dspName).appendTo($span);
                $('<span class="price"></span>').text(all_ticker_arr[i].close.toFixed(pricePrecision)).appendTo($coin_unit);
                if (tickerRiseFallPercent > 0) {
                    $('<span class="rate rise"></span>').text((tickerRiseFallPercent=="NaN"?0:tickerRiseFallPercent) + "%").appendTo($coin_unit);
                } else {
                    $('<span class="rate fall"></span>').text((tickerRiseFallPercent=="NaN"?0:tickerRiseFallPercent) + "%").appendTo($coin_unit);
                }
                return $dl;
            }
            //实时成交
            function currentTimeTradePanel(trade, current_price_precision, current_volume_precision) {
                var $time = $("#tr2Innerx #mtTime").html("");
                var $type = $("#tr2Innerx #mtType").html("");
                var $price = $("#tr2Innerx #mtPrice").html("");
                var $amount = $("#tr2Innerx  #mtAmount").html("");
                var buyorsell;
                for (var i = 0; i < trade.length; i++) {
                    var date = new Date(trade[i].timestamp);
                    var formatdate = formatDate(date);
                    $("<dd></dd>").text(formatdate).appendTo($time);
                    if (trade[i].taker == "buy") {

                        $("<dd class='rise'></dd>").text(trade[i].price.toFixed(current_price_precision)).appendTo($price);
                    } else {

                        $("<dd class='fall'></dd>").text(trade[i].price.toFixed(current_price_precision)).appendTo($price);
                    }

                    $("<dd></dd>").text(trade[i].volume.toFixed(current_volume_precision)).appendTo($amount);
                }
            }

            function loadAllCurrencyName(quoteCurrencyName, baseCurrencyName) {

                // 卖出
                $("#pcRow2C1 .buy-in .buy-in-price i").text(quoteCurrencyName);
                $("#pcRow2C1 .buy-in .buy-in-sum i").text(baseCurrencyName);
                $("#pcRow2C1 .buy-in .trade-total i").text(quoteCurrencyName);
                $("#pcRow2C1 .buy-in .amount_range em").text(baseCurrencyName);
                $("#pcRow2C1 .buy-in .buy-in-button i").text(baseCurrencyName);
                // 买入
                $("#pcRow2C1 .sold-out .sold-out-price i").text(quoteCurrencyName);
                $("#pcRow2C1 .sold-out .sold-out-sum i").text(baseCurrencyName);
                $("#pcRow2C1 .sold-out .trade-total i").text(quoteCurrencyName);
                $("#pcRow2C1 .sold-out .amount_range em").text(baseCurrencyName);
                $("#pcRow2C1 .sold-out .sold-out-button i").text(baseCurrencyName);
                // 深度
                $("#depth .main-header .price i").text(quoteCurrencyName);
                $("#depth .main-header .num i").text(baseCurrencyName);
                $("#depth .main-header .amount i").text(baseCurrencyName);
                // 实时成交
                $("#tr2Innerx .market-header .price i").text(quoteCurrencyName);
                $("#tr2Innerx .market-header .amount i").text(baseCurrencyName);
            }

            function userSoldOutPanel(symbol, quoteCurrencyName, current_price_precision, current_volume_precision) {
                var state = JSON.parse(sessionStorage.getItem('loginState'));
                var $soldout_price_input = $("#pcRow2C1 .sold-out .sold-out-price input");
                var $soldout_volume_input = $("#pcRow2C1 .sold-out .sold-out-sum input");
                var $drag_bar = $("#pcRow2C1 .sold-out .input-range .drag_bar");
                var $drag_track = $("#pcRow2C1 .sold-out .input-range .drag_track");
                var $progress = $("#pcRow2C1 .sold-out .input-range .progress");
                var $range = $("#pcRow2C1 .sold-out .input-range .range");
                var $pointer = $("#pcRow2C1 .sold-out .input-range .range .pointer");
                var $max_num = $('#pcRow2C1 .sold-out .amount_range .max_num').text(parseFloat(0).toFixed(4));
                var $sold_out_trade_total = $("#pcRow2C1 .sold-out .trade-total input").val(parseFloat(0).toFixed(8));
                var $soldout_button = $("#pcRow2C1 .sold-out .sold-out-button");
                var $transfer_cny = $('#pcRow2C1 .sold-out .transfer-cny');

                var candrag = false;
                var left = 0;
                var ox;
                var drag_bar_position;
                $soldout_price_input.on('input propertychange', function () {
                    inputNumberFilter(this, current_price_precision, 0);
                    var usdtcny = parseFloat($('#chartHeader span.dspName').attr('data-usdtcny'));
                    var ethcny = parseFloat($('#chartHeader span.dspName').attr('data-ethcny'));
                    var balance = parseFloat($('#soldOutCanUse em').attr('data-asset'));
                    var inputVal = $(this).val();
                    var volumeVal = $soldout_volume_input.val();
                    var convertedval;
                    if (quoteCurrencyName == 'USDT') {
                        convertedval = parseFloat(inputVal);
                    } else if (quoteCurrencyName == 'ETH') {
                        convertedval = parseFloat(inputVal * ethcny);
                    // } else if (quoteCurrencyName == 'QC') {
                    //      convertedval = parseFloat(inputVal);
                    }
                    if (convertedval > 0) {
                        $transfer_cny.html('').append(`<span>≈ ${convertedval.toFixed(2)} USDT</span>`);
                    } else {
                        $transfer_cny.html('');
                    }
                    if (inputVal && state) {
                        var cutnum = cutNum(balance, 4);
                        $max_num.text(cutnum);
                        if (volumeVal) {
                            var rightVal = parseFloat($max_num.text());
                            var divideVal = volumeVal / rightVal;
                            if (divideVal > 1) {
                                drag_bar_position = 1;
                            } else {
                                drag_bar_position = divideVal;
                            }
                            dragbarProgress($drag_bar, $progress, $range, drag_bar_position);
                            judgeDragbarPointer(divideVal, $pointer);
                            $sold_out_trade_total.val((volumeVal * inputVal).toFixed(8));
                            left = $drag_bar.position().left;
                        }
                        $drag_bar.mousedown(function (e) {
                            ox = e.pageX - left;
                            candrag = true;
                        });
                        $(document).mouseup(function () {
                            candrag = false;
                        });
                        $range.mousemove(function (e) {
                            if (candrag) {
                                left = e.pageX - ox;
                                var divideVal = left / $range.width();
                                if (divideVal <= 0) {
                                    drag_bar_position = 0;
                                    $soldout_volume_input.val('');
                                } else if (divideVal >= 1) {
                                    drag_bar_position = 1;
                                    $soldout_volume_input.val(($max_num.text() * drag_bar_position).toFixed(current_volume_precision));
                                } else {
                                    drag_bar_position = divideVal;
                                    $soldout_volume_input.val(($max_num.text() * drag_bar_position).toFixed(current_volume_precision));
                                }
                                dragbarProgress($drag_bar, $progress, $range, drag_bar_position);
                                judgeDragbarPointer(divideVal, $pointer);
                                $sold_out_trade_total.val(($soldout_volume_input.val() * $soldout_price_input.val()).toFixed(8));
                            }
                        });
                        $drag_track.click(function (e) {
                            if (!candrag) {
                                left = e.pageX - $(this).offset().left;
                                var divideVal = left / $range.width();
                                drag_bar_position = divideVal;
                                $soldout_volume_input.val(($max_num.text() * drag_bar_position).toFixed(current_volume_precision));
                                judgeDragbarPointer(divideVal, $pointer);
                                dragbarProgress($drag_bar, $progress, $range, drag_bar_position);
                                $sold_out_trade_total.val(($soldout_volume_input.val() * $soldout_price_input.val()).toFixed(8));
                            }
                        });
                        $pointer.each(function () {
                            $(this).click(function () {
                                if ($(this).index() == 2) {
                                    left = 0;
                                    $soldout_volume_input.val('');
                                    judgeDragbarPointer(0, $pointer);
                                    dragbarProgress($drag_bar, $progress, $range, 0);
                                    $sold_out_trade_total.val(($soldout_volume_input.val() * $soldout_price_input.val()).toFixed(8));
                                } else if ($(this).index() == 3) {
                                    left = $range.width() * 0.25;
                                    $soldout_volume_input.val(($max_num.text() * 0.25).toFixed(current_volume_precision));
                                    judgeDragbarPointer(0.25, $pointer);
                                    dragbarProgress($drag_bar, $progress, $range, 0.25);
                                    $sold_out_trade_total.val(($soldout_volume_input.val() * $soldout_price_input.val()).toFixed(8));
                                } else if ($(this).index() == 4) {
                                    left = $range.width() * 0.5;
                                    $soldout_volume_input.val(($max_num.text() * 0.5).toFixed(current_volume_precision));
                                    judgeDragbarPointer(0.5, $pointer);
                                    dragbarProgress($drag_bar, $progress, $range, 0.5);
                                    $sold_out_trade_total.val(($soldout_volume_input.val() * $soldout_price_input.val()).toFixed(8));
                                } else if ($(this).index() == 5) {
                                    left = $range.width() * 0.75;
                                    $soldout_volume_input.val(($max_num.text() * 0.75).toFixed(current_volume_precision));
                                    judgeDragbarPointer(0.75, $pointer);
                                    dragbarProgress($drag_bar, $progress, $range, 0.75);
                                    $sold_out_trade_total.val(($soldout_volume_input.val() * $soldout_price_input.val()).toFixed(8));
                                } else if ($(this).index() == 6) {
                                    left = $range.width();
                                    $soldout_volume_input.val(($max_num.text() * 1).toFixed(current_volume_precision));
                                    judgeDragbarPointer(1, $pointer);
                                    dragbarProgress($drag_bar, $progress, $range, 1);
                                    $sold_out_trade_total.val(($soldout_volume_input.val() * $soldout_price_input.val()).toFixed(8));
                                }
                            });
                        });
                    } else {
                        $max_num.text(parseFloat(0).toFixed(4));
                        removePointerCur($pointer);
                        dragbarProgress($drag_bar, $progress, $range, 0);
                        $sold_out_trade_total.val(parseFloat(0).toFixed(8));
                        left = 0;
                    }
                });
                $soldout_volume_input.on('input propertychange', function () {
                    inputNumberFilter(this, 0, current_volume_precision);
                    var inputVal = $(this).val();
                    var priceVal = $soldout_price_input.val();
                    var rightVal = parseFloat($max_num.text());
                    if (inputVal && priceVal && rightVal > 0) {
                        var divideVal = inputVal / rightVal;
                        if (divideVal > 1) {
                            drag_bar_position = 1;
                        } else {
                            drag_bar_position = divideVal;
                        }
                        dragbarProgress($drag_bar, $progress, $range, drag_bar_position);
                        judgeDragbarPointer(divideVal, $pointer);
                        $sold_out_trade_total.val((priceVal * inputVal).toFixed(8));
                        left = $drag_bar.position().left;
                    } else {
                        removePointerCur($pointer);
                        dragbarProgress($drag_bar, $progress, $range, 0);
                        $sold_out_trade_total.val(parseFloat(0).toFixed(8));
                        left = 0;
                    }
                });
                // $soldout_button.click(function () {
                //     var data = {
                //         "o_price_type": "limit",
                //         "o_type": "sell",
                //         "price": $soldout_price_input.val(),
                //         "source": "web",
                //         "symbol": symbol,
                //         "volume": $soldout_volume_input.val()
                //     }
                //     dataService.orderService.orderCreate(data).then(function (response) {
                //         if (response.state == 1) {
                //             hintDialog("fa-check-circle", "#1c9547", "卖出成功");
                //             currentEntrustPanel(symbol);
                //             historyEntrustPanel(symbol);
                //             tradeSummary(symbol);
                //         } else if (response.state == -1) {
                //             var msg_position = $.inArray(response.msg, message_arr);
                //             hintDialog("fa-exclamation-circle", "#b34242", message_arr_zh[msg_position]);
                //             if (response.msg == 'LANG_NO_LOGIN') {
                //                 userLogout();
                //             }
                //         }
                //         $soldout_price_input.val('');
                //         $soldout_volume_input.val('');
                //         $transfer_cny.html('');
                //         $max_num.text(parseFloat(0).toFixed(current_price_precision));
                //         removePointerCur($pointer);
                //         dragbarProgress($drag_bar, $progress, $range, 0);
                //         $sold_out_trade_total.val(parseFloat(0).toFixed(8));
                //     });
                // });

            }

            function userBuyInPanel(symbol, quoteCurrencyName, current_price_precision, current_volume_precision) {
                var candrag = false;
                var left = 0;
                var ox;
                var drag_bar_position;
                var state = JSON.parse(sessionStorage.getItem('loginState'));
                var $buyin_price_input = $("#pcRow2C1 .buy-in .buy-in-price input");
                var $buyin_volume_input = $("#pcRow2C1 .buy-in .buy-in-sum input");
                var $drag_bar = $("#pcRow2C1 .buy-in .input-range .drag_bar");
                var $drag_track = $("#pcRow2C1 .buy-in .input-range .drag_track");
                var $progress = $("#pcRow2C1 .buy-in .input-range .progress");
                var $range = $("#pcRow2C1 .buy-in .input-range .range");
                var $pointer = $("#pcRow2C1 .buy-in .input-range .range .pointer");
                var $max_num = $('#pcRow2C1 .buy-in .amount_range .max_num').text(parseFloat(0).toFixed(4));
                var $buyin_trade_total = $("#pcRow2C1 .buy-in .trade-total input").val(parseFloat(0).toFixed(8));
                var $buyin_button = $("#pcRow2C1 .buy-in .buy-in-button");
                var $transfer_cny = $('#pcRow2C1 .buy-in .transfer-cny');

                $buyin_price_input.on('input propertychange', function () {
                    // console.log(quoteCurrencyName)
                    inputNumberFilter(this, current_price_precision, 0);
                    var usdtcny = parseFloat($('#chartHeader span.dspName').attr('data-usdtcny'));
                    var ethcny = parseFloat($('#chartHeader span.dspName').attr('data-ethcny'));
                    var balance = parseFloat($('#buyInCanUse em').attr('data-asset'));
                    var inputVal = parseFloat($(this).val());
                    var volumeVal = $buyin_volume_input.val();
                    var convertedval;
                    if (quoteCurrencyName == 'USDT') {
                        convertedval = parseFloat(inputVal);
                    } else if (quoteCurrencyName == 'ETH') {
                        convertedval = parseFloat(inputVal * ethcny);
                    // } else if (quoteCurrencyName == 'QC') {
                    //     convertedval = parseFloat(inputVal);
                    }
                    if (convertedval > 0) {
                        $transfer_cny.html('').append(`<span>≈ ${convertedval.toFixed(2)} USDT</span>`);
                    } else {
                        $transfer_cny.html('');
                    }
                    if (inputVal && state) {
                        var cutnum = cutNum(balance / inputVal, 4);
                        $max_num.text(cutnum);
                        if (volumeVal) {
                            var rightVal = parseFloat($max_num.text());
                            var divideVal = volumeVal / rightVal;
                            if (divideVal > 1) {
                                drag_bar_position = 1;
                            } else {
                                drag_bar_position = divideVal;
                            }
                            dragbarProgress($drag_bar, $progress, $range, drag_bar_position);
                            judgeDragbarPointer(divideVal, $pointer);
                            $buyin_trade_total.val((volumeVal * inputVal).toFixed(8));
                            left = $drag_bar.position().left;
                        }
                        $drag_bar.mousedown(function (e) {
                            ox = e.pageX - left;
                            candrag = true;
                        });
                        $(document).mouseup(function () {
                            candrag = false;
                        });
                        $range.mousemove(function (e) {
                            if (candrag) {
                                left = e.pageX - ox;
                                var divideVal = left / $range.width();
                                if (divideVal <= 0) {
                                    drag_bar_position = 0;
                                    $buyin_volume_input.val('');
                                } else if (divideVal >= 1) {
                                    drag_bar_position = 1;
                                    $buyin_volume_input.val(($max_num.text() * drag_bar_position).toFixed(current_volume_precision));
                                } else {
                                    drag_bar_position = divideVal;
                                    $buyin_volume_input.val(($max_num.text() * drag_bar_position).toFixed(current_volume_precision));
                                }
                                dragbarProgress($drag_bar, $progress, $range, drag_bar_position);
                                judgeDragbarPointer(divideVal, $pointer);
                                $buyin_trade_total.val(($buyin_volume_input.val() * $buyin_price_input.val()).toFixed(8));
                            }
                        });
                        $drag_track.click(function (e) {
                            if (!candrag) {
                                left = e.pageX - $(this).offset().left;
                                var divideVal = left / $range.width();
                                drag_bar_position = divideVal;
                                $buyin_volume_input.val(($max_num.text() * drag_bar_position).toFixed(current_volume_precision));
                                judgeDragbarPointer(divideVal, $pointer);
                                dragbarProgress($drag_bar, $progress, $range, drag_bar_position);
                                $buyin_trade_total.val(($buyin_volume_input.val() * $buyin_price_input.val()).toFixed(8));
                            }
                        });
                        $pointer.each(function () {
                            $(this).click(function () {
                                if ($(this).index() == 2) {
                                    left = 0;
                                    $buyin_volume_input.val('');
                                    judgeDragbarPointer(0, $pointer);
                                    dragbarProgress($drag_bar, $progress, $range, 0);
                                    $buyin_trade_total.val(($buyin_volume_input.val() * $buyin_price_input.val()).toFixed(8));
                                } else if ($(this).index() == 3) {
                                    left = $range.width() * 0.25;
                                    $buyin_volume_input.val(($max_num.text() * 0.25).toFixed(current_volume_precision));
                                    judgeDragbarPointer(0.25, $pointer);
                                    dragbarProgress($drag_bar, $progress, $range, 0.25);
                                    $buyin_trade_total.val(($buyin_volume_input.val() * $buyin_price_input.val()).toFixed(8));
                                } else if ($(this).index() == 4) {
                                    left = $range.width() * 0.5;
                                    $buyin_volume_input.val(($max_num.text() * 0.5).toFixed(current_volume_precision));
                                    judgeDragbarPointer(0.5, $pointer);
                                    dragbarProgress($drag_bar, $progress, $range, 0.5);
                                    $buyin_trade_total.val(($buyin_volume_input.val() * $buyin_price_input.val()).toFixed(8));
                                } else if ($(this).index() == 5) {
                                    left = $range.width() * 0.75;
                                    $buyin_volume_input.val(($max_num.text() * 0.75).toFixed(current_volume_precision));
                                    judgeDragbarPointer(0.75, $pointer);
                                    dragbarProgress($drag_bar, $progress, $range, 0.75);
                                    $buyin_trade_total.val(($buyin_volume_input.val() * $buyin_price_input.val()).toFixed(8));
                                } else if ($(this).index() == 6) {
                                    left = $range.width();
                                    $buyin_volume_input.val(($max_num.text() * 1).toFixed(current_volume_precision));
                                    judgeDragbarPointer(1, $pointer);
                                    dragbarProgress($drag_bar, $progress, $range, 1);
                                    $buyin_trade_total.val(($buyin_volume_input.val() * $buyin_price_input.val()).toFixed(8));
                                }
                            });
                        });
                    } else {
                        $max_num.text(parseFloat(0).toFixed(4));
                        removePointerCur($pointer);
                        dragbarProgress($drag_bar, $progress, $range, 0);
                        $buyin_trade_total.val(parseFloat(0).toFixed(8));
                        left = 0;
                    }
                });
                $buyin_volume_input.on('input propertychange', function () {
                    inputNumberFilter(this, 0, current_volume_precision);
                    var inputVal = $(this).val();
                    var priceVal = $buyin_price_input.val();
                    var rightVal = parseFloat($max_num.text());
                    if (inputVal && priceVal && rightVal > 0) {
                        var divideVal = inputVal / rightVal;
                        if (divideVal > 1) {
                            drag_bar_position = 1;
                        } else {
                            drag_bar_position = divideVal;
                        }
                        dragbarProgress($drag_bar, $progress, $range, drag_bar_position);
                        judgeDragbarPointer(divideVal, $pointer);
                        $buyin_trade_total.val((priceVal * inputVal).toFixed(8));
                        left = $drag_bar.position().left;
                    } else {
                        removePointerCur($pointer);
                        dragbarProgress($drag_bar, $progress, $range, 0);
                        $buyin_trade_total.val(parseFloat(0).toFixed(8));
                        left = 0;
                    }
                });
                // $buyin_button.click(function () {
                //     var data = {
                //         "o_price_type": "limit",
                //         "o_type": "buy",
                //         "price": $buyin_price_input.val(),
                //         "source": "web",
                //         "symbol": symbol,
                //         "volume": $buyin_volume_input.val()
                //     }
                //     dataService.orderService.orderCreate(data).then(function (response) {
                //         if (response.state == 1) {
                //             hintDialog("fa-check-circle", "#1c9547", "买入成功");
                //             currentEntrustPanel(symbol);
                //             historyEntrustPanel(symbol);
                //             tradeSummary(symbol);
                //         } else if (response.state == -1) {
                //             var msg_position = $.inArray(response.msg, message_arr);
                //             hintDialog("fa-exclamation-circle", "#b34242", message_arr_zh[msg_position]);
                //             if (response.msg == 'LANG_NO_LOGIN') {
                //                 userLogout();
                //             }
                //         }
                //         $buyin_price_input.val('');
                //         $buyin_volume_input.val('');
                //         $transfer_cny.html('');
                //         $max_num.text(parseFloat(0).toFixed(current_price_precision));
                //         removePointerCur($pointer);
                //         dragbarProgress($drag_bar, $progress, $range, 0);
                //         $buyin_trade_total.val(parseFloat(0).toFixed(8));
                //     });
                // });
            }

            function soldOutCanUseHeader(ticker, currencyLst, baseCurrencyName) {
                var state = JSON.parse(sessionStorage.getItem('loginState'));
                var $soldOutCanUse = $('#soldOutCanUse').html('');
                var baseCurrencyNameArr = [];
                var a_zh = ["净资产折合", "可用", "充值"];
                var a_en = ["Net Asset Conversion", "Available", "Top up"];
                var a_e_z = language == "en" ? a_en : a_zh;
                if (state) {
                    var btcprice = parseFloat($('#chartHeader .dspName').attr('data-btccny'));
                    var userJC = 0;
                    var userBTC = 0;
                    for (var i = 0; i < currencyLst.length; i++) {
                        baseCurrencyNameArr.push(currencyLst[i].currency);
                        userJC += currencyLst[i].zc_balance;
                    }
                    userBTC = parseFloat((userJC / btcprice).toFixed(6));
                    var position = $.inArray(baseCurrencyName, baseCurrencyNameArr);
                    var balance;
                    if (position >= 0) {
                        balance = currencyLst[position].balance;
                    } else {
                        balance = 0;
                    }
                    $('#Estimate img').hide();
                    var $estimate = $('#Estimate').html('');

                    $('<span class="title">' + a_e_z[0] + '</span>').appendTo($estimate);
                    $('<i class="fa fa-eye"></i>').appendTo($estimate);
                    var $span = $('<span></span>').appendTo($estimate);
                    $(`<em>${userBTC} BTC</em> ≈ <em>${userJC.toFixed(2)} USDT</em>`).appendTo($span);
                } else {
                    $('#Estimate').html('').append('<img src="../images/102949860720420668.png" alt="">');
                }
                $soldOutCanUse.append(`<span class="f-fl">${a_e_z[1]}<em class="uppercase" data-asset="${balance?balance:0}">${ state && position >= 0 ? balance : 0}</em> ${baseCurrencyName}</span>`);
                if (state && ticker.canRecharge) {
                    $(`<a class="f-fr" href="#/recharge?currency=${baseCurrencyName}">${a_e_z[2]}</a>`).css('color', '#01bd8f').appendTo($soldOutCanUse);
                } else {
                    $('<span class="f-fr">' + a_e_z[2] + '</span>').appendTo($soldOutCanUse);
                }
            }

            function buyInCanUseHeader(ticker, currencyLst, quoteCurrencyName) {
                var state = JSON.parse(sessionStorage.getItem('loginState'));
                var $buyInCanUse = $('#buyInCanUse').html('');
                var quoteCurrencyNameArr = [];
                var a_zh = ["净资产折合", "可用", "充值"];
                var a_en = ["Net Asset Conversion", "Available", "Top up"];
                var a_e_z = language == "en" ? a_en : a_zh;
                if (state) {
                    for (var i = 0; i < currencyLst.length; i++) {
                        quoteCurrencyNameArr.push(currencyLst[i].currency);
                    }
                    var position = $.inArray(quoteCurrencyName, quoteCurrencyNameArr);
                    var balance;
                    if (position >= 0) {
                        balance = currencyLst[position].balance;
                    } else {
                        balance = 0;
                    }
                }

                $buyInCanUse.append(`<span class="f-fl">${a_e_z[1]} <em class="uppercase" data-asset="${balance?balance:0}">${ state && position >= 0 ? balance : 0}</em> ${quoteCurrencyName}</span>`);
                if (state && ticker.canRecharge) {
                    $(`<a class="f-fr" href="#/recharge?currency=${quoteCurrencyName}">${a_e_z[2]} </a>`).css('color', '#01bd8f').appendTo($buyInCanUse);
                } else {
                    $('<span class="f-fr">' + a_e_z[2] + '</span>').appendTo($buyInCanUse);
                }
            }

            function loadDepthPanel(depth, current_price_precision, current_volume_precision) {
                var depth_bids_arr = depth.bids;
                var depth_asks_arr = depth.asks;
                depthBuyPanel(depth_bids_arr, current_price_precision, current_volume_precision);
                depthSellPanel(depth_asks_arr, current_price_precision, current_volume_precision);
            }

            function depthSellPanel(depth_asks_arr, current_price_precision, current_volume_precision) {
                var $sell_bar = $("#depth #sellBar").html('');
                var $sell_bar1 = $("#depth #sellBar1").html('');
                var sellAmount = 0;
                var sellAmountArr = [];
                var sellVolumeArr = [];
                var sellVolumeDivideArr = [];
                var sellAmount1 = 0;
                var sellAmountArr1 = [];
                var sellVolumeArr1 = [];
                var sellVolumeDivideArr1 = [];
                var price, volume, amount, backgroundWidth;
                var depthAsksArrLength = depth_asks_arr.length >= 14 ? 14 : depth_asks_arr.length;
                var depthAsksArrLength1 = depth_asks_arr.length;
                for (var i = 0; i < depthAsksArrLength; i++) {
                    sellVolumeArr.push(depth_asks_arr[i][1]);
                }
                var maxVolume = Math.max.apply(null, sellVolumeArr);
                for (var j = 0; j < sellVolumeArr.length; j++) {
                    sellAmount += sellVolumeArr[j];
                    sellAmountArr.push(sellAmount.toFixed(current_volume_precision));
                    sellVolumeDivideArr.push((sellVolumeArr[j] * 100 / maxVolume).toFixed(0) + '%');
                }

                for (var i = 0; i < depthAsksArrLength1; i++) {
                    sellVolumeArr1.push(depth_asks_arr[i][1]);
                }
                var maxVolume1 = Math.max.apply(null, sellVolumeArr1);
                for (var j = 0; j < sellVolumeArr1.length; j++) {
                    sellAmount1 += sellVolumeArr1[j];
                    sellAmountArr1.push(sellAmount1.toFixed(current_volume_precision));
                    sellVolumeDivideArr1.push((sellVolumeArr1[j] * 100 / maxVolume1).toFixed(0) + '%');
                }

                for (var k = depthAsksArrLength - 1; k >= 0; k--) {
                    price = depth_asks_arr[k][0].toFixed(current_price_precision);
                    volume = depth_asks_arr[k][1].toFixed(current_volume_precision);
                    amount = sellAmountArr[k];
                    backgroundWidth = sellVolumeDivideArr[k];
                    loadDataToDepthSellPanel(k, $sell_bar, $sell_bar1, price, volume, amount, backgroundWidth, 1);
                }
                for (var k = depthAsksArrLength1 - 1; k >= 0; k--) {
                    price = depth_asks_arr[k][0].toFixed(current_price_precision);

                    volume = depth_asks_arr[k][1].toFixed(current_volume_precision);
                    amount = sellAmountArr1[k];
                    backgroundWidth = sellVolumeDivideArr1[k];
                    loadDataToDepthSellPanel(k, $sell_bar, $sell_bar1, price, volume, amount, backgroundWidth, 2);
                }
            }

            function depthBuyPanel(depth_bids_arr, current_price_precision, current_volume_precision) {
                var $buy_bar = $("#depth #buyBar").html('');
                var $buy_bar1 = $("#depth #buyBar1").html('');
                var buyAmount = 0;
                var buyAmountArr = [];
                var buyVolumeArr = [];
                var buyVolumeDivideArr = [];
                var buyAmount1 = 0;
                var buyAmountArr1 = [];
                var buyVolumeArr1 = [];
                var buyVolumeDivideArr1 = [];
                var price, volume, amount, backgroundWidth;
                var depthBidsArrLength = depth_bids_arr.length >=14 ? 14:depth_bids_arr.length ;
                var depthBidsArrLength1 = depth_bids_arr.length;

                for (var i = 0; i < depthBidsArrLength; i++) {
                    buyVolumeArr.push(depth_bids_arr[i][1]);
                }
                var maxVolume = Math.max.apply(null, buyVolumeArr);
                for (var j = 0; j < buyVolumeArr.length; j++) {
                    buyAmount += buyVolumeArr[j];
                    buyAmountArr.push(buyAmount.toFixed(current_volume_precision));
                    buyVolumeDivideArr.push((buyVolumeArr[j] * 100 / maxVolume).toFixed(0) + '%');
                }

                for (var i = 0; i < depthBidsArrLength1; i++) {
                    buyVolumeArr1.push(depth_bids_arr[i][1]);
                }
                var maxVolume1 = Math.max.apply(null, buyVolumeArr1);
                for (var j = 0; j < buyVolumeArr1.length; j++) {
                    buyAmount1 += buyVolumeArr1[j];
                    buyAmountArr1.push(buyAmount1.toFixed(current_volume_precision));
                    buyVolumeDivideArr1.push((buyVolumeArr1[j] * 100 / maxVolume1).toFixed(0) + '%');
                }

                for (var k = 0; k < depthBidsArrLength; k++) {
                    price = depth_bids_arr[k][0].toFixed(current_price_precision);
                    volume = depth_bids_arr[k][1].toFixed(current_volume_precision);
                    amount = buyAmountArr[k];
                    backgroundWidth = buyVolumeDivideArr[k];
                    loadDataToDepthBuyPanel(k, $buy_bar, $buy_bar1, price, volume, amount, backgroundWidth, 1);
                }
                for (var k = 0; k < depthBidsArrLength1; k++) {
                    price = depth_bids_arr[k][0].toFixed(current_price_precision);
                    volume = depth_bids_arr[k][1].toFixed(current_volume_precision);
                    amount = buyAmountArr1[k];
                    backgroundWidth = buyVolumeDivideArr1[k];
                    loadDataToDepthBuyPanel(k, $buy_bar, $buy_bar1, price, volume, amount, backgroundWidth, 2);
                }
            }

            function loadDataToDepthSellPanel(k, $sell_bar, $sell_bar1, price, volume, amount, backgroundWidth, num) {
                if (num == 2) {
                    var $dd = $("<dd></dd>").appendTo($sell_bar).click(function() {
                        var fixedBuyPrice = $('#pcRow2C1').attr('data-fixedPrice');
                        if (fixedBuyPrice == 0) {
                            $('#pcRow2C1 .buy-in .buy-in-price input').val(price).trigger('input');
                        }
                        $('#pcRow2C1 .sold-out .sold-out-price input').val(price).trigger('input');
                    });
                    var $inner = $('<div class="inner"></div>').appendTo($dd);
                    // $('<span class="type"></span>').text("卖" + (k + 1)).appendTo($inner);
                    $('<span class="price fall"></span>').text(price).appendTo($inner);
                    $('<span class="num"></span>').text(volume).appendTo($inner);
                    $('<span class="amount f-fr"></span>').text(amount).appendTo($inner);
                    $('<span class="bg-dd-red"></span>').css("width", backgroundWidth).appendTo($inner);
                } else if (num == 1) {
                    var $dd1 = $("<dd></dd>").appendTo($sell_bar1).click(function() {
                        var fixedBuyPrice = $('#pcRow2C1').attr('data-fixedPrice');
                        if (fixedBuyPrice == 0) {
                            $('#pcRow2C1 .buy-in .buy-in-price input').val(price).trigger('input');
                        }
                        $('#pcRow2C1 .sold-out .sold-out-price input').val(price).trigger('input');
                    });
                    var $inner1 = $('<div class="inner"></div>').appendTo($dd1);
                    // $('<span class="type"></span>').text("卖" + (k + 1)).appendTo($inner);
                    $('<span class="price fall"></span>').text(price).appendTo($inner1);
                    $('<span class="num"></span>').text(volume).appendTo($inner1);
                    $('<span class="amount f-fr"></span>').text(amount).appendTo($inner1);
                    $('<span class="bg-dd-red"></span>').css("width", backgroundWidth).appendTo($inner1);
                }
            }

            function loadDataToDepthBuyPanel(k, $buy_bar, $buy_bar1, price, volume, amount, backgroundWidth, num) {
                if (num == 1) {
                    var $dd1 = $("<dd></dd>").appendTo($buy_bar1).click(function() {
                        var fixedBuyPrice = $('#pcRow2C1').attr('data-fixedPrice');
                        if (fixedBuyPrice == 0) {
                            $('#pcRow2C1 .buy-in .buy-in-price input').val(price).trigger('input');
                        }
                        $('#pcRow2C1 .sold-out .sold-out-price input').val(price).trigger('input');
                    });
                    var $inner1 = $('<div class="inner"></div>').appendTo($dd1);
                    // $('<span class="type"></span>').text("买" + (k + 1)).appendTo($inner);
                    $('<span class="price rise"></span>').text(price).appendTo($inner1);
                    $('<span class="num"></span>').text(volume).appendTo($inner1);
                    $('<span class="amount f-fr"></span>').text(amount).appendTo($inner1);
                    $('<span class="bg-dd-green"></span>').css("width", backgroundWidth).appendTo($inner1);
                } else if (num == 2) {
                    var $dd = $("<dd></dd>").appendTo($buy_bar).click(function() {
                        var fixedBuyPrice = $('#pcRow2C1').attr('data-fixedPrice');
                        if (fixedBuyPrice == 0) {
                            $('#pcRow2C1 .buy-in .buy-in-price input').val(price).trigger('input');
                        }
                        $('#pcRow2C1 .sold-out .sold-out-price input').val(price).trigger('input');
                    });
                    var $inner = $('<div class="inner"></div>').appendTo($dd);
                    // $('<span class="type"></span>').text("买" + (k + 1)).appendTo($inner);
                    $('<span class="price rise"></span>').text(price).appendTo($inner);
                    $('<span class="num"></span>').text(volume).appendTo($inner);
                    $('<span class="amount f-fr"></span>').text(amount).appendTo($inner);
                    $('<span class="bg-dd-green"></span>').css("width", backgroundWidth).appendTo($inner);
                }


            }

            function historyEntrustPanel(symbol) {
                dataService.orderService.getOrdersI(symbol, "1", "1").then(function(response) {
                    if (response.state == 1) {
                        var orders = response.orders;
                        var $list = $('#historyList .history-list').html('');
                        for (var i = 0; i < orders.length; i++) {
                            loadDataToHistoryEntrustPanel(orders, i, $list);
                        }
                    }
                });
            }

            function currentEntrustPanel(symbol) {
                dataService.orderService.getOrdersI(symbol, "1", "0").then(function(response) {
                    if (response.state == 1) {
                        var orders = response.orders;
                        var $list = $('#currentList .current-list').html('');
                        for (var i = 0; i < orders.length; i++) {
                            loadDataToCurrentEntrustPanel(orders, i, $list);
                        }
                    }
                });
            }

            function formatDate(ts) {
                var hour = ts.getHours();
                var minute = ts.getMinutes();
                var second = ts.getSeconds();
                hour = hour < 10 ? "0" + hour : hour;
                minute = minute < 10 ? "0" + minute : minute;
                second = second < 10 ? "0" + second : second;
                return hour + " : " + minute + " : " + second;
            }

            function loadDataToHistoryEntrustPanel(orders, i, $list) {
                var status;
                var arr_z = ["买入", " 卖出 ", " 成交 ", " 撤单 ", "部分成交撤单"];
                var arr_e = ["Buy", "Sell", "Complete", "Withdrawal", "Partial Deal Withdrawal"];
                var arr_ez = language == "en" ? arr_e : arr_z;
                if (orders[i].o_status == "done") {
                    status = arr_ez[2];
                } else if (orders[i].o_status == "canceled") {
                    status = arr_ez[3];
                } else if (orders[i].o_status == "partial-canceled") {
                    status = arr_ez[4];
                }
                var $dl = $("<dl></dl>").appendTo($list);
                var $dd = $("<dd></dd>").appendTo($dl);
                $("<span></span>").text(orders[i].create_time).appendTo($dd);
                $("<span></span>").text(`${orders[i].base_currency}/${orders[i].quote_currency}`).appendTo($dd);
                if (orders[i].o_type == "buy") {
                    var type = arr_ez[0];
                    $('<span class="rise"></span>').text(type).appendTo($dd);
                } else {
                    var type = arr_ez[1];
                    $('<span class="fall"></span>').text(type).appendTo($dd);
                }
                $("<span></span>").text(orders[i].price).appendTo($dd);
                // $("<span></span>").text(orders[i].volume).appendTo($dd);
                $("<span></span>").text(orders[i].done_volume).appendTo($dd);
                $("<span></span>").text(orders[i].done_avg_price).appendTo($dd);
                $("<span></span>").text(status).appendTo($dd);
            }

            function loadDataToCurrentEntrustPanel(orders, i, $list) {
                var $dl = $("<dl></dl>").appendTo($list);
                var $dd = $("<dd></dd>").appendTo($dl);
                $("<span></span>").text(orders[i].create_time).appendTo($dd);
                $("<span></span>").text(`${orders[i].base_currency}/${orders[i].quote_currency}`).appendTo($dd);
                if (orders[i].o_type == "buy") {
                    var type = language == "en" ? "Buy" : "买入";
                    $('<span class="buy rise"></span>').text(type).appendTo($dd);
                } else {
                    var type = language == "en" ? "Sell" : "卖出";
                    $('<span class="buy fall"></span>').text(type).appendTo($dd);
                }
                $("<span></span>").text(orders[i].price).appendTo($dd);
                // $("<span></span>").text(orders[i].volume).appendTo($dd);
                // $("<span></span>").text((orders[i].price * orders[i].volume).toFixed(4)).appendTo($dd);
                $("<span></span>").text(orders[i].done_volume).appendTo($dd);
                $("<span></span>").text((orders[i].volume - orders[i].done_volume).toFixed(4)).appendTo($dd);
                $("<span>撤销</span>").click(function(e) {
                    e.stopPropagation();
                    var id = orders[i].id;
                    var no = orders[i].o_no;
                    var symbol = orders[i].symbol;
                    dataService.orderService.orderCancel(id, no, symbol).then(function(response) {
                        if (response.state == 1) {
                            hintDialog("fa-check-circle", "#1c9547", language == "en" ? "Successful cancellation " : "撤销成功 ");
                            currentEntrustPanel(symbol);
                            historyEntrustPanel(symbol);
                        } else if (response.state == -1) {
                            var msg_position = $.inArray(response.msg, message_arr);
                            hintDialog("fa-exclamation-circle", "#b34242", message_dialog[msg_position]);
                        }
                    });
                }).appendTo($dd);
            }
            // 顶部
            function loadTradePanelHeader(ticker, convertCNY, ethzc_ticker_close, usdtzc_ticker_close, btczc_ticker_close, current_price_precision, current_volume_precision, allTickerObj, userFavorite) {
                var headerRiseFallPercent = riseFallPercent(ticker, current_price_precision);
                $('#chartHeader span.dspName').text(ticker.dspName).attr({
                    'data-ethcny': ethzc_ticker_close,
                    'data-usdtcny': usdtzc_ticker_close,
                    'data-btccny': btczc_ticker_close
                });
                $(".fa-header-star").html("");
                var userFavoriteArr = []
                var states = -1;
                if (userFavorite) {
                    for (var i = 0; i < userFavorite.length; i++) {
                        var favorSymbol = userFavorite[i].pair_dsp_name.toLowerCase();
                        userFavoriteArr.push(favorSymbol)
                    }
                }

                // console.log(ticker.symbol);

                states = $.inArray(ticker.symbol, userFavoriteArr);
                var arr_1 = ["收藏", "取消收藏", "成功"];
                var arr_2 = ["Favorites", "Cancel Collections", "Success"];
                var arr_12 = language == "en" ? arr_2 : arr_1;
                if (states >= 0) {
                    var clicktimes = 0;
                    var $star = $('<i class="fa fa-heart wc sc"></i>').click(function(e) {
                        e.stopPropagation();
                        clicktimes++;
                        if (clicktimes % 2 == 0) {
                            dataService.marketService.favorite(ticker.symbol.toUpperCase()).then(function(response) {
                                if (response.state == 1) {
                                    $star.addClass("sc");
                                    hintDialog("fa-check-circle", "#1c9547", arr_12[0] + ticker.symbol.toUpperCase() + arr_12[2]);
                                } else {
                                    var msg_position = $.inArray(response.msg, message_arr);
                                    hintDialog("fa-exclamation-circle", "#b34242", message_dialog[msg_position]);
                                }
                            });
                        } else {
                            dataService.marketService.favoriteDel(ticker.symbol.toUpperCase()).then(function(response) {
                                if (response.state == 1) {
                                    $star.removeClass("sc");
                                    hintDialog("fa-check-circle", "#1c9547", arr_12[1] + ticker.symbol.toUpperCase() + arr_12[2]);
                                } else {
                                    var msg_position = $.inArray(response.msg, message_arr);
                                    hintDialog("fa-exclamation-circle", "#b34242", message_dialog[msg_position]);
                                }
                            });
                        }
                    }).appendTo($(".fa-header-star"));
                } else {
                    var clicktimes = 0;
                    var $star = $('<i class="fa fa-heart wc"></i>').click(function(e) {
                        e.stopPropagation();
                        clicktimes++;
                        if (clicktimes % 2 == 0) {
                            dataService.marketService.favoriteDel(ticker.symbol.toUpperCase()).then(function(response) {
                                if (response.state == 1) {
                                    $star.removeClass("sc");
                                    hintDialog("fa-check-circle", "#1c9547", arr_12[1] + ticker.symbol.toUpperCase() + arr_12[2]);
                                } else {
                                    var msg_position = $.inArray(response.msg, message_arr);
                                    hintDialog("fa-exclamation-circle", "#b34242", message_dialog[msg_position]);
                                }
                            });
                        } else {
                            dataService.marketService.favorite(ticker.symbol.toUpperCase()).then(function(response) {
                                if (response.state == 1) {
                                    $star.addClass("sc");
                                    hintDialog("fa-check-circle", "#1c9547", arr_12[0] + ticker.symbol.toUpperCase() + arr_12[2]);
                                } else {
                                    var msg_position = $.inArray(response.msg, message_arr);
                                    hintDialog("fa-exclamation-circle", "#b34242", message_dialog[msg_position]);
                                }
                            });
                        }
                    }).appendTo($(".fa-header-star"));
                }


                $('#chartHeader span.desc').css("font-size","14px").html( "<em style='font-size:18px'>"+ticker.close.toFixed(current_price_precision)+"</em>" + '≈ ' + convertCNY.toFixed(2) + ' usdt');
                // $('#chartHeader span.cny-bar').text(ticker.close.toFixed(current_price_precision)+'≈ ' + convertCNY.toFixed(2) + ' cny');
                $('#chartHeader span.rate-pre').text(language == "en" ? "Quote change" : '涨跌幅');
                if (headerRiseFallPercent > 0) {
                    $('#chartHeader span.desc em').css("color","#00b08f");
                    $('#chartHeader span.rate').removeClass("fall");
                    
                    $('#chartHeader span.rate').text((headerRiseFallPercent=="NaN"?0:headerRiseFallPercent) + '%').addClass('rise');
                } else {
                    $('#chartHeader span.rate').removeClass("rise");
                     $('#chartHeader span.desc em').css("color","#ff1c1c");
                    $('#chartHeader span.rate').text((headerRiseFallPercent=="NaN"?0:headerRiseFallPercent) + '%').addClass('fall');
                }
                $('#chartHeader span.high').text('' + ticker.high.toFixed(current_price_precision));
                $('#chartHeader span.low').text('' + ticker.low.toFixed(current_price_precision));
                $('#chartHeader span.amount').text('' + ticker.volume.toFixed(current_volume_precision) + ' ' + ticker.baseCurrencyName);
            }

            function dragbarProgress($drag_bar, $progress, $range, drag_bar_position) {
                $drag_bar.css({
                    'left': drag_bar_position * 100 + '%',
                    'transform': 'translateX(-' + drag_bar_position * 100 + '%)'
                });
                $progress.css('width', $range.width() * drag_bar_position);
            }

            function removePointerCur($pointer) {
                $($pointer[1]).removeClass('cur');
                $($pointer[2]).removeClass('cur');
                $($pointer[3]).removeClass('cur');
            }

            function judgeDragbarPointer(divideVal, $pointer) {
                if (divideVal < 0.25) {
                    $($pointer[0]).addClass('cur');
                    removePointerCur($pointer);
                } else if (divideVal >= 0.25 && divideVal < 0.5) {
                    $($pointer[0]).addClass('cur');
                    $($pointer[1]).addClass('cur');
                    $($pointer[2]).removeClass('cur');
                    $($pointer[3]).removeClass('cur');
                } else if (divideVal >= 0.5 && divideVal < 0.75) {
                    $($pointer[0]).addClass('cur');
                    $($pointer[1]).addClass('cur');
                    $($pointer[2]).addClass('cur');
                    $($pointer[3]).removeClass('cur');
                } else if (divideVal >= 0.75) {
                    $($pointer[0]).addClass('cur');
                    $($pointer[1]).addClass('cur');
                    $($pointer[2]).addClass('cur');
                    $($pointer[3]).addClass('cur');
                }
            }

            function riseFallPercent(ticker, current_price_precision) {
                var open = ticker.open.toFixed(current_price_precision);
                var close = ticker.close.toFixed(current_price_precision);
                var sign;
                if (open - close < 0) {
                    sign = "+";
                } else {
                    sign = "";
                }
                return sign + (((close - open) * 100) / open).toFixed(2);
            }

            function inputNumberFilter(obj, pricePrecision, volumePrecision) {
                var reg;
                if (pricePrecision) {
                    reg = new RegExp("([0-9]+\\.[0-9]{" + pricePrecision + "})[0-9]*");
                }
                if (volumePrecision) {
                    reg = new RegExp("([0-9]+\\.[0-9]{" + volumePrecision + "})[0-9]*");
                }
                obj.value = obj.value.replace(/[^\d\.]/g, ''); //先把非数字的都替换掉，除了数字和.
                obj.value = obj.value.replace(/^\./g, ''); //必须保证第一个为数字而不是.
                obj.value = obj.value.replace(/\.{2,}/g, '.'); //保证只有出现一个.而没有多个.
                obj.value = obj.value.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.'); //保证.只出现一次，而不能出现两次以上
                //obj.value = obj.value.replace(reg, '$1'); //保证精度

            }

            function depthSlider() {
                $depth_up = $("#depth .up-and-down .up");
                $depth_down = $("#depth .up-and-down .down");
                $depth_mixed = $("#depth .up-and-down .mixed");
                $depth_sell = $("#depth .main .depth-sell-1");
                $depth_buy = $("#depth .main .depth-buy-1");
                $depth_buy1 = $("#depth .main .sell-buy-bar");
                $depth_up.click(function() {
                    $depth_buy.removeClass("hideheight").addClass("showshell");
                    $depth_sell.removeClass("showshell").addClass("hideheight");
                    $depth_buy1.css("display", "none");
                });
                $depth_down.click(function() {
                    $depth_buy.removeClass("showshell").addClass("hideheight");
                    $depth_sell.removeClass("hideheight").addClass("showshell");
                    $depth_buy1.css("display", "none");
                });
                $depth_mixed.click(function() {
                    $depth_buy.removeClass("showshell");
                    $depth_buy.addClass("hideheight");
                    $depth_sell.removeClass("showshell");
                    $depth_sell.addClass("hideheight");
                    $depth_buy1.css("display", "block");
                });
            }

            function tabSlider_ticker() {
                var $tab = $("#miniTicker .mt-header > span");
                var $tabcon = $("#miniTicker #miniTickerList > div");
                var getIndexNum = sessionStorage.getItem("tabLiNum");
                $tab.eq(getIndexNum).addClass('cur').siblings().removeClass('cur');
                $tabcon.eq(getIndexNum).show().siblings("div").hide();
                $tab.on('click', function() {
                    $(this).addClass('cur').siblings().removeClass('cur');
                    $tabcon.eq($(this).index()).show().siblings("div").hide();
                    var indexNum = $(this).index();
                    sessionStorage.setItem("tabLiNum", indexNum);
                });
            }

            function tabSlider_entrust() {
                var $tab = $("#tr2Inner .entrust > span");
                var $tabcon = $("#tr2Inner .main > div");
                $tab.each(function() {
                    $(this).click(function() {
                        tabShow($(this).index(), $tab, $tabcon);
                    });
                });
            }

            function tabShow(a, $tab, $tabcon) {
                $tab.each(function() {
                    $(this).removeClass("cur");
                });
                $tabcon.each(function() {
                    $(this).removeClass("cur");
                });
                $($tab[a]).addClass("cur");
                $($tabcon[a]).addClass("cur");
            }

            function cutNum(num, len) {
                var numStr = num.toString();
                if (len == null || len == undefined) {
                    len = numStr.length;
                }
                var index = numStr.indexOf('.');
                if (index == -1) {
                    index = numStr.length;
                    numStr += ".0000000000000";
                } else {
                    numStr += "0000000000000";
                }
                var newNum = numStr.substring(0, index + len + 1);
                return newNum;
            }
        }
    };
    var accountInfo = {
        load: function() {
            viewService.getTemplate("view/accountInfo.html").then(function(resHtml) {
                var $wrapper = $(resHtml);
                var arr_zh = ["账户信息", "账号", "退出登录", "安全设置", "邮箱", "手机", "密码", "交易密码", "谷歌验证", "身份认证",
                        "收款设置", "我的银行卡", "我的支付宝", "我的微信", "邀请", "我的邀请码", "我的邀请链接", "复制", "查看", "设置",
                        "修改", "未设置", "已设置", "未登录", "未绑定", "已绑定", "身份信息未认证", "身份信息审核中", "身份信息审核通过", "身份信息审核未通过，请重新提交",
                        "修改登录密码", "复制成功", "设置交易密码", "修改交易密码", "设置成功", "未认证", "已认证"
                    ],
                    arr_en = ["Account Information", "Account", "Logout", "Security Settings", "E-mail", "Mobile Phone", "password", "Transaction Password", "Certification", "Identity Authentication",
                        "Collection Setting", "My Bank Card", "My Alipay", "My WeChat", "Invitation", "My Invitation Code", "My Invitation Link", "Copy", "View", "Setting",
                        "Modify", "unset", "Has been set", "Not logged in", "Unbound", "Bind", "Identity information is not authenticated", "Identity information review", "Identity Information Auditing", "Identity information audit failed, please resubmit",
                        "Modify Login Password ", "Replication success", "Set transaction password", "Modify transaction password", "Set up successfully", "Uncertified", "Certified"
                    ],
                    arr_ze = language == "en" ? arr_en : arr_zh;
                $MainView.html($wrapper);
                $(".tradecenter").removeClass("cur");
                $(".tradecenter").siblings().removeClass("cur");
                // $MainView.css("background-image", "url(../images/person_bg.jpg)");
                $(".sidebar-nav").html($(`<ul>
                        <li>个人中心</li>
                        <li>
                            <a href="#/accountInfo" class="cur">${aside_arr[0]}</a>
                        </li>
                        <li>
                            <a href="#/identityVerify">${aside_arr[1]}</a>
                        </li>
                        <li>
                            <a href="#/accountSecurity">${aside_arr[2]}</a>
                        </li>
                        <li>
                            <a href="#/collection">${aside_arr[3]}</a>
                        </li>
                        <li>
                            <a href="#/addressManage">${aside_arr[4]}</a>
                        </li>
                        <li>
                            <a href="#/assetsRecord">${aside_arr[5]}</a>
                        </li>
                        <li>
                            <a href="#/tradeBill">${aside_arr[6]}</a>
                        </li>
                        <li>
                            <a href="#/myAssets">${aside_arr[7]}</a>
                        </li>
                        <!-- <li>
                            <a class="login-record" href="#/loginRecord">${aside_arr[9]}</a>
                        </li> -->
                        <li>
                            <a href="#/apiManager">${aside_arr[8]}</a>
                        </li>

                        <li>
                            <a href="#/invited">${aside_arr[9]}</a>
                        </li>
                        <li>
                            <a href="#" id="quit-load">退出登录</a>
                        </li>
                    </ul>`));
                $("#innerAccountInfo").html($(`

                    <div class="user-detail f-cb">
                        <div class="title">
                            ${arr_ze[0]}
                        </div>
                        <div class="f-fl user-info" style="display: none">
                            <div class="row-1"></div>
                            <div class="row-2"></div>
                        </div>
                        <ul class="user-info1">
                        </ul>
                    </div>
                    <div class="user-account-security">
                        <div class="title">
                            ${arr_ze[3]}
                        </div>
                        <div>
                            <ul>
                                <!--<li>
                                    <div class="inner-security f-fl">
                                        <div class="inner_security-title">${arr_ze[4]}</div>
                                        <div class="inner-security-content" id="EmailNum"></div>
                                    </div>
                                </li>-->
                                <li>
                                    <div class="inner-security f-fl">
                                        <div class="inner_security-title">${arr_ze[5]}</div>
                                        <div class="inner-security-content" id="PhoneNum"></div>
                                    </div>
                                </li>
                                <li>
                                    <div class="inner-security f-fl">
                                        <div class="inner_security-title">${arr_ze[6]}</div>
                                        <div class="inner-security-content" id="LoginPwd"></div>
                                    </div>
                                    <div class="inner-security-btn f-fr" id="LoginPwdCr">
                                       
                                    </div>
                                </li>
                                <li>
                                    <div class="inner-security f-fl">
                                        <div class="inner_security-title">${arr_ze[7]}</div>
                                        <div class="inner-security-content" id="MoneyPwd"></div>
                                    </div>
                                    <div class="inner-security-btn f-fr" id="MoneyPwdCr">
                                        
                                    </div>
                                </li>
                                <!--<li>
                                    <div class="inner-security f-fl">
                                        <div class="inner_security-title">${arr_ze[8]}</div>
                                        <div class="inner-security-content" id="GooglePwd"></div>
                                    </div>
                                    <div class="inner-security-btn f-fr">
                                        <button>${arr_ze[19]}</button>
                                    </div>
                                </li>-->
                                <li>
                                    <div class="inner-security f-fl">
                                        <div class="inner_security-title">${arr_ze[9]}</div>
                                        <div class="inner-security-content" id="sf-span"></div>
                                    </div>
                                    <div class="inner-security-btn f-fr" id="sf-btn">
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div class="user-account-security user-account-bank">
                        <div class="title">${arr_ze[10]}</div>
                        <div class="inner-bank">
                            <ul>
                                <li class="invitecode">
                                    <div class="inner-security  f-fl">
                                        <div class="inner_security-title">
                                              ${arr_ze[11]}
                                        </div>
                                         <div class="inner-content">
                                            <span class="yhk-span">${arr_ze[24]}</span>
                                         </div>
                                    </div>
                                    <div class="inner-security-btn f-fr">
                                        <a href="#/otc/otcsetting">${arr_ze[20]}</a>
                                    </div>
                                </li>
                                <li class="invitelink">
                                    <div class="inner-security f-fl">
                                        <div class="inner_security-title">
                                             ${arr_ze[12]}
                                        </div>
                                        <div class="inner-content">
                                            <span class="zfb-span">${arr_ze[24]}</span>
                                         </div>
                                    </div>
                                    <div class="inner-security-btn f-fr">
                                         <a href="#/otc/otcsetting">${arr_ze[20]}</a>
                                    </div>
                                </li>
                                <li class="invitelink">
                                    <div class="inner-security f-fl">
                                        <div class="inner_security-title">
                                             ${arr_ze[13]}
                                        </div>
                                        <div class="inner-content">
                                            <span class="zfb-span">${arr_ze[24]}</span>
                                         </div>
                                    </div>
                                    <div class="inner-security-btn f-fr">
                                         <a href="#/otc/otcsetting">${arr_ze[20]}</a>
                                    </div>
                                </li>
                            </ul>
                        </div>

                         <!--<div class="inner-bank">
                             <div class="boxs f-fl">
                                 <div class="inner-title">
                                     ${arr_ze[11]}
                                 </div>
                                 <div class="inner-content">
                                     <span class="yhk-span">${arr_ze[24]}</span>/
                                     <a href="#/otc/otcsetting">${arr_ze[20]}</a>
                                 </div>
                             </div>
                             <div class="boxs f-fl zfb">
                                 <div class="inner-title">
                                     ${arr_ze[12]}
                                 </div>
                                 <div class="inner-content">
                                     <span class="zfb-span">${arr_ze[24]}</span>/
                                     <a href="#/otc/otcsetting">${arr_ze[20]}</a>
                                 </div>
                             </div>
                             <div class="boxs f-fl">
                                 <div class="inner-title">
                                     ${arr_ze[13]}
                                 </div>
                                 <div class="inner-content">
                                     <span class="wx-span">${arr_ze[24]}</span>/
                                     <a href="#/otc/otcsetting">${arr_ze[20]}</a>
                                 </div>
                             </div>
                         </div>   -->    
                    </div>
                    <div class="user-account-security user-account-invited">
                        <div class="title">
                            ${arr_ze[14]}
                        </div>
                        <div>
                            <ul>
                                <li class="invitecode">
                                    <div class="inner-security  f-fl">
                                        <div class="inner_security-title">
                                             <span>${arr_ze[15]}</span>
                                        </div>
                                         <div class="inner-content">
                                            <input type="text" value="" readonly>
                                         </div>
                                    </div>
                                    <div class="inner-security-btn f-fr">
                                        <button class="copy">${arr_ze[17]}</button>
                                    </div>
                                </li>
                                <li class="invitelink">
                                    <div class="inner-security f-fl">
                                        <div class="inner_security-title">
                                            <span>${arr_ze[16]}</span>
                                        </div>
                                        <div class="inner-content">
                                            <input type="text" value="" readonly>
                                         </div>
                                    </div>
                                    <div class="inner-security-btn f-fr">
                                        <button class="copy">${arr_ze[17]}</button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>`));
                $("#asDialog").html(`<div class="dialog-content">
                <div class="inner" id="inner">
                    <div class="title f-cb">
                        <span></span>
                        <i class="f-fr fa fa-times"></i>
                    </div>
                    <div class="input-wrap old-pwd">
                        <label>${language == "en" ? "Original password ":"原密码"}：</label>
                        <input type="password"  autocomplete="new-password">
                    </div>
                    <div class="input-wrap new-pwd">
                        <label>${language == "en" ? "New password ":"新密码"}：</label>
                        <input type="password"  autocomplete="new-password">
                    </div>
                    <div class="input-wrap confirm-pwd">
                        <label>${language == "en" ? "Confirm  password ":"确认密码"}：</label>
                        <input type="password"  autocomplete="new-password">
                    </div>
                    <div class="input-wrap img-code f-cb">
                        <label>${language == "en" ? "Picture Code":"图形验证码"}：</label>
                        <input type="text" class="code-input f-fl">
                        <img src="" alt="" class="f-fl">
                    </div>
                    <div class="input-wrap mobile-code f-cb">
                        <label>${language == "en" ? "SMS Code":"短信验证码"}：</label>
                        <input type="text" class="code-input f-fl">
                        <button class="f-fl">${language == "en" ? "Get Code":"发送验证码"}</button>
                    </div>
                    <button class="submit">${language == "en" ? "Submit":"提交"}</button>
                </div>
            </div>`);
                $("#asCurrencyDialog").html(`<div class="dialog-content">
            <div class="inner" id="inner">
                <div class="title f-cb">
                    <span></span>
                    <i class="f-fr fa fa-times"></i>
                </div>
                <div class="input-wrap new-pwd">
                    <label>${language == "en" ? "Trader Password":"交易密码"}：</label>
                    <input type="password"  autocomplete="new-password">
                </div>
                <div class="input-wrap confirm-pwd">
                    <label>${language == "en" ? "Confirm  password":"确认密码"}：</label>
                    <input type="password"  autocomplete="new-password">
                </div>
                <div class="input-wrap img-code f-cb">
                    <label>${language == "en" ? "Picture Code":"图形验证码"}：</label>
                    <input type="text" class="code-input f-fl">
                    <img src="" alt="" class="f-fl">
                </div>
                <div class="input-wrap mobile-code f-cb">
                    <label>${language == "en" ? "SMS Code":"短信验证码"}：</label>
                    <input type="text" class="code-input f-fl">
                    <button class="f-fl">${language == "en" ? "Get Code":"发送验证码"}</button>
                </div>
                <button class="submit">${language == "en" ? "Submit":"提交"}</button>
            </div>
        </div>`);
                var $row_1 = $wrapper.find("#innerAccountInfo .row-1");
                var $row_2 = $wrapper.find("#innerAccountInfo .row-2");
                var $phone = $wrapper.find("#innerAccountInfo .lists .phone");
                var $email = $wrapper.find("#innerAccountInfo .lists .email");
                var $realname = $wrapper.find("#innerAccountInfo .lists .realname");
                var $invitecode = $wrapper.find("#innerAccountInfo  .invitecode .inner-security input");
                var $invitecode_c = $wrapper.find("#innerAccountInfo  .invitecode .copy");
                var $invitelink = $wrapper.find("#innerAccountInfo .invitelink .inner-security input");
                var $invitelink_c = $wrapper.find("#innerAccountInfo .invitelink .copy");
                var $checkboxs = $wrapper.find("#innerAccountInfo .lists .checkboxs");
                var $userInfo_1 = $wrapper.find("#innerAccountInfo .user-info1");
                var regPhone = new RegExp("^[1][3,4,5,7,8][0-9]{9}$");
                var regEmail = new RegExp("^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(.[a-zA-Z0-9-]+)*.[a-zA-Z0-9]{2,6}$");

                $checkboxs.find("span").click(function() {
                    if ($(this).attr("data-id") == 1) {
                        $(this).animate({ "left": 20 }, 300, function() {
                            $(this).attr("data-id", 0)
                        })
                    } else {
                        $(this).animate({ "left": 0 }, 300, function() {
                            $(this).attr("data-id", 1)
                        })
                    }
                });
                $('<button>' + arr_ze[18] + '</button>').click(function() {
                    location.href = "#/identityVerify"
                }).appendTo($("#sf-btn"));
                dataService.membershipService.getAuthindentity().then(function(response) {
                    if (response.state == 1) {
                        if (response.data == null) {
                            //未认证
                            $("#sf-span").text(arr_ze[26])
                        } else {
                            var user_auth_state = response.data.id_status;
                            if (user_auth_state == 0) {
                                //审核中
                                $("#sf-span").text(arr_ze[27])
                            } else if (user_auth_state == 1) {
                                // 审核通过
                                $("#sf-span").text(arr_ze[28])
                                    // 用户详细信息
                            } else if (user_auth_state == 2) {
                                // 审核未通过，请重新提交
                                $("#sf-span").text(arr_ze[29])

                            } else {
                                //未认证
                                $("#sf-span").text(arr_ze[26])
                            }
                        }
                    } else if (response.state == -1) {
                        var msg_position = $.inArray(response.msg, message_arr);
                        hintDialog("fa-exclamation-circle", "#b34242", message_dialog[msg_position]);
                        if (response.msg == 'LANG_NO_LOGIN') {
                            setTimeout(function() {
                                userLogout();
                            }, 2000);
                        }
                    }
                });
                dataService.membershipService.getMember().then(function(response) {
                    if (response.state == 1) {
                        var userinfo = response.data;
                        $ss = $("<li></li>").html("<span>" + arr_ze[1] + ":</span>" + userinfo.m_name_hidden).appendTo($userInfo_1);
                        $("<li></li>").html("<span>UID:</span>" + userinfo.uid).appendTo($userInfo_1);
                        $("<a href='#' id='quit-load'>" + arr_ze[2] + "</a>").click(function(e) {
                            e.preventDefault();
                            dataService.membershipService.getMemberLogout().then(function(response) {
                                if (response.state == 1) {
                                    // 用户退出登录
                                    userLogout();
                                }
                            });
                        }).appendTo($ss);
                        $("<span></span>").text(userinfo.m_name_hidden).appendTo($row_1);
                        $("<span></span>").appendTo($row_1);



                        var data = response.data;
                        var $login_pwd = $wrapper.find("#LoginPwd");
                        var $phone_num = $wrapper.find("#PhoneNum");
                        var $email_num = $wrapper.find("#EmailNum");
                        var $google_pwd = $wrapper.find("#GooglePwd");

                        var user_account = data.m_name;
                        var $dialog = $("#asDialog");
                        /*$("<span></span>").text("未设置").appendTo($google_pwd);
                        $('<span class="f-fr"></span>').text("设置").off().click(function () {
                            // changeCurrencyPwd($dialog, $wrapper, user_account);
                        }).appendTo($google_pwd);*/
                        $("<span></span>").text("******").appendTo($login_pwd);

                        $('<button></button>').text(arr_ze[20]).off().click(function() {
                            $dialog.css("display", "block");
                            $wrapper.find(".title span").text(arr_ze[30]);
                            var $old_pwd = $dialog.find(".old-pwd input");
                            var $new_pwd = $dialog.find(".new-pwd input");
                            var $confirm_pwd = $dialog.find(".confirm-pwd input");
                            var $img_code = $dialog.find(".img-code input");
                            var $img_code_btn = $dialog.find(".img-code img");
                            var $mobile_code = $dialog.find(".mobile-code input");
                            var $mobile_code_btn = $dialog.find(".mobile-code button");
                            $dialog.find(".title i").click(function() {
                                $dialog.css("display", "none");
                                $old_pwd.val("");
                                $new_pwd.val("");
                                $confirm_pwd.val("");
                                $img_code.val("");
                                $mobile_code_btn.val("");
                            });
                            getKaptcha($img_code_btn);

                            $img_code_btn.off().click(function(e) {
                                e.stopPropagation();
                                getKaptcha($img_code_btn);
                            });
                            $mobile_code_btn.click(function() {
                                var isimgCode = $img_code.val();
                                var isclick = $mobile_code_btn.prop('disabled');
                                if (isclick == true || isimgCode == '') {
                                    return;
                                }
                                var code = $img_code.val();
                                var token = $img_code_btn.attr("data-token");
                                dataService.accountService.getMail(token, code, user_account, "forgot").then(function(response) {
                                    if (response.state == 1) {
                                        var msg_position = $.inArray('Sent_successfully', message_arr);
                                        hintDialog("fa-check-circle", "#1c9547", message_dialog[msg_position]);
                                        countDownBtn($mobile_code_btn);
                                    } else if (response.state == -1) {
                                        getKaptcha($img_code_btn);
                                        var msg_position = $.inArray(response.msg, message_arr);
                                        hintDialog("fa-exclamation-circle", "#b34242", message_dialog[msg_position]);
                                    }
                                });
                            });
                            $dialog.find("button.submit").click(function() {
                                var data = {
                                    m_security_pwd: $old_pwd.val(),
                                    m_pwd: $confirm_pwd.val(),
                                    sms_code: $mobile_code.val()
                                };
                                dataService.membershipService.resetPwd(data).then(function(response) {
                                    if (response.state == 1) {
                                        var msg_position = $.inArray('Successfully_modified', message_arr);
                                        hintDialog("fa-check-circle", "#1c9547", message_dialog[msg_position]);
                                        dataService.membershipService.getMemberLogout().then(function(response) {
                                            if (response.state == 1) {
                                                login_state = false;
                                                sessionStorage.setItem("loginState", JSON.stringify(login_state));
                                                $headlogin.html("");
                                                $headlogout.css("display", "block");
                                                location.href = "#/login";
                                            }
                                        });
                                    } else if (response.state == -1) {
                                        getKaptcha($img_code_btn);
                                        var msg_position = $.inArray(response.msg, message_arr);
                                        hintDialog("fa-exclamation-circle", "#b34242", message_dialog[msg_position]);
                                    }
                                });
                            });
                        }).appendTo($("#LoginPwdCr"));
                        if (regPhone.test(user_account)) {
                            $("<span></span>").text(data.m_name_hidden).appendTo($phone_num);
                            $("<span></span>").text(arr_ze[23]).appendTo($email_num);
                        } else if (regEmail.test(user_account)) {
                            $("<span></span>").text(arr_ze[23]).appendTo($phone_num);
                            $("<span></span>").text(data.m_name_hidden).appendTo($email_num);
                        }
                        dataService.membershipService.isSetCoinPwd().then(function(response) {
                            var data = response.data;
                            if (response.state == 1) {
                                var $dialog = $("#asCurrencyDialog");
                                var $money_pwd = $wrapper.find("#MoneyPwd");
                                if (data == "0") {
                                    $("<span></span>").text(arr_ze[21]).appendTo($money_pwd);
                                    $('<button></button>').text(arr_ze[19]).off().click(function() {
                                        changeCurrencyPwd($dialog, $wrapper, user_account, 0, arr_ze);
                                    }).appendTo($("#MoneyPwdCr"));
                                } else {
                                    $("<span></span>").text(arr_ze[22]).appendTo($money_pwd);

                                    $('<button></button>').text(arr_ze[20]).off().click(function() {
                                        changeCurrencyPwd($dialog, $wrapper, user_account, 1, arr_ze);
                                    }).appendTo($("#MoneyPwdCr"));
                                }
                            }
                        });

                        //收款
                        dataService.otcService.getOtcAccountInfo().then(function(response) {
                            if (response.state == 1) {
                                var data = response.data;
                                var pay_arr = [];
                                var pay_obj = {};
                                for (var i = 0; i < data.length; i++) {
                                    pay_arr.push(data[i].a_type);
                                    pay_obj[data[i].a_type] = data[i];
                                }
                                if ($.inArray('bank', pay_arr) >= 0) {
                                    $wrapper.find('span.yhk-span').text(arr_ze[25]);
                                    // 显示绑定信息

                                } else {
                                    $wrapper.find('span.yhk-span').text(arr_ze[24]);
                                }

                                if ($.inArray('alipay', pay_arr) >= 0) {
                                    $wrapper.find('span.zfb-span').text(arr_ze[25]);
                                    // 显示绑定信息

                                } else {
                                    $wrapper.find('span.zfb-span').text(arr_ze[24]);
                                }

                                if ($.inArray('wxpay', pay_arr) >= 0) {
                                    $wrapper.find('span.wx-span').text(arr_ze[25]);
                                    // 显示绑定信息

                                } else {
                                    $wrapper.find('span.wx-span').text(arr_ze[24]);
                                }
                            }
                        })


                        $row_1.append(`UID: <input type="text" value="${userinfo.uid}" readonly>`);
                        $row_2.append(`<span>上次登录时间: ${userinfo.last_login_time} </span>`);
                        $row_2.append(`<span>上次登录地点: ${userinfo.last_login_ip} </span>`);
                        if (regPhone.test(userinfo.m_name)) {
                            $("<span></span>").text(arr_ze[22]).appendTo($phone);
                        } else {
                            $("<span></span>").text(arr_ze[21]).appendTo($phone);
                        }
                        if (regEmail.test(userinfo.m_name)) {
                            $("<span></span>").text(arr_ze[22]).appendTo($email);
                        } else {
                            $("<span></span>").text(arr_ze[21]).appendTo($email);
                        }
                        dataService.membershipService.getAuthindentity().then(function(response) {
                            var data = response.data;
                            if (response.state == 1) {
                                if (data == null || data.id_status == 0 || data.id_status == 2) {
                                    $("<span></span>").text(arr_ze[35]).appendTo($realname);
                                } else if (data.id_status == 1) {
                                    $("<span></span>").text(arr_ze[36]).appendTo($realname);
                                }
                            }
                        });
                        $invitecode.val(userinfo.uid);
                        $invitecode_c.click(function() {
                            $invitecode.select();
                            document.execCommand("copy");
                            hintDialog("fa-check-circle", "#1c9547", arr_ze[31]);
                        });
                        var href = location.href.split("#")[0];
                        $invitelink.val(href + "#/register?uid=" + userinfo.uid);
                        $invitelink_c.click(function() {
                            $invitelink.select();
                            document.execCommand("copy");
                            hintDialog("fa-check-circle", "#1c9547", arr_ze[31]);
                        });
                    } else if (response.state == -1) {
                        var msg_position = $.inArray(response.msg, message_arr);
                        hintDialog("fa-exclamation-circle", "#b34242", message_dialog[msg_position]);
                        if (response.msg == 'LANG_NO_LOGIN') {
                            setTimeout(function() {
                                userLogout();
                            }, 2000);
                        }
                    }
                });
            });

            function changeCurrencyPwd($dialog, $wrapper, user_account, num, arr_ze) {
                $dialog.css("display", "block");
                var arr = [arr_ze[32], arr_ze[33]]
                $wrapper.find(".title span").text(arr[num]);
                var $new_pwd = $dialog.find(".new-pwd input");
                var $confirm_pwd = $dialog.find(".confirm-pwd input");
                var $img_code = $dialog.find(".img-code input");
                var $img_code_btn = $dialog.find(".img-code img");
                var $mobile_code = $dialog.find(".mobile-code input");
                var $mobile_code_btn = $dialog.find(".mobile-code button");
                $dialog.find(".title i").off().click(function() {
                    $dialog.css("display", "none");
                    $new_pwd.val("");
                    $confirm_pwd.val("");
                    $mobile_code.val("");
                    $img_code.val("");
                });
                getKaptcha($img_code_btn);
                $img_code_btn.off().click(function(e) {
                    e.stopPropagation();
                    getKaptcha($img_code_btn);
                });
                $mobile_code_btn.click(function() {
                    var isimgCode = $img_code.val();
                    var isclick = $mobile_code_btn.prop('disabled');
                    if (isclick == true || isimgCode == '') {
                        return;
                    }
                    var code = $img_code.val();
                    var token = $img_code_btn.attr("data-token");
                    dataService.accountService.getMail(token, code, user_account, "forgot").then(function(response) {
                        if (response.state == 1) {
                            var msg_position = $.inArray('Sent_successfully', message_arr);
                            hintDialog("fa-check-circle", "#1c9547", message_dialog[msg_position]);
                            countDownBtn($mobile_code_btn);
                        } else if (response.state == -1) {
                            getKaptcha($img_code_btn);
                            var msg_position = $.inArray(response.msg, message_arr);
                            hintDialog("fa-exclamation-circle", "#b34242", message_dialog[msg_position]);
                        }
                    });
                });
                $dialog.find("button.submit").off().click(function() {
                    var data = {
                        m_security_pwd: $confirm_pwd.val(),
                        sms_code: $mobile_code.val()
                    };
                    dataService.membershipService.setSecPwd(data).then(function(response) {
                        if (response.state == 1) {
                            hintDialog("fa-check-circle", "#1c9547", arr_ze[34]);
                            setTimeout(function() {
                                history.go(0);
                            }, 1500);
                        } else if (response.state == -1) {
                            getKaptcha($img_code_btn);
                            var msg_position = $.inArray(response.msg, message_arr);
                            hintDialog("fa-exclamation-circle", "#b34242", message_dialog[msg_position]);
                        }
                    });
                });
            }

            function getKaptcha(code) {
                dataService.accountService.getKaptcha().then(function(response) {
                    var imgcode = response.check_code_img;
                    var tokencode = response.check_code_token;
                    code.attr({
                        src: imgcode,
                        "data-token": tokencode
                    });
                });
            }

            function countDownBtn($btn) {
                var second = 60;
                if (second > 0) {
                    second--;
                    $btn.text(second + 's');
                    $btn.prop('disabled', true);
                    $btn.addClass('forbidBtn');
                }
                var msgInterval = setInterval(function() {
                    if (second > 0) {
                        second--;
                        $btn.text(second + 's');
                        $btn.prop('disabled', true);
                        $btn.addClass('forbidBtn');
                    }
                    if (second == 0) {
                        clearInterval(msgInterval);
                        $btn.text(language == "en" ? "Get Code" : '获取验证码');
                        $btn.prop('disabled', false);
                        $btn.removeClass('forbidBtn');
                    }
                }, 1000);
            }
        }
    };


    var invited = {
        load: function() {
            viewService.getTemplate("view/invited.html").then(function(resHtml) {
                var $wrapper = $(resHtml);
                $MainView.html($wrapper);
                $(".invited").addClass("cur");
                $(".invited").siblings().removeClass("cur");
                var arr_zh = ["我的推广", "专属邀请码", "复制邀请码", "专属邀请链接", "复制邀请链接", "生成邀请海报", "邀请总人数", "KYC通过人数", "获得收益(BTC)", "邀请记录", "返佣记录", "邀请时间", "被邀请人账号", "级别", "暂无邀请好友记录", "数量", "类型", "币种", "时间", "状态", "暂无返佣记录"],
                    arr_en = ["My invitation", "Invitation code", "Copy Code", "Invitation link", "Copy link", "Generate Poster", "Total Number", "KYC Number", "Gain Profit（BTC）", "Invitation Record", "Return Record", "Invitation time", "Invitee Account", "Level", "No invite friends record", "Amount", "Type", "Currency", "Invitee Account", "Date", "No repayment commission record", ""],
                    arr_ze = language == "en" ? arr_en : arr_zh;
                $("#innerAccountInfo").html(`
                    <div class="user-recommend">
                    <div class="header">${language=="en"?"Sharing methods":"分享方式"}</div>
                    <div class="invited-intro">${language=="en"?"By inviting friends through exclusive links or invitation codes, you will get a commission when friends trade.":"通过专属链接或者邀请码邀请好友,好友交易时您将获得返佣。"}</div>
                        <div class="lists">
                            <div class="l-invitecode list f-cb">
                                <div class="f-fl invitecode-title">
                                    <span>${arr_ze[1]}:</span>
                                </div>
                                <div class="f-fr invitelink-title">
                                    <span>${arr_ze[3]}:</span>
                                </div>
                                 
                            </div>
                            <div class="l-invitelink list f-cb">
                                <div class="f-fl invitecode">
                                    <input type="text" value="" readonly>
                                    <span class="copy f-fr">${arr_ze[2]}</span>
                                </div>
                                <div class="f-fr invitelink">
                                    <input type="text" value="" readonly>
                                    <span class="copy f-fr">${arr_ze[4]}</span>
                                    <!--  fa fa-files-o -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="user-recommend" style="margin-top:20px;">
                        <div class="tab-record " id="invitedTab">
                            <span class="cur">${arr_ze[9]}</span>
                            <span>${arr_ze[10]}</span>
                        </div>
                        <div class="record-main" id="invitedTable">
                            <div class="rm-list">
                                <div class="rm-recharge cur" >
                                    <div class="rm-list-header">
                                        <span class="type">${arr_ze[11]}</span>
                                        <span class="category">${arr_ze[12]}</span>
                                        <span class="number">${arr_ze[13]}</span>
                                    </div>
                                    <div id="rechargetfriendlog">
                                         <div style="text-align: center;width:100%;line-height: 50px;position:absolute;top:40%">${arr_ze[14]}</div>
                                    </div>
        
                                </div>
        
                                <div class="rm-withdraw" >
                                    <div class="rm-list-header">
                                        <span class="category">${arr_ze[17]}</span>
                                        <span class="number">${language=="en"?"Return of commission":"返还佣金"}</span>
                                        <span class="truly">${language=="en"?"Return time":"返佣时间"}</span>
                                    </div>
                                    <div id="withdrawards">
                                        <div style="text-align: center;line-height: 50px;position:absolute;top:40%;width:100%">${arr_ze[20]}</div>
                                    </div>
                                </div>
        
                            </div>
                        </div>
        
                    </div>
                   <!--- <div class="user-recommend" style="margin-top:20px;">
                        <div class="header" >
                            ${language=="en"?"Return Rules":"返佣规则"}
                        </div>
                        <div style="padding:30px 24px;line-height:40px;font-size:16px;">
                            <div>${language=="en"?"Return Rules":"敬请期待"}</div>
                        </div>
                    </div>-->
    `)

                $(".tradecenter").removeClass("cur");

                $(".tradecenter").siblings().removeClass("cur");
                var $invitecode = $wrapper.find("#innerAccountInfo  .invitecode input");
                var $invitecode_c = $wrapper.find("#innerAccountInfo  .invitecode .copy");
                var $invitelink = $wrapper.find("#innerAccountInfo .lists .invitelink input");
                var $invitelink_c = $wrapper.find("#innerAccountInfo .lists .invitelink .copy");
                var regPhone = new RegExp("^[1][3,4,5,7,8][0-9]{9}$");
                var regEmail = new RegExp("^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(.[a-zA-Z0-9-]+)*.[a-zA-Z0-9]{2,6}$");
                dataService.membershipService.getMember().then(function(response) {
                    if (response.state == 1) {
                        var userinfo = response.data;

                        $invitecode.val(userinfo.uid);
                        $invitecode_c.click(function() {
                            $invitecode.select();
                            document.execCommand("copy");
                            hintDialog("fa-check-circle", "#1c9547", language == "en" ? "Successful copy" : "复制成功");
                        });
                        var href = location.href.split("#")[0];
                        $invitelink.val(href + "#/register?uid=" + userinfo.uid);
                        $invitelink_c.click(function() {
                            $invitelink.select();
                            document.execCommand("copy");
                            hintDialog("fa-check-circle", "#1c9547", language == "en" ? "Successful copy" : "复制成功");
                        });
                    } else if (response.state == -1) {
                        var msg_position = $.inArray(response.msg, message_arr);
                        hintDialog("fa-exclamation-circle", "#b34242", message_dialog[msg_position]);
                        if (response.msg == 'LANG_NO_LOGIN') {

                                userLogout();
   
                        }
                    }
                });
                
                // 设置数据
                var $refriendlog = $wrapper.find("#innerAccountInfo  #invitedTable #rechargetfriendlog");
                var $withdrawards = $wrapper.find("#innerAccountInfo  #invitedTable #withdrawards");
                dataService.membershipService.getFriendlog(1).then(function (response) {
                    if (response.state == 1) {
                        var listdata = response.data.data;
                        if (listdata.length > 0) {
                            var $list = $refriendlog.html('');
                            for (var i = 0; i < listdata.length; i++) {
                                var $dl = $("<dl></dl>").appendTo($list);
                                var $dd = $("<dd></dd>").appendTo($dl);
                                $("<span></span>").text(listdata[i].reg_time).appendTo($dd);
                                $("<span></span>").text(listdata[i].m_name).appendTo($dd);
                                $("<span></span>").text(listdata[i].auth_grade).appendTo($dd);
                            }
                        }
                    } else {
                        $refriendlog.html('<div style="text-align: center;width:100%;line-height: 50px;position:absolute;top:40%">暂无邀请好友记录</div>');
                    }

                });

                dataService.membershipService.getRecommendAwards(1).then(function (response) {
                    if (response.state == 1) {
                        var listdata = response.data.data;
                        if (listdata.length > 0) {
                            var $list = $withdrawards.html('');
                            for (var i = 0; i < listdata.length; i++) {
                                var $dl = $("<dl></dl>").appendTo($list);
                                var $dd = $("<dd></dd>").appendTo($dl);
                                $("<span></span>").text(listdata[i].currency).appendTo($dd);
                                $("<span></span>").text(listdata[i].fee_award).appendTo($dd);
                                $("<span></span>").text(listdata[i].created_at).appendTo($dd);
                            }
                        }
                    } else {
                        $withdrawards.html('<div style="text-align: center;line-height: 50px;position:absolute;top:40%;width:100%">暂无返佣记录</div>');
                    }
                });
                
                tabSlider();
            });


            function tabSlider() {
                var $tab = $("#invitedTab > span");
                var $tabcon = $("#invitedTable .rm-list > div");
                $tab.each(function() {
                    $(this).click(function() {
                        tabShow($(this).index(), $tab, $tabcon);
                    });
                });
            }

            function tabShow(a, $tab, $tabcon) {
                $tab.each(function() {
                    $(this).removeClass("cur");
                });
                $tabcon.each(function() {
                    $(this).removeClass("cur");
                });
                $($tab[a]).addClass("cur");
                $($tabcon[a]).addClass("cur");
            }
        }
    };
    var identityVerify = {
        load: function() {
            viewService.getTemplate("view/identityVerify.html").then(function(resHtml) {
                var $wrapper = $(resHtml);
                var arr_zh = ["实名认证", "证件类型", "身份证", "护照", "姓名", "请输入姓名", "证件号码", "请输入证件号码", "请上传证件正面", "请上传证件背面", "请上传手持证件", "确认提交", "您的身份认证信息已经提交成功，正在审核中 ...",
                        "您的身份认证信息已经通过审核", "抱歉，您的身份认证信息未能通过审核！", "请上传清晰、完整证件照，手持身份证照片清晰不遮挡脸部特征；", "请保证提交认证信息与填写的身份证信息一致，且不存在盗用他人信息。", "重新提交"
                    ],
                    arr_en = ["Real Name Certification", "ID Type", "ID", "Passport", "Name", "Please enter your name", "ID number", "Please enter the ID number", " Upload picture of the front", " Upload picture of the back", "Upload your handheld ID", "Confirm the submission", "Your identity authentication information has been submitted successfully, under review...", "Your identity authentication information has been approved", "Sorry, Your identity information failed to pass the review!", "Please upload a clear and complete photo of the ID card, and the photo of the ID card is clear and does not obscure the facial features;", "Please ensure that the submitted authentication information is consistent with the ID card information filled in, and not There is information about theft of others.", "Resubmit"],
                    arr_ze = language == "en" ? arr_en : arr_zh;
                $MainView.html($wrapper);
                $(".tradecenter").removeClass("cur");
                $(".tradecenter").siblings().removeClass("cur");
                // $MainView.css("background-image", "url(../images/person_bg.jpg)");
                $(".sidebar-nav").html(`<ul>
                        <li>个人中心</li>
                        <li>
                            <a href="#/accountInfo">${aside_arr[0]}</a>
                        </li>
                        <li>
                            <a href="#/identityVerify" class="cur">${aside_arr[1]}</a>
                        </li>
                        <li>
                            <a href="#/accountSecurity">${aside_arr[2]}</a>
                        </li>
                        <li>
                            <a href="#/collection">${aside_arr[3]}</a>
                        </li>
                        <li>
                            <a href="#/addressManage">${aside_arr[4]}</a>
                        </li>
                        <li>
                            <a href="#/assetsRecord">${aside_arr[5]}</a>
                        </li>
                        <li>
                            <a href="#/tradeBill">${aside_arr[6]}</a>
                        </li>
                        <li>
                            <a href="#/myAssets">${aside_arr[7]}</a>
                        </li>
                        <!-- <li>
                            <a class="login-record" href="#/loginRecord">${aside_arr[9]}</a>
                        </li> -->
                        <li>
                            <a href="#/apiManager">${aside_arr[8]}</a>
                        </li>

                        <li>
                            <a href="#/invited">${aside_arr[9]}</a>
                        </li>
                        <li>
                            <a href="#" id="quit-load">退出登录</a>
                        </li>
                    </ul>`);
                $(".inner-identity-verify").html(`<div class="header">${arr_ze[0]}</div>
                    <div class="identity-verify">
                        <div class="step1" id="StepOne">
                            <div class="form-wrap">
                                <div class="input-wrap">
                                    <label>${arr_ze[1]}</label>
                                    <select>
                                        <option>${arr_ze[2]}</option>
                                        <option>${arr_ze[3]}</option>
                                    </select>
                                </div>
                                <div class="input-tips"></div>
                                <div class="input-wrap">
                                    <label>${arr_ze[4]}</label>
                                    <input type="text" placeholder="${arr_ze[5]}" id="familyName">
                                </div>
                                <div class="input-tips"></div>
                                <!-- <div class="input-wrap">
                                    <label>名字</label>
                                    <input type="text" placeholder="请输入名字" id="givenName">
                                </div> -->
                                <div class="input-tips"></div>
                                <div class="input-wrap">
                                    <label>${arr_ze[6]}</label>
                                    <input type="text" placeholder="${arr_ze[7]}" id="idNumber">
                                </div>
                                <div class="input-tips"></div>
                            </div>
                        </div>
                        <div class="step2" id="StepTwo" >
                            <div class="identification">
                                <div class="row row-1 f-cb">
                                    <div class="user-upload f-fl">
                                        
                                        <img src="../images/identification-example-2.png" alt="" id="idFrontImgPreview">
                                        <input type="file" class="file-upload" id="idFrontImg">
                                        <span class="jia"></span>
                                        <div class="tits">${arr_ze[8]}</div>
                                    </div>
                                <!-- </div> -->
                                <!-- <div class="row row-2 f-cb"> -->
                                    <div class="user-upload f-fl">
                                        <img src="../images/identification-example-1.png" alt="" id="idBackImgPreview">
                                        <input type="file" class="file-upload" id="idBackImg">
                                        <span class="jia"></span>
                                        <div class="tits"> ${arr_ze[9]}</div>
                                    </div>
                                <!-- </div> -->
                                <!-- <div class="row row-3 f-cb"> -->
                                    <div class="user-upload f-fl">
                                       
                                        <img src="../images/identification-example-3.png" alt="" id="idHandheldImgPreview">
                                        <input type="file" class="file-upload" id="idHandheldImg">
                                        <span class="jia"></span>
                                         <div class="tits">${arr_ze[10]}</div>
                                    </div>
                                </div>
                                <button type="button" id="s2Btn">${arr_ze[11]}</button>
                            </div>
                        </div>
    
                        <div class="step3" id="StepThree">
                            <div class="tips f-cb">
                                <img class="waiting f-fl" src="../images/waiting.png" alt="">
                                <p class="f-fl">${arr_ze[12]}</p>
                            </div>
                        </div>
    
                        <div class="step4" id="StepFour">
                            <div class="tips">
                                <div class="f-cb">
                                    <img class="pass f-fl" src="../images/pass.png" alt="">
                                    <p class="f-fl">${arr_ze[13]}</p>
                                </div>
    
                                <div class="user-list">
                                    <!-- <table>
                                        <tr>
                                            <td>证件类型</td>
                                            <td>身份证</td>
                                        </tr>
                                        <tr>
                                            <td>证件号</td>
                                            <td>42********93</td>
                                        </tr>
                                        <tr>
                                            <td>姓名</td>
                                            <td>*勇</td>
                                        </tr>
                                    </table> -->
                                </div>
                            </div>
                        </div>
    
                        <div class="step5" id="StepFive">
                            <div class="tips">
                                <div class="f-cb" style="height: 60px;">
                                    <img class="denied f-fl" src="../images/denied.png" alt="">
                                    <p class="f-fl">${arr_ze[14]}</p>
                                </div>
    
                                <ul class="suggestion">
                                    <li>${arr_ze[15]}</li>
                                    <li>${arr_ze[16]}</li>
                                </ul>
    
                                <button>${arr_ze[17]}</button>
                            </div>
                        </div>
                    </div>`)
                $("#quit-load").click(function(e) {
                    e.preventDefault();
                    dataService.membershipService.getMemberLogout().then(function(response) {
                        if (response.state == 1) {
                            // 用户退出登录
                            userLogout();
                        }
                    });
                });
                // 获取用户认证信息
                dataService.membershipService.getAuthindentity().then(function(response) {
                    if (response.state == 1) {
                        if (response.data == null) {
                            $wrapper.find("#StepOne").css("display", "block");
                            $wrapper.find("#StepTwo").css("display", "block");
                            uploadDataToAudit($wrapper);
                        } else {
                            $wrapper.find("#StepOne").css("display", "none");
                            $wrapper.find("#StepTwo").css("display", "none");
                            var user_auth_state = response.data.id_status;
                            if (user_auth_state == 0) {
                                $wrapper.find("#StepThree").css("display", "block");
                            } else if (user_auth_state == 1) {
                                $wrapper.find("#StepFour").css("display", "block");
                                // 用户详细信息
                            } else if (user_auth_state == 2) {
                                $wrapper.find("#StepFive").css("display", "block");
                                $wrapper.find("#StepFive button").click(function() {
                                    $wrapper.find("#StepFive").css("display", "none");
                                    $wrapper.find("#StepOne").css("display", "block");
                                    $wrapper.find("#StepTwo").css("display", "block");
                                    uploadDataToAudit($wrapper);
                                });
                            } else {
                                $wrapper.find("#StepOne").css("display", "block");
                                $wrapper.find("#StepTwo").css("display", "block");
                                uploadDataToAudit($wrapper);
                            }
                        }
                    } else if (response.state == -1) {
                        var msg_position = $.inArray(response.msg, message_arr);
                        hintDialog("fa-exclamation-circle", "#b34242", message_dialog[msg_position]);
                        if (response.msg == 'LANG_NO_LOGIN') {
                            setTimeout(function() {
                                userLogout();
                            }, 2000);
                        }
                    }
                });
            });

            function uploadDataToAudit($wrapper) {
                // step1:
                // 获取姓氏,名字,证件号码 input
                var $family_name = $wrapper.find("#StepOne #familyName");
                var $family_name_state;
                var $given_name = $wrapper.find("#StepOne #givenName");
                var $given_name_state;
                var $id_number = $wrapper.find("#StepOne #idNumber");
                var $id_number_state;
                $family_name.blur(function() {
                    if ($(this).val().trim() == "") {
                        $(this).parent().next().text("姓名不能为空！").css({
                            color: "#f3bb2b",
                            transition: ".6s"
                        });
                    } else if ($(this).val().replace(/\s*/g, "").length < 2) {
                        $(this).parent().next().text("姓名不能少于2个字！").css({
                            color: "#f3bb2b",
                            transition: ".6s"
                        });
                    } else {
                        $(this).parent().next().text("");
                        $family_name_state = true;
                    }
                });
                $given_name.blur(function() {
                    if ($(this).val().trim() == "") {
                        $(this).parent().next().text("名字不能为空！").css({
                            color: "#f3bb2b",
                            transition: ".6s"
                        });
                    } else {
                        $(this).parent().next().text("");
                        $given_name_state = true;
                    }
                });
                $id_number.blur(function() {
                    if ($(this).val().trim() == "") {
                        $(this).parent().next().text("身份证号码不能为空！").css({
                            color: "#f3bb2b",
                            transition: ".6s"
                        });
                    } else {
                        $(this).parent().next().text("");
                        $id_number_state = true;
                    }
                });
                $("#StepOne #s1Btn").click(function() {
                    if ($family_name_state && $given_name_state && $id_number_state) {
                        $wrapper.find("#StepOne").css("display", "none");
                        $wrapper.find("#StepTwo").css("display", "block");
                    } else {
                        hintDialog("fa-exclamation-circle", "#b34242", "请完整填写表单信息");
                    }
                });

                // step2:
                // 文件上传
                var $id_front_img = $wrapper.find("#idFrontImg");
                var $id_front_img_preview = $wrapper.find("#idFrontImgPreview");
                var $id_back_img = $wrapper.find("#idBackImg");
                var $id_back_img_preview = $wrapper.find("#idBackImgPreview");
                var $id_handheld_img = $wrapper.find("#idHandheldImg");
                var $id_handheld_img_preview = $wrapper.find("#idHandheldImgPreview");

                userFileUploadToArea($id_front_img, $id_front_img_preview);
                userFileUploadToArea($id_back_img, $id_back_img_preview);
                userFileUploadToArea($id_handheld_img, $id_handheld_img_preview);

                // 点击提交
                $("#StepTwo #s2Btn").click(function() {

                    var addr1 = $id_front_img_preview.attr("src");
                    var addr2 = $id_back_img_preview.attr("src");
                    var addr3 = $id_handheld_img_preview.attr("src");
                    if ($family_name_state && $id_number_state && (addr1 != "../images/identification-example-1.png") && (addr1 != "../images/identification-example-1.png") && (addr1 != "../images/identification-example-1.png") ) {

                    } else {
                        hintDialog("fa-exclamation-circle", "#b34242", "请完整填写表单信息");
                        return ;
                    }
                    var data = {
                        nationality: "中国Chinese",
                        family_name: $family_name.val()[0],
                        given_name: $family_name.val().substring(1),
                        id_number: $id_number.val(),
                        idType: "idcard",
                        id_front_img: addr1,
                        id_back_img: addr2,
                        id_handheld_img: addr3
                    };

                    dataService.membershipService.authIdentity(data).then(function(response) {
                        // 请求成功跳转到等待页面
                        if (response.state == 1) {
                            $wrapper.find("#StepTwo").css("display", "none");
                            $wrapper.find("#StepOne").css("display", "none");
                            $wrapper.find("#StepThree").css("display", "block");
                            var msg_position = $.inArray(response.msg, message_arr);
                            hintDialog("fa-exclamation-circle", "#b34242", message_dialog[msg_position]);
                        } else if (response.state == -1) {
                            var msg_position = $.inArray(response.msg, message_arr);
                            hintDialog("fa-exclamation-circle", "#b34242", message_dialog[msg_position]);
                            setTimeout(function() {
                                history.go(0);
                            }, 3000);
                        }
                    });
                });
            }

            function userFileUploadToArea($id_front_img, $id_front_img_preview) {
                $id_front_img.change(function() {
                    dataService.membershipService.getAliOssPolicy().then(function(response) {
                        var data = response.data;
                        var file = $id_front_img[0].files[0];
                        var images_type = ['image/jpeg', 'image/png'];
                        var isexists = images_type.includes(file.type);
                        if (!isexists) {
                            hintDialog("fa-exclamation-circle", "#b34242", '文件格式必须为jpg、jpeg或png');
                            $id_front_img.val(null);
                            return;
                        }
                        if (file.size > 5 * 1024 * 1024) {
                            hintDialog("fa-exclamation-circle", "#b34242", '上传文件不能超过5M');
                            $id_front_img.val(null);
                            return;
                        }
                        var useruid = JSON.parse(sessionStorage.getItem("useruid"));
                        // 封装成 formData
                        var date = Date.parse(new Date());
                        var formData = new FormData();
                        formData.append("OSSAccessKeyId", data.accessid);
                        formData.append("policy", data.policy);
                        formData.append("Signature", data.signature);
                        formData.append("key", data.dir + useruid + file.name + date);
                        formData.append("success_action_status", "200");
                        formData.append("file", file);
                        // 上传
                        $.ajax({
                            url: data.host,
                            type: "POST",
                            data: formData,
                            processData: false,
                            contentType: false,
                            success: function() {
                                var url = data.host + "/" + data.dir + useruid + file.name + date;
                                $id_front_img_preview.attr("src", url);
                                $id_front_img.next().hide();

                            }
                        });
                    });
                });
            }
        }
    };
    var accountSecurity = {
        load: function() {
            viewService.getTemplate("view/accountSecurity.html").then(function(resHtml) {
                var $wrapper = $(resHtml);
                var arr_zh = ["账户信息", "账号", "退出登录", "安全设置", "邮箱", "手机", "密码", "交易密码", "谷歌验证", "身份认证",
                        "收款设置", "我的银行卡", "我的支付宝", "我的微信", "邀请", "我的邀请码", "我的邀请链接", "复制", "查看", "设置",
                        "修改", "未设置", "已设置", "未登录", "未绑定", "已绑定", "身份信息未认证", "身份信息审核中", "身份信息审核通过", "身份信息审核未通过，请重新提交",
                        "修改登录密码", "复制成功", "设置交易密码", "修改交易密码", "设置成功", "未认证", "已认证"
                    ],
                    arr_en = ["Account Information", "Account", "Logout", "Security Settings", "E-mail", "Mobile Phone", "password", "Transaction Password", "Certification", "Identity Authentication",
                        "Collection Setting", "My Bank Card", "My Alipay", "My WeChat", "Invitation", "My Invitation Code", "My Invitation Link", "Copy", "View", "Setting",
                        "Modify", "unset", "Has been set", "Not logged in", "Unbound", "Bind", "Identity information is not authenticated", "Identity information review", "Identity Information Auditing", "Identity information audit failed, please resubmit",
                        "Modify Login Password ", "Replication success", "Set transaction password", "Modify transaction password", "Set up successfully", "Uncertified", "Certified"
                    ],
                    arr_ze = language == "en" ? arr_en : arr_zh;
                $MainView.html($wrapper);
                $(".tradecenter").removeClass("cur");
                $(".tradecenter").siblings().removeClass("cur");
                // $MainView.css("background-image", "url(../images/person_bg.jpg)");
                $(".sidebar-nav").html($(`<ul>
                        <li>个人中心</li>
                        <li>
                            <a href="#/accountInfo">${aside_arr[0]}</a>
                        </li>
                        <li>
                            <a href="#/identityVerify">${aside_arr[1]}</a>
                        </li>
                        <li>
                            <a href="#/accountSecurity" class="cur">${aside_arr[2]}</a>
                        </li>
                        <li>
                            <a href="#/collection">${aside_arr[3]}</a>
                        </li>
                        <li>
                            <a href="#/addressManage">${aside_arr[4]}</a>
                        </li>
                        <li>
                            <a href="#/assetsRecord">${aside_arr[5]}</a>
                        </li>
                        <li>
                            <a href="#/tradeBill">${aside_arr[6]}</a>
                        </li>
                        <li>
                            <a href="#/myAssets">${aside_arr[7]}</a>
                        </li>
                        <!-- <li>
                            <a class="login-record" href="#/loginRecord">${aside_arr[9]}</a>
                        </li> -->
                        <li>
                            <a href="#/apiManager">${aside_arr[8]}</a>
                        </li>

                        <li>
                            <a href="#/invited">${aside_arr[9]}</a>
                        </li>
                        <li>
                            <a href="#" id="quit-load">退出登录</a>
                        </li>
                    </ul>`));
                $(".inner-account-security").html(`<div class="header">${aside_arr[11]}</div>
                <div class="user-account-security">
                <!--<div class="title">
                    ${arr_ze[3]}
                </div>-->
                <div>
                    <ul>
                        <!--<li>
                            <div class="inner-security f-fl">
                                <div class="inner_security-title">${arr_ze[4]}</div>
                                <div class="inner-security-content" id="EmailNum"></div>
                            </div>
                        </li>-->
                        <li>
                            <div class="inner-security f-fl">
                                <div class="inner_security-title">${arr_ze[5]}</div>
                                <div class="inner-security-content" id="PhoneNum"></div>
                            </div>
                        </li>
                        <li>
                            <div class="inner-security f-fl">
                                <div class="inner_security-title">${arr_ze[6]}</div>
                                <div class="inner-security-content" id="LoginPwd"></div>
                            </div>
                            <div class="inner-security-btn f-fr" id="LoginPwdCr">
                               
                            </div>
                        </li>
                        <li>
                            <div class="inner-security f-fl">
                                <div class="inner_security-title">${arr_ze[7]}</div>
                                <div class="inner-security-content" id="MoneyPwd"></div>
                            </div>
                            <div class="inner-security-btn f-fr" id="MoneyPwdCr">
                                
                            </div>
                        </li>
                        <!--<li>
                            <div class="inner-security f-fl">
                                <div class="inner_security-title">${arr_ze[8]}</div>
                                <div class="inner-security-content" id="GooglePwd"></div>
                            </div>
                            <div class="inner-security-btn f-fr">
                                <button>${arr_ze[19]}</button>
                            </div>
                        </li>-->
                        <li>
                            <div class="inner-security f-fl">
                                <div class="inner_security-title">${arr_ze[9]}</div>
                                <div class="inner-security-content" id="sf-span"></div>
                            </div>
                            <div class="inner-security-btn f-fr" id="sf-btn">
                            </div>
                        </li>
                    </ul>
                </div>
            </div>`);
                $("#asDialog").html(`<div class="dialog-content">
                <div class="inner" id="inner">
                    <div class="title f-cb">
                        <span></span>
                        <i class="f-fr fa fa-times"></i>
                    </div>
                    <div class="input-wrap old-pwd">
                        <label>${language == "en" ? "Original password ":"原密码"}：</label>
                        <input type="password"  autocomplete="new-password">
                    </div>
                    <div class="input-wrap new-pwd">
                        <label>${language == "en" ? "New password ":"新密码"}：</label>
                        <input type="password"  autocomplete="new-password">
                    </div>
                    <div class="input-wrap confirm-pwd">
                        <label>${language == "en" ? "Confirm  password ":"确认密码"}：</label>
                        <input type="password"  autocomplete="new-password">
                    </div>
                    <div class="input-wrap img-code f-cb">
                        <label>${language == "en" ? "Picture Code":"图形验证码"}：</label>
                        <input type="text" class="code-input f-fl">
                        <img src="" alt="" class="f-fl">
                    </div>
                    <div class="input-wrap mobile-code f-cb">
                        <label>${language == "en" ? "SMS Code":"短信验证码"}：</label>
                        <input type="text" class="code-input f-fl">
                        <button class="f-fl">${language == "en" ? "Get Code":"发送验证码"}</button>
                    </div>
                    <button class="submit">${language == "en" ? "Submit":"提交"}</button>
                </div>
            </div>`);
                $("#asCurrencyDialog").html(`<div class="dialog-content">
            <div class="inner" id="inner">
                <div class="title f-cb">
                    <span></span>
                    <i class="f-fr fa fa-times"></i>
                </div>
                <div class="input-wrap new-pwd">
                    <label>${language == "en" ? "Trader Password":"交易密码"}：</label>
                    <input type="password"  autocomplete="new-password">
                </div>
                <div class="input-wrap confirm-pwd">
                    <label>${language == "en" ? "Confirm  password":"确认密码"}：</label>
                    <input type="password"  autocomplete="new-password">
                </div>
                <div class="input-wrap img-code f-cb">
                    <label>${language == "en" ? "Picture Code":"图形验证码"}：</label>
                    <input type="text" class="code-input f-fl">
                    <img src="" alt="" class="f-fl">
                </div>
                <div class="input-wrap mobile-code f-cb">
                    <label>${language == "en" ? "SMS Code":"短信验证码"}：</label>
                    <input type="text" class="code-input f-fl">
                    <button class="f-fl">${language == "en" ? "Get Code":"发送验证码"}</button>
                </div>
                <button class="submit">${language == "en" ? "Submit":"提交"}</button>
            </div>
        </div>`);
                var regPhone = new RegExp("^[1][3,4,5,7,8][0-9]{9}$");
                var regEmail = new RegExp("^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(.[a-zA-Z0-9-]+)*.[a-zA-Z0-9]{2,6}$");
                $("#quit-load").click(function(e) {
                    e.preventDefault();
                    dataService.membershipService.getMemberLogout().then(function(response) {
                        if (response.state == 1) {
                            // 用户退出登录
                            userLogout();
                        }
                    });
                });
                $('<button>' + arr_ze[18] + '</button>').click(function() {
                    location.href = "#/identityVerify"
                }).appendTo($("#sf-btn"));
                dataService.membershipService.getAuthindentity().then(function(response) {
                    if (response.state == 1) {
                        if (response.data == null) {
                            //未认证
                            $("#sf-span").text(arr_ze[26])
                        } else {
                            var user_auth_state = response.data.id_status;
                            if (user_auth_state == 0) {
                                //审核中
                                $("#sf-span").text(arr_ze[27])
                            } else if (user_auth_state == 1) {
                                // 审核通过
                                $("#sf-span").text(arr_ze[28])
                                    // 用户详细信息
                            } else if (user_auth_state == 2) {
                                // 审核未通过，请重新提交
                                $("#sf-span").text(arr_ze[29])

                            } else {
                                //未认证
                                $("#sf-span").text(arr_ze[26])
                            }
                        }
                    } else if (response.state == -1) {
                        var msg_position = $.inArray(response.msg, message_arr);
                        hintDialog("fa-exclamation-circle", "#b34242", message_dialog[msg_position]);
                        if (response.msg == 'LANG_NO_LOGIN') {
                            setTimeout(function() {
                                userLogout();
                            }, 2000);
                        }
                    }
                });
                dataService.membershipService.getMember().then(function(response) {
                    if (response.state == 1) {
                        var userinfo = response.data;
                        var data = response.data;
                        var $login_pwd = $wrapper.find("#LoginPwd");
                        var $phone_num = $wrapper.find("#PhoneNum");
                        var $email_num = $wrapper.find("#EmailNum");
                        var $google_pwd = $wrapper.find("#GooglePwd");

                        var user_account = data.m_name;
                        var $dialog = $("#asDialog");
                        /*$("<span></span>").text("未设置").appendTo($google_pwd);
                        $('<span class="f-fr"></span>').text("设置").off().click(function () {
                            // changeCurrencyPwd($dialog, $wrapper, user_account);
                        }).appendTo($google_pwd);*/
                        $("<span></span>").text("******").appendTo($login_pwd);

                        $('<button></button>').text(arr_ze[20]).off().click(function() {
                            $dialog.css("display", "block");
                            $wrapper.find(".title span").text(arr_ze[30]);
                            var $old_pwd = $dialog.find(".old-pwd input");
                            var $new_pwd = $dialog.find(".new-pwd input");
                            var $confirm_pwd = $dialog.find(".confirm-pwd input");
                            var $img_code = $dialog.find(".img-code input");
                            var $img_code_btn = $dialog.find(".img-code img");
                            var $mobile_code = $dialog.find(".mobile-code input");
                            var $mobile_code_btn = $dialog.find(".mobile-code button");
                            $dialog.find(".title i").click(function() {
                                $dialog.css("display", "none");
                                $old_pwd.val("");
                                $new_pwd.val("");
                                $confirm_pwd.val("");
                                $img_code.val("");
                                $mobile_code_btn.val("");
                            });
                            getKaptcha($img_code_btn);

                            $img_code_btn.off().click(function(e) {
                                e.stopPropagation();
                                getKaptcha($img_code_btn);
                            });
                            $mobile_code_btn.click(function() {
                                var isimgCode = $img_code.val();
                                var isclick = $mobile_code_btn.prop('disabled');
                                if (isclick == true || isimgCode == '') {
                                    return;
                                }
                                var code = $img_code.val();
                                var token = $img_code_btn.attr("data-token");
                                dataService.accountService.getMail(token, code, user_account, "forgot").then(function(response) {
                                    if (response.state == 1) {
                                        var msg_position = $.inArray('Sent_successfully', message_arr);
                                        hintDialog("fa-check-circle", "#1c9547", message_dialog[msg_position]);
                                        countDownBtn($mobile_code_btn);
                                    } else if (response.state == -1) {
                                        getKaptcha($img_code_btn);
                                        var msg_position = $.inArray(response.msg, message_arr);
                                        hintDialog("fa-exclamation-circle", "#b34242", message_dialog[msg_position]);
                                    }
                                });
                            });
                            $dialog.find("button.submit").click(function() {
                                var data = {
                                    m_security_pwd: $old_pwd.val(),
                                    m_pwd: $confirm_pwd.val(),
                                    sms_code: $mobile_code.val()
                                };
                                dataService.membershipService.resetPwd(data).then(function(response) {
                                    if (response.state == 1) {
                                        var msg_position = $.inArray('Successfully_modified', message_arr);
                                        hintDialog("fa-check-circle", "#1c9547", message_dialog[msg_position]);
                                        dataService.membershipService.getMemberLogout().then(function(response) {
                                            if (response.state == 1) {
                                                login_state = false;
                                                sessionStorage.setItem("loginState", JSON.stringify(login_state));
                                                $headlogin.html("");
                                                $headlogout.css("display", "block");
                                                location.href = "#/login";
                                            }
                                        });
                                    } else if (response.state == -1) {
                                        getKaptcha($img_code_btn);
                                        var msg_position = $.inArray(response.msg, message_arr);
                                        hintDialog("fa-exclamation-circle", "#b34242", message_dialog[msg_position]);
                                    }
                                });
                            });
                        }).appendTo($("#LoginPwdCr"));
                        if (regPhone.test(user_account)) {
                            $("<span></span>").text(data.m_name_hidden).appendTo($phone_num);
                            $("<span></span>").text(arr_ze[23]).appendTo($email_num);
                        } else if (regEmail.test(user_account)) {
                            $("<span></span>").text(arr_ze[23]).appendTo($phone_num);
                            $("<span></span>").text(data.m_name_hidden).appendTo($email_num);
                        }
                        dataService.membershipService.isSetCoinPwd().then(function(response) {
                            var data = response.data;
                            if (response.state == 1) {
                                var $dialog = $("#asCurrencyDialog");
                                var $money_pwd = $wrapper.find("#MoneyPwd");
                                if (data == "0") {
                                    $("<span></span>").text(arr_ze[21]).appendTo($money_pwd);
                                    $('<button></button>').text(arr_ze[19]).off().click(function() {
                                        changeCurrencyPwd($dialog, $wrapper, user_account, 0, arr_ze);
                                    }).appendTo($("#MoneyPwdCr"));
                                } else {
                                    $("<span></span>").text(arr_ze[22]).appendTo($money_pwd);

                                    $('<button></button>').text(arr_ze[20]).off().click(function() {
                                        changeCurrencyPwd($dialog, $wrapper, user_account, 1, arr_ze);
                                    }).appendTo($("#MoneyPwdCr"));
                                }
                            }
                        });
                    } else if (response.state == -1) {
                        var msg_position = $.inArray(response.msg, message_arr);
                        hintDialog("fa-exclamation-circle", "#b34242", message_dialog[msg_position]);
                        if (response.msg == 'LANG_NO_LOGIN') {
                            setTimeout(function() {
                                userLogout();
                            }, 2000);
                        }
                    }
                });
            });

            function changeCurrencyPwd($dialog, $wrapper, user_account, num, arr_ze) {
                $dialog.css("display", "block");
                var arr = [arr_ze[32], arr_ze[33]]
                $wrapper.find(".title span").text(arr[num]);
                var $new_pwd = $dialog.find(".new-pwd input");
                var $confirm_pwd = $dialog.find(".confirm-pwd input");
                var $img_code = $dialog.find(".img-code input");
                var $img_code_btn = $dialog.find(".img-code img");
                var $mobile_code = $dialog.find(".mobile-code input");
                var $mobile_code_btn = $dialog.find(".mobile-code button");
                $dialog.find(".title i").off().click(function() {
                    $dialog.css("display", "none");
                    $new_pwd.val("");
                    $confirm_pwd.val("");
                    $mobile_code.val("");
                    $img_code.val("");
                });
                getKaptcha($img_code_btn);
                $img_code_btn.off().click(function(e) {
                    e.stopPropagation();
                    getKaptcha($img_code_btn);
                });
                $mobile_code_btn.click(function() {
                    var isimgCode = $img_code.val();
                    var isclick = $mobile_code_btn.prop('disabled');
                    if (isclick == true || isimgCode == '') {
                        return;
                    }
                    var code = $img_code.val();
                    var token = $img_code_btn.attr("data-token");
                    dataService.accountService.getMail(token, code, user_account, "forgot").then(function(response) {
                        if (response.state == 1) {
                            var msg_position = $.inArray('Sent_successfully', message_arr);
                            hintDialog("fa-check-circle", "#1c9547", message_dialog[msg_position]);
                            countDownBtn($mobile_code_btn);
                        } else if (response.state == -1) {
                            getKaptcha($img_code_btn);
                            var msg_position = $.inArray(response.msg, message_arr);
                            hintDialog("fa-exclamation-circle", "#b34242", message_dialog[msg_position]);
                        }
                    });
                });
                $dialog.find("button.submit").off().click(function() {
                    var data = {
                        m_security_pwd: $confirm_pwd.val(),
                        sms_code: $mobile_code.val()
                    };
                    dataService.membershipService.setSecPwd(data).then(function(response) {
                        if (response.state == 1) {
                            hintDialog("fa-check-circle", "#1c9547", arr_ze[34]);
                            setTimeout(function() {
                                history.go(0);
                            }, 1500);
                        } else if (response.state == -1) {
                            getKaptcha($img_code_btn);
                            var msg_position = $.inArray(response.msg, message_arr);
                            hintDialog("fa-exclamation-circle", "#b34242", message_dialog[msg_position]);
                        }
                    });
                });
            }

            function getKaptcha(code) {
                dataService.accountService.getKaptcha().then(function(response) {
                    var imgcode = response.check_code_img;
                    var tokencode = response.check_code_token;
                    code.attr({
                        src: imgcode,
                        "data-token": tokencode
                    });
                });
            }

            function countDownBtn($btn) {
                var second = 60;
                if (second > 0) {
                    second--;
                    $btn.text(second + 's');
                    $btn.prop('disabled', true);
                    $btn.addClass('forbidBtn');
                }
                var msgInterval = setInterval(function() {
                    if (second > 0) {
                        second--;
                        $btn.text(second + 's');
                        $btn.prop('disabled', true);
                        $btn.addClass('forbidBtn');
                    }
                    if (second == 0) {
                        clearInterval(msgInterval);
                        $btn.text(language == "en" ? "Get Code" : '获取验证码');
                        $btn.prop('disabled', false);
                        $btn.removeClass('forbidBtn');
                    }
                }, 1000);
            }

        }
    };
    var loginRecord = {
        load: function() {
            viewService.getTemplate("view/loginRecord.html").then(function(resHtml) {
                var $wrapper = $(resHtml);
                $MainView.html($wrapper);
                $MainView.css("background-image", "none");
                var $dlmain = $wrapper.find("#dlMain");
                $(".tradecenter").removeClass("cur");
                $(".tradecenter").siblings().removeClass("cur");
                $("#quit-load").click(function(e) {
                    e.preventDefault();
                    dataService.membershipService.getMemberLogout().then(function(response) {
                        if (response.state == 1) {
                            // 用户退出登录
                            userLogout();
                        }
                    });
                });
                // 请求登录日志数据
                dataService.membershipService.getLoginlog().then(function(response) {
                    if (response.state == 1) {
                        var $log = response.data;
                        for (var i = 0; i < $log.length; i++) {
                            $dl = $("<dl></dl>").appendTo($dlmain);
                            $dd = $("<dd></dd>").appendTo($dl);
                            $row = $('<div class="ilr-row"></div>').appendTo($dd);
                            $("<span></span>").text($log[i].m_name).appendTo($row);
                            $("<span></span>").text($log[i].oper_ip).appendTo($row);
                            $("<span></span>").text($log[i].oper_time).appendTo($row);
                        }
                    } else if (response.state == -1) {
                        var msg_position = $.inArray(response.msg, message_arr);
                        hintDialog("fa-exclamation-circle", "#b34242", message_dialog[msg_position]);
                        if (response.msg == 'LANG_NO_LOGIN') {
                            setTimeout(function() {
                                userLogout();
                            }, 2000);
                        }
                    }
                });
            });
        }
    };
    var myAssets = {
        load: function() {
            viewService.getTemplate("view/myAssets.html").then(function(resHtml) {
                var $wrapper = $(resHtml);
                var arr_zh = ["净资产折合", "搜索币种", "隐藏资产为0的币种", "币种", "可用", "冻结", "总额", "操作", "充值", "提现", "充币", "提币","划转"],
                    arr_en = ['Estimated Value', "Search Currency", "Hide currencies with 0 asset", "Currency", "Available", "Freeze", "Total", "Operation", "Top up", "Withdraw", "Deposit", "Withdraw","Transfer"],
                    arr_ze = language == "en" ? arr_en : arr_zh;
                $MainView.html($wrapper);
                $MainView.css("background-image", "none");
                $(".tradecenter").removeClass("cur");
                $(".tradecenter").siblings().removeClass("cur");
                dataService.membershipService.getAssetsLst().then(function(response) {
                    if (response.state == 1) {
                        var $estimate_all_assets = $wrapper.find("#innerMyAssets .estimate-all-assets").html('');
                        var $currency_type_detail = $wrapper.find("#innerMyAssets .currency-type-detail").html('');
                        var $title_wrap = $('<div class="title-wrap f-fr"></div>').appendTo($currency_type_detail);
                        // $('<div class="tw-title f-fl">币种资产明细</div>').appendTo($title_wrap);
                        // var $search = $('<div class="tw-search-box f-fl"></div>').appendTo($title_wrap);
                        var $search = $('<div class="tw-search-box f-fr"></div>').appendTo($currency_type_detail);
                        $('<i class="fa fa-search"></i>').appendTo($search);
                        $('<input type="text" class="uppercase" placeholder="' + arr_ze[1] + '">').appendTo($search);

                        $('<div class="tw-check-box f-fl"><input type="checkbox" style="margin-right:6px;vertical-align:middle">' + arr_ze[2] + '</div>').appendTo($title_wrap);
                      
                        var $table_wrap = $('<div class="table-wrap"></div>').appendTo($currency_type_detail);
                        $table_wrap.append(
                            `<div class="currency-header sort-icon-wrap">
                                <span class="type">${arr_ze[3]}</span>
                                <span class="use">${arr_ze[4]}</span>
                                <span class="freeze">${arr_ze[5]}</span>
                                <span class="estimate">${arr_ze[6]}</span>
                                <span class="operate">${arr_ze[7]}</span>
                            </div>`
                        );
                        var $currency_list = $('<div class="currency-list"></div>').appendTo($table_wrap);
                        var currencyLst = response.data.currencyLst;
                        var accountsLst = response.data.accountsLst;
                        var accountsLst_obj = {};
                        var accountsLst_arr = [];
                        var currencyLst_obj = {};
                        var currencyLst_arr = [];
                        var userJC = 0;
                        for (var i in accountsLst) {
                            userJC += accountsLst[i].zc_balance;
                            accountsLst_obj[accountsLst[i].currency] = accountsLst[i];
                            if (accountsLst[i].total_balance) {
                                accountsLst_arr.push(accountsLst[i].currency);
                            }
                        }

                        dataService.marketService.getTicker('BTCUSDT').then(function(response) {
                            var btcjc_price = response.close;
                            var userBTC = (userJC / btcjc_price).toFixed(6);
                            var $eaa_inner = $('<div class="eaa-inner f-cb"></div>').appendTo($estimate_all_assets);
                            var $assets = $('<div class="assets f-fl"></div>').appendTo($eaa_inner);
                            $(`<span>${arr_ze[0]}:  </span>`).appendTo($assets);
                            $(`<span style="font-size:20px;">${userJC.toFixed(2)} USDT  </span>`).appendTo($assets);
                            $(`<span> ≈ ${userBTC=="NaN"?"0.000000":userBTC} BTC </span>`).appendTo($assets);
                            var $btns = $('<div class="btns f-fr"></div>').appendTo($eaa_inner);
                            // $('<button class="btn btn-topup">法币充值</button>').click(function () {
                            //     location.href = "#/otc";
                            // }).appendTo($btns);
                            // $('<button class="btn btn-getcoin">法币提现</button>').click(function () {
                            //     location.href = "#/otc";
                            // }).appendTo($btns);
                        })

                        for (var i in currencyLst) {
                            currencyLst_obj[currencyLst[i].currency] = currencyLst[i];
                            currencyLst_arr.push(currencyLst[i].currency);
                            var $dl = loadDataToDl(currencyLst, accountsLst_obj, accountsLst_arr, i, arr_ze);
                            $currency_list.append($dl);
                        }
                        // 隐藏资产为0的币种
                        var $checkbox = $("#innerMyAssets .tw-check-box input");
                        $checkbox.change(function(e) {
                            e.preventDefault();
                            if ($checkbox.prop("checked")) {
                                $currency_list.html("");
                                for (var i in currencyLst) {
                                    var position = $.inArray(currencyLst[i].currency, accountsLst_arr);
                                    if (position >= 0) {
                                        var $dl = loadDataToDl(currencyLst, accountsLst_obj, accountsLst_arr, i, arr_ze);
                                        $currency_list.append($dl);
                                    }
                                }
                            } else {
                                $currency_list.html("");
                                for (var i in currencyLst) {
                                    var $dl = loadDataToDl(currencyLst, accountsLst_obj, accountsLst_arr, i, arr_ze);
                                    $currency_list.append($dl);
                                }
                            }
                        });
                        // 币种搜索
                        var $search = $("#innerMyAssets .tw-search-box input");
                        $search.bind("input propertychange", function() {
                            var currencyLst_filter_arr = [];
                            var currencyLst_filter = [];
                            currencyLst_filter_arr = currencyLst_arr.filter(item => item.indexOf($(this).val().toUpperCase()) != -1);
                            for (var i in currencyLst) {
                                if ($.inArray(currencyLst[i].currency, currencyLst_filter_arr) >= 0) {
                                    currencyLst_filter.push(currencyLst[i]);
                                }
                            }
                            $currency_list.html("");
                            for (var i in currencyLst_filter) {
                                var $dl = loadDataToDl(currencyLst_filter, accountsLst_obj, accountsLst_arr, i, arr_ze);
                                $currency_list.append($dl);
                            }
                        });
                    }else if (response.state == -1) {
                        var msg_position = $.inArray(response.msg, message_arr);
                        hintDialog("fa-exclamation-circle", "#b34242", message_dialog[msg_position]);
                        if (response.msg == 'LANG_NO_LOGIN') {
                            // setTimeout(function() {
                                userLogout();
                            // }, 2000);
                        }
                    }
                });

                function loadDataToDl(c, ao, aa, i, arr_ze) {
                    var position = $.inArray(c[i].currency, aa);
                    var $dl = $("<dl></dl>");
                    var $dd = $("<dd></dd>").appendTo($dl);
                    var $cl_row = $('<div class="cl-row"></div>').appendTo($dd);
                    $("<span class='a" + i + "'></span>").text(c[i].currency).appendTo($cl_row);
                    $("<span></span>").text(position >= 0 ? ao[c[i].currency].balance : 0).appendTo($cl_row);
                    $("<span></span>").text(position >= 0 ? ao[c[i].currency].frozen_balance : 0).appendTo($cl_row);
                    $("<span></span>").text(position >= 0 ? ao[c[i].currency].total_balance : 0).appendTo($cl_row);
                    var $span = $("<span></span>").appendTo($cl_row);
                   
                    if (c[i].currency_name.toUpperCase() == "USDT") {
                        $("<em class='em1'>" + arr_ze[8] + "</em>").click(function() {
                            location.href = "#/otc";
                        }).appendTo($span);
                        $("<em class='em2'>" + arr_ze[9] + "</em>").click(function() {
                            location.href = "#/otc";
                        }).appendTo($span);
						$("<em class='em1'>" + arr_ze[12] + "</em>").click(function() {
						    location.href = "#/otc";
						}).appendTo($span);
                        if (c[i].can_recharge == 0) {
                            $("<em class='em1' style=''>" + arr_ze[10] + "</em>").css('color', '#333').appendTo($span);
                        } else {
                            $("<em class='em1'>" + arr_ze[10] + "</em>").click(function() {
                                location.href = "#/recharge?currency=" + c[i].currency;
                            }).appendTo($span);
                        }
                        if (c[i].can_withdraw == 0) {
                            $("<em class='em2' style=''>" + arr_ze[11] + "</em>").css('color', '#333').appendTo($span);
                        } else {
                            $("<em class='em2'>" + arr_ze[11] + "</em>").click(function() {
                                location.href = "#/withdraw?currency=" + c[i].currency;
                            }).appendTo($span);
                        }
                         return $dl;
                    } else {
						$("<em class='em1'>" + arr_ze[12] + "</em>").click(function() {
						    location.href = "#/otc";
						}).appendTo($span);
                        if (c[i].can_recharge == 0) {
                            $("<em class='em1' style=''>" + arr_ze[10] + "</em>").css('color', '#333').appendTo($span);
                        } else {
                            $("<em class='em1'>" + arr_ze[10] + "</em>").click(function() {
                                location.href = "#/recharge?currency=" + c[i].currency;
                            }).appendTo($span);
                        }
                        if (c[i].can_withdraw == 0) {
                            $("<em class='em2' style=''>" + arr_ze[11] + "</em>").css('color', '#333').appendTo($span);
                        } else {
                            $("<em class='em2'>" + arr_ze[11] + "</em>").click(function() {
                                location.href = "#/withdraw?currency=" + c[i].currency;
                            }).appendTo($span);
                        }
                    // }

                    return $dl;
                }
               } 
            });
        }
    };
    var addressManage = {
        load: function() {
            viewService.getTemplate("view/addressManage.html").then(function(resHtml) {
                var $wrapper = $(resHtml);
                var arr_zh = ["地址管理", "币种", "请选择您的币种", "地址", "请输入提币地址", "备注", "请输入备注(不超过20个字符)", "图片验证码", "请输入图片验证码", "验证码",
                        "请输入验证码", "获取验证码", "默认发送到当前用户登录的手机或邮箱", "添加", "地址列表", "提币地址", "操作"
                    ],
                    arr_en = ["Address Management", "Currency", " Please choose your currency", "Address", "Please enter the coin-withdrawal address", "Remarks", "Please enter remarks(no more than 20 characters)", "Picture Code", "Please enter the picture code", "Code",
                        "Please enter the code", "Get Code", "It is default to be sent to the mobile phone or mailbox that the user login with.", "Add", "Address list", "Coin-withdrawal Address", "Operation"
                    ],
                    arr_ze = language == "en" ? arr_en : arr_zh;
                $MainView.html($wrapper);
                $(".tradecenter").removeClass("cur");
                $(".tradecenter").siblings().removeClass("cur");
                // $MainView.css("background-image", "url(../images/person_bg.jpg)");
                $(".sidebar-nav").html(`<ul>
                        <li>个人中心</li>
                        <li>
                            <a href="#/accountInfo">${aside_arr[0]}</a>
                        </li>
                        <li>
                            <a href="#/identityVerify">${aside_arr[1]}</a>
                        </li>
                        <li>
                            <a href="#/accountSecurity">${aside_arr[2]}</a>
                        </li>
                        <li>
                            <a href="#/collection">${aside_arr[3]}</a>
                        </li>
                        <li>
                            <a href="#/addressManage" class="cur">${aside_arr[4]}</a>
                        </li>
                        <li>
                            <a href="#/assetsRecord">${aside_arr[5]}</a>
                        </li>
                        <li>
                            <a href="#/tradeBill">${aside_arr[6]}</a>
                        </li>
                        <li>
                            <a href="#/myAssets">${aside_arr[7]}</a>
                        </li>
                        <!-- <li>
                            <a class="login-record" href="#/loginRecord">${aside_arr[9]}</a>
                        </li> -->
                        <li>
                            <a href="#/apiManager">${aside_arr[8]}</a>
                        </li>

                        <li>
                            <a href="#/invited">${aside_arr[9]}</a>
                        </li>
                        <li>
                            <a href="#" id="quit-load">退出登录</a>
                        </li>
                    </ul>`);
                $("#innerAddressManager").html(`<div class="header">${arr_ze[0]}</div>
                <div class="addressmanager-main">
                    <div class="am-inner" style="position: relative;">
                        <div class="coin-type ">
                            <div class=" address-input">
                                <label>${arr_ze[1]}</label>
                                <select >
                                    <option value="">${arr_ze[2]}</option>
                                </select>
                            </div>
                            <div class=" address-input coin-address" >
                                <label style="display: inline-block;float: none;">${arr_ze[3]}</label>
                                <input type="text" style="width:427px; " placeholder="${arr_ze[4]}">
                            </div>
                        </div>
                        <!-- <div class="coin-address ">
                            
                        </div> -->
                        <div class="coin-note input-wrap">
                            <div class="address-input f-fl">
                                <label>${arr_ze[5]}</label>
                                <input type="text" style="width:612px;padding-right:20px" placeholder="${arr_ze[6]}">
                                <button type="button" class="btn-add f-fr" id="addBtn">${arr_ze[13]}</button>
                            </div>    
                        </div>
                        <div class="i-code-input code-input input-wrap f-cb" style="display:none">
                            <div class="i-code-input f-fl address-input">
                                <label style="width:110px;">${arr_ze[7]}</label>
                                <input class="f-fl" type="text" style="padding-left:5px;width:198px" placeholder="${arr_ze[8]}">
                                <img class="img-code code f-fl" src="">
                            </div>
                            <div class="m-code-input f-fl address-input" style="margin-left: 10px;">
                                <label style="width:60px;">${arr_ze[9]}</label>
                                <input class="f-fl" type="text" style="padding-left:10px;" placeholder="${arr_ze[10]}">
                                <div class="mobile-code code f-fl">${arr_ze[11]}</div>
                            </div>

                        </div>
                        <!-- <div class="m-code-input code-input input-wrap f-cb">
                            
                        </div> -->
                        <div class="tips">${arr_ze[12]}</div>
                        
                    </div>
                </div>
                <div class="address-list">
                    <div class="al-title">${arr_ze[14]}</div>
                    <div class="al-list">
                        <div class="al-list-header">
                            <span class="selectoption">
                                <select class="type">
                                    <option value="ZC">${arr_ze[1]}</option>
                                </select>
                            </span>
                            <span class="addr">${arr_ze[15]}</span>
                            <span class="note">${arr_ze[5]}</span>
                            <span class="operate">${arr_ze[16]}</span>
                        </div>
                        <div class="al-list-main" id="alListMain"></div>
                    </div>
                </div>`)
                $("#quit-load").click(function(e) {
                    e.preventDefault();
                    dataService.membershipService.getMemberLogout().then(function(response) {
                        if (response.state == 1) {
                            // 用户退出登录
                            userLogout();
                        }
                    });
                });
                var $select = $wrapper.find("#innerAddressManager select");
                var $mobilecode = $wrapper.find("#innerAddressManager .mobile-code");
                var $addrList = $wrapper.find("#innerAddressManager #alListMain");
                var currency = $("#innerAddressManager select");
                var addr = $("#innerAddressManager .coin-address input");
                var addrlabel = $("#innerAddressManager .coin-note input");
                var $imgcode = $wrapper.find("#innerAddressManager .img-code");
                var $imgcode_input = $wrapper.find('#innerAddressManager .i-code-input input');
                var mobilecode = $("#innerAddressManager .m-code-input input");
                var $addBtn = $("#innerAddressManager #addBtn");
                dataService.membershipService.getAssetsLst().then(function(response) {
                    if (response.state == 1) {
                        var currencyLst = response.data.currencyLst;
                        var currencyLst_arr = [];
                        for (var i in currencyLst) {
                            currencyLst_arr.push(currencyLst[i].currency);
                        }
                        for (var i = 0; i < currencyLst_arr.length; i++) {
                            if (currencyLst_arr[i].toLowerCase() != "usdt") {
                                $(`<option value="${currencyLst_arr[i]}"> ${currencyLst_arr[i]} </option>`).appendTo($select);

                            }
                        }
                    } else if (response.state == -1) {
                        var msg_position = $.inArray(response.msg, message_arr);
                        hintDialog("fa-exclamation-circle", "#b34242", message_dialog[msg_position]);
                        if (response.msg == 'LANG_NO_LOGIN') {
                            setTimeout(function() {
                                userLogout();
                            }, 2000);
                        }
                    }
                });
                getKaptcha($imgcode);
                $imgcode.click(function(e) {
                    e.stopPropagation();
                    getKaptcha($imgcode);
                });
                var useraccount;
                dataService.membershipService.getMember().then(function(response) {
                    if (response.state == 1) {
                        useraccount = response.data.m_name;
                    }
                });
                $mobilecode.click(function() {
                    var isimgCode = $imgcode_input.val();
                    var isclick = $mobilecode.prop('disabled');
                    // console.log(isimgCode);
                    if (isclick == true || isimgCode == '') {
                        hintDialog("fa-exclamation-circle", "#b34242", language == "en" ? "Pleace enter the picture code" : "请输入图形验证码");
                        return;
                    }
                    var code = $("#innerAddressManager .i-code-input input").val();
                    var token = $imgcode.attr("data-token");
                    dataService.accountService.getMail(token, code, useraccount, "forgot").then(function(response) {
                        if (response.state == 1) {
                            var msg_position = $.inArray('Sent_successfully', message_arr);
                            hintDialog("fa-check-circle", "#1c9547", message_dialog[msg_position]);
                            countDownBtn($mobilecode);
                        } else if (response.state == -1) {
                            getKaptcha($imgcode);
                            var msg_position = $.inArray(response.msg, message_arr);
                            hintDialog("fa-exclamation-circle", "#b34242", message_dialog[msg_position]);
                        }
                    });
                });
                $addBtn.click(function() {
                    if (addrlabel.val()) {
                        $addBtn.prop('disabled', true);
                        $addBtn.find('.loading').css('display', 'block');
                        dataService.accountService.saveWithdrawAddr(currency.val(), addrlabel.val(), addr.val(), mobilecode.val()).then(function(response) {
                            if (response.state == 1) {
                                $addBtn.prop('disabled', false);
                                hintDialog("fa-check-circle", "#1c9547", "添加成功");
                                setTimeout(function() {
                                    history.go(0);
                                }, 2000);
                            } else {
                                $addBtn.prop('disabled', false);
                                getKaptcha($imgcode);
                                var msg_position = $.inArray(response.msg, message_arr);
                                hintDialog("fa-exclamation-circle", "#b34242", message_dialog[msg_position]);
                            }
                        });
                    } else {
                        $addBtn.prop('disabled', false);
                        var msg_position = $.inArray('Complete_information', message_arr);
                        hintDialog("fa-exclamation-circle", "#b34242", message_dialog[msg_position]);
                    }
                });
                $("#innerAddressManager select.type").change(function() {
                    var currency = $(this).val();
                    getCurrencyList(currency, $addrList);
                });
            });

            function getCurrencyList(currency, $addrList) {
                dataService.accountService.getWithdrawAddr(currency).then(function(response) {

                    if (response.state == 1) {
                        if (response.data.length > 0) {
                            var lists = response.data;
                            $addrList.html("");
                            for (var i = 0; i < lists.length; i++) {
                                loadAddressToList(i, lists, currency, $addrList);
                            }
                        } else {
                            $addrList.html("");
                        }
                    }
                });
            }

            function loadAddressToList(i, lists, currency, $addrList) {
                var $dl = $("<dl></dl>").appendTo($addrList);
                var $dd = $("<dd></dd>").appendTo($dl);
                var $row = $('<div class="al-row"></div>').appendTo($dd);
                $("<span></span>").text(lists[i].currency).appendTo($row);
                $("<span></span>").text(lists[i].addr).appendTo($row);
                $("<span></span>").text(lists[i].addr_label).appendTo($row);
                $("<span></span>").text("删除").click(function(e) {
                    e.stopPropagation();
                    var data = {
                        "id": lists[i].id
                    }
                    dataService.accountService.delWithdrawAddr(data).then(function(response) {
                        if (response.state == 1) {
                            hintDialog("fa-exclamation-circle", "#1c9547", "删除成功！");
                            getCurrencyList(currency, $addrList);
                        } else if (response.state == -1) {
                            var msg_position = $.inArray(response.msg, message_arr);
                            hintDialog("fa-exclamation-circle", "#b34242", message_dialog[msg_position]);
                        }
                    });
                }).appendTo($row);
            }

            function getKaptcha(code) {
                dataService.accountService.getKaptcha().then(function(response) {
                    var imgcode = response.check_code_img;
                    var tokencode = response.check_code_token;
                    code.attr({
                        src: imgcode,
                        "data-token": tokencode
                    });
                });
            }

            function countDownBtn($btn) {
                var second = 60;
                if (second > 0) {
                    second--;
                    $btn.text(second + 's重新发送');
                    $btn.prop('disabled', true);
                    $btn.addClass('forbidBtn');
                }
                var msgInterval = setInterval(function() {
                    if (second > 0) {
                        second--;
                        $btn.text(second + 's重新发送');
                        $btn.prop('disabled', true);
                        $btn.addClass('forbidBtn');
                    }
                    if (second == 0) {
                        clearInterval(msgInterval);
                        $btn.text('获取验证码');
                        $btn.prop('disabled', false);
                        $btn.removeClass('forbidBtn');
                    }
                }, 1000);
            }

        }
    };
    var assetsRecord = {
        load: function() {
            viewService.getTemplate("view/assetsRecord.html").then(function(resHtml) {
                var $wrapper = $(resHtml);
                $MainView.html($wrapper);
                var arr_zh = ["充币记录", "提币记录", "日期", "币种", "类型", "数量", "手续费", "状态", "上一页", "下一页", "充提记录"],
                    arr_en = ["Deposit History", "Withdrawal History", "Time", "Currency", "Type", "Amount", "Service Fee", "status", "last page", "next page ", "Topping up and Withdrawal Records"],
                    arr_ze = language == "en" ? arr_en : arr_zh;
                $(".tradecenter").removeClass("cur");
                $(".tradecenter").siblings().removeClass("cur");
                // $MainView.css("background-image", "url(../images/person_bg.jpg)");
                $(".sidebar-nav").html(`<ul>
                        <li>个人中心</li>
                        <li>
                            <a href="#/accountInfo">${aside_arr[0]}</a>
                        </li>
                        <li>
                            <a href="#/identityVerify">${aside_arr[1]}</a>
                        </li>
                        <li>
                            <a href="#/accountSecurity">${aside_arr[2]}</a>
                        </li>
                        <li>
                            <a href="#/collection">${aside_arr[3]}</a>
                        </li>
                        <li>
                            <a href="#/addressManage">${aside_arr[4]}</a>
                        </li>
                        <li>
                            <a href="#/assetsRecord" class="cur">${aside_arr[5]}</a>
                        </li>
                        <li>
                            <a href="#/tradeBill">${aside_arr[6]}</a>
                        </li>
                        <li>
                            <a href="#/myAssets">${aside_arr[7]}</a>
                        </li>
                        <!-- <li>
                            <a class="login-record" href="#/loginRecord">${aside_arr[9]}</a>
                        </li> -->
                        <li>
                            <a href="#/apiManager">${aside_arr[8]}</a>
                        </li>

                        <li>
                            <a href="#/invited">${aside_arr[9]}</a>
                        </li>
                        <li>
                            <a href="#" id="quit-load">退出登录</a>
                        </li>
                    </ul>`);
                $("#innerAssetsRecord").html(`<div class="header f-cb">
                    <span>${arr_ze[10]}</span>

                </div>
                <div class="tab-record " style="background:#1d1c35;padding: 0 10px;">
                    <span class="cur ">${arr_ze[0]}</span>
                    <span>${arr_ze[1]}</span>
                </div>
                <div class="record-main">
                    <div class="rm-list">

                        <div class="rm-recharge cur" id="recharge">

                            <div class="rm-list-header">
                                <span class="date">${arr_ze[2]}</span>
                                <span class="type">${arr_ze[3]}</span>
                                <span class="category">${arr_ze[4]}</span>
                                <span class="number">${arr_ze[5]}</span>
                                <span class="truly">${arr_ze[6]}</span>
                                <span class="state">${arr_ze[7]}</span>
                            </div>

                            <div class="rm-list-main"></div>

                            <div class="pages" style="right: 40%">
                                <div class="inner-pages f-cb">
                                    <div class="flip f-fl">
                                        <span class="prev">${arr_ze[8]}</span>
                                        <span class="next">${arr_ze[9]}</span>
                                    </div>
                                    <div class="total f-fl">
                                        第<span class="first"></span>页 / 共<span class="sum"></span>页
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="rm-withdraw" id="withdraw">

                            <div class="rm-list-header">
                            <span class="date">${arr_ze[2]}</span>
                            <span class="type">${arr_ze[3]}</span>
                            <span class="category">${arr_ze[4]}</span>
                            <span class="number">${arr_ze[5]}</span>
                            <span class="truly">${arr_ze[6]}</span>
                            <span class="state">${arr_ze[7]}</span>
                            </div>

                            <div class="rm-list-main"></div>

                            <div class="pages">
                                <div class="inner-pages f-cb">
                                    <div class="flip f-fl">
                                    <span class="prev">${arr_ze[8]}</span>
                                    <span class="next">${arr_ze[9]}</span>
                                    </div>
                                    <div class="total f-fl">
                                        第<span class="first"></span>页 / 共<span class="sum"></span>页
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>`);
                $("#quit-load").click(function(e) {
                    e.preventDefault();
                    dataService.membershipService.getMemberLogout().then(function(response) {
                        if (response.state == 1) {
                            // 用户退出登录
                            userLogout();
                        }
                    });
                });
                var $recharge = $wrapper.find("#recharge .rm-list-main");
                var $withdraw = $wrapper.find("#withdraw .rm-list-main");

                // 充币分页
                var page_recharge = 1;
                var $recharge_prev_btn = $("#recharge .pages span.prev");
                var $recharge_next_btn = $("#recharge .pages span.next");
                var $recharge_sum = $("#recharge .pages span.sum");
                var $recharge_first = $("#recharge .pages span.first");

                // 提币分页
                var page_withdraw = 1;
                var $withdraw_prev_btn = $("#withdraw .pages span.prev");
                var $withdraw_next_btn = $("#withdraw .pages span.next");
                var $withdraw_sum = $("#withdraw .pages span.sum");
                var $withdraw_first = $("#withdraw .pages span.first");

                $recharge_first.text(page_recharge);
                getAssetsRecharge(page_recharge, $recharge_sum, $recharge);
                // 点击上一页
                $recharge_prev_btn.click(function() {
                    page_recharge--;
                    if (page_recharge < 1) {
                        page_recharge++;
                        $recharge_first.text(page_recharge);
                        hintDialog("fa-exclamation-circle", "#1c9547", language == "en" ? "Already the first page" : "已经是第一页");
                    } else {
                        // 加载上一页
                        getAssetsRecharge(page_recharge, $recharge_sum, $recharge);
                        $recharge_first.text(page_recharge);
                    }
                });
                // 点击下一页
                $recharge_next_btn.click(function() {
                    // 获取最大页数
                    var sum = $recharge_sum.text();
                    page_recharge++;
                    if (page_recharge > sum) {
                        page_recharge--;
                        $recharge_first.text(page_recharge);
                        hintDialog("fa-exclamation-circle", "#1c9547", language == "en" ? "Already the last page" : "已经是最后一页");
                    } else {
                        // 加载下一页
                        getAssetsRecharge(page_recharge, $recharge_sum, $recharge);
                        $recharge_first.text(page_recharge);
                    }
                });

                $withdraw_first.text(page_withdraw);
                getAssetsWithDraw(page_withdraw, $withdraw_sum, $withdraw);
                // 点击上一页
                $withdraw_prev_btn.click(function() {
                    page_withdraw--;
                    if (page_withdraw < 1) {
                        page_withdraw++;
                        $withdraw_first.text(page_withdraw);
                        hintDialog("fa-exclamation-circle", "#1c9547", language == "en" ? "Already the first page" : "已经是第一页");
                    } else {
                        // 加载上一页
                        getAssetsWithDraw(page_withdraw, $withdraw_sum, $withdraw);
                        $withdraw_first.text(page_withdraw);
                    }
                });
                // 点击下一页
                $withdraw_next_btn.click(function() {
                    // 获取最大页数
                    var sum = $withdraw_sum.text();
                    page_withdraw++;
                    if (page_withdraw > sum) {
                        page_withdraw--;
                        $withdraw_first.text(page_withdraw);
                        hintDialog("fa-exclamation-circle", "#1c9547", language == "en" ? "Already the last page" : "已经是最后一页");
                    } else {
                        // 加载下一页
                        getAssetsWithDraw(page_withdraw, $withdraw_sum, $withdraw);
                        $withdraw_first.text(page_withdraw);
                    }
                });

                tabSlider();
            });

            // 获得所有充币记录
            function getAssetsRecharge(page_recharge, $recharge_sum, $recharge) {
                dataService.accountService.getAssetsRecharge(page_recharge).then(function(response) {

                    if (response.state == 1) {
                        var rechargeLst = response.data.rechargeLst;
                        var total_recharge = response.data.total;
                        var sum = Math.ceil(total_recharge / 10);
                        // 数据展现
                        $recharge.html("");
                        var arr_z = ["待付款", "未确认", "已确认", "已取消", "充币"],
                            arr_e = ["Unpaid", "Unconfirmed", "Confirmed", "Cancelled", "Deposit"],
                            arr_ez = language == "en" ? arr_e : arr_z;
                        for (var i in rechargeLst) {
                            var state = rechargeLst[i].r_status;
                            var state_zh;
                            if (state == -1) {
                                state_zh = arr_ez[0];
                            } else if (state == 0) {
                                state_zh = arr_ez[1];
                            } else if (state == 1) {
                                state_zh = arr_ez[2];
                            } else if (state == 2) {
                                state_zh = arr_ez[3];
                            }
                            var $dl = $("<dl></dl>").appendTo($recharge);
                            var $dd = $("<dd></dd>").appendTo($dl);
                            var $row = $('<div class="rl-row"></div>').appendTo($dd);
                            $("<span></span>").text(rechargeLst[i].r_create_time).appendTo($row);
                            $("<span></span>").text(rechargeLst[i].currency).appendTo($row);
                            $("<span></span>").text(arr_ez[4]).appendTo($row);
                            $("<span></span>").text(rechargeLst[i].r_amount).appendTo($row);
                            $("<span></span>").text("0").appendTo($row);
                            $("<span></span>").text(state_zh).appendTo($row);
                        }
                        $recharge_sum.text(sum);
                    } else if (response.state == -1) {
                        var msg_position = $.inArray(response.msg, message_arr);
                        hintDialog("fa-exclamation-circle", "#b34242", message_dialog[msg_position]);
                        if (response.msg == 'LANG_NO_LOGIN') {
                            setTimeout(function() {
                                userLogout();
                            }, 2000);
                        }
                    }
                });
            }

            // 获得所有提币记录
            function getAssetsWithDraw(page_withdraw, $withdraw_sum, $withdraw) {
                dataService.accountService.getAssetsWithDraw(page_withdraw).then(function(response) {
                    if (response.state == 1) {
                        var withdrawLst = response.data.withdrawLst;
                        var total_withdraw = response.data.total;
                        var sum = Math.ceil(total_withdraw / 10);
                        // 数据展现
                        $withdraw.html("");
                        var arr_z = ["待处理", "已完成", "已取消", "处理中", "提币"],
                            arr_e = ["Pending", "Completed", "Cancelled", "Processing", "Withdraw"],
                            arr_ez = language == "en" ? arr_e : arr_z;
                        for (var i in withdrawLst) {
                            var state = withdrawLst[i].w_status;
                            var state_zh;
                            if (state == 0) {
                                state_zh = arr_ez[0];
                            } else if (state == 1) {
                                state_zh = arr_ez[1];
                            } else if (state == 2) {
                                state_zh = arr_ez[2];
                            } else if (state == 3) {
                                state_zh = arr_ez[3];
                            }
                            var $dl = $("<dl></dl>").appendTo($withdraw);
                            var $dd = $("<dd></dd>").appendTo($dl);
                            var $row = $('<div class="rl-row"></div>').appendTo($dd);
                            $("<span></span>").text(withdrawLst[i].w_create_time).appendTo($row);
                            $("<span></span>").text(withdrawLst[i].currency).appendTo($row);
                            $("<span></span>").text(arr_ez[4]).appendTo($row);
                            $("<span></span>").text(withdrawLst[i].w_amount).appendTo($row);
                            $("<span></span>").text(withdrawLst[i].w_fee).appendTo($row);
                            $("<span></span>").text(state_zh).appendTo($row);
                        }
                        $withdraw_sum.text(sum);
                    }
                });
            }

            function tabSlider() {
                var $tab = $("#innerAssetsRecord .tab-record > span");
                var $tabcon = $("#innerAssetsRecord .rm-list > div");
                $tab.each(function() {
                    $(this).click(function() {
                        tabShow($(this).index());
                    });
                });

                function tabShow(a) {
                    $tab.each(function() {
                        $(this).removeClass("cur");
                    });
                    $tabcon.each(function() {
                        $(this).removeClass("cur");
                    });
                    $($tab[a]).addClass("cur");
                    $($tabcon[a]).addClass("cur");
                }
            }
        }
    };
    var tradeBill = {
        load: function() {
            viewService.getTemplate("view/tradeBill.html").then(function(resHtml) {
                var $wrapper = $(resHtml);
                $MainView.html($wrapper);
                var arr_zh = ["当前委托", "历史委托", "成交明细", "市场", "全部市场", "币种", "请选择交易对", "委托时间", "交易对", "类型", "委托价", "委托量", "委托总额", "已成交", "未成交", "操作", "成交均价", "手续费", "状态", "成交金额", "上一页", "下一页", "第", "共", "页", "交易订单", "", "", "", "", ""],
                    arr_en = ["Open Orders", "Order History", "Transaction History", "Market", "All Markets", "Currency", "Please select Transaction Pair", "Delegation Time", "Transaction Pair", "Type", "commission price", "commission amount", "commission total", "completed", "unsuccessful", "operation", "average price", "fee", "status", "Turnover", "Previous", "Next", "The", "Total", "Page", "Transaction Orders"],
                    arr_ze = language == "en" ? arr_en : arr_zh;
                $(".tradecenter").removeClass("cur");
                $(".tradecenter").siblings().removeClass("cur");
                // $MainView.css("background-image", "url(../images/person_bg.jpg)");


                $(".main-panel").html(`<div class="sidebar-nav f-fl"></div>
                <div class="content" id="view">
                    <div class="inner-trade-bill" id="innerTradeBill">
                        <div class="header1">
                            ${arr_ze[25]}
                        </div>
                        <div class="header f-cb" >
                            <div class="tab-entrust">
                                <span style="cursor: pointer;">${arr_ze[0]}</span>
                                <span style="cursor: pointer;">${arr_ze[1]}</span>
                                <span style="cursor: pointer;">${arr_ze[2]}</span>
                            </div>
                        </div>
                        
                        <div class="sort f-cb">
                            <div class="market input-wrap f-fl">
                                <label>${arr_ze[3]}</label>
                                <select id="marketSelect">
                                    <option value="USDT">${arr_ze[4]}</option>
                                    <option value="USDT">USDT${arr_ze[3]}</option>
                                    <option value="ETH">ETH${arr_ze[3]}</option>
                                </select>
                            </div>
                            <div class="type input-wrap f-fl">
                                <label>${arr_ze[5]}</label>
                                <select id="pairsSelect" style="width:250px;">
                                    <option value="BTCUSDT">${arr_ze[6]}</option>
                                </select>
                            </div>
                        </div>
                        <div class="list">
                            <div class="current-entrust">
                                <div class="list-header">
                                    <span class="time">${arr_ze[7]}</span>
                                    <span class="pairs">${arr_ze[8]}</span>
                                    <span class="category">${arr_ze[9]}</span>
                                    <span class="price">${arr_ze[10]}</span>
                                    <span class="number">${arr_ze[11]}</span>
                                    <span class="deal">${arr_ze[12]}</span>
                                    <span class="poundage">${arr_ze[13]}</span>
                                    <span class="state">${arr_ze[14]}</span>
                                    <span class="option">${arr_ze[15]}</span>
                                </div>
                                <div class="list-main"></div>
                                <div class="pages">
                                    <div class="inner-pages f-cb">
                                        <div class="flip f-fl">
                                            <span class="prev">${arr_ze[20]}</span>
                                            <span class="next">${arr_ze[21]}</span>
                                        </div>
                                        <div class="total f-fl">
                                        ${arr_ze[22]}<span class="first"></span>${arr_ze[24]} / ${arr_ze[23]}<span class="sum"></span>${arr_ze[24]}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="history-entrust">
                                <div class="list-header">
                                    <span class="time">${arr_ze[7]}</span>
                                    <span class="pairs">${arr_ze[8]}</span>
                                    <span class="category">${arr_ze[9]}</span>
                                    <span class="price">${arr_ze[10]}</span>
                                    <span class="number">${arr_ze[11]}</span>
                                    <span class="poundage">${arr_ze[13]}</span>
                                    <span class="state">${arr_ze[16]}</span>
                                    <span class="option">${arr_ze[18]}</span>
                                </div>
                                <div class="list-main"></div>
                                <div class="pages">
                                    <div class="inner-pages f-cb">
                                        <div class="flip f-fl">
                                            <span class="prev">${arr_ze[20]}</span>
                                            <span class="next">${arr_ze[21]}</span>
                                        </div>
                                        <div class="total f-fl">
                                        ${arr_ze[22]}<span class="first"></span>${arr_ze[24]} / ${arr_ze[23]}<span class="sum"></span>${arr_ze[24]}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="trade-entrust">
                                <div class="list-header">
                                    <span class="time">${arr_ze[7]}</span>
                                    <span class="pairs">${arr_ze[8]}</span>
                                    <span class="category">${arr_ze[9]}</span>
                                    <span class="price">${arr_ze[16]}</span>
                                    <span class="number">${arr_ze[11]}</span>
                                    <span class="poundage">${arr_ze[17]}</span>
                                    <span class="state">${arr_ze[19]}</span>
                                    <span class="option">${arr_ze[18]}</span>
                                </div>
                                <div class="list-main"></div>
                                <div class="pages" style="right: 45%">
                                    <div class="inner-pages f-cb">
                                        <div class="flip f-fl">
                                            <span class="prev">${arr_ze[20]}</span>
                                            <span class="next">${arr_ze[21]}</span>
                                        </div>
                                        <div class="total f-fl">
                                        ${arr_ze[22]}<span class="first"></span>${arr_ze[24]} / ${arr_ze[23]}<span class="sum"></span>${arr_ze[24]}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`);
                $(".sidebar-nav").html(`<ul>
                        <li>个人中心</li>
                        <li>
                            <a href="#/accountInfo">${aside_arr[0]}</a>
                        </li>
                        <li>
                            <a href="#/identityVerify">${aside_arr[1]}</a>
                        </li>
                        <li>
                            <a href="#/accountSecurity">${aside_arr[2]}</a>
                        </li>
                        <li>
                            <a href="#/collection">${aside_arr[3]}</a>
                        </li>
                        <li>
                            <a href="#/addressManage">${aside_arr[4]}</a>
                        </li>
                        <li>
                            <a href="#/assetsRecord">${aside_arr[5]}</a>
                        </li>
                        <li>
                            <a href="#/tradeBill" class="cur">${aside_arr[6]}</a>
                        </li>
                        <li>
                            <a href="#/myAssets">${aside_arr[7]}</a>
                        </li>
                        <!-- <li>
                            <a class="login-record" href="#/loginRecord">${aside_arr[9]}</a>
                        </li> -->
                        <li>
                            <a href="#/apiManager">${aside_arr[8]}</a>
                        </li>

                        <li>
                            <a href="#/invited">${aside_arr[9]}</a>
                        </li>
                        <li>
                            <a href="#" id="quit-load">退出登录</a>
                        </li>
                    </ul>`);
                $("#quit-load").click(function(e) {
                    e.preventDefault();
                    dataService.membershipService.getMemberLogout().then(function(response) {
                        if (response.state == 1) {
                            // 用户退出登录
                            userLogout();
                        }
                    });
                });
                var $market_select = $wrapper.find('#marketSelect');
                var $pair_select = $wrapper.find("#pairsSelect");
                var $tabSlider = $wrapper.find('.tab-entrust span');
                var $tabContent = $wrapper.find('#innerTradeBill .list>div');
                $($tabSlider[0]).addClass('cur');
                $($tabContent[0]).addClass('cur');
                loadTradepairs($market_select, $pair_select);

                var symbol = $pair_select.val();
                var page = '1';
                var status = '0';
                loadCurrentOrder(symbol, page, status);
                paginationCurOrd(symbol, page, status);

                $tabSlider.click(function() {
                    $market_select.find('option:first').prop('selected', true);
                    $pair_select.html('');
                    $pair_select.append('<option value="ETHUSDT">' + arr_ze[6] + '</option>');
                    loadTradepairs($market_select, $pair_select);
                });

                $('#marketSelect').change(function() {
                    $pair_select.html('');
                    $pair_select.append('<option value="ETHUSDT">' + arr_ze[6] + '</option>');
                    loadTradepairs($(this), $pair_select);
                    $('#innerTradeBill .list .list-main').html('');
                });

                $('#pairsSelect').change(function() {
                    var curOrderPos = $($tabSlider[0]).hasClass('cur');
                    var hisOrderPos = $($tabSlider[1]).hasClass('cur');
                    var sucOrderPos = $($tabSlider[2]).hasClass('cur');

                    var symbol = $(this).val();
                    var page = '1';
                    var status;

                    if (curOrderPos) {
                        status = '0';
                        loadCurrentOrder(symbol, page, status);
                        paginationCurOrd(symbol, page, status);
                    }

                    if (hisOrderPos) {
                        status = '1'
                        loadHistoryOrder(symbol, page, status);
                        paginationHisOrd(symbol, page, status);
                    }

                    if (sucOrderPos) {
                        loadSuccessOrder(symbol, page);
                        paginationSucOrd(symbol, page);
                    }

                });

                tabSlider();
            });

            function loadSuccessOrder(symbol, page) {
                dataService.orderService.getTrades(symbol, page).then(function(response) {
                    var $success_order = $("#innerTradeBill .trade-entrust .list-main").html('');
                    if (response.state == 1) {
                        var trades = response.trades;
                        var total = response.total;
                        var $suc_sum = $('.trade-entrust .pages .sum');
                        $suc_sum.text(Math.ceil(total / 20));
                        for (var i = 0; i < trades.length; i++) {
                            loadSuccessOrderList(trades, i, $success_order);
                        }
                    } else if (response.state == -1) {
                        var msg_position = $.inArray(response.msg, message_arr);
                        hintDialog("fa-exclamation-circle", "#b34242", message_dialog[msg_position]);
                        if (response.msg == 'LANG_NO_LOGIN') {
                            setTimeout(function() {
                                userLogout();
                            }, 2000);
                        }
                    }
                });
            }

            function loadSuccessOrderList(trades, i, $success_order) {
                var $dl = $("<dl></dl>").appendTo($success_order);
                var $dd = $("<dd></dd>").appendTo($dl);
                var $lm_row = $('<div class="lm-row"></div>').appendTo($dd);
                $("<span></span>").text(trades[i].done_time).appendTo($lm_row);
                $("<span></span>").text(trades[i].base_currency + "/" + trades[i].quote_currency).appendTo($lm_row);
                if (trades[i].t_type == "buy") {
                    $('<span class="buy rise"></span>').text("买入").appendTo($lm_row);
                } else {
                    $('<span class="buy fall"></span>').text("卖出").appendTo($lm_row);
                }
                $("<span></span>").text(trades[i].price).appendTo($lm_row);
                $("<span></span>").text(trades[i].volume).appendTo($lm_row);
                $("<span></span>").text(trades[i].fee).appendTo($lm_row);
                $("<span></span>").text(trades[i].amount).appendTo($lm_row);
                $("<span></span>").text('成交').appendTo($lm_row);
            }

            function paginationSucOrd(symbol, suc_first) {
                var $suc_prve_btn = $('.trade-entrust .pages .prev');
                var $suc_next_btn = $('.trade-entrust .pages .next');
                var $suc_first = $('.trade-entrust .pages .first').text(suc_first);
                var $suc_sum = $('.trade-entrust .pages .sum');

                $suc_prve_btn.off().click(function() {
                    suc_first--;
                    if (suc_first < 1) {
                        suc_first++;
                        $suc_first.text(suc_first);
                        hintDialog("fa-exclamation-circle", "#1c9547", "已经是第一页");
                    } else {
                        $("#innerTradeBill .trade-entrust .list-main").html('');
                        loadSuccessOrder(symbol, suc_first);
                        $suc_first.text(suc_first);
                    }
                });

                $suc_next_btn.off().click(function() {
                    suc_first++;
                    var sum = $suc_sum.text();
                    if (suc_first > sum) {
                        suc_first--;
                        $suc_first.text(suc_first);
                        hintDialog("fa-exclamation-circle", "#1c9547", "已经是最后一页");
                    } else {
                        $("#innerTradeBill .trade-entrust .list-main").html('');
                        loadSuccessOrder(symbol, suc_first);
                        $suc_first.text(suc_first);
                    }
                });
            }

            function loadCurrentOrder(symbol, page, status) {
                dataService.orderService.getOrdersI(symbol, page, status).then(function(response) {
                    var $current_entrust = $("#innerTradeBill .current-entrust .list-main").html('');

                    if (response.state == 1) {
                        var orders = response.orders;
                        var total = response.total;
                        var $cur_sum = $('.current-entrust .pages .sum');
                        $cur_sum.text(Math.ceil(total / 20));
                        for (var i = 0; i < orders.length; i++) {
                            loadCurrentOrderList(orders, i, page, status, $current_entrust);
                        }
                    } else if (response.state == -1) {
                        var msg_position = $.inArray(response.msg, message_arr);
                        hintDialog("fa-exclamation-circle", "#b34242", message_dialog[msg_position]);
                        if (response.msg == 'LANG_NO_LOGIN') {
                            setTimeout(function() {
                                userLogout();
                            }, 2000);
                        }
                    }
                });
            }

            function loadCurrentOrderList(orders, i, page, status, $current_entrust) {
                var $dl = $("<dl></dl>").appendTo($current_entrust);
                var $dd = $("<dd></dd>").appendTo($dl);
                var $lm_row = $('<div class="lm-row"></div>').appendTo($dd);
                $("<span></span>").text(orders[i].create_time).appendTo($lm_row);
                $("<span></span>").text(orders[i].base_currency + "/" + orders[i].quote_currency).appendTo($lm_row);
                if (orders[i].o_type == "buy") {
                    $('<span class="buy rise"></span>').text("买入").appendTo($lm_row);
                } else {
                    $('<span class="buy fall"></span>').text("卖出").appendTo($lm_row);
                }
                $("<span></span>").text(orders[i].price).appendTo($lm_row);
                $("<span></span>").text(orders[i].volume).appendTo($lm_row);
                $("<span></span>").text((orders[i].price * orders[i].volume).toFixed(4)).appendTo($lm_row);
                $("<span></span>").text(orders[i].done_volume).appendTo($lm_row);
                $("<span></span>").text((orders[i].volume - orders[i].done_volume).toFixed(4)).appendTo($lm_row);
                $("<span></span>").text("撤销").click(function(e) {
                    e.stopPropagation();
                    var id = orders[i].id;
                    var no = orders[i].o_no;
                    var symbol = orders[i].symbol;
                    dataService.orderService.orderCancel(id, no, symbol).then(function(response) {
                        if (response.state == 1) {
                            hintDialog("fa-check-circle", "#1c9547", "撤销成功");
                            loadCurrentOrder(symbol, page, status);
                        }
                    });
                }).appendTo($lm_row);
            }

            function paginationCurOrd(symbol, cur_first, status) {
                var $cur_prve_btn = $('.current-entrust .pages .prev');
                var $cur_next_btn = $('.current-entrust .pages .next');
                var $cur_first = $('.current-entrust .pages .first').text(cur_first);
                var $cur_sum = $('.current-entrust .pages .sum');

                $cur_prve_btn.off().click(function() {
                    cur_first--;
                    if (cur_first < 1) {
                        cur_first++;
                        $cur_first.text(cur_first);
                        hintDialog("fa-exclamation-circle", "#1c9547", "已经是第一页");
                    } else {
                        $("#innerTradeBill .current-entrust .list-main").html('');
                        loadCurrentOrder(symbol, cur_first, status);
                        $cur_first.text(cur_first);
                    }
                });

                $cur_next_btn.off().click(function() {
                    cur_first++;
                    var sum = $cur_sum.text();
                    if (cur_first > sum) {
                        cur_first--;
                        $cur_first.text(cur_first);
                        hintDialog("fa-exclamation-circle", "#1c9547", "已经是最后一页");
                    } else {
                        $("#innerTradeBill .current-entrust .list-main").html('');
                        loadCurrentOrder(symbol, cur_first, status);
                        $cur_first.text(cur_first);
                    }
                });
            }

            function loadHistoryOrder(symbol, page, status) {
                dataService.orderService.getOrdersI(symbol, page, status).then(function(response) {
                    var $history_entrust = $("#innerTradeBill .history-entrust .list-main").html('');
                    if (response.state == 1) {
                        var orders = response.orders;
                        var total = response.total;
                        var $his_sum = $('.history-entrust .pages .sum');
                        $his_sum.text(Math.ceil(total / 20));
                        for (var i = 0; i < orders.length; i++) {
                            loadHistoryOrderList(orders, i, $history_entrust);
                        }
                    } else if (response.state == -1) {
                        var msg_position = $.inArray(response.msg, message_arr);
                        hintDialog("fa-exclamation-circle", "#b34242", message_dialog[msg_position]);
                        if (response.msg == 'LANG_NO_LOGIN') {
                            setTimeout(function() {
                                userLogout();
                            }, 2000);
                        }
                    }
                });
            }

            function loadHistoryOrderList(orders, i, $history_entrust) {
                var status;
                if (orders[i].o_status == "done") {
                    status = "成交";
                } else if (orders[i].o_status == "canceled") {
                    status = "撤单";
                } else if (orders[i].o_status == "partial-canceled") {
                    status = "部分成交撤单";
                }
                var $dl = $("<dl></dl>").appendTo($history_entrust);
                var $dd = $("<dd></dd>").appendTo($dl);
                var $lm_row = $('<div class="lm-row"></div>').appendTo($dd);
                $("<span></span>").text(orders[i].create_time).appendTo($lm_row);
                $("<span></span>").text(orders[i].base_currency + "/" + orders[i].quote_currency).appendTo($lm_row);
                if (orders[i].o_type == "buy") {
                    $('<span class="buy rise"></span>').text("买入").appendTo($lm_row);
                } else {
                    $('<span class="buy fall"></span>').text("卖出").appendTo($lm_row);
                }
                $("<span></span>").text(orders[i].price).appendTo($lm_row);
                $("<span></span>").text(orders[i].volume).appendTo($lm_row);
                $("<span></span>").text(orders[i].done_volume).appendTo($lm_row);
                $("<span></span>").text(orders[i].done_avg_price).appendTo($lm_row);
                $("<span></span>").text(status).appendTo($lm_row);
            }

            function paginationHisOrd(symbol, his_first, status) {
                var $his_prve_btn = $('.history-entrust .pages .prev');
                var $his_next_btn = $('.history-entrust .pages .next');
                var $his_first = $('.history-entrust .pages .first').text(his_first);
                var $his_sum = $('.history-entrust .pages .sum');

                $his_prve_btn.off().click(function() {
                    his_first--;
                    if (his_first < 1) {
                        his_first++;
                        $his_first.text(his_first);
                        hintDialog("fa-exclamation-circle", "#1c9547", "已经是第一页");
                    } else {
                        $("#innerTradeBill .history-entrust .list-main").html('');
                        loadHistoryOrder(symbol, his_first, status);
                        $his_first.text(his_first);
                    }
                });

                $his_next_btn.off().click(function() {
                    his_first++;
                    var sum = $his_sum.text();
                    if (his_first > sum) {
                        his_first--;
                        $his_first.text(his_first);
                        hintDialog("fa-exclamation-circle", "#1c9547", "已经是最后一页");
                    } else {
                        $("#innerTradeBill .history-entrust .list-main").html('');
                        loadHistoryOrder(symbol, his_first, status);
                        $his_first.text(his_first);
                    }
                });
            }

            function loadTradepairs($market_select, $pair_select) {
                dataService.marketService.getSymbol().then(function(response) {
                    if (response.state == 1) {
                        var symbols = response.symbols;
                        for (var i = 0; i < symbols.length; i++) {
                            if (symbols[i].quote_currency == $market_select.val()) {
                                $(`<option value="${symbols[i].symbol}">${symbols[i].base_currency}/${symbols[i].quote_currency}</option>`).appendTo($pair_select);
                            }
                        }
                    } else if (response.state == -1) {
                        var msg_position = $.inArray(response.msg, message_arr);
                        hintDialog("fa-exclamation-circle", "#b34242", message_dialog[msg_position]);
                        if (response.msg == 'LANG_NO_LOGIN') {
                            setTimeout(function() {
                                userLogout();
                            }, 2000);
                        }
                    }
                });
            }

            function tabSlider() {
                var $tab = $("#innerTradeBill .tab-entrust > span");
                var $tabcon = $("#innerTradeBill .list > div");
                $tab.each(function() {
                    $(this).click(function() {
                        tabShow($(this).index(), $tab, $tabcon);
                    });
                });
            }

            function tabShow(a, $tab, $tabcon) {
                $tab.each(function() {
                    $(this).removeClass("cur");
                });
                $tabcon.each(function() {
                    $(this).removeClass("cur");
                });
                $($tab[a]).addClass("cur");
                $($tabcon[a]).addClass("cur");
            }

        }
    };
    var recharge = {
        load: function() {
            viewService.getTemplate("view/recharge.html").then(function(resHtml) {
                var $wrapper = $(resHtml);
                var arr_zh = ["我的资产", "充币", "币种", "地址", "复制", "二维码", "标签",
                        "禁止向BTC地址充值除BTC之外的资产，任何充入BTC地址的非BTC资产将不可找回。",
                        "使用BTC地址充值需要12个网络确认才能到账。",
                        "最小充币数量为 0.01 BTC,小于最小金额的充值将不会到账且无法退回。",
                        "充币记录", "充币地址", "充值币种", "充币数量", "更新时间", "充币状态",
                        "请务必填写并仔细核对地址标签，这是您账户的唯一标识，否则资产将不可找回。"
                    ],
                    arr_en = ["My Assets", "Deposit", "Currency", "Address", "QR Code", "Label",
                        "It is forbidden to recharge the BTC address with assets other than BTC. Any non-BTC assets charged to the BTC address will not be recovered.",
                        "Recharging with a BTC address requires 12 network confirmations to arrive.",
                        "The minimum amount of coins is 0.01 BTC, and the recharge less than the minimum amount will not be credited and cannot be returned.",
                        "Deposit History","Deposit History", "Coin address", "Recharge currency", "	Number of coins", "Update time", "Coin state", "Be sure to fill out and carefully check the address label, which is the unique identifier for your account, otherwise the asset will not be retrievable."
                    ],
                    arr_ze = language == "en" ? arr_en : arr_zh;
                $MainView.html($wrapper);

                $(".tradecenter").removeClass("cur");
                $(".tradecenter").siblings().removeClass("cur");
                $MainView.css("background-image", "none");

                $("#innerRecharge").html(`<div class="header" style="display:block;">
                <a href="#/myAssets" class="wc">${arr_ze[0]}</a>
                <i class="fa fa-angle-right"></i>
                <span>${arr_ze[1]}</span>
            </div>
            <!-- <div class="header1">
                <a href="#/myAssets">我的资产</a>
                <i class="fa fa-angle-right"></i>
                <span>充币</span>
            </div> -->
            <div class="topup-main">
                <div class="tm-inner" id="tmInner">
                    <div class="coin-type input-wrap">
                        <label>${arr_ze[2]}</label>
                        <input type="text" readonly>
                    </div>
                    <div class="coin-address input-wrap">
                        <label>${arr_ze[3]}</label>
                        <input type="text" readonly>
                        <button class="btn copy">${arr_ze[4]}</button>
                        <div class="qrcode">
                            <button class="btn">${arr_ze[5]}</button>
                            <div id="qrcode"></div>
                        </div>
                        <!--  <i></i> -->
                    </div>
                    <div class="coin-tips input-wrap">
                        <label>${arr_ze[6]}</label>
                        <input type="text" readonly>
                    </div>
                </div>
                <ul class="tips-list" id="tipsList"></ul>
            </div>

            <div class="topup-record">
                <div class="tr-title">${arr_ze[10]}</div>
                <div class="tr-list">
                    <div class="tr-list-header">
                        <span class="tlh-addr">${arr_ze[11]}</span>
                        <span class="tlh-type">${arr_ze[12]}</span>
                        <span class="tlh-num">${arr_ze[13]}</span>
                        <span class="tlh-time">${arr_ze[14]}</span>
                        <span class="tlh-state">${arr_ze[15]}</span>
                    </div>
                    <div class="tr-list-main" id="trListMain"></div>
                </div>
            </div>`)


                $("#quit-load").click(function(e) {
                    e.preventDefault();
                    dataService.membershipService.getMemberLogout().then(function(response) {
                        if (response.state == 1) {
                            // 用户退出登录
                            userLogout();
                        }
                    });
                });



                var hash_currency = location.hash.split("=")[1];
                var $type_currency = $("#innerRecharge .coin-type input");
                var $addr_currency = $("#innerRecharge .coin-address input");

                var $list_main = $("#trListMain");
                var $tips_input = $("#tmInner .coin-tips input");
                var $copy = $("#innerRecharge .coin-address .copy");
                $type_currency.val(hash_currency);
                loadAssetsRechargeAddr(hash_currency, $addr_currency, $copy, $tips_input);
                loadAssetsRecharge($list_main, hash_currency);
                loadAssetsRechargeTips(hash_currency, arr_ze);
            });

            function loadAssetsRechargeTips(hash_currency, arr_ze) {
                dataService.membershipService.getAssetsLst().then(function(response) {
                    var tipsList = $("#tipsList");
                    var currencyLst = response.data.currencyLst;
                    for (var i = 0; i < currencyLst.length; i++) {
                        if (currencyLst[i].currency == hash_currency) {
                            // 
                            if(currencyLst[i].currency == "USDT"){
                                if (language == "en") {
                                    $(`<li>Please make sure that your recharge type is USDT (erc-20). Please do not recharge other types of USDT.</li>`).appendTo(tipsList)
                                    $(`<li> Please recharge any non-USDT assets at the above address, otherwise the assets will not be recovered.</li>`).appendTo(tipsList)
                                    $(`<li> The USDT recharge only supports the simple send method, but the other method (send all) can not be used for the time being. Please understand.</li>`).appendTo(tipsList)
                                    $(`<li> After you recharge the above address, you need the confirmation of the whole network node. After one network confirmation, you can withdraw money after two network confirmations.</li>`).appendTo(tipsList)
                                    $(`<li> Minimum recharge amount:${' ' + currencyLst[i].c_min_recharge + ' ' + hash_currency}，A recharge less than the minimum amount will not be charged and cannot be returned.</li>`).appendTo(tipsList)
                                    $(`<li>Make sure your computer and browser are secure to prevent information from being tampered with or leaked.</li>`).appendTo(tipsList)
                                } else {
                                   $(`<li>请确认您充值的类型是是USDT（erc-20），请不要充值其他种类的USDT。</li>`).appendTo(tipsList)
                                    $(`<li> 请忽向上述地址充值任何非USDT资产，否则资产将不会找回。</li>`).appendTo(tipsList)
                                    $(`<li> USDT充值仅支持simple send的方法，使用其他方法（send all）的充币暂时无法上，请您谅解。</li>`).appendTo(tipsList)
                                    $(`<li> 您充值上述地址后，需要整个网络节点确认，1次网络确认后到账2次网络确认后即可提币。</li>`).appendTo(tipsList)
                                    $(`<li> 最小充值金额：${' ' + currencyLst[i].c_min_recharge + ' ' + hash_currency}，小于最小金额的充值将不会上账且无法退回。</li>`).appendTo(tipsList)
                                    $(`<li>请务必确认电脑及浏览器安全，防止信息被篡改或泄露。</li>`).appendTo(tipsList)
                                }
                                
                            }else{
                            if (language == "en") {
                                $(`<li>It is forbidden to recharge the ${hash_currency} address with assets other than ${hash_currency}. Any non-${hash_currency} assets charged to the ${hash_currency} address will not be recovered.</li>`).appendTo(tipsList);
                            } else {
                                $(`<li>禁止向${hash_currency}地址充值除${hash_currency}之外的资产，任何充入${hash_currency}地址的非${hash_currency}资产将不可找回。</li>`).appendTo(tipsList);
                            }
                            if (hash_currency == "AAC" || hash_currency == "EOS") {
                                $('<li>' + arr_ze[15] + '</li>').appendTo(tipsList);
                            } else {
                                if (language == "en") {
                                    $(`<li>Recharging with a ${hash_currency} address requires 12 network confirmations to arrive.</li>`).appendTo(tipsList);
                                } else {
                                    $(`<li>使用${hash_currency}地址充值需要12个网络确认才能到账。</li>`).appendTo(tipsList);
                                }
                            }
                            
                            if (language == "en") {
                                $(`<li>The minimum amount of coins is${' ' + currencyLst[i].c_min_recharge + ' ' + hash_currency}, and the recharge less than the minimum amount will not be credited and cannot be returned.</li>`).appendTo(tipsList)
                                return;
                            } else {
                                $(`<li>最小充币数量为${' ' + currencyLst[i].c_min_recharge + ' ' + hash_currency},小于最小金额的充值将不会到账且无法退回。</li>`).appendTo(tipsList)
                                return;
                            }
                            }

                        }
                    }
                });
            }

            function loadAssetsRecharge($list_main, hash_currency) {
                dataService.accountService.getAssetsRecharge(1).then(function(response) {
                    if (response.state == 1) {
                        var rechargeLst = response.data.rechargeLst;
                        for (var i = 0; i < rechargeLst.length; i++) {
                            // 展示对应的数据到页面
                            if (rechargeLst[i].currency == hash_currency) {
                                var state = rechargeLst[i].r_status;
                                var state_zh;
                                if (state == -1) {
                                    state_zh = '待付款';
                                } else if (state == 0) {
                                    state_zh = '未确认';
                                } else if (state == 1) {
                                    state_zh = '已确认';
                                } else if (state == 2) {
                                    state_zh = '已取消';
                                }
                                var $dl = $("<dl></dl>").appendTo($list_main);
                                var $dd = $("<dd></dd>").appendTo($dl);
                                var $row = $('<div class="tl-row"></div>').appendTo($dd);
                                $("<span></span>").text(rechargeLst[i].r_address).appendTo($row);
                                $("<span></span>").text(rechargeLst[i].currency).appendTo($row);
                                $("<span></span>").text(rechargeLst[i].r_amount).appendTo($row);
                                $("<span></span>").text(rechargeLst[i].r_create_time).appendTo($row);
                                $("<span></span>").text(state_zh).appendTo($row);
                            }
                        }
                    } else if (response.state == -1) {
                        var msg_position = $.inArray(response.msg, message_arr);
                        hintDialog("fa-exclamation-circle", "#b34242", message_dialog[msg_position]);
                        if (response.msg == 'LANG_NO_LOGIN') {
                            setTimeout(function() {
                                userLogout();
                            }, 2000);
                        }
                    }
                });
            }

            function loadAssetsRechargeAddr(hash_currency, $addr_currency, $copy, $tips_input) {
                dataService.accountService.getAssetsRechargeAddr(hash_currency).then(function(response) {
                    if (response.state == 1) {
                        if (response.data.is_in_eth && response.data.is_in_eth == 2) {
                            var useruid = JSON.parse(sessionStorage.getItem('useruid'));
                            $tips_input.val(useruid);
                        } else {
                            $tips_input.parent().css('display', 'none');
                        }
                        var rechargeAddr = response.data.rechargeAddr;
                        if (rechargeAddr == null) {
                            var data = {
                                currency: hash_currency
                            };
                            dataService.accountService.genCoinAddress(data).then(function(response) {
                                if(response.msg == "LANG_POOL_NO_ADDRESS_EXISTS"){
                                    var msg_position = $.inArray(response.msg, message_arr);
                                    hintDialog("fa-exclamation-circle", "#1c9547", message_dialog[msg_position]);
                                }else{
                                    $addr_currency.val(response.msg);
                                    var qrcode = new QRCode(document.getElementById("qrcode"), {
                                        width: 120,
                                        height:120,
                                        correctLevel : QRCode.CorrectLevel.L
                                    });
                                    qrcode.makeCode(response.msg);
                                }    
                            });
                        } else {
                            $addr_currency.val(rechargeAddr);
                            var qrcode = new QRCode(document.getElementById("qrcode"), {
                                width: 120,
                                height:120,
                                correctLevel : QRCode.CorrectLevel.L
                            });
                            qrcode.makeCode(rechargeAddr);
                        }
                        $copy.click(function() {
                            $addr_currency.select();
                            var iscopy = document.execCommand("copy");
                            if (iscopy) {
                                hintDialog("fa-check-circle", "#1c9547", language == "en" ? "Successful copy" : "复制成功");
                            } else {
                                hintDialog("fa-exclamation-circle", "#b34242", language == "en" ? "Replication failed, please try again on the PC side" : "复制失败,请在PC端重新尝试");
                            }
                        });
                    } else if (response.state == -1) {
                        var msg_position = $.inArray(response.msg, message_arr);
                        hintDialog("fa-exclamation-circle", "#b34242", message_dialog[msg_position]);
                        if (response.msg == 'LANG_NO_LOGIN') {
                            setTimeout(function() {
                                userLogout();
                            }, 2000);
                        }
                    }
                });
            }
        }
    };
    var withdraw = {
        load: function() {
            viewService.getTemplate("view/withdraw.html").then(function(resHtml) {
                var $wrapper = $(resHtml);
                var arr_zh = ["我的资产", "提币", "币种", "提币地址", "请选择提币地址", "提币数量", "全部", "可用", "图片验证码", "请输入图片验证码", "短信验证码", "发送验证码", "交易密码", "忘记密码", "确认提币", "地址标签", "请输入地址标签(必填，否则可能导致体现错误)"],
                    arr_en = ["My assets", "Coin", "Currency", "Coin address", "Please select the coin address", "Number of coins", "All", "Available", "Picture code", "Please enter the picture coin", "SMS Coin", "Get Coin", "transaction password", "Forgot password", "Confirm the coin", "Address label", "To confirm the withdrawal, please enter the address label (must be filled in, otherwise it may lead to a withdrawal error)."],
                    arr_ze = language == "en" ? arr_en : arr_zh;
                $MainView.html($wrapper);
                $(".tradecenter").removeClass("cur");
                $(".tradecenter").siblings().removeClass("cur");
                $MainView.css("background-image", "none");
                $("#innerGetCoin").html(`<div class="header" style="display:block;">
                <a href="#/myAssets" class="wc">${arr_ze[0]}</a>
                <i class="fa fa-angle-right"></i>
                <span>${arr_ze[1]}</span>
            </div>
            <div class="getcoin-main">
                <div class="gm-inner">
                    <div class="coin-type input-wrap">
                        <label>${arr_ze[2]}</label>
                        <input type="text" readonly>
                    </div>
                    <div class="coin-addr input-wrap">
                        <label>${arr_ze[3]}</label>
                        <select class="type f-fl" style="width:270px;margin-right:10px;">
                            <option value="">${arr_ze[4]}</option>
                        </select>
                        <button class="add-address">添加地址</button>
                    </div>
                    <div class="coin-tips input-wrap">
                        <label>${arr_ze[15]}</label>
                        <input type="text" placeholder="${arr_ze[16]}">
                    </div>
                    <div class="coin-num input-wrap">
                        <label>${arr_ze[5]}</label>
                        <input type="text" placeholder="">
                        <button class="all f-fl">${arr_ze[6]}</button>
                        <span class="tip rest"> <j>${arr_ze[7]}:</j> <em>  </em></span>
                    </div>
                    <div class="code input-wrap">
                        <label>${arr_ze[8]}</label>
                        <input type="text" placeholder="${arr_ze[9]}">
                        <img src="" alt="" class="btn-img f-fl">
                    </div>
                    <div class="code input-wrap">
                        <label>${arr_ze[10]}</label>
                        <input type="text" class="mobile">
                        <button class="btn-code">${arr_ze[11]}</button>
                    </div>
                    <div class="tradepwd input-wrap">
                        <label>${arr_ze[12]}</label>
                        <input type="password"  autocomplete="new-password">
                        <button>${arr_ze[13]}</button>
                    </div>
                    <button type="button" class="btn-confirm">${arr_ze[14]}</button>
                </div>
            </div>
            <ul class="tips-list" id="tipsList"></ul>`);


                $("#quit-load").click(function(e) {
                    e.preventDefault();
                    dataService.membershipService.getMemberLogout().then(function(response) {
                        if (response.state == 1) {
                            // 用户退出登录
                            userLogout();
                        }
                    });
                });
                $(".add-address").click(function(res){
                    location.href="#/addressManage";
                });
                var currency = location.hash.split("=")[1].toUpperCase();
                $wrapper.find("#innerGetCoin .coin-type input").val(currency);
                var $coin_addr = $wrapper.find(".coin-addr select");
                var $btnConfirm = $("#innerGetCoin button.btn-confirm")
                dataService.accountService.getWithdrawAddr(currency).then(function(response) {
                    if (response.state == 1) {
                        var data = response.data;
                        for (var i = 0; i < data.length; i++) {
                            $(`<option value="${data[i].addr}">${data[i].addr}</option>`).appendTo($coin_addr);
                        }
                    }
                });
                var $coin_tips = $('#innerGetCoin .coin-tips input');
                if (currency == "AAC" || currency == "EOS") {
                    $coin_tips.parent().css('display', 'block');
                } else {
                    $coin_tips.parent().css('display', 'none');
                }
                var $coin_num = $wrapper.find(".coin-num input");
                var $allInBtn = $wrapper.find(".coin-num button");
                $allInBtn.click(function() {
                    var $allInNum = $(this).attr('data-balance');
                    $coin_num.val($allInNum);
                });
                var $btn_img = $wrapper.find(".code .btn-img");
                var $btn_img_input = $wrapper.find(".code input");
                getKaptcha($btn_img);
                $btn_img.click(function(e) {
                    e.stopPropagation();
                    getKaptcha($btn_img);
                });
                dataService.membershipService.getMember().then(function(response) {
                    if (response.state == 1) {
                        useraccount = response.data.m_name;
                    } else if (response.state == -1) {
                        var msg_position = $.inArray(response.msg, message_arr);
                        hintDialog("fa-exclamation-circle", "#b34242", message_dialog[msg_position]);
                        if (response.msg == 'LANG_NO_LOGIN') {
                            setTimeout(function() {
                                userLogout();
                            }, 2000);
                        }
                    }
                });
                var $mobilecode = $wrapper.find("#innerGetCoin .code button");
                var $mobilecodeinput = $wrapper.find("#innerGetCoin .code input.mobile");
                $mobilecode.click(function() {
                    var isclick = $mobilecode.prop('disabled');
                    var isimgCode = $btn_img_input.val();
                    if (isclick == true || isimgCode == '') {
                        return;
                    }
                    var code = $btn_img_input.val();
                    var token = $btn_img.attr("data-token");
                    dataService.accountService.getMail(token, code, useraccount, "forgot").then(function(response) {
                        if (response.state == 1) {
                            var msg_position = $.inArray('Sent_successfully', message_arr);
                            hintDialog("fa-check-circle", "#1c9547", message_dialog[msg_position]);
                            countDownBtn($mobilecode);
                        } else if (response.state == -1) {
                            getKaptcha($btn_img);
                            var msg_position = $.inArray(response.msg, message_arr);
                            hintDialog("fa-exclamation-circle", "#b34242", message_dialog[msg_position]);
                        }
                    });
                });
                var $tradepwd = $wrapper.find("#innerGetCoin .tradepwd input");
                $wrapper.find("#innerGetCoin .tradepwd button").click(function() {
                    location.href = "#/accountSecurity";
                });
                $btnConfirm.click(function() {
                    $btnConfirm.prop('disabled', true);
                    $btnConfirm.find('.loading').css('display', 'block');
                    var data = {
                        currency: currency,
                        addr: currency == "AAC" || currency == "EOS" ? $coin_addr.val() + '▲' + $coin_tips.val() : $coin_addr.val(),
                        amount: $coin_num.val(),
                        sms_code: $mobilecodeinput.val(),
                        m_security_pwd: $tradepwd.val()
                    };
                    dataService.accountService.withdrawCreateI(data).then(function(response) {
                        if (response.state == 1) {
                            $btnConfirm.prop('disabled', false);
                            hintDialog("fa-check-circle", "#1c9547", language == "en" ? "Submit successfully" : "提交成功");
                            location.href = "#/assetsRecord";
                        } else if (response.state == -1) {
                            $btnConfirm.prop('disabled', false);
                            getKaptcha($btn_img);

                            var msg_position = $.inArray(response.msg, message_arr);
                            hintDialog("fa-exclamation-circle", "#b34242", message_dialog[msg_position]);
                        }
                    });
                });
                var tipsList = $wrapper.find("#tipsList");
                dataService.membershipService.getAssetsLst().then(function(response) {
                    // console.log(response);
                    var accountsLst = response.data.accountsLst;
                    var accountsLstArr = [];
                    var currencyLst = response.data.currencyLst;
                    for (var i = 0; i < currencyLst.length; i++) {
                        if (currencyLst[i].currency == currency) {
                            if (language == "en") {

                                tipsList.append(`<li>The minimum amount of coins is ${ currencyLst[i].c_min_withdraw } ${currency}, and the single handling fee is ${ currencyLst[i].withdraw_fee } ${currency}.</li>`);
                            } else {
                                tipsList.append(`<li>最小提币数量 ${ currencyLst[i].c_min_withdraw } ${currency}，单笔手续费需 ${ currencyLst[i].withdraw_fee } ${currency}</li>`);
                            }

                        }
                    }
                    for (var j = 0; j < accountsLst.length; j++) {
                        accountsLstArr.push(accountsLst[j].currency);
                        if (accountsLst[j].currency == currency) {
                            $('#innerGetCoin .gm-inner .coin-num button').attr('data-balance', accountsLst[j].balance);
                            $('#innerGetCoin .gm-inner .coin-num span em').text(' ' + accountsLst[j].balance + ' ' + currency);
                        }

                    }
                    var position = $.inArray(currency, accountsLstArr);
                    if (position == -1) {
                        $('#innerGetCoin .gm-inner .coin-num button').attr('data-balance', 0);
                        $('#innerGetCoin .gm-inner .coin-num span em').text(' ' + 0 + ' ' + currency);
                    }
                });
            });

            function countDownBtn($btn) {
                var second = 60;
                if (second > 0) {
                    second--;
                    $btn.text(second + 's重新发送');
                    $btn.prop('disabled', true);
                    $btn.addClass('forbidBtn');
                }
                var msgInterval = setInterval(function() {
                    if (second > 0) {
                        second--;
                        $btn.text(second + 's重新发送');
                        $btn.prop('disabled', true);
                        $btn.addClass('forbidBtn');
                    }
                    if (second == 0) {
                        clearInterval(msgInterval);
                        $btn.text('获取验证码');
                        $btn.prop('disabled', false);
                        $btn.removeClass('forbidBtn');
                    }
                }, 1000);
            }

            function getKaptcha(code) {
                dataService.accountService.getKaptcha().then(function(response) {
                    var imgcode = response.check_code_img;
                    var tokencode = response.check_code_token;
                    code.attr({
                        src: imgcode,
                        "data-token": tokencode
                    });
                });
            }
        }
    };
    var newsList = {
        load: function() {
            viewService.getTemplate("view/newsList.html").then(function(resHtml) {
                var $wrapper = $(resHtml);
                $MainView.html($wrapper);
                $(".tradecenter").removeClass("cur");
                $(".tradecenter").siblings().removeClass("cur");
                var $lists_main = $wrapper.find("#Lists");
                $MainView.css("background-image", "none");
                dataService.newsService.getNewsList(304, 1, 15).then(function(response) {
                    if (response.state == 1) {
                        var lists = response.data.list;
                        for (var i = 0; i < lists.length; i++) {
                            loadNewsToList($lists_main, lists, i);
                        }
                    }
                });
            });

            function loadNewsToList($lists_main, lists, i) {
                var id = lists[i].id;
                var $list = $('<div class="list f-cb"></div>').click(function() {
                    location.href = "#/newsDetail?id=" + id;
                }).appendTo($lists_main);
                $('<span class="f-fl"></span>').text(lists[i].a_title).appendTo($list);
                $('<span class="f-fr"></span>').text(lists[i].a_time).appendTo($list);
            }
        }
    };
    var notices = {
        load: function() {
            viewService.getTemplate("view/notices.html").then(function(resHtml) {
                var $wrapper = $(resHtml);
                var arr_obj = {
                    "zh": ["公告", "更多公告", "搜索"],
                    "en": ["Announcement", "More Announcements", "Search"]
                };
                $MainView.html($wrapper);
                $(".tradecenter").removeClass("cur");
                $(".tradecenter").siblings().removeClass("cur");
                $("#notices").html(`<div class="main-panel f-cb">
                                        <div class="notices-title">
                                            <span>Zero</span>
                                            <span>></span>
                                            <span>${arr_obj[language][0]}</span>
                                        </div>
                                        <div class="notices-search">
                                            <div>
                                                <input type="text" placeholder="${arr_obj[language][2]}">
                                                <i class="fa fa-search"></i>
                                            </div>
                                        </div>
                                        <div class="content" id="view">
                                            <div class="inner-news-list " id="innerNewsList">
                                                <div class="lists-main " id="Lists"></div>
                                                <div class="lists-more">
                                                    
                                                </div>
                                            </div>
                                            <div class="inner-news-detail" id="innerNewsDetail">
                                                <div class="detail-main" id="Detail"></div>
                                            </div>
                                        </div>
                                    </div>`);
                $MainView.css("background-image", "none");
                var $lists_main = $wrapper.find("#Lists");
                var $detail = $wrapper.find("#Detail");
                var GetRequest = new GetRequest();
                $('<a href="#/notices">' + (language == "en" ? "Show more" : "查看更多") + '&nbsp;&nbsp;></a>').click(function() {
                    $("#innerNewsList").removeClass("lists-main1");
                    $detail.html("");
                    $("#innerNewsList .lists-more").css("display", "none");
                    $("#innerNewsDetail").css("display", "none");
                    $("#Lists .list").removeClass("cur");
                }).appendTo($("#innerNewsList .lists-more"))
                if (GetRequest.id) {
                    $("#innerNewsList").addClass("lists-main1");
                    $("#innerNewsList .lists-more").css("display", "block");
                    $("#innerNewsDetail").css("display", "block");
                    var id = location.hash.split("?")[1].split("=")[1];
                    dataService.newsService.getNews(id).then(function(response) {
                        var news = response.data;
                        loadNewsDetail($detail, news);
                    });
                } else {
                    $("#innerNewsList").removeClass("lists-main1");
                    $("#innerNewsList .lists-more").css("display", "none");
                    $("#innerNewsDetail").css("display", "none");
                }
                dataService.newsService.getNewsList(304, 1, 15).then(function(response) {
                    if (response.state == 1) {
                        var lists = response.data.list;
                        for (var i = 0; i < lists.length; i++) {
                            loadNewsToList($lists_main, lists, i, $detail, GetRequest);
                        }
                    }
                });

                function GetRequest() {
                    var url = location.hash; //获取url中"?"符后的字串 

                    var theRequest = new Object();
                    if (url.indexOf("?") != -1) {
                        var str = url.substr(10);
                        strs = str.split("&");
                        for (var i = 0; i < strs.length; i++) {
                            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
                        }
                    }
                    return theRequest;
                }


            });


            function loadNewsToList($lists_main, lists, i, $detail, GetRequest) {
                var id = lists[i].id;
                if (GetRequest.id) {
                    var $list = $(GetRequest.id == id ? '<div class="list f-cb cur"></div>' : '<div class="list f-cb"></div>').click(function() {
                        // location.href = "#/newsDetail?id=" + id;
                        $("#innerNewsList").removeClass("lists-main1");
                        $("#innerNewsList").addClass("lists-main1");
                        $("#innerNewsList .lists-more").css("display", "block");
                        $("#innerNewsDetail").css("display", "block");
                        $(this).addClass("cur");
                        $(this).siblings().removeClass("cur");
                        dataService.newsService.getNews(id).then(function(response) {
                            var news = response.data;
                            loadNewsDetail($detail, news);
                        });
                    }).appendTo($lists_main);
                } else {
                    var $list = $('<div class="list f-cb"></div>').click(function() {
                        // location.href = "#/newsDetail?id=" + id;
                        $("#innerNewsList").removeClass("lists-main1");
                        $("#innerNewsList").addClass("lists-main1");
                        $(this).addClass("cur");
                        $("#innerNewsList .lists-more").css("display", "block");
                        $("#innerNewsDetail").css("display", "block");
                        $(this).siblings().removeClass("cur");
                        dataService.newsService.getNews(id).then(function(response) {
                            var news = response.data;
                            loadNewsDetail($detail, news);
                        });
                    }).appendTo($lists_main);
                }

                $('<span class="f-fl"></span>').text(lists[i].a_title).appendTo($list);
                $('<span class="f-fr"></span>').text(lists[i].a_time).appendTo($list);
            }

            function loadNewsDetail($detail, news) {

                $detail.html("");
                $('<div class="title"></div>').text(news.a_title).appendTo($detail);
                var $subtitle = $('<div class="sub-title"></div>').appendTo($detail);
                $("<span></span>").text(news.a_time).appendTo($subtitle);
                $("<span></span>").text(news.a_author).appendTo($subtitle);
                $("<span></span>").text(news.a_source).appendTo($subtitle);
                $(`${news.a_content}`).appendTo($detail);
            }
        }
    };
    var currency = {
        load: function() {
            viewService.getTemplate("view/currency.html").then(function(resHtml) {
                var $wrapper = $(resHtml);
                $MainView.html($wrapper);
                if (location.hash.split('?')[0].substr(1) === '/currency') {
                    $(".currency").addClass("cur");
                    $(".currency").siblings().removeClass("cur");
                } else {
                    $(".currency").removeClass("cur");
                }
            });

        }
    };
    var app = {
        load: function() {
            viewService.getTemplate("view/app.html").then(function(resHtml) {
                var $wrapper = $(resHtml);
                $MainView.html($wrapper);
                if (location.hash.split('?')[0].substr(1) === '/currency') {
                    $(".app").addClass("cur");
                    $(".app").siblings().removeClass("cur");
                } else {
                    $(".app").removeClass("cur");
                }
            });

        }
    };
    var newsDetail = {
        load: function() {
            viewService.getTemplate("view/newsDetail.html").then(function(resHtml) {
                var $wrapper = $(resHtml);
                $MainView.html($wrapper);
                $(".tradecenter").removeClass("cur");
                $(".tradecenter").siblings().removeClass("cur");
                $MainView.css("background-image", "none");
                var id = location.hash.split("?")[1].split("=")[1];
                var $detail = $wrapper.find("#Detail");
                dataService.newsService.getNews(id).then(function(response) {
                    var news = response.data;
                    loadNewsDetail($detail, news);
                });
            });

            function loadNewsDetail($detail, news) {
                $('<div class="title"></div>').text(news.a_title).appendTo($detail);
                var $subtitle = $('<div class="sub-title"></div>').appendTo($detail);
                $("<span></span>").text(news.a_time).appendTo($subtitle);
                $("<span></span>").text(news.a_author).appendTo($subtitle);
                $("<span></span>").text(news.a_source).appendTo($subtitle);
                $(`${news.a_content}`).appendTo($detail);
            }
        }
    };
    var launchpad = {
        load: function() {
            viewService.getTemplate("view/launchpad.html").then(function(resHtml) {
                var $wrapper = $(resHtml);
                $MainView.html($wrapper);
                $MainView.css("background-image", "url(../images/222.jpg)");
                $MainView.css("background-size", "cover");
                if (location.hash.split('?')[0].substr(1) === '/launchpad') {
                    $(".launchpad").addClass("cur");
                    $(".launchpad").siblings().removeClass("cur");
                } else {
                    $(".launchpad").removeClass("cur");
                }
                loadNoticeBlock($wrapper);
            });





            function loadNoticeBlock($wrapper) {
                dataService.newsService.getNewsList(304, 1, 3).then(function(response) {
                    if (response.state == 1) {
                        var lists = response.data.list;
                        var $listWrapper = $wrapper.find("#news");
                        // <span class="sep">/</span>
                        // console.log(lists);
                        for (var i = 0; i < lists.length; i++) {
                            $listWrapper.append(`
                            <a href="#/notices?id=${lists[i].id}" target="_blank">${lists[i].a_title}</a>
                            `);
                        }
                        AutoScroll();
                    }
                });
            }

            function AutoScroll() {

                var num = $("#news").find("a").length;
                if (num > 1) {
                    setInterval(function() {
                        $('#news').animate({
                            marginTop: "-40px"
                        }, 2000, function() {
                            $(this).css({ marginTop: "0" }).find(":first").appendTo(this);
                        });
                    }, 8000);
                }

                    
            }

        }
    };

    var feeList = {
        load: function() {
            viewService.getTemplate("view/feeList.html").then(function(resHtml) {
                var $wrapper = $(resHtml);
                var arr_obj = {
                    'zh': ["帮助中心", "费率说明"],
                    "en": ["Help Center", "Rate Description"]
                };
                $MainView.html($wrapper);
                $(".tradecenter").removeClass("cur");
                $(".tradecenter").siblings().removeClass("cur");
                $MainView.css("background-image", "none");
                $("#helpCenter").html(`<div class="main-panel f-cb">
                                        <div class="sidebar-nav f-fl">
                                            <ul>
                                                <li>${arr_obj[language][0]}</li>
                                                <li>
                                                    <a href="#/feeList" class="cur">${arr_obj[language][1]}</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="content" id="view">
                                            <div class="inner-fee-list" id="innerFeeList">
                                                <div class="header">${arr_obj[language][1]}</div>
                                                <div class="lists-main" id="feeTB"></div>
                                            </div>
                                        </div>
                                    </div>`);
                $("#quit-load").click(function(e) {
                    e.preventDefault();
                    dataService.membershipService.getMemberLogout().then(function(response) {
                        if (response.state == 1) {
                            // 用户退出登录
                            userLogout();
                        }
                    });
                });
                var $feeTB = $wrapper.find('#feeTB');
                dataService.newsService.getNews('172').then(function(response) {
                    if (response.state == 1) {
                        var data = response.data;
                        $feeTB.append(data.a_content);
                    }

                });
            });
        }
    };
    var userAgreement = {
        load: function() {
            viewService.getTemplate("view/userAgreement.html").then(function(resHtml) {
                var $wrapper = $(resHtml);
                var arr_obj = {
                    "zh": ["客户服务", "用户协议", "隐私协议"],
                    "en": ["Customer Service", "User Agreement", "Privacy Agreement"]
                }
                $MainView.html($wrapper);
                $(".tradecenter").removeClass("cur");
                $(".tradecenter").siblings().removeClass("cur");
                $("#customerService").html(`<div class="main-panel f-cb">
                                <div class="sidebar-nav f-fl">
                                    <ul>
                                        <li>${arr_obj[language][0]}</li>
                                        <li>
                                            <a href="#/userAgreement" class="cur">${arr_obj[language][1]}</a>
                                        </li>
                                        <li>
                                            <a href="#/privacyPolicy">${arr_obj[language][2]}</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="content" id="view">
                                    <div class="inner-user-agreement" id="innerUserAgreement">
                                        <div class="header">${arr_obj[language][1]}</div>
                                        <div class="lists-main" id="userAgreementTB"></div>
                                    </div>
                                </div>
                            </div>`);
                var $userAgreementTB = $wrapper.find('#userAgreementTB');
                dataService.newsService.getNews('171').then(function(response) {
                    var data = response.data; 
                    $userAgreementTB.append(data.a_content);
                });
            });
        }
    };
    var privacyPolicy = {
        load: function() {
            viewService.getTemplate("view/privacyPolicy.html").then(function(resHtml) {
                var $wrapper = $(resHtml);
                var arr_obj = {
                    "zh": ["客户服务", "用户协议", "隐私协议"],
                    "en": ["Customer Service", "User Agreement", "Privacy Agreement"]
                }
                $MainView.html($wrapper);
                $(".tradecenter").removeClass("cur");
                $(".tradecenter").siblings().removeClass("cur");
                $("#customerService").html(`<div class="main-panel f-cb">
                                <div class="sidebar-nav f-fl">
                                    <ul>
                                        <li>${arr_obj[language][0]}</li>
                                        <li>
                                            <a href="#/userAgreement">${arr_obj[language][1]}</a>
                                        </li>
                                        <li>
                                            <a href="#/privacyPolicy" class="cur">${arr_obj[language][2]}</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="content" id="view">
                                    <div class="inner-private-policy" id="innerPrivacyPolicy">
                                        <div class="header">${arr_obj[language][2]}</div>
                                        <div class="lists-main" id="privacyPolicyTB"></div>
                                    </div>
                                </div>
                            </div>`);
                var $privacyPolicyTB = $wrapper.find('#privacyPolicyTB');
                dataService.newsService.getNews('170').then(function(response) {
                    var data = response.data;
                    $privacyPolicyTB.append(data.a_content);
                });
            });
        }
    };
    var otc = {
        load: function() {
            var a1 = 0;
            var a2 = 0;
            viewService.getTemplate("view/otc.html").then(function(resHtml) {
                var $wrapper = $(resHtml);
                var arr_zh = ["购买", "出售", "我的订单", "请先登录", "广告位", "最低限额", "设置最低限额，可以自动为您过滤限额以下的广告。", "支付方式", "全部", "银行卡", "支付宝", "微信", "商家", "单价", "数量", "已成交", "交易限额", "支付方式", "操作", "购买", "出售", "请输入数量", "请输入资金密码", "付款限额", "付款方式", "提示：冒充已付款，情节严重封号处理", "提交", "关闭"],
                    arr_en = ["Buy", "Sell", "My order", "Please login first", "Ad slot", "Minimum limit", "Set a minimum limit, you can automatically filter the ads below the limit. ", "payment method", "all", "bank card", "Alipay", "WeChat", "Business", "Unit price", "Quantity", "Completed", "Transaction limit", "Payment method", "Operation", "Buy", "Sell", "Please enter the quantity", "Please enter the fund password", "Payment limit", "Payment method", "Prompt: impersonation has been paid, the plot is severely sealed", "Submit", "Close"],
                    arr_ze = language == "en" ? arr_en : arr_zh;
                $MainView.html($wrapper);
                $MainView.css("background-image", "none");
                if (location.hash.split('?')[0].substr(1) === '/otc') {
                    $(".otc").addClass("cur");
                    $(".otc").siblings().removeClass("cur");
                } else {
                    $(".otc").removeClass("cur");
                }
                $(".otc-header-inner").html(`<div class="left-btns f-fl">
                                <button type="button" class="buy cur" id="BuyZC">${arr_ze[0]}</button>
                                <button type="button" class="sell" id="SellZC">${arr_ze[1]}</button>
                            </div>
                            <div class="right-btns f-fr">
                                <div class="list-header orders">
                                    <span>${arr_ze[2]}</span>
                                </div>
                            </div>
                            <div class="right-btns f-fr" style="margin-right:30px">
                                <div class="list-header payments">
                                    <span>${language == "en" ?"Payment Settings":"收款设置"}</span>
                                </div>
                            </div>
                            `);
                $(".otc-main-header").html(`<div class="otc-ad f-fl">${arr_ze[4]}： <span id="otc-ad">1</span></div>
                                        <div class="otc-header-search f-fl">
                                            <span class="f-fl">${arr_ze[5]}  
                                                <i class="fa fa-question-circle" aria-hidden="true">
                                                    <i class="dialogs">${arr_ze[6]}</i>
                                                </i>
                                            </span>
                                
                                            <div class="search f-fl">
                                                <input type="text"  autocomplete="new-password" name="" id="fa-search-val" class="f-fl">
                                                <em class="f-fl">USDT</em>
                                            </div>
                                            <div class="f-fl"><i class="fa fa-search" id="fa-search" data-id="0"></i></div>
                                        </div>
                                        `);
                $(".otc-main").html(`<table class="list-main cur" cellspacing=0>
                                        <thead>
                                            <tr>
                                                <th>${arr_ze[12]}</th>
                                                <th>${arr_ze[13]}（CNY）</th>
                                                <th>${arr_ze[14]}（USDT）</th>
                                                <th>${arr_ze[15]}（USDT）</th>
                                                <th>${arr_ze[16]}（USDT）</th>
                                                <th>${arr_ze[17]}</th>
                                                <th>${arr_ze[18]}</th>
                                            </tr>
                                        </thead>
                                        <tbody id="buyin"></tbody>
                                    </table>
                                    <table class="list-main" cellspacing=0>
                                        <thead>
                                            <tr>
                                                <th>${arr_ze[12]}</th>
                                                <th>${arr_ze[13]}（CNY）</th>
                                                <th>${arr_ze[14]}（USDT）</th>
                                                <th>${arr_ze[15]}（USDT）</th>
                                                <th>${arr_ze[16]}（USDT）</th>
                                                <th>${arr_ze[17]}</th>
                                                <th>${arr_ze[18]}</th>
                                            </tr>
                                        </thead>
                                        <tbody id="soldout"></tbody>
                                    </table>`);
                $("#inner").html(`<div class="title f-cb">
                                <span></span>
                                <i class="f-fr fa fa-times"></i>
                            </div>
                            <div class="input-wrap price-wrap">
                                <label></label>
                                <span></span>
                            </div>
                            <div class="input-wrap number-wrap">
                                <label></label>
                                <input type="text" placeholder="${arr_ze[21]}">
                            </div>
                            <div class="input-wrap amount-wrap">
                                <label></label>
                                <input type="text" readonly class="amount">
                            </div>
                            <div class="input-wrap pwd-wrap">
                                <label>资金密码：</label>
                                <input type="password"  autocomplete="new-password" placeholder="${arr_ze[22]}">
                            </div>
                            <div class="input-wrap pay-limit">
                                <label>${arr_ze[23]}：</label>
                                <span></span>
                            </div>
                            <div class="input-wrap pay-method">
                                <label>${arr_ze[24]}：</label>
                                <div class="radio-wrap"></div>
                            </div>
                            <div class="tips">${arr_ze[25]}</div>
                            <button type="button" class="submit">${arr_ze[26]}</button>
                            <button type="button" class="cancel">${arr_ze[27]}</button>`);
                var $payment_setting = $wrapper.find(".otc-header .settings span");
                var $merchants = $wrapper.find(".otc-header .merchants span");
                var $my_orders = $wrapper.find(".otc-header .orders span");
                var $my_payments = $wrapper.find(".otc-header .payments span");
                $my_orders.click(function() {
                    dataService.membershipService.getMember().then(function(response) {
                        if (response.state == 1) {
                            location.href = "#/otc/otcmyorder";
                        } else {
                            hintDialog("fa-exclamation-circle", "#b34242", arr_ze[3]);
                        }
                    });
                });
                $my_payments.click(function() {
                    dataService.membershipService.getMember().then(function(response) {
                        if (response.state == 1) {
                            location.href = "#/otc/otcsetting";
                        } else {
                            hintDialog("fa-exclamation-circle", "#b34242", arr_ze[3]);
                        }
                    });
                });
                $merchants.click(function() {
                    dataService.membershipService.getMember().then(function(response) {
                        if (response.state == 1) {
                            location.href = "#/otc/otcmerchant";
                        } else {
                            hintDialog("fa-exclamation-circle", "#b34242", arr_ze[3]);
                        }
                    });
                });
                $payment_setting.click(function() {
                    dataService.membershipService.getMember().then(function(response) {
                        if (response.state == 1) {
                            location.href = "#/otc/otcsetting";
                        } else {
                            hintDialog("fa-exclamation-circle", "#b34242", arr_ze[3]);
                        }
                    });
                });
                dataService.otcService.getOtcAdsList("USDT", "CNY", "0", "1", "15").then(function(response) {
                    var ads = response.ads;

                    var $tbodyBuy = $wrapper.find(".otc-main #buyin");
                    var $tbodySell = $wrapper.find(".otc-main #soldout");
                    var $dialog = $("#otcDialog");
                    var faSearchVal = $("#fa-search-val");
                    $("#fa-search").click(function() {
                        if ($(this).attr("data-id") == 0) {
                            $tbodyBuy.html("");
                        } else {
                            $tbodySell.html("");
                        }
                        for (var i = 0; i < ads.length; i++) {
                            var type = ads[i].ad_type;
                            if ($(this).attr("data-id") == 0) {
                                if (type == "1") {
                                    if (faSearchVal.val() < ads[i].max_quote && faSearchVal.val() > ads[i].min_quote) {
                                        loadDataToOTCTb($tbodyBuy, type, ads, i, $dialog);
                                    } else if (faSearchVal.val() == 0) {
                                        loadDataToOTCTb($tbodyBuy, type, ads, i, $dialog);
                                    }
                                }
                            } else {
                                if (type == "2") {
                                    if (faSearchVal.val() < ads[i].max_quote && faSearchVal.val() > ads[i].min_quote) {
                                        loadDataToOTCTb($tbodySell, type, ads, i, $dialog);
                                    } else if (faSearchVal.val() == 0) {
                                        loadDataToOTCTb($tbodySell, type, ads, i, $dialog);
                                    }

                                }
                            }
                        }
                    })
                    $("#bankChange").change(function() {
                        if ($(this).attr("data-id") == 0) {
                            $tbodyBuy.html("");
                        } else {
                            $tbodySell.html("");
                        }
                        for (var i = 0; i < ads.length; i++) {
                            var type = ads[i].ad_type;
                            if ($(this).attr("data-id") == 0) {
                                if (type == "1") {
                                    if (faSearchVal.val() < ads[i].max_quote && faSearchVal.val() > ads[i].min_quote) {
                                        loadDataToOTCTb($tbodyBuy, type, ads, i, $dialog);
                                    } else if (faSearchVal.val() == 0) {
                                        loadDataToOTCTb($tbodyBuy, type, ads, i, $dialog);
                                    }
                                }
                            } else {
                                if (type == "2") {
                                    if (faSearchVal.val() < ads[i].max_quote && faSearchVal.val() > ads[i].min_quote) {
                                        loadDataToOTCTb($tbodySell, type, ads, i, $dialog);
                                    } else if (faSearchVal.val() == 0) {
                                        loadDataToOTCTb($tbodySell, type, ads, i, $dialog);
                                    }

                                }
                            }
                        }
                    })
                    for (var i = 0; i < ads.length; i++) {
                        var type = ads[i].ad_type;

                        if (type == "1") {
                            a1++;
                            $("#otc-ad").text(a1);
                            loadDataToOTCTb($tbodyBuy, type, ads, i, $dialog);
                        } else if (type == "2") {
                            a2++;
                            $("#otc-ad").text(a2);
                            loadDataToOTCTb($tbodySell, type, ads, i, $dialog);
                        }
                    }
                });
                tabSlider();
            });

            function loadDataToOTCTb($tbodyBuy, type, ads, i, $dialog) {
                var isclick = true;
                var arr_obj = {
                    "zh": ["购买", "请先设置交易密码", "请先登录", "出售"],
                    "en": ["Buy", "Please set the transaction password first", "Please login first", "Sell"]
                }
                var $tr = $("<tr></tr>").appendTo($tbodyBuy);
                $("<td></td>").text(ads[i].o_name).appendTo($tr);
                $("<td></td>").text(ads[i].price).appendTo($tr);
                $("<td></td>").text(ads[i].max_quote).appendTo($tr);
                $("<td></td>").text(ads[i].total_volume).appendTo($tr);
                $("<td></td>").text(ads[i].min_quote + " ~ " + ads[i].max_quote).appendTo($tr);
                var $td = $("<td></td>").appendTo($tr);
                if (ads[i].alipay_info != "") {
                    $('<i class="zhifubao" data-pay=""></i>').appendTo($td);
                }
                if (ads[i].bank_info != "") {
                    $('<i class="visa" data-pay="bank"></i>').appendTo($td);
                }
                if (ads[i].wxpay_info != "") {
                    $('<i class="weixin" data-pay="wxpay"></i>').appendTo($td);
                }
                var $tdbtn = $("<td></td>").appendTo($tr);
                if (type == "1") {
                    var $buy_btn = $('<button type="button">' + arr_obj[language][0] + 'USDT</button>');
                    $buy_btn.attr("data-id", ads[i].id).click(function() {
                        if (isclick) {
                            isclick = false
                            dataService.membershipService.getMember().then(function(response) {
                                if (response.state == 1) {
                                    dataService.membershipService.getIsSetCoinPwd().then(function(response) {
                                        if (response.state == 1 && response.data == 1) {
                                            showDialog($dialog, type, $buy_btn, ads, i);
                                        } else {
                                            hintDialog("fa-exclamation-circle", "#b34242", arr_obj[language][1]);
                                        }
                                    });
                                } else {
                                    hintDialog("fa-exclamation-circle", "#b34242", arr_obj[language][2]);
                                }
                            });
                            setTimeout(function() {
                                isclick = true;
                            }, 3000);
                        }
                    }).appendTo($tdbtn);
                } else if (type == "2") {
                    var $sell_btn = $('<button type="button">' + arr_obj[language][3] + 'USDT</button>');
                    $sell_btn.attr("data-id", ads[i].id).click(function() {
                        if (isclick) {
                            isclick = false;
                            dataService.membershipService.getMember().then(function(response) {
                                if (response.state == 1) {
                                    showDialog($dialog, type, $sell_btn, ads, i);
                                } else {
                                    hintDialog("fa-exclamation-circle", "#b34242", arr_obj[language][2]);
                                }
                            });
                            setInterval(function() {
                                isclick = true;
                            }, 1000);
                        }
                    }).appendTo($tdbtn);
                }
            }

            function showDialog($dialog, type, $sell_btn, ads, i) {
                var isclick = true;
                var arr_obj = {
                    "zh": ["请完善相应收款设置", "交易密码", "购买", "出售", "购买价格", "出售价格", "购买数量", "出售数量", "购买总额", "出售总额", "银行卡转账", "支付宝", "微信", "购买成功", "出售成功", "购买信息不完善"],
                    "en": ["Please improve the corresponding payment settings", "transaction password", "purchase", "sale", "purchase price", "sale price", "purchase quantity", "sale quantity", "total purchase", "sale Total amount", "bank card transfer", "Alipay", "WeChat", "Purchase success", "Sell successful", "Purchase information is not perfect"]
                }
                dataService.otcService.getOtcAccountInfo().then(function(response) {
                    var data = response.data;
                    if (data.length == 0) {
                        hintDialog("fa-exclamation-circle", "#b34242", arr_obj[language][0]);
                    }
                });
                $dialog.css("display", "block");
                var password = $dialog.find(".pwd-wrap input").text(arr_obj[language][1] + "：");
                var volume = $dialog.find(".number-wrap input");
                var price = $sell_btn.parent().siblings()[1];
                var ads_id = $sell_btn.attr("data-id");
                var $payment = $dialog.find("#inner .pay-method .radio-wrap");
                $dialog.find(".title span").removeClass().addClass(type == "1" ? "rise" : "fall").text(type == "1" ? arr_obj[language][2] + "USDT" : arr_obj[language][3] + "USDT");
                $dialog.find(".title i").click(function() {
                    $dialog.css("display", "none");
                    volume.val("");
                    password.val("");
                    $dialog.find(".amount-wrap input").val("");
                    $payment.empty();
                });
                $dialog.find(".price-wrap label").text(type == "1" ? arr_obj[language][4] + "：" : arr_obj[language][5] + "：");
                $dialog.find(".price-wrap span").text($(price).text());
                $dialog.find(".number-wrap label").text(type == "1" ? arr_obj[language][6] + "：" : arr_obj[language][7] + "：");
                $dialog.find(".number-wrap input").bind("input propertychange", function() {
                    $dialog.find(".amount-wrap input").val(($(price).text() * $(this).val()).toFixed(2));
                });
                $dialog.find(".amount-wrap label").text(type == "1" ? arr_obj[language][8] + "：" : arr_obj[language][9] + "：");
                $dialog.find(".pwd-wrap label").text(arr_obj[language][1] + "：");
                $dialog.find("#inner .pay-limit span").text(`${ads[i].min_quote} ~ ${ads[i].max_quote}`);
                if (ads[i].bank_info != "") {
                    $payment.append('<input type="radio" class="bank" name="pay" value="bank">' + arr_obj[language][10] + '');
                }
                if (ads[i].alipay_info != "") {
                    $payment.append('<input type="radio" class="alipay" name="pay" value="alipay">' + arr_obj[language][11] + '');
                }
                if (ads[i].wxpay_info != "") {
                    $payment.append('<input type="radio" class="wxpay" name="pay" value="wxpay">' + arr_obj[language][12]);
                }
                var account_types = $($dialog.find(".pay-method input")[0]).prop('checked', true).val();
                $dialog.find(".pay-method input").each(function() {
                    $(this).change(function() {
                        if ($(this).prop("checked")) {
                            account_types = $(this).val();
                        }
                    });
                });
                $dialog.find("button.submit").off().click(function() {
                    if (isclick) {
                        isclick = false;
                        if ((volume.val().trim() != '') && (password.val().trim() != '') && account_types) {
                            var data = {
                                ad_type: type,
                                volume: volume.val(),
                                ads_id: ads_id,
                                sec_pwd: password.val(),
                                account_types: account_types
                            };
                            dataService.otcService.otcAddorder(data).then(function(response) {
                                if (response.state == 1) {
                                    hintDialog("fa-check-circle", "#1c9547", type == "1" ? arr_obj[language][13] : arr_obj[language][14]);
                                    location.href = "#/otc/otcmyorder";
                                } else if (response.state == -1) {
                                    var msg_position = $.inArray(response.msg, message_arr);
                                    hintDialog("fa-exclamation-circle", "#b34242", message_dialog[msg_position]);
                                    $dialog.css("display", "none");
                                    volume.val("");
                                    password.val("");
                                    $dialog.find(".amount-wrap input").val("");
                                    $payment.empty();
                                }
                            });
                        } else {
                            hintDialog("fa-exclamation-circle", "#b34242", arr_obj[language][15]);
                        }

                        setTimeout(function() {
                            isclick = true;
                        }, 5000);
                    }
                });
                $dialog.find("button.cancel").off().click(function() {
                    $dialog.css("display", "none");
                    volume.val("");
                    password.val("");
                    $dialog.find(".amount-wrap input").val("");
                    $payment.empty();
                });
            }

            function tabSlider() {
                var $tab = $("#otcPanel .left-btns > button");
                var $tabcon = $("#otcPanel .otc-main > table");
                $tab.each(function() {
                    $(this).click(function() {
                        tabShow($(this).index());
                    });
                });

                function tabShow(a) {
                    a1 = 0;
                    a2 = 0;
                    $tab.each(function() {
                        $(this).removeClass("cur");
                    });
                    $tabcon.each(function() {
                        $(this).removeClass("cur");
                    });
                    $($tab[a]).addClass("cur");
                    $($tabcon[a]).addClass("cur");
                    $("#fa-search").attr("data-id", a);
                    $("#bankChange").attr("data-id", a);
                }
            }
        }
    };
    var otctrade = {
        load: function() {
            viewService.getTemplate("view/otctrade.html").then(function(resHtml) {
                var $wrapper = $(resHtml);
                $MainView.html($wrapper);
                $(".tradecenter").removeClass("cur");
                $(".tradecenter").siblings().removeClass("cur");
                $MainView.css("background-image", "none");
                // 获得订单的详细信息
                // 获取地址栏的值 ad_type:买入、卖出  id:订单id从数组中查询该条id
                var hash_param = location.hash.split("?")[1].split("&");
                var hash_param_id = hash_param[0].split("=")[1];
                var hash_param_adtype = hash_param[1].split("=")[1];
                dataService.otcService.getOtcorders("USDT", "CNY", "1", "50", hash_param_adtype, 0).then(function(response) {

                    var isclick = true;
                    var orders = response.orders;
                    var current_order_temp = orders.filter(i => i.id == hash_param_id);
                    var current_order = current_order_temp[0];
                    // 承兑商
                    $wrapper.find("#client").append(`
                            <span>承兑商家:</span>
                            <span>${current_order.owner_name}</span>
                        `);
                    // price
                    $wrapper.find("#price").append(`
                            <div class="price-large"> ${
                            hash_param_adtype == 1 ? "买入" : "卖出"
                            } USDT，订单总金额 <em>${current_order.amount}</em> CNY</div>
                            <div class="price-unit">单价：<em>${current_order.price.toFixed(2)}</em> USDT</div>
                            <div class="price-number">数量：<em>${current_order.volume.toFixed(2)}</em> USDT</div>
                        `);
                    // 付款方式 向承兑商付款
                    dataService.otcService.getOtcAds(current_order.ad_id).then(function(response) {
                        if (response.state == 1) {
                            var ad = response.ad;
                            var $payment = $wrapper.find("#payment");
                            var $qrcode = $wrapper.find("#payment img.qrcode");
                            if (ad.bank_info) {
                                var bank_info = ad.bank_info.split("▲");
                                var $bank = $(
                                    '<div class="method-pay method-visa f-cb" id="bank"></div>'
                                ).appendTo($payment);
                                $(`<i class="icon f-fl"></i>`).appendTo($bank);
                                $(`<span class="way f-fl">银行卡</span>`).appendTo($bank);
                                $(`<span class="name f-fl">${bank_info[0]}</span>`).appendTo($bank);
                                $(`<input class="account f-fl" value="${bank_info[1]}" readonly>`).appendTo($bank);
                                $(`<span class="f-fl">${bank_info[2]} ${bank_info[3]}</span>`).appendTo($bank);
                                $(`<i class="fa fa-files-o f-fl"></i>`).appendTo($bank);
                            }
                            if (ad.wxpay_info) {
                                var wxpay_info = ad.wxpay_info.split("▲");
                                var $wxpay = $('<div class="method-pay method-weixin f-cb" id="wxpay"></div>').appendTo($payment);
                                // $(`<input class="f-fl ckbox" type="checkbox">`).appendTo($wxpay);
                                $(`<i class="icon f-fl"></i>`).appendTo($wxpay);
                                $(`<span class="way f-fl">微信</span>`).appendTo($wxpay);
                                $(`<span class="name f-fl">${wxpay_info[0]}</span>`).appendTo($wxpay);
                                $(`<input class="account f-fl" value="${wxpay_info[1]}" readonly>`).appendTo($wxpay);
                                $qrcode.attr("src", wxpay_info[2]);
                                $(`<i class="fa fa-qrcode f-fl"></i>`).mouseover(function() {
                                    $qrcode.css({
                                        display: "block",
                                        transition: ".6s"
                                    });
                                }).mouseleave(function() {
                                    $qrcode.css({
                                        display: "none",
                                        transition: ".6s"
                                    });
                                }).appendTo($wxpay);
                            }
                            if (ad.alipay_info) {
                                var alipay_info = ad.alipay_info.split("▲");
                                var $alipay = $(
                                    '<div class="method-pay method-zhifubao f-cb" id="alipay"></div>'
                                ).appendTo($payment);
                                $(`<i class="icon f-fl"></i>`).appendTo($alipay);
                                $(`<span class="way f-fl">支付宝</span>`).appendTo($alipay);
                                $(`<span class="name f-fl">${alipay_info[0]}</span>`).appendTo($alipay);
                                $(`<input class="account f-fl" value="${alipay_info[1]}" readonly>`).appendTo($alipay);
                                $qrcode.attr("src", alipay_info[2]);
                                $(`<i class="fa fa-qrcode f-fl"></i>`).mouseover(function() {
                                    $qrcode.css({
                                        display: "block",
                                        transition: ".6s"
                                    });
                                }).mouseleave(function() {
                                    $qrcode.css({
                                        display: "none",
                                        transition: ".6s"
                                    });
                                }).appendTo($alipay);
                            }
                        }
                    });
                    var $state = $wrapper.find("#state");
                    $(`<span>请于24h内向${current_order.owner_name}支付<em>${current_order.amount}</em> USDT</span>`).appendTo($state);
                    $(`<button type="button">我已付款</button>`).click(function() {
                        if (isclick) {
                            isclick = false;

                            var data = {
                                id: hash_param_id
                            };
                            dataService.otcService.confirmorder(data).then(function(response) {
                                // ==================问题=================
                                if (response.state == 1) {
                                    hintDialog("fa-check-circle", "#1c9547", "支付成功");
                                    location.href = "#/otc/otcmyorder";
                                } else if (response.state == -1) {
                                    var msg_position = $.inArray(response.msg, message_arr);
                                    hintDialog("fa-exclamation-circle", "#b34242", message_dialog[msg_position]);
                                }
                            });
                            setTimeout(function() {
                                isclick = true;
                            }, 3000);
                        }
                    }).appendTo($state);

                });
            });
        }
    };
    var otcmerchant = {
        load: function() {
            viewService.getTemplate("view/otcmerchant.html").then(function(resHtml) {
                var $wrapper = $(resHtml);
                $MainView.html($wrapper);
                $(".tradecenter").removeClass("cur");
                $(".tradecenter").siblings().removeClass("cur");
                $MainView.css("background-image", "none");
                var $otc_mer_dialog = $wrapper.find("#otcMerDialog");

                $wrapper.find(".apply-now button").click(function() {
                    $("#otcMerDialog").css("display", "block");
                });

                $wrapper.find("i").click(function() {
                    $("#otcMerDialog").css("display", "none");
                });
            });
        }
    };
    var otcmyorder = {
        load: function() {
            viewService.getTemplate("view/otcmyorder.html").then(function(resHtml) {
                var $wrapper = $(resHtml);
                var arr_zh = ["我的订单", "当前订单", "已完成订单", "已取消订单", "订单", "类型", "价格", "数量", "金额", "商家", "创建时间", "状态", "操作"],
                    arr_en = ["My Order", "Current Order", "Completed Order", "Cancelled Order", "Order", "Type", "Price", "Quantity", "Amount", "Business", "Create Time ", " Status", "action"],
                    arr_ze = language == 'en' ? arr_en : arr_zh;
                $MainView.html($wrapper);
                $(".tradecenter").removeClass("cur");
                $(".tradecenter").siblings().removeClass("cur");
                $MainView.css("background-image", "none");
                $("#InnerOtcMyorder").html(`<div class="otcmyorder-header">
                <span class="title">${arr_ze[0]}</span>
                <div class="orders-option">
                    <span class="cur">${arr_ze[1]}</span>
                    <span>${arr_ze[2]}</span>
                    <span>${arr_ze[3]}</span>
                </div>
            </div>
            <div class="otcmyorder-main">
    
                <table class="cur" cellspacing=0 id="pendingOrder">
                    <thead>
                        <tr>
                            <th>${arr_ze[4]}</td>
                            <th>${arr_ze[5]}</td>
                            <th>${arr_ze[6]}（CNY）</td>
                            <th>${arr_ze[7]}（USDT）</td>
                            <th>${arr_ze[8]}（CNY）</td>
                            <th>${arr_ze[9]}</td>
                            <th>${arr_ze[10]}</td>
                            <th>${arr_ze[11]}</td>
                            <th>${arr_ze[12]}</td>
                        </tr>
                    </thead>
                    <tbody>
    
                        <tr>
                            <td></td>
                            <td>购买</td>
                            <td>1.000</td>
                            <td>1000000</td>
                            <td>1000000.00</td>
                            <td>Aro</td>
                            <td>2018-08-08 17:35:35</td>
                            <td>
                                <i></i>
                                <span>待付款</span>
                            </td>
                            <td>去付款</td>
                        </tr>
                        
                    </tbody>
                </table>
    
                <table class="" cellspacing=0 id="completeOrder">
                    <thead>
                        <tr>
                            <th>${arr_ze[4]}</td>
                            <th>${arr_ze[5]}</td>
                            <th>${arr_ze[6]}（CNY）</td>
                            <th>${arr_ze[7]}（USDT）</td>
                            <th>${arr_ze[8]}（CNY）</td>
                            <th>${arr_ze[9]}</td>
                            <th>${arr_ze[10]}</td>
                            <th>${arr_ze[11]}</td>
                            <th>${arr_ze[12]}</td>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
    
                <table class="" cellspacing=0 id="cancelOrder">
                    <thead>
                        <tr>
                            <th>${arr_ze[4]}</td>
                            <th>${arr_ze[5]}</td>
                            <th>${arr_ze[6]}（USDT）</td>
                            <th>${arr_ze[7]}（USDT）</td>
                            <th>${arr_ze[8]}（USDT）</td>
                            <th>${arr_ze[9]}</td>
                            <th>${arr_ze[10]}</td>
                            <th>${arr_ze[11]}</td>
                            <th>${arr_ze[12]}</td>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
    
            </div>
    `)
                    /**
                     * status = 0 待处理、 status = 1 已完成、 status = 2 已取消、 status = -1 待付款（仅买入）
                     * ad_type = 1 买入 ad_type = 2 卖出
                     */
                    // 获得当前订单 参数设置
                getCurrentOtcOrder($wrapper);
                //获得已完成订单 参数设置
                getCompleteOtcOrder($wrapper);
                //获得已取消订单 参数设置
                getCancelOtcOrder($wrapper);

                tabSlider();
            });

            function tabSlider() {
                var $tab = $("#InnerOtcMyorder .orders-option > span");
                var $tabcon = $("#InnerOtcMyorder .otcmyorder-main > table");
                $tab.each(function() {
                    $(this).click(function() {
                        tabShow($(this).index());
                    });
                });

                function tabShow(a) {
                    $tab.each(function() {
                        $(this).removeClass("cur");
                    });
                    $tabcon.each(function() {
                        $(this).removeClass("cur");
                    });
                    $($tab[a]).addClass("cur");
                    $($tabcon[a]).addClass("cur");
                }
            }

            function getCurrentOtcOrder($wrapper) {
                var $pending_order_tb = $wrapper.find("#pendingOrder tbody").html("");
                dataService.otcService.getOtcorders("USDT", "CNY", "1", "50", 2, 0).then(function(response) {

                    if (response.state == 1) {
                        var orders = response.orders;
                        for (var i = 0; i < orders.length; i++) {
                            var $tr = $("<tr></tr>").appendTo($pending_order_tb);
                            $("<td></td>").text(orders[i].id).appendTo($tr);
                            $('<td class="fall"></td>').text("卖出").appendTo($tr);
                            $("<td></td>").text(orders[i].price).appendTo($tr);
                            $("<td></td>").text(orders[i].volume).appendTo($tr);
                            $("<td></td>").text(orders[i].amount).appendTo($tr);
                            $("<td></td>").text(orders[i].owner_name).appendTo($tr);
                            $("<td></td>").text(orders[i].create_time).appendTo($tr);
                            $td = $("<td></td>").appendTo($tr);
                            $("<i></i>").appendTo($td);
                            $("<span></span>").text("待处理").appendTo($td);
                            $("<td></td>").text("待买家付款").appendTo($tr);
                        }
                    } else if (response.state == -1) {
                        var msg_position = $.inArray(response.msg, message_arr);
                        hintDialog("fa-exclamation-circle", "#b34242", message_dialog[msg_position]);
                        if (response.msg == 'LANG_NO_LOGIN') {
                            setTimeout(function() {
                                userLogout();
                            }, 2000);
                        }
                    }
                });
                dataService.otcService.getOtcorders("USDT", "CNY", "1", "20", 1, 0).then(function(response) {
                    var orders = response.orders;
                    for (var i = 0; i < orders.length; i++) {
                        var $tr = $("<tr></tr>").appendTo($pending_order_tb);
                        $("<td></td>").text(orders[i].id).appendTo($tr);
                        $('<td class="rise"></td>').text("买入").appendTo($tr);
                        $("<td></td>").text(orders[i].price).appendTo($tr);
                        $("<td></td>").text(orders[i].volume).appendTo($tr);
                        $("<td></td>").text(orders[i].amount).appendTo($tr);
                        $("<td></td>").text(orders[i].owner_name).appendTo($tr);
                        $("<td></td>").text(orders[i].create_time).appendTo($tr);
                        $td = $("<td></td>").appendTo($tr);
                        $("<i></i>").appendTo($td);
                        $("<span></span>").text(orders[i].status == "-1" ? "待付款" : "待处理").appendTo($td);
                        if (orders[i].status == "-1") {
                            $("<td></td>").html("<span class='payway'>选择付款方式</span>").click(function() {
                                var id = $($(this).siblings()[0]).text();
                                location.href = "#/otc/otctrade?id=" + id + "&ad_type=1";
                            }).appendTo($tr);
                        } else {
                            $("<td></td>").text("已付款").appendTo($tr);
                        }
                    }
                });
            }

            function getCompleteOtcOrder($wrapper) {
                var $complete_order_tb = $wrapper.find("#completeOrder tbody").html("");
                dataService.otcService.getOtcorders("USDT", "CNY", "1", "20", 2, 1).then(function(response) {
                    var orders = response.orders;
                    for (var i = 0; i < orders.length; i++) {
                        var $tr = $("<tr></tr>").appendTo($complete_order_tb);
                        $("<td></td>").text(orders[i].id).appendTo($tr);
                        $('<td class="fall"></td>').text("卖出").appendTo($tr);
                        $("<td></td>").text(orders[i].price).appendTo($tr);
                        $("<td></td>").text(orders[i].volume).appendTo($tr);
                        $("<td></td>").text(orders[i].amount).appendTo($tr);
                        $("<td></td>").text(orders[i].owner_name).appendTo($tr);
                        $("<td></td>").text(orders[i].create_time).appendTo($tr);
                        $td = $("<td></td>").appendTo($tr);
                        $("<i></i>").appendTo($td);
                        $("<span></span>").text("已完成").appendTo($td);
                        $("<td></td>").text("-").appendTo($tr);
                    }
                });
                dataService.otcService.getOtcorders("USDT", "CNY", "1", "20", 1, 1).then(function(response) {
                    var orders = response.orders;
                    for (var i = 0; i < orders.length; i++) {
                        var $tr = $("<tr></tr>").appendTo($complete_order_tb);
                        $("<td></td>").text(orders[i].id).appendTo($tr);
                        $('<td class="rise"></td>').text("买入").appendTo($tr);
                        $("<td></td>").text(orders[i].price).appendTo($tr);
                        $("<td></td>").text(orders[i].volume).appendTo($tr);
                        $("<td></td>").text(orders[i].amount).appendTo($tr);
                        $("<td></td>").text(orders[i].owner_name).appendTo($tr);
                        $("<td></td>").text(orders[i].create_time).appendTo($tr);
                        $td = $("<td></td>").appendTo($tr);
                        $("<i></i>").appendTo($td);
                        $("<span></span>").text("已完成").appendTo($td);
                        $("<td></td>").text("-").appendTo($tr);
                    }
                });
            }

            function getCancelOtcOrder($wrapper) {
                var $cancel_order_tb = $wrapper.find("#cancelOrder tbody").html("");
                dataService.otcService.getOtcorders("USDT", "CNY", "1", "20", 2, 2).then(function(response) {
                    var orders = response.orders;
                    for (var i = 0; i < orders.length; i++) {
                        var $tr = $("<tr></tr>").appendTo($cancel_order_tb);
                        $("<td></td>").text(orders[i].id).appendTo($tr);
                        $('<td class="fall"></td>').text("卖出").appendTo($tr);
                        $("<td></td>").text(orders[i].price).appendTo($tr);
                        $("<td></td>").text(orders[i].volume).appendTo($tr);
                        $("<td></td>").text(orders[i].amount).appendTo($tr);
                        $("<td></td>").text(orders[i].owner_name).appendTo($tr);
                        $("<td></td>").text(orders[i].create_time).appendTo($tr);
                        $td = $("<td></td>").appendTo($tr);
                        $("<i></i>").appendTo($td);
                        $("<span></span>").text("已取消").appendTo($td);
                        $("<td></td>").text("-").appendTo($tr);
                    }
                });
                dataService.otcService.getOtcorders("USDT", "CNY", "1", "20", 1, 2).then(function(response) {
                    var orders = response.orders;
                    for (var i = 0; i < orders.length; i++) {
                        var $tr = $("<tr></tr>").appendTo($cancel_order_tb);
                        $("<td></td>").text(orders[i].id).appendTo($tr);
                        $('<td class="rise"></td>').text("买入").appendTo($tr);
                        $("<td></td>").text(orders[i].price).appendTo($tr);
                        $("<td></td>").text(orders[i].volume).appendTo($tr);
                        $("<td></td>").text(orders[i].amount).appendTo($tr);
                        $("<td></td>").text(orders[i].owner_name).appendTo($tr);
                        $("<td></td>").text(orders[i].create_time).appendTo($tr);
                        $td = $("<td></td>").appendTo($tr);
                        $("<i></i>").appendTo($td);
                        $("<span></span>").text("已取消").appendTo($td);
                        $("<td></td>").text("-").appendTo($tr);
                    }
                });
            }
        }
    };
    var otcsetting = {
        load: function() {
            viewService.getTemplate("view/otcsetting.html").then(function(resHtml) {
                var $wrapper = $(resHtml);
                var arr_zh = ["收款设置", "添加收款方式", "绑定支付宝", "真实姓名", "请输入与支付宝账号一致的真实姓名", "支付宝账号", "请输入支付宝账号", "收款二维码", "资金密码", "请输入资金密码", "确认绑定", "绑定微信", "真实姓名", "请输入与微信账号一致的真实姓名", "微信账号", "请输入微信账号", "收款二维码", "资金密码", "请输入资金密码", "确认绑定", "绑定银行卡", "真实姓名", "请输入与银行卡账号一致的真实姓名", "银行卡账号", "请输入银行卡账号", "开户银行", "请输入详细开户行信息", "资金密码", "请输入资金密码", "确认绑定"],
                    arr_en = ["Receipt setting", "Add payment method", "Bind Alipay", "Real name", "Please enter the real name that is consistent with Alipay account", "Alipay account", "Please enter Alipay account", " Receipt QR code", "Fund password", "Please enter the fund password", "Confirm Binding", "Bind WeChat", "Real Name", "Please enter the real name consistent with WeChat account", "WeChat Account ", "Please enter WeChat account", "Receipt QR code", "Fund password", "Please enter the fund password", "Confirm binding", "Bind bank card", "Real name", "Please Enter the real name ", "bank card account", "enter bank card account", "bank account", "please enter detailed account information", "fund password", "please enter fund password", "confirm binding"],
                    arr_ze = language == "en" ? arr_en : arr_zh;
                $MainView.html($wrapper);
                $(".tradecenter").removeClass("cur");
                $(".tradecenter").siblings().removeClass("cur");
                $MainView.css("background-image", "none");
                var isclick = true;
                $("#innerOtcSetting").html(`<div class="otcsetting-header"><span>${arr_ze[0]}</span></div>
                <div class="otcsetting-main">
                    <div class="title"> ${arr_ze[1]}</div>
                    <div class="otcsetting-select">
                    </div>
                    <div class="zhifubao-wrap">
                        <div class="wrap-header"><i class="zhifubao"></i>${arr_ze[2]}<span class="state"></span></div>
                        <div class="zhifubao-input f-cb">
                            <div class="input-wrap" id="zhifubaoName">
                                <label>${arr_ze[3]}</label>
                                <input type="text" placeholder="${arr_ze[4]}">
                            </div>
                            <div class="input-wrap" id="zhifubaoAcc">
                                <label>${arr_ze[5]}</label>
                                <input type="text" placeholder="${arr_ze[6]}">
                            </div>
                            <div class="input-wrap file-upload">
                                <label>${arr_ze[7]}</label>
                                <img src="../images/otc-add5.png" alt="" id="aliQRPreview">
                                <input type="file" id="aliQR">
                            </div>
                            <div class="input-wrap" id="zhifubaoPas">
                                <label>${arr_ze[8]}</label>
                                <input type="password"  autocomplete="new-password" placeholder="${arr_ze[9]}">
                            </div>
                            <button type="button" class="confirmBtn" id="zhifubao">${arr_ze[10]}</button>
                        </div>
                    </div>
                    <div class="weixin-wrap" style="display: none">
                        <div class="wrap-header"><i class="weixin"></i>${arr_ze[11]}<span class="state"></span></div>
                        <div class="weixin-input f-cb">
                            <div class="input-wrap" id="wxName">
                                <label>${arr_ze[12]}</label>
                                <input type="text" placeholder="${arr_ze[13]}">
                            </div>
                            <div class="input-wrap" id="wxAcc">
                                <label>${arr_ze[14]}</label>
                                <input type="text" placeholder="${arr_ze[15]}">
                            </div>
                            <div class="input-wrap file-upload">
                                <label>${arr_ze[16]}</label>
                                <img src="../images/otc-add5.png" alt="" id="wxQRPreview">
                                <input type="file" id="wxQR">
                            </div>
                            <div class="input-wrap" id="wxPas">
                                <label>${arr_ze[17]}</label>
                                <input type="password"  autocomplete="new-password" placeholder="${arr_ze[18]}">
                            </div>
                            <button type="button" class="confirmBtn" id="weixin">${arr_ze[19]}</button>
                        </div>
                    </div>
                    <div class="visa-wrap" style="display: none">
                        <div class="wrap-header"><i class="visa"></i>${arr_ze[20]}<span class="state"></span></div>
                        <div class="visa-input f-cb">
                            <div class="input-wrap" id="proName">
                                <label>${arr_ze[21]}</label>
                                <input type="text" placeholder="${arr_ze[22]}">
                            </div>
                            <div class="input-wrap" id="proAcc">
                                <label>${arr_ze[23]}</label>
                                <input type="text" placeholder="${arr_ze[24]}">
                            </div>
                            <div class="input-wrap" id="proFaName">
                                <label>${arr_ze[25]}</label>
                                <input type="text" placeholder="${arr_ze[26]}">
                            </div>
                            <div class="input-wrap" id="proPas">
                                <label>${arr_ze[27]}</label>
                                <input type="password"  autocomplete="new-password" placeholder="${arr_ze[28]}">
                            </div>
                            <button type="button" class="confirmBtn" id="pro">${arr_ze[29]}</button>
                        </div>
                    </div>
                </div>`);



                var $otcsetting_select = $wrapper.find(".otcsetting-select");
                // 支付宝
                var $zhifubao_name = $wrapper.find("#zhifubaoName input");
                var $zhifubao_acc = $wrapper.find("#zhifubaoAcc input");
                var $zhifubao_pas = $wrapper.find("#zhifubaoPas input");
                var $zhifubaoBtn = $wrapper.find("#zhifubao");
                var $alipay = $wrapper.find("#aliQR");
                var $alipay_preview = $wrapper.find("#aliQRPreview");
                // 微信
                var $weixin_name = $wrapper.find("#wxName input");
                var $weixin_acc = $wrapper.find("#wxAcc input");
                var $weixin_pas = $wrapper.find("#wxPas input");
                var $wxBtn = $wrapper.find("#weixin");
                var $wxpay = $wrapper.find("#wxQR");
                var $wxpay_preview = $wrapper.find("#wxQRPreview");
                // 银行卡
                var $pro_name = $wrapper.find("#proName input");
                var $pro_acc = $wrapper.find("#proAcc input");
                var $pro_faname = $wrapper.find("#proFaName input");
                var $pro_pas = $wrapper.find("#proPas input");
                var $proBtn = $wrapper.find("#pro");
                var arr_obj = {
                    "en": ["Alipay", "WeChat", "Bank Card", "bind", "unbound", "binding successful"],
                    "zh": ["支付宝", "微信", "银行卡", "已绑定", "未绑定", "绑定成功"]
                }
                $(`<select>
                    <option value="zfb" class="zfb">${arr_obj[language][0]}</option>
                    <option value="wx" class="wx">${arr_obj[language][1]}</option>
                    <option value="yhk" class="yhk">${arr_obj[language][2]}</option>
                </select>`).change(function() {
                        // console.log($(this).val()) 
                        switch ($(this).val()) {
                            case "zfb":
                                $(".zhifubao-wrap").css("display", "block");
                                $(".weixin-wrap").css("display", "none");
                                $(".visa-wrap").css("display", "none");
                                break;
                            case "wx":
                                $(".zhifubao-wrap").css("display", "none");
                                $(".weixin-wrap").css("display", "block");
                                $(".visa-wrap").css("display", "none");
                                break;
                            case "yhk":
                                $(".zhifubao-wrap").css("display", "none");
                                $(".weixin-wrap").css("display", "none");
                                $(".visa-wrap").css("display", "block");
                                break;
                        }
                    }).appendTo($otcsetting_select)
                    // 获取用户绑定信息
                dataService.otcService.getOtcAccountInfo().then(function(response) {
                    if (response.state == 1) {
                        var data = response.data;
                        var pay_arr = [];
                        var pay_obj = {};
                        for (var i = 0; i < data.length; i++) {
                            pay_arr.push(data[i].a_type);
                            pay_obj[data[i].a_type] = data[i];
                        }
                        if ($.inArray('bank', pay_arr) >= 0) {
                            $wrapper.find('#innerOtcSetting .visa-wrap span.state').addClass('rise').text(arr_obj[language][3]);
                            // 显示绑定信息
                            $pro_name.val(pay_obj['bank'].a_name);
                            $pro_acc.val(pay_obj['bank'].a_account);
                            $pro_faname.val(pay_obj['bank'].a_bank_or_img);
                        } else {
                            $wrapper.find('#innerOtcSetting .visa-wrap span.state').addClass('fall').text(arr_obj[language][4]);
                        }

                        if ($.inArray('alipay', pay_arr) >= 0) {
                            $wrapper.find('#innerOtcSetting .zhifubao-wrap span.state').addClass('rise').text(arr_obj[language][3]);
                            // 显示绑定信息
                            $zhifubao_name.val(pay_obj['alipay'].a_name);
                            $zhifubao_acc.val(pay_obj['alipay'].a_account);
                            $alipay_preview.attr('src', pay_obj['alipay'].a_bank_or_img);
                        } else {
                            $wrapper.find('#innerOtcSetting .zhifubao-wrap span.state').addClass('fall').text(arr_obj[language][4]);
                        }

                        if ($.inArray('wxpay', pay_arr) >= 0) {
                            $wrapper.find('#innerOtcSetting .weixin-wrap span.state').addClass('rise').text(arr_obj[language][3]);
                            // 显示绑定信息
                            $weixin_name.val(pay_obj['wxpay'].a_name);
                            $weixin_acc.val(pay_obj['wxpay'].a_account);
                            $wxpay_preview.attr('src', pay_obj['wxpay'].a_bank_or_img);
                        } else {
                            $wrapper.find('#innerOtcSetting .weixin-wrap span.state').addClass('fall').text(arr_obj[language][4]);
                        }
                    } else if (response.state == -1) {
                        var msg_position = $.inArray(response.msg, message_arr);
                        hintDialog("fa-exclamation-circle", "#b34242", message_dialog[msg_position]);
                        if (response.msg == 'LANG_NO_LOGIN') {
                            setTimeout(function() {
                                userLogout();
                            }, 2000);
                        }
                    }
                });
                userFileUploadToArea($alipay, $alipay_preview);
                $zhifubaoBtn.click(function() {
                    if (isclick) {
                        isclick = false;
                        if ($zhifubao_pas.val().trim() == "" || $zhifubao_name.val().trim() == "" || $zhifubao_acc.val().trim() == "" || $alipay_preview.attr("src") == "") {
                            var msg_position = $.inArray('Complete_information', message_arr);
                            hintDialog("fa-exclamation-circle", "#b34242", message_dialog[msg_position]);
                            setTimeout(function() {
                                isclick = true;
                            }, 3000);
                            return false;
                        }
                        var data = {
                            sec_pwd: $zhifubao_pas.val(),
                            a_type: "alipay",
                            a_name: $zhifubao_name.val(),
                            a_account: $zhifubao_acc.val(),
                            a_bank_or_img: $alipay_preview.attr("src")
                        };
                        dataService.otcService.otcAccountInfo(data).then(function(response) {
                            if (response.state == 1) {
                                hintDialog("fa-check-circle", "#1c9547", arr_obj[language][5]);
                                $wrapper.find('#innerOtcSetting .zhifubao-wrap span.state').removeClass('fall').addClass('rise').text(arr_obj[language][3]);
                                window.location.href = "#/collection";
                            } else if (response.state == -1) {
                                var msg_position = $.inArray(response.msg, message_arr);
                                hintDialog("fa-exclamation-circle", "#b34242", message_dialog[msg_position]);
                            }
                        });
                        setTimeout(function() {
                            isclick = true;
                        }, 3000);
                    }
                });
                userFileUploadToArea($wxpay, $wxpay_preview);
                $wxBtn.click(function() {
                    if (isclick) {
                        isclick = false;
                        if ($weixin_pas.val().trim() == "" || $weixin_name.val().trim() == "" || $weixin_acc.val().trim() == "" || $wxpay_preview.attr("src") == "") {
                            var msg_position = $.inArray('Complete_information', message_arr);
                            hintDialog("fa-exclamation-circle", "#b34242", message_dialog[msg_position]);
                            setTimeout(function() {
                                isclick = true;
                            }, 3000);
                            return false;
                        }
                        var data = {
                            sec_pwd: $weixin_pas.val(),
                            a_type: "wxpay",
                            a_name: $weixin_name.val(),
                            a_account: $weixin_acc.val(),
                            a_bank_or_img: $wxpay_preview.attr("src")
                        };
                        dataService.otcService.otcAccountInfo(data).then(function(response) {
                            if (response.state == 1) {
                                hintDialog("fa-check-circle", "#1c9547", arr_obj[language][5]);
                                $wrapper.find('#innerOtcSetting .weixin-wrap span.state').removeClass('fall').addClass('rise').text(arr_obj[language][3]);
                                window.location.href = "#/collection";
                            } else if (response.state == -1) {
                                var msg_position = $.inArray(response.msg, message_arr);
                                hintDialog("fa-exclamation-circle", "#b34242", message_dialog[msg_position]);
                            }
                        });
                        setTimeout(function() {
                            isclick = true;
                        }, 3000);
                    }
                });
                $proBtn.click(function() {
                    if (isclick) {
                        isclick = false;
                        if ($pro_pas.val().trim() == "" || $pro_name.val().trim() == "" || $pro_acc.val().trim() == "") {
                            var msg_position = $.inArray('Complete_information', message_arr);
                            hintDialog("fa-exclamation-circle", "#b34242", message_dialog[msg_position]);
                            setTimeout(function() {
                                isclick = true;
                            }, 3000);
                            return false;
                        }
                        var data = {
                            sec_pwd: $pro_pas.val(),
                            a_type: "bank",
                            a_name: $pro_name.val(),
                            a_account: $pro_acc.val(),
                            a_bank_or_img: $pro_faname.val()
                        };
                        dataService.otcService.otcAccountInfo(data).then(function(response) {
                            if (response.state == 1) {
                                hintDialog("fa-check-circle", "#1c9547", arr_obj[language][5]);
                                $wrapper.find('#innerOtcSetting .visa-wrap span.state').removeClass('fall').addClass('rise').text(arr_obj[language][3]);
                                window.location.href = "#/collection";
                            } else if (response.state == -1) {
                                var msg_position = $.inArray(response.msg, message_arr);
                                hintDialog("fa-exclamation-circle", "#b34242", message_dialog[msg_position]);
                            }
                        });
                        setTimeout(function() {
                            isclick = true;
                        }, 3000);
                    }
                });
            });

            function userFileUploadToArea($alipay, $alipay_preview) {
                var date = Date.parse(new Date());
                $alipay.change(function() {
                    dataService.membershipService.getAliOssPolicy().then(function(response) {

                        if (response.state == 1) {
                            var data = response.data;
                            var file = $alipay[0].files[0];
                            var images_type = ['image/jpeg', 'image/png'];
                            var isexists = images_type.includes(file.type);
                            if (!isexists) {
                                hintDialog("fa-exclamation-circle", "#b34242", '文件格式必须为jpg、jpeg或png');
                                $alipay.val(null);
                                return;
                            }
                            if (file.size > 5 * 1024 * 1024) {
                                hintDialog("fa-exclamation-circle", "#b34242", '上传文件不能超过5M');
                                $alipay.val(null);
                                return;
                            }
                            var useruid = JSON.parse(sessionStorage.getItem("useruid"));
                            // 封装成 formData
                            var formData = new FormData();
                            formData.append("OSSAccessKeyId", data.accessid);
                            formData.append("policy", data.policy);
                            formData.append("Signature", data.signature);
                            formData.append("key", data.dir + useruid + file.name + date);
                            formData.append("success_action_status", "200");
                            formData.append("file", file);
                            // 上传
                            $.ajax({
                                url: data.host,
                                type: "POST",
                                data: formData,
                                processData: false,
                                contentType: false,
                                success: function() {
                                    var url = data.host + "/" + data.dir + useruid + file.name + date;
                                    $alipay_preview.attr("src", url);
                                }
                            });
                        } else if (response.state == -1) {
                            var msg_position = $.inArray(response.msg, message_arr);
                            hintDialog("fa-exclamation-circle", "#b34242", message_dialog[msg_position]);
                        }
                    });
                });
            }
        }
    };
    var apiManager = {
        load: function() {
            viewService.getTemplate("view/apiManager.html").then(function(resHtml) {
                var $wrapper = $(resHtml);
                $MainView.html($wrapper);
                $(".tradecenter").removeClass("cur");
                $(".tradecenter").siblings().removeClass("cur");
                var arr_zh = ["创建API", "使用Zero的API，您可通过程序实现账户资产查询、自动交易等功能。", "温馨提示：您的Key请妥善保存，如果您的Key泄露或遗忘，请及时删除或申请新的ID。",
                        "API名称", "白名单", "权限", "操作", "编辑", "删除", "提币", "交易", "如:我的API", "Ip(最多四个)用英文逗号隔开,非必填,不规范的填写可能导致失效", "图片验证码", "请输入图片验证码",
                        "短信验证码", "请输入短信验证码", "发送验证码", "交易密码", "请输入交易密码", "确认", "创建成功！请妥善保存API Secret，丢失将无法找回", "复制", "关闭"
                    ],
                    arr_en = ["Create API", "Using the Zero API, you can use the program to implement account asset query, automatic transaction an Whitelistd other functions.",
                        "Tips: Please keep your Key properly. If your Key is leaked or forgotten, please delete it timely or apply for a new ID.", "API Name", "Whitelist",
                        "Permission", "Operation", "Edit", "Delete", "coin-withdrawal", "Transaction", "Such as: my API", "Ip (up to four) is separated by commas in English. It is not required to fill in. Irregular filling may lead to invalidation.",
                        "Picture Code", "Please enter the Picture Code", "SMS Code", "Please enter the Code", "Get Code", "Transaction Password", "Please enter the Transaction Password", "confirm", "Create success! Please save API Secret properly. Lost API Secret will not be retrieved.",
                        "Copy", "Close"
                    ],
                    arr_ze = language == "en" ? arr_en : arr_zh;
                // $MainView.css("background-image", "url(../images/person_bg.jpg)");
                $(".sidebar-nav").html(`<ul>
                        <li>个人中心</li>
                        <li>
                            <a href="#/accountInfo">${aside_arr[0]}</a>
                        </li>
                        <li>
                            <a href="#/identityVerify">${aside_arr[1]}</a>
                        </li>
                        <li>
                            <a href="#/accountSecurity">${aside_arr[2]}</a>
                        </li>
                        <li>
                            <a href="#/collection">${aside_arr[3]}</a>
                        </li>
                        <li>
                            <a href="#/addressManage">${aside_arr[4]}</a>
                        </li>
                        <li>
                            <a href="#/assetsRecord">${aside_arr[5]}</a>
                        </li>
                        <li>
                            <a href="#/tradeBill">${aside_arr[6]}</a>
                        </li>
                        <li>
                            <a href="#/myAssets">${aside_arr[7]}</a>
                        </li>
                        <!-- <li>
                            <a class="login-record" href="#/loginRecord">${aside_arr[9]}</a>
                        </li> -->
                        <li>
                            <a href="#/apiManager" class="cur">${aside_arr[8]}</a>
                        </li>

                        <li>
                            <a href="#/invited">${aside_arr[9]}</a>
                        </li>
                        <li>
                            <a href="#" id="quit-load">退出登录</a>
                        </li>
                    </ul>`);
                $("#InnerApiManager").html(`<div class="header">${aside_arr[8]}</div>
                
                <div class="api-list" id="apiList">
                    <div class="api-list-header f-cb">
                        <button class="" id="CreateAPI">${arr_ze[0]}</button>
                    </div>
                    <div class="api-desc">
                        <p>${arr_ze[1]}</p>
                        <p>${arr_ze[2]}</p>
                    </div>
                    <table cellspacing=0>
                        <thead>
                            <tr>
                                <th>${arr_ze[3]}</th>
                                <th>API ID</th>
                                <th>API Key</th>
                                <th>IP${arr_ze[4]}</th>
                                <th>${arr_ze[5]}</th>
                                <th>${arr_ze[6]}</th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div>`);
                //删除
                $("#apiDelDialog").html(`<div class="dialog-content">
                <div class="inner" id="Inner">
                    <div class="title f-cb">
                        <span>${arr_ze[8]}API</span>
                        <i class="f-fr fa fa-times"></i>
                    </div>
                    <div class="input-wrap currency-pwd">
                        <label>${arr_ze[18]}</label>
                        <input type="password"  autocomplete="new-password" placeholder="${arr_ze[19]}">
                    </div>
                    <button class="submit">${arr_ze[20]}</button>
                </div>
            </div>`);
                $("#apiDialog").html(`<div class="dialog-content">
                <div class="inner" id="Inner">
                    <div class="title f-cb">
                        <span></span>
                        <i class="f-fr fa fa-times"></i>
                    </div>
                    <div class="input-wrap api-name">
                        <label>${arr_ze[3]}</label>
                        <input type="text" placeholder="${arr_ze[11]}">
                    </div>
                    <div class="input-wrap api-ip">
                        <label>IP${arr_ze[4]}</label>
                        <input type="text" placeholder="${arr_ze[12]}">
                    </div>
                    <div class="input-wrap img-code f-cb">
                        <label>${arr_ze[13]}</label>
                        <input type="text" class="code-input f-fl" placeholder="${arr_ze[14]}">
                        <img src="" alt="" class="f-fl">
                    </div>
                    <div class="input-wrap mobile-code f-cb">
                        <label>${arr_ze[15]}</label>
                        <input type="text" class="code-input f-fl" placeholder="${arr_ze[16]}">
                        <button class="f-fl">${arr_ze[17]}</button>
                    </div>
                    <div class="input-wrap currency-pwd">
                        <label>${arr_ze[18]}</label>
                        <input type="password"  autocomplete="new-password" placeholder="${arr_ze[19]}">
                    </div>
                    <div class="input-wrap api-privilege">
                        <label>${arr_ze[5]}</label>
                        <input type="checkbox" value="Accounts">${arr_ze[10]}
                        <input type="checkbox" value="Withdraw" checked>${arr_ze[9]}
                        <input type="checkbox" value="Order" checked disabled>
                    </div>
                    <button class="submit">${arr_ze[20]}</button>
                </div>
            </div>`);
                $(".api-dialog1").html(`<div class="api-title1">API Secret</div>
                <div class="api-body1">
                    <div class="red">
                        ${arr_ze[21]}
                    </div>
                    <div class=" ">
                        <label>API Secret：</label><input type="" name="" readonly>
                        <button class="copy"> ${arr_ze[22]}</button>
                    </div>
                </div>
                <div class="api-btn1">
                    <button> ${arr_ze[23]}</button>
                </div>`);
                var $api_dialog1 = $MainView.find(".api-dialog1");
                var $invitecode = $MainView.find(".api-dialog1 input");
                var $invitecode_close = $MainView.find(".api-dialog1 .api-btn1 button");
                $invitecode_close.click(function() {
                    $api_dialog1.css("display", "none");
                    $invitecode.val("");
                    history.go(0);
                });
                var api_privilege_obj = {
                    "Withdraw": arr_ze[9],
                    "Accounts": arr_ze[10]
                };
                $("#quit-load").click(function(e) {
                    e.preventDefault();
                    dataService.membershipService.getMemberLogout().then(function(response) {
                        if (response.state == 1) {
                            // 用户退出登录
                            userLogout();
                        }
                    });
                });
                addApi($wrapper);
                getApi($wrapper, api_privilege_obj, arr_ze);

            });

            function editApi($wrapper, $td, arr_ze) {
                var $editBtn = $('<span class="edit"></span>').text(arr_ze[7]).off().click(function() {
                    var $dialog = $("#apiDialog");
                    $wrapper.find("#Inner .title span").text(arr_ze[7] + "API");
                    var $api_name = $dialog.find(".api-name input");
                    var $api_ip = $dialog.find(".api-ip input");
                    var $img_code = $dialog.find(".img-code input");
                    var $img_code_btn = $dialog.find(".img-code img");
                    var $mobile_code = $dialog.find(".mobile-code input");
                    var $mobile_code_btn = $dialog.find(".mobile-code button");
                    var $currency_pwd = $dialog.find(".currency-pwd input");
                    var $privilege = $dialog.find(".api-privilege input");
                    var regex =
                        "^(1\\d{2}|2[0-4]\\d|25[0-5]|[1-9]\\d|[1-9])\\." +
                        "(1\\d{2}|2[0-4]\\d|25[0-5]|[1-9]\\d|\\d)\\." +
                        "(1\\d{2}|2[0-4]\\d|25[0-5]|[1-9]\\d|\\d)\\." +
                        "(1\\d{2}|2[0-4]\\d|25[0-5]|[1-9]\\d|\\d)$";
                    var regIP = new RegExp(regex);
                    $dialog.css("display", "block");
                    $api_name.val($($editBtn.parent().siblings()[0]).text());
                    $api_ip.val($($editBtn.parent().siblings()[3]).text());
                    var $cur_id = $($editBtn.parent().siblings()[1]).text();
                    $dialog.find(".title i").off().click(function() {
                        $dialog.css("display", "none");
                        $api_name.val("");
                        $api_ip.val("");
                        $img_code.val("");
                        $mobile_code.val("");
                        $currency_pwd.val("");
                        $($privilege[0]).prop("checked", false);
                        $($privilege[1]).prop("checked", false);
                        $mobile_code_btn.text(language == "en" ? "Get Code" : '获取验证码').attr("disabled", false).removeClass('forbidBtn');
                    });
                    getImageCode($img_code_btn);
                    getMobileCode($mobile_code_btn, $img_code, $img_code_btn);
                    var $ip_new_arr = [];
                    $api_ip.blur(function() {
                        var $ip_str = $(this).val();
                        var $ip_arr = $ip_str.split(",");
                        for (var i = 0; i < $ip_arr.length; i++) {
                            if (regIP.test($ip_arr[i])) {
                                $ip_new_arr.push($ip_arr[i]);
                            }
                        }
                    });
                    var $privilege_arr = [];
                    var $privilege_str = "";
                    $dialog.find("button.submit").off().click(function() {
                        for (var i = 0; i < $privilege.length; i++) {
                            if ($($privilege[i]).prop("checked")) {
                                $privilege_arr.push($($privilege[i]).val());
                            }
                        }
                        $privilege_str = $privilege_arr.join(',');
                        var $ip_new_str = $ip_new_arr.join(",");
                        var data = {
                            label: $api_name.val(),
                            trusted_ip: $ip_new_str,
                            api_privilege: $privilege_str,
                            sms_code: $mobile_code.val(),
                            security_pwd: $currency_pwd.val(),
                            google_auth_code: 0,
                            id: $cur_id
                        };
                        dataService.membershipService.putApiToken(data).then(function(response) {
                            if (response.state == 1) {
                                var msg_position = $.inArray('Successfully_modified', message_arr);
                                hintDialog("fa-check-circle", "#1c9547", message_dialog[msg_position]);
                                history.go(0);
                            } else if (response.state == -1) {
                                var msg_position = $.inArray(
                                    response.msg,
                                    message_arr
                                );
                                hintDialog("fa-exclamation-circle", "#b34242", message_dialog[msg_position]);
                            }
                        });
                    });
                }).appendTo($td);
            }

            function deleteApi($td, arr_ze) {
                var $delBtn = $('<span class="delete"></span>').text(arr_ze[8]).off().click(function() {
                    var $dialog = $("#apiDelDialog");
                    $dialog.css("display", "block");
                    var $currency_pwd = $dialog.find(".currency-pwd input");
                    $dialog.find(".title i").off().click(function() {
                        $dialog.css("display", "none");
                        $currency_pwd.val("");
                    });
                    $dialog.find("button.submit").off().click(function() {
                        var data = {
                            id: $($delBtn.parent().siblings()[1]).text(),
                            security_pwd: $currency_pwd.val(),
                            google_auth_code: 0
                        };
                        dataService.membershipService.deleteApiToken(data).then(function(response) {
                            if (response.state == 1) {
                                hintDialog("fa-check-circle", "#1c9547", language == "en" ? "Delete successful" : "删除成功");
                                history.go(0);
                            } else if (response.state == -1) {
                                var msg_position = $.inArray(
                                    response.msg,
                                    message_arr
                                );
                                hintDialog("fa-exclamation-circle", "#b34242", message_dialog[msg_position]);
                            }
                        });
                    });
                }).appendTo($td);
            }

            function getApi($wrapper, api_privilege_obj, arr_ze) {
                dataService.membershipService.getApiTokens().then(function(response) {
                    if (response.state == 1) {
                        var apiTokens = response.apiTokens;
                        var $api_list_tbody = $wrapper.find("#apiList tbody");
                        for (var i = 0; i < apiTokens.length; i++) {
                            var api_privilege = apiTokens[i].api_privilege;
                            var api_privilege_arr = api_privilege.split(',');
                            var api_privilege_zh = '';
                            var $tr = $("<tr></tr>").appendTo($api_list_tbody);
                            $("<td></td>").text(apiTokens[i].label).appendTo($tr);
                            $("<td></td>").text(apiTokens[i].id).appendTo($tr);
                            $('<td class="look"></td>').text(apiTokens[i].api_key).appendTo($tr);
                            $("<td></td>").text(apiTokens[i].trusted_ip).appendTo($tr);
                            $.map(api_privilege_obj, function(value, key) {
                                for (var i = 0; i < api_privilege_arr.length; i++) {
                                    if (api_privilege_arr[i] == key) {
                                        api_privilege_zh += value + ' ';
                                    }
                                }
                            });
                            $("<td></td>").text(api_privilege_zh).appendTo($tr);
                            var $td = $('<td class="operate"></td>').appendTo($tr);
                            editApi($wrapper, $td, arr_ze);
                            deleteApi($td, arr_ze);
                        }
                    }
                });
            }

            function addApi($wrapper) {
                $wrapper.find("#CreateAPI").off().click(function() {
                    var $dialog = $("#apiDialog");
                    $wrapper.find("#Inner .title span").text(language == "en" ? "Create API" : "创建API");
                    var $api_name = $dialog.find(".api-name input");
                    var $api_ip = $dialog.find(".api-ip input");
                    var $img_code = $dialog.find(".img-code input");
                    var $img_code_btn = $dialog.find(".img-code img");
                    var $mobile_code = $dialog.find(".mobile-code input");
                    var $mobile_code_btn = $dialog.find(".mobile-code button");
                    var $currency_pwd = $dialog.find(".currency-pwd input");
                    var $privilege = $dialog.find(".api-privilege input");
                    var $api_dialog1 = $MainView.find(".api-dialog1");
                    var $invitecode = $MainView.find(".api-dialog1 input");
                    var $invitecode_c = $MainView.find(".api-dialog1 .copy");

                    var regex =
                        "^(1\\d{2}|2[0-4]\\d|25[0-5]|[1-9]\\d|[1-9])\\." +
                        "(1\\d{2}|2[0-4]\\d|25[0-5]|[1-9]\\d|\\d)\\." +
                        "(1\\d{2}|2[0-4]\\d|25[0-5]|[1-9]\\d|\\d)\\." +
                        "(1\\d{2}|2[0-4]\\d|25[0-5]|[1-9]\\d|\\d)$";
                    var regIP = new RegExp(regex);

                    $dialog.css("display", "block");
                    $dialog.find(".title i").off().click(function() {
                        $dialog.css("display", "none");
                        $api_name.val("");
                        $api_ip.val("");
                        $img_code.val("");
                        $mobile_code.val("");
                        $currency_pwd.val("");
                        $($privilege[0]).prop("checked", false);
                        $mobile_code_btn.attr("disabled", false).removeClass('forbidBtn').text(language == "en" ? "Get Code" : '获取验证码');
                    });
                    getImageCode($img_code_btn);
                    getMobileCode($mobile_code_btn, $img_code, $img_code_btn);




                    var $ip_new_arr = [];
                    $api_ip.blur(function() {
                        var $ip_str = $(this).val();
                        var $ip_arr = $ip_str.split(",");
                        for (var i = 0; i < $ip_arr.length; i++) {
                            if (regIP.test($ip_arr[i])) {
                                $ip_new_arr.push($ip_arr[i]);
                            }
                        }
                    });
                    $dialog.find("button.submit").off().click(function() {
                        var $privilege_arr = [];
                        var $privilege_str = "";
                        for (var i = 0; i < $privilege.length; i++) {
                            if ($($privilege[i]).prop("checked")) {
                                $privilege_arr.push($($privilege[i]).val());
                            }
                        }
                        $privilege_str = $privilege_arr.join(',');
                        var $ip_new_str = $ip_new_arr.join(",");
                        var data = {
                            label: $api_name.val(),
                            trusted_ip: $ip_new_str,
                            api_privilege: $privilege_str,
                            sms_code: $mobile_code.val(),
                            security_pwd: $currency_pwd.val(),
                            google_auth_code: 0
                        };
                        dataService.membershipService.apiToken(data).then(function(response) {
                            if (response.state == 1) {
                                $("#apiDialog").css("display", "none");
                                $api_dialog1.css("display", "block");
                                $(".api-canvas").css("display", "block");
                                $invitecode.val(response.api_secret);
                                $invitecode_c.click(function() {
                                    $invitecode.select();
                                    document.execCommand("copy");
                                    hintDialog("fa-check-circle", "#1c9547", language == "en" ? "Replication success " : "复制成功");
                                });
                                //alert("创建成功！API Secret为:" + response.api_secret + "丢失将无法找回！");

                            } else if (response.state == -1) {
                                getKaptcha($img_code_btn);
                                var msg_position = $.inArray(response.msg, message_arr);
                                hintDialog("fa-exclamation-circle", "#b34242", message_dialog[msg_position]);
                            }
                        });
                    });
                });
            }

            function getMobileCode($mobile_code_btn, $img_code, $img_code_btn) {
                $mobile_code_btn.off().click(function() {
                    var isimgCode = $img_code.val();
                    var isclick = $mobile_code_btn.prop('disabled');
                    if (isclick == true || isimgCode == '') {
                        return;
                    }
                    dataService.membershipService.getMember().then(function(response) {
                        if (response.state == 1) {
                            var user_account = response.data.m_name;
                            var code = $img_code.val();
                            var token = $img_code_btn.attr("data-token");
                            dataService.accountService.getMail(token, code, user_account, "forgot").then(function(response) {
                                if (response.state == 1) {
                                    var msg_position = $.inArray('Sent_successfully', message_arr);
                                    hintDialog("fa-check-circle", "#1c9547", message_dialog[msg_position]);
                                    countDownBtn($mobile_code_btn);
                                } else if (response.state == -1) {
                                    getKaptcha($img_code_btn);
                                    var msg_position = $.inArray(response.msg, message_arr);
                                    hintDialog("fa-exclamation-circle", "#b34242", message_dialog[msg_position]);
                                }
                            });
                        } else if (response.state == -1) {
                            var msg_position = $.inArray(response.msg, message_arr);
                            hintDialog("fa-exclamation-circle", "#b34242", message_dialog[msg_position]);
                            if (response.msg == 'LANG_NO_LOGIN') {
                                setTimeout(function() {
                                    userLogout();
                                }, 2000);
                            }
                        }
                    });
                });
            }

            function getImageCode($img_code_btn) {
                getKaptcha($img_code_btn);
                $img_code_btn.off().click(function(e) {
                    e.stopPropagation();
                    getKaptcha($img_code_btn);
                });
            }

            function getKaptcha(code) {
                dataService.accountService.getKaptcha().then(function(response) {
                    var imgcode = response.check_code_img;
                    var tokencode = response.check_code_token;
                    code.attr({
                        src: imgcode,
                        "data-token": tokencode
                    });
                });
            }

            function countDownBtn($btn) {
                var second = 60;
                var $apiDialog = $('#apiDialog');
                if (second > 0) {
                    second--;
                    $btn.text(second + 's');
                    $btn.prop('disabled', true);
                    $btn.addClass('forbidBtn');
                }
                var msgInterval = setInterval(function() {
                    var dspOrblk = $apiDialog.css('display');
                    if (second > 0) {
                        second--;
                        $btn.text(second + 's');
                        $btn.prop('disabled', true);
                        $btn.addClass('forbidBtn');
                    }
                    if (second == 0 || dspOrblk == 'none') {
                        clearInterval(msgInterval);
                        $btn.text(language == "en" ? "Get Code" : '获取验证码');
                        $btn.prop('disabled', false);
                        $btn.removeClass('forbidBtn');
                    }
                }, 1000);
            }

        }
    };
    var collection = {
        load: function() {
            viewService.getTemplate("view/collection.html").then(function(resHtml) {
                var $wrapper = $(resHtml);
                var arr_zh = ["账户信息", "账号", "退出登录", "安全设置", "邮箱", "手机", "密码", "交易密码", "谷歌验证", "身份认证",
                        "收款设置", "我的银行卡", "我的支付宝", "我的微信", "邀请", "我的邀请码", "我的邀请链接", "复制", "查看", "设置",
                        "修改", "未设置", "已设置", "未登录", "未绑定", "已绑定", "身份信息未认证", "身份信息审核中", "身份信息审核通过", "身份信息审核未通过，请重新提交",
                        "修改登录密码", "复制成功", "设置交易密码", "修改交易密码", "设置成功", "未认证", "已认证"
                    ],
                    arr_en = ["Account Information", "Account", "Logout", "Security Settings", "E-mail", "Mobile Phone", "password", "Transaction Password", "Certification", "Identity Authentication",
                        "Collection Setting", "My Bank Card", "My Alipay", "My WeChat", "Invitation", "My Invitation Code", "My Invitation Link", "Copy", "View", "Setting",
                        "Modify", "unset", "Has been set", "Not logged in", "Unbound", "Bind", "Identity information is not authenticated", "Identity information review", "Identity Information Auditing", "Identity information audit failed, please resubmit",
                        "Modify Login Password ", "Replication success", "Set transaction password", "Modify transaction password", "Set up successfully", "Uncertified", "Certified"
                    ],
                    arr_ze = language == "en" ? arr_en : arr_zh;
                $MainView.html($wrapper);
                $(".tradecenter").removeClass("cur");
                $(".tradecenter").siblings().removeClass("cur");
                // $MainView.css("background-image", "url(../images/person_bg.jpg)");
                $(".sidebar-nav").html(`<ul>
                        <li>个人中心</li>
                        <li>
                            <a href="#/accountInfo">${aside_arr[0]}</a>
                        </li>
                        <li>
                            <a href="#/identityVerify">${aside_arr[1]}</a>
                        </li>
                        <li>
                            <a href="#/accountSecurity">${aside_arr[2]}</a>
                        </li>
                        <li>
                            <a href="#/collection" class="cur">${aside_arr[3]}</a>
                        </li>
                        <li>
                            <a href="#/addressManage">${aside_arr[4]}</a>
                        </li>
                        <li>
                            <a href="#/assetsRecord">${aside_arr[5]}</a>
                        </li>
                        <li>
                            <a href="#/tradeBill">${aside_arr[6]}</a>
                        </li>
                        <li>
                            <a href="#/myAssets">${aside_arr[7]}</a>
                        </li>
                        <!-- <li>
                            <a class="login-record" href="#/loginRecord">${aside_arr[9]}</a>
                        </li> -->
                        <li>
                            <a href="#/apiManager">${aside_arr[8]}</a>
                        </li>

                        <li>
                            <a href="#/invited">${aside_arr[9]}</a>
                        </li>
                        <li>
                            <a href="#" id="quit-load">退出登录</a>
                        </li>
                    </ul>`);
                $("#innerAccountInfo").html(`<div class="header">${arr_ze[10]}</div>       
                <div class="user-account-security user-account-bank collection-contain">
                    <div class="inner-bank">
                        <ul>
                            <li class="invitecode">
                                <div class="inner-security  f-fl">
                                    <div class="inner_security-title">
                                          ${arr_ze[11]}
                                    </div>
                                     <div class="inner-content">
                                        <span class="yhk-span">${arr_ze[24]}</span>
                                     </div>
                                </div>
                                <div class="inner-security-btn f-fr">
                                    <a href="#/otc/otcsetting">${arr_ze[20]}</a>
                                </div>
                            </li>
                            <li class="invitelink">
                                <div class="inner-security f-fl">
                                    <div class="inner_security-title">
                                         ${arr_ze[12]}
                                    </div>
                                    <div class="inner-content">
                                        <span class="zfb-span">${arr_ze[24]}</span>
                                     </div>
                                </div>
                                <div class="inner-security-btn f-fr">
                                     <a href="#/otc/otcsetting">${arr_ze[20]}</a>
                                </div>
                            </li>
                            <li class="invitelink">
                                <div class="inner-security f-fl">
                                    <div class="inner_security-title">
                                         ${arr_ze[13]}
                                    </div>
                                    <div class="inner-content">
                                        <span class="zfb-span">${arr_ze[24]}</span>
                                     </div>
                                </div>
                                <div class="inner-security-btn f-fr">
                                     <a href="#/otc/otcsetting">${arr_ze[20]}</a>
                                </div>
                            </li>
                        </ul>
                    </div>  
                </div>`)
                dataService.membershipService.getMember().then(function(response) {
                    if (response.state == 1) {

                    } else if (response.state == -1) {
                        var msg_position = $.inArray(response.msg, message_arr);
                        hintDialog("fa-exclamation-circle", "#b34242", message_dialog[msg_position]);
                        if (response.msg == 'LANG_NO_LOGIN') {
                            setTimeout(function() {
                                userLogout();
                            }, 2000);
                        }
                    }
                });
                dataService.otcService.getOtcAccountInfo().then(function(response) {
                    if (response.state == 1) {
                        var data = response.data;
                        var pay_arr = [];
                        var pay_obj = {};
                        for (var i = 0; i < data.length; i++) {
                            pay_arr.push(data[i].a_type);
                            pay_obj[data[i].a_type] = data[i];
                        }
                        if ($.inArray('bank', pay_arr) >= 0) {
                            $wrapper.find('span.yhk-span').text(arr_ze[25]);
                            // 显示绑定信息

                        } else {
                            $wrapper.find('span.yhk-span').text(arr_ze[24]);
                        }

                        if ($.inArray('alipay', pay_arr) >= 0) {
                            $wrapper.find('span.zfb-span').text(arr_ze[25]);
                            // 显示绑定信息

                        } else {
                            $wrapper.find('span.zfb-span').text(arr_ze[24]);
                        }

                        if ($.inArray('wxpay', pay_arr) >= 0) {
                            $wrapper.find('span.wx-span').text(arr_ze[25]);
                            // 显示绑定信息

                        } else {
                            $wrapper.find('span.wx-span').text(arr_ze[24]);
                        }
                    }
                })

            });
        }
    };
    return {
        homeController: home,
        loginController: login,
        registerController: register,
        tradecenterController: tradecenter,
        accountInfoController: accountInfo,
        identityVerifyController: identityVerify,
        accountSecurityController: accountSecurity,
        loginRecordController: loginRecord,
        myAssetsController: myAssets,
        addressManageController: addressManage,
        assetsRecordController: assetsRecord,
        tradeBillController: tradeBill,
        newsListController: newsList,
        newsDetailController: newsDetail,
        rechargeController: recharge,
        withdrawController: withdraw,
        otcController: otc,
        otctradeController: otctrade,
        otcmerchantController: otcmerchant,
        otcmyorderController: otcmyorder,
        otcsettingController: otcsetting,
        resetpasswordController: resetpassword,
        apiManagerController: apiManager,
        feeListController: feeList,
        userAgreementController: userAgreement,
        privacyPolicyController: privacyPolicy,
        invitedController: invited,
        launchpadController: launchpad,
        noticesController: notices,
        collectionController: collection,
        currencyController: currency,
        appController: app
    };

})