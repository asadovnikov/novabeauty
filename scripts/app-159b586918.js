!function(){"use strict";angular.module("novabeauty",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ngResource","ngRoute","ngMaterial","toastr"])}(),function(){"use strict";function i(){function i(){return t}var t=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Angular Material Design",url:"https://material.angularjs.org/#/",description:"The Angular reference implementation of the Google's Material Design specification.",logo:"angular-material.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"}];this.getTec=i}angular.module("novabeauty").service("webDevTec",i)}(),function(){"use strict";function i(){function i(i){var t=this;t.relativeDate=i(t.creationDate).fromNow()}i.$inject=["moment"];var t={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:i,controllerAs:"vm",bindToController:!0};return t}angular.module("novabeauty").directive("acmeNavbar",i)}(),function(){"use strict";function i(i){function t(t,e,a,o){var s,l=i(e[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});e.addClass("acme-malarkey"),angular.forEach(t.extraValues,function(i){l.type(i).pause()["delete"]()}),s=t.$watch("vm.contributors",function(){angular.forEach(o.contributors,function(i){l.type(i.login).pause()["delete"]()})}),t.$on("$destroy",function(){s()})}function e(i,t){function e(){return a().then(function(){i.info("Activated Contributors View")})}function a(){return t.getContributors(10).then(function(i){return o.contributors=i,o.contributors})}var o=this;o.contributors=[],e()}e.$inject=["$log","githubContributor"];var a={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:t,controller:e,controllerAs:"vm"};return a}i.$inject=["malarkey"],angular.module("novabeauty").directive("acmeMalarkey",i)}(),function(){"use strict";function i(i,t){function e(e){function o(i){return i.data}function s(t){i.error("XHR Failed for getContributors.\n"+angular.toJson(t.data,!0))}return e||(e=30),t.get(a+"/contributors?per_page="+e).then(o)["catch"](s)}var a="https://api.github.com/repos/Swiip/generator-gulp-angular",o={apiHost:a,getContributors:e};return o}i.$inject=["$log","$http"],angular.module("novabeauty").factory("githubContributor",i)}(),function(){"use strict";function i(i,t,e,a,o){function s(i,t){i.hide=function(){t.hide()},i.cancel=function(){t.cancel()},i.answer=function(i){t.hide(i)},i.getSectionClass=function(i){return"price-section-image-"+i}}function l(i,t,e){this.availableService=e,i.availableService=e,i.hide=function(){t.hide()},i.cancel=function(){t.cancel()},i.answer=function(i){t.hide(i)},i.getSectionClass=function(i){return"price-section-image-"+i}}function n(){e("left").toggle()}function c(){var i="https://yandex.ua/maps/143/kyiv/?ll=30.538370%2C50.415123&z=16&mode=whatshere&whatshere%5Bpoint%5D=30.535838%2C50.414231&whatshere%5Bzoom%5D=17",t=window.open(i,"_blank");t.focus()}function d(i){n(),$(i).animatescroll(),sr.reveal(".service-alarm-container",{duration:2e3,container:".services-alarm"},50)}function r(){v(),i(function(){g.classAnimation="rubberBand"},4e3),window.sr=ScrollReveal()}function m(){t.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),g.classAnimation=""}function u(i,t){var e={eur:0,usd:0,uah:0},a=i.Price,o=i.StartPrice,s=i.EndPrice,l=i.Currency;return"UAH"===l?a.indexOf("-")>0?"~"+Math.floor(o/t.USDUAH)+"$/"+Math.floor(o/t.EURUAH)+"€ — "+Math.floor(s/t.USDUAH)+"$/"+Math.floor(s/t.EURUAH)+"€":(e.usd=Math.floor(a/t.USDUAH),e.eur=Math.floor(a/t.EURUAH),"~"+e.usd+"$/"+e.eur+"€"):"USD"===l?a.indexOf("-")>0?"~"+Math.floor(o*t.USDUAH)+"UAH/"+Math.floor(o*t.USDEUR)+"€ - "+Math.floor(s*t.USDUAH)+"UAH/"+Math.floor(s*t.USDEUR)+"€":(e.usd=a,e.eur=Math.floor(a*t.USDEUR),e.uah=Math.floor(a*t.USDUAH),"~"+e.uah+"UAH/"+e.eur+"€"):"EUR"===l?a.indexOf("-")>0?"~"+Math.floor(o*t.EURUAH)+"UAH/"+Math.floor(o/t.USDEUR)+"$ - "+Math.floor(s*t.EURUAH)+"UAH/"+Math.floor(s/t.USDEUR)+"$":(e.usd=Math.floor(a/t.USDEUR),e.eur=a,e.uah=Math.floor(a*t.EURUAH),"~"+e.uah+"UAH/"+e.usd+"$"):""}function v(){a.get(b).then(function(i){for(var t in i.data.query.results.rate){var e=i.data.query.results.rate[t];p[e.id]=e.Rate}a.get("prices.json").then(function(i){for(var t in i.data.categories){var e=i.data.categories[t];for(var a in e.Services){var o=e.Services[a];e.Services[a].OldPrice=u(o,p)}}g.services=i.data.categories},function(){console.log("failed")})})}s.$inject=["$scope","$mdDialog"],l.$inject=["$scope","$mdDialog","items"];var g=this;g.awesomeThings=[],g.classAnimation="",g.creationDate=1489692822655,g.showToastr=m,g.scrollToSection=d,g.openMap=c,g.toggleNavigation=n,g.services={},g.getSectionClass=function(i){return"price-section-image-"+i},g.openDirectionDialog=function(i){o.show({controller:s,controllerAs:"dialog",templateUrl:"app/main/direction.tmpl.html",parent:angular.element(document.body),targetEvent:i,clickOutsideToClose:!0,fullscreen:!0})},g.openPriceDialog=function(i){o.show({controller:l,controllerAs:"dialog",template:"<md-dialog class='gradient-background'>          <form ng-cloak> <md-toolbar><div class='md-toolbar-tools'><h2></h2><span class='price-header' flex>Наши цены</span><md-button class='md-icon-button' ng-click='cancel()'><md-icon md-svg-src='assets/images/close.svg'></md-icon></md-button>"+'</div></md-toolbar>   <md-dialog-content>        <div layout="vertical" class="service-section gradient-background" id="services-section" layout-fill>  <md-grid-list flex layout-fill    md-cols-xs="1" md-cols-sm="1" md-cols-md="2" md-cols-gt-md="3"    md-row-height-gt-md="1:1" md-row-height="2:2"    md-gutter="12px" md-gutter-gt-sm="8px" >    <md-grid-tile class="md-whiteframe-3dp" ng-repeat="serviceCategory in availableService" ng-class="getSectionClass($index)" "                  md-rowspan="{{serviceCategory.Multiplier}}" md-colspan="1" md-colspan-sm="1" md-colspan-xs="1" layout="column">      <div layout="column" flex layout-fill class="service-section-container">         <div class="price-section-title">{{serviceCategory.Name}}</div>        <div class="price-section-prices" layout="column">          <div class="price-section-item" ng-repeat="service in serviceCategory.Services" layout="row" layout-align="space-between start">            <div class="price-section-item-name" >{{service.Name}}</div>            <div class="price-section-item-price-container" layout="column" >              <div class="main-price">{{service.Price}} {{service.Currency}}</div>              <div class="secondary-price">{{service.OldPrice}}</div>            </div>          </div>        </div>      </div>    </md-grid-tile>  </md-grid-list></div></md-dialog-content>          </form>          </md-dialog>',parent:angular.element(document.body),targetEvent:i,locals:{items:g.services},clickOutsideToClose:!0,fullscreen:!0}).then(function(i){$scope.status='You said the information was "'+i+'".'},function(){$scope.status="You cancelled the dialog."})};var p={},f="https://youtu.be/NLBGd0gXvD8";g.openTour=function(){var i=window.open(f,"_blank");i.focus()};var b="https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.xchange%20where%20pair%20in%20(%22USDEUR%22%2C%20%22USDUAH%22%2C%20%22EURUAH%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=";r()}i.$inject=["$timeout","toastr","$mdSidenav","$http","$mdDialog"],angular.module("novabeauty").controller("MainController",i)}(),function(){"use strict";function i(i){i.debug("runBlock end")}i.$inject=["$log"],angular.module("novabeauty").run(i)}(),function(){"use strict";function i(i){i.when("/",{templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}).otherwise({redirectTo:"/"})}i.$inject=["$routeProvider"],angular.module("novabeauty").config(i)}(),function(){"use strict";angular.module("novabeauty").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function i(i,t){i.debugEnabled(!0),t.allowHtml=!0,t.timeOut=3e3,t.positionClass="toast-top-right",t.preventDuplicates=!0,t.progressBar=!0}i.$inject=["$logProvider","toastrConfig"],angular.module("novabeauty").config(i)}(),angular.module("novabeauty").run(["$templateCache",function(i){i.put("app/main/direction.tmpl.html",'<md-dialog aria-label="How To" id=directionDialog><form><md-toolbar><div class=md-toolbar-tools><h2>Как к на добраться</h2><span flex></span><md-button class=md-icon-button ng-click=cancel()><md-icon md-svg-src=assets/images/close.svg></md-icon></md-button></div></md-toolbar><md-dialog-content><md-tabs md-dynamic-height md-border-bottom md-center-tabs layout-fill><md-tab id=byCar><md-tab-label><md-icon md-svg-icon=assets/images/car.svg></md-icon>на автомобиле</md-tab-label><md-tab-body><div layout-gt-lg=row layout-xs=column layout-sm=column layout-md=column layout-align="center start" class="md-padding how-to-get-container"><md-whiteframe class="md-whiteframe-3dp no-background md-margin" flex><md-toolbar><div class=md-toolbar-tools layout-align="center center"><span>м. Лыбедская</span></div></md-toolbar><md-content><div flex class="map-direction-image direction-c_l">&nbsp;</div></md-content></md-whiteframe><md-whiteframe class="md-whiteframe-3dp no-background md-margin" flex><md-toolbar><div class=md-toolbar-tools layout-align="center center"><span>м. Дружбы Народов</span></div></md-toolbar><md-content><div flex class="map-direction-image direction-c_d">&nbsp;</div></md-content></md-whiteframe></div></md-tab-body></md-tab><md-tab id=foot><md-tab-label><md-icon md-svg-icon=assets/images/walk.svg></md-icon>Пешком</md-tab-label><md-tab-body><div layout-gt-lg=row layout-xs=column layout-sm=column layout-md=column layout-align="center start" class="md-padding how-to-get-container"><md-whiteframe class="md-whiteframe-3dp no-background md-margin" flex><md-toolbar><div class=md-toolbar-tools layout-align="center center"><span>м. Лыбедская</span><md-chips md-removable=false><md-chip>13 минут</md-chip></md-chips></div></md-toolbar><md-content><div flex class="map-direction-image direction-f_l">&nbsp;</div></md-content></md-whiteframe><md-whiteframe class="md-whiteframe-3dp no-background md-margin" flex><md-toolbar><div class=md-toolbar-tools layout-align="center center"><span>м. Дружбы Народов</span><md-chips md-removable=false><md-chip>9 минут</md-chip></md-chips></div></md-toolbar><md-content><div flex class="map-direction-image direction-f_d">&nbsp;</div></md-content></md-whiteframe></div></md-tab-body></md-tab></md-tabs></md-dialog-content></form></md-dialog>'),i.put("app/main/main.html",'<md-toolbar md-scroll-shrink class=only-mobile hide show-sm show-md show-xs><div class=md-toolbar-tools><md-button class=md-icon-button ng-click=main.toggleNavigation() aria-label="Open Menu"><md-icon md-svg-src=assets/images/menu.svg></md-icon></md-button><span flex><img src=assets/images/koltunova.svg></span><md-button class=md-icon-button aria-label=Call><md-icon md-svg-src=assets/images/phone.svg></md-icon></md-button></div></md-toolbar><md-sidenav class="md-sidenav-left gradient-background" md-component-id=left md-disable-backdrop md-whiteframe=4><div flex class=mobile-logo-container>&nbsp;</div><md-content><div class=menu-container layout-align=center><md-list flex><md-list-item ng-click="main.scrollToSection(\'#about\')" class=md-primary><md-icon md-svg-src=assets/images/n_logo.svg></md-icon><p>О Клинике</p></md-list-item><md-list-item ng-click="main.scrollToSection(\'#services\')"><md-icon md-svg-src=assets/images/diamond.svg></md-icon><p>Услуги</p></md-list-item><md-list-item ng-click=main.openPriceDialog()><md-icon md-svg-src=assets/images/shop.svg></md-icon><p>Магазин</p></md-list-item><md-list-item ng-click="main.scrollToSection(\'#alarm-services\')"><md-icon md-svg-src=assets/images/season.svg></md-icon><p>Сезонные предложения</p></md-list-item><md-list-item ng-click="main.scrollToSection(\'#location\')"><md-icon md-svg-src=assets/images/map.svg></md-icon><p>Как нас найти</p></md-list-item></md-list></div></md-content></md-sidenav><div layout=vertical class=first-section layout-fill><div class=left-panel flex=25 layout=column layout-fill><div class="logo-container logo" layout-align="center center"><div flex></div><div class="section-arrow rectangle-45"><i class=material-icons>arrow_downward</i></div></div><div class="menu-container gradient-background" layout-align=center><md-list flex><md-list-item ng-click="main.scrollToSection(\'#about\')" class=md-primary><md-icon md-svg-src=assets/images/n_logo.svg></md-icon><p>О Клинике</p></md-list-item><md-list-item ng-click="main.scrollToSection(\'#services\')"><md-icon md-svg-src=assets/images/diamond.svg></md-icon><p>Услуги</p></md-list-item><md-list-item ng-click=main.openPriceDialog()><md-icon md-svg-src=assets/images/shop.svg></md-icon><p>Магазин</p></md-list-item><md-list-item ng-click="main.scrollToSection(\'#alarm-services\')"><md-icon md-svg-src=assets/images/season.svg></md-icon><p>Сезонные предложения</p></md-list-item><md-list-item ng-click="main.scrollToSection(\'#location\')"><md-icon md-svg-src=assets/images/map.svg></md-icon><p>Как нас найти</p></md-list-item></md-list></div></div><div layout=row flex class=landing-image layout-fill><div class=slogan><div class="slogan-quote-start wow fadeIn" data-wow-duration=1s>„</div><div class="slogan-text wow fadeIn" data-wow-duration=1s>Мы знаем о коcметологии всё и даже больше</div><div class="slogan-quote-end wow fadeIn" data-wow-duration=1s>“</div></div></div></div><div layout=vertical class=second-section layout-fill id=about><div class=left-panel flex=25 layout=column layout-fill><div class=section-title layout=column layout-align="center center"><div layout=row layout-align="center center" class="wow bounceInDown" data-wow-duration=1s><div class=section-circle>&nbsp;</div><div class=section-text>Клиника</div></div><div class="section-message wow bounceInUp" data-wow-duration=1s layout-align="center center">Косметология для красоты и здоровья</div></div></div><div layout=column flex layout-fill class=about-section><div class="koltunova-about gradient-background wow fadeIn" data-wow-duration=1s layout=row><div flex=50 class=article-item layout=column><div class="article-title wow zoomIn" data-wow-duration=1s>Приветствую вас в нашей клинике!</div><div class="article-content wow zoomIn" data-wow-duration=1s><p>Вот уже более 25 лет, я помогла большому количеству мужчин, женщин и детей быть счастливыми, делая их здоровее и моложе. Мои пациенты смогли обрести красоту, уверенность в себе, гармонию и свободу при помощи новейших технологий эстетической медицины, моего опыта, и команды Nova Beauty.<br>Быть здоровым – значит быть красивым, и мы поможем вам в достижении натуральной красоты, без тяжелых операций, и осложнений.</p><p>Будем рады увидеть вас в Nova Beauty!</p><p><br>С Уважением,<br>Наталья Борисовна Колтунова,<br>Врач Высшей Категории</p></div></div><div flex=50 class=koltunova-photo>&nbsp;</div></div><div class=koltunova-tour layout=column ng-click=main.openTour()><div class="section-icon rectangle-45" layout=column layout-align="center center"><md-icon md-svg-src=assets/images/n_logo.svg></md-icon></div><div class=tour-message>Прогуляйтесь по нашей клинике</div><div class=tour-description>Виртуальный тур</div></div></div></div><div layout=vertical class="third-section gradient-background" layout-fill id=services><div class=left-panel flex=25 layout=column layout-fill><div class=section-title layout=column layout-align="center center"><div layout=row layout-align="center center" class="wow bounceInUp" data-wow-duration=1s><div class=section-circle>&nbsp;</div><div class=section-text>Улуги</div></div><div class="section-message wow bounceInDown" data-wow-duration=1s layout-align="center center">Cделаем вас здоровее и красивее</div></div></div><div layout=column flex layout-fill class=services-section><div layout=column class=services-section><div layout=row class=section-row><div class="section no-background" flex layout=column><div class=service-section-title layout=column><div layout=row><div class=section-circle>&nbsp;</div><div class=section-text>Лучшие предложения</div></div><md-list class=services-list><md-list-item class="md-primary md-2-line" layout=row><div class=bullet>&nbsp;</div><div class=md-list-item-text><h3>Инъекции ботокса</h3><p>от 40$ до 180$</p></div></md-list-item><md-list-item class="md-primary md-2-line" layout=row><div class=bullet>&nbsp;</div><div class=md-list-item-text><h3>Плазмотерапия</h3><p>от 40€ до 220€</p></div></md-list-item><md-list-item class="md-primary md-2-line" layout=row><div class=bullet>&nbsp;</div><div class=md-list-item-text><h3>Контурная пластика губы</h3><p>от 70€ до 280€</p></div></md-list-item><md-list-item class="md-primary md-2-line" layout=row><div class=bullet>&nbsp;</div><div class=md-list-item-text><h3>Омоложение кистей</h3></div></md-list-item><md-list-item class="md-primary md-2-line" layout=row><div class=bullet>&nbsp;</div><div class=md-list-item-text><h3>Биоревитализация</h3><p>от 32€ до 180€</p></div></md-list-item><md-list-item class="md-primary md-2-line" layout=row><div class=bullet>&nbsp;</div><div class=md-list-item-text><h3>Авторская методика "Минус 10 лет за 60 минут"</h3></div></md-list-item><md-list-item ng-click=main.openPriceDialog() class="md-primary md-2-line show-all-price"><div class=bullet style="visibility: hidden">&nbsp;</div><div class=md-list-item-text><h3>Посмотреть все наши цены<md-icon md-svg-src=assets/images/right.svg></md-icon></h3></div></md-list-item></md-list></div></div><div flex=50 class="section-image image-1"><div class="services-icon rectangle-45" layout=column layout-align="center center"><md-icon md-svg-src=assets/images/diamond.svg></md-icon></div></div></div></div></div></div><div layout=vertical class=fourth-section id=alarm-services layout-fill><div class="left-panel full-height" flex=25 layout=column layout-fill><div class=section-title layout=column layout-align="center center"><div layout=row layout-align="center center" class="wow bounceInDown" data-wow-duration=.5s><div class=section-circle>&nbsp;</div><div class=section-text>Сезонные предложения</div></div><div class="section-message wow bounceInUp" data-wow-duration=.5s layout-align="center center">Рекомендации от клиники</div></div></div><div layout=row flex layout-wrap layout-align=stretch class="services-alarm gradient-background"><div layout-align="space-between center" layout=column flex-md=50 flex-sm=50 flex-xs=50 flex=33 class="service-alarm-container service-image-1"><div class="service-alarm-title wow zoomIn" data-wow-duration=1s>Вакуумно-роликовый массаж тела</div><div class="service-alarm-price wow zoomInUp" layout-fill data-wow-duration=1s>минус 20%</div></div><div layout-align="space-between center" layout=column flex-md=50 flex-sm=50 flex-xs=50 flex=33 class="service-alarm-container service-image-2"><div class="service-alarm-title wow zoomIn" data-wow-duration=1s>Контурная пластика губ</div><div class="service-alarm-price wow zoomInUp" layout-fill data-wow-duration=1s>1мл всего за 160 евро</div></div><div layout-align="space-between center" layout=column flex-md=50 flex-sm=50 flex-xs=50 flex=33 class="service-alarm-container service-image-3"><div class="service-alarm-title wow zoomIn" data-wow-duration=1s>Плазмолифтинг</div><div class="service-alarm-price wow zoomInUp" layout-fill data-wow-duration=1s>—22% каждую среду</div></div><div layout-align="space-between center" layout=column flex-md=50 flex-sm=50 flex-xs=50 flex=33 class="service-alarm-container service-image-4"><div class="service-alarm-title wow zoomIn" data-wow-duration=1s>Омоложение кистей рук</div><div class="service-alarm-price wow zoomInUp" layout-fill data-wow-duration=1s>гидроксиапатит кальция, 280 евро</div></div><div layout-align="space-between center" layout=column flex-md=50 flex-sm=50 flex-xs=50 flex=33 class="service-alarm-container service-image-5"><div class="service-alarm-title wow zoomIn" data-wow-duration=1s>Вип биоревитализация</div><div class="service-alarm-price wow zoomInUp" layout-fill data-wow-duration=1s>3мл, лицо шея декольте - 85 евро</div></div><div layout-align="space-between center" layout=column flex-md=50 flex-sm=50 flex-xs=50 flex=33 class="service-alarm-container service-image-6"><div class="service-alarm-title wow zoomIn" data-wow-duration=1s>"Лечение акне" 4 процедуры( 3 пилинга и лечебная чистка лица)</div><div class="service-alarm-price wow zoomInUp" layout-fill data-wow-duration=1s>1950 гривен</div></div></div></div><div layout=vertical class="fifth-section gradient-background" id=location layout-fill><div class=left-panel flex=25 layout=column layout-fill><div class=section-title layout=column layout-align="center center"><div layout=row layout-align="center center" class="wow bounceInDown" data-wow-duration=1s><div class=section-circle>&nbsp;</div><div class=section-text>Контакт</div></div><div class="section-message wow bounceInUp" data-wow-duration=1s layout-align="center center">Как нас найти и с нами связаться</div><div class=address-text>г. Киев, бул. Дружбы Народов 13</div><div class=working-hours><div class=title>Часы работы</div><div class=working-hours-when><p>По будням с 9 до 18:00</p><p>Cуббота с 10 до 17:00</p><p>Восресенье выходной</p></div></div><div flex class=direction-link><md-button ng-click=main.openDirectionDialog()>Схема проезда<md-icon md-svg-src=assets/images/right.svg></md-icon></md-button></div></div></div><div layout-gt-md=row layout-xs=column layout-sm=column layout-md=column flex class=contact-container layout-fill layout-align=stretch><div flex layout=column flex layout-align="center stretch" layout-fill><div class=logo-container><div class=logo>&nbsp;</div></div><div class=contacts layout=column layout-align="center stretch"><div class=phone><md-icon md-svg-src=assets/images/phone.svg></md-icon><span>044 209 52 81</span></div><div class=whatsapp><md-icon md-svg-src=assets/images/whatsapp.svg></md-icon><span>067 507 60 85</span></div><div class=email><md-icon md-svg-src=assets/images/email.svg></md-icon><span>mail@novabeauty.biz</span></div><div class=license>Лицензия №063128</div></div><div class=regards layout-align="center center" flex><div class=partners>Наши партнёры</div><img src=assets/images/regals_2.jpeg></div></div><div flex-gt-md=50 class=map ng-click=main.openMap()><div class=place-map>&nbsp;</div></div></div></div>'),i.put("app/components/navbar/navbar.html",'<md-toolbar layout=row layout-align="center center"><md-button href=https://github.com/Swiip/generator-gulp-angular>Gulp Angular</md-button><section flex layout=row layout-align="left center"><md-button href=# class=md-raised>Home</md-button><md-button href=# class=md-raised>About</md-button><md-button href=# class=md-raised>Contact</md-button></section><md-button class=acme-navbar-text>Application was created {{ vm.relativeDate }}.</md-button></md-toolbar>')}]);
//# sourceMappingURL=../maps/scripts/app-159b586918.js.map
