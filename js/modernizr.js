window.Modernizr = function(e, t, n) {
	function r(e) {
		g.cssText = e
	}
	function o(e, t) {
		return typeof e === t
	}
	function i(e, t) {
		return !!~ ("" + e).indexOf(t)
	}
	function a(e, t) {
		for (var r in e) {
			var o = e[r];
			if (!i(o, "-") && g[o] !== n) return "pfx" == t ? o : !0
		}
		return !1
	}
	function c(e, t, r) {
		for (var i in e) {
			var a = t[e[i]];
			if (a !== n) return r === !1 ? e[i] : o(a, "function") ? a.bind(r || t) : a
		}
		return !1
	}
	function s(e, t, n) {
		var r = e.charAt(0).toUpperCase() + e.slice(1),
			i = (e + " " + w.join(r + " ") + r).split(" ");
		return o(t, "string") || o(t, "undefined") ? a(i, t) : (i = (e + " " + T.join(r + " ") + r).split(" "), c(i, t, n))
	}
	var u, l, f, d = "2.6.2",
		m = {},
		p = !0,
		h = t.documentElement,
		v = "modernizr",
		y = t.createElement(v),
		g = y.style,
		E = ({}.toString, " -webkit- -moz- -o- -ms- ".split(" ")),
		b = "Webkit Moz O ms",
		w = b.split(" "),
		T = b.toLowerCase().split(" "),
		N = {},
		C = [],
		S = C.slice,
		j = function(e, n, r, o) {
			var i, a, c, s, u = t.createElement("div"),
				l = t.body,
				f = l || t.createElement("body");
			if (parseInt(r, 10)) for (; r--;) c = t.createElement("div"), c.id = o ? o[r] : v + (r + 1), u.appendChild(c);
			return i = ["&#173;", '<style id="s', v, '">', e, "</style>"].join(""), u.id = v, (l ? u : f).innerHTML += i, f.appendChild(u), l || (f.style.background = "", f.style.overflow = "hidden", s = h.style.overflow, h.style.overflow = "hidden", h.appendChild(f)), a = n(u, e), l ? u.parentNode.removeChild(u) : (f.parentNode.removeChild(f), h.style.overflow = s), !! a
		},
		x = function() {
			function e(e, i) {
				i = i || t.createElement(r[e] || "div"), e = "on" + e;
				var a = e in i;
				return a || (i.setAttribute || (i = t.createElement("div")), i.setAttribute && i.removeAttribute && (i.setAttribute(e, ""), a = o(i[e], "function"), o(i[e], "undefined") || (i[e] = n), i.removeAttribute(e))), i = null, a
			}
			var r = {
				select: "input",
				change: "input",
				submit: "form",
				reset: "form",
				error: "img",
				load: "img",
				abort: "img"
			};
			return e
		}(),
		M = {}.hasOwnProperty;
	f = o(M, "undefined") || o(M.call, "undefined") ?
	function(e, t) {
		return t in e && o(e.constructor.prototype[t], "undefined")
	} : function(e, t) {
		return M.call(e, t)
	}, Function.prototype.bind || (Function.prototype.bind = function(e) {
		var t = this;
		if ("function" != typeof t) throw new TypeError;
		var n = S.call(arguments, 1),
			r = function() {
				if (this instanceof r) {
					var o = function() {};
					o.prototype = t.prototype;
					var i = new o,
						a = t.apply(i, n.concat(S.call(arguments)));
					return Object(a) === a ? a : i
				}
				return t.apply(e, n.concat(S.call(arguments)))
			};
		return r
	}), N.touch = function() {
		var n;
		return "ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch ? n = !0 : j(["@media (", E.join("touch-enabled),("), v, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(e) {
			n = 9 === e.offsetTop
		}), n
	}, N.hashchange = function() {
		return x("hashchange", e) && (t.documentMode === n || t.documentMode > 7)
	}, N.cssanimations = function() {
		return s("animationName")
	}, N.csstransforms = function() {
		return !!s("transform")
	}, N.csstransitions = function() {
		return s("transition")
	};
	for (var F in N) f(N, F) && (l = F.toLowerCase(), m[l] = N[F](), C.push((m[l] ? "" : "no-") + l));
	return m.addTest = function(e, t) {
		if ("object" == typeof e) for (var r in e) f(e, r) && m.addTest(r, e[r]);
		else {
			if (e = e.toLowerCase(), m[e] !== n) return m;
			t = "function" == typeof t ? t() : t, "undefined" != typeof p && p && (h.className += " " + (t ? "" : "no-") + e), m[e] = t
		}
		return m
	}, r(""), y = u = null, m._version = d, m._prefixes = E, m._domPrefixes = T, m._cssomPrefixes = w, m.hasEvent = x, m.testProp = function(e) {
		return a([e])
	}, m.testAllProps = s, m.testStyles = j, h.className = h.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (p ? " js " + C.join(" ") : ""), m
}(this, this.document), function(e, t) {
	function n(e, t) {
		var n = e.createElement("p"),
			r = e.getElementsByTagName("head")[0] || e.documentElement;
		return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
	}
	function r() {
		var e = T.elements;
		return "string" == typeof e ? e.split(" ") : e
	}
	function o(e) {
		var t = w[e[E]];
		return t || (t = {}, b++, e[E] = b, w[b] = t), t
	}
	function i(e, n, r) {
		if (n || (n = t), h) return n.createElement(e);
		r || (r = o(n));
		var i;
		return i = r.cache[e] ? r.cache[e].cloneNode() : g.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), i.canHaveChildren && !y.test(e) ? r.frag.appendChild(i) : i
	}
	function a(e, n) {
		if (e || (e = t), h) return e.createDocumentFragment();
		n = n || o(e);
		for (var i = n.frag.cloneNode(), a = 0, c = r(), s = c.length; s > a; a++) i.createElement(c[a]);
		return i
	}
	function c(e, t) {
		t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(n) {
			return T.shivMethods ? i(n, e, t) : t.createElem(n)
		}, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/\w+/g, function(e) {
			return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
		}) + ");return n}")(T, t.frag)
	}
	function s(e) {
		e || (e = t);
		var r = o(e);
		return !T.shivCSS || p || r.hasCSS || (r.hasCSS = !! n(e, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), h || c(e, r), e
	}
	function u(e) {
		for (var t, n = e.getElementsByTagName("*"), o = n.length, i = RegExp("^(?:" + r().join("|") + ")$", "i"), a = []; o--;) t = n[o], i.test(t.nodeName) && a.push(t.applyElement(l(t)));
		return a
	}
	function l(e) {
		for (var t, n = e.attributes, r = n.length, o = e.ownerDocument.createElement(C + ":" + e.nodeName); r--;) t = n[r], t.specified && o.setAttribute(t.nodeName, t.nodeValue);
		return o.style.cssText = e.style.cssText, o
	}
	function f(e) {
		for (var t, n = e.split("{"), o = n.length, i = RegExp("(^|[\\s,>+~])(" + r().join("|") + ")(?=[[\\s,>+~#.:]|$)", "gi"), a = "$1" + C + "\\:$2"; o--;) t = n[o] = n[o].split("}"), t[t.length - 1] = t[t.length - 1].replace(i, a), n[o] = t.join("}");
		return n.join("{")
	}
	function d(e) {
		for (var t = e.length; t--;) e[t].removeNode()
	}
	function m(e) {
		function t() {
			clearTimeout(a._removeSheetTimer), r && r.removeNode(!0), r = null
		}
		var r, i, a = o(e),
			c = e.namespaces,
			s = e.parentWindow;
		return !S || e.printShived ? e : ("undefined" == typeof c[C] && c.add(C), s.attachEvent("onbeforeprint", function() {
			t();
			for (var o, a, c, s = e.styleSheets, l = [], d = s.length, m = Array(d); d--;) m[d] = s[d];
			for (; c = m.pop();) if (!c.disabled && N.test(c.media)) {
				try {
					o = c.imports, a = o.length
				} catch (p) {
					a = 0
				}
				for (d = 0; a > d; d++) m.push(o[d]);
				try {
					l.push(c.cssText)
				} catch (p) {}
			}
			l = f(l.reverse().join("")), i = u(e), r = n(e, l)
		}), s.attachEvent("onafterprint", function() {
			d(i), clearTimeout(a._removeSheetTimer), a._removeSheetTimer = setTimeout(t, 500)
		}), e.printShived = !0, e)
	}
	var p, h, v = e.html5 || {},
		y = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
		g = /^<|^(?:a|b|button|code|div|fieldset|form|h1|h2|h3|h4|h5|h6|i|iframe|img|input|label|li|link|ol|option|p|param|q|script|select|span|strong|style|table|tbody|td|textarea|tfoot|th|thead|tr|ul)$/i,
		E = "_html5shiv",
		b = 0,
		w = {};
	!
	function() {
		try {
			var e = t.createElement("a");
			e.innerHTML = "<xyz></xyz>", p = "hidden" in e, h = 1 == e.childNodes.length ||
			function() {
				t.createElement("a");
				var e = t.createDocumentFragment();
				return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
			}()
		} catch (n) {
			p = !0, h = !0
		}
	}();
	var T = {
		elements: v.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
		shivCSS: v.shivCSS !== !1,
		supportsUnknownElements: h,
		shivMethods: v.shivMethods !== !1,
		type: "default",
		shivDocument: s,
		createElement: i,
		createDocumentFragment: a
	};
	e.html5 = T, s(t);
	var N = /^$|\b(?:all|print)\b/,
		C = "html5shiv",
		S = !h &&
	function() {
		var n = t.documentElement;
		return !("undefined" == typeof t.namespaces || "undefined" == typeof t.parentWindow || "undefined" == typeof n.applyElement || "undefined" == typeof n.removeNode || "undefined" == typeof e.attachEvent)
	}();
	T.type += " print", T.shivPrint = m, m(t)
}(this, document), Modernizr.addTest("cors", !! (window.XMLHttpRequest && "withCredentials" in new XMLHttpRequest));