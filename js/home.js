var Froogaloop = function() {
		function e(t) {
			return new e.fn.init(t)
		}
		function t(e, t, i) {
			if (!i.contentWindow.postMessage) return !1;
			var n = i.getAttribute("src").split("?")[0],
				o = JSON.stringify({
					method: e,
					value: t
				});
			"//" === n.substr(0, 2) && (n = window.location.protocol + n), i.contentWindow.postMessage(o, n)
		}
		function i(e) {
			var t, i;
			try {
				t = JSON.parse(e.data), i = t.event || t.method
			} catch (n) {}
			if ("ready" != i || l || (l = !0), e.origin != u) return !1;
			var r = t.value,
				s = t.data,
				a = "" === a ? null : t.player_id,
				d = o(i, a),
				p = [];
			return d ? (void 0 !== r && p.push(r), s && p.push(s), a && p.push(a), p.length > 0 ? d.apply(null, p) : d.call()) : !1
		}
		function n(e, t, i) {
			i ? (d[i] || (d[i] = {}), d[i][e] = t) : d[e] = t
		}
		function o(e, t) {
			return t ? d[t][e] : d[e]
		}
		function r(e, t) {
			if (t && d[t]) {
				if (!d[t][e]) return !1;
				d[t][e] = null
			} else {
				if (!d[e]) return !1;
				d[e] = null
			}
			return !0
		}
		function s(e) {
			"//" === e.substr(0, 2) && (e = window.location.protocol + e);
			for (var t = e.split("/"), i = "", n = 0, o = t.length; o > n && 3 > n; n++) i += t[n], 2 > n && (i += "/");
			return i
		}
		function a(e) {
			return !!(e && e.constructor && e.call && e.apply)
		}
		var d = {},
			l = !1,
			u = (Array.prototype.slice, "");
		return e.fn = e.prototype = {
			element: null,
			init: function(e) {
				return "string" == typeof e && (e = document.getElementById(e)), this.element = e, u = s(this.element.getAttribute("src")), this
			},
			api: function(e, i) {
				if (!this.element || !e) return !1;
				var o = this,
					r = o.element,
					s = "" !== r.id ? r.id : null,
					d = a(i) ? null : i,
					l = a(i) ? i : null;
				return l && n(e, l, s), t(e, d, r), o
			},
			addEvent: function(e, i) {
				if (!this.element) return !1;
				var o = this,
					r = o.element,
					s = "" !== r.id ? r.id : null;
				return n(e, i, s), "ready" != e ? t("addEventListener", e, r) : "ready" == e && l && i.call(null, s), o
			},
			removeEvent: function(e) {
				if (!this.element) return !1;
				var i = this,
					n = i.element,
					o = "" !== n.id ? n.id : null,
					s = r(e, o);
				"ready" != e && s && t("removeEventListener", e, n)
			}
		}, e.fn.init.prototype = e.fn, window.addEventListener ? window.addEventListener("message", i, !1) : window.attachEvent("onmessage", i), window.Froogaloop = window.$f = e
	}();
