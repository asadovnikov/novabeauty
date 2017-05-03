!function(){"use strict";angular.module("novabeauty",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ngResource","ngRoute","ngMaterial","toastr"])}(),function(){"use strict";function t(){function t(){return i}var i=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Angular Material Design",url:"https://material.angularjs.org/#/",description:"The Angular reference implementation of the Google's Material Design specification.",logo:"angular-material.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"}];this.getTec=t}angular.module("novabeauty").service("webDevTec",t)}(),function(){"use strict";function t(){function t(t){var i=this;i.relativeDate=t(i.creationDate).fromNow()}t.$inject=["moment"];var i={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:t,controllerAs:"vm",bindToController:!0};return i}angular.module("novabeauty").directive("acmeNavbar",t)}(),function(){"use strict";function t(t){function i(i,e,a,o){var l,s=t(e[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});e.addClass("acme-malarkey"),angular.forEach(i.extraValues,function(t){s.type(t).pause()["delete"]()}),l=i.$watch("vm.contributors",function(){angular.forEach(o.contributors,function(t){s.type(t.login).pause()["delete"]()})}),i.$on("$destroy",function(){l()})}function e(t,i){function e(){return a().then(function(){t.info("Activated Contributors View")})}function a(){return i.getContributors(10).then(function(t){return o.contributors=t,o.contributors})}var o=this;o.contributors=[],e()}e.$inject=["$log","githubContributor"];var a={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:i,controller:e,controllerAs:"vm"};return a}t.$inject=["malarkey"],angular.module("novabeauty").directive("acmeMalarkey",t)}(),function(){"use strict";function t(t,i){function e(e){function o(t){return t.data}function l(i){t.error("XHR Failed for getContributors.\n"+angular.toJson(i.data,!0))}return e||(e=30),i.get(a+"/contributors?per_page="+e).then(o)["catch"](l)}var a="https://api.github.com/repos/Swiip/generator-gulp-angular",o={apiHost:a,getContributors:e};return o}t.$inject=["$log","$http"],angular.module("novabeauty").factory("githubContributor",t)}(),function(){"use strict";function t(t,i,e,a,o){function l(t,i){t.hide=function(){i.hide()},t.showOther=function(){$(".article-continue").toggleClass("hide"),$(".article-continue").toggleClass("fadeInDown"),$("#aboutKoltunova").toggleClass("increase-width"),$("#readAll").hide()},t.cancel=function(){i.cancel()},t.answer=function(t){i.hide(t)}}function s(t,i){t.hide=function(){i.hide()},t.cancel=function(){i.cancel()},t.answer=function(t){i.hide(t)},t.getSectionClass=function(t){return"price-section-image-"+t}}function n(t,i,e){this.availableService=e,t.availableService=e,t.hide=function(){i.hide()},t.cancel=function(){i.cancel()},t.answer=function(t){i.hide(t)},t.getSectionClass=function(t){return"price-section-image-"+t}}function c(){e("left").toggle()}function d(){var t="https://yandex.ua/maps/143/kyiv/?ll=30.538370%2C50.415123&z=16&mode=whatshere&whatshere%5Bpoint%5D=30.535838%2C50.414231&whatshere%5Bzoom%5D=17",i=window.open(t,"_blank");i.focus()}function r(t){c(),$(t).animatescroll(),sr.reveal(".service-alarm-container",{duration:2e3,container:".services-alarm"},50)}function m(){v(),t(function(){g.classAnimation="rubberBand"},4e3),window.sr=ScrollReveal()}function u(){i.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),g.classAnimation=""}function v(){a.get("prices.json").then(function(t){g.services=t.data.categories},function(){console.log("failed")}),a.get(b).then(function(t){for(var i in t.data.query.results.rate){var e=t.data.query.results.rate[i];p[e.id]=e.Rate}})}l.$inject=["$scope","$mdDialog"],s.$inject=["$scope","$mdDialog"],n.$inject=["$scope","$mdDialog","items"];var g=this;g.awesomeThings=[],g.classAnimation="",g.creationDate=1489692822655,g.showToastr=u,g.scrollToSection=r,g.openMap=d,g.toggleNavigation=c,g.services={},g.getSectionClass=function(t){return"price-section-image-"+t},g.callNB=function(){window.location.href="tel://+380675076085"},g.openAboutDialog=function(t){o.show({controller:l,controllerAs:"dialog",templateUrl:"app/main/koltunova.tmpl.html",parent:angular.element(document.body),targetEvent:t,clickOutsideToClose:!0,fullscreen:!0})},g.openDirectionDialog=function(t){o.show({controller:s,controllerAs:"dialog",templateUrl:"app/main/direction.tmpl.html",parent:angular.element(document.body),targetEvent:t,clickOutsideToClose:!0,fullscreen:!0})},g.openPriceDialog=function(t){o.show({controller:n,controllerAs:"dialog",templateUrl:"app/main/price.tmpl.html",parent:angular.element(document.body),targetEvent:t,locals:{items:g.services},clickOutsideToClose:!0,fullscreen:!0}).then(function(t){$scope.status='You said the information was "'+t+'".'},function(){$scope.status="You cancelled the dialog."})};var p={};g.openTour=function(t){o.show(o.alert().parent(angular.element(document.body)).clickOutsideToClose(!0).title("В данный момент эта функция не доступна").textContent("Мы работаем над виртуальным туром и он будет доступен в ближайшее время").ariaLabel("Виртуальный").ok("Продолжить").targetEvent(t))};var b="https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.xchange%20where%20pair%20in%20(%22USDEUR%22%2C%20%22USDUAH%22%2C%20%22EURUAH%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=";m()}t.$inject=["$timeout","toastr","$mdSidenav","$http","$mdDialog"],angular.module("novabeauty").controller("MainController",t)}(),function(){"use strict";function t(t){t.debug("runBlock end")}t.$inject=["$log"],angular.module("novabeauty").run(t)}(),function(){"use strict";function t(t){t.when("/",{templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}).otherwise({redirectTo:"/"})}t.$inject=["$routeProvider"],angular.module("novabeauty").config(t)}(),function(){"use strict";angular.module("novabeauty").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function t(t,i){t.debugEnabled(!0),i.allowHtml=!0,i.timeOut=3e3,i.positionClass="toast-top-right",i.preventDuplicates=!0,i.progressBar=!0}t.$inject=["$logProvider","toastrConfig"],angular.module("novabeauty").config(t)}(),angular.module("novabeauty").run(["$templateCache",function(t){t.put("app/main/direction.tmpl.html",'<md-dialog aria-label="How To" id=directionDialog><form><md-toolbar><div class=md-toolbar-tools><h2>Как к нам добраться</h2><span flex></span><md-button class=md-icon-button ng-click=cancel()><md-icon md-svg-src=assets/images/close.svg></md-icon></md-button></div></md-toolbar><md-dialog-content><md-tabs md-dynamic-height md-border-bottom md-center-tabs layout-fill><md-tab id=byCar><md-tab-label><md-icon md-svg-icon=assets/images/car.svg></md-icon>на автомобиле</md-tab-label><md-tab-body><div layout-gt-lg=row layout-xs=column layout-sm=column layout-md=column layout-align="center start" class="md-padding how-to-get-container"><md-whiteframe class="md-whiteframe-3dp no-background md-margin" flex><md-toolbar><div class=md-toolbar-tools layout-align="center center"><span>м. Лыбедская</span></div></md-toolbar><md-content><div flex class="map-direction-image direction-c_l">&nbsp;</div></md-content></md-whiteframe><md-whiteframe class="md-whiteframe-3dp no-background md-margin" flex><md-toolbar><div class=md-toolbar-tools layout-align="center center"><span>м. Дружбы Народов</span></div></md-toolbar><md-content><div flex class="map-direction-image direction-c_d">&nbsp;</div></md-content></md-whiteframe></div></md-tab-body></md-tab><md-tab id=foot><md-tab-label><md-icon md-svg-icon=assets/images/walk.svg></md-icon>Пешком</md-tab-label><md-tab-body><div layout-gt-lg=row layout-xs=column layout-sm=column layout-md=column layout-align="center start" class="md-padding how-to-get-container"><md-whiteframe class="md-whiteframe-3dp no-background md-margin" flex><md-toolbar><div class=md-toolbar-tools layout-align="center center"><span>м. Лыбедская</span><md-chips md-removable=false><md-chip>13 минут</md-chip></md-chips></div></md-toolbar><md-content><div flex class="map-direction-image direction-f_l">&nbsp;</div></md-content></md-whiteframe><md-whiteframe class="md-whiteframe-3dp no-background md-margin" flex><md-toolbar><div class=md-toolbar-tools layout-align="center center"><span>м. Дружбы Народов</span><md-chips md-removable=false><md-chip>9 минут</md-chip></md-chips></div></md-toolbar><md-content><div flex class="map-direction-image direction-f_d">&nbsp;</div></md-content></md-whiteframe></div></md-tab-body></md-tab></md-tabs></md-dialog-content></form></md-dialog>'),t.put("app/main/koltunova.tmpl.html",'<md-dialog aria-label="How To" id=aboutKoltunova class="gradient-background animate-dialog"><form><md-toolbar><div class=md-toolbar-tools><h1 flex class=text-center>Колтунова Наталья Борисовна</h1><md-button class=md-icon-button ng-click=cancel()><md-icon md-svg-src=assets/images/close.svg></md-icon></md-button></div></md-toolbar><md-dialog-content><div layout-fill layout-gt-md=row layout-xs=column layout-sm=column layout-md=column class=article-container><div flex class="article-content article-padding"><div flex class=mobile-title>Колтунова Наталья Борисовна</div><p>Руководитель и организатор клиники, старший дерматовенеролог клиники "Борис", врач высшей категории.</p><ul><li>Работает в области эстетической косметологии более 25 лет.</li><li>Специалист по введению ботулотоксинов, контурной пластике, плазмотерапии, нитевому лифтингу, срединным пилингам.</li><li>Обладатель более 50 сертификатов и дипломов международного образца.</li><li>Постоянный участник конгрессов по эстетической медицине и дерматологии.</li></ul><md-button ng-click=showOther() id=readAll class=gold-button>Читать полностью →</md-button><div class="article-continue hide"><p>Врачом решила стать в последнем классе школы после практики в военном госпитале, в отделении дерматологии. Закончила в 1993 году РГМУ(Российский государственный медицинский университет, г.Москва).</p><p>С 3-го курса посещала кружок по дерматовенерологии, на 5-м прошла практикум по косметологии в Институте красоты на Новом Арбате, уже тогда понимая, что очень скоро эти две дисциплины будут неразрывно связаны.</p><p>В 1996 году закончила клиническую ординатуру по дерматовенерологии на кафедре последипломного образования в РМАПО(российская мед академия последипломного образования, г.Москва), прошла практику в детском и взрослом кожных отделениях, отделении урологии, микологии, физиотерапии и лабораторном отделении. В это время работала в КВД на поликлиническом приеме.</p><p>В 1997 году переехала в Киев, с 1998 года работает в клинике Борис, где в настоящее время является старшим дерматовенерологом. Все эти годы совмещала работу дерматолога и врача эстетической медицины. Мезотерапией, инъекциями ботулотоксинов,контурной пластикой начала заниматься в конце 90-х, с момента появления их на европейском рынке.</p><p>В 2016 году основала собственную клинику эстетической медицины, <span class=disclaimer>NOVA BEAUTY By Dr.Коltunova</span>, где занимается оздоровлением и омоложением кожи и волос, использует авторские методики и наработки передовой научной косметологии, применяет инъекционные техники, большое внимание уделяя оздоровлению и укреплению организма в целом.</p></div></div><div class=koltunova-portrait layout-align="center center">&nbsp;<div class=avatar>&nbsp;</div></div></div></md-dialog-content></form></md-dialog>'),t.put("app/main/main.html",'<md-toolbar md-scroll-shrink class=only-mobile><div class=md-toolbar-tools><md-button class=md-icon-button ng-click=main.toggleNavigation() aria-label="Open Menu"><md-icon md-svg-src=assets/images/menu.svg></md-icon></md-button><span flex><img src=assets/images/koltunova.svg></span><md-button class=md-icon-button ng-click=main.callNB() aria-label=Call><md-icon md-svg-src=assets/images/phone.svg></md-icon></md-button></div></md-toolbar><md-sidenav class="md-sidenav-left gradient-background" md-component-id=left md-disable-backdrop md-whiteframe=4><div flex class=mobile-logo-container>&nbsp;</div><md-content><div class=menu-container layout-align=center><md-list flex><md-list-item ng-click="main.scrollToSection(\'#about\')" class=md-primary><md-icon md-svg-src=assets/images/n_logo.svg></md-icon><p>О Клинике</p></md-list-item><md-list-item ng-click="main.scrollToSection(\'#services\')"><md-icon md-svg-src=assets/images/diamond.svg></md-icon><p>Услуги</p></md-list-item><md-list-item ng-click=main.openPriceDialog()><md-icon md-svg-src=assets/images/shop.svg></md-icon><p>Магазин</p></md-list-item><md-list-item ng-click="main.scrollToSection(\'#alarm-services\')"><md-icon md-svg-src=assets/images/season.svg></md-icon><p>Сезонные предложения</p></md-list-item><md-list-item ng-click="main.scrollToSection(\'#location\')"><md-icon md-svg-src=assets/images/map.svg></md-icon><p>Как нас найти</p></md-list-item></md-list></div></md-content></md-sidenav><div layout=vertical class=first-section layout-fill><div class=left-panel flex=25 layout=column layout-fill><div class="logo-container logo" layout-align="center center"><div flex></div><div class="section-arrow rectangle-45"><i class=material-icons>arrow_downward</i></div></div><div class="menu-container gradient-background" layout-align=center><md-list flex><md-list-item ng-click="main.scrollToSection(\'#about\')" class=md-primary><md-icon md-svg-src=assets/images/n_logo.svg></md-icon><p>О Клинике</p></md-list-item><md-list-item ng-click="main.scrollToSection(\'#services\')"><md-icon md-svg-src=assets/images/diamond.svg></md-icon><p>Услуги</p></md-list-item><md-list-item ng-click=main.openPriceDialog()><md-icon md-svg-src=assets/images/shop.svg></md-icon><p>Магазин</p></md-list-item><md-list-item ng-click="main.scrollToSection(\'#alarm-services\')"><md-icon md-svg-src=assets/images/season.svg></md-icon><p>Сезонные предложения</p></md-list-item><md-list-item ng-click="main.scrollToSection(\'#location\')"><md-icon md-svg-src=assets/images/map.svg></md-icon><p>Как нас найти</p></md-list-item></md-list></div></div><div layout=row flex class=landing-image layout-fill><div class=slogan><div class="slogan-quote-start wow fadeIn" data-wow-duration=1s>„</div><div class="slogan-text wow fadeIn" data-wow-duration=1s>Мы знаем о коcметологии всё и даже больше</div><div class="slogan-quote-end wow fadeIn" data-wow-duration=1s>“</div></div></div></div><div layout=vertical class=second-section layout-fill id=about><div class=left-panel flex=25 layout=column layout-fill><div class=section-title layout=column layout-align="center center"><div layout=row layout-align="center center" class="wow bounceInDown" data-wow-duration=1s><div class=section-circle>&nbsp;</div><div class=section-text>Клиника</div></div><div class="section-message wow bounceInUp" data-wow-duration=1s layout-align="center center">Косметология для красоты и здоровья</div></div></div><div layout=column flex layout-fill class=about-section><div class="koltunova-about gradient-background wow fadeIn" data-wow-duration=1s layout-gt-md=row layout-xs=column layout-sm=column layout-md=column><div flex class=article-item layout=column><div class="article-title wow zoomIn" data-wow-duration=1s>Приветствую Вас в нашей клинике!</div><div class="article-content wow zoomIn" data-wow-duration=1s><p>Вот уже более 25 лет, я помогаю большому количеству мужчин, женщин и детей быть счастливыми, делая их здоровее и моложе. Мои пациенты смогли обрести красоту, уверенность в себе, гармонию и свободу при помощи новейших технологий эстетической медицины, моего опыта, и команды Nova Beauty.<br>Быть здоровым – значит быть красивым, и мы поможем вам в достижении натуральной красоты, без тяжелых операций, и осложнений.</p><p>Будем рады увидеть Вас в Nova Beauty!</p><p><br>С Уважением,<br><a ng-click=main.openAboutDialog($event)>Наталья Борисовна Колтунова</a></p></div></div><div class=koltunova-photo>&nbsp;</div></div><div class=koltunova-tour layout=column ng-click=main.openTour($event)><div class="section-icon rectangle-45" layout=column layout-align="center center"><md-icon md-svg-src=assets/images/n_logo.svg></md-icon></div><div class=tour-message>Прогуляйтесь по нашей клинике</div><div class=tour-description>Виртуальный тур</div></div></div></div><div layout=vertical class="third-section gradient-background" layout-fill id=services><div class=left-panel flex=25 layout=column layout-fill><div class=section-title layout=column layout-align="center center"><div layout=row layout-align="center center" class="wow bounceInUp" data-wow-duration=1s><div class=section-circle>&nbsp;</div><div class=section-text>Улуги</div></div><div class="section-message wow bounceInDown" data-wow-duration=1s layout-align="center center">Cделаем Вас здоровее и красивее</div></div></div><div layout=column flex layout-fill class=services-section><div layout=column class=services-section><div layout=row class=section-row><div class="section no-background" flex layout=column><div class=service-section-title layout=column><div layout=row><div class=section-circle>&nbsp;</div><div class=section-text>Лучшие предложения</div></div><md-list class=services-list><md-list-item class="md-primary md-2-line" layout=row><div class=bullet>&nbsp;</div><div class=md-list-item-text><h3>ИНЪЕКЦИИ КСЕОМИН</h3><p>(ботулоксин,Мерц Эстетикс,Германия) Естественный результат!<br>1 зона-<strong>120 долл</strong></p></div></md-list-item><md-list-item class="md-primary md-2-line" layout=row><div class=bullet>&nbsp;</div><div class=md-list-item-text><h3>ПЛАЗМОТЕРАПИЯ</h3><p>(обогащенная тромбоцитами) в/ч головы-2 500 гр, лицо-3 200 гр,<br>лицо+шея+декольте-<strong>3 900 гр</strong></p></div></md-list-item><md-list-item class="md-primary md-2-line" layout=row><div class=bullet>&nbsp;</div><div class=md-list-item-text><h3>БИОРЕМОДЕЛИРОВАНИЕ</h3><p>Всего 5 биологически активных точек на каждой стороне лица!<br>Эффект-мгновенное увлажнение и лифтинг!<br>Profhilo 2,0 мл-<strong>260 евро</strong></p></div></md-list-item><md-list-item class="md-primary md-2-line" layout=row><div class=bullet>&nbsp;</div><div class=md-list-item-text><h3>УВЕЛИЧЕНИЕ ГУБ</h3><p>3D ЭФФЕКТ от 1,5 лет!!!<br>Ювидерм Volift 1,0 ml-<strong>290 евро</strong></p></div></md-list-item><md-list-item class="md-primary md-2-line" layout=row><div class=bullet>&nbsp;</div><div class=md-list-item-text><h3>Биоревитализация пептидами</h3><p>Сияние и оздоровление кожи! Результат после 1-й процедуры!<br>Курс-от 3 процедур!<br>Мезовартон/мезоксантин 1,5 мл - <strong>200 долл</strong></p></div></md-list-item><md-list-item ng-click=main.openPriceDialog() class="md-primary md-2-line show-all-price"><div class=bullet style="visibility: hidden">&nbsp;</div><div class=md-list-item-text><h3>Посмотреть все наши цены<md-icon md-svg-src=assets/images/right.svg></md-icon></h3></div></md-list-item></md-list></div></div><div flex=50 class="section-image image-1"><div class="services-icon rectangle-45" layout=column layout-align="center center"><md-icon md-svg-src=assets/images/diamond.svg></md-icon></div></div></div></div></div></div><div layout=vertical class=fourth-section id=alarm-services layout-fill><div class="left-panel full-height" flex=25 layout=column layout-fill><div class=section-title layout=column layout-align="center center"><div layout=row layout-align="center center" class="wow bounceInDown" data-wow-duration=.5s><div class=section-circle>&nbsp;</div><div class=section-text>Сезонные предложения</div></div><div class="section-message wow bounceInUp" data-wow-duration=.5s layout-align="center center">Рекомендации от клиники</div></div></div><div layout=row flex layout-wrap layout-align=stretch class="services-alarm gradient-background"><div layout-align="space-between center" layout=column flex-md=50 flex-sm=50 flex-xs=50 flex=33 class="service-alarm-container service-image-1"><div class="service-alarm-title wow zoomIn" data-wow-duration=1s>Вакуумно-роликовый массаж тела</div><div class="service-alarm-price wow zoomInUp" layout-fill data-wow-duration=1s>минус 20%</div></div><div layout-align="space-between center" layout=column flex-md=50 flex-sm=50 flex-xs=50 flex=33 class="service-alarm-container service-image-2"><div class="service-alarm-title wow zoomIn" data-wow-duration=1s>Контурная пластика губ</div><div class="service-alarm-price wow zoomInUp" layout-fill data-wow-duration=1s>1мл всего за 160 евро</div></div><div layout-align="space-between center" layout=column flex-md=50 flex-sm=50 flex-xs=50 flex=33 class="service-alarm-container service-image-3"><div class="service-alarm-title white wow zoomIn" data-wow-duration=1s>Плазмолифтинг</div><div class="service-alarm-price wow zoomInUp" layout-fill data-wow-duration=1s>—22% каждую среду</div></div><div layout-align="space-between center" layout=column flex-md=50 flex-sm=50 flex-xs=50 flex=33 class="service-alarm-container service-image-4"><div class="service-alarm-title wow zoomIn" data-wow-duration=1s>Омоложение кистей рук</div><div class="service-alarm-price wow zoomInUp" layout-fill data-wow-duration=1s>Radiesse 1.5ml, 280 евро</div></div><div layout-align="space-between center" layout=column flex-md=50 flex-sm=50 flex-xs=50 flex=33 class="service-alarm-container service-image-5"><div class="service-alarm-title wow zoomIn" data-wow-duration=1s>Вип-биоревитализация</div><div class="service-alarm-price wow zoomInUp" layout-fill data-wow-duration=1s>5мл, лицо шея декольте - 85 евро</div></div><div layout-align="space-between center" layout=column flex-md=50 flex-sm=50 flex-xs=50 flex=33 class="service-alarm-container service-image-6"><div class="service-alarm-title white wow zoomIn" data-wow-duration=1s>"Лечение акне" 4 процедуры( 3 пилинга и лечебная чистка лица)</div><div class="service-alarm-price wow zoomInUp" layout-fill data-wow-duration=1s>1950 гривен</div></div></div></div><div layout=vertical class="fifth-section gradient-background" id=location layout-fill><div class=left-panel flex=25 layout=column layout-fill><div class=section-title layout=column layout-align="center center"><div layout=row layout-align="center center" class="wow bounceInDown" data-wow-duration=1s><div class=section-circle>&nbsp;</div><div class=section-text>Контакты</div></div><div class="section-message wow bounceInUp" data-wow-duration=1s layout-align="center center">Как нас найти и с нами связаться</div><div class=address-text>г. Киев, бул. Дружбы Народов, 13</div><div class=working-hours><div class=title>Часы работы</div><div class=working-hours-when><p>Будние: с 9 до 18:00</p><p>Cуббота: с 10 до 17:00</p><p>Воскресенье: выходной</p></div></div><div flex class=direction-link><md-button ng-click=main.openDirectionDialog()>Схема проезда<md-icon md-svg-src=assets/images/right.svg></md-icon></md-button></div></div></div><div layout-gt-md=row layout-xs=column layout-sm=column layout-md=column flex class=contact-container layout-fill layout-align=stretch><div flex layout=column flex layout-align="center stretch" layout-fill><div class=logo-container><div class=logo>&nbsp;</div></div><div class=contacts layout=column layout-align="center stretch"><div class=phone><md-icon md-svg-src=assets/images/phone.svg></md-icon><span>044 209 52 81</span></div><div class=whatsapp><md-icon md-svg-src=assets/images/whatsapp.svg></md-icon><span>067 507 60 85</span></div><div class=email><md-icon md-svg-src=assets/images/email.svg></md-icon><span>info@novabeauty.biz</span></div><div class=license>Лицензия №063128</div></div><div class=regards layout-align="center center" flex><div class=partners>Наши партнёры</div><img src=assets/images/regals_2.jpeg></div></div><div flex-gt-md=50 class=map ng-click=main.openMap()><div class=place-map>&nbsp;</div></div></div></div>'),t.put("app/main/price.tmpl.html",'<md-dialog class=gradient-background><form ng-cloak><md-toolbar><div class=md-toolbar-tools><h2></h2><span class=price-header flex>Наши ценьі</span><md-button class=md-icon-button ng-click=cancel()><md-icon md-svg-src=assets/images/close.svg></md-icon></md-button></div></md-toolbar><md-dialog-content><div layout=vertical class="service-section gradient-background" id=services-section layout-fill><md-grid-list flex layout-fill md-cols-xs=1 md-cols-sm=1 md-cols-md=2 md-cols-gt-md=3 md-row-height-gt-md=1:1 md-row-height=2:2 md-gutter=12px md-gutter-gt-sm=8px><md-grid-tile class=md-whiteframe-3dp ng-repeat="serviceCategory in availableService" ng-class=getSectionClass($index) md-rowspan={{serviceCategory.Multiplier}} md-colspan=1 md-colspan-sm=1 md-colspan-xs=1 layout=column><div layout=column flex layout-fill class=service-section-container><div class=price-section-title>{{serviceCategory.Name}}</div><div class=price-section-prices layout=column><div class=price-section-item ng-repeat="service in serviceCategory.Services" layout=row layout-align="space-between start"><div class=price-section-item-name flex=70>{{service.Name}}</div><div class=price-section-item-price-container layout=column><div class=main-price><span style="text-decoration: line-through; font-weight: 100">{{service.OldPrice}}</span> {{service.Price}} <span ng-show="service.Currency !== \'%\'">{{service.Currency}}</span></div></div></div></div></div></md-grid-tile></md-grid-list></div></md-dialog-content></form></md-dialog>'),t.put("app/components/navbar/navbar.html",'<md-toolbar layout=row layout-align="center center"><md-button href=https://github.com/Swiip/generator-gulp-angular>Gulp Angular</md-button><section flex layout=row layout-align="left center"><md-button href=# class=md-raised>Home</md-button><md-button href=# class=md-raised>About</md-button><md-button href=# class=md-raised>Contact</md-button></section><md-button class=acme-navbar-text>Application was created {{ vm.relativeDate }}.</md-button></md-toolbar>')}]);
//# sourceMappingURL=../maps/scripts/app-71ab0afdd0.js.map
