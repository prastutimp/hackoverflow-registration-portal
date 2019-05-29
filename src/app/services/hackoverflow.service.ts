﻿/* tslint:disable */
/* eslint-disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v12.1.0.0 (NJsonSchema v9.13.28.0 (Newtonsoft.Json v11.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming

import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { Observable, throwError as _observableThrow, of as _observableOf } from 'rxjs';
import { Injectable, Inject, Optional, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

@Injectable()
export class Client {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    /**
     * Get all the ideas
     * @return Success
     */
    getAllIdeas(): Observable<Idea[]> {
        let url_ = this.baseUrl + "/api/Ideas/all";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetAllIdeas(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetAllIdeas(<any>response_);
                } catch (e) {
                    return <Observable<Idea[]>><any>_observableThrow(e);
                }
            } else
                return <Observable<Idea[]>><any>_observableThrow(response_);
        }));
    }

    protected processGetAllIdeas(response: HttpResponseBase): Observable<Idea[]> {
        const status = response.status;
        const responseBlob = 
            response instanceof HttpResponse ? response.body : 
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }};
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (resultData200 && resultData200.constructor === Array) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(Idea.fromJS(item));
            }
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<Idea[]>(<any>null);
    }

    /**
     * Get paged ideas
     * @param pageNumber (optional) Page number
     * @param pageCount (optional) Page count
     * @return Success
     */
    getIdeas(pageNumber: number | null | undefined, pageCount: number | null | undefined): Observable<Idea[]> {
        let url_ = this.baseUrl + "/api/Ideas/ideas?";
        if (pageNumber !== undefined)
            url_ += "pageNumber=" + encodeURIComponent("" + pageNumber) + "&"; 
        if (pageCount !== undefined)
            url_ += "pageCount=" + encodeURIComponent("" + pageCount) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetIdeas(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetIdeas(<any>response_);
                } catch (e) {
                    return <Observable<Idea[]>><any>_observableThrow(e);
                }
            } else
                return <Observable<Idea[]>><any>_observableThrow(response_);
        }));
    }

    protected processGetIdeas(response: HttpResponseBase): Observable<Idea[]> {
        const status = response.status;
        const responseBlob = 
            response instanceof HttpResponse ? response.body : 
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }};
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (resultData200 && resultData200.constructor === Array) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(Idea.fromJS(item));
            }
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<Idea[]>(<any>null);
    }

    /**
     * Get shortlisted ideas
     * @return Success
     */
    getShortlistedIdeas(): Observable<Idea[]> {
        let url_ = this.baseUrl + "/api/Ideas/shortlisted-ideas";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetShortlistedIdeas(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetShortlistedIdeas(<any>response_);
                } catch (e) {
                    return <Observable<Idea[]>><any>_observableThrow(e);
                }
            } else
                return <Observable<Idea[]>><any>_observableThrow(response_);
        }));
    }

    protected processGetShortlistedIdeas(response: HttpResponseBase): Observable<Idea[]> {
        const status = response.status;
        const responseBlob = 
            response instanceof HttpResponse ? response.body : 
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }};
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (resultData200 && resultData200.constructor === Array) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(Idea.fromJS(item));
            }
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<Idea[]>(<any>null);
    }

    /**
     * Get idea by ID
     * @param id (optional) Id of the idea
     * @return Success
     */
    getIdea(id: string | null | undefined): Observable<Idea> {
        let url_ = this.baseUrl + "/api/Ideas/idea?";
        if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetIdea(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetIdea(<any>response_);
                } catch (e) {
                    return <Observable<Idea>><any>_observableThrow(e);
                }
            } else
                return <Observable<Idea>><any>_observableThrow(response_);
        }));
    }

    protected processGetIdea(response: HttpResponseBase): Observable<Idea> {
        const status = response.status;
        const responseBlob = 
            response instanceof HttpResponse ? response.body : 
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }};
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? Idea.fromJS(resultData200) : new Idea();
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<Idea>(<any>null);
    }

    /**
     * Create new idea
     * @param idea (optional) The idea
     * @return Success
     */
    createIdea(idea: Idea | null | undefined): Observable<void> {
        let url_ = this.baseUrl + "/api/Ideas/new";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(idea);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json", 
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processCreateIdea(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processCreateIdea(<any>response_);
                } catch (e) {
                    return <Observable<void>><any>_observableThrow(e);
                }
            } else
                return <Observable<void>><any>_observableThrow(response_);
        }));
    }

    protected processCreateIdea(response: HttpResponseBase): Observable<void> {
        const status = response.status;
        const responseBlob = 
            response instanceof HttpResponse ? response.body : 
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }};
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return _observableOf<void>(<any>null);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<void>(<any>null);
    }

    /**
     * Update idea
     * @param idea (optional) The idea
     * @return Success
     */
    updateIdea(idea: Idea | null | undefined): Observable<void> {
        let url_ = this.baseUrl + "/api/Ideas/update-idea";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(idea);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json", 
            })
        };

        return this.http.request("put", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processUpdateIdea(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processUpdateIdea(<any>response_);
                } catch (e) {
                    return <Observable<void>><any>_observableThrow(e);
                }
            } else
                return <Observable<void>><any>_observableThrow(response_);
        }));
    }

    protected processUpdateIdea(response: HttpResponseBase): Observable<void> {
        const status = response.status;
        const responseBlob = 
            response instanceof HttpResponse ? response.body : 
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }};
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return _observableOf<void>(<any>null);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<void>(<any>null);
    }

    /**
     * Chart data
     * @return Success
     */
    getChartData(): Observable<ChartViewModel> {
        let url_ = this.baseUrl + "/api/Ideas/chart";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetChartData(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetChartData(<any>response_);
                } catch (e) {
                    return <Observable<ChartViewModel>><any>_observableThrow(e);
                }
            } else
                return <Observable<ChartViewModel>><any>_observableThrow(response_);
        }));
    }

    protected processGetChartData(response: HttpResponseBase): Observable<ChartViewModel> {
        const status = response.status;
        const responseBlob = 
            response instanceof HttpResponse ? response.body : 
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }};
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? ChartViewModel.fromJS(resultData200) : new ChartViewModel();
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<ChartViewModel>(<any>null);
    }
}