define("vendor/froogaloop", function(e) {
	return function() {
		var t;
		return t || e.Froogaloop
	}
}(this)), +
function(e) {
	"use strict";
	function t() {
		var e = document.createElement("bootstrap"),
			t = {
				WebkitTransition: "webkitTransitionEnd",
				MozTransition: "transitionend",
				OTransition: "oTransitionEnd otransitionend",
				transition: "transitionend"
			};
		for (var i in t) if (void 0 !== e.style[i]) return {
			end: t[i]
		}
	}
	e.fn.emulateTransitionEnd = function(t) {
		var i = !1,
			n = this;
		e(this).one(e.support.transition.end, function() {
			i = !0
		});
		var o = function() {
				i || e(n).trigger(e.support.transition.end)
			};
		return setTimeout(o, t), this
	}, e(function() {
		e.support.transition = t()
	})
}(window.jQuery), define("vendor/bootstrap/transition", ["jquery"], function() {}), function(e) {
	"use strict";
	"function" == typeof define && define.amd ? define("xvideo", ["jquery", "vendor/froogaloop", "analytics", "vendor/bootstrap/transition"], e) : e(window.jQuery, window.Froogaloop, window.GA)
}(function(e, t, i) {
	"use strict";
	function n(e) {
		e.style.cssText += ";-webkit-transform:rotateZ(0deg)", e.offsetWidth, e.style.cssText += ";-webkit-transform:none"
	}
	function o(t) {
		var i, n, o, r, s = 0;
		t.options.autoScroll && ("string" === e.type(t.options.autoScroll) && (i = e(t.options.autoScroll)), i && i.length > 0 ? s = i.offset().top : (r = t.$el.find(".xvideo-wrapper"), n = r.outerHeight(), o = t.options.slidedown ? r.outerWidth() * t.options.aspectRatio / 100 : n, s = e(window).height() - o, s -= t.$el.outerHeight() - n, s = t.$el.offset().top - s / 2, 0 > s && (s = 0)), e.support.transition ? e("html, body").animate({
			scrollTop: s
		}, {
			duration: 750,
			queue: !1
		}) : e("html, body").prop("scrollTop", s))
	}
	function r(t, i) {
		e.support.transition ? t.on(e.support.transition.end, function n(o) {
			o.target === t[0] && (t.off(e.support.transition.end, n), i())
		}) : i()
	}
	function s(e) {
		"function" == typeof e && setTimeout(function() {
			e()
		}, 1)
	}
	function a(t) {
		t.player.addEvent("ready", function() {
			t.player.addEvent("loadProgress", function(e) {
				t.$el.trigger("loadProgress.xvideo", e)
			}), t.player.addEvent("playProgress", function(e) {
				t.$el.trigger("playProgress.xvideo", e)
			}), t.player.addEvent("play", function() {
				t.$el.trigger("play.xvideo")
			}), t.player.addEvent("pause", function() {
				t.$el.trigger("pause.xvideo")
			}), t.player.addEvent("finish", function() {
				t.$el.trigger("finish.xvideo")
			}), t.player.addEvent("seek", function(e) {
				t.$el.trigger("seek.xvideo", e)
			}), t.ready = !0, t.$el.trigger("ready.xvideo")
		}), t.$el.find(".xvideo-wrapper").on("click", function() {
			d.open(t)
		}), t.$el.find(".xvideo-wrapper").on("click", "a, button", function(t) {
			e(this).is(".xvideo-play-button") || t.stopPropagation()
		}), t.options.target && e(t.options.target).on("click", function() {
			d.open(t)
		}), t.$el.bind("ready.xvideo", function() {
			var e;
			for (e = 0; e < t.apiBuffer.length; e += 1) t.apiBuffer[e].unshift(t), d.api.apply(null, t.apiBuffer[e]);
			t.apiBuffer = null, n(t.$el[0])
		}), t.$el.bind("finish.xvideo", function() {
			d.close(t, function() {
				n(t.$el[0])
			})
		}), i && t.options.gaCategory && t.options.gaLabel && (t.$el.bind("open.xvideo", function() {
			i.event(t.options.gaCategory, t.options.gaActionStart, t.options.gaLabel)
		}), t.$el.bind("close.xvideo", function() {
			i.event(t.options.gaCategory, t.options.gaActionEnd, t.options.gaLabel)
		}), t.$el.bind("pause.xvideo", function() {
			d.api(t, "getCurrentTime", function(e) {
				t.open && (e = parseFloat(e), e *= 1e3, e = parseInt(e, 10), i.event(t.options.gaCategory, t.options.gaActionPause, t.options.gaLabel, e))
			})
		}))
	}
	var d, l = {
		slidedown: !0,
		autoScroll: !0,
		aspectRatio: 56.25,
		gaActionStart: "Play Video",
		gaActionPause: "Pause Video",
		gaActionEnd: "Video Finished"
	},
		u = 0,
		p = navigator.userAgent.search(/ipad/i) >= 0;
	d = {
		init: function(i) {
			var n, o, r, s, d = e(this),
				p = {};
			d.data("xvideo") || (i = e.extend({}, l, d.data(), i), p.$el = d, p.ready = !1, p.open = !1, p.apiBuffer = [], p.options = i, p.options.slidedown = p.options.slidedown || "" === p.options.slidedown, p.options.autoScroll = p.options.autoScroll || "" === p.options.autoScroll, p.$el.data("xvideo", p), u += 1, s = "xvideo-iframe-" + u, n = e('<div class="xvideo-video"><div class="xvideo-blackout"></div></div>'), o = e('<iframe frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency></iframe>'), o.attr("id", s), o.attr("src", p.options.url + "?title=0&byline=0&portrait=0&api=1&player_id=" + s), n.append(o), p.$el.append(n), p.$el.wrapInner('<div class="xvideo-wrapper" />'), p.options.slidedown && p.$el.addClass("xvideo-slidedown"), 0 === p.$el.find(".xvideo-end-frame").length && p.$el.addClass("xvideo-start-only"), p.options.fade && (r = e(p.options.fade), p.$el.addClass("xvideo-fade"), r.addClass("xvideo-fade-element"), r.offset(), r.addClass("xvideo-fade-loaded")), p.$el.addClass("xvideo-loaded"), p.player = t(o[0]), a(p), p.$el.trigger("create.xvideo"))
		},
		open: function(t, i) {
			setTimeout(function() {
				return t.open ? (s(i), void 0) : (t.$el.trigger("opening.xvideo"), t.open = !0, o(t), t.options.fade && e(t.options.fade).removeClass("xvideo-fade-end").addClass("xvideo-fade-open"), t.$el.removeClass("xvideo-end"), t.$el.addClass("xvideo-open"), r(t.$el.find(".xvideo-video .xvideo-blackout"), function() {
					s(i), t.$el.trigger("open.xvideo"), p || d.api(t, "play")
				}), void 0)
			}, 1)
		},
		close: function(t, i) {
			return t.open ? (d.api(t, "pause"), t.$el.trigger("closing.xvideo"), t.open = !1, t.options.fade && e(t.options.fade).addClass("xvideo-fade-end").removeClass("xvideo-fade-open"), t.$el.addClass("xvideo-end"), t.$el.removeClass("xvideo-open"), r(t.$el.find(".xvideo-wrapper"), function() {
				d.api(t, "seekTo", 0), s(i), t.$el.trigger("close.xvideo")
			}), void 0) : (s(i), void 0)
		},
		api: function(e) {
			var t = Array.prototype.slice.call(arguments, 1);
			e.ready ? e.player.api.apply(e.player, t) : e.apiBuffer.push(t)
		},
		isOpen: function(e) {
			return e.open
		}
	}, e.fn.xvideo = function(t) {
		var i, n = arguments;
		return this.each(function() {
			if (d[t]) {
				var o = Array.prototype.slice.call(n, 1);
				o.unshift(e.data(this, "xvideo")), i = d[t].apply(this, o)
			} else "object" != typeof t && t ? e.error("Method " + t + " does not exist on jQuery.xvideo") : d.init.apply(this, n)
		}), null == i ? this : i
	}, e.fn.xvideo.defaults = l, e.fn.xvideo.methods = d
}), +
function(e) {
	"use strict";
	var t = function(t, i) {
			this.$element = e(t), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter", e.proxy(this.pause, this)).on("mouseleave", e.proxy(this.cycle, this))
		};
	t.DEFAULTS = {
		interval: 5e3,
		pause: "hover",
		wrap: !0
	}, t.prototype.cycle = function(t) {
		return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)), this
	}, t.prototype.getActiveIndex = function() {
		return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), this.$items.index(this.$active)
	}, t.prototype.to = function(t) {
		var i = this,
			n = this.getActiveIndex();
		return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid", function() {
			i.to(t)
		}) : n == t ? this.pause().cycle() : this.slide(t > n ? "next" : "prev", e(this.$items[t]))
	}, t.prototype.pause = function(t) {
		return t || (this.paused = !0), this.$element.find(".next, .prev").length && e.support.transition.end && (this.$element.trigger(e.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
	}, t.prototype.next = function() {
		return this.sliding ? void 0 : this.slide("next")
	}, t.prototype.prev = function() {
		return this.sliding ? void 0 : this.slide("prev")
	}, t.prototype.slide = function(t, i) {
		var n = this.$element.find(".item.active"),
			o = i || n[t](),
			r = this.interval,
			s = "next" == t ? "left" : "right",
			a = "next" == t ? "first" : "last",
			d = this;
		if (!o.length) {
			if (!this.options.wrap) return;
			o = this.$element.find(".item")[a]()
		}
		if (!o.hasClass("active")) {
			var l = e.Event("slide.bs.carousel", {
				relatedTarget: o[0],
				direction: s
			});
			if (this.$element.trigger(l), !l.isDefaultPrevented()) return this.sliding = !0, r && this.pause(), this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid", function() {
				var t = e(d.$indicators.children()[d.getActiveIndex()]);
				t && t.addClass("active")
			})), e.support.transition && this.$element.hasClass("slide") ? (o.addClass(t), o[0].offsetWidth, n.addClass(s), o.addClass(s), n.one(e.support.transition.end, function() {
				o.removeClass([t, s].join(" ")).addClass("active"), n.removeClass(["active", s].join(" ")), d.sliding = !1, setTimeout(function() {
					d.$element.trigger("slid")
				}, 0)
			}).emulateTransitionEnd(600)) : (n.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger("slid")), r && this.cycle(), this
		}
	};
	var i = e.fn.carousel;
	e.fn.carousel = function(i) {
		return this.each(function() {
			var n = e(this),
				o = n.data("bs.carousel"),
				r = e.extend({}, t.DEFAULTS, n.data(), "object" == typeof i && i),
				s = "string" == typeof i ? i : r.slide;
			o || n.data("bs.carousel", o = new t(this, r)), "number" == typeof i ? o.to(i) : s ? o[s]() : r.interval && o.pause().cycle(), n.trigger("create.bs.carousel")
		})
	}, e.fn.carousel.Constructor = t, e.fn.carousel.noConflict = function() {
		return e.fn.carousel = i, this
	}, e(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function(t) {
		var i, n = e(this),
			o = e(n.attr("data-target") || (i = n.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "")),
			r = e.extend({}, o.data(), n.data()),
			s = n.attr("data-slide-to");
		s && (r.interval = !1), o.carousel(r), (s = n.attr("data-slide-to")) && o.data("bs.carousel").to(s), t.preventDefault()
	}), e(window).on("load", function() {
		e('[data-ride="carousel"]').each(function() {
			var t = e(this);
			t.carousel(t.data())
		})
	})
}(window.jQuery), define("vendor/bootstrap/carousel", ["jquery", "vendor/bootstrap/transition"], function() {}), require(["jquery", "xvideo", "vendor/bootstrap/carousel"], function(e) {
	"use strict";
	e(function() {
		var t = e(".hero .xvideo"),
			i = e("#hero-carousel"),
			n = e(".hero .carousel .mobile-video"),
			o = e(".hero .app-links");
		t.xvideo(), i.carousel({
			interval: !1
		}), e("#quotes-carousel").carousel({
			interval: 1e4
		}), i.on("slide.bs.carousel", function(n) {
			t.each(function() {
				var t = e(this);
				t.xvideo("isOpen") && (n.preventDefault(), t.xvideo("close", function() {
					var e = i.find(".item").index(n.relatedTarget);
					i.carousel(e)
				}))
			})
		}), n.on("opening.xvideo", function() {
			Modernizr.csstransitions ? o.slideDown(750) : o.show()
		}), n.on("closing.xvideo", function() {
			Modernizr.csstransitions ? setTimeout(function() {
				o.slideUp(750)
			}, 750) : o.hide()
		}), i.on("opening.xvideo", function() {
			i.addClass("video-open")
		}), i.on("closing.xvideo", function() {
			i.removeClass("video-open")
		})
	})
}), define("pages/home", function() {});