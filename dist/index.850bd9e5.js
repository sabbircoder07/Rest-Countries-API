// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"4nnrR":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "af599da5850bd9e5";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"1GgH0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "searchResultCountryAutocomplete", ()=>searchResultCountryAutocomplete);
var _modelJs = require("./model.js");
var _allCountryListViewJs = require("./views/allCountryListView.js");
var _allCountryListViewJsDefault = parcelHelpers.interopDefault(_allCountryListViewJs);
var _regionListViewJs = require("./views/regionListView.js");
var _regionListViewJsDefault = parcelHelpers.interopDefault(_regionListViewJs);
var _viewJs = require("./views/view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _searchCountryViewJs = require("./views/searchCountryView.js");
var _searchCountryViewJsDefault = parcelHelpers.interopDefault(_searchCountryViewJs);
var _modeSwitcherViewJs = require("./views/modeSwitcherView.js");
var _modeSwitcherViewJsDefault = parcelHelpers.interopDefault(_modeSwitcherViewJs);
var _paginationViewJs = require("./views/paginationView.js");
var _paginationViewJsDefault = parcelHelpers.interopDefault(_paginationViewJs);
var _configJs = require("./config.js");
var _autocompleteViewJs = require("./views/autocompleteView.js");
var _autocompleteViewJsDefault = parcelHelpers.interopDefault(_autocompleteViewJs);
/**
 * Fetches the information of all countries from the Rest Countries API
 * and renders them onto the page.
 * @async
 * @function
 * @returns {Promise<void>}
 */ const controlAllCountryInformation = async function() {
    try {
        (0, _viewJsDefault.default).renderSpinner();
        await _modelJs.getAllCountries();
        setTimeout(function() {
            const data = _modelJs.getCountriesByPage();
            (0, _allCountryListViewJsDefault.default).render(data);
            (0, _paginationViewJsDefault.default).render(_modelJs.state.countyList);
        }, _configJs.SHOW_COUNTRIES_SEC * 1000);
    } catch (err) {
        // Alert the user of any errors
        (0, _viewJsDefault.default).renderError(err);
    }
};
const controlRegionList = async function() {
    try {
        (0, _viewJsDefault.default).renderSpinner();
        await _modelJs.getAllRegions();
        setTimeout(function() {
            const data = _modelJs.state.regions;
            (0, _regionListViewJsDefault.default).render(data);
        }, _configJs.SHOW_COUNTRIES_SEC * 1000);
    } catch (err) {
        // Alert the user of any errors
        (0, _viewJsDefault.default).renderError(err);
    }
};
const controlLoadSearchResultByCountry = async function() {
    try {
        const country = (0, _searchCountryViewJsDefault.default).getCountyQuery();
        if (!country) return;
        (0, _viewJsDefault.default).renderSpinner();
        await _modelJs.loadSearchResultByCountry(country);
        setTimeout(function() {
            const data = _modelJs.getCountriesByPage();
            (0, _allCountryListViewJsDefault.default).render(data);
            (0, _paginationViewJsDefault.default).render(_modelJs.state.countyList);
        }, _configJs.SHOW_COUNTRIES_SEC * 1000);
    } catch (err) {
        // Alert the user of any errors
        (0, _viewJsDefault.default).renderError(err);
    }
};
const searchResultCountryAutocomplete = async function(country) {
    try {
        if (!country) return;
        (0, _viewJsDefault.default).renderSpinner();
        await _modelJs.loadSearchResultByCountry(country);
        setTimeout(function() {
            const data = _modelJs.getCountriesByPage();
            (0, _allCountryListViewJsDefault.default).render(data);
            (0, _paginationViewJsDefault.default).render(_modelJs.state.countyList);
        }, _configJs.SHOW_COUNTRIES_SEC * 1000);
    } catch (err) {
        // Alert the user of any errors
        (0, _viewJsDefault.default).renderError(err);
    }
};
const controlLoadCountryByRegion = async function() {
    try {
        const region = (0, _searchCountryViewJsDefault.default).getRegionQuery();
        if (!region) return;
        (0, _viewJsDefault.default).renderSpinner();
        await _modelJs.loadCountryByRegion(region);
        setTimeout(function() {
            const data = _modelJs.getCountriesByPage();
            (0, _allCountryListViewJsDefault.default).render(data);
            (0, _searchCountryViewJsDefault.default).clearInput();
            (0, _paginationViewJsDefault.default).render(_modelJs.state.countyList);
        }, _configJs.SHOW_COUNTRIES_SEC * 1000);
    } catch (err) {
        // Alert the user of any errors
        (0, _viewJsDefault.default).renderError(err);
    }
};
const controlModeSwitcher = function() {
    try {
        const currentMode = (0, _modeSwitcherViewJsDefault.default).getCountyQuery(_modelJs.state.currentMode);
        if (!currentMode) return;
        _modelJs.getCurrentMode(currentMode);
        const data = _modelJs.state.currentMode;
        (0, _modeSwitcherViewJsDefault.default).render(data);
    } catch (err) {
        // Alert the user of any errors
        (0, _viewJsDefault.default).renderError(err);
    }
};
const controlModeSwitcherPageLoad = function() {
    try {
        _modelJs.loadCurrentMode("Light Mode");
        const data = _modelJs.state.currentMode;
        (0, _modeSwitcherViewJsDefault.default).render(data);
    } catch (err) {
        // Alert the user of any errors
        (0, _viewJsDefault.default).renderError(err);
    }
};
const controlPagination = function(goToPage) {
    try {
        const data = _modelJs.getCountriesByPage(goToPage);
        (0, _allCountryListViewJsDefault.default).render(data);
        //renders countries
        //model.state.countyList
        (0, _paginationViewJsDefault.default).render(_modelJs.state.countyList);
    } catch (err) {
        // Alert the user of any errors
        (0, _viewJsDefault.default).renderError(err);
    } finally{}
};
const controlAutoCompleteCountryName = async function() {
    try {
        await _modelJs.getAllCountriesName();
        const data = _modelJs.state.countriesName;
        (0, _autocompleteViewJsDefault.default).render(data);
    } catch (err) {
        // Alert the user of any errors
        console.log(err);
        (0, _viewJsDefault.default).renderError(err);
    } finally{}
};
const init = function() {
    (0, _modeSwitcherViewJsDefault.default).addHandlerLoad(controlModeSwitcherPageLoad);
    (0, _modeSwitcherViewJsDefault.default).addHandlerClick(controlModeSwitcher);
    (0, _regionListViewJsDefault.default).addHandlerRender(controlRegionList);
    (0, _allCountryListViewJsDefault.default).addHandlerRender(controlAllCountryInformation);
    (0, _searchCountryViewJsDefault.default).addHandlerSearchCountry(controlLoadSearchResultByCountry);
    (0, _searchCountryViewJsDefault.default).addHandlerSearchCountryByRegion(controlLoadCountryByRegion);
    (0, _paginationViewJsDefault.default).addHandlerClick(controlPagination);
    controlAutoCompleteCountryName();
};
init();

},{"./model.js":"Py0LO","./views/allCountryListView.js":"1ASs5","./views/regionListView.js":"8egnR","./views/view.js":"7MbWE","./views/searchCountryView.js":"cmsqx","./views/modeSwitcherView.js":"eYTJm","./views/paginationView.js":"2gpFT","./config.js":"4Wc5b","./views/autocompleteView.js":"ku0AL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Py0LO":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
parcelHelpers.export(exports, "getCurrentMode", ()=>getCurrentMode);
parcelHelpers.export(exports, "loadCurrentMode", ()=>loadCurrentMode);
parcelHelpers.export(exports, "getAllCountries", ()=>getAllCountries);
parcelHelpers.export(exports, "getAllCountriesName", ()=>getAllCountriesName);
parcelHelpers.export(exports, "getAllRegions", ()=>getAllRegions);
parcelHelpers.export(exports, "loadSearchResultByCountry", ()=>loadSearchResultByCountry);
parcelHelpers.export(exports, "loadCountryByRegion", ()=>loadCountryByRegion);
parcelHelpers.export(exports, "loadCountryDetails", ()=>loadCountryDetails);
parcelHelpers.export(exports, "getCountriesByPage", ()=>getCountriesByPage);
var _configJs = require("./config.js");
var _helperJs = require("./helper.js");
const state = {
    currentMode: "",
    regions: [],
    countriesName: [],
    countyList: {
        query: "",
        results: [],
        resultsPerPage: (0, _configJs.COUNTRY_PER_PAGE),
        page: 1
    },
    countryDetails: {
        query: "",
        name: "",
        nativeName: "",
        population: "",
        populationOnWord: "",
        region: "",
        subregion: "",
        capital: "",
        topLevelDomain: "",
        currencies: [],
        languages: [],
        borders: [],
        flag: ""
    }
};
const getCurrentMode = function(currentMode) {
    try {
        localStorage.setItem("currentMode", currentMode);
        const currentStMode = localStorage.getItem("currentMode");
        if (currentStMode) state.currentMode = currentStMode;
    } catch (err) {
        throw err;
    } finally{}
};
const loadCurrentMode = function(currentMode) {
    try {
        const currentModeByStorage = localStorage.getItem("currentMode");
        if (currentModeByStorage) state.currentMode = currentModeByStorage;
        else state.currentMode = currentMode;
    } catch (err) {
        throw err;
    } finally{}
};
const getAllCountries = async function() {
    try {
        const data = await (0, _helperJs.getJSON)(`${(0, _configJs.API_URL)}/all`);
        state.countyList.results = data.sort((a, b)=>a.name.common.localeCompare(b.name.common));
    } catch (err) {
        console.error(err);
        throw err;
    } finally{}
};
const getAllCountriesName = async function() {
    try {
        const data = await (0, _helperJs.getJSON)(`${(0, _configJs.API_URL)}/all`);
        let countryNameList = [];
        data.forEach((data)=>{
            countryNameList.push(data.name.common);
        });
        state.countriesName = [
            ...new Set(countryNameList)
        ];
    } catch (err) {
        console.error(err);
        throw err;
    } finally{}
};
const getAllRegions = async function() {
    try {
        const data = await (0, _helperJs.getJSON)(`${(0, _configJs.API_URL)}/all`);
        let regionList = [];
        data.forEach((data)=>{
            regionList.push(data.region);
        });
        state.regions = [
            ...new Set(regionList)
        ];
    } catch (err) {
        console.error(err);
        throw err;
    } finally{}
};
const loadSearchResultByCountry = async function(country) {
    try {
        state.countyList.query = country;
        console.log(country);
        const data = await (0, _helperJs.getJSON)(`${(0, _configJs.API_URL)}/name/${country.trim()}?fullText=true`);
        state.countyList.results = data;
    } catch (err) {
        console.error(err);
        throw err;
    } finally{}
};
const loadCountryByRegion = async function(region) {
    try {
        state.countyList.query = region;
        const data = await (0, _helperJs.getJSON)(`${(0, _configJs.API_URL)}/region/${region}`);
        state.countyList.results = data;
    } catch (err) {
        console.error(err);
        throw err;
    } finally{}
};
const loadCountryDetails = async function(CountryName) {
    try {
        const allCountriesData = await (0, _helperJs.getJSON)(`${(0, _configJs.API_URL)}/all`);
        state.countyList.results = allCountriesData;
        state.countryDetails.query = CountryName;
        let data = await (0, _helperJs.getJSON)(`${(0, _configJs.API_URL)}/name/${CountryName}?fullText=true`);
        data = data[0];
        if (data.borders) {
            const getBorderCountriesNames = (data)=>[
                    ...allCountriesData
                ].reduce((a, c)=>{
                    data.borders.includes(c.cca3) && a.push(c.name.common);
                    return a;
                }, []);
            state.countryDetails.borders = getBorderCountriesNames(data);
        }
        state.countryDetails.name = data.name.common;
        state.countryDetails.nativeName = data.nativeName;
        state.countryDetails.population = data.population;
        state.countryDetails.region = data.region;
        state.countryDetails.subregion = data.subregion;
        state.countryDetails.capital = data.capital;
        state.countryDetails.topLevelDomain = data.topLevelDomain;
        state.countryDetails.currencies = data.currencies;
        state.countryDetails.languages = data.languages;
        state.countryDetails.flag = data.flags.png;
    } catch (err) {
        throw err;
    } finally{}
};
const getCountriesByPage = function(page = state.countyList.page) {
    try {
        state.countyList.page = page;
        const start = 0;
        const end = page * state.countyList.resultsPerPage;
        return state.countyList.results.slice(start, end);
    } catch (err) {
        throw err;
    }
};

},{"./config.js":"4Wc5b","./helper.js":"6fitd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Wc5b":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "API_URL", ()=>API_URL);
parcelHelpers.export(exports, "TIMEOUT_SEC", ()=>TIMEOUT_SEC);
parcelHelpers.export(exports, "COUNTRY_PER_PAGE", ()=>COUNTRY_PER_PAGE);
parcelHelpers.export(exports, "SHOW_COUNTRIES_SEC", ()=>SHOW_COUNTRIES_SEC);
const API_URL = "https://restcountries.com/v3.1";
const TIMEOUT_SEC = 20;
const COUNTRY_PER_PAGE = 20;
const SHOW_COUNTRIES_SEC = 1;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"6fitd":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getJSON", ()=>getJSON);
var _configJs = require("./config.js");
const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};
const getJSON = async function(url) {
    try {
        const res = await Promise.race([
            fetch(url),
            timeout((0, _configJs.TIMEOUT_SEC))
        ]); // fetch(url);
        const data = await res.json();
        if (!res.ok) throw new Error(`${data.message} ${res.status}`);
        return data;
    } catch (err) {
        throw err;
    }
};

},{"./config.js":"4Wc5b","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1ASs5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CountriesView", ()=>CountriesView);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class CountriesView {
    #parentElement = document.querySelector(".countries");
    #numberOfCountries = document.querySelector(".header__numberOf-countries");
    #data;
    render(data) {
        this.#data = data;
        let markup = "";
        markup = this.#generateMarkup();
        this.#clearMarkup();
        this.#parentElement.insertAdjacentHTML("beforeend", markup);
    }
    #clearMarkup() {
        this.#parentElement.innerHTML = "";
    }
    renderSpinner = function() {
        let markup = `<div class="loader-container">
  <div class="loader"></div>
  <div class="loader-text">Loading...</div>
</div>`;
        this.#parentElement.innerHTML = "";
        this.#parentElement.insertAdjacentHTML("beforeend", markup);
    };
    addHandlerRender(render) {
        [
            "load"
        ].forEach((ev)=>window.addEventListener(ev, render));
    }
    #generateMarkup() {
        let html = "";
        if (this.#data.length === 0) return;
        else {
            this.#numberOfCountries.innerHTML = `${this.#data.length} Countries Found`;
            this.#data.forEach((data, index)=>{
                html += `
        <a class="countries__link" href="countryDetails.html?name=${data.name.common}">
        <article class="country">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__number"><span>${index + 1}</span></div>
    <div class="country__data">
      <div class="country__heading-box">
      <h2 class="heading-secondary country__heading">${data.name.common}</h2>
      </div>
      <div class="country__info-box">
      <p class="country__row"><span>Population: </span>${data.population.toLocaleString()}</p>
      <p class="country__row"><span>Region: </span>${data.region}</p>
      <p class="country__row"><span>Capital: </span>${data.capital}</p>
      </div>
    </div>
  </article>
  </a>`;
            });
        }
        return html;
    }
}
exports.default = new CountriesView();

},{"./view.js":"7MbWE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7MbWE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "View", ()=>View);
class View {
    #parentElementSpinner = document.querySelector(".countries");
    #errorMessage = "We could not find a country with that name.";
    renderSpinner = function() {
        let markup = `<div class="loader-container">
    <div class="loader"></div>
    <div class="loader-text">Loading...</div>
    </div>`;
        this.#parentElementSpinner.innerHTML = "";
        this.#parentElementSpinner.insertAdjacentHTML("beforeend", markup);
    };
    renderError(message = this.#errorMessage) {
        const markup = `<div class="message msg-danger">
    <div class="message-icon">
      <i class="ion-close-round">
      <img src="images/error_icon.svg" alt="error" />
      </i>
    </div>
    <div class="message-content">
      <p>${message}</p>
    </div>
    <a href="#" class="message-close">
      <img class="close-icon" src="images/cross-icon.svg" alt="close" />
    </a>  
  </div>`;
        this.#parentElementSpinner.innerHTML = "";
        this.#parentElementSpinner.insertAdjacentHTML("beforeend", markup);
    }
}
exports.default = new View();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8egnR":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RegionsView", ()=>RegionsView);
class RegionsView {
    #parentElement = document.querySelector(".region-list");
    #parentElementSpinner = document.querySelector(".countries");
    #data;
    render(data) {
        this.#data = data;
        let markup = "";
        markup = this.#generateMarkup();
        this.#clearMarkup();
        this.#parentElement.insertAdjacentHTML("beforeend", markup);
    }
    #clearMarkup() {
        this.#parentElement.innerHTML = "<option selected disabled>Filter by Region</option>";
    }
    renderSpinner = function() {
        let markup = `<div class="loader-container">
  <div class="loader"></div>
  <div class="loader-text">Loading...</div>
</div>`;
        this.#parentElementSpinner.innerHTML = "";
        this.#parentElementSpinner.insertAdjacentHTML("beforeend", markup);
    };
    addHandlerRender(render) {
        [
            "load"
        ].forEach((ev)=>window.addEventListener(ev, render));
    }
    #generateMarkup() {
        let html = "";
        if (this.#data.length === 0) return;
        this.#data.forEach((region)=>{
            html += `
      <option class="region-list" value="${region}">${region}</option>    
      `;
        });
        return html;
    }
}
exports.default = new RegionsView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cmsqx":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class SearCountryView {
    #parentElementSearch = document.querySelector(".cta__country-form");
    getCountyQuery(countryName) {
        console.log(countryName);
        if (!countryName) return this.#parentElementSearch.querySelector(".input__country-name").value;
        else return countryName;
    }
    clearInput() {
        this.#parentElementSearch.querySelector(".input__country-name").value = "";
    }
    getRegionQuery() {
        return this.#parentElementSearch.querySelector(".region-list").value;
    }
    addHandlerSearchCountry(handler) {
        this.#parentElementSearch.addEventListener("submit", function(e) {
            e.preventDefault();
            handler();
        });
    }
    addHandlerSearchCountryByRegion(handler) {
        this.#parentElementSearch.querySelector(".region-list").addEventListener("change", function(e) {
            e.preventDefault();
            handler();
        });
    }
}
exports.default = new SearCountryView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eYTJm":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ModeSwitcherView", ()=>ModeSwitcherView);
class ModeSwitcherView {
    #modeSwitcher = document.querySelector(".header__mode-switcher");
    #switcherText = document.querySelector(".header__mode-switcher__text-box");
    #modeSwitcherIcon = document.querySelector(".header__mode-switcher__icon");
    #data;
    render(data) {
        this.#data = data;
        this.#renderModeSwitcher();
    }
    getCountyQuery(currentMode) {
        if (!currentMode) return this.#switcherText.textContent;
        else {
            if (currentMode == "Dark Mode") this.#data = "Light Mode";
            else if (currentMode == "Light Mode") this.#data = "Dark Mode";
            return this.#data;
        }
    }
    addHandlerLoad(render) {
        window.addEventListener("load", render);
    }
    addHandlerClick(render) {
        this.#modeSwitcher.addEventListener("click", render);
    }
    #renderModeSwitcher() {
        let root = document.querySelector(":root");
        if (this.#data == "Dark Mode") {
            root.style.setProperty("--color-Very-Light-Gray-Light-Mode-Background", "hsl(207, 26%, 17%)");
            root.style.setProperty("--color-White-Dark-Mode-Text-and-Light-Mode-Elements", "hsl(209, 23%, 22%)");
            root.style.setProperty("--color-Very-Dark-Blue-Light-Mode-Text", "hsl(0, 0%, 100%)");
            root.style.setProperty("--color-Dark-Gray-Light-Mode-Input", "hsl(0, 0%, 100%)");
            this.#modeSwitcherIcon.src = "https://shivanarrthine.com/public/images/icons/sun.svg";
        } else {
            root.style.setProperty("--color-Very-Light-Gray-Light-Mode-Background", "hsl(0, 0%, 98%)");
            root.style.setProperty("--color-White-Dark-Mode-Text-and-Light-Mode-Elements", "hsl(0, 0%, 100%)");
            root.style.setProperty("--color-Very-Dark-Blue-Light-Mode-Text", "hsl(200, 15%, 8%)");
            root.style.setProperty("--color-Dark-Gray-Light-Mode-Input", "hsl(0, 0%, 52%)");
            this.#modeSwitcherIcon.src = "https://shivanarrthine.com/public/images/icons/moon.svg";
        }
        this.#switcherText.textContent = this.#data === "Light Mode" ? "Dark Mode" : "Light Mode";
    }
}
exports.default = new ModeSwitcherView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2gpFT":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class PaginationView {
    _parentElement = document.querySelector(".pagination");
    _numberOfCountries = document.querySelector(".header__numberOf-countries");
    _data;
    render(data) {
        this._data = data;
        let markup = "";
        markup = this._generateMarkup();
        this._clearMarkup();
        this._parentElement.insertAdjacentHTML("beforeend", markup);
    }
    addHandlerClick(handler) {
        this._parentElement.addEventListener("click", function(e) {
            e.preventDefault();
            const btn = e.target.closest(".pagination__btn-view-all");
            if (!btn) return;
            const goToPage = +btn.dataset.goto;
            handler(goToPage);
        });
    }
    _generateMarkup() {
        if (this._data.results.length === 0) return;
        const numOfPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);
        this._numberOfCountries.innerHTML = "";
        this._numberOfCountries.innerHTML = `Showing <span>${this._data.page != numOfPages ? this._data.resultsPerPage * this._data.page : this._data.results.length} </span> out of <span>${this._data.results.length}</span> Countries`;
        if (this._data.page === 1 && numOfPages > 1) return `<button data-goto="${numOfPages}" class="pagination__btn pagination__btn-view-all">Show All ${this._data.results.length} Countries \u{2192}</button>`;
        return "";
    }
    _clearMarkup() {
        this._parentElement.innerHTML = "";
    }
}
exports.default = new PaginationView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ku0AL":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AutocompleteView", ()=>AutocompleteView);
var _controllerJs = require("../controller.js");
class AutocompleteView {
    #parentElement = document.querySelector("#countryName");
    #parentElementSearch = document.querySelector(".cta__country-form");
    #autocompleteItem = document.querySelector(".autocompleteItem");
    #data;
    countryName;
    render(data) {
        this.#data = data;
        this.autocomplete(this.#parentElement, this.#data);
    }
    autocomplete = function(inputElement, dataArray) {
        let currentFocus = -1;
        inputElement.addEventListener("input", function(e) {
            let i, val = this.value;
            closeAllLists();
            if (!val) return false;
            currentFocus = -1;
            let autocompleteContainer = document.createElement("div");
            autocompleteContainer.setAttribute("id", this.id + "autocomplete-list");
            autocompleteContainer.setAttribute("class", "autocomplete-items");
            this.parentNode.appendChild(autocompleteContainer);
            for(i = 0; i < dataArray.length; i++)if (dataArray[i].substr(0, val.length).toUpperCase() === val.toUpperCase()) {
                let autocompleteItem = document.createElement("div");
                autocompleteItem.innerHTML = "<strong>" + dataArray[i].substr(0, val.length) + "</strong>";
                autocompleteItem.innerHTML += dataArray[i].substr(val.length);
                let hiddenInput = document.createElement("input");
                hiddenInput.type = "hidden";
                hiddenInput.value = dataArray[i];
                autocompleteItem.appendChild(hiddenInput);
                autocompleteContainer.appendChild(autocompleteItem);
                autocompleteItem.addEventListener("click", function(e) {
                    e.preventDefault();
                    inputElement.value = this.getElementsByTagName("input")[0].value;
                    this.countryName = this.getElementsByTagName("input")[0].value;
                    _controllerJs.searchResultCountryAutocomplete(this.countryName);
                    closeAllLists();
                });
            }
        });
        inputElement.addEventListener("keydown", function(e) {
            let listItems = document.getElementById(this.id + "autocomplete-list").getElementsByTagName("div");
            if (e.keyCode === 40) {
                currentFocus++;
                addActive(listItems);
            } else if (e.keyCode === 38) {
                currentFocus--;
                addActive(listItems);
            } else if (e.keyCode === 13) {
                e.preventDefault();
                if (currentFocus > -1) {
                    if (listItems) listItems[currentFocus].click();
                }
            }
        });
        function addActive(listItems) {
            removeActive(listItems);
            if (currentFocus >= listItems.length) currentFocus = 0;
            if (currentFocus < 0) currentFocus = listItems.length - 1;
            listItems[currentFocus].classList.add("autocomplete-active");
        }
        function removeActive(listItems) {
            for(let i = 0; i < listItems.length; i++)listItems[i].classList.remove("autocomplete-active");
        }
        function closeAllLists(element) {
            let listItems = document.getElementsByClassName("autocomplete-items");
            for(let i = 0; i < listItems.length; i++)if (element !== listItems[i] && element !== inputElement) listItems[i].parentNode.removeChild(listItems[i]);
        }
        document.addEventListener("click", function(e) {
            closeAllLists(e.target);
        });
    };
}
exports.default = new AutocompleteView();

},{"../controller.js":"1GgH0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["4nnrR","1GgH0"], "1GgH0", "parcelRequire94c2")

//# sourceMappingURL=index.850bd9e5.js.map