/** The idea */
export class Idea implements IIdea {
    /** Unique identifier */
    id?: string | undefined;
    /** Team name */
    teamName?: string | undefined;
    /** Brief description on the idea */
    description?: string | undefined;
    /** Team member 1 */
    member1?: string | undefined;
    /** Team member 2 */
    member2?: string | undefined;
    /** Created on */
    created?: Date | undefined;
    /** Shortlisted idea? */
    shortlisted?: boolean | undefined;

    constructor(data?: IIdea) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.id = data["id"];
            this.teamName = data["teamName"];
            this.description = data["description"];
            this.member1 = data["member1"];
            this.member2 = data["member2"];
            this.created = data["created"] ? new Date(data["created"].toString()) : <any>undefined;
            this.shortlisted = data["shortlisted"];
        }
    }

    static fromJS(data: any): Idea {
        data = typeof data === 'object' ? data : {};
        let result = new Idea();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["teamName"] = this.teamName;
        data["description"] = this.description;
        data["member1"] = this.member1;
        data["member2"] = this.member2;
        data["created"] = this.created ? this.created.toISOString() : <any>undefined;
        data["shortlisted"] = this.shortlisted;
        return data; 
    }
}

/** The idea */
export interface IIdea {
    /** Unique identifier */
    id?: string | undefined;
    /** Team name */
    teamName?: string | undefined;
    /** Brief description on the idea */
    description?: string | undefined;
    /** Team member 1 */
    member1?: string | undefined;
    /** Team member 2 */
    member2?: string | undefined;
    /** Created on */
    created?: Date | undefined;
    /** Shortlisted idea? */
    shortlisted?: boolean | undefined;
}

/** Group data suitable to be displayed in a chart */
export class ChartViewModel implements IChartViewModel {
    /** Total number of participants */
    memberCount?: number | undefined;
    /** Total number of ideas */
    ideaCount?: number | undefined;
    /** Ideas by members */
    byMembers?: IdeasByMembers[] | undefined;
    /** Ideas by dates */
    byDate?: IdeasByDate[] | undefined;

