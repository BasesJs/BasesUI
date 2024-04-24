BreadcrumbManager = function(n, t) {
    "use strict";
    var i = this
      , r = {
        Container: {
            value: null,
            writable: !0
        },
        MaxSize: {
            value: 6,
            writable: !1
        },
        servicesBridge: {
            value: n.ServicesBridge,
            writable: !1
        },
        breadcrumbStorageKey: {
            value: null,
            writable: !0
        }
    };
    Object.defineProperties && Object.defineProperties(this, r);
    n.ServicesBridge.GetControllerInterfaceKey(function(n) {
        i.breadcrumbStorageKey = n;
        i._initialize();
        t()
    })
}
;
BreadcrumbManager.prototype._initialize = function() {
    "use strict";
    this.Container = document.querySelector("#WVBreadcrumbContainer");
    sessionStorage.getItem(this.breadcrumbStorageKey) || sessionStorage.setItem(this.breadcrumbStorageKey, JSON.stringify([]));
    this.RenderBreadcrumbs()
}
;
BreadcrumbManager.prototype.GetCurrentHistory = function() {
    "use strict";
    return JSON.parse(sessionStorage.getItem(this.breadcrumbStorageKey))
}
;
BreadcrumbManager.prototype.SetHistory = function(n) {
    "use strict";
    sessionStorage.setItem(this.breadcrumbStorageKey, JSON.stringify(n));
    this.RenderBreadcrumbs()
}
;
BreadcrumbManager.prototype.AddNewHistoryItem = function(n) {
    "use strict";
    var t = this.GetCurrentHistory()
    /* CHECK THE FUCKING RESULTS*/
      , i = t.length;
    i > 0 && t[i - 1].ApplicationId === n.ApplicationId && t[i - 1].ClassId === n.ClassId && t[i - 1].ObjectId === n.ObjectId || (i >= this.MaxSize && t.splice(0, 1),
    t.push(n),
    this.SetHistory(t))
}
;
BreadcrumbManager.prototype.RenderBreadcrumbs = function() {
    "use strict";
    var r = this.GetCurrentHistory(), u = r.length, n = null, f = null, e = this.NavigateHistory.bind(this), t = null, i;
    for (this.Container.innerHTML = "",
    i = 0; i < u - 1; i++)
        t = r[i].ObjectDisplayName,
        n = document.createElement("button"),
        n.dataset.applicationId = r[i].ApplicationId,
        n.dataset.classId = r[i].ClassId,
        n.dataset.objectId = r[i].ObjectId,
        n.dataset.objectDisplayName = t,
        n.innerText = t,
        n.title = t,
        n.addEventListener(ClickEvent, e),
        f = document.createElement("span"),
        f.innerText = "|",
        this.Container.appendChild(n),
        this.Container.appendChild(f);
    u > 0 && (t = r[u - 1].ObjectDisplayName,
    n = document.createElement("button"),
    n.innerText = t,
    n.title = t,
    this.Container.appendChild(n))
}
;
BreadcrumbManager.prototype.NavigateHistory = function(n) {
    "use strict";
    var t = n.target
      , u = t.dataset.applicationId
      , i = t.dataset.classId
      , r = t.dataset.objectId;
    this.servicesBridge.DisplayObject(i, r, null, null, !1, null, window.resolveDisplayOverride(n))
}
;
