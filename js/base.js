var requirejs, require, define;
!
function(global) {
	function isFunction(e) {
		return "[object Function]" === ostring.call(e)
	}
	function isArray(e) {
		return "[object Array]" === ostring.call(e)
	}
	function each(e, t) {
		if (e) {
			var i;
			for (i = 0; i < e.length && (!e[i] || !t(e[i], i, e)); i += 1);
		}
	}
	function eachReverse(e, t) {
		if (e) {
			var i;
			for (i = e.length - 1; i > -1 && (!e[i] || !t(e[i], i, e)); i -= 1);
		}
	}
	function hasProp(e, t) {
		return hasOwn.call(e, t)
	}
	function getOwn(e, t) {
		return hasProp(e, t) && e[t]
	}
	function eachProp(e, t) {
		var i;
		for (i in e) if (hasProp(e, i) && t(e[i], i)) break
	}
	function mixin(e, t, i, r) {
		return t && eachProp(t, function(t, n) {
			(i || !hasProp(e, n)) && (r && "string" != typeof t ? (e[n] || (e[n] = {}), mixin(e[n], t, i, r)) : e[n] = t)
		}), e
	}
	function bind(e, t) {
		return function() {
			return t.apply(e, arguments)
		}
	}
	function scripts() {
		return document.getElementsByTagName("script")
	}
	function defaultOnError(e) {
		throw e
	}
	function getGlobal(e) {
		if (!e) return e;
		var t = global;
		return each(e.split("."), function(e) {
			t = t[e]
		}), t
	}
	function makeError(e, t, i, r) {
		var n = new Error(t + "\nhttp://requirejs.org/docs/errors.html#" + e);
		return n.requireType = e, n.requireModules = r, i && (n.originalError = i), n
	}
	function newContext(e) {
		function t(e) {
			var t, i;
			for (t = 0; e[t]; t += 1) if (i = e[t], "." === i) e.splice(t, 1), t -= 1;
			else if (".." === i) {
				if (1 === t && (".." === e[2] || ".." === e[0])) break;
				t > 0 && (e.splice(t - 1, 2), t -= 2)
			}
		}
		function i(e, i, r) {
			var n, a, o, s, c, u, p, d, f, l, h, m = i && i.split("/"),
				g = m,
				v = y.map,
				x = v && v["*"];
			if (e && "." === e.charAt(0) && (i ? (g = getOwn(y.pkgs, i) ? m = [i] : m.slice(0, m.length - 1), e = g.concat(e.split("/")), t(e), a = getOwn(y.pkgs, n = e[0]), e = e.join("/"), a && e === n + "/" + a.main && (e = n)) : 0 === e.indexOf("./") && (e = e.substring(2))), r && v && (m || x)) {
				for (s = e.split("/"), c = s.length; c > 0; c -= 1) {
					if (p = s.slice(0, c).join("/"), m) for (u = m.length; u > 0; u -= 1) if (o = getOwn(v, m.slice(0, u).join("/")), o && (o = getOwn(o, p))) {
						d = o, f = c;
						break
					}
					if (d) break;
					!l && x && getOwn(x, p) && (l = getOwn(x, p), h = c)
				}!d && l && (d = l, f = h), d && (s.splice(0, f, d), e = s.join("/"))
			}
			return e
		}
		function r(e) {
			isBrowser && each(scripts(), function(t) {
				return t.getAttribute("data-requiremodule") === e && t.getAttribute("data-requirecontext") === q.contextName ? (t.parentNode.removeChild(t), !0) : void 0
			})
		}
		function n(e) {
			var t = getOwn(y.paths, e);
			return t && isArray(t) && t.length > 1 ? (r(e), t.shift(), q.require.undef(e), q.require([e]), !0) : void 0
		}
		function a(e) {
			var t, i = e ? e.indexOf("!") : -1;
			return i > -1 && (t = e.substring(0, i), e = e.substring(i + 1, e.length)), [t, e]
		}
		function o(e, t, r, n) {
			var o, s, c, u, p = null,
				d = t ? t.name : null,
				f = e,
				l = !0,
				h = "";
			return e || (l = !1, e = "_@r" + (A += 1)), u = a(e), p = u[0], e = u[1], p && (p = i(p, d, n), s = getOwn(j, p)), e && (p ? h = s && s.normalize ? s.normalize(e, function(e) {
				return i(e, d, n)
			}) : i(e, d, n) : (h = i(e, d, n), u = a(h), p = u[0], h = u[1], r = !0, o = q.nameToUrl(h))), c = !p || s || r ? "" : "_unnormalized" + (R += 1), {
				prefix: p,
				name: h,
				parentMap: t,
				unnormalized: !! c,
				url: o,
				originalName: f,
				isDefine: l,
				id: (p ? p + "!" + h : h) + c
			}
		}
		function s(e) {
			var t = e.id,
				i = getOwn(k, t);
			return i || (i = k[t] = new q.Module(e)), i
		}
		function c(e, t, i) {
			var r = e.id,
				n = getOwn(k, r);
			!hasProp(j, r) || n && !n.defineEmitComplete ? (n = s(e), n.error && "error" === t ? i(n.error) : n.on(t, i)) : "defined" === t && i(j[r])
		}
		function u(e, t) {
			var i = e.requireModules,
				r = !1;
			t ? t(e) : (each(i, function(t) {
				var i = getOwn(k, t);
				i && (i.error = e, i.events.error && (r = !0, i.emit("error", e)))
			}), r || req.onError(e))
		}
		function p() {
			globalDefQueue.length && (apsp.apply(M, [M.length - 1, 0].concat(globalDefQueue)), globalDefQueue = [])
		}
		function d(e) {
			delete k[e], delete S[e]
		}
		function f(e, t, i) {
			var r = e.map.id;
			e.error ? e.emit("error", e.error) : (t[r] = !0, each(e.depMaps, function(r, n) {
				var a = r.id,
					o = getOwn(k, a);
				!o || e.depMatched[n] || i[a] || (getOwn(t, a) ? (e.defineDep(n, j[a]), e.check()) : f(o, t, i))
			}), i[r] = !0)
		}
		function l() {
			var e, t, i, a, o = 1e3 * y.waitSeconds,
				s = o && q.startTime + o < (new Date).getTime(),
				c = [],
				p = [],
				d = !1,
				h = !0;
			if (!x) {
				if (x = !0, eachProp(S, function(i) {
					if (e = i.map, t = e.id, i.enabled && (e.isDefine || p.push(i), !i.error)) if (!i.inited && s) n(t) ? (a = !0, d = !0) : (c.push(t), r(t));
					else if (!i.inited && i.fetched && e.isDefine && (d = !0, !e.prefix)) return h = !1
				}), s && c.length) return i = makeError("timeout", "Load timeout for modules: " + c, null, c), i.contextName = q.contextName, u(i);
				h && each(p, function(e) {
					f(e, {}, {})
				}), s && !a || !d || !isBrowser && !isWebWorker || w || (w = setTimeout(function() {
					w = 0, l()
				}, 50)), x = !1
			}
		}
		function h(e) {
			hasProp(j, e[0]) || s(o(e[0], null, !0)).init(e[1], e[2])
		}
		function m(e, t, i, r) {
			e.detachEvent && !isOpera ? r && e.detachEvent(r, t) : e.removeEventListener(i, t, !1)
		}
		function g(e) {
			var t = e.currentTarget || e.srcElement;
			return m(t, q.onScriptLoad, "load", "onreadystatechange"), m(t, q.onScriptError, "error"), {
				node: t,
				id: t && t.getAttribute("data-requiremodule")
			}
		}
		function v() {
			var e;
			for (p(); M.length;) {
				if (e = M.shift(), null === e[0]) return u(makeError("mismatch", "Mismatched anonymous define() module: " + e[e.length - 1]));
				h(e)
			}
		}
		var x, b, q, E, w, y = {
			waitSeconds: 7,
			baseUrl: "./",
			paths: {},
			pkgs: {},
			shim: {},
			config: {}
		},
			k = {},
			S = {},
			O = {},
			M = [],
			j = {},
			P = {},
			A = 1,
			R = 1;
		return E = {
			require: function(e) {
				return e.require ? e.require : e.require = q.makeRequire(e.map)
			},
			exports: function(e) {
				return e.usingExports = !0, e.map.isDefine ? e.exports ? e.exports : e.exports = j[e.map.id] = {} : void 0
			},
			module: function(e) {
				return e.module ? e.module : e.module = {
					id: e.map.id,
					uri: e.map.url,
					config: function() {
						var t, i = getOwn(y.pkgs, e.map.id);
						return t = i ? getOwn(y.config, e.map.id + "/" + i.main) : getOwn(y.config, e.map.id), t || {}
					},
					exports: j[e.map.id]
				}
			}
		}, b = function(e) {
			this.events = getOwn(O, e.id) || {}, this.map = e, this.shim = getOwn(y.shim, e.id), this.depExports = [], this.depMaps = [], this.depMatched = [], this.pluginMaps = {}, this.depCount = 0
		}, b.prototype = {
			init: function(e, t, i, r) {
				r = r || {}, this.inited || (this.factory = t, i ? this.on("error", i) : this.events.error && (i = bind(this, function(e) {
					this.emit("error", e)
				})), this.depMaps = e && e.slice(0), this.errback = i, this.inited = !0, this.ignore = r.ignore, r.enabled || this.enabled ? this.enable() : this.check())
			},
			defineDep: function(e, t) {
				this.depMatched[e] || (this.depMatched[e] = !0, this.depCount -= 1, this.depExports[e] = t)
			},
			fetch: function() {
				if (!this.fetched) {
					this.fetched = !0, q.startTime = (new Date).getTime();
					var e = this.map;
					return this.shim ? (q.makeRequire(this.map, {
						enableBuildCallback: !0
					})(this.shim.deps || [], bind(this, function() {
						return e.prefix ? this.callPlugin() : this.load()
					})), void 0) : e.prefix ? this.callPlugin() : this.load()
				}
			},
			load: function() {
				var e = this.map.url;
				P[e] || (P[e] = !0, q.load(this.map.id, e))
			},
			check: function() {
				if (this.enabled && !this.enabling) {
					var e, t, i = this.map.id,
						r = this.depExports,
						n = this.exports,
						a = this.factory;
					if (this.inited) {
						if (this.error) this.emit("error", this.error);
						else if (!this.defining) {
							if (this.defining = !0, this.depCount < 1 && !this.defined) {
								if (isFunction(a)) {
									if (this.events.error && this.map.isDefine || req.onError !== defaultOnError) try {
										n = q.execCb(i, a, r, n)
									} catch (o) {
										e = o
									} else n = q.execCb(i, a, r, n);
									if (this.map.isDefine && (t = this.module, t && void 0 !== t.exports && t.exports !== this.exports ? n = t.exports : void 0 === n && this.usingExports && (n = this.exports)), e) return e.requireMap = this.map, e.requireModules = this.map.isDefine ? [this.map.id] : null, e.requireType = this.map.isDefine ? "define" : "require", u(this.error = e)
								} else n = a;
								this.exports = n, this.map.isDefine && !this.ignore && (j[i] = n, req.onResourceLoad && req.onResourceLoad(q, this.map, this.depMaps)), d(i), this.defined = !0
							}
							this.defining = !1, this.defined && !this.defineEmitted && (this.defineEmitted = !0, this.emit("defined", this.exports), this.defineEmitComplete = !0)
						}
					} else this.fetch()
				}
			},
			callPlugin: function() {
				var e = this.map,
					t = e.id,
					r = o(e.prefix);
				this.depMaps.push(r), c(r, "defined", bind(this, function(r) {
					var n, a, p, f = this.map.name,
						l = this.map.parentMap ? this.map.parentMap.name : null,
						h = q.makeRequire(e.parentMap, {
							enableBuildCallback: !0
						});
					return this.map.unnormalized ? (r.normalize && (f = r.normalize(f, function(e) {
						return i(e, l, !0)
					}) || ""), a = o(e.prefix + "!" + f, this.map.parentMap), c(a, "defined", bind(this, function(e) {
						this.init([], function() {
							return e
						}, null, {
							enabled: !0,
							ignore: !0
						})
					})), p = getOwn(k, a.id), p && (this.depMaps.push(a), this.events.error && p.on("error", bind(this, function(e) {
						this.emit("error", e)
					})), p.enable()), void 0) : (n = bind(this, function(e) {
						this.init([], function() {
							return e
						}, null, {
							enabled: !0
						})
					}), n.error = bind(this, function(e) {
						this.inited = !0, this.error = e, e.requireModules = [t], eachProp(k, function(e) {
							0 === e.map.id.indexOf(t + "_unnormalized") && d(e.map.id)
						}), u(e)
					}), n.fromText = bind(this, function(i, r) {
						var a = e.name,
							c = o(a),
							p = useInteractive;
						r && (i = r), p && (useInteractive = !1), s(c), hasProp(y.config, t) && (y.config[a] = y.config[t]);
						try {
							req.exec(i)
						} catch (d) {
							return u(makeError("fromtexteval", "fromText eval for " + t + " failed: " + d, d, [t]))
						}
						p && (useInteractive = !0), this.depMaps.push(c), q.completeLoad(a), h([a], n)
					}), r.load(e.name, h, n, y), void 0)
				})), q.enable(r, this), this.pluginMaps[r.id] = r
			},
			enable: function() {
				S[this.map.id] = this, this.enabled = !0, this.enabling = !0, each(this.depMaps, bind(this, function(e, t) {
					var i, r, n;
					if ("string" == typeof e) {
						if (e = o(e, this.map.isDefine ? this.map : this.map.parentMap, !1, !this.skipMap), this.depMaps[t] = e, n = getOwn(E, e.id)) return this.depExports[t] = n(this), void 0;
						this.depCount += 1, c(e, "defined", bind(this, function(e) {
							this.defineDep(t, e), this.check()
						})), this.errback && c(e, "error", bind(this, this.errback))
					}
					i = e.id, r = k[i], hasProp(E, i) || !r || r.enabled || q.enable(e, this)
				})), eachProp(this.pluginMaps, bind(this, function(e) {
					var t = getOwn(k, e.id);
					t && !t.enabled && q.enable(e, this)
				})), this.enabling = !1, this.check()
			},
			on: function(e, t) {
				var i = this.events[e];
				i || (i = this.events[e] = []), i.push(t)
			},
			emit: function(e, t) {
				each(this.events[e], function(e) {
					e(t)
				}), "error" === e && delete this.events[e]
			}
		}, q = {
			config: y,
			contextName: e,
			registry: k,
			defined: j,
			urlFetched: P,
			defQueue: M,
			Module: b,
			makeModuleMap: o,
			nextTick: req.nextTick,
			onError: u,
			configure: function(e) {
				e.baseUrl && "/" !== e.baseUrl.charAt(e.baseUrl.length - 1) && (e.baseUrl += "/");
				var t = y.pkgs,
					i = y.shim,
					r = {
						paths: !0,
						config: !0,
						map: !0
					};
				eachProp(e, function(e, t) {
					r[t] ? "map" === t ? (y.map || (y.map = {}), mixin(y[t], e, !0, !0)) : mixin(y[t], e, !0) : y[t] = e
				}), e.shim && (eachProp(e.shim, function(e, t) {
					isArray(e) && (e = {
						deps: e
					}), !e.exports && !e.init || e.exportsFn || (e.exportsFn = q.makeShimExports(e)), i[t] = e
				}), y.shim = i), e.packages && (each(e.packages, function(e) {
					var i;
					e = "string" == typeof e ? {
						name: e
					} : e, i = e.location, t[e.name] = {
						name: e.name,
						location: i || e.name,
						main: (e.main || "main").replace(currDirRegExp, "").replace(jsSuffixRegExp, "")
					}
				}), y.pkgs = t), eachProp(k, function(e, t) {
					e.inited || e.map.unnormalized || (e.map = o(t))
				}), (e.deps || e.callback) && q.require(e.deps || [], e.callback)
			},
			makeShimExports: function(e) {
				function t() {
					var t;
					return e.init && (t = e.init.apply(global, arguments)), t || e.exports && getGlobal(e.exports)
				}
				return t
			},
			makeRequire: function(t, r) {
				function n(i, a, c) {
					var p, d, f;
					return r.enableBuildCallback && a && isFunction(a) && (a.__requireJsBuild = !0), "string" == typeof i ? isFunction(a) ? u(makeError("requireargs", "Invalid require call"), c) : t && hasProp(E, i) ? E[i](k[t.id]) : req.get ? req.get(q, i, t, n) : (d = o(i, t, !1, !0), p = d.id, hasProp(j, p) ? j[p] : u(makeError("notloaded", 'Module name "' + p + '" has not been loaded yet for context: ' + e + (t ? "" : ". Use require([])")))) : (v(), q.nextTick(function() {
						v(), f = s(o(null, t)), f.skipMap = r.skipMap, f.init(i, a, c, {
							enabled: !0
						}), l()
					}), n)
				}
				return r = r || {}, mixin(n, {
					isBrowser: isBrowser,
					toUrl: function(e) {
						var r, n = e.lastIndexOf("."),
							a = e.split("/")[0],
							o = "." === a || ".." === a;
						return -1 !== n && (!o || n > 1) && (r = e.substring(n, e.length), e = e.substring(0, n)), q.nameToUrl(i(e, t && t.id, !0), r, !0)
					},
					defined: function(e) {
						return hasProp(j, o(e, t, !1, !0).id)
					},
					specified: function(e) {
						return e = o(e, t, !1, !0).id, hasProp(j, e) || hasProp(k, e)
					}
				}), t || (n.undef = function(e) {
					p();
					var i = o(e, t, !0),
						r = getOwn(k, e);
					delete j[e], delete P[i.url], delete O[e], r && (r.events.defined && (O[e] = r.events), d(e))
				}), n
			},
			enable: function(e) {
				var t = getOwn(k, e.id);
				t && s(e).enable()
			},
			completeLoad: function(e) {
				var t, i, r, a = getOwn(y.shim, e) || {},
					o = a.exports;
				for (p(); M.length;) {
					if (i = M.shift(), null === i[0]) {
						if (i[0] = e, t) break;
						t = !0
					} else i[0] === e && (t = !0);
					h(i)
				}
				if (r = getOwn(k, e), !t && !hasProp(j, e) && r && !r.inited) {
					if (!(!y.enforceDefine || o && getGlobal(o))) return n(e) ? void 0 : u(makeError("nodefine", "No define call for " + e, null, [e]));
					h([e, a.deps || [], a.exportsFn])
				}
				l()
			},
			nameToUrl: function(e, t, i) {
				var r, n, a, o, s, c, u, p, d;
				if (req.jsExtRegExp.test(e)) p = e + (t || "");
				else {
					for (r = y.paths, n = y.pkgs, s = e.split("/"), c = s.length; c > 0; c -= 1) {
						if (u = s.slice(0, c).join("/"), a = getOwn(n, u), d = getOwn(r, u)) {
							isArray(d) && (d = d[0]), s.splice(0, c, d);
							break
						}
						if (a) {
							o = e === a.name ? a.location + "/" + a.main : a.location, s.splice(0, c, o);
							break
						}
					}
					p = s.join("/"), p += t || (/\?/.test(p) || i ? "" : ".js"), p = ("/" === p.charAt(0) || p.match(/^[\w\+\.\-]+:/) ? "" : y.baseUrl) + p
				}
				return y.urlArgs ? p + ((-1 === p.indexOf("?") ? "?" : "&") + y.urlArgs) : p
			},
			load: function(e, t) {
				req.load(q, e, t)
			},
			execCb: function(e, t, i, r) {
				return t.apply(r, i)
			},
			onScriptLoad: function(e) {
				if ("load" === e.type || readyRegExp.test((e.currentTarget || e.srcElement).readyState)) {
					interactiveScript = null;
					var t = g(e);
					q.completeLoad(t.id)
				}
			},
			onScriptError: function(e) {
				var t = g(e);
				return n(t.id) ? void 0 : u(makeError("scripterror", "Script error for: " + t.id, e, [t.id]))
			}
		}, q.require = q.makeRequire(), q
	}
	function getInteractiveScript() {
		return interactiveScript && "interactive" === interactiveScript.readyState ? interactiveScript : (eachReverse(scripts(), function(e) {
			return "interactive" === e.readyState ? interactiveScript = e : void 0
		}), interactiveScript)
	}
	var req, s, head, baseElement, dataMain, src, interactiveScript, currentlyAddingScript, mainScript, subPath, version = "2.1.8",
		commentRegExp = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,
		cjsRequireRegExp = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,
		jsSuffixRegExp = /\.js$/,
		currDirRegExp = /^\.\//,
		op = Object.prototype,
		ostring = op.toString,
		hasOwn = op.hasOwnProperty,
		ap = Array.prototype,
		apsp = ap.splice,
		isBrowser = !("undefined" == typeof window || !navigator || !window.document),
		isWebWorker = !isBrowser && "undefined" != typeof importScripts,
		readyRegExp = isBrowser && "PLAYSTATION 3" === navigator.platform ? /^complete$/ : /^(complete|loaded)$/,
		defContextName = "_",
		isOpera = "undefined" != typeof opera && "[object Opera]" === opera.toString(),
		contexts = {},
		cfg = {},
		globalDefQueue = [],
		useInteractive = !1;
	if ("undefined" == typeof define) {
		if ("undefined" != typeof requirejs) {
			if (isFunction(requirejs)) return;
			cfg = requirejs, requirejs = void 0
		}
		"undefined" == typeof require || isFunction(require) || (cfg = require, require = void 0), req = requirejs = function(e, t, i, r) {
			var n, a, o = defContextName;
			return isArray(e) || "string" == typeof e || (a = e, isArray(t) ? (e = t, t = i, i = r) : e = []), a && a.context && (o = a.context), n = getOwn(contexts, o), n || (n = contexts[o] = req.s.newContext(o)), a && n.configure(a), n.require(e, t, i)
		}, req.config = function(e) {
			return req(e)
		}, req.nextTick = "undefined" != typeof setTimeout ?
		function(e) {
			setTimeout(e, 4)
		} : function(e) {
			e()
		}, require || (require = req), req.version = version, req.jsExtRegExp = /^\/|:|\?|\.js$/, req.isBrowser = isBrowser, s = req.s = {
			contexts: contexts,
			newContext: newContext
		}, req({}), each(["toUrl", "undef", "defined", "specified"], function(e) {
			req[e] = function() {
				var t = contexts[defContextName];
				return t.require[e].apply(t, arguments)
			}
		}), isBrowser && (head = s.head = document.getElementsByTagName("head")[0], baseElement = document.getElementsByTagName("base")[0], baseElement && (head = s.head = baseElement.parentNode)), req.onError = defaultOnError, req.createNode = function(e) {
			var t = e.xhtml ? document.createElementNS("http://www.w3.org/1999/xhtml", "html:script") : document.createElement("script");
			return t.type = e.scriptType || "text/javascript", t.charset = "utf-8", t.async = !0, t
		}, req.load = function(e, t, i) {
			var r, n = e && e.config || {};
			if (isBrowser) return r = req.createNode(n, t, i), r.setAttribute("data-requirecontext", e.contextName), r.setAttribute("data-requiremodule", t), !r.attachEvent || r.attachEvent.toString && r.attachEvent.toString().indexOf("[native code") < 0 || isOpera ? (r.addEventListener("load", e.onScriptLoad, !1), r.addEventListener("error", e.onScriptError, !1)) : (useInteractive = !0, r.attachEvent("onreadystatechange", e.onScriptLoad)), r.src = i, currentlyAddingScript = r, baseElement ? head.insertBefore(r, baseElement) : head.appendChild(r), currentlyAddingScript = null, r;
			if (isWebWorker) try {
				importScripts(i), e.completeLoad(t)
			} catch (a) {
				e.onError(makeError("importscripts", "importScripts failed for " + t + " at " + i, a, [t]))
			}
		}, isBrowser && eachReverse(scripts(), function(e) {
			return head || (head = e.parentNode), dataMain = e.getAttribute("data-main"), dataMain ? (mainScript = dataMain, cfg.baseUrl || (src = mainScript.split("/"), mainScript = src.pop(), subPath = src.length ? src.join("/") + "/" : "./", cfg.baseUrl = subPath), mainScript = mainScript.replace(jsSuffixRegExp, ""), req.jsExtRegExp.test(mainScript) && (mainScript = dataMain), cfg.deps = cfg.deps ? cfg.deps.concat(mainScript) : [mainScript], !0) : void 0
		}), define = function(e, t, i) {
			var r, n;
			"string" != typeof e && (i = t, t = e, e = null), isArray(t) || (i = t, t = null), !t && isFunction(i) && (t = [], i.length && (i.toString().replace(commentRegExp, "").replace(cjsRequireRegExp, function(e, i) {
				t.push(i)
			}), t = (1 === i.length ? ["require"] : ["require", "exports", "module"]).concat(t))), useInteractive && (r = currentlyAddingScript || getInteractiveScript(), r && (e || (e = r.getAttribute("data-requiremodule")), n = contexts[r.getAttribute("data-requirecontext")])), (n ? n.defQueue : globalDefQueue).push([e, t, i])
		}, define.amd = {
			jQuery: !0
		}, req.exec = function(text) {
			return eval(text)
		}, req(cfg)
	}
}(this);
!
function(e, t) {
	function n(e) {
		var t = e.length,
			n = ut.type(e);
		return ut.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
	}
	function r(e) {
		var t = kt[e] = {};
		return ut.each(e.match(dt) || [], function(e, n) {
			t[n] = !0
		}), t
	}
	function i(e, n, r, i) {
		if (ut.acceptData(e)) {
			var o, s, a = ut.expando,
				l = e.nodeType,
				c = l ? ut.cache : e,
				u = l ? e[a] : e[a] && a;
			if (u && c[u] && (i || c[u].data) || r !== t || "string" != typeof n) return u || (u = l ? e[a] = tt.pop() || ut.guid++ : a), c[u] || (c[u] = l ? {} : {
				toJSON: ut.noop
			}), ("object" == typeof n || "function" == typeof n) && (i ? c[u] = ut.extend(c[u], n) : c[u].data = ut.extend(c[u].data, n)), s = c[u], i || (s.data || (s.data = {}), s = s.data), r !== t && (s[ut.camelCase(n)] = r), "string" == typeof n ? (o = s[n], null == o && (o = s[ut.camelCase(n)])) : o = s, o
		}
	}
	function o(e, t, n) {
		if (ut.acceptData(e)) {
			var r, i, o = e.nodeType,
				s = o ? ut.cache : e,
				l = o ? e[ut.expando] : ut.expando;
			if (s[l]) {
				if (t && (r = n ? s[l] : s[l].data)) {
					ut.isArray(t) ? t = t.concat(ut.map(t, ut.camelCase)) : t in r ? t = [t] : (t = ut.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
					for (; i--;) delete r[t[i]];
					if (n ? !a(r) : !ut.isEmptyObject(r)) return
				}(n || (delete s[l].data, a(s[l]))) && (o ? ut.cleanData([e], !0) : ut.support.deleteExpando || s != s.window ? delete s[l] : s[l] = null)
			}
		}
	}
	function s(e, n, r) {
		if (r === t && 1 === e.nodeType) {
			var i = "data-" + n.replace(Nt, "-$1").toLowerCase();
			if (r = e.getAttribute(i), "string" == typeof r) {
				try {
					r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : Et.test(r) ? ut.parseJSON(r) : r
				} catch (o) {}
				ut.data(e, n, r)
			} else r = t
		}
		return r
	}
	function a(e) {
		var t;
		for (t in e) if (("data" !== t || !ut.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
		return !0
	}
	function l() {
		return !0
	}
	function c() {
		return !1
	}
	function u() {
		try {
			return Y.activeElement
		} catch (e) {}
	}
	function p(e, t) {
		do e = e[t];
		while (e && 1 !== e.nodeType);
		return e
	}
	function d(e, t, n) {
		if (ut.isFunction(t)) return ut.grep(e, function(e, r) {
			return !!t.call(e, r, e) !== n
		});
		if (t.nodeType) return ut.grep(e, function(e) {
			return e === t !== n
		});
		if ("string" == typeof t) {
			if (Wt.test(t)) return ut.filter(t, e, n);
			t = ut.filter(t, e)
		}
		return ut.grep(e, function(e) {
			return ut.inArray(e, t) >= 0 !== n
		})
	}
	function f(e) {
		var t = Ut.split("|"),
			n = e.createDocumentFragment();
		if (n.createElement) for (; t.length;) n.createElement(t.pop());
		return n
	}
	function h(e, t) {
		return ut.nodeName(e, "table") && ut.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
	}
	function m(e) {
		return e.type = (null !== ut.find.attr(e, "type")) + "/" + e.type, e
	}
	function g(e) {
		var t = on.exec(e.type);
		return t ? e.type = t[1] : e.removeAttribute("type"), e
	}
	function v(e, t) {
		for (var n, r = 0; null != (n = e[r]); r++) ut._data(n, "globalEval", !t || ut._data(t[r], "globalEval"))
	}
	function y(e, t) {
		if (1 === t.nodeType && ut.hasData(e)) {
			var n, r, i, o = ut._data(e),
				s = ut._data(t, o),
				a = o.events;
			if (a) {
				delete s.handle, s.events = {};
				for (n in a) for (r = 0, i = a[n].length; i > r; r++) ut.event.add(t, n, a[n][r])
			}
			s.data && (s.data = ut.extend({}, s.data))
		}
	}
	function b(e, t) {
		var n, r, i;
		if (1 === t.nodeType) {
			if (n = t.nodeName.toLowerCase(), !ut.support.noCloneEvent && t[ut.expando]) {
				i = ut._data(t);
				for (r in i.events) ut.removeEvent(t, r, i.handle);
				t.removeAttribute(ut.expando)
			}
			"script" === n && t.text !== e.text ? (m(t).text = e.text, g(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ut.support.html5Clone && e.innerHTML && !ut.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && tn.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
		}
	}
	function x(e, n) {
		var r, i, o = 0,
			s = typeof e.getElementsByTagName !== G ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== G ? e.querySelectorAll(n || "*") : t;
		if (!s) for (s = [], r = e.childNodes || e; null != (i = r[o]); o++)!n || ut.nodeName(i, n) ? s.push(i) : ut.merge(s, x(i, n));
		return n === t || n && ut.nodeName(e, n) ? ut.merge([e], s) : s
	}
	function w(e) {
		tn.test(e.type) && (e.defaultChecked = e.checked)
	}
	function C(e, t) {
		if (t in e) return t;
		for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = kn.length; i--;) if (t = kn[i] + n, t in e) return t;
		return r
	}
	function T(e, t) {
		return e = t || e, "none" === ut.css(e, "display") || !ut.contains(e.ownerDocument, e)
	}
	function S(e, t) {
		for (var n, r, i, o = [], s = 0, a = e.length; a > s; s++) r = e[s], r.style && (o[s] = ut._data(r, "olddisplay"), n = r.style.display, t ? (o[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && T(r) && (o[s] = ut._data(r, "olddisplay", A(r.nodeName)))) : o[s] || (i = T(r), (n && "none" !== n || !i) && ut._data(r, "olddisplay", i ? n : ut.css(r, "display"))));
		for (s = 0; a > s; s++) r = e[s], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[s] || "" : "none"));
		return e
	}
	function k(e, t, n) {
		var r = yn.exec(t);
		return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
	}
	function E(e, t, n, r, i) {
		for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > o; o += 2)"margin" === n && (s += ut.css(e, n + Sn[o], !0, i)), r ? ("content" === n && (s -= ut.css(e, "padding" + Sn[o], !0, i)), "margin" !== n && (s -= ut.css(e, "border" + Sn[o] + "Width", !0, i))) : (s += ut.css(e, "padding" + Sn[o], !0, i), "padding" !== n && (s += ut.css(e, "border" + Sn[o] + "Width", !0, i)));
		return s
	}
	function N(e, t, n) {
		var r = !0,
			i = "width" === t ? e.offsetWidth : e.offsetHeight,
			o = pn(e),
			s = ut.support.boxSizing && "border-box" === ut.css(e, "boxSizing", !1, o);
		if (0 >= i || null == i) {
			if (i = dn(e, t, o), (0 > i || null == i) && (i = e.style[t]), bn.test(i)) return i;
			r = s && (ut.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
		}
		return i + E(e, t, n || (s ? "border" : "content"), r, o) + "px"
	}
	function A(e) {
		var t = Y,
			n = wn[e];
		return n || (n = j(e, t), "none" !== n && n || (un = (un || ut("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (un[0].contentWindow || un[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = j(e, t), un.detach()), wn[e] = n), n
	}
	function j(e, t) {
		var n = ut(t.createElement(e)).appendTo(t.body),
			r = ut.css(n[0], "display");
		return n.remove(), r
	}
	function D(e, t, n, r) {
		var i;
		if (ut.isArray(t)) ut.each(t, function(t, i) {
			n || Nn.test(e) ? r(e, i) : D(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
		});
		else if (n || "object" !== ut.type(t)) r(e, t);
		else for (i in t) D(e + "[" + i + "]", t[i], n, r)
	}
	function L(e) {
		return function(t, n) {
			"string" != typeof t && (n = t, t = "*");
			var r, i = 0,
				o = t.toLowerCase().match(dt) || [];
			if (ut.isFunction(n)) for (; r = o[i++];)"+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
		}
	}
	function P(e, t, n, r) {
		function i(a) {
			var l;
			return o[a] = !0, ut.each(e[a] || [], function(e, a) {
				var c = a(t, n, r);
				return "string" != typeof c || s || o[c] ? s ? !(l = c) : void 0 : (t.dataTypes.unshift(c), i(c), !1)
			}), l
		}
		var o = {},
			s = e === $n;
		return i(t.dataTypes[0]) || !o["*"] && i("*")
	}
	function H(e, n) {
		var r, i, o = ut.ajaxSettings.flatOptions || {};
		for (i in n) n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
		return r && ut.extend(!0, e, r), e
	}
	function q(e, n, r) {
		for (var i, o, s, a, l = e.contents, c = e.dataTypes;
		"*" === c[0];) c.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
		if (o) for (a in l) if (l[a] && l[a].test(o)) {
			c.unshift(a);
			break
		}
		if (c[0] in r) s = c[0];
		else {
			for (a in r) {
				if (!c[0] || e.converters[a + " " + c[0]]) {
					s = a;
					break
				}
				i || (i = a)
			}
			s = s || i
		}
		return s ? (s !== c[0] && c.unshift(s), r[s]) : void 0
	}
	function R(e, t, n, r) {
		var i, o, s, a, l, c = {},
			u = e.dataTypes.slice();
		if (u[1]) for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
		for (o = u.shift(); o;) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift()) if ("*" === o) o = l;
		else if ("*" !== l && l !== o) {
			if (s = c[l + " " + o] || c["* " + o], !s) for (i in c) if (a = i.split(" "), a[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
				s === !0 ? s = c[i] : c[i] !== !0 && (o = a[0], u.unshift(a[1]));
				break
			}
			if (s !== !0) if (s && e["throws"]) t = s(t);
			else try {
				t = s(t)
			} catch (p) {
				return {
					state: "parsererror",
					error: s ? p : "No conversion from " + l + " to " + o
				}
			}
		}
		return {
			state: "success",
			data: t
		}
	}
	function O() {
		try {
			return new e.XMLHttpRequest
		} catch (t) {}
	}
	function B() {
		try {
			return new e.ActiveXObject("Microsoft.XMLHTTP")
		} catch (t) {}
	}
	function F() {
		return setTimeout(function() {
			Zn = t
		}), Zn = ut.now()
	}
	function M(e, t, n) {
		for (var r, i = (or[t] || []).concat(or["*"]), o = 0, s = i.length; s > o; o++) if (r = i[o].call(n, t, e)) return r
	}
	function _(e, t, n) {
		var r, i, o = 0,
			s = ir.length,
			a = ut.Deferred().always(function() {
				delete l.elem
			}),
			l = function() {
				if (i) return !1;
				for (var t = Zn || F(), n = Math.max(0, c.startTime + c.duration - t), r = n / c.duration || 0, o = 1 - r, s = 0, l = c.tweens.length; l > s; s++) c.tweens[s].run(o);
				return a.notifyWith(e, [c, o, n]), 1 > o && l ? n : (a.resolveWith(e, [c]), !1)
			},
			c = a.promise({
				elem: e,
				props: ut.extend({}, t),
				opts: ut.extend(!0, {
					specialEasing: {}
				}, n),
				originalProperties: t,
				originalOptions: n,
				startTime: Zn || F(),
				duration: n.duration,
				tweens: [],
				createTween: function(t, n) {
					var r = ut.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
					return c.tweens.push(r), r
				},
				stop: function(t) {
					var n = 0,
						r = t ? c.tweens.length : 0;
					if (i) return this;
					for (i = !0; r > n; n++) c.tweens[n].run(1);
					return t ? a.resolveWith(e, [c, t]) : a.rejectWith(e, [c, t]), this
				}
			}),
			u = c.props;
		for (I(u, c.opts.specialEasing); s > o; o++) if (r = ir[o].call(c, e, u, c.opts)) return r;
		return ut.map(u, M, c), ut.isFunction(c.opts.start) && c.opts.start.call(e, c), ut.fx.timer(ut.extend(l, {
			elem: e,
			anim: c,
			queue: c.opts.queue
		})), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
	}
	function I(e, t) {
		var n, r, i, o, s;
		for (n in e) if (r = ut.camelCase(n), i = t[r], o = e[n], ut.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), s = ut.cssHooks[r], s && "expand" in s) {
			o = s.expand(o), delete e[r];
			for (n in o) n in e || (e[n] = o[n], t[n] = i)
		} else t[r] = i
	}
	function W(e, t, n) {
		var r, i, o, s, a, l, c = this,
			u = {},
			p = e.style,
			d = e.nodeType && T(e),
			f = ut._data(e, "fxshow");
		n.queue || (a = ut._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
			a.unqueued || l()
		}), a.unqueued++, c.always(function() {
			c.always(function() {
				a.unqueued--, ut.queue(e, "fx").length || a.empty.fire()
			})
		})), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === ut.css(e, "display") && "none" === ut.css(e, "float") && (ut.support.inlineBlockNeedsLayout && "inline" !== A(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", ut.support.shrinkWrapBlocks || c.always(function() {
			p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
		}));
		for (r in t) if (i = t[r], tr.exec(i)) {
			if (delete t[r], o = o || "toggle" === i, i === (d ? "hide" : "show")) continue;
			u[r] = f && f[r] || ut.style(e, r)
		}
		if (!ut.isEmptyObject(u)) {
			f ? "hidden" in f && (d = f.hidden) : f = ut._data(e, "fxshow", {}), o && (f.hidden = !d), d ? ut(e).show() : c.done(function() {
				ut(e).hide()
			}), c.done(function() {
				var t;
				ut._removeData(e, "fxshow");
				for (t in u) ut.style(e, t, u[t])
			});
			for (r in u) s = M(d ? f[r] : 0, r, c), r in f || (f[r] = s.start, d && (s.end = s.start, s.start = "width" === r || "height" === r ? 1 : 0))
		}
	}
	function X(e, t, n, r, i) {
		return new X.prototype.init(e, t, n, r, i)
	}
	function $(e, t) {
		var n, r = {
			height: e
		},
			i = 0;
		for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Sn[i], r["margin" + n] = r["padding" + n] = e;
		return t && (r.opacity = r.width = e), r
	}
	function z(e) {
		return ut.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
	}
	var U, V, G = typeof t,
		K = e.location,
		Y = e.document,
		Q = Y.documentElement,
		J = e.jQuery,
		Z = e.$,
		et = {},
		tt = [],
		nt = "1.10.2",
		rt = tt.concat,
		it = tt.push,
		ot = tt.slice,
		st = tt.indexOf,
		at = et.toString,
		lt = et.hasOwnProperty,
		ct = nt.trim,
		ut = function(e, t) {
			return new ut.fn.init(e, t, V)
		},
		pt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		dt = /\S+/g,
		ft = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		ht = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
		mt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		gt = /^[\],:{}\s]*$/,
		vt = /(?:^|:|,)(?:\s*\[)+/g,
		yt = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
		bt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
		xt = /^-ms-/,
		wt = /-([\da-z])/gi,
		Ct = function(e, t) {
			return t.toUpperCase()
		},
		Tt = function(e) {
			(Y.addEventListener || "load" === e.type || "complete" === Y.readyState) && (St(), ut.ready())
		},
		St = function() {
			Y.addEventListener ? (Y.removeEventListener("DOMContentLoaded", Tt, !1), e.removeEventListener("load", Tt, !1)) : (Y.detachEvent("onreadystatechange", Tt), e.detachEvent("onload", Tt))
		};
	ut.fn = ut.prototype = {
		jquery: nt,
		constructor: ut,
		init: function(e, n, r) {
			var i, o;
			if (!e) return this;
			if ("string" == typeof e) {
				if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : ht.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
				if (i[1]) {
					if (n = n instanceof ut ? n[0] : n, ut.merge(this, ut.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : Y, !0)), mt.test(i[1]) && ut.isPlainObject(n)) for (i in n) ut.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
					return this
				}
				if (o = Y.getElementById(i[2]), o && o.parentNode) {
					if (o.id !== i[2]) return r.find(e);
					this.length = 1, this[0] = o
				}
				return this.context = Y, this.selector = e, this
			}
			return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ut.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), ut.makeArray(e, this))
		},
		selector: "",
		length: 0,
		toArray: function() {
			return ot.call(this)
		},
		get: function(e) {
			return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
		},
		pushStack: function(e) {
			var t = ut.merge(this.constructor(), e);
			return t.prevObject = this, t.context = this.context, t
		},
		each: function(e, t) {
			return ut.each(this, e, t)
		},
		ready: function(e) {
			return ut.ready.promise().done(e), this
		},
		slice: function() {
			return this.pushStack(ot.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		eq: function(e) {
			var t = this.length,
				n = +e + (0 > e ? t : 0);
			return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
		},
		map: function(e) {
			return this.pushStack(ut.map(this, function(t, n) {
				return e.call(t, n, t)
			}))
		},
		end: function() {
			return this.prevObject || this.constructor(null)
		},
		push: it,
		sort: [].sort,
		splice: [].splice
	}, ut.fn.init.prototype = ut.fn, ut.extend = ut.fn.extend = function() {
		var e, n, r, i, o, s, a = arguments[0] || {},
			l = 1,
			c = arguments.length,
			u = !1;
		for ("boolean" == typeof a && (u = a, a = arguments[1] || {}, l = 2), "object" == typeof a || ut.isFunction(a) || (a = {}), c === l && (a = this, --l); c > l; l++) if (null != (o = arguments[l])) for (i in o) e = a[i], r = o[i], a !== r && (u && r && (ut.isPlainObject(r) || (n = ut.isArray(r))) ? (n ? (n = !1, s = e && ut.isArray(e) ? e : []) : s = e && ut.isPlainObject(e) ? e : {}, a[i] = ut.extend(u, s, r)) : r !== t && (a[i] = r));
		return a
	}, ut.extend({
		expando: "jQuery" + (nt + Math.random()).replace(/\D/g, ""),
		noConflict: function(t) {
			return e.$ === ut && (e.$ = Z), t && e.jQuery === ut && (e.jQuery = J), ut
		},
		isReady: !1,
		readyWait: 1,
		holdReady: function(e) {
			e ? ut.readyWait++ : ut.ready(!0)
		},
		ready: function(e) {
			if (e === !0 ? !--ut.readyWait : !ut.isReady) {
				if (!Y.body) return setTimeout(ut.ready);
				ut.isReady = !0, e !== !0 && --ut.readyWait > 0 || (U.resolveWith(Y, [ut]), ut.fn.trigger && ut(Y).trigger("ready").off("ready"))
			}
		},
		isFunction: function(e) {
			return "function" === ut.type(e)
		},
		isArray: Array.isArray ||
		function(e) {
			return "array" === ut.type(e)
		},
		isWindow: function(e) {
			return null != e && e == e.window
		},
		isNumeric: function(e) {
			return !isNaN(parseFloat(e)) && isFinite(e)
		},
		type: function(e) {
			return null == e ? String(e) : "object" == typeof e || "function" == typeof e ? et[at.call(e)] || "object" : typeof e
		},
		isPlainObject: function(e) {
			var n;
			if (!e || "object" !== ut.type(e) || e.nodeType || ut.isWindow(e)) return !1;
			try {
				if (e.constructor && !lt.call(e, "constructor") && !lt.call(e.constructor.prototype, "isPrototypeOf")) return !1
			} catch (r) {
				return !1
			}
			if (ut.support.ownLast) for (n in e) return lt.call(e, n);
			for (n in e);
			return n === t || lt.call(e, n)
		},
		isEmptyObject: function(e) {
			var t;
			for (t in e) return !1;
			return !0
		},
		error: function(e) {
			throw new Error(e)
		},
		parseHTML: function(e, t, n) {
			if (!e || "string" != typeof e) return null;
			"boolean" == typeof t && (n = t, t = !1), t = t || Y;
			var r = mt.exec(e),
				i = !n && [];
			return r ? [t.createElement(r[1])] : (r = ut.buildFragment([e], t, i), i && ut(i).remove(), ut.merge([], r.childNodes))
		},
		parseJSON: function(t) {
			return e.JSON && e.JSON.parse ? e.JSON.parse(t) : null === t ? t : "string" == typeof t && (t = ut.trim(t), t && gt.test(t.replace(yt, "@").replace(bt, "]").replace(vt, ""))) ? new Function("return " + t)() : (ut.error("Invalid JSON: " + t), void 0)
		},
		parseXML: function(n) {
			var r, i;
			if (!n || "string" != typeof n) return null;
			try {
				e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
			} catch (o) {
				r = t
			}
			return r && r.documentElement && !r.getElementsByTagName("parsererror").length || ut.error("Invalid XML: " + n), r
		},
		noop: function() {},
		globalEval: function(t) {
			t && ut.trim(t) && (e.execScript ||
			function(t) {
				e.eval.call(e, t)
			})(t)
		},
		camelCase: function(e) {
			return e.replace(xt, "ms-").replace(wt, Ct)
		},
		nodeName: function(e, t) {
			return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
		},
		each: function(e, t, r) {
			var i, o = 0,
				s = e.length,
				a = n(e);
			if (r) {
				if (a) for (; s > o && (i = t.apply(e[o], r), i !== !1); o++);
				else for (o in e) if (i = t.apply(e[o], r), i === !1) break
			} else if (a) for (; s > o && (i = t.call(e[o], o, e[o]), i !== !1); o++);
			else for (o in e) if (i = t.call(e[o], o, e[o]), i === !1) break;
			return e
		},
		trim: ct && !ct.call("﻿ ") ?
		function(e) {
			return null == e ? "" : ct.call(e)
		} : function(e) {
			return null == e ? "" : (e + "").replace(ft, "")
		},
		makeArray: function(e, t) {
			var r = t || [];
			return null != e && (n(Object(e)) ? ut.merge(r, "string" == typeof e ? [e] : e) : it.call(r, e)), r
		},
		inArray: function(e, t, n) {
			var r;
			if (t) {
				if (st) return st.call(t, e, n);
				for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++) if (n in t && t[n] === e) return n
			}
			return -1
		},
		merge: function(e, n) {
			var r = n.length,
				i = e.length,
				o = 0;
			if ("number" == typeof r) for (; r > o; o++) e[i++] = n[o];
			else for (; n[o] !== t;) e[i++] = n[o++];
			return e.length = i, e
		},
		grep: function(e, t, n) {
			var r, i = [],
				o = 0,
				s = e.length;
			for (n = !! n; s > o; o++) r = !! t(e[o], o), n !== r && i.push(e[o]);
			return i
		},
		map: function(e, t, r) {
			var i, o = 0,
				s = e.length,
				a = n(e),
				l = [];
			if (a) for (; s > o; o++) i = t(e[o], o, r), null != i && (l[l.length] = i);
			else for (o in e) i = t(e[o], o, r), null != i && (l[l.length] = i);
			return rt.apply([], l)
		},
		guid: 1,
		proxy: function(e, n) {
			var r, i, o;
			return "string" == typeof n && (o = e[n], n = e, e = o), ut.isFunction(e) ? (r = ot.call(arguments, 2), i = function() {
				return e.apply(n || this, r.concat(ot.call(arguments)))
			}, i.guid = e.guid = e.guid || ut.guid++, i) : t
		},
		access: function(e, n, r, i, o, s, a) {
			var l = 0,
				c = e.length,
				u = null == r;
			if ("object" === ut.type(r)) {
				o = !0;
				for (l in r) ut.access(e, n, l, r[l], !0, s, a)
			} else if (i !== t && (o = !0, ut.isFunction(i) || (a = !0), u && (a ? (n.call(e, i), n = null) : (u = n, n = function(e, t, n) {
				return u.call(ut(e), n)
			})), n)) for (; c > l; l++) n(e[l], r, a ? i : i.call(e[l], l, n(e[l], r)));
			return o ? e : u ? n.call(e) : c ? n(e[0], r) : s
		},
		now: function() {
			return (new Date).getTime()
		},
		swap: function(e, t, n, r) {
			var i, o, s = {};
			for (o in t) s[o] = e.style[o], e.style[o] = t[o];
			i = n.apply(e, r || []);
			for (o in t) e.style[o] = s[o];
			return i
		}
	}), ut.ready.promise = function(t) {
		if (!U) if (U = ut.Deferred(), "complete" === Y.readyState) setTimeout(ut.ready);
		else if (Y.addEventListener) Y.addEventListener("DOMContentLoaded", Tt, !1), e.addEventListener("load", Tt, !1);
		else {
			Y.attachEvent("onreadystatechange", Tt), e.attachEvent("onload", Tt);
			var n = !1;
			try {
				n = null == e.frameElement && Y.documentElement
			} catch (r) {}
			n && n.doScroll && !
			function i() {
				if (!ut.isReady) {
					try {
						n.doScroll("left")
					} catch (e) {
						return setTimeout(i, 50)
					}
					St(), ut.ready()
				}
			}()
		}
		return U.promise(t)
	}, ut.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
		et["[object " + t + "]"] = t.toLowerCase()
	}), V = ut(Y), function(e, t) {
		function n(e, t, n, r) {
			var i, o, s, a, l, c, u, p, h, m;
			if ((t ? t.ownerDocument || t : _) !== P && L(t), t = t || P, n = n || [], !e || "string" != typeof e) return n;
			if (1 !== (a = t.nodeType) && 9 !== a) return [];
			if (q && !r) {
				if (i = bt.exec(e)) if (s = i[1]) {
					if (9 === a) {
						if (o = t.getElementById(s), !o || !o.parentNode) return n;
						if (o.id === s) return n.push(o), n
					} else if (t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && F(t, o) && o.id === s) return n.push(o), n
				} else {
					if (i[2]) return et.apply(n, t.getElementsByTagName(e)), n;
					if ((s = i[3]) && T.getElementsByClassName && t.getElementsByClassName) return et.apply(n, t.getElementsByClassName(s)), n
				}
				if (T.qsa && (!R || !R.test(e))) {
					if (p = u = M, h = t, m = 9 === a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
						for (c = d(e), (u = t.getAttribute("id")) ? p = u.replace(Ct, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", l = c.length; l--;) c[l] = p + f(c[l]);
						h = ft.test(e) && t.parentNode || t, m = c.join(",")
					}
					if (m) try {
						return et.apply(n, h.querySelectorAll(m)), n
					} catch (g) {} finally {
						u || t.removeAttribute("id")
					}
				}
			}
			return w(e.replace(ct, "$1"), t, n, r)
		}
		function r() {
			function e(n, r) {
				return t.push(n += " ") > k.cacheLength && delete e[t.shift()], e[n] = r
			}
			var t = [];
			return e
		}
		function i(e) {
			return e[M] = !0, e
		}
		function o(e) {
			var t = P.createElement("div");
			try {
				return !!e(t)
			} catch (n) {
				return !1
			} finally {
				t.parentNode && t.parentNode.removeChild(t), t = null
			}
		}
		function s(e, t) {
			for (var n = e.split("|"), r = e.length; r--;) k.attrHandle[n[r]] = t
		}
		function a(e, t) {
			var n = t && e,
				r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || K) - (~e.sourceIndex || K);
			if (r) return r;
			if (n) for (; n = n.nextSibling;) if (n === t) return -1;
			return e ? 1 : -1
		}
		function l(e) {
			return function(t) {
				var n = t.nodeName.toLowerCase();
				return "input" === n && t.type === e
			}
		}
		function c(e) {
			return function(t) {
				var n = t.nodeName.toLowerCase();
				return ("input" === n || "button" === n) && t.type === e
			}
		}
		function u(e) {
			return i(function(t) {
				return t = +t, i(function(n, r) {
					for (var i, o = e([], n.length, t), s = o.length; s--;) n[i = o[s]] && (n[i] = !(r[i] = n[i]))
				})
			})
		}
		function p() {}
		function d(e, t) {
			var r, i, o, s, a, l, c, u = $[e + " "];
			if (u) return t ? 0 : u.slice(0);
			for (a = e, l = [], c = k.preFilter; a;) {
				(!r || (i = pt.exec(a))) && (i && (a = a.slice(i[0].length) || a), l.push(o = [])), r = !1, (i = dt.exec(a)) && (r = i.shift(), o.push({
					value: r,
					type: i[0].replace(ct, " ")
				}), a = a.slice(r.length));
				for (s in k.filter)!(i = vt[s].exec(a)) || c[s] && !(i = c[s](i)) || (r = i.shift(), o.push({
					value: r,
					type: s,
					matches: i
				}), a = a.slice(r.length));
				if (!r) break
			}
			return t ? a.length : a ? n.error(e) : $(e, l).slice(0)
		}
		function f(e) {
			for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
			return r
		}
		function h(e, t, n) {
			var r = t.dir,
				i = n && "parentNode" === r,
				o = W++;
			return t.first ?
			function(t, n, o) {
				for (; t = t[r];) if (1 === t.nodeType || i) return e(t, n, o)
			} : function(t, n, s) {
				var a, l, c, u = I + " " + o;
				if (s) {
					for (; t = t[r];) if ((1 === t.nodeType || i) && e(t, n, s)) return !0
				} else for (; t = t[r];) if (1 === t.nodeType || i) if (c = t[M] || (t[M] = {}), (l = c[r]) && l[0] === u) {
					if ((a = l[1]) === !0 || a === S) return a === !0
				} else if (l = c[r] = [u], l[1] = e(t, n, s) || S, l[1] === !0) return !0
			}
		}
		function m(e) {
			return e.length > 1 ?
			function(t, n, r) {
				for (var i = e.length; i--;) if (!e[i](t, n, r)) return !1;
				return !0
			} : e[0]
		}
		function g(e, t, n, r, i) {
			for (var o, s = [], a = 0, l = e.length, c = null != t; l > a; a++)(o = e[a]) && (!n || n(o, r, i)) && (s.push(o), c && t.push(a));
			return s
		}
		function v(e, t, n, r, o, s) {
			return r && !r[M] && (r = v(r)), o && !o[M] && (o = v(o, s)), i(function(i, s, a, l) {
				var c, u, p, d = [],
					f = [],
					h = s.length,
					m = i || x(t || "*", a.nodeType ? [a] : a, []),
					v = !e || !i && t ? m : g(m, d, e, a, l),
					y = n ? o || (i ? e : h || r) ? [] : s : v;
				if (n && n(v, y, a, l), r) for (c = g(y, f), r(c, [], a, l), u = c.length; u--;)(p = c[u]) && (y[f[u]] = !(v[f[u]] = p));
				if (i) {
					if (o || e) {
						if (o) {
							for (c = [], u = y.length; u--;)(p = y[u]) && c.push(v[u] = p);
							o(null, y = [], c, l)
						}
						for (u = y.length; u--;)(p = y[u]) && (c = o ? nt.call(i, p) : d[u]) > -1 && (i[c] = !(s[c] = p))
					}
				} else y = g(y === s ? y.splice(h, y.length) : y), o ? o(null, s, y, l) : et.apply(s, y)
			})
		}
		function y(e) {
			for (var t, n, r, i = e.length, o = k.relative[e[0].type], s = o || k.relative[" "], a = o ? 1 : 0, l = h(function(e) {
				return e === t
			}, s, !0), c = h(function(e) {
				return nt.call(t, e) > -1
			}, s, !0), u = [function(e, n, r) {
				return !o && (r || n !== j) || ((t = n).nodeType ? l(e, n, r) : c(e, n, r))
			}]; i > a; a++) if (n = k.relative[e[a].type]) u = [h(m(u), n)];
			else {
				if (n = k.filter[e[a].type].apply(null, e[a].matches), n[M]) {
					for (r = ++a; i > r && !k.relative[e[r].type]; r++);
					return v(a > 1 && m(u), a > 1 && f(e.slice(0, a - 1).concat({
						value: " " === e[a - 2].type ? "*" : ""
					})).replace(ct, "$1"), n, r > a && y(e.slice(a, r)), i > r && y(e = e.slice(r)), i > r && f(e))
				}
				u.push(n)
			}
			return m(u)
		}
		function b(e, t) {
			var r = 0,
				o = t.length > 0,
				s = e.length > 0,
				a = function(i, a, l, c, u) {
					var p, d, f, h = [],
						m = 0,
						v = "0",
						y = i && [],
						b = null != u,
						x = j,
						w = i || s && k.find.TAG("*", u && a.parentNode || a),
						C = I += null == x ? 1 : Math.random() || .1;
					for (b && (j = a !== P && a, S = r); null != (p = w[v]); v++) {
						if (s && p) {
							for (d = 0; f = e[d++];) if (f(p, a, l)) {
								c.push(p);
								break
							}
							b && (I = C, S = ++r)
						}
						o && ((p = !f && p) && m--, i && y.push(p))
					}
					if (m += v, o && v !== m) {
						for (d = 0; f = t[d++];) f(y, h, a, l);
						if (i) {
							if (m > 0) for (; v--;) y[v] || h[v] || (h[v] = J.call(c));
							h = g(h)
						}
						et.apply(c, h), b && !i && h.length > 0 && m + t.length > 1 && n.uniqueSort(c)
					}
					return b && (I = C, j = x), y
				};
			return o ? i(a) : a
		}
		function x(e, t, r) {
			for (var i = 0, o = t.length; o > i; i++) n(e, t[i], r);
			return r
		}
		function w(e, t, n, r) {
			var i, o, s, a, l, c = d(e);
			if (!r && 1 === c.length) {
				if (o = c[0] = c[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && T.getById && 9 === t.nodeType && q && k.relative[o[1].type]) {
					if (t = (k.find.ID(s.matches[0].replace(Tt, St), t) || [])[0], !t) return n;
					e = e.slice(o.shift().value.length)
				}
				for (i = vt.needsContext.test(e) ? 0 : o.length; i-- && (s = o[i], !k.relative[a = s.type]);) if ((l = k.find[a]) && (r = l(s.matches[0].replace(Tt, St), ft.test(o[0].type) && t.parentNode || t))) {
					if (o.splice(i, 1), e = r.length && f(o), !e) return et.apply(n, r), n;
					break
				}
			}
			return A(e, c)(r, t, !q, n, ft.test(e)), n
		}
		var C, T, S, k, E, N, A, j, D, L, P, H, q, R, O, B, F, M = "sizzle" + -new Date,
			_ = e.document,
			I = 0,
			W = 0,
			X = r(),
			$ = r(),
			z = r(),
			U = !1,
			V = function(e, t) {
				return e === t ? (U = !0, 0) : 0
			},
			G = typeof t,
			K = 1 << 31,
			Y = {}.hasOwnProperty,
			Q = [],
			J = Q.pop,
			Z = Q.push,
			et = Q.push,
			tt = Q.slice,
			nt = Q.indexOf ||
		function(e) {
			for (var t = 0, n = this.length; n > t; t++) if (this[t] === e) return t;
			return -1
		}, rt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", it = "[\\x20\\t\\r\\n\\f]", ot = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", st = ot.replace("w", "w#"), at = "\\[" + it + "*(" + ot + ")" + it + "*(?:([*^$|!~]?=)" + it + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + st + ")|)|)" + it + "*\\]", lt = ":(" + ot + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + at.replace(3, 8) + ")*)|.*)\\)|)", ct = new RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$", "g"), pt = new RegExp("^" + it + "*," + it + "*"), dt = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"), ft = new RegExp(it + "*[+~]"), ht = new RegExp("=" + it + "*([^\\]'\"]*)" + it + "*\\]", "g"), mt = new RegExp(lt), gt = new RegExp("^" + st + "$"), vt = {
			ID: new RegExp("^#(" + ot + ")"),
			CLASS: new RegExp("^\\.(" + ot + ")"),
			TAG: new RegExp("^(" + ot.replace("w", "w*") + ")"),
			ATTR: new RegExp("^" + at),
			PSEUDO: new RegExp("^" + lt),
			CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)", "i"),
			bool: new RegExp("^(?:" + rt + ")$", "i"),
			needsContext: new RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)", "i")
		}, yt = /^[^{]+\{\s*\[native \w/, bt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, xt = /^(?:input|select|textarea|button)$/i, wt = /^h\d$/i, Ct = /'|\\/g, Tt = new RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"), St = function(e, t, n) {
			var r = "0x" + t - 65536;
			return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r)
		};
		try {
			et.apply(Q = tt.call(_.childNodes), _.childNodes), Q[_.childNodes.length].nodeType
		} catch (kt) {
			et = {
				apply: Q.length ?
				function(e, t) {
					Z.apply(e, tt.call(t))
				} : function(e, t) {
					for (var n = e.length, r = 0; e[n++] = t[r++];);
					e.length = n - 1
				}
			}
		}
		N = n.isXML = function(e) {
			var t = e && (e.ownerDocument || e).documentElement;
			return t ? "HTML" !== t.nodeName : !1
		}, T = n.support = {}, L = n.setDocument = function(e) {
			var t = e ? e.ownerDocument || e : _,
				n = t.defaultView;
			return t !== P && 9 === t.nodeType && t.documentElement ? (P = t, H = t.documentElement, q = !N(t), n && n.attachEvent && n !== n.top && n.attachEvent("onbeforeunload", function() {
				L()
			}), T.attributes = o(function(e) {
				return e.className = "i", !e.getAttribute("className")
			}), T.getElementsByTagName = o(function(e) {
				return e.appendChild(t.createComment("")), !e.getElementsByTagName("*").length
			}), T.getElementsByClassName = o(function(e) {
				return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
			}), T.getById = o(function(e) {
				return H.appendChild(e).id = M, !t.getElementsByName || !t.getElementsByName(M).length
			}), T.getById ? (k.find.ID = function(e, t) {
				if (typeof t.getElementById !== G && q) {
					var n = t.getElementById(e);
					return n && n.parentNode ? [n] : []
				}
			}, k.filter.ID = function(e) {
				var t = e.replace(Tt, St);
				return function(e) {
					return e.getAttribute("id") === t
				}
			}) : (delete k.find.ID, k.filter.ID = function(e) {
				var t = e.replace(Tt, St);
				return function(e) {
					var n = typeof e.getAttributeNode !== G && e.getAttributeNode("id");
					return n && n.value === t
				}
			}), k.find.TAG = T.getElementsByTagName ?
			function(e, t) {
				return typeof t.getElementsByTagName !== G ? t.getElementsByTagName(e) : void 0
			} : function(e, t) {
				var n, r = [],
					i = 0,
					o = t.getElementsByTagName(e);
				if ("*" === e) {
					for (; n = o[i++];) 1 === n.nodeType && r.push(n);
					return r
				}
				return o
			}, k.find.CLASS = T.getElementsByClassName &&
			function(e, t) {
				return typeof t.getElementsByClassName !== G && q ? t.getElementsByClassName(e) : void 0
			}, O = [], R = [], (T.qsa = yt.test(t.querySelectorAll)) && (o(function(e) {
				e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || R.push("\\[" + it + "*(?:value|" + rt + ")"), e.querySelectorAll(":checked").length || R.push(":checked")
			}), o(function(e) {
				var n = t.createElement("input");
				n.setAttribute("type", "hidden"), e.appendChild(n).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && R.push("[*^$]=" + it + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || R.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), R.push(",.*:")
			})), (T.matchesSelector = yt.test(B = H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && o(function(e) {
				T.disconnectedMatch = B.call(e, "div"), B.call(e, "[s!='']:x"), O.push("!=", lt)
			}), R = R.length && new RegExp(R.join("|")), O = O.length && new RegExp(O.join("|")), F = yt.test(H.contains) || H.compareDocumentPosition ?
			function(e, t) {
				var n = 9 === e.nodeType ? e.documentElement : e,
					r = t && t.parentNode;
				return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
			} : function(e, t) {
				if (t) for (; t = t.parentNode;) if (t === e) return !0;
				return !1
			}, V = H.compareDocumentPosition ?
			function(e, n) {
				if (e === n) return U = !0, 0;
				var r = n.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(n);
				return r ? 1 & r || !T.sortDetached && n.compareDocumentPosition(e) === r ? e === t || F(_, e) ? -1 : n === t || F(_, n) ? 1 : D ? nt.call(D, e) - nt.call(D, n) : 0 : 4 & r ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
			} : function(e, n) {
				var r, i = 0,
					o = e.parentNode,
					s = n.parentNode,
					l = [e],
					c = [n];
				if (e === n) return U = !0, 0;
				if (!o || !s) return e === t ? -1 : n === t ? 1 : o ? -1 : s ? 1 : D ? nt.call(D, e) - nt.call(D, n) : 0;
				if (o === s) return a(e, n);
				for (r = e; r = r.parentNode;) l.unshift(r);
				for (r = n; r = r.parentNode;) c.unshift(r);
				for (; l[i] === c[i];) i++;
				return i ? a(l[i], c[i]) : l[i] === _ ? -1 : c[i] === _ ? 1 : 0
			}, t) : P
		}, n.matches = function(e, t) {
			return n(e, null, null, t)
		}, n.matchesSelector = function(e, t) {
			if ((e.ownerDocument || e) !== P && L(e), t = t.replace(ht, "='$1']"), !(!T.matchesSelector || !q || O && O.test(t) || R && R.test(t))) try {
				var r = B.call(e, t);
				if (r || T.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
			} catch (i) {}
			return n(t, P, null, [e]).length > 0
		}, n.contains = function(e, t) {
			return (e.ownerDocument || e) !== P && L(e), F(e, t)
		}, n.attr = function(e, n) {
			(e.ownerDocument || e) !== P && L(e);
			var r = k.attrHandle[n.toLowerCase()],
				i = r && Y.call(k.attrHandle, n.toLowerCase()) ? r(e, n, !q) : t;
			return i === t ? T.attributes || !q ? e.getAttribute(n) : (i = e.getAttributeNode(n)) && i.specified ? i.value : null : i
		}, n.error = function(e) {
			throw new Error("Syntax error, unrecognized expression: " + e)
		}, n.uniqueSort = function(e) {
			var t, n = [],
				r = 0,
				i = 0;
			if (U = !T.detectDuplicates, D = !T.sortStable && e.slice(0), e.sort(V), U) {
				for (; t = e[i++];) t === e[i] && (r = n.push(i));
				for (; r--;) e.splice(n[r], 1)
			}
			return e
		}, E = n.getText = function(e) {
			var t, n = "",
				r = 0,
				i = e.nodeType;
			if (i) {
				if (1 === i || 9 === i || 11 === i) {
					if ("string" == typeof e.textContent) return e.textContent;
					for (e = e.firstChild; e; e = e.nextSibling) n += E(e)
				} else if (3 === i || 4 === i) return e.nodeValue
			} else for (; t = e[r]; r++) n += E(t);
			return n
		}, k = n.selectors = {
			cacheLength: 50,
			createPseudo: i,
			match: vt,
			attrHandle: {},
			find: {},
			relative: {
				">": {
					dir: "parentNode",
					first: !0
				},
				" ": {
					dir: "parentNode"
				},
				"+": {
					dir: "previousSibling",
					first: !0
				},
				"~": {
					dir: "previousSibling"
				}
			},
			preFilter: {
				ATTR: function(e) {
					return e[1] = e[1].replace(Tt, St), e[3] = (e[4] || e[5] || "").replace(Tt, St), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
				},
				CHILD: function(e) {
					return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || n.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && n.error(e[0]), e
				},
				PSEUDO: function(e) {
					var n, r = !e[5] && e[2];
					return vt.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && mt.test(r) && (n = d(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)), e.slice(0, 3))
				}
			},
			filter: {
				TAG: function(e) {
					var t = e.replace(Tt, St).toLowerCase();
					return "*" === e ?
					function() {
						return !0
					} : function(e) {
						return e.nodeName && e.nodeName.toLowerCase() === t
					}
				},
				CLASS: function(e) {
					var t = X[e + " "];
					return t || (t = new RegExp("(^|" + it + ")" + e + "(" + it + "|$)")) && X(e, function(e) {
						return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== G && e.getAttribute("class") || "")
					})
				},
				ATTR: function(e, t, r) {
					return function(i) {
						var o = n.attr(i, e);
						return null == o ? "!=" === t : t ? (o += "", "=" === t ? o === r : "!=" === t ? o !== r : "^=" === t ? r && 0 === o.indexOf(r) : "*=" === t ? r && o.indexOf(r) > -1 : "$=" === t ? r && o.slice(-r.length) === r : "~=" === t ? (" " + o + " ").indexOf(r) > -1 : "|=" === t ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0
					}
				},
				CHILD: function(e, t, n, r, i) {
					var o = "nth" !== e.slice(0, 3),
						s = "last" !== e.slice(-4),
						a = "of-type" === t;
					return 1 === r && 0 === i ?
					function(e) {
						return !!e.parentNode
					} : function(t, n, l) {
						var c, u, p, d, f, h, m = o !== s ? "nextSibling" : "previousSibling",
							g = t.parentNode,
							v = a && t.nodeName.toLowerCase(),
							y = !l && !a;
						if (g) {
							if (o) {
								for (; m;) {
									for (p = t; p = p[m];) if (a ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
									h = m = "only" === e && !h && "nextSibling"
								}
								return !0
							}
							if (h = [s ? g.firstChild : g.lastChild], s && y) {
								for (u = g[M] || (g[M] = {}), c = u[e] || [], f = c[0] === I && c[1], d = c[0] === I && c[2], p = f && g.childNodes[f]; p = ++f && p && p[m] || (d = f = 0) || h.pop();) if (1 === p.nodeType && ++d && p === t) {
									u[e] = [I, f, d];
									break
								}
							} else if (y && (c = (t[M] || (t[M] = {}))[e]) && c[0] === I) d = c[1];
							else for (;
							(p = ++f && p && p[m] || (d = f = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++d || (y && ((p[M] || (p[M] = {}))[e] = [I, d]), p !== t)););
							return d -= i, d === r || 0 === d % r && d / r >= 0
						}
					}
				},
				PSEUDO: function(e, t) {
					var r, o = k.pseudos[e] || k.setFilters[e.toLowerCase()] || n.error("unsupported pseudo: " + e);
					return o[M] ? o(t) : o.length > 1 ? (r = [e, e, "", t], k.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, n) {
						for (var r, i = o(e, t), s = i.length; s--;) r = nt.call(e, i[s]), e[r] = !(n[r] = i[s])
					}) : function(e) {
						return o(e, 0, r)
					}) : o
				}
			},
			pseudos: {
				not: i(function(e) {
					var t = [],
						n = [],
						r = A(e.replace(ct, "$1"));
					return r[M] ? i(function(e, t, n, i) {
						for (var o, s = r(e, null, i, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
					}) : function(e, i, o) {
						return t[0] = e, r(t, null, o, n), !n.pop()
					}
				}),
				has: i(function(e) {
					return function(t) {
						return n(e, t).length > 0
					}
				}),
				contains: i(function(e) {
					return function(t) {
						return (t.textContent || t.innerText || E(t)).indexOf(e) > -1
					}
				}),
				lang: i(function(e) {
					return gt.test(e || "") || n.error("unsupported lang: " + e), e = e.replace(Tt, St).toLowerCase(), function(t) {
						var n;
						do
						if (n = q ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
						while ((t = t.parentNode) && 1 === t.nodeType);
						return !1
					}
				}),
				target: function(t) {
					var n = e.location && e.location.hash;
					return n && n.slice(1) === t.id
				},
				root: function(e) {
					return e === H
				},
				focus: function(e) {
					return e === P.activeElement && (!P.hasFocus || P.hasFocus()) && !! (e.type || e.href || ~e.tabIndex)
				},
				enabled: function(e) {
					return e.disabled === !1
				},
				disabled: function(e) {
					return e.disabled === !0
				},
				checked: function(e) {
					var t = e.nodeName.toLowerCase();
					return "input" === t && !! e.checked || "option" === t && !! e.selected
				},
				selected: function(e) {
					return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
				},
				empty: function(e) {
					for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
					return !0
				},
				parent: function(e) {
					return !k.pseudos.empty(e)
				},
				header: function(e) {
					return wt.test(e.nodeName)
				},
				input: function(e) {
					return xt.test(e.nodeName)
				},
				button: function(e) {
					var t = e.nodeName.toLowerCase();
					return "input" === t && "button" === e.type || "button" === t
				},
				text: function(e) {
					var t;
					return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
				},
				first: u(function() {
					return [0]
				}),
				last: u(function(e, t) {
					return [t - 1]
				}),
				eq: u(function(e, t, n) {
					return [0 > n ? n + t : n]
				}),
				even: u(function(e, t) {
					for (var n = 0; t > n; n += 2) e.push(n);
					return e
				}),
				odd: u(function(e, t) {
					for (var n = 1; t > n; n += 2) e.push(n);
					return e
				}),
				lt: u(function(e, t, n) {
					for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
					return e
				}),
				gt: u(function(e, t, n) {
					for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
					return e
				})
			}
		}, k.pseudos.nth = k.pseudos.eq;
		for (C in {
			radio: !0,
			checkbox: !0,
			file: !0,
			password: !0,
			image: !0
		}) k.pseudos[C] = l(C);
		for (C in {
			submit: !0,
			reset: !0
		}) k.pseudos[C] = c(C);
		p.prototype = k.filters = k.pseudos, k.setFilters = new p, A = n.compile = function(e, t) {
			var n, r = [],
				i = [],
				o = z[e + " "];
			if (!o) {
				for (t || (t = d(e)), n = t.length; n--;) o = y(t[n]), o[M] ? r.push(o) : i.push(o);
				o = z(e, b(i, r))
			}
			return o
		}, T.sortStable = M.split("").sort(V).join("") === M, T.detectDuplicates = U, L(), T.sortDetached = o(function(e) {
			return 1 & e.compareDocumentPosition(P.createElement("div"))
		}), o(function(e) {
			return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
		}) || s("type|href|height|width", function(e, t, n) {
			return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
		}), T.attributes && o(function(e) {
			return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
		}) || s("value", function(e, t, n) {
			return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
		}), o(function(e) {
			return null == e.getAttribute("disabled")
		}) || s(rt, function(e, t, n) {
			var r;
			return n ? void 0 : (r = e.getAttributeNode(t)) && r.specified ? r.value : e[t] === !0 ? t.toLowerCase() : null
		}), ut.find = n, ut.expr = n.selectors, ut.expr[":"] = ut.expr.pseudos, ut.unique = n.uniqueSort, ut.text = n.getText, ut.isXMLDoc = n.isXML, ut.contains = n.contains
	}(e);
	var kt = {};
	ut.Callbacks = function(e) {
		e = "string" == typeof e ? kt[e] || r(e) : ut.extend({}, e);
		var n, i, o, s, a, l, c = [],
			u = !e.once && [],
			p = function(t) {
				for (i = e.memory && t, o = !0, a = l || 0, l = 0, s = c.length, n = !0; c && s > a; a++) if (c[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
					i = !1;
					break
				}
				n = !1, c && (u ? u.length && p(u.shift()) : i ? c = [] : d.disable())
			},
			d = {
				add: function() {
					if (c) {
						var t = c.length;
						!
						function r(t) {
							ut.each(t, function(t, n) {
								var i = ut.type(n);
								"function" === i ? e.unique && d.has(n) || c.push(n) : n && n.length && "string" !== i && r(n)
							})
						}(arguments), n ? s = c.length : i && (l = t, p(i))
					}
					return this
				},
				remove: function() {
					return c && ut.each(arguments, function(e, t) {
						for (var r;
						(r = ut.inArray(t, c, r)) > -1;) c.splice(r, 1), n && (s >= r && s--, a >= r && a--)
					}), this
				},
				has: function(e) {
					return e ? ut.inArray(e, c) > -1 : !(!c || !c.length)
				},
				empty: function() {
					return c = [], s = 0, this
				},
				disable: function() {
					return c = u = i = t, this
				},
				disabled: function() {
					return !c
				},
				lock: function() {
					return u = t, i || d.disable(), this
				},
				locked: function() {
					return !u
				},
				fireWith: function(e, t) {
					return !c || o && !u || (t = t || [], t = [e, t.slice ? t.slice() : t], n ? u.push(t) : p(t)), this
				},
				fire: function() {
					return d.fireWith(this, arguments), this
				},
				fired: function() {
					return !!o
				}
			};
		return d
	}, ut.extend({
		Deferred: function(e) {
			var t = [
				["resolve", "done", ut.Callbacks("once memory"), "resolved"],
				["reject", "fail", ut.Callbacks("once memory"), "rejected"],
				["notify", "progress", ut.Callbacks("memory")]
			],
				n = "pending",
				r = {
					state: function() {
						return n
					},
					always: function() {
						return i.done(arguments).fail(arguments), this
					},
					then: function() {
						var e = arguments;
						return ut.Deferred(function(n) {
							ut.each(t, function(t, o) {
								var s = o[0],
									a = ut.isFunction(e[t]) && e[t];
								i[o[1]](function() {
									var e = a && a.apply(this, arguments);
									e && ut.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
								})
							}), e = null
						}).promise()
					},
					promise: function(e) {
						return null != e ? ut.extend(e, r) : r
					}
				},
				i = {};
			return r.pipe = r.then, ut.each(t, function(e, o) {
				var s = o[2],
					a = o[3];
				r[o[1]] = s.add, a && s.add(function() {
					n = a
				}, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
					return i[o[0] + "With"](this === i ? r : this, arguments), this
				}, i[o[0] + "With"] = s.fireWith
			}), r.promise(i), e && e.call(i, i), i
		},
		when: function(e) {
			var t, n, r, i = 0,
				o = ot.call(arguments),
				s = o.length,
				a = 1 !== s || e && ut.isFunction(e.promise) ? s : 0,
				l = 1 === a ? e : ut.Deferred(),
				c = function(e, n, r) {
					return function(i) {
						n[e] = this, r[e] = arguments.length > 1 ? ot.call(arguments) : i, r === t ? l.notifyWith(n, r) : --a || l.resolveWith(n, r)
					}
				};
			if (s > 1) for (t = new Array(s), n = new Array(s), r = new Array(s); s > i; i++) o[i] && ut.isFunction(o[i].promise) ? o[i].promise().done(c(i, r, o)).fail(l.reject).progress(c(i, n, t)) : --a;
			return a || l.resolveWith(r, o), l.promise()
		}
	}), ut.support = function(t) {
		var n, r, i, o, s, a, l, c, u, p = Y.createElement("div");
		if (p.setAttribute("className", "t"), p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = p.getElementsByTagName("*") || [], r = p.getElementsByTagName("a")[0], !r || !r.style || !n.length) return t;
		o = Y.createElement("select"), a = o.appendChild(Y.createElement("option")), i = p.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== p.className, t.leadingWhitespace = 3 === p.firstChild.nodeType, t.tbody = !p.getElementsByTagName("tbody").length, t.htmlSerialize = !! p.getElementsByTagName("link").length, t.style = /top/.test(r.getAttribute("style")), t.hrefNormalized = "/a" === r.getAttribute("href"), t.opacity = /^0.5/.test(r.style.opacity), t.cssFloat = !! r.style.cssFloat, t.checkOn = !! i.value, t.optSelected = a.selected, t.enctype = !! Y.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== Y.createElement("nav").cloneNode(!0).outerHTML, t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, i.checked = !0, t.noCloneChecked = i.cloneNode(!0).checked, o.disabled = !0, t.optDisabled = !a.disabled;
		try {
			delete p.test
		} catch (d) {
			t.deleteExpando = !1
		}
		i = Y.createElement("input"), i.setAttribute("value", ""), t.input = "" === i.getAttribute("value"), i.value = "t", i.setAttribute("type", "radio"), t.radioValue = "t" === i.value, i.setAttribute("checked", "t"), i.setAttribute("name", "t"), s = Y.createDocumentFragment(), s.appendChild(i), t.appendChecked = i.checked, t.checkClone = s.cloneNode(!0).cloneNode(!0).lastChild.checked, p.attachEvent && (p.attachEvent("onclick", function() {
			t.noCloneEvent = !1
		}), p.cloneNode(!0).click());
		for (u in {
			submit: !0,
			change: !0,
			focusin: !0
		}) p.setAttribute(l = "on" + u, "t"), t[u + "Bubbles"] = l in e || p.attributes[l].expando === !1;
		p.style.backgroundClip = "content-box", p.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === p.style.backgroundClip;
		for (u in ut(t)) break;
		return t.ownLast = "0" !== u, ut(function() {
			var n, r, i, o = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
				s = Y.getElementsByTagName("body")[0];
			s && (n = Y.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", s.appendChild(n).appendChild(p), p.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = p.getElementsByTagName("td"), i[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = 0 === i[0].offsetHeight, i[0].style.display = "", i[1].style.display = "none", t.reliableHiddenOffsets = c && 0 === i[0].offsetHeight, p.innerHTML = "", p.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", ut.swap(s, null != s.style.zoom ? {
				zoom: 1
			} : {}, function() {
				t.boxSizing = 4 === p.offsetWidth
			}), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(p, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(p, null) || {
				width: "4px"
			}).width, r = p.appendChild(Y.createElement("div")), r.style.cssText = p.style.cssText = o, r.style.marginRight = r.style.width = "0", p.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof p.style.zoom !== G && (p.innerHTML = "", p.style.cssText = o + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === p.offsetWidth, p.style.display = "block", p.innerHTML = "<div></div>", p.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== p.offsetWidth, t.inlineBlockNeedsLayout && (s.style.zoom = 1)), s.removeChild(n), n = p = i = r = null)
		}), n = o = s = a = r = i = null, t
	}({});
	var Et = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
		Nt = /([A-Z])/g;
	ut.extend({
		cache: {},
		noData: {
			applet: !0,
			embed: !0,
			object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
		},
		hasData: function(e) {
			return e = e.nodeType ? ut.cache[e[ut.expando]] : e[ut.expando], !! e && !a(e)
		},
		data: function(e, t, n) {
			return i(e, t, n)
		},
		removeData: function(e, t) {
			return o(e, t)
		},
		_data: function(e, t, n) {
			return i(e, t, n, !0)
		},
		_removeData: function(e, t) {
			return o(e, t, !0)
		},
		acceptData: function(e) {
			if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
			var t = e.nodeName && ut.noData[e.nodeName.toLowerCase()];
			return !t || t !== !0 && e.getAttribute("classid") === t
		}
	}), ut.fn.extend({
		data: function(e, n) {
			var r, i, o = null,
				a = 0,
				l = this[0];
			if (e === t) {
				if (this.length && (o = ut.data(l), 1 === l.nodeType && !ut._data(l, "parsedAttrs"))) {
					for (r = l.attributes; a < r.length; a++) i = r[a].name, 0 === i.indexOf("data-") && (i = ut.camelCase(i.slice(5)), s(l, i, o[i]));
					ut._data(l, "parsedAttrs", !0)
				}
				return o
			}
			return "object" == typeof e ? this.each(function() {
				ut.data(this, e)
			}) : arguments.length > 1 ? this.each(function() {
				ut.data(this, e, n)
			}) : l ? s(l, e, ut.data(l, e)) : null
		},
		removeData: function(e) {
			return this.each(function() {
				ut.removeData(this, e)
			})
		}
	}), ut.extend({
		queue: function(e, t, n) {
			var r;
			return e ? (t = (t || "fx") + "queue", r = ut._data(e, t), n && (!r || ut.isArray(n) ? r = ut._data(e, t, ut.makeArray(n)) : r.push(n)), r || []) : void 0
		},
		dequeue: function(e, t) {
			t = t || "fx";
			var n = ut.queue(e, t),
				r = n.length,
				i = n.shift(),
				o = ut._queueHooks(e, t),
				s = function() {
					ut.dequeue(e, t)
				};
			"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, s, o)), !r && o && o.empty.fire()
		},
		_queueHooks: function(e, t) {
			var n = t + "queueHooks";
			return ut._data(e, n) || ut._data(e, n, {
				empty: ut.Callbacks("once memory").add(function() {
					ut._removeData(e, t + "queue"), ut._removeData(e, n)
				})
			})
		}
	}), ut.fn.extend({
		queue: function(e, n) {
			var r = 2;
			return "string" != typeof e && (n = e, e = "fx", r--), arguments.length < r ? ut.queue(this[0], e) : n === t ? this : this.each(function() {
				var t = ut.queue(this, e, n);
				ut._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && ut.dequeue(this, e)
			})
		},
		dequeue: function(e) {
			return this.each(function() {
				ut.dequeue(this, e)
			})
		},
		delay: function(e, t) {
			return e = ut.fx ? ut.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
				var r = setTimeout(t, e);
				n.stop = function() {
					clearTimeout(r)
				}
			})
		},
		clearQueue: function(e) {
			return this.queue(e || "fx", [])
		},
		promise: function(e, n) {
			var r, i = 1,
				o = ut.Deferred(),
				s = this,
				a = this.length,
				l = function() {
					--i || o.resolveWith(s, [s])
				};
			for ("string" != typeof e && (n = e, e = t), e = e || "fx"; a--;) r = ut._data(s[a], e + "queueHooks"), r && r.empty && (i++, r.empty.add(l));
			return l(), o.promise(n)
		}
	});
	var At, jt, Dt = /[\t\r\n\f]/g,
		Lt = /\r/g,
		Pt = /^(?:input|select|textarea|button|object)$/i,
		Ht = /^(?:a|area)$/i,
		qt = /^(?:checked|selected)$/i,
		Rt = ut.support.getSetAttribute,
		Ot = ut.support.input;
	ut.fn.extend({
		attr: function(e, t) {
			return ut.access(this, ut.attr, e, t, arguments.length > 1)
		},
		removeAttr: function(e) {
			return this.each(function() {
				ut.removeAttr(this, e)
			})
		},
		prop: function(e, t) {
			return ut.access(this, ut.prop, e, t, arguments.length > 1)
		},
		removeProp: function(e) {
			return e = ut.propFix[e] || e, this.each(function() {
				try {
					this[e] = t, delete this[e]
				} catch (n) {}
			})
		},
		addClass: function(e) {
			var t, n, r, i, o, s = 0,
				a = this.length,
				l = "string" == typeof e && e;
			if (ut.isFunction(e)) return this.each(function(t) {
				ut(this).addClass(e.call(this, t, this.className))
			});
			if (l) for (t = (e || "").match(dt) || []; a > s; s++) if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Dt, " ") : " ")) {
				for (o = 0; i = t[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
				n.className = ut.trim(r)
			}
			return this
		},
		removeClass: function(e) {
			var t, n, r, i, o, s = 0,
				a = this.length,
				l = 0 === arguments.length || "string" == typeof e && e;
			if (ut.isFunction(e)) return this.each(function(t) {
				ut(this).removeClass(e.call(this, t, this.className))
			});
			if (l) for (t = (e || "").match(dt) || []; a > s; s++) if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Dt, " ") : "")) {
				for (o = 0; i = t[o++];) for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
				n.className = e ? ut.trim(r) : ""
			}
			return this
		},
		toggleClass: function(e, t) {
			var n = typeof e;
			return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : ut.isFunction(e) ? this.each(function(n) {
				ut(this).toggleClass(e.call(this, n, this.className, t), t)
			}) : this.each(function() {
				if ("string" === n) for (var t, r = 0, i = ut(this), o = e.match(dt) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
				else(n === G || "boolean" === n) && (this.className && ut._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ut._data(this, "__className__") || "")
			})
		},
		hasClass: function(e) {
			for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Dt, " ").indexOf(t) >= 0) return !0;
			return !1
		},
		val: function(e) {
			var n, r, i, o = this[0]; {
				if (arguments.length) return i = ut.isFunction(e), this.each(function(n) {
					var o;
					1 === this.nodeType && (o = i ? e.call(this, n, ut(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : ut.isArray(o) && (o = ut.map(o, function(e) {
						return null == e ? "" : e + ""
					})), r = ut.valHooks[this.type] || ut.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, o, "value") !== t || (this.value = o))
				});
				if (o) return r = ut.valHooks[o.type] || ut.valHooks[o.nodeName.toLowerCase()], r && "get" in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(Lt, "") : null == n ? "" : n)
			}
		}
	}), ut.extend({
		valHooks: {
			option: {
				get: function(e) {
					var t = ut.find.attr(e, "value");
					return null != t ? t : e.text
				}
			},
			select: {
				get: function(e) {
					for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, s = o ? null : [], a = o ? i + 1 : r.length, l = 0 > i ? a : o ? i : 0; a > l; l++) if (n = r[l], !(!n.selected && l !== i || (ut.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && ut.nodeName(n.parentNode, "optgroup"))) {
						if (t = ut(n).val(), o) return t;
						s.push(t)
					}
					return s
				},
				set: function(e, t) {
					for (var n, r, i = e.options, o = ut.makeArray(t), s = i.length; s--;) r = i[s], (r.selected = ut.inArray(ut(r).val(), o) >= 0) && (n = !0);
					return n || (e.selectedIndex = -1), o
				}
			}
		},
		attr: function(e, n, r) {
			var i, o, s = e.nodeType;
			if (e && 3 !== s && 8 !== s && 2 !== s) return typeof e.getAttribute === G ? ut.prop(e, n, r) : (1 === s && ut.isXMLDoc(e) || (n = n.toLowerCase(), i = ut.attrHooks[n] || (ut.expr.match.bool.test(n) ? jt : At)), r === t ? i && "get" in i && null !== (o = i.get(e, n)) ? o : (o = ut.find.attr(e, n), null == o ? t : o) : null !== r ? i && "set" in i && (o = i.set(e, r, n)) !== t ? o : (e.setAttribute(n, r + ""), r) : (ut.removeAttr(e, n), void 0))
		},
		removeAttr: function(e, t) {
			var n, r, i = 0,
				o = t && t.match(dt);
			if (o && 1 === e.nodeType) for (; n = o[i++];) r = ut.propFix[n] || n, ut.expr.match.bool.test(n) ? Ot && Rt || !qt.test(n) ? e[r] = !1 : e[ut.camelCase("default-" + n)] = e[r] = !1 : ut.attr(e, n, ""), e.removeAttribute(Rt ? n : r)
		},
		attrHooks: {
			type: {
				set: function(e, t) {
					if (!ut.support.radioValue && "radio" === t && ut.nodeName(e, "input")) {
						var n = e.value;
						return e.setAttribute("type", t), n && (e.value = n), t
					}
				}
			}
		},
		propFix: {
			"for": "htmlFor",
			"class": "className"
		},
		prop: function(e, n, r) {
			var i, o, s, a = e.nodeType;
			if (e && 3 !== a && 8 !== a && 2 !== a) return s = 1 !== a || !ut.isXMLDoc(e), s && (n = ut.propFix[n] || n, o = ut.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n]
		},
		propHooks: {
			tabIndex: {
				get: function(e) {
					var t = ut.find.attr(e, "tabindex");
					return t ? parseInt(t, 10) : Pt.test(e.nodeName) || Ht.test(e.nodeName) && e.href ? 0 : -1
				}
			}
		}
	}), jt = {
		set: function(e, t, n) {
			return t === !1 ? ut.removeAttr(e, n) : Ot && Rt || !qt.test(n) ? e.setAttribute(!Rt && ut.propFix[n] || n, n) : e[ut.camelCase("default-" + n)] = e[n] = !0, n
		}
	}, ut.each(ut.expr.match.bool.source.match(/\w+/g), function(e, n) {
		var r = ut.expr.attrHandle[n] || ut.find.attr;
		ut.expr.attrHandle[n] = Ot && Rt || !qt.test(n) ?
		function(e, n, i) {
			var o = ut.expr.attrHandle[n],
				s = i ? t : (ut.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;
			return ut.expr.attrHandle[n] = o, s
		} : function(e, n, r) {
			return r ? t : e[ut.camelCase("default-" + n)] ? n.toLowerCase() : null
		}
	}), Ot && Rt || (ut.attrHooks.value = {
		set: function(e, t, n) {
			return ut.nodeName(e, "input") ? (e.defaultValue = t, void 0) : At && At.set(e, t, n)
		}
	}), Rt || (At = {
		set: function(e, n, r) {
			var i = e.getAttributeNode(r);
			return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t
		}
	}, ut.expr.attrHandle.id = ut.expr.attrHandle.name = ut.expr.attrHandle.coords = function(e, n, r) {
		var i;
		return r ? t : (i = e.getAttributeNode(n)) && "" !== i.value ? i.value : null
	}, ut.valHooks.button = {
		get: function(e, n) {
			var r = e.getAttributeNode(n);
			return r && r.specified ? r.value : t
		},
		set: At.set
	}, ut.attrHooks.contenteditable = {
		set: function(e, t, n) {
			At.set(e, "" === t ? !1 : t, n)
		}
	}, ut.each(["width", "height"], function(e, t) {
		ut.attrHooks[t] = {
			set: function(e, n) {
				return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
			}
		}
	})), ut.support.hrefNormalized || ut.each(["href", "src"], function(e, t) {
		ut.propHooks[t] = {
			get: function(e) {
				return e.getAttribute(t, 4)
			}
		}
	}), ut.support.style || (ut.attrHooks.style = {
		get: function(e) {
			return e.style.cssText || t
		},
		set: function(e, t) {
			return e.style.cssText = t + ""
		}
	}), ut.support.optSelected || (ut.propHooks.selected = {
		get: function(e) {
			var t = e.parentNode;
			return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
		}
	}), ut.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
		ut.propFix[this.toLowerCase()] = this
	}), ut.support.enctype || (ut.propFix.enctype = "encoding"), ut.each(["radio", "checkbox"], function() {
		ut.valHooks[this] = {
			set: function(e, t) {
				return ut.isArray(t) ? e.checked = ut.inArray(ut(e).val(), t) >= 0 : void 0
			}
		}, ut.support.checkOn || (ut.valHooks[this].get = function(e) {
			return null === e.getAttribute("value") ? "on" : e.value
		})
	});
	var Bt = /^(?:input|select|textarea)$/i,
		Ft = /^key/,
		Mt = /^(?:mouse|contextmenu)|click/,
		_t = /^(?:focusinfocus|focusoutblur)$/,
		It = /^([^.]*)(?:\.(.+)|)$/;
	ut.event = {
		global: {},
		add: function(e, n, r, i, o) {
			var s, a, l, c, u, p, d, f, h, m, g, v = ut._data(e);
			if (v) {
				for (r.handler && (c = r, r = c.handler, o = c.selector), r.guid || (r.guid = ut.guid++), (a = v.events) || (a = v.events = {}), (p = v.handle) || (p = v.handle = function(e) {
					return typeof ut === G || e && ut.event.triggered === e.type ? t : ut.event.dispatch.apply(p.elem, arguments)
				}, p.elem = e), n = (n || "").match(dt) || [""], l = n.length; l--;) s = It.exec(n[l]) || [], h = g = s[1], m = (s[2] || "").split(".").sort(), h && (u = ut.event.special[h] || {}, h = (o ? u.delegateType : u.bindType) || h, u = ut.event.special[h] || {}, d = ut.extend({
					type: h,
					origType: g,
					data: i,
					handler: r,
					guid: r.guid,
					selector: o,
					needsContext: o && ut.expr.match.needsContext.test(o),
					namespace: m.join(".")
				}, c), (f = a[h]) || (f = a[h] = [], f.delegateCount = 0, u.setup && u.setup.call(e, i, m, p) !== !1 || (e.addEventListener ? e.addEventListener(h, p, !1) : e.attachEvent && e.attachEvent("on" + h, p))), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), o ? f.splice(f.delegateCount++, 0, d) : f.push(d), ut.event.global[h] = !0);
				e = null
			}
		},
		remove: function(e, t, n, r, i) {
			var o, s, a, l, c, u, p, d, f, h, m, g = ut.hasData(e) && ut._data(e);
			if (g && (u = g.events)) {
				for (t = (t || "").match(dt) || [""], c = t.length; c--;) if (a = It.exec(t[c]) || [], f = m = a[1], h = (a[2] || "").split(".").sort(), f) {
					for (p = ut.event.special[f] || {}, f = (r ? p.delegateType : p.bindType) || f, d = u[f] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = d.length; o--;) s = d[o], !i && m !== s.origType || n && n.guid !== s.guid || a && !a.test(s.namespace) || r && r !== s.selector && ("**" !== r || !s.selector) || (d.splice(o, 1), s.selector && d.delegateCount--, p.remove && p.remove.call(e, s));
					l && !d.length && (p.teardown && p.teardown.call(e, h, g.handle) !== !1 || ut.removeEvent(e, f, g.handle), delete u[f])
				} else for (f in u) ut.event.remove(e, f + t[c], n, r, !0);
				ut.isEmptyObject(u) && (delete g.handle, ut._removeData(e, "events"))
			}
		},
		trigger: function(n, r, i, o) {
			var s, a, l, c, u, p, d, f = [i || Y],
				h = lt.call(n, "type") ? n.type : n,
				m = lt.call(n, "namespace") ? n.namespace.split(".") : [];
			if (l = p = i = i || Y, 3 !== i.nodeType && 8 !== i.nodeType && !_t.test(h + ut.event.triggered) && (h.indexOf(".") >= 0 && (m = h.split("."), h = m.shift(), m.sort()), a = h.indexOf(":") < 0 && "on" + h, n = n[ut.expando] ? n : new ut.Event(h, "object" == typeof n && n), n.isTrigger = o ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : ut.makeArray(r, [n]), u = ut.event.special[h] || {}, o || !u.trigger || u.trigger.apply(i, r) !== !1)) {
				if (!o && !u.noBubble && !ut.isWindow(i)) {
					for (c = u.delegateType || h, _t.test(c + h) || (l = l.parentNode); l; l = l.parentNode) f.push(l), p = l;
					p === (i.ownerDocument || Y) && f.push(p.defaultView || p.parentWindow || e)
				}
				for (d = 0;
				(l = f[d++]) && !n.isPropagationStopped();) n.type = d > 1 ? c : u.bindType || h, s = (ut._data(l, "events") || {})[n.type] && ut._data(l, "handle"), s && s.apply(l, r), s = a && l[a], s && ut.acceptData(l) && s.apply && s.apply(l, r) === !1 && n.preventDefault();
				if (n.type = h, !o && !n.isDefaultPrevented() && (!u._default || u._default.apply(f.pop(), r) === !1) && ut.acceptData(i) && a && i[h] && !ut.isWindow(i)) {
					p = i[a], p && (i[a] = null), ut.event.triggered = h;
					try {
						i[h]()
					} catch (g) {}
					ut.event.triggered = t, p && (i[a] = p)
				}
				return n.result
			}
		},
		dispatch: function(e) {
			e = ut.event.fix(e);
			var n, r, i, o, s, a = [],
				l = ot.call(arguments),
				c = (ut._data(this, "events") || {})[e.type] || [],
				u = ut.event.special[e.type] || {};
			if (l[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
				for (a = ut.event.handlers.call(this, e, c), n = 0;
				(o = a[n++]) && !e.isPropagationStopped();) for (e.currentTarget = o.elem, s = 0;
				(i = o.handlers[s++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((ut.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, l), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
				return u.postDispatch && u.postDispatch.call(this, e), e.result
			}
		},
		handlers: function(e, n) {
			var r, i, o, s, a = [],
				l = n.delegateCount,
				c = e.target;
			if (l && c.nodeType && (!e.button || "click" !== e.type)) for (; c != this; c = c.parentNode || this) if (1 === c.nodeType && (c.disabled !== !0 || "click" !== e.type)) {
				for (o = [], s = 0; l > s; s++) i = n[s], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? ut(r, this).index(c) >= 0 : ut.find(r, this, null, [c]).length), o[r] && o.push(i);
				o.length && a.push({
					elem: c,
					handlers: o
				})
			}
			return l < n.length && a.push({
				elem: this,
				handlers: n.slice(l)
			}), a
		},
		fix: function(e) {
			if (e[ut.expando]) return e;
			var t, n, r, i = e.type,
				o = e,
				s = this.fixHooks[i];
			for (s || (this.fixHooks[i] = s = Mt.test(i) ? this.mouseHooks : Ft.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new ut.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
			return e.target || (e.target = o.srcElement || Y), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !! e.metaKey, s.filter ? s.filter(e, o) : e
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function(e, t) {
				return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function(e, n) {
				var r, i, o, s = n.button,
					a = n.fromElement;
				return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || Y, o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? n.toElement : a), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
			}
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function() {
					if (this !== u() && this.focus) try {
						return this.focus(), !1
					} catch (e) {}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					return this === u() && this.blur ? (this.blur(), !1) : void 0
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function() {
					return ut.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
				},
				_default: function(e) {
					return ut.nodeName(e.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function(e) {
					e.result !== t && (e.originalEvent.returnValue = e.result)
				}
			}
		},
		simulate: function(e, t, n, r) {
			var i = ut.extend(new ut.Event, n, {
				type: e,
				isSimulated: !0,
				originalEvent: {}
			});
			r ? ut.event.trigger(i, null, t) : ut.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
		}
	}, ut.removeEvent = Y.removeEventListener ?
	function(e, t, n) {
		e.removeEventListener && e.removeEventListener(t, n, !1)
	} : function(e, t, n) {
		var r = "on" + t;
		e.detachEvent && (typeof e[r] === G && (e[r] = null), e.detachEvent(r, n))
	}, ut.Event = function(e, t) {
		return this instanceof ut.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? l : c) : this.type = e, t && ut.extend(this, t), this.timeStamp = e && e.timeStamp || ut.now(), this[ut.expando] = !0, void 0) : new ut.Event(e, t)
	}, ut.Event.prototype = {
		isDefaultPrevented: c,
		isPropagationStopped: c,
		isImmediatePropagationStopped: c,
		preventDefault: function() {
			var e = this.originalEvent;
			this.isDefaultPrevented = l, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
		},
		stopPropagation: function() {
			var e = this.originalEvent;
			this.isPropagationStopped = l, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
		},
		stopImmediatePropagation: function() {
			this.isImmediatePropagationStopped = l, this.stopPropagation()
		}
	}, ut.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout"
	}, function(e, t) {
		ut.event.special[e] = {
			delegateType: t,
			bindType: t,
			handle: function(e) {
				var n, r = this,
					i = e.relatedTarget,
					o = e.handleObj;
				return (!i || i !== r && !ut.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
			}
		}
	}), ut.support.submitBubbles || (ut.event.special.submit = {
		setup: function() {
			return ut.nodeName(this, "form") ? !1 : (ut.event.add(this, "click._submit keypress._submit", function(e) {
				var n = e.target,
					r = ut.nodeName(n, "input") || ut.nodeName(n, "button") ? n.form : t;
				r && !ut._data(r, "submitBubbles") && (ut.event.add(r, "submit._submit", function(e) {
					e._submit_bubble = !0
				}), ut._data(r, "submitBubbles", !0))
			}), void 0)
		},
		postDispatch: function(e) {
			e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ut.event.simulate("submit", this.parentNode, e, !0))
		},
		teardown: function() {
			return ut.nodeName(this, "form") ? !1 : (ut.event.remove(this, "._submit"), void 0)
		}
	}), ut.support.changeBubbles || (ut.event.special.change = {
		setup: function() {
			return Bt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ut.event.add(this, "propertychange._change", function(e) {
				"checked" === e.originalEvent.propertyName && (this._just_changed = !0)
			}), ut.event.add(this, "click._change", function(e) {
				this._just_changed && !e.isTrigger && (this._just_changed = !1), ut.event.simulate("change", this, e, !0)
			})), !1) : (ut.event.add(this, "beforeactivate._change", function(e) {
				var t = e.target;
				Bt.test(t.nodeName) && !ut._data(t, "changeBubbles") && (ut.event.add(t, "change._change", function(e) {
					!this.parentNode || e.isSimulated || e.isTrigger || ut.event.simulate("change", this.parentNode, e, !0)
				}), ut._data(t, "changeBubbles", !0))
			}), void 0)
		},
		handle: function(e) {
			var t = e.target;
			return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
		},
		teardown: function() {
			return ut.event.remove(this, "._change"), !Bt.test(this.nodeName)
		}
	}), ut.support.focusinBubbles || ut.each({
		focus: "focusin",
		blur: "focusout"
	}, function(e, t) {
		var n = 0,
			r = function(e) {
				ut.event.simulate(t, e.target, ut.event.fix(e), !0)
			};
		ut.event.special[t] = {
			setup: function() {
				0 === n++ && Y.addEventListener(e, r, !0)
			},
			teardown: function() {
				0 === --n && Y.removeEventListener(e, r, !0)
			}
		}
	}), ut.fn.extend({
		on: function(e, n, r, i, o) {
			var s, a;
			if ("object" == typeof e) {
				"string" != typeof n && (r = r || n, n = t);
				for (s in e) this.on(s, n, r, e[s], o);
				return this
			}
			if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = c;
			else if (!i) return this;
			return 1 === o && (a = i, i = function(e) {
				return ut().off(e), a.apply(this, arguments)
			}, i.guid = a.guid || (a.guid = ut.guid++)), this.each(function() {
				ut.event.add(this, e, i, r, n)
			})
		},
		one: function(e, t, n, r) {
			return this.on(e, t, n, r, 1)
		},
		off: function(e, n, r) {
			var i, o;
			if (e && e.preventDefault && e.handleObj) return i = e.handleObj, ut(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
			if ("object" == typeof e) {
				for (o in e) this.off(o, n, e[o]);
				return this
			}
			return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = c), this.each(function() {
				ut.event.remove(this, e, r, n)
			})
		},
		trigger: function(e, t) {
			return this.each(function() {
				ut.event.trigger(e, t, this)
			})
		},
		triggerHandler: function(e, t) {
			var n = this[0];
			return n ? ut.event.trigger(e, t, n, !0) : void 0
		}
	});
	var Wt = /^.[^:#\[\.,]*$/,
		Xt = /^(?:parents|prev(?:Until|All))/,
		$t = ut.expr.match.needsContext,
		zt = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	ut.fn.extend({
		find: function(e) {
			var t, n = [],
				r = this,
				i = r.length;
			if ("string" != typeof e) return this.pushStack(ut(e).filter(function() {
				for (t = 0; i > t; t++) if (ut.contains(r[t], this)) return !0
			}));
			for (t = 0; i > t; t++) ut.find(e, r[t], n);
			return n = this.pushStack(i > 1 ? ut.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
		},
		has: function(e) {
			var t, n = ut(e, this),
				r = n.length;
			return this.filter(function() {
				for (t = 0; r > t; t++) if (ut.contains(this, n[t])) return !0
			})
		},
		not: function(e) {
			return this.pushStack(d(this, e || [], !0))
		},
		filter: function(e) {
			return this.pushStack(d(this, e || [], !1))
		},
		is: function(e) {
			return !!d(this, "string" == typeof e && $t.test(e) ? ut(e) : e || [], !1).length
		},
		closest: function(e, t) {
			for (var n, r = 0, i = this.length, o = [], s = $t.test(e) || "string" != typeof e ? ut(e, t || this.context) : 0; i > r; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && ut.find.matchesSelector(n, e))) {
				n = o.push(n);
				break
			}
			return this.pushStack(o.length > 1 ? ut.unique(o) : o)
		},
		index: function(e) {
			return e ? "string" == typeof e ? ut.inArray(this[0], ut(e)) : ut.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function(e, t) {
			var n = "string" == typeof e ? ut(e, t) : ut.makeArray(e && e.nodeType ? [e] : e),
				r = ut.merge(this.get(), n);
			return this.pushStack(ut.unique(r))
		},
		addBack: function(e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		}
	}), ut.each({
		parent: function(e) {
			var t = e.parentNode;
			return t && 11 !== t.nodeType ? t : null
		},
		parents: function(e) {
			return ut.dir(e, "parentNode")
		},
		parentsUntil: function(e, t, n) {
			return ut.dir(e, "parentNode", n)
		},
		next: function(e) {
			return p(e, "nextSibling")
		},
		prev: function(e) {
			return p(e, "previousSibling")
		},
		nextAll: function(e) {
			return ut.dir(e, "nextSibling")
		},
		prevAll: function(e) {
			return ut.dir(e, "previousSibling")
		},
		nextUntil: function(e, t, n) {
			return ut.dir(e, "nextSibling", n)
		},
		prevUntil: function(e, t, n) {
			return ut.dir(e, "previousSibling", n)
		},
		siblings: function(e) {
			return ut.sibling((e.parentNode || {}).firstChild, e)
		},
		children: function(e) {
			return ut.sibling(e.firstChild)
		},
		contents: function(e) {
			return ut.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ut.merge([], e.childNodes)
		}
	}, function(e, t) {
		ut.fn[e] = function(n, r) {
			var i = ut.map(this, t, n);
			return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = ut.filter(r, i)), this.length > 1 && (zt[e] || (i = ut.unique(i)), Xt.test(e) && (i = i.reverse())), this.pushStack(i)
		}
	}), ut.extend({
		filter: function(e, t, n) {
			var r = t[0];
			return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? ut.find.matchesSelector(r, e) ? [r] : [] : ut.find.matches(e, ut.grep(t, function(e) {
				return 1 === e.nodeType
			}))
		},
		dir: function(e, n, r) {
			for (var i = [], o = e[n]; o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !ut(o).is(r));) 1 === o.nodeType && i.push(o), o = o[n];
			return i
		},
		sibling: function(e, t) {
			for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
			return n
		}
	});
	var Ut = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
		Vt = / jQuery\d+="(?:null|\d+)"/g,
		Gt = new RegExp("<(?:" + Ut + ")[\\s/>]", "i"),
		Kt = /^\s+/,
		Yt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		Qt = /<([\w:]+)/,
		Jt = /<tbody/i,
		Zt = /<|&#?\w+;/,
		en = /<(?:script|style|link)/i,
		tn = /^(?:checkbox|radio)$/i,
		nn = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rn = /^$|\/(?:java|ecma)script/i,
		on = /^true\/(.*)/,
		sn = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		an = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			legend: [1, "<fieldset>", "</fieldset>"],
			area: [1, "<map>", "</map>"],
			param: [1, "<object>", "</object>"],
			thead: [1, "<table>", "</table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: ut.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
		},
		ln = f(Y),
		cn = ln.appendChild(Y.createElement("div"));
	an.optgroup = an.option, an.tbody = an.tfoot = an.colgroup = an.caption = an.thead, an.th = an.td, ut.fn.extend({
		text: function(e) {
			return ut.access(this, function(e) {
				return e === t ? ut.text(this) : this.empty().append((this[0] && this[0].ownerDocument || Y).createTextNode(e))
			}, null, e, arguments.length)
		},
		append: function() {
			return this.domManip(arguments, function(e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = h(this, e);
					t.appendChild(e)
				}
			})
		},
		prepend: function() {
			return this.domManip(arguments, function(e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = h(this, e);
					t.insertBefore(e, t.firstChild)
				}
			})
		},
		before: function() {
			return this.domManip(arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this)
			})
		},
		after: function() {
			return this.domManip(arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
			})
		},
		remove: function(e, t) {
			for (var n, r = e ? ut.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || ut.cleanData(x(n)), n.parentNode && (t && ut.contains(n.ownerDocument, n) && v(x(n, "script")), n.parentNode.removeChild(n));
			return this
		},
		empty: function() {
			for (var e, t = 0; null != (e = this[t]); t++) {
				for (1 === e.nodeType && ut.cleanData(x(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
				e.options && ut.nodeName(e, "select") && (e.options.length = 0)
			}
			return this
		},
		clone: function(e, t) {
			return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
				return ut.clone(this, e, t)
			})
		},
		html: function(e) {
			return ut.access(this, function(e) {
				var n = this[0] || {},
					r = 0,
					i = this.length;
				if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(Vt, "") : t;
				if (!("string" != typeof e || en.test(e) || !ut.support.htmlSerialize && Gt.test(e) || !ut.support.leadingWhitespace && Kt.test(e) || an[(Qt.exec(e) || ["", ""])[1].toLowerCase()])) {
					e = e.replace(Yt, "<$1></$2>");
					try {
						for (; i > r; r++) n = this[r] || {}, 1 === n.nodeType && (ut.cleanData(x(n, !1)), n.innerHTML = e);
						n = 0
					} catch (o) {}
				}
				n && this.empty().append(e)
			}, null, e, arguments.length)
		},
		replaceWith: function() {
			var e = ut.map(this, function(e) {
				return [e.nextSibling, e.parentNode]
			}),
				t = 0;
			return this.domManip(arguments, function(n) {
				var r = e[t++],
					i = e[t++];
				i && (r && r.parentNode !== i && (r = this.nextSibling), ut(this).remove(), i.insertBefore(n, r))
			}, !0), t ? this : this.remove()
		},
		detach: function(e) {
			return this.remove(e, !0)
		},
		domManip: function(e, t, n) {
			e = rt.apply([], e);
			var r, i, o, s, a, l, c = 0,
				u = this.length,
				p = this,
				d = u - 1,
				f = e[0],
				h = ut.isFunction(f);
			if (h || !(1 >= u || "string" != typeof f || ut.support.checkClone) && nn.test(f)) return this.each(function(r) {
				var i = p.eq(r);
				h && (e[0] = f.call(this, r, i.html())), i.domManip(e, t, n)
			});
			if (u && (l = ut.buildFragment(e, this[0].ownerDocument, !1, !n && this), r = l.firstChild, 1 === l.childNodes.length && (l = r), r)) {
				for (s = ut.map(x(l, "script"), m), o = s.length; u > c; c++) i = l, c !== d && (i = ut.clone(i, !0, !0), o && ut.merge(s, x(i, "script"))), t.call(this[c], i, c);
				if (o) for (a = s[s.length - 1].ownerDocument, ut.map(s, g), c = 0; o > c; c++) i = s[c], rn.test(i.type || "") && !ut._data(i, "globalEval") && ut.contains(a, i) && (i.src ? ut._evalUrl(i.src) : ut.globalEval((i.text || i.textContent || i.innerHTML || "").replace(sn, "")));
				l = r = null
			}
			return this
		}
	}), ut.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(e, t) {
		ut.fn[e] = function(e) {
			for (var n, r = 0, i = [], o = ut(e), s = o.length - 1; s >= r; r++) n = r === s ? this : this.clone(!0), ut(o[r])[t](n), it.apply(i, n.get());
			return this.pushStack(i)
		}
	}), ut.extend({
		clone: function(e, t, n) {
			var r, i, o, s, a, l = ut.contains(e.ownerDocument, e);
			if (ut.support.html5Clone || ut.isXMLDoc(e) || !Gt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (cn.innerHTML = e.outerHTML, cn.removeChild(o = cn.firstChild)), !(ut.support.noCloneEvent && ut.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ut.isXMLDoc(e))) for (r = x(o), a = x(e), s = 0; null != (i = a[s]); ++s) r[s] && b(i, r[s]);
			if (t) if (n) for (a = a || x(e), r = r || x(o), s = 0; null != (i = a[s]); s++) y(i, r[s]);
			else y(e, o);
			return r = x(o, "script"), r.length > 0 && v(r, !l && x(e, "script")), r = a = i = null, o
		},
		buildFragment: function(e, t, n, r) {
			for (var i, o, s, a, l, c, u, p = e.length, d = f(t), h = [], m = 0; p > m; m++) if (o = e[m], o || 0 === o) if ("object" === ut.type(o)) ut.merge(h, o.nodeType ? [o] : o);
			else if (Zt.test(o)) {
				for (a = a || d.appendChild(t.createElement("div")), l = (Qt.exec(o) || ["", ""])[1].toLowerCase(), u = an[l] || an._default, a.innerHTML = u[1] + o.replace(Yt, "<$1></$2>") + u[2], i = u[0]; i--;) a = a.lastChild;
				if (!ut.support.leadingWhitespace && Kt.test(o) && h.push(t.createTextNode(Kt.exec(o)[0])), !ut.support.tbody) for (o = "table" !== l || Jt.test(o) ? "<table>" !== u[1] || Jt.test(o) ? 0 : a : a.firstChild, i = o && o.childNodes.length; i--;) ut.nodeName(c = o.childNodes[i], "tbody") && !c.childNodes.length && o.removeChild(c);
				for (ut.merge(h, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
				a = d.lastChild
			} else h.push(t.createTextNode(o));
			for (a && d.removeChild(a), ut.support.appendChecked || ut.grep(x(h, "input"), w), m = 0; o = h[m++];) if ((!r || -1 === ut.inArray(o, r)) && (s = ut.contains(o.ownerDocument, o), a = x(d.appendChild(o), "script"), s && v(a), n)) for (i = 0; o = a[i++];) rn.test(o.type || "") && n.push(o);
			return a = null, d
		},
		cleanData: function(e, t) {
			for (var n, r, i, o, s = 0, a = ut.expando, l = ut.cache, c = ut.support.deleteExpando, u = ut.event.special; null != (n = e[s]); s++) if ((t || ut.acceptData(n)) && (i = n[a], o = i && l[i])) {
				if (o.events) for (r in o.events) u[r] ? ut.event.remove(n, r) : ut.removeEvent(n, r, o.handle);
				l[i] && (delete l[i], c ? delete n[a] : typeof n.removeAttribute !== G ? n.removeAttribute(a) : n[a] = null, tt.push(i))
			}
		},
		_evalUrl: function(e) {
			return ut.ajax({
				url: e,
				type: "GET",
				dataType: "script",
				async: !1,
				global: !1,
				"throws": !0
			})
		}
	}), ut.fn.extend({
		wrapAll: function(e) {
			if (ut.isFunction(e)) return this.each(function(t) {
				ut(this).wrapAll(e.call(this, t))
			});
			if (this[0]) {
				var t = ut(e, this[0].ownerDocument).eq(0).clone(!0);
				this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
					for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
					return e
				}).append(this)
			}
			return this
		},
		wrapInner: function(e) {
			return ut.isFunction(e) ? this.each(function(t) {
				ut(this).wrapInner(e.call(this, t))
			}) : this.each(function() {
				var t = ut(this),
					n = t.contents();
				n.length ? n.wrapAll(e) : t.append(e)
			})
		},
		wrap: function(e) {
			var t = ut.isFunction(e);
			return this.each(function(n) {
				ut(this).wrapAll(t ? e.call(this, n) : e)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				ut.nodeName(this, "body") || ut(this).replaceWith(this.childNodes)
			}).end()
		}
	});
	var un, pn, dn, fn = /alpha\([^)]*\)/i,
		hn = /opacity\s*=\s*([^)]*)/,
		mn = /^(top|right|bottom|left)$/,
		gn = /^(none|table(?!-c[ea]).+)/,
		vn = /^margin/,
		yn = new RegExp("^(" + pt + ")(.*)$", "i"),
		bn = new RegExp("^(" + pt + ")(?!px)[a-z%]+$", "i"),
		xn = new RegExp("^([+-])=(" + pt + ")", "i"),
		wn = {
			BODY: "block"
		},
		Cn = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		Tn = {
			letterSpacing: 0,
			fontWeight: 400
		},
		Sn = ["Top", "Right", "Bottom", "Left"],
		kn = ["Webkit", "O", "Moz", "ms"];
	ut.fn.extend({
		css: function(e, n) {
			return ut.access(this, function(e, n, r) {
				var i, o, s = {},
					a = 0;
				if (ut.isArray(n)) {
					for (o = pn(e), i = n.length; i > a; a++) s[n[a]] = ut.css(e, n[a], !1, o);
					return s
				}
				return r !== t ? ut.style(e, n, r) : ut.css(e, n)
			}, e, n, arguments.length > 1)
		},
		show: function() {
			return S(this, !0)
		},
		hide: function() {
			return S(this)
		},
		toggle: function(e) {
			return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
				T(this) ? ut(this).show() : ut(this).hide()
			})
		}
	}), ut.extend({
		cssHooks: {
			opacity: {
				get: function(e, t) {
					if (t) {
						var n = dn(e, "opacity");
						return "" === n ? "1" : n
					}
				}
			}
		},
		cssNumber: {
			columnCount: !0,
			fillOpacity: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			"float": ut.support.cssFloat ? "cssFloat" : "styleFloat"
		},
		style: function(e, n, r, i) {
			if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var o, s, a, l = ut.camelCase(n),
					c = e.style;
				if (n = ut.cssProps[l] || (ut.cssProps[l] = C(c, l)), a = ut.cssHooks[n] || ut.cssHooks[l], r === t) return a && "get" in a && (o = a.get(e, !1, i)) !== t ? o : c[n];
				if (s = typeof r, "string" === s && (o = xn.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(ut.css(e, n)), s = "number"), !(null == r || "number" === s && isNaN(r) || ("number" !== s || ut.cssNumber[l] || (r += "px"), ut.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (c[n] = "inherit"), a && "set" in a && (r = a.set(e, r, i)) === t))) try {
					c[n] = r
				} catch (u) {}
			}
		},
		css: function(e, n, r, i) {
			var o, s, a, l = ut.camelCase(n);
			return n = ut.cssProps[l] || (ut.cssProps[l] = C(e.style, l)), a = ut.cssHooks[n] || ut.cssHooks[l], a && "get" in a && (s = a.get(e, !0, r)), s === t && (s = dn(e, n, i)), "normal" === s && n in Tn && (s = Tn[n]), "" === r || r ? (o = parseFloat(s), r === !0 || ut.isNumeric(o) ? o || 0 : s) : s
		}
	}), e.getComputedStyle ? (pn = function(t) {
		return e.getComputedStyle(t, null)
	}, dn = function(e, n, r) {
		var i, o, s, a = r || pn(e),
			l = a ? a.getPropertyValue(n) || a[n] : t,
			c = e.style;
		return a && ("" !== l || ut.contains(e.ownerDocument, e) || (l = ut.style(e, n)), bn.test(l) && vn.test(n) && (i = c.width, o = c.minWidth, s = c.maxWidth, c.minWidth = c.maxWidth = c.width = l, l = a.width, c.width = i, c.minWidth = o, c.maxWidth = s)), l
	}) : Y.documentElement.currentStyle && (pn = function(e) {
		return e.currentStyle
	}, dn = function(e, n, r) {
		var i, o, s, a = r || pn(e),
			l = a ? a[n] : t,
			c = e.style;
		return null == l && c && c[n] && (l = c[n]), bn.test(l) && !mn.test(n) && (i = c.left, o = e.runtimeStyle, s = o && o.left, s && (o.left = e.currentStyle.left), c.left = "fontSize" === n ? "1em" : l, l = c.pixelLeft + "px", c.left = i, s && (o.left = s)), "" === l ? "auto" : l
	}), ut.each(["height", "width"], function(e, t) {
		ut.cssHooks[t] = {
			get: function(e, n, r) {
				return n ? 0 === e.offsetWidth && gn.test(ut.css(e, "display")) ? ut.swap(e, Cn, function() {
					return N(e, t, r)
				}) : N(e, t, r) : void 0
			},
			set: function(e, n, r) {
				var i = r && pn(e);
				return k(e, n, r ? E(e, t, r, ut.support.boxSizing && "border-box" === ut.css(e, "boxSizing", !1, i), i) : 0)
			}
		}
	}), ut.support.opacity || (ut.cssHooks.opacity = {
		get: function(e, t) {
			return hn.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
		},
		set: function(e, t) {
			var n = e.style,
				r = e.currentStyle,
				i = ut.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
				o = r && r.filter || n.filter || "";
			n.zoom = 1, (t >= 1 || "" === t) && "" === ut.trim(o.replace(fn, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = fn.test(o) ? o.replace(fn, i) : o + " " + i)
		}
	}), ut(function() {
		ut.support.reliableMarginRight || (ut.cssHooks.marginRight = {
			get: function(e, t) {
				return t ? ut.swap(e, {
					display: "inline-block"
				}, dn, [e, "marginRight"]) : void 0
			}
		}), !ut.support.pixelPosition && ut.fn.position && ut.each(["top", "left"], function(e, t) {
			ut.cssHooks[t] = {
				get: function(e, n) {
					return n ? (n = dn(e, t), bn.test(n) ? ut(e).position()[t] + "px" : n) : void 0
				}
			}
		})
	}), ut.expr && ut.expr.filters && (ut.expr.filters.hidden = function(e) {
		return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !ut.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || ut.css(e, "display"))
	}, ut.expr.filters.visible = function(e) {
		return !ut.expr.filters.hidden(e)
	}), ut.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(e, t) {
		ut.cssHooks[e + t] = {
			expand: function(n) {
				for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + Sn[r] + t] = o[r] || o[r - 2] || o[0];
				return i
			}
		}, vn.test(e) || (ut.cssHooks[e + t].set = k)
	});
	var En = /%20/g,
		Nn = /\[\]$/,
		An = /\r?\n/g,
		jn = /^(?:submit|button|image|reset|file)$/i,
		Dn = /^(?:input|select|textarea|keygen)/i;
	ut.fn.extend({
		serialize: function() {
			return ut.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var e = ut.prop(this, "elements");
				return e ? ut.makeArray(e) : this
			}).filter(function() {
				var e = this.type;
				return this.name && !ut(this).is(":disabled") && Dn.test(this.nodeName) && !jn.test(e) && (this.checked || !tn.test(e))
			}).map(function(e, t) {
				var n = ut(this).val();
				return null == n ? null : ut.isArray(n) ? ut.map(n, function(e) {
					return {
						name: t.name,
						value: e.replace(An, "\r\n")
					}
				}) : {
					name: t.name,
					value: n.replace(An, "\r\n")
				}
			}).get()
		}
	}), ut.param = function(e, n) {
		var r, i = [],
			o = function(e, t) {
				t = ut.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
			};
		if (n === t && (n = ut.ajaxSettings && ut.ajaxSettings.traditional), ut.isArray(e) || e.jquery && !ut.isPlainObject(e)) ut.each(e, function() {
			o(this.name, this.value)
		});
		else for (r in e) D(r, e[r], n, o);
		return i.join("&").replace(En, "+")
	}, ut.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
		ut.fn[t] = function(e, n) {
			return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
		}
	}), ut.fn.extend({
		hover: function(e, t) {
			return this.mouseenter(e).mouseleave(t || e)
		},
		bind: function(e, t, n) {
			return this.on(e, null, t, n)
		},
		unbind: function(e, t) {
			return this.off(e, null, t)
		},
		delegate: function(e, t, n, r) {
			return this.on(t, e, n, r)
		},
		undelegate: function(e, t, n) {
			return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
		}
	});
	var Ln, Pn, Hn = ut.now(),
		qn = /\?/,
		Rn = /#.*$/,
		On = /([?&])_=[^&]*/,
		Bn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
		Fn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		Mn = /^(?:GET|HEAD)$/,
		_n = /^\/\//,
		In = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
		Wn = ut.fn.load,
		Xn = {},
		$n = {},
		zn = "*/".concat("*");
	try {
		Pn = K.href
	} catch (Un) {
		Pn = Y.createElement("a"), Pn.href = "", Pn = Pn.href
	}
	Ln = In.exec(Pn.toLowerCase()) || [], ut.fn.load = function(e, n, r) {
		if ("string" != typeof e && Wn) return Wn.apply(this, arguments);
		var i, o, s, a = this,
			l = e.indexOf(" ");
		return l >= 0 && (i = e.slice(l, e.length), e = e.slice(0, l)), ut.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (s = "POST"), a.length > 0 && ut.ajax({
			url: e,
			type: s,
			dataType: "html",
			data: n
		}).done(function(e) {
			o = arguments, a.html(i ? ut("<div>").append(ut.parseHTML(e)).find(i) : e)
		}).complete(r &&
		function(e, t) {
			a.each(r, o || [e.responseText, t, e])
		}), this
	}, ut.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
		ut.fn[t] = function(e) {
			return this.on(t, e)
		}
	}), ut.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: Pn,
			type: "GET",
			isLocal: Fn.test(Ln[1]),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": zn,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": ut.parseJSON,
				"text xml": ut.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(e, t) {
			return t ? H(H(e, ut.ajaxSettings), t) : H(ut.ajaxSettings, e)
		},
		ajaxPrefilter: L(Xn),
		ajaxTransport: L($n),
		ajax: function(e, n) {
			function r(e, n, r, i) {
				var o, p, y, b, w, T = n;
				2 !== x && (x = 2, l && clearTimeout(l), u = t, a = i || "", C.readyState = e > 0 ? 4 : 0, o = e >= 200 && 300 > e || 304 === e, r && (b = q(d, C, r)), b = R(d, b, C, o), o ? (d.ifModified && (w = C.getResponseHeader("Last-Modified"), w && (ut.lastModified[s] = w), w = C.getResponseHeader("etag"), w && (ut.etag[s] = w)), 204 === e || "HEAD" === d.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = b.state, p = b.data, y = b.error, o = !y)) : (y = T, (e || !T) && (T = "error", 0 > e && (e = 0))), C.status = e, C.statusText = (n || T) + "", o ? m.resolveWith(f, [p, T, C]) : m.rejectWith(f, [C, T, y]), C.statusCode(v), v = t, c && h.trigger(o ? "ajaxSuccess" : "ajaxError", [C, d, o ? p : y]), g.fireWith(f, [C, T]), c && (h.trigger("ajaxComplete", [C, d]), --ut.active || ut.event.trigger("ajaxStop")))
			}
			"object" == typeof e && (n = e, e = t), n = n || {};
			var i, o, s, a, l, c, u, p, d = ut.ajaxSetup({}, n),
				f = d.context || d,
				h = d.context && (f.nodeType || f.jquery) ? ut(f) : ut.event,
				m = ut.Deferred(),
				g = ut.Callbacks("once memory"),
				v = d.statusCode || {},
				y = {},
				b = {},
				x = 0,
				w = "canceled",
				C = {
					readyState: 0,
					getResponseHeader: function(e) {
						var t;
						if (2 === x) {
							if (!p) for (p = {}; t = Bn.exec(a);) p[t[1].toLowerCase()] = t[2];
							t = p[e.toLowerCase()]
						}
						return null == t ? null : t
					},
					getAllResponseHeaders: function() {
						return 2 === x ? a : null
					},
					setRequestHeader: function(e, t) {
						var n = e.toLowerCase();
						return x || (e = b[n] = b[n] || e, y[e] = t), this
					},
					overrideMimeType: function(e) {
						return x || (d.mimeType = e), this
					},
					statusCode: function(e) {
						var t;
						if (e) if (2 > x) for (t in e) v[t] = [v[t], e[t]];
						else C.always(e[C.status]);
						return this
					},
					abort: function(e) {
						var t = e || w;
						return u && u.abort(t), r(0, t), this
					}
				};
			if (m.promise(C).complete = g.add, C.success = C.done, C.error = C.fail, d.url = ((e || d.url || Pn) + "").replace(Rn, "").replace(_n, Ln[1] + "//"), d.type = n.method || n.type || d.method || d.type, d.dataTypes = ut.trim(d.dataType || "*").toLowerCase().match(dt) || [""], null == d.crossDomain && (i = In.exec(d.url.toLowerCase()), d.crossDomain = !(!i || i[1] === Ln[1] && i[2] === Ln[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (Ln[3] || ("http:" === Ln[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = ut.param(d.data, d.traditional)), P(Xn, d, n, C), 2 === x) return C;
			c = d.global, c && 0 === ut.active++ && ut.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Mn.test(d.type), s = d.url, d.hasContent || (d.data && (s = d.url += (qn.test(s) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = On.test(s) ? s.replace(On, "$1_=" + Hn++) : s + (qn.test(s) ? "&" : "?") + "_=" + Hn++)), d.ifModified && (ut.lastModified[s] && C.setRequestHeader("If-Modified-Since", ut.lastModified[s]), ut.etag[s] && C.setRequestHeader("If-None-Match", ut.etag[s])), (d.data && d.hasContent && d.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", d.contentType), C.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + zn + "; q=0.01" : "") : d.accepts["*"]);
			for (o in d.headers) C.setRequestHeader(o, d.headers[o]);
			if (d.beforeSend && (d.beforeSend.call(f, C, d) === !1 || 2 === x)) return C.abort();
			w = "abort";
			for (o in {
				success: 1,
				error: 1,
				complete: 1
			}) C[o](d[o]);
			if (u = P($n, d, n, C)) {
				C.readyState = 1, c && h.trigger("ajaxSend", [C, d]), d.async && d.timeout > 0 && (l = setTimeout(function() {
					C.abort("timeout")
				}, d.timeout));
				try {
					x = 1, u.send(y, r)
				} catch (T) {
					if (!(2 > x)) throw T;
					r(-1, T)
				}
			} else r(-1, "No Transport");
			return C
		},
		getJSON: function(e, t, n) {
			return ut.get(e, t, n, "json")
		},
		getScript: function(e, n) {
			return ut.get(e, t, n, "script")
		}
	}), ut.each(["get", "post"], function(e, n) {
		ut[n] = function(e, r, i, o) {
			return ut.isFunction(r) && (o = o || i, i = r, r = t), ut.ajax({
				url: e,
				type: n,
				dataType: o,
				data: r,
				success: i
			})
		}
	}), ut.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function(e) {
				return ut.globalEval(e), e
			}
		}
	}), ut.ajaxPrefilter("script", function(e) {
		e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
	}), ut.ajaxTransport("script", function(e) {
		if (e.crossDomain) {
			var n, r = Y.head || ut("head")[0] || Y.documentElement;
			return {
				send: function(t, i) {
					n = Y.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, t) {
						(t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
					}, r.insertBefore(n, r.firstChild)
				},
				abort: function() {
					n && n.onload(t, !0)
				}
			}
		}
	});
	var Vn = [],
		Gn = /(=)\?(?=&|$)|\?\?/;
	ut.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var e = Vn.pop() || ut.expando + "_" + Hn++;
			return this[e] = !0, e
		}
	}), ut.ajaxPrefilter("json jsonp", function(n, r, i) {
		var o, s, a, l = n.jsonp !== !1 && (Gn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Gn.test(n.data) && "data");
		return l || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = ut.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Gn, "$1" + o) : n.jsonp !== !1 && (n.url += (qn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function() {
			return a || ut.error(o + " was not called"), a[0]
		}, n.dataTypes[0] = "json", s = e[o], e[o] = function() {
			a = arguments
		}, i.always(function() {
			e[o] = s, n[o] && (n.jsonpCallback = r.jsonpCallback, Vn.push(o)), a && ut.isFunction(s) && s(a[0]), a = s = t
		}), "script") : void 0
	});
	var Kn, Yn, Qn = 0,
		Jn = e.ActiveXObject &&
	function() {
		var e;
		for (e in Kn) Kn[e](t, !0)
	};
	ut.ajaxSettings.xhr = e.ActiveXObject ?
	function() {
		return !this.isLocal && O() || B()
	} : O, Yn = ut.ajaxSettings.xhr(), ut.support.cors = !! Yn && "withCredentials" in Yn, Yn = ut.support.ajax = !! Yn, Yn && ut.ajaxTransport(function(n) {
		if (!n.crossDomain || ut.support.cors) {
			var r;
			return {
				send: function(i, o) {
					var s, a, l = n.xhr();
					if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields) for (a in n.xhrFields) l[a] = n.xhrFields[a];
					n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
					try {
						for (a in i) l.setRequestHeader(a, i[a])
					} catch (c) {}
					l.send(n.hasContent && n.data || null), r = function(e, i) {
						var a, c, u, p;
						try {
							if (r && (i || 4 === l.readyState)) if (r = t, s && (l.onreadystatechange = ut.noop, Jn && delete Kn[s]), i) 4 !== l.readyState && l.abort();
							else {
								p = {}, a = l.status, c = l.getAllResponseHeaders(), "string" == typeof l.responseText && (p.text = l.responseText);
								try {
									u = l.statusText
								} catch (d) {
									u = ""
								}
								a || !n.isLocal || n.crossDomain ? 1223 === a && (a = 204) : a = p.text ? 200 : 404
							}
						} catch (f) {
							i || o(-1, f)
						}
						p && o(a, u, p, c)
					}, n.async ? 4 === l.readyState ? setTimeout(r) : (s = ++Qn, Jn && (Kn || (Kn = {}, ut(e).unload(Jn)), Kn[s] = r), l.onreadystatechange = r) : r()
				},
				abort: function() {
					r && r(t, !0)
				}
			}
		}
	});
	var Zn, er, tr = /^(?:toggle|show|hide)$/,
		nr = new RegExp("^(?:([+-])=|)(" + pt + ")([a-z%]*)$", "i"),
		rr = /queueHooks$/,
		ir = [W],
		or = {
			"*": [function(e, t) {
				var n = this.createTween(e, t),
					r = n.cur(),
					i = nr.exec(t),
					o = i && i[3] || (ut.cssNumber[e] ? "" : "px"),
					s = (ut.cssNumber[e] || "px" !== o && +r) && nr.exec(ut.css(n.elem, e)),
					a = 1,
					l = 20;
				if (s && s[3] !== o) {
					o = o || s[3], i = i || [], s = +r || 1;
					do a = a || ".5", s /= a, ut.style(n.elem, e, s + o);
					while (a !== (a = n.cur() / r) && 1 !== a && --l)
				}
				return i && (s = n.start = +s || +r || 0, n.unit = o, n.end = i[1] ? s + (i[1] + 1) * i[2] : +i[2]), n
			}]
		};
	ut.Animation = ut.extend(_, {
		tweener: function(e, t) {
			ut.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
			for (var n, r = 0, i = e.length; i > r; r++) n = e[r], or[n] = or[n] || [], or[n].unshift(t)
		},
		prefilter: function(e, t) {
			t ? ir.unshift(e) : ir.push(e)
		}
	}), ut.Tween = X, X.prototype = {
		constructor: X,
		init: function(e, t, n, r, i, o) {
			this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (ut.cssNumber[n] ? "" : "px")
		},
		cur: function() {
			var e = X.propHooks[this.prop];
			return e && e.get ? e.get(this) : X.propHooks._default.get(this)
		},
		run: function(e) {
			var t, n = X.propHooks[this.prop];
			return this.pos = t = this.options.duration ? ut.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : X.propHooks._default.set(this), this
		}
	}, X.prototype.init.prototype = X.prototype, X.propHooks = {
		_default: {
			get: function(e) {
				var t;
				return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ut.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
			},
			set: function(e) {
				ut.fx.step[e.prop] ? ut.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ut.cssProps[e.prop]] || ut.cssHooks[e.prop]) ? ut.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
			}
		}
	}, X.propHooks.scrollTop = X.propHooks.scrollLeft = {
		set: function(e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}
	}, ut.each(["toggle", "show", "hide"], function(e, t) {
		var n = ut.fn[t];
		ut.fn[t] = function(e, r, i) {
			return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate($(t, !0), e, r, i)
		}
	}), ut.fn.extend({
		fadeTo: function(e, t, n, r) {
			return this.filter(T).css("opacity", 0).show().end().animate({
				opacity: t
			}, e, n, r)
		},
		animate: function(e, t, n, r) {
			var i = ut.isEmptyObject(e),
				o = ut.speed(t, n, r),
				s = function() {
					var t = _(this, ut.extend({}, e), o);
					(i || ut._data(this, "finish")) && t.stop(!0)
				};
			return s.finish = s, i || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
		},
		stop: function(e, n, r) {
			var i = function(e) {
					var t = e.stop;
					delete e.stop, t(r)
				};
			return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
				var t = !0,
					n = null != e && e + "queueHooks",
					o = ut.timers,
					s = ut._data(this);
				if (n) s[n] && s[n].stop && i(s[n]);
				else for (n in s) s[n] && s[n].stop && rr.test(n) && i(s[n]);
				for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
				(t || !r) && ut.dequeue(this, e)
			})
		},
		finish: function(e) {
			return e !== !1 && (e = e || "fx"), this.each(function() {
				var t, n = ut._data(this),
					r = n[e + "queue"],
					i = n[e + "queueHooks"],
					o = ut.timers,
					s = r ? r.length : 0;
				for (n.finish = !0, ut.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
				for (t = 0; s > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
				delete n.finish
			})
		}
	}), ut.each({
		slideDown: $("show"),
		slideUp: $("hide"),
		slideToggle: $("toggle"),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	}, function(e, t) {
		ut.fn[e] = function(e, n, r) {
			return this.animate(t, e, n, r)
		}
	}), ut.speed = function(e, t, n) {
		var r = e && "object" == typeof e ? ut.extend({}, e) : {
			complete: n || !n && t || ut.isFunction(e) && e,
			duration: e,
			easing: n && t || t && !ut.isFunction(t) && t
		};
		return r.duration = ut.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in ut.fx.speeds ? ut.fx.speeds[r.duration] : ut.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
			ut.isFunction(r.old) && r.old.call(this), r.queue && ut.dequeue(this, r.queue)
		}, r
	}, ut.easing = {
		linear: function(e) {
			return e
		},
		swing: function(e) {
			return .5 - Math.cos(e * Math.PI) / 2
		}
	}, ut.timers = [], ut.fx = X.prototype.init, ut.fx.tick = function() {
		var e, n = ut.timers,
			r = 0;
		for (Zn = ut.now(); r < n.length; r++) e = n[r], e() || n[r] !== e || n.splice(r--, 1);
		n.length || ut.fx.stop(), Zn = t
	}, ut.fx.timer = function(e) {
		e() && ut.timers.push(e) && ut.fx.start()
	}, ut.fx.interval = 13, ut.fx.start = function() {
		er || (er = setInterval(ut.fx.tick, ut.fx.interval))
	}, ut.fx.stop = function() {
		clearInterval(er), er = null
	}, ut.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	}, ut.fx.step = {}, ut.expr && ut.expr.filters && (ut.expr.filters.animated = function(e) {
		return ut.grep(ut.timers, function(t) {
			return e === t.elem
		}).length
	}), ut.fn.offset = function(e) {
		if (arguments.length) return e === t ? this : this.each(function(t) {
			ut.offset.setOffset(this, e, t)
		});
		var n, r, i = {
			top: 0,
			left: 0
		},
			o = this[0],
			s = o && o.ownerDocument;
		if (s) return n = s.documentElement, ut.contains(n, o) ? (typeof o.getBoundingClientRect !== G && (i = o.getBoundingClientRect()), r = z(s), {
			top: i.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
			left: i.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
		}) : i
	}, ut.offset = {
		setOffset: function(e, t, n) {
			var r = ut.css(e, "position");
			"static" === r && (e.style.position = "relative");
			var i, o, s = ut(e),
				a = s.offset(),
				l = ut.css(e, "top"),
				c = ut.css(e, "left"),
				u = ("absolute" === r || "fixed" === r) && ut.inArray("auto", [l, c]) > -1,
				p = {},
				d = {};
			u ? (d = s.position(), i = d.top, o = d.left) : (i = parseFloat(l) || 0, o = parseFloat(c) || 0), ut.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (p.top = t.top - a.top + i), null != t.left && (p.left = t.left - a.left + o), "using" in t ? t.using.call(e, p) : s.css(p)
		}
	}, ut.fn.extend({
		position: function() {
			if (this[0]) {
				var e, t, n = {
					top: 0,
					left: 0
				},
					r = this[0];
				return "fixed" === ut.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ut.nodeName(e[0], "html") || (n = e.offset()), n.top += ut.css(e[0], "borderTopWidth", !0), n.left += ut.css(e[0], "borderLeftWidth", !0)), {
					top: t.top - n.top - ut.css(r, "marginTop", !0),
					left: t.left - n.left - ut.css(r, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for (var e = this.offsetParent || Q; e && !ut.nodeName(e, "html") && "static" === ut.css(e, "position");) e = e.offsetParent;
				return e || Q
			})
		}
	}), ut.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(e, n) {
		var r = /Y/.test(n);
		ut.fn[e] = function(i) {
			return ut.access(this, function(e, i, o) {
				var s = z(e);
				return o === t ? s ? n in s ? s[n] : s.document.documentElement[i] : e[i] : (s ? s.scrollTo(r ? ut(s).scrollLeft() : o, r ? o : ut(s).scrollTop()) : e[i] = o, void 0)
			}, e, i, arguments.length, null)
		}
	}), ut.each({
		Height: "height",
		Width: "width"
	}, function(e, n) {
		ut.each({
			padding: "inner" + e,
			content: n,
			"": "outer" + e
		}, function(r, i) {
			ut.fn[i] = function(i, o) {
				var s = arguments.length && (r || "boolean" != typeof i),
					a = r || (i === !0 || o === !0 ? "margin" : "border");
				return ut.access(this, function(n, r, i) {
					var o;
					return ut.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? ut.css(n, r, a) : ut.style(n, r, i, a)
				}, n, s ? i : t, s, null)
			}
		})
	}), ut.fn.size = function() {
		return this.length
	}, ut.fn.andSelf = ut.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = ut : (e.jQuery = e.$ = ut, "function" == typeof define && define.amd && define("jquery", [], function() {
		return ut
	}))
}(window);
var _gaq = _gaq || [];
!
function(e) {
	"use strict";
	"function" == typeof define && define.amd ? define("analytics", ["jquery"], e) : window.GA = e(window.jQuery)
}(function(e) {
	"use strict";
	function t(e) {
		var t;
		for (t = 0; t < e.length; t += 1) t > 0 && (e[t][0] = "t" + t + "." + e[t][0]);
		return e
	}
	function n() {
		var e, n, r;
		for (n = 0; n < arguments.length; n += 1) {
			for (e = [], r = 0; r < l.length; r += 1) e.push(arguments[n].slice(0));
			_gaq.push.apply(_gaq, t(e))
		}
	}
	function r() {
		var e = ["_trackEvent"];
		e = e.concat(Array.prototype.slice.call(arguments)), null == e[1] && null != o && (e[1] = o), n(e)
	}
	function i(e) {
		o = e
	}
	var o, s, a, l = ["UA-3776042-30", "UA-3776042-4"],
		c = {};
	for (c.send = n, c.event = r, c.setCategory = i, a = [], s = 0; s < l.length; s += 1) a.push(["_setAccount", l[s]]);
	return _gaq.push.apply(_gaq, t(a)), _gaq.push(["_setLocalGifPath", ("https:" === document.location.protocol ? "https://" : "http://") + "cs.xero.com/__utm.gif"], ["_setLocalRemoteServerMode"]), n(["_setDomainName", "xero.com"]), n(["_trackPageview"]), e && e(function() {
		o || (o = e("body").data("ga-default-category") || null), e("[data-gaaction]:not(.noEventTracking)").each(function() {
			var t = e(this),
				n = t.data("gacategory"),
				i = t.data("gaaction"),
				s = t.data("galabel");
			null == s && (s = e.trim(t.text())), null == n && null == o || null == i || t.on("click", function() {
				r(n, i, s)
			})
		})
	}), function() {
		var e = document.createElement("script");
		e.type = "text/javascript", e.async = !0, e.src = ("https:" == document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js";
		var t = document.getElementsByTagName("script")[0];
		t.parentNode.insertBefore(e, t)
	}(), c
}), function(e) {
	"use strict";
	"function" == typeof define && define.amd ? define("region-bar", ["jquery", "analytics"], e) : window.RegionBar = e(window.jQuery, window.GA)
}(function(e, t) {
	"use strict";
	var n, r, i = {},
		o = !1,
		s = !1;
	return i.init = function() {
		n = e(e("#region-bar-html").html()), n.find(".regionChangerDropdown").attr("class", "dropdown").select2({
			minimumResultsForSearch: 10
		});
		var s = n.find(".region-changer .select2-choice span"),
			a = n.find(".region-changer select"),
			l = n.find(".flag"),
			c = a.find(":selected").text();
		r = a.val(), "au" === r && (c = "Australian"), n.find(".text .region").text(c), l.attr("class", "flag-" + r), a.on("change", function() {
			r = a.val(), l.attr("class", "flag-" + r), t.event("Multi Region Bar", "Region Changed", r)
		}), n.find(".region-changer .select2-results").on("click", '.select2-result:contains("' + s.text().replace('"', "") + '")', function() {
			i.close()
		}), n.find(".close-button").on("click", function() {
			i.close()
		}), "int" === r && s.text("Select region"), e(".masterForm").prepend(n), o = !0
	}, i.open = function() {
		o || i.init(), s = !0, n.slideDown(), n.trigger("open.regionbar"), t.event("Multi Region Bar", "Open", r)
	}, i.close = function() {
		s = !1, n.slideUp(function() {
			n.trigger("close.regionbar")
		}), t.event("Multi Region Bar", "Close", r)
	}, i.isOpen = function() {
		return s
	}, i
}), define("text", ["module"], function(e) {
	"use strict";
	var t, n, r, i, o, s = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP", "Msxml2.XMLHTTP.4.0"],
		a = /^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,
		l = /<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,
		c = "undefined" != typeof location && location.href,
		u = c && location.protocol && location.protocol.replace(/\:/, ""),
		p = c && location.hostname,
		d = c && (location.port || void 0),
		f = {},
		h = e.config && e.config() || {};
	return t = {
		version: "2.0.10",
		strip: function(e) {
			if (e) {
				e = e.replace(a, "");
				var t = e.match(l);
				t && (e = t[1])
			} else e = "";
			return e
		},
		jsEscape: function(e) {
			return e.replace(/(['\\])/g, "\\$1").replace(/[\f]/g, "\\f").replace(/[\b]/g, "\\b").replace(/[\n]/g, "\\n").replace(/[\t]/g, "\\t").replace(/[\r]/g, "\\r").replace(/[\u2028]/g, "\\u2028").replace(/[\u2029]/g, "\\u2029")
		},
		createXhr: h.createXhr ||
		function() {
			var e, t, n;
			if ("undefined" != typeof XMLHttpRequest) return new XMLHttpRequest;
			if ("undefined" != typeof ActiveXObject) for (t = 0; 3 > t; t += 1) {
				n = s[t];
				try {
					e = new ActiveXObject(n)
				} catch (r) {}
				if (e) {
					s = [n];
					break
				}
			}
			return e
		},
		parseName: function(e) {
			var t, n, r, i = !1,
				o = e.indexOf("."),
				s = 0 === e.indexOf("./") || 0 === e.indexOf("../");
			return -1 !== o && (!s || o > 1) ? (t = e.substring(0, o), n = e.substring(o + 1, e.length)) : t = e, r = n || t, o = r.indexOf("!"), -1 !== o && (i = "strip" === r.substring(o + 1), r = r.substring(0, o), n ? n = r : t = r), {
				moduleName: t,
				ext: n,
				strip: i
			}
		},
		xdRegExp: /^((\w+)\:)?\/\/([^\/\\]+)/,
		useXhr: function(e, n, r, i) {
			var o, s, a, l = t.xdRegExp.exec(e);
			return l ? (o = l[2], s = l[3], s = s.split(":"), a = s[1], s = s[0], !(o && o !== n || s && s.toLowerCase() !== r.toLowerCase() || (a || s) && a !== i)) : !0
		},
		finishLoad: function(e, n, r, i) {
			r = n ? t.strip(r) : r, h.isBuild && (f[e] = r), i(r)
		},
		load: function(e, n, r, i) {
			if (i.isBuild && !i.inlineText) return r(), void 0;
			h.isBuild = i.isBuild;
			var o = t.parseName(e),
				s = o.moduleName + (o.ext ? "." + o.ext : ""),
				a = n.toUrl(s),
				l = h.useXhr || t.useXhr;
			return 0 === a.indexOf("empty:") ? (r(), void 0) : (!c || l(a, u, p, d) ? t.get(a, function(n) {
				t.finishLoad(e, o.strip, n, r)
			}, function(e) {
				r.error && r.error(e)
			}) : n([s], function(e) {
				t.finishLoad(o.moduleName + "." + o.ext, o.strip, e, r)
			}), void 0)
		},
		write: function(e, n, r) {
			if (f.hasOwnProperty(n)) {
				var i = t.jsEscape(f[n]);
				r.asModule(e + "!" + n, "define(function () { return '" + i + "';});\n")
			}
		},
		writeFile: function(e, n, r, i, o) {
			var s = t.parseName(n),
				a = s.ext ? "." + s.ext : "",
				l = s.moduleName + a,
				c = r.toUrl(s.moduleName + a) + ".js";
			t.load(l, r, function() {
				var n = function(e) {
						return i(c, e)
					};
				n.asModule = function(e, t) {
					return i.asModule(e, c, t)
				}, t.write(e, l, n, o)
			}, o)
		}
	}, "node" === h.env || !h.env && "undefined" != typeof process && process.versions && process.versions.node && !process.versions["node-webkit"] ? (n = require.nodeRequire("fs"), t.get = function(e, t, r) {
		try {
			var i = n.readFileSync(e, "utf8");
			0 === i.indexOf("﻿") && (i = i.substring(1)), t(i)
		} catch (o) {
			r(o)
		}
	}) : "xhr" === h.env || !h.env && t.createXhr() ? t.get = function(e, n, r, i) {
		var o, s = t.createXhr();
		if (s.open("GET", e, !0), i) for (o in i) i.hasOwnProperty(o) && s.setRequestHeader(o.toLowerCase(), i[o]);
		h.onXhr && h.onXhr(s, e), s.onreadystatechange = function() {
			var t, i;
			4 === s.readyState && (t = s.status, t > 399 && 600 > t ? (i = new Error(e + " HTTP status: " + t), i.xhr = s, r(i)) : n(s.responseText), h.onXhrComplete && h.onXhrComplete(s, e))
		}, s.send(null)
	} : "rhino" === h.env || !h.env && "undefined" != typeof Packages && "undefined" != typeof java ? t.get = function(e, t) {
		var n, r, i = "utf-8",
			o = new java.io.File(e),
			s = java.lang.System.getProperty("line.separator"),
			a = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(o), i)),
			l = "";
		try {
			for (n = new java.lang.StringBuffer, r = a.readLine(), r && r.length() && 65279 === r.charAt(0) && (r = r.substring(1)), null !== r && n.append(r); null !== (r = a.readLine());) n.append(s), n.append(r);
			l = String(n.toString())
		} finally {
			a.close()
		}
		t(l)
	} : ("xpconnect" === h.env || !h.env && "undefined" != typeof Components && Components.classes && Components.interfaces) && (r = Components.classes, i = Components.interfaces, Components.utils["import"]("resource://gre/modules/FileUtils.jsm"), o = "@mozilla.org/windows-registry-key;1" in r, t.get = function(e, t) {
		var n, s, a, l = {};
		o && (e = e.replace(/\//g, "\\")), a = new FileUtils.File(e);
		try {
			n = r["@mozilla.org/network/file-input-stream;1"].createInstance(i.nsIFileInputStream), n.init(a, 1, 0, !1), s = r["@mozilla.org/intl/converter-input-stream;1"].createInstance(i.nsIConverterInputStream), s.init(n, "utf-8", n.available(), i.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER), s.readString(n.available(), l), s.close(), n.close(), t(l.value)
		} catch (c) {
			throw new Error((a && a.path || "") + ": " + c)
		}
	}), t
}), define("text!partner-bar.html", [], function() {
	return '<div id="partner-referral-form-popup" class="popover" data-ui="popover-panel">\n    <div id="partner-referral-form-popup-inner">\n        <h2>\n            Special package pricing &amp; services with <span class="partner-name">&nbsp;</span>\n        </h2>\n            <p>\n                Enter your details and the team at <span class="partner-name">&nbsp;</span> will help you organise the best service for your business.\n            </p>\n            <hr/>\n            <div id="partnerform">\n                <label for="partnerform-name">Your name</label>\n                <input type="text" name="partnerform-name" id="partnerform-name" />\n                <label for="partnerform-email">Email address</label>\n                <input type="text" name="partnerform-email" id="partnerform-email" />\n                <label for="partnerform-phonenumber">\n                    Phone number <span>(optional)</span>\n                </label>\n                <input type="text" name="partnerform-phonenumber" id="partnerform-phonenumber" />\n                <label for="partnerform-description">A brief description of your business</label>\n                <textarea name="partnerform-description" id="partnerform-description"></textarea>\n                <input type="hidden" name="partnerform-partnercontact" id="partnerform-partnercontact" />\n                <input type="submit" value="Get the deal" id="partnerform-submit" />\n                <a href="#" data-ui="popover-close" id="partnerform-cancel">Cancel</a>\n            </div>\n        </div><!-- /end popup-inner -->\n    <div class="clear"></div>\n    <div id="partner-referral-form-popup-inner-success">\n        <div id="partnerbanner-success">&nbsp;</div>\n        <h2>\n            You\'ll hear from <span class="partner-name">&nbsp;</span> soon.\n        </h2>\n        <hr/>\n        <a href="#" data-ui="popover-close" id="partnerform-close">Close</a>\n    </div>\n    <div id="partner-referral-form-popup-inner-failure">\n        <h2>\n            Oops, there was an issue contacting <span class="partner-name">&nbsp;</span>. Please try again.\n        </h2>\n        <hr/>\n        <a href="#" id="partnerform-retry">Retry</a>\n    </div>\n</div>\n<div class=\'popover-mask\' data-ui=\'popover-mask\'></div>\n'
}), function(e) {
	e.fn.tsPopover = function(t, n, r) {
		var i = [],
			o = {
				drag: function(t, n, r) {
					e(t).css({
						top: n + "px",
						left: r + "px"
					})
				},
				simple: {
					tranIn: function(t) {
						a.mask(t.settings.mask, function() {
							e("[data-ui*='popover-mask']").show()
						}), a.centerPopover(t), e(t.container).show(), a.openCallback(t)
					},
					tranOut: function(t) {
						a.mask(t.settings.mask, function() {
							e("[data-ui*='popover-mask']").hide()
						}), e(t.container).hide(), a.closeCallback(t)
					}
				},
				fade: {
					tranIn: function(t) {
						a.mask(t.settings.mask, function() {
							e("[data-ui*='popover-mask']").fadeIn()
						}), a.centerPopover(t), e(t.container).fadeIn(function() {
							a.openCallback(t)
						})
					},
					tranOut: function(t) {
						a.mask(t.settings.mask, function() {
							e("[data-ui*='popover-mask']").fadeOut()
						}), e(t.container).fadeOut("slow", function() {
							a.closeCallback(t)
						})
					}
				}
			},
			s = {
				open: function(t) {
					e("[data-ui*='popover-trigger'][target='" + t.container.id + "']").addClass("current"), e(t.container).addClass("current"), o[t.settings.transition].tranIn(t)
				},
				close: function(t) {
					e("[data-ui*='popover-trigger'].current").removeClass("current"), e(t.container).removeClass("current");
					try {
						o[t.settings.transition].tranOut(t)
					} catch (n) {}
				}
			},
			a = {
				mask: function(e, t) {
					e && t()
				},
				drag: function(e, t, n) {
					o.drag(e.container, t, n)
				},
				openCallback: function(e) {
					void 0 !== e.settings.callbacks.open && e.settings.callbacks.open(e)
				},
				closeCallback: function(e) {
					a.resetPopover(e), void 0 !== e.settings.callbacks.close && e.settings.callbacks.close(e)
				},
				resetPopover: function(t) {
					e(t.container).css({
						top: "",
						left: "",
						"margin-left": "",
						"margin-top": ""
					})
				},
				getPopoverObjectById: function(t) {
					var n = {};
					return e(i).each(function(r, i) {
						currentContainerId = e(i.container).attr("id"), currentContainerId === t && (n = i)
					}), n
				},
				centerPopover: function(t) {
					e(t.container).css({
						"margin-top": "-" + e(t.container).outerHeight() / 2 + "px",
						"margin-left": "-" + e(t.container).outerWidth() / 2 + "px"
					})
				}
			};
		if (s[t]) return n = {
			container: this,
			settings: {
				transition: n,
				callbacks: {
					open: r,
					close: r
				}
			}
		}, e("[data-ui='popover-mask']").length && (n.settings.mask = !0), s[t].call(s, n, n);
		if ("object" == typeof t || void 0 === t) {
			var l = e.extend({
				transition: "simple",
				easyClose: !0,
				draggable: !1,
				mask: !0,
				callbacks: {
					open: function() {
						return !1
					},
					close: function() {
						return !1
					}
				}
			}, t);
			return this.each(function() {
				var t, n = {
					container: this,
					settings: l,
					triggers: e("a[target='" + this.id + "']"),
					close: e(this).find("[data-ui*='popover-close']")[0]
				},
					r = a;
				t = {
					triggers: function() {
						0 < n.triggers.length && e(n.triggers).each(function() {
							e(this).click(function(t) {
								t.preventDefault(), t.stopPropagation(), e(n.container).hasClass("current") || (e("[data-ui*='popover-panel'][class='current']").length && e(i).each(function(e, t) {
									s.close(t)
								}), s.open(n))
							})
						})
					},
					closeButton: function() {
						n.close && e(n.close).click(function(e) {
							e.preventDefault(), s.close(n)
						})
					},
					easyClose: function() {
						e("html").data("easyCloseHasBeenSet", !0), e(document).bind("click", function(t) {
							var n = e("[data-ui*='popover-panel'][class$='current']")[0];
							1 > e(t.target).closest(n).length && e(t.target).attr("target") !== e(n).attr("id") && s.close(r.getPopoverObjectById(e(n).attr("id")))
						})
					},
					drag: function() {
						e(n.container).bind("mousedown", function(t) {
							var i = t.pageY - n.container.offsetTop + parseInt(e(n.container).css("margin-top"), 10),
								o = t.pageX - n.container.offsetLeft + parseInt(e(n.container).css("margin-left"), 10);
							e(document).bind("mousemove", function(e) {
								r.drag(n, e.pageY - i, e.pageX - o)
							}), e(document).bind("mouseup", function() {
								e(document).unbind("mousemove"), e(document).unbind("mouseup")
							})
						})
					}
				}, t.triggers(), t.closeButton(), !0 !== e("html").data("easyCloseHasBeenSet") && !0 === n.settings.easyClose && t.easyClose(), !0 === n.settings.draggable && t.drag(), i[i.length] = n
			})
		}
		e.error(this)
	}
}(jQuery), define("vendor/ts-popover", ["jquery"], function() {}), function(e) {
	"use strict";
	"function" == typeof define && define.amd ? define("partner-bar", ["jquery", "analytics", "region-bar", "text!partner-bar.html", "vendor/ts-popover"], e) : (window.XeroPartner = e(window.jQuery, window.GA, window.RegionBar), "undefined" != typeof RegionBar && RegionBar.isOpen() ? $("#region-bar").one("close.regionbar", function() {
		XeroPartner.init()
	}) : XeroPartner.init())
}(function(e, t, n, r) {
	var i, o = "live";
	"live" == o && (i = "/shared/xml/partnertrackbackfeed.xml");
	var s = {
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		'"': "&quot;",
		"'": "&#39;",
		"/": "&#x2F;"
	},
		a = {
			id: !1,
			name: !1,
			escape: function(e) {
				return String(e).replace(/[&<>"'\/]/g, function(e) {
					return s[e]
				})
			},
			getCookie: function(t) {
				var n, r, i, o, s = document.cookie.split(";");
				for (n = 0; n < s.length; n++) if (r = s[n], i = r.split("=", 2), o = e.trim(i[0]), o == t) return r
			},
			destroy: function() {
				document.cookie = "XeroPartnerBanner=null;expires=-1;path=/", e("#dismiss-banner").hide(), e("#partner-banner").slideUp("slow")
			},
			getValues: function(e) {
				var t, n;
				t = e.split("XeroPartnerBanner=", 2), n = t[1].split("|", 5);
				for (var r = 0; r < n.length; r += 1) n[r] = decodeURIComponent(n[r]);
				return n
			},
			getUrlVar: function(e) {
				var t = new RegExp(e + "=([^&]*)", "i").exec(window.location.search);
				return t && unescape(t[1]) || ""
			},
			searchXML: function(t) {
				var n, r;
				return e.ajax({
					url: i,
					dataType: "xml",
					async: !1,
					success: function(e) {
						n = e
					}
				}), e(n).find("PartnerTrackback").each(function() {
					e(this).text() == t && (r = e(this).parent().children("name").text())
				}), {
					partnername: r
				}
			},
			outputBanner: function(n, r) {
				e("body").prepend('<div id="partner-banner"><div class="b-container"><div class="b-row"><div class="span12"><a id="dismiss-banner" href="">Dismiss</a><p>Get special package pricing & services with <strong>' + a.escape(n) + '</strong><a data-ui="popover-trigger" href="" target="partner-referral-form-popup" data-gacategory="Partner Banners" data-gaaction="Open Enquiry Form" data-galabel="' + a.escape(a.id) + '">Get the details</a></p></div></div></div></div>'), e(".partner-name").text(n), e("#partnerform-partnercontact").val(r), e("#partner-banner").slideDown("slow"), e("#dismiss-banner").delay(2e3).fadeIn(), t.event("Partner Banners", "Impression", a.id)
			},
			init: function() {
				var n = "XeroPartnerBanner",
					i = a.getCookie(n),
					o = document.referrer || "none",
					s = a.getUrlVar("type"),
					l = a.getUrlVar("pid");
				if (r && e("body").append(r), "partner" == s) {
					var c = a.searchXML(l);
					"undefined" != typeof c.partnername && (document.cookie = n + "=" + encodeURIComponent(s) + "|" + encodeURIComponent(l) + "|" + encodeURIComponent(c.partnername) + "|" + encodeURIComponent(o) + "; path=/", a.id = l, a.name = c.partnername, a.outputBanner(c.partnername, l))
				} else if (null != i && "" != i) {
					var u = a.getValues(i);
					s = u[0], "partner" == s && (a.id = u[1], a.name = u[2], a.outputBanner(a.name, a.id))
				}
				e("*[data-ui='popover-panel']").tsPopover({
					transition: "simple",
					easyClose: !1,
					draggable: !1,
					mask: !0
				});
				var p, d, f;
				e("#dismiss-banner").click(function(e) {
					e.preventDefault(), a.destroy()
				}), e("#partnerform-cancel").click(function() {
					e("#partner-referral-form-popup").tsPopover("close", "fade"), e("#partnerform").find("input:text, textarea").val(""), e("label[for='partnerform-name']").html("Your name").removeClass("error"), e("label[for='partnerform-description']").html("A brief description of your business").removeClass("error"), e("label[for='partnerform-email']").html("Email address").removeClass("error")
				}), e("#partnerform-close").click(function() {
					e("#partner-referral-form-popup").tsPopover("close", "fade")
				}), e("#partnerform-retry").click(function() {
					e("#partner-referral-form-popup-inner").slideDown(), e("#partner-referral-form-popup-inner-failure").hide()
				}), e("#partnerform-name").blur(function() {
					"" == e(this).val() ? (e("label[for='partnerform-name']").html("Please enter your name").addClass("error"), p = !1) : (e("label[for='partnerform-name']").html("Your name").removeClass("error"), p = !0)
				}), e("#partnerform-description").blur(function() {
					"" == e(this).val() ? (e("label[for='partnerform-description']").html("Please enter a description of your business").addClass("error"), f = !1) : (e("label[for='partnerform-description']").html("A brief description of your business").removeClass("error"), f = !0)
				}), e("#partnerform-email").blur(function() {
					"" == e(this).val() ? (e("label[for='partnerform-email']").html("Please enter your email address").addClass("error"), d = !1) : /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(e(this).val()) ? (e("label[for='partnerform-email']").html("Email address").removeClass("error"), d = !0) : (e("label[for='partnerform-email']").html("Please enter a valid email address").addClass("error"), d = !1)
				}), e("#partnerform-submit").click(function(n) {
					var r;
					n.preventDefault(), "" == e("#partnerform-name").val() ? (e("label[for='partnerform-name']").html("Please enter your name").addClass("error"), p = !1) : (e("label[for='partnerform-name']").html("Name").removeClass("error"), p = !0), "" == e("#partnerform-description").val() ? (e("label[for='partnerform-description']").html("Please enter a description of your business").addClass("error"), f = !1) : (e("label[for='partnerform-description']").html("A brief description of your business").removeClass("error"), f = !0), "" == e("#partnerform-email").val() ? (e("label[for='partnerform-email']").html("Please enter your email address").addClass("error"), d = !1) : /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(e("#partnerform-email").val()) ? (e("label[for='partnerform-email']").html("Email address").removeClass("error"), d = !0) : (e("label[for='partnerform-email']").html("Please enter a valid email address").addClass("error"), d = !1), p && d && f && (r = "" == e("#partnerform-phonenumber").val() ? "none entered" : e("#partnerform-phonenumber").val(), e.ajax({
						type: "POST",
						url: "/code/EmailSender/PartnerEmailSender.ashx",
						data: {
							name: e("#partnerform-name").val(),
							email: e("#partnerform-email").val(),
							template: "banner",
							phone: r,
							contact: e("#partnerform-partnercontact").val(),
							content: e("#partnerform-description").val()
						},
						success: function(n) {
							n.success ? (e("#partner-referral-form-popup-inner-success").show(), e("#partner-referral-form-popup-inner").slideUp(), t.event("Partner Banners", "Submit Enquiry", a.id)) : (e("#partner-referral-form-popup-inner-failure").show(), e("#partner-referral-form-popup-inner").slideUp())
						}
					}))
				})
			}
		};
	return a
}), function(e, t) {
	function n(e, t) {
		var n, r = 0,
			i = t.length;
		if (e.constructor === String) {
			for (; i > r; r += 1) if (0 === e.localeCompare(t[r])) return r
		} else for (; i > r; r += 1) if (n = t[r], n.constructor === String) {
			if (0 === n.localeCompare(e)) return r
		} else if (n === e) return r;
		return -1
	}
	function r(e, n) {
		return e === n ? !0 : e === t || n === t || null === e || null === n ? !1 : e.constructor === String ? 0 === e.localeCompare(n) : n.constructor === String ? 0 === n.localeCompare(e) : !1
	}
	function i(t, n) {
		var r, i, o;
		if (null === t || 1 > t.length) return [];
		for (r = t.split(n), i = 0, o = r.length; o > i; i += 1) r[i] = e.trim(r[i]);
		return r
	}
	function o(e) {
		e.bind("keydown", function() {
			e.data("keyup-change-value", e.val())
		}), e.bind("keyup", function() {
			e.val() !== e.data("keyup-change-value") && e.trigger("keyup-change")
		})
	}
	function s(n) {
		n.bind("mousemove", function(n) {
			var r = e(document).data("select2-lastpos");
			(r === t || r.x !== n.pageX || r.y !== n.pageY) && e(n.target).trigger("mousemove-filtered", n)
		})
	}
	function a(e, t) {
		var n;
		return function() {
			window.clearTimeout(n), n = window.setTimeout(t, e)
		}
	}
	function l(e, t) {
		var r = a(e, function(e) {
			t.trigger("scroll-debounced", e)
		});
		t.bind("scroll", function(e) {
			0 <= n(e.target, t.get()) && r(e)
		})
	}
	function c(e) {
		e.preventDefault(), e.stopPropagation()
	}
	function u(t) {
		var n, r = 0,
			i = null,
			o = t.quietMillis || 100;
		return function(s) {
			window.clearTimeout(n), n = window.setTimeout(function() {
				var n = r += 1,
					o = t.data,
					a = t.transport || e.ajax,
					o = o.call(this, s.term, s.page);
				null !== i && i.abort(), i = a.call(null, {
					url: t.url,
					dataType: t.dataType,
					data: o,
					success: function(e) {
						r > n || s.callback(t.results(e, s.page))
					}
				})
			}, o)
		}
	}
	function p(t) {
		var n = t,
			r = function(e) {
				return e.text
			};
		return e.isArray(n) || (r = n.text, e.isFunction(r) || (r = function(e) {
			return e[n.text]
		}), n = n.results), function(t) {
			var i = t.term.toUpperCase(),
				o = {};
			"" === i ? t.callback({
				results: n
			}) : (o.results = e(n).filter(function() {
				return r(this).toUpperCase().indexOf(i) >= 0
			}).get(), t.callback(o))
		}
	}
	function d(n) {
		return e.isFunction(n) ? n : function(r) {
			var i = r.term.toUpperCase(),
				o = {
					results: []
				};
			e(n).each(function() {
				var e = this.text !== t,
					n = e ? this.text : this;
				("" === i || 0 <= n.toUpperCase().indexOf(i)) && o.results.push(e ? this : {
					id: this,
					text: this
				})
			}), r.callback(o)
		}
	}
	function f(t, n) {
		var r = function() {};
		return r.prototype = new t, r.prototype.constructor = r, r.prototype.parent = t.prototype, r.prototype = e.extend(r.prototype, n), r
	}
	if (window.Select2 === t) {
		var h, m, g, v;
		h = {
			TAB: 9,
			ENTER: 13,
			ESC: 27,
			SPACE: 32,
			LEFT: 37,
			UP: 38,
			RIGHT: 39,
			DOWN: 40,
			SHIFT: 16,
			CTRL: 17,
			ALT: 18,
			PAGE_UP: 33,
			PAGE_DOWN: 34,
			HOME: 36,
			END: 35,
			BACKSPACE: 8,
			DELETE: 46,
			isArrow: function(e) {
				switch (e = e.which ? e.which : e) {
				case h.LEFT:
				case h.RIGHT:
				case h.UP:
				case h.DOWN:
					return !0
				}
				return !1
			},
			isControl: function(e) {
				switch (e = e.which ? e.which : e) {
				case h.SHIFT:
				case h.CTRL:
				case h.ALT:
					return !0
				}
				return !1
			},
			isFunctionKey: function(e) {
				return e = e.which ? e.which : e, e >= 112 && 123 >= e
			}
		}, e(document).delegate("*", "mousemove", function(t) {
			e(document).data("select2-lastpos", {
				x: t.pageX,
				y: t.pageY
			})
		}), e(document).ready(function() {
			e(document).delegate("*", "mousedown focusin", function(t) {
				var n = e(t.target).closest("div.select2-container").get(0);
				e(document).find("div.select2-container-active").each(function() {
					this !== n && e(this).data("select2").blur()
				})
			})
		}), m = f(Object, {
			bind: function(e) {
				var t = this;
				return function() {
					e.apply(t, arguments)
				}
			},
			init: function(n) {
				var r, i;
				this.opts = n = this.prepareOpts(n), this.id = n.id, n.element.data("select2") !== t && this.destroy(), this.container = this.createContainer(), n.element.attr("class") !== t && this.container.addClass(n.element.attr("class")), this.opts.element.data("select2", this).hide().after(this.container), this.container.data("select2", this), this.dropdown = this.container.find(".select2-drop"), this.results = r = this.container.find(".select2-results"), this.search = i = this.container.find("input[type=text]"), this.resultsPage = 0, this.initContainer(), s(this.results), this.container.delegate(".select2-results", "mousemove-filtered", this.bind(this.highlightUnderEvent)), l(80, this.results), this.container.delegate(".select2-results", "scroll-debounced", this.bind(this.loadMoreIfNeeded)), e.fn.mousewheel && r.mousewheel(function(e, t, n, i) {
					t = r.scrollTop(), i > 0 && 0 >= t - i ? (r.scrollTop(0), c(e)) : 0 > i && r.get(0).scrollHeight - r.scrollTop() + i <= r.height() && (r.scrollTop(r.get(0).scrollHeight - r.height()), c(e))
				}), o(i), i.bind("keyup-change", this.bind(this.updateResults)), i.bind("focus", function() {
					i.addClass("select2-focused")
				}), i.bind("blur", function() {
					i.removeClass("select2-focused")
				}), this.container.delegate(".select2-results", "click", this.bind(function(t) {
					0 < e(t.target).closest(".select2-result:not(.select2-disabled)").length ? (this.highlightUnderEvent(t), this.selectHighlighted(t)) : (c(t), this.focusSearch())
				})), e.isFunction(this.opts.initSelection) && (this.initSelection(), this.monitorSource())
			},
			destroy: function() {
				var e = this.opts.element.data("select2");
				e !== t && (e.container.remove(), e.opts.element.removeData("select2").unbind(".select2").show())
			},
			prepareOpts: function(n) {
				var r, o, s;
				if (r = n.element, "select" === r.get(0).tagName.toLowerCase() && (this.select = o = n.element), o && e.each("id multiple ajax query createSearchChoice initSelection data tags".split(" "), function() {
					if (this in n) throw Error("Option '" + this + "' is not allowed for Select2 when attached to a <select> element.")
				}), n = e.extend({}, {
					formatResult: function(e) {
						return e.text
					},
					formatSelection: function(e) {
						return e.text
					},
					formatNoMatches: function() {
						return "No matches found"
					},
					formatInputTooShort: function(e, t) {
						return "Please enter " + (t - e.length) + " more characters"
					},
					minimumResultsForSearch: 0,
					minimumInputLength: 0,
					id: function(e) {
						return e.id
					}
				}, n), "function" != typeof n.id && (s = n.id, n.id = function(e) {
					return e[s]
				}), o ? (n.query = this.bind(function(n) {
					var i = {
						results: [],
						more: !1
					},
						o = n.term.toUpperCase(),
						s = this.getPlaceholder();
					r.find("option").each(function(n) {
						var r = e(this),
							a = r.text();
						return 0 === n && s !== t && "" === a ? !0 : (a.toUpperCase().indexOf(o) >= 0 && i.results.push({
							id: r.attr("value"),
							text: a
						}), void 0)
					}), n.callback(i)
				}), n.id = function(e) {
					return e.id
				}) : "query" in n || ("ajax" in n ? n.query = u(n.ajax) : "data" in n ? n.query = p(n.data) : "tags" in n && (n.query = d(n.tags), n.createSearchChoice = function(e) {
					return {
						id: e,
						text: e
					}
				}, n.initSelection = function(t) {
					var n = [];
					return e(i(t.val(), ",")).each(function() {
						n.push({
							id: this,
							text: this
						})
					}), n
				})), "function" != typeof n.query) throw "query function not defined for Select2 " + n.element.attr("id");
				return n
			},
			monitorSource: function() {
				this.opts.element.bind("change.select2", this.bind(function() {
					!0 !== this.opts.element.data("select2-change-triggered") && this.initSelection()
				}))
			},
			triggerChange: function() {
				this.opts.element.data("select2-change-triggered", !0), this.opts.element.trigger("change"), this.opts.element.data("select2-change-triggered", !1)
			},
			opened: function() {
				return this.container.hasClass("select2-dropdown-open")
			},
			open: function() {
				this.opened() || (this.container.addClass("select2-dropdown-open").addClass("select2-container-active"), this.updateResults(!0), this.dropdown.show(), this.focusSearch())
			},
			close: function() {
				this.opened() && (this.dropdown.hide(), this.container.removeClass("select2-dropdown-open"), this.results.empty(), this.clearSearch())
			},
			clearSearch: function() {},
			ensureHighlightVisible: function() {
				var t, n, r, i, o = this.results;
				t = o.children(".select2-result"), n = this.highlight(), 0 > n || (r = e(t[n]), i = r.offset().top + r.outerHeight(), n === t.length - 1 && (t = o.find("li.select2-more-results"), 0 < t.length && (i = t.offset().top + t.outerHeight())), t = o.offset().top + o.outerHeight(), i > t && o.scrollTop(o.scrollTop() + (i - t)), r = r.offset().top - o.offset().top, 0 > r && o.scrollTop(o.scrollTop() + r))
			},
			moveHighlight: function(t) {
				for (var n = this.results.children(".select2-result"), r = this.highlight(); r > -1 && r < n.length;) if (r += t, !e(n[r]).hasClass("select2-disabled")) {
					this.highlight(r);
					break
				}
			},
			highlight: function(t) {
				var r = this.results.children(".select2-result");
				return 0 === arguments.length ? n(r.filter(".select2-highlighted")[0], r.get()) : (r.removeClass("select2-highlighted"), t >= r.length && (t = r.length - 1), 0 > t && (t = 0), e(r[t]).addClass("select2-highlighted"), this.ensureHighlightVisible(), this.opened() && this.focusSearch(), void 0)
			},
			highlightUnderEvent: function(t) {
				t = e(t.target).closest(".select2-result"), 0 < t.length && this.highlight(t.index())
			},
			loadMoreIfNeeded: function() {
				var n, r = this.results,
					i = r.find("li.select2-more-results"),
					o = -1,
					s = this.resultsPage + 1;
				0 !== i.length && (n = i.offset().top - r.offset().top - r.height(), 0 >= n && (i.addClass("select2-active"), this.opts.query({
					term: this.search.val(),
					page: s,
					callback: this.bind(function(n) {
						var a = [],
							l = this;
						e(n.results).each(function() {
							a.push("<li class='select2-result'>"), a.push(l.opts.formatResult(this)), a.push("</li>")
						}), i.before(a.join("")), r.find(".select2-result").each(function(r) {
							var i = e(this);
							i.data("select2-data") !== t ? o = r : i.data("select2-data", n.results[r - o - 1])
						}), n.more ? i.removeClass("select2-active") : i.remove(), this.resultsPage = s
					})
				})))
			},
			updateResults: function(n) {
				function i(e) {
					s.html(e), s.scrollTop(0), o.removeClass("select2-active")
				}
				var o = this.search,
					s = this.results,
					a = this.opts,
					l = this;
				o.addClass("select2-active"), o.val().length < a.minimumInputLength ? i("<li class='select2-no-results'>" + a.formatInputTooShort(o.val(), a.minimumInputLength) + "</li>") : (this.resultsPage = 1, a.query({
					term: o.val(),
					page: this.resultsPage,
					callback: this.bind(function(c) {
						var u, p = [];
						this.opts.createSearchChoice && "" !== o.val() && (u = this.opts.createSearchChoice.call(null, o.val(), c.results), u !== t && null !== u && l.id(u) !== t && null !== l.id(u) && 0 === e(c.results).filter(function() {
							return r(l.id(this), l.id(u))
						}).length && c.results.unshift(u)), 0 === c.results.length ? i("<li class='select2-no-results'>" + a.formatNoMatches(o.val()) + "</li>") : (e(c.results).each(function() {
							p.push("<li class='select2-result'>"), p.push(a.formatResult(this)), p.push("</li>")
						}), !0 === c.more && p.push("<li class='select2-more-results'>Loading more results...</li>"), i(p.join("")), s.children(".select2-result").each(function(t) {
							t = c.results[t], e(this).data("select2-data", t)
						}), this.postprocessResults(c, n))
					})
				}))
			},
			cancel: function() {
				this.close()
			},
			blur: function() {
				window.setTimeout(this.bind(function() {
					this.close(), this.container.removeClass("select2-container-active"), this.clearSearch(), this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus"), this.search.blur()
				}), 10)
			},
			focusSearch: function() {
				window.setTimeout(this.bind(function() {
					this.search.focus()
				}), 10)
			},
			selectHighlighted: function() {
				var e = this.results.find(".select2-highlighted:not(.select2-disabled)").data("select2-data");
				e && this.onSelect(e)
			},
			getPlaceholder: function() {
				return this.opts.element.attr("placeholder") || this.opts.element.data("placeholder") || this.opts.placeholder
			},
			getContainerWidth: function() {
				var e, n, r, i;
				if (this.opts.width !== t) return this.opts.width;
				if (e = this.opts.element.attr("style"), e !== t) for (e = e.split(";"), r = 0, i = e.length; i > r; r += 1) if (n = e[r].replace(/\s/g, "").match(/width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/), null !== n && 1 <= n.length) return n[1];
				return this.opts.element.width() + "px"
			}
		}), g = f(m, {
			createContainer: function() {
				return e("<div></div>", {
					"class": "select2-container",
					style: "width: " + this.getContainerWidth()
				}).html("    <a href='javascript:void(0)' class='select2-choice'>   <span></span><abbr class='select2-search-choice-close' style='display:none;'></abbr>   <div><b></b></div></a>    <div class='select2-drop' style='display:none;'>   <div class='select2-search'>       <input type='text' autocomplete='off'/>   </div>   <ul class='select2-results'>   </ul></div>")
			},
			open: function() {
				this.opened() || this.parent.open.apply(this, arguments)
			},
			close: function() {
				this.opened() && this.parent.close.apply(this, arguments)
			},
			focus: function() {
				this.close(), this.selection.focus()
			},
			isFocused: function() {
				return this.selection.is(":focus")
			},
			cancel: function() {
				this.parent.cancel.apply(this, arguments), this.selection.focus()
			},
			initContainer: function() {
				var e, t = this.container,
					n = !1;
				this.selection = e = t.find(".select2-choice"), this.search.bind("keydown", this.bind(function(e) {
					switch (e.which) {
					case h.UP:
					case h.DOWN:
						this.moveHighlight(e.which === h.UP ? -1 : 1), c(e);
						break;
					case h.TAB:
					case h.ENTER:
						this.selectHighlighted(), c(e);
						break;
					case h.ESC:
						this.cancel(e), e.preventDefault()
					}
				})), t.delegate(".select2-choice", "click", this.bind(function(t) {
					n = !0, this.opened() ? (this.close(), e.focus()) : this.open(), t.preventDefault(), n = !1
				})), t.delegate(".select2-choice", "keydown", this.bind(function(e) {
					e.which === h.TAB || h.isControl(e) || h.isFunctionKey(e) || e.which === h.ESC || (this.open(), (e.which === h.PAGE_UP || e.which === h.PAGE_DOWN || e.which === h.SPACE) && c(e), e.which === h.ENTER && c(e))
				})), t.delegate(".select2-choice", "focus", function() {
					t.addClass("select2-container-active")
				}), t.delegate(".select2-choice", "blur", this.bind(function() {
					n || this.opened() || this.blur()
				})), e.delegate("abbr", "click", this.bind(function(e) {
					this.val(""), c(e), this.close(), this.triggerChange()
				})), this.setPlaceholder()
			},
			initSelection: function() {
				var e;
				"" === this.opts.element.val() ? this.updateSelection({
					id: "",
					text: ""
				}) : (e = this.opts.initSelection.call(null, this.opts.element), e !== t && null !== e && this.updateSelection(e)), this.close(), this.setPlaceholder()
			},
			prepareOpts: function() {
				var e = this.parent.prepareOpts.apply(this, arguments);
				return "select" === e.element.get(0).tagName.toLowerCase() && (e.initSelection = function(e) {
					return e = e.find(":selected"), {
						id: e.attr("value"),
						text: e.text()
					}
				}), e
			},
			setPlaceholder: function() {
				var e = this.getPlaceholder();
				"" === this.opts.element.val() && e !== t && !(this.select && "" !== this.select.find("option:first").text()) && ("object" == typeof e ? this.updateSelection(e) : this.selection.find("span").html(e), this.selection.addClass("select2-default"), this.selection.find("abbr").hide())
			},
			postprocessResults: function(t, n) {
				var i = 0,
					o = this,
					s = !0;
				this.results.find(".select2-result").each(function(t) {
					return r(o.id(e(this).data("select2-data")), o.opts.element.val()) ? (i = t, !1) : void 0
				}), this.highlight(i), !0 === n && (s = t.results.length >= this.opts.minimumResultsForSearch, this.search.parent().toggle(s), this.container[s ? "addClass" : "removeClass"]("select2-with-searchbox"))
			},
			onSelect: function(e) {
				var t = this.opts.element.val();
				this.opts.element.val(this.id(e)), this.updateSelection(e), this.close(), this.selection.focus(), r(t, this.id(e)) || this.triggerChange()
			},
			updateSelection: function(e) {
				this.selection.find("span").html(this.opts.formatSelection(e)), this.selection.removeClass("select2-default"), this.opts.allowClear && this.getPlaceholder() !== t && this.selection.find("abbr").show()
			},
			val: function() {
				var t, n = null;
				return 0 === arguments.length ? this.opts.element.val() : (t = arguments[0], this.select ? (this.select.val(t).find(":selected").each(function() {
					return n = {
						id: e(this).attr("value"),
						text: e(this).text()
					}, !1
				}), this.updateSelection(n)) : (this.opts.element.val(t ? this.id(t) : ""), this.updateSelection(t)), this.setPlaceholder(), void 0)
			},
			clearSearch: function() {
				this.search.val("")
			}
		}), v = f(m, {
			createContainer: function() {
				return e("<div></div>", {
					"class": "select2-container select2-container-multi",
					style: "width: " + this.getContainerWidth()
				}).html("    <ul class='select2-choices'>  <li class='select2-search-field'>    <input type='text' autocomplete='off' style='width: 25px;'>  </li></ul><div class='select2-drop' style='display:none;'>   <ul class='select2-results'>   </ul></div>")
			},
			prepareOpts: function() {
				var t = this.parent.prepareOpts.apply(this, arguments),
					t = e.extend({}, {
						closeOnSelect: !0
					}, t);
				return "select" === t.element.get(0).tagName.toLowerCase() && (t.initSelection = function(t) {
					var n = [];
					return t.find(":selected").each(function() {
						n.push({
							id: e(this).attr("value"),
							text: e(this).text()
						})
					}), n
				}), t
			},
			initContainer: function() {
				var e;
				this.searchContainer = this.container.find(".select2-search-field"), this.selection = e = this.container.find(".select2-choices"), this.search.bind("keydown", this.bind(function(t) {
					if (t.which === h.BACKSPACE && "" === this.search.val()) {
						this.close();
						var n;
						if (n = e.find(".select2-search-choice-focus"), 0 < n.length) return this.unselect(n.first()), this.search.width(10), c(t), void 0;
						n = e.find(".select2-search-choice"), 0 < n.length && n.last().addClass("select2-search-choice-focus")
					} else e.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus");
					if (this.opened()) switch (t.which) {
					case h.UP:
					case h.DOWN:
						return this.moveHighlight(t.which === h.UP ? -1 : 1), c(t), void 0;
					case h.ENTER:
						return this.selectHighlighted(), c(t), void 0;
					case h.ESC:
						return this.cancel(t), t.preventDefault(), void 0
					}
					t.which === h.TAB || h.isControl(t) || h.isFunctionKey(t) || t.which === h.BACKSPACE || t.which === h.ESC || (this.open(), (t.which === h.PAGE_UP || t.which === h.PAGE_DOWN) && c(t))
				})), this.search.bind("keyup", this.bind(this.resizeSearch)), this.container.delegate(".select2-choices", "click", this.bind(function(e) {
					this.open(), this.focusSearch(), e.preventDefault()
				})), this.container.delegate(".select2-choices", "focus", this.bind(function() {
					this.container.addClass("select2-container-active"), this.clearPlaceholder()
				})), this.clearSearch()
			},
			initSelection: function() {
				var e;
				"" === this.opts.element.val() && this.updateSelection([]), (this.select || "" !== this.opts.element.val()) && (e = this.opts.initSelection.call(null, this.opts.element), e !== t && null !== e && this.updateSelection(e)), this.close(), this.clearSearch()
			},
			clearSearch: function() {
				var e = this.getPlaceholder();
				e !== t && 0 === this.getVal().length && !1 === this.search.hasClass("select2-focused") ? (this.search.val(e).addClass("select2-default"), this.search.width(this.getContainerWidth())) : this.search.val("").width(10)
			},
			clearPlaceholder: function() {
				this.search.hasClass("select2-default") && this.search.val("").removeClass("select2-default")
			},
			open: function() {
				this.opened() || (this.parent.open.apply(this, arguments), this.resizeSearch(), this.focusSearch())
			},
			close: function() {
				this.opened() && this.parent.close.apply(this, arguments)
			},
			focus: function() {
				this.close(), this.search.focus()
			},
			isFocused: function() {
				return this.search.hasClass("select2-focused")
			},
			updateSelection: function(t) {
				var r = [],
					i = [],
					o = this;
				e(t).each(function() {
					0 > n(o.id(this), r) && (r.push(o.id(this)), i.push(this))
				}), t = i, this.selection.find(".select2-search-choice").remove(), e(t).each(function() {
					o.addSelectedChoice(this)
				}), o.postprocessResults()
			},
			onSelect: function(e) {
				this.addSelectedChoice(e), this.select && this.postprocessResults(), this.opts.closeOnSelect ? (this.close(), this.search.width(10)) : (this.search.width(10), this.resizeSearch()), this.triggerChange(), this.focusSearch()
			},
			cancel: function() {
				this.close(), this.focusSearch()
			},
			addSelectedChoice: function(t) {
				var n, r = this.id(t),
					i = this.getVal();
				n = ["<li class='select2-search-choice'>", this.opts.formatSelection(t), "<a href='javascript:void(0)' class='select2-search-choice-close' tabindex='-1'></a>", "</li>"], n = e(n.join("")), n.find("a").bind("click dblclick", this.bind(function(t) {
					this.unselect(e(t.target)), this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus"), c(t), this.close(), this.focusSearch()
				})).bind("focus", this.bind(function() {
					this.container.addClass("select2-container-active")
				})), n.data("select2-data", t), n.insertBefore(this.searchContainer), i.push(r), this.setVal(i)
			},
			unselect: function(e) {
				var t, r = this.getVal(),
					e = e.closest(".select2-search-choice");
				if (0 === e.length) throw "Invalid argument: " + e + ". Must be .select2-search-choice";
				t = n(this.id(e.data("select2-data")), r), t >= 0 && (r.splice(t, 1), this.setVal(r), this.select && this.postprocessResults()), e.remove(), this.triggerChange()
			},
			postprocessResults: function() {
				var t = this.getVal(),
					r = this.results.find(".select2-result"),
					i = this;
				r.each(function() {
					var r = e(this),
						o = i.id(r.data("select2-data"));
					0 <= n(o, t) ? r.addClass("select2-disabled") : r.removeClass("select2-disabled")
				}), r.each(function(t) {
					return e(this).hasClass("select2-disabled") ? void 0 : (i.highlight(t), !1)
				})
			},
			resizeSearch: function() {
				var t, n, r, i;
				r = this.search, t = e("<div></div>").css({
					position: "absolute",
					left: "-1000px",
					top: "-1000px",
					display: "none",
					fontSize: r.css("fontSize"),
					fontFamily: r.css("fontFamily"),
					fontStyle: r.css("fontStyle"),
					fontWeight: r.css("fontWeight"),
					letterSpacing: r.css("letterSpacing"),
					textTransform: r.css("textTransform"),
					whiteSpace: "nowrap"
				}), t.text(r.val()), e("body").append(t), r = t.width(), t.remove(), t = r + 10, n = this.search.offset().left, r = this.selection.width(), i = this.selection.offset().left, n = r - (n - i) - (this.search.outerWidth() - this.search.width()), t > n && (n = r - (this.search.outerWidth() - this.search.width())), 40 > n && (n = r - (this.search.outerWidth() - this.search.width())), this.search.width(n)
			},
			getVal: function() {
				var e;
				return this.select ? (e = this.select.val(), null === e ? [] : e) : (e = this.opts.element.val(), i(e, ","))
			},
			setVal: function(t) {
				var r = [];
				this.select ? this.select.val(t) : (e(t).each(function() {
					0 > n(this, r) && r.push(this)
				}), this.opts.element.val(0 === r.length ? "" : r.join(",")))
			},
			val: function() {
				var t, n = [],
					r = this;
				return 0 === arguments.length ? this.getVal() : (t = arguments[0], this.select ? (this.setVal(t), this.select.find(":selected").each(function() {
					n.push({
						id: e(this).attr("value"),
						text: e(this).text()
					})
				}), this.updateSelection(n)) : (t = null === t ? [] : t, this.setVal(t), e(t).each(function() {
					n.push(r.id(this))
				}), this.setVal(n), this.updateSelection(t)), this.clearSearch(), void 0)
			}
		}), e.fn.select2 = function() {
			var r, i, o, s, a = Array.prototype.slice.call(arguments, 0),
				l = "val destroy open close focus isFocused".split(" ");
			return this.each(function() {
				if (0 === a.length || "object" == typeof a[0]) r = 0 === a.length ? {} : e.extend({}, a[0]), r.element = e(this), "select" === r.element.get(0).tagName.toLowerCase() ? s = r.element.attr("multiple") : (s = r.multiple || !1, "tags" in r && (r.multiple = s = !0)), i = s ? new v : new g, i.init(r);
				else {
					if ("string" != typeof a[0]) throw "Invalid arguments to select2 plugin: " + a;
					if (0 > n(a[0], l)) throw "Unknown method: " + a[0];
					if (o = t, i = e(this).data("select2"), i !== t && (o = i[a[0]].apply(i, a.slice(1)), o !== t)) return !1
				}
			}), o === t ? this : o
		}, window.Select2 = {
			query: {
				ajax: u,
				local: p,
				tags: d
			},
			util: {
				debounce: a
			},
			"class": {
				"abstract": m,
				single: g,
				multi: v
			}
		}
	}
}(jQuery), define("vendor/select2", ["jquery"], function(e) {
	return function() {
		var t;
		return t || e.Select2
	}
}(this)), function(e) {
	"use strict";
	"function" == typeof define && define.amd ? define("global-nav", ["jquery", "vendor/select2"], e) : e(window.jQuery)
}(function(e) {
	"use strict";
	e(function() {
		function t() {
			r && (clearTimeout(r), r = null), s.fadeIn(l, function() {
				o.attr("aria-expanded", !0), s.attr("aria-hidden", !1)
			})
		}
		function n() {
			s.fadeOut(l, function() {
				o.attr("aria-expanded", !1), s.attr("aria-hidden", !0), o[0].className = o[0].className
			})
		}
		var r, i = e("#global-header .global-header-dropdown"),
			o = i.find(".global-header-trigger"),
			s = e("#" + o.attr("aria-controls")),
			a = 500,
			l = 300;
		i.on("mouseover touchstart", t), i.on("mouseleave", function() {
			r = setTimeout(function() {
				0 === i.has(document.activeElement).length && n()
			}, a)
		}), i.find(".global-header-trigger, a").on("focus", function() {
			0 === i.has(document.activeElement).length ? r && (clearTimeout(r), r = null) : t()
		}).on("blur", function() {
			r = setTimeout(n, 1)
		})
	}), e(function() {
		e("#global-footer").find(".global-footer-region-changer, .regionChangerDropdown").select2({
			minimumResultsForSearch: 10
		})
	})
}), function(e) {
	e.hisrc = {
		bandwidth: null,
		connectionTestResult: null,
		connectionKbps: null,
		connectionType: null,
		devicePixelRatio: null
	}, e.hisrc.defaults = {
		useTransparentGif: !1,
		transparentGifSrc: "data:image/gif;base64,R0lGODlhAQABAIAAAMz/AAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
		minKbpsForHighBandwidth: 300,
		//speedTestUri: "/build/js/vendor/50k-speed-test.jpg",
		speedTestUri:"",
		speedTestKB: 50,
		speedTestExpireMinutes: 30,
		forcedBandwidth: !1
	}, e.hisrc.speedTest = function() {
		e(window).hisrc()
	}, e.fn.hisrc = function(t) {
		var n = e.extend({
			callback: function() {}
		}, e.hisrc.defaults, t),
			r = e(this),
			i = navigator.connection || {
				type: 0
			},
			o = 3 == i.type || 4 == i.type || /^[23]g$/.test(i.type);
		if (e.hisrc.devicePixelRatio = 1, void 0 !== window.devicePixelRatio) e.hisrc.devicePixelRatio = window.devicePixelRatio;
		else if (void 0 !== window.matchMedia) for (var s = 1; 2 >= s; s += .5) window.matchMedia("(min-resolution: " + s + "dppx)").matches && (e.hisrc.devicePixelRatio = s);
		var a, l = n.speedTestUri,
			c = "loading",
			u = "complete",
			p = "fsjs",
			d = function() {
				if (!a) {
					if (n.forcedBandwidth) return e.hisrc.bandwidth = n.forcedBandwidth, e.hisrc.connectionTestResult = "forced", a = u, r.trigger("speedTestComplete.hisrc"), void 0;
					if (1 === e.hisrc.devicePixelRatio) return e.hisrc.connectionTestResult = "skip", a = u, r.trigger("speedTestComplete.hisrc"), void 0;
					if (e.hisrc.connectionType = i.type, o) return e.hisrc.connectionTestResult = "connTypeSlow", a = u, r.trigger("speedTestComplete.hisrc"), void 0;
					try {
						var t = JSON.parse(localStorage.getItem(p));
						if (null !== t && (new Date).getTime() < t.exp) return e.hisrc.bandwidth = t.bw, e.hisrc.connectionKbps = t.kbps, e.hisrc.connectionTestResult = "localStorage", a = u, r.trigger("speedTestComplete.hisrc"), void 0
					} catch (s) {}
					var d, h, m, g = document.createElement("img");
					g.onload = function() {
						d = (new Date).getTime();
						var t = (d - h) / 1e3;
						t = t > 1 ? t : 1, e.hisrc.connectionKbps = 8 * 1024 * n.speedTestKB / t / 1024, e.hisrc.bandwidth = e.hisrc.connectionKbps >= n.minKbpsForHighBandwidth ? "high" : "low", f("networkSuccess")
					}, g.onerror = function() {
						f("networkError", 5)
					}, g.onabort = function() {
						f("networkAbort", 5)
					}, h = (new Date).getTime(), a = c, "https:" === document.location.protocol && (l = l.replace("http:", "https:")), g.src = l + "?r=" + Math.random(), m = 1e3 * (8 * n.speedTestKB / n.minKbpsForHighBandwidth) + 350, setTimeout(function() {
						f("networkSlow")
					}, m)
				}
			},
			f = function(t, i) {
				if (a !== u) {
					a = u, e.hisrc.connectionTestResult = t;
					try {
						i || (i = n.speedTestExpireMinutes);
						var o = {
							kbps: e.hisrc.connectionKbps,
							bw: e.hisrc.bandwidth,
							exp: (new Date).getTime() + 6e4 * i
						};
						localStorage.setItem(p, JSON.stringify(o))
					} catch (s) {}
					r.trigger("speedTestComplete.hisrc")
				}
			},
			h = function(e, t) {
				n.useTransparentGif ? e.attr("src", n.transparentGifSrc).css("max-height", "100%").css("max-width", "100%").css("background", 'url("' + t + '") no-repeat 0 0').css("background-size", "contain") : e.attr("src", t)
			};
		return n.callback.call(this), r.each(function() {
			function t() {
				r && i && (n.attr("width", n.width()), n.attr("height", n.height()), o ? n.attr("src", n.data("m1src")) : e.hisrc.devicePixelRatio > 1 && "high" === e.hisrc.bandwidth ? n.data("2x") && h(n, n.data("2x")) : n.data("1x") && h(n, n.data("1x")))
			}
			var n = e(this),
				r = !1,
				i = !1;
			n.data("m1src") || n.data("m1src", n.attr("src")), 0 === this.naturalWidth || 0 === this.naturalHeight || this.complete === !1 && !n.attr("width") && !n.attr("height") ? n.one("load", function() {
				r = !0, t()
			}) : r = !0, n.on("speedTestComplete.hisrc", function() {
				a === u && (i = !0, t(), n.off("speedTestComplete.hisrc"))
			})
		}), d(), r
	}
}(jQuery), define("vendor/hisrc", ["jquery"], function() {}), requirejs.config({
	baseUrl: "/js/",
	paths: {
		jquery: "vendor/jquery",
		text: "vendor/require-text"
	},
	shim: {
		"vendor/froogaloop": {
			exports: "Froogaloop"
		},
		"vendor/select2": {
			deps: ["jquery"],
			exports: "Select2"
		},
		"vendor/bootstrap/transition": {
			deps: ["jquery"]
		},
		"vendor/bootstrap/carousel": {
			deps: ["jquery", "vendor/bootstrap/transition"]
		},
		"vendor/bootstrap/scrollspy": {
			deps: ["jquery"]
		},
		"vendor/ts-popover": {
			deps: ["jquery"]
		},
		"vendor/hisrc": {
			deps: ["jquery"]
		}
	},
	packages: [{
		name: "vendor/lodash",
		location: "vendor/lodash",
		main: "lodash"
	}]
}), require(["jquery", "analytics", "partner-bar", "global-nav", "vendor/hisrc"], function(e, t, n) {
	"use strict";
	var r = e("body").data("require");
	r && require([r]), e("body").data("regionBar") ? require(["region-bar"], function(t) {
		t.open(), e("#region-bar").one("close.regionbar", function() {
			n.init()
		})
	}) : n.init(), e(function() {
		e("img[data-hisrc]").hisrc()
	})
}), define("common", function() {});