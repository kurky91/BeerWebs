"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var coaster_service_1 = require('./coaster.service');
var baas_service_1 = require('./baas.service');
var DashboardComponent = (function () {
    function DashboardComponent(router, coasterService, baasService) {
        this.router = router;
        this.coasterService = coasterService;
        this.baasService = baasService;
        this.coasters = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.coasterService.getCoasters().then(function (coasters) { return _this.coasters = coasters.slice(1, 5); });
    };
    DashboardComponent.prototype.gotoDetail = function (coaster) {
        var link = ['/detail', coaster.id];
        this.router.navigate(link);
    };
    DashboardComponent.prototype.login = function () {
        this.baasService.login("admin", "kugelschreiber", "1234567890").subscribe(function (result) { return console.log("result: " + result); }, function (error) { return console.log("error: " + error); });
    };
    DashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-dashboard',
            templateUrl: 'dashboard.component.html',
            styleUrls: ['dashboard.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, coaster_service_1.CoasterService, baas_service_1.BaasService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map