    constructor(data?: IChartViewModel) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.memberCount = data["memberCount"];
            this.ideaCount = data["ideaCount"];
            if (data["byMembers"] && data["byMembers"].constructor === Array) {
                this.byMembers = [] as any;
                for (let item of data["byMembers"])
                    this.byMembers!.push(IdeasByMembers.fromJS(item));
            }
            if (data["byDate"] && data["byDate"].constructor === Array) {
                this.byDate = [] as any;
                for (let item of data["byDate"])
                    this.byDate!.push(IdeasByDate.fromJS(item));
            }
        }
    }

    static fromJS(data: any): ChartViewModel {
        data = typeof data === 'object' ? data : {};
        let result = new ChartViewModel();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["memberCount"] = this.memberCount;
        data["ideaCount"] = this.ideaCount;
        if (this.byMembers && this.byMembers.constructor === Array) {
            data["byMembers"] = [];
            for (let item of this.byMembers)
                data["byMembers"].push(item.toJSON());
        }
        if (this.byDate && this.byDate.constructor === Array) {
            data["byDate"] = [];
            for (let item of this.byDate)
                data["byDate"].push(item.toJSON());
        }
        return data; 
    }
}

/** Group data suitable to be displayed in a chart */
export interface IChartViewModel {
    /** Total number of participants */
    memberCount?: number | undefined;
    /** Total number of ideas */
    ideaCount?: number | undefined;
    /** Ideas by members */
    byMembers?: IdeasByMembers[] | undefined;
    /** Ideas by dates */
    byDate?: IdeasByDate[] | undefined;
}

/** Ideas - grouped by members */
export class IdeasByMembers implements IIdeasByMembers {
    /** Team member */
    member?: string | undefined;
    /** Team names */
    teamNames?: string[] | undefined;

    constructor(data?: IIdeasByMembers) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.member = data["member"];
            if (data["teamNames"] && data["teamNames"].constructor === Array) {
                this.teamNames = [] as any;
                for (let item of data["teamNames"])
                    this.teamNames!.push(item);
            }
        }
    }

    static fromJS(data: any): IdeasByMembers {
        data = typeof data === 'object' ? data : {};
        let result = new IdeasByMembers();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["member"] = this.member;
        if (this.teamNames && this.teamNames.constructor === Array) {
            data["teamNames"] = [];
            for (let item of this.teamNames)
                data["teamNames"].push(item);
        }
        return data; 
    }
}

/** Ideas - grouped by members */
export interface IIdeasByMembers {
    /** Team member */
    member?: string | undefined;
    /** Team names */
    teamNames?: string[] | undefined;
}

/** Ideas grouped by dates */
export class IdeasByDate implements IIdeasByDate {
    /** Created on */
    created?: Date | undefined;
    /** Team names */
    teamNames?: string[] | undefined;

    constructor(data?: IIdeasByDate) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.created = data["created"] ? new Date(data["created"].toString()) : <any>undefined;
            if (data["teamNames"] && data["teamNames"].constructor === Array) {
                this.teamNames = [] as any;
                for (let item of data["teamNames"])
                    this.teamNames!.push(item);
            }
        }
    }

    static fromJS(data: any): IdeasByDate {
        data = typeof data === 'object' ? data : {};
        let result = new IdeasByDate();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["created"] = this.created ? this.created.toISOString() : <any>undefined;
        if (this.teamNames && this.teamNames.constructor === Array) {
            data["teamNames"] = [];
            for (let item of this.teamNames)
                data["teamNames"].push(item);
        }
        return data; 
    }
}

/** Ideas grouped by dates */
export interface IIdeasByDate {
    /** Created on */
    created?: Date | undefined;
    /** Team names */
    teamNames?: string[] | undefined;
}

export class SwaggerException extends Error {
    message: string;
    status: number; 
    response: string; 
    headers: { [key: string]: any; };
    result: any; 

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isSwaggerException = true;

    static isSwaggerException(obj: any): obj is SwaggerException {
        return obj.isSwaggerException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): Observable<any> {
    if(result !== null && result !== undefined)
        return _observableThrow(result);
    else
        return _observableThrow(new SwaggerException(message, status, response, headers, null));
}

function blobToText(blob: any): Observable<string> {
    return new Observable<string>((observer: any) => {
        if (!blob) {
            observer.next("");
            observer.complete();
        } else {
            let reader = new FileReader(); 
            reader.onload = event => { 
                observer.next((<any>event.target).result);
                observer.complete();
            };
            reader.readAsText(blob); 
        }
    });
}