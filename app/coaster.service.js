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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var CoasterService = (function () {
    function CoasterService(http) {
        this.http = http;
        this.coastersUrl = 'app/coasters';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    CoasterService.prototype.getCoasters = function () {
        return this.http.get(this.coastersUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    CoasterService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    CoasterService.prototype.getCoastersSlowly = function () {
        var _this = this;
        return new Promise(function (resolve) {
            return setTimeout(resolve, 2000);
        }) // delay 2 seconds
            .then(function () { return _this.getCoasters(); });
    };
    CoasterService.prototype.getCoaster = function (id) {
        return this.getCoasters().then(function (coasters) { return coasters.find(function (coaster) { return coaster.id === id; }); });
    };
    CoasterService.prototype.update = function (coaster) {
        var url = this.coastersUrl + "/" + coaster.id;
        return this.http.put(url, JSON.stringify(coaster), { headers: this.headers }).toPromise().then(function () { return coaster; }).catch(this.handleError);
    };
    CoasterService.prototype.create = function (name) {
        return this.http.post(this.coastersUrl, JSON.stringify({ name: name }), { headers: this.headers }).toPromise().then(function (res) { return res.json().data; }).catch(this.handleError);
    };
    CoasterService.prototype.delete = function (id) {
        var url = this.coastersUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers }).toPromise().then(function () { return null; }).catch(this.handleError);
    };
    CoasterService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CoasterService);
    return CoasterService;
}());
exports.CoasterService = CoasterService;
//# sourceMappingURL=coaster.service.js.map