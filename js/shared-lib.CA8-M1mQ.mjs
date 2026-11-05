import { __esmMin as e } from "./rolldown-runtime.wODCDItq.mjs";
import {
    X as t,
    Y as n,
    ae as r,
    init_jsx_runtime as i,
    init_npm_react_18_2 as a,
    init_ssg_sandbox_shims as o,
    navigator as s,
    p as c,
    pe as l,
    re as u,
    se as d,
    te as f,
    u as p,
    ue as m,
    window as h,
    x as g,
    ye as _,
} from "./react.Ds2Tb_dm.mjs";
import { LayoutGroup as v, MotionConfigContext as y, init_framer_motion_5EXT2AMG as b, isMotionValue as x, motion as S, useInView as C } from "./motion.-MAFvoGt.mjs";
import {
    ComponentViewportProvider as w,
    ControlType as T,
    Image2 as E,
    Link as D,
    RenderTarget as O,
    RichText as k,
    SVG as A,
    SmartComponentScopedContainer as j,
    addFonts as M,
    addPropertyControls as N,
    cx as P,
    fontStore as F,
    getFonts as I,
    getFontsFromSharedStyle as L,
    getLoadingLazyAtYPosition as R,
    getPropertyControls as z,
    init_framer_PZCE2HD7 as B,
    useActiveVariantCallback as ee,
    useComponentViewport as V,
    useIsInCurrentNavigationTarget as H,
    useLocaleInfo as U,
    useOnVariantChange as W,
    useVariantState as G,
    withCSS as K,
    withFX as te,
    withOptimizedAppearEffect as q,
} from "./framer.CYogzDDt.mjs";
var ne,
    J,
    Y,
    re,
    ie,
    ae = e(() => {
        B(),
            (ne = { position: `relative`, width: `100%`, height: `100%`, display: `flex`, justifyContent: `center`, alignItems: `center` }),
            (J = { ...ne, borderRadius: 6, background: `rgba(136, 85, 255, 0.3)`, color: `#85F`, border: `1px dashed #85F`, flexDirection: `column` }),
            (Y = { onClick: { type: T.EventHandler }, onMouseEnter: { type: T.EventHandler }, onMouseLeave: { type: T.EventHandler } }),
            (re = { type: T.Number, title: `Font Size`, min: 2, max: 200, step: 1, displayStepper: !0 }),
            (ie = {
                font: { type: T.Boolean, title: `Font`, defaultValue: !1, disabledTitle: `Default`, enabledTitle: `Custom` },
                fontFamily: { type: T.String, title: `Family`, placeholder: `Inter`, hidden: ({ font: e }) => !e },
                fontWeight: {
                    type: T.Enum,
                    title: `Weight`,
                    options: [100, 200, 300, 400, 500, 600, 700, 800, 900],
                    optionTitles: [`Thin`, `Extra-light`, `Light`, `Regular`, `Medium`, `Semi-bold`, `Bold`, `Extra-bold`, `Black`],
                    hidden: ({ font: e }) => !e,
                },
            });
    });
function oe(e, t) {
    return ce(!0, e, t);
}
function se(e, t) {
    return ce(!1, e, t);
}
function ce(e, t, n = !0) {
    let r = H();
    m(() => {
        n && r === e && t();
    }, [r]);
}
var le = e(() => {
        B(), a();
    }),
    ue = e(() => {
        a();
    }),
    de = e(() => {
        B();
    }),
    fe = e(() => {
        B();
    }),
    pe = e(() => {
        a();
    }),
    me = e(() => {
        B();
    }),
    he,
    ge,
    _e = e(() => {
        o(),
            a(),
            (he = () => {
                if (s !== void 0) {
                    let e = s.userAgent.toLowerCase(),
                        t = (e.indexOf(`safari`) > -1 || e.indexOf(`framermobile`) > -1 || e.indexOf(`framerx`) > -1) && e.indexOf(`chrome`) < 0;
                    return t;
                } else return !1;
            }),
            (ge = () => d(() => he(), []));
    }),
    ve = e(() => {
        a(), fe();
    }),
    ye = e(() => {
        a(), B(), fe(), ue();
    }),
    be = e(() => {
        B(), a(), ae();
    });
function xe() {
    let e = d(() => O.current(), []);
    return e;
}
function Se() {
    let e = d(() => O.current() === O.canvas, []);
    return e;
}
var Ce = e(() => {
        a(), B();
    }),
    we = e(() => {
        a();
    });
function Te(e) {
    let { borderRadius: t, isMixedBorderRadius: n, topLeftRadius: r, topRightRadius: i, bottomRightRadius: a, bottomLeftRadius: o } = e,
        s = d(() => (n ? `${r}px ${i}px ${a}px ${o}px` : `${t}px`), [t, n, r, i, a, o]);
    return s;
}
function Ee(e) {
    let { padding: t, paddingPerSide: n, paddingTop: r, paddingRight: i, paddingBottom: a, paddingLeft: o } = e,
        s = d(() => (n ? `${r}px ${i}px ${a}px ${o}px` : t), [t, n, r, i, a, o]);
    return s;
}
var De,
    Oe,
    ke = e(() => {
        a(),
            B(),
            (De = {
                borderRadius: {
                    title: `Radius`,
                    type: T.FusedNumber,
                    toggleKey: `isMixedBorderRadius`,
                    toggleTitles: [`Radius`, `Radius per corner`],
                    valueKeys: [`topLeftRadius`, `topRightRadius`, `bottomRightRadius`, `bottomLeftRadius`],
                    valueLabels: [`TL`, `TR`, `BR`, `BL`],
                    min: 0,
                },
            }),
            (Oe = {
                padding: {
                    type: T.FusedNumber,
                    toggleKey: `paddingPerSide`,
                    toggleTitles: [`Padding`, `Padding per side`],
                    valueKeys: [`paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`],
                    valueLabels: [`T`, `R`, `B`, `L`],
                    min: 0,
                    title: `Padding`,
                },
            });
    }),
    Ae = e(() => {
        ae(), le(), ue(), de(), fe(), pe(), me(), _e(), ve(), ye(), be(), Ce(), we(), ke();
    });
function je(e) {
    let { width: t, height: n, topLeft: r, topRight: i, bottomRight: a, bottomLeft: o, id: s, children: c, ...l } = e;
    return l;
}
function Me(e) {
    let t = je(e);
    return c(Be, { ...t });
}
function Ne(e) {
    let t = H(),
        n = l(!1),
        r = l(!1),
        i = f((t) => {
            if (!e.current) return;
            let n = (t === 1 ? 0.999 : t) * e.current.duration,
                r = Math.abs(e.current.currentTime - n) < 0.1;
            e.current.duration > 0 && !r && (e.current.currentTime = n);
        }, []),
        a = f(() => {
            let i = e.current;
            if (!i) return;
            i.preload = `auto`;
            let a = i.currentTime > 0 && i.onplaying && !i.paused && !i.ended && i.readyState >= i.HAVE_CURRENT_DATA;
            !a &&
                i &&
                !n.current &&
                t &&
                ((n.current = !0),
                (r.current = !0),
                i
                    .play()
                    .catch((e) => {})
                    .finally(() => (n.current = !1)));
        }, []),
        o = f(() => {
            !e.current || n.current || (e.current.pause(), (r.current = !1));
        }, []);
    return { play: a, pause: o, setProgress: i, isPlaying: r };
}
function Pe({ playingProp: e, muted: t, loop: n, playsinline: r, controls: i }) {
    let [a] = _(() => e),
        [o, s] = _(!1);
    e !== a && !o && s(!0);
    let c = a && t && n && r && !i && !o,
        l;
    return (l = c ? `on-viewport` : a ? `on-mount` : `no-autoplay`), l;
}
function Fe(e) {
    return e.charAt(0).toUpperCase() + e.slice(1);
}
function Ie(e) {
    let t = e.match(/[A-Z]{2,}|[A-Z][a-z]+|[a-z]+|[A-Z]|\d+/gu) || [];
    return t.map(Fe).join(` `);
}
var Le,
    Re,
    ze,
    Be,
    Ve,
    He = e(() => {
        i(),
            B(),
            b(),
            Ae(),
            a(),
            (function (e) {
                (e.Fill = `fill`), (e.Contain = `contain`), (e.Cover = `cover`), (e.None = `none`), (e.ScaleDown = `scale-down`);
            })((Le ||= {})),
            (function (e) {
                (e.Video = `Upload`), (e.Url = `URL`);
            })((Re ||= {})),
            (ze = `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`),
            (Be = t(function (e) {
                let {
                        srcType: t = `URL`,
                        srcUrl: n,
                        srcFile: r = ``,
                        posterEnabled: i = !1,
                        controls: a = !1,
                        playing: o = !0,
                        loop: s = !0,
                        muted: u = !0,
                        playsinline: f = !0,
                        restartOnEnter: p = !1,
                        objectFit: h = `cover`,
                        backgroundColor: g = `rgba(0,0,0,0)`,
                        radius: _ = 0,
                        volume: v = 25,
                        startTime: y = 0,
                        poster: b,
                        playing: S,
                        progress: w,
                        onSeeked: T,
                        onPause: E,
                        onPlay: D,
                        onEnd: k,
                        onClick: A,
                        onMouseEnter: j,
                        onMouseLeave: M,
                        onMouseDown: N,
                        onMouseUp: P,
                    } = e,
                    F = l(),
                    I = ge(),
                    L = l(null),
                    R = l(null),
                    z = Se(),
                    B = xe(),
                    ee = z || B === O.export,
                    V = Te(e),
                    H = ee ? `no-autoplay` : Pe({ playingProp: S, muted: u, loop: s, playsinline: f, controls: a }),
                    U = ee ? !0 : C(F),
                    W = ee ? !1 : C(F, { margin: `10%`, once: !0 }),
                    G = y === 100 ? 99.9 : y,
                    { play: K, pause: te, setProgress: q, isPlaying: ne } = Ne(F);
                m(() => {
                    ee || (H !== `on-viewport` && (S ? K() : te()));
                }, [H, S]),
                    m(() => {
                        ee || (U && S && H !== `no-autoplay` && K(), H === `on-viewport` && te());
                    }, [H, U, S]),
                    m(() => {
                        !z || b || i || G || !F.current || (F.current.currentTime = 0.01);
                    }, [i, b, G]);
                let J = l(!1);
                m(() => {
                    if (!J.current) {
                        J.current = !0;
                        return;
                    }
                    let e = x(w) ? w.get() : (w ?? 0) * 0.01;
                    q((e ?? 0) || (G ?? 0) / 100);
                }, [G, r, n, w]),
                    m(() => {
                        if (x(w)) return w.on(`change`, (e) => q(e));
                    }, [w]),
                    oe(() => {
                        L.current !== null && F.current && ((!R && s) || !L.current) && K();
                    }),
                    se(() => {
                        F.current && ((R.current = F.current.ended), (L.current = F.current.paused), te());
                    });
                let Y = d(() => {
                    if (t === `URL`) return n + ``;
                    if (t === `Upload`) return r + ``;
                }, [t, r, n, G]);
                m(() => {
                    I && F.current && H === `on-mount` && setTimeout(() => K(), 50);
                }, []),
                    m(() => {
                        F.current && !u && (F.current.volume = (v ?? 0) / 100);
                    }, [v]);
                let re = () => {
                    let e = F.current;
                    e && (e.currentTime < 0.3 && G > 0 && q((G ?? 0) * 0.01), (ne.current || H === `on-mount` || (S && H === `on-viewport` && U)) && K());
                };
                return c(`video`, {
                    onClick: A,
                    onMouseEnter: j,
                    onMouseLeave: M,
                    onMouseDown: N,
                    onMouseUp: P,
                    src: Y,
                    loop: s,
                    ref: F,
                    onSeeked: (e) => T?.(e),
                    onPause: (e) => E?.(e),
                    onPlay: (e) => D?.(e),
                    onEnded: (e) => k?.(e),
                    autoPlay: ne.current || H === `on-mount` || (S && H === `on-viewport` && U),
                    preload: ne.current ? `auto` : ee && !b ? `metadata` : H !== `on-mount` && !W ? `none` : `metadata`,
                    poster: i && !r && n === ze ? `./images/5ILRvlYXf72kHSVHqpa3snGzjU.jpg` : i && b ? b : void 0,
                    onLoadedData: re,
                    controls: a,
                    muted: ee ? !0 : u,
                    playsInline: f,
                    style: { cursor: A ? `pointer` : `auto`, width: `100%`, height: `100%`, borderRadius: V, display: `block`, objectFit: h, backgroundColor: g, objectPosition: `50% 50%` },
                });
            })),
            (Me.displayName = `Video`),
            (Ve = [`cover`, `fill`, `contain`, `scale-down`, `none`]),
            N(Me, {
                srcType: { type: T.Enum, displaySegmentedControl: !0, title: `Source`, options: [`URL`, `Upload`] },
                srcUrl: {
                    type: T.String,
                    title: `URL`,
                    defaultValue: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
                    hidden(e) {
                        return e.srcType === `Upload`;
                    },
                },
                srcFile: {
                    type: T.File,
                    title: `File`,
                    allowedFileTypes: [`mp4`, `webm`],
                    hidden(e) {
                        return e.srcType === `URL`;
                    },
                },
                playing: { type: T.Boolean, title: `Playing`, enabledTitle: `Yes`, disabledTitle: `No` },
                ...De,
                posterEnabled: { type: T.Boolean, title: `Poster`, enabledTitle: `Yes`, disabledTitle: `No` },
                poster: { type: T.Image, title: `Image`, hidden: ({ posterEnabled: e }) => !e, description: `We recommend adding a poster. [Learn more](https://www.framer.com/help/articles/how-are-videos-optimized-in-framer/).` },
                backgroundColor: { type: T.Color, title: `Background`, defaultValue: `rgba(0,0,0,0)` },
                startTime: { title: `Start Time`, type: T.Number, min: 0, max: 100, step: 0.1, unit: `%` },
                loop: { type: T.Boolean, title: `Loop`, enabledTitle: `Yes`, disabledTitle: `No` },
                objectFit: { type: T.Enum, title: `Fit`, options: Ve, optionTitles: Ve.map(Ie) },
                controls: { type: T.Boolean, title: `Controls`, enabledTitle: `Show`, disabledTitle: `Hide`, defaultValue: !1 },
                muted: { type: T.Boolean, title: `Muted`, enabledTitle: `Yes`, disabledTitle: `No` },
                volume: { type: T.Number, max: 100, min: 0, unit: `%`, hidden: ({ muted: e }) => e, defaultValue: 25 },
                onEnd: { type: T.EventHandler },
                onSeeked: { type: T.EventHandler },
                onPause: { type: T.EventHandler },
                onPlay: { type: T.EventHandler },
                ...Y,
            });
    });
function Ue(e, t, n) {
    return Math.max(e, Math.min(t, n));
}
var We,
    Ge,
    Ke,
    qe,
    Je,
    Ye,
    Xe = e(() => {
        o(),
            (We = class {
                advance(e) {
                    if (!this.isRunning) return;
                    let t = !1;
                    if (this.lerp)
                        (this.value = (function (e, t, n, r) {
                            return (function (e, t, n) {
                                return (1 - n) * e + n * t;
                            })(e, t, 1 - Math.exp(-n * r));
                        })(this.value, this.to, 60 * this.lerp, e)),
                            Math.round(this.value) === this.to && ((this.value = this.to), (t = !0));
                    else {
                        this.currentTime += e;
                        let n = Ue(0, this.currentTime / this.duration, 1);
                        t = n >= 1;
                        let r = t ? 1 : this.easing(n);
                        this.value = this.from + (this.to - this.from) * r;
                    }
                    t && this.stop(), this.onUpdate?.(this.value, t);
                }
                stop() {
                    this.isRunning = !1;
                }
                fromTo(e, t, { lerp: n = 0.1, duration: r = 1, easing: i = (e) => e, onStart: a, onUpdate: o }) {
                    (this.from = this.value = e), (this.to = t), (this.lerp = n), (this.duration = r), (this.easing = i), (this.currentTime = 0), (this.isRunning = !0), a?.(), (this.onUpdate = o);
                }
            }),
            (Ge = class {
                constructor({ wrapper: e, content: t, autoResize: n = !0, debounce: r = 250 } = {}) {
                    (this.wrapper = e),
                        (this.content = t),
                        n &&
                            ((this.debouncedResize = (function (e, t) {
                                let n;
                                return function () {
                                    let r = arguments,
                                        i = this;
                                    clearTimeout(n),
                                        (n = setTimeout(function () {
                                            e.apply(i, r);
                                        }, t));
                                };
                            })(this.resize, r)),
                            this.wrapper === h ? h.addEventListener(`resize`, this.debouncedResize, !1) : ((this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize)), this.wrapperResizeObserver.observe(this.wrapper)),
                            (this.contentResizeObserver = new ResizeObserver(this.debouncedResize)),
                            this.contentResizeObserver.observe(this.content)),
                        this.resize();
                }
                destroy() {
                    this.wrapperResizeObserver?.disconnect(), this.contentResizeObserver?.disconnect(), h.removeEventListener(`resize`, this.debouncedResize, !1);
                }
                resize = () => {
                    this.onWrapperResize(), this.onContentResize();
                };
                onWrapperResize = () => {
                    this.wrapper === h ? ((this.width = h.innerWidth), (this.height = h.innerHeight)) : ((this.width = this.wrapper.clientWidth), (this.height = this.wrapper.clientHeight));
                };
                onContentResize = () => {
                    this.wrapper === h ? ((this.scrollHeight = this.content.scrollHeight), (this.scrollWidth = this.content.scrollWidth)) : ((this.scrollHeight = this.wrapper.scrollHeight), (this.scrollWidth = this.wrapper.scrollWidth));
                };
                get limit() {
                    return { x: this.scrollWidth - this.width, y: this.scrollHeight - this.height };
                }
            }),
            (Ke = class {
                constructor() {
                    this.events = {};
                }
                emit(e, ...t) {
                    let n = this.events[e] || [];
                    for (let e = 0, r = n.length; e < r; e++) n[e](...t);
                }
                on(e, t) {
                    return (
                        this.events[e]?.push(t) || (this.events[e] = [t]),
                        () => {
                            this.events[e] = this.events[e]?.filter((e) => t !== e);
                        }
                    );
                }
                off(e, t) {
                    this.events[e] = this.events[e]?.filter((e) => t !== e);
                }
                destroy() {
                    this.events = {};
                }
            }),
            (qe = 100 / 6),
            (Je = class {
                constructor(e, { wheelMultiplier: t = 1, touchMultiplier: n = 1 }) {
                    (this.element = e),
                        (this.wheelMultiplier = t),
                        (this.touchMultiplier = n),
                        (this.touchStart = { x: null, y: null }),
                        (this.emitter = new Ke()),
                        h.addEventListener(`resize`, this.onWindowResize, !1),
                        this.onWindowResize(),
                        this.element.addEventListener(`wheel`, this.onWheel, { passive: !1 }),
                        this.element.addEventListener(`touchstart`, this.onTouchStart, { passive: !1 }),
                        this.element.addEventListener(`touchmove`, this.onTouchMove, { passive: !1 }),
                        this.element.addEventListener(`touchend`, this.onTouchEnd, { passive: !1 });
                }
                on(e, t) {
                    return this.emitter.on(e, t);
                }
                destroy() {
                    this.emitter.destroy(),
                        h.removeEventListener(`resize`, this.onWindowResize, !1),
                        this.element.removeEventListener(`wheel`, this.onWheel, { passive: !1 }),
                        this.element.removeEventListener(`touchstart`, this.onTouchStart, { passive: !1 }),
                        this.element.removeEventListener(`touchmove`, this.onTouchMove, { passive: !1 }),
                        this.element.removeEventListener(`touchend`, this.onTouchEnd, { passive: !1 });
                }
                onTouchStart = (e) => {
                    let { clientX: t, clientY: n } = e.targetTouches ? e.targetTouches[0] : e;
                    (this.touchStart.x = t), (this.touchStart.y = n), (this.lastDelta = { x: 0, y: 0 }), this.emitter.emit(`scroll`, { deltaX: 0, deltaY: 0, event: e });
                };
                onTouchMove = (e) => {
                    let { clientX: t, clientY: n } = e.targetTouches ? e.targetTouches[0] : e,
                        r = -(t - this.touchStart.x) * this.touchMultiplier,
                        i = -(n - this.touchStart.y) * this.touchMultiplier;
                    (this.touchStart.x = t), (this.touchStart.y = n), (this.lastDelta = { x: r, y: i }), this.emitter.emit(`scroll`, { deltaX: r, deltaY: i, event: e });
                };
                onTouchEnd = (e) => {
                    this.emitter.emit(`scroll`, { deltaX: this.lastDelta.x, deltaY: this.lastDelta.y, event: e });
                };
                onWheel = (e) => {
                    let { deltaX: t, deltaY: n, deltaMode: r } = e;
                    (t *= r === 1 ? qe : r === 2 ? this.windowWidth : 1),
                        (n *= r === 1 ? qe : r === 2 ? this.windowHeight : 1),
                        (t *= this.wheelMultiplier),
                        (n *= this.wheelMultiplier),
                        this.emitter.emit(`scroll`, { deltaX: t, deltaY: n, event: e });
                };
                onWindowResize = () => {
                    (this.windowWidth = h.innerWidth), (this.windowHeight = h.innerHeight);
                };
            }),
            (Ye = class {
                constructor({
                    wrapper: e = h,
                    content: t = document.documentElement,
                    wheelEventsTarget: n = e,
                    eventsTarget: r = n,
                    smoothWheel: i = !0,
                    syncTouch: a = !1,
                    syncTouchLerp: o = 0.075,
                    touchInertiaMultiplier: s = 35,
                    duration: c,
                    easing: l = (e) => Math.min(1, 1.001 - 2 ** (-10 * e)),
                    lerp: u = !c && 0.1,
                    infinite: d = !1,
                    orientation: f = `vertical`,
                    gestureOrientation: p = `vertical`,
                    touchMultiplier: m = 1,
                    wheelMultiplier: g = 1,
                    autoResize: _ = !0,
                    prevent: v = !1,
                    __experimental__naiveDimensions: y = !1,
                } = {}) {
                    (this.__isScrolling = !1),
                        (this.__isStopped = !1),
                        (this.__isLocked = !1),
                        (this.onVirtualScroll = ({ deltaX: e, deltaY: t, event: n }) => {
                            if (n.ctrlKey) return;
                            let r = n.type.includes(`touch`),
                                i = n.type.includes(`wheel`);
                            if (((this.isTouching = n.type === `touchstart` || n.type === `touchmove`), this.options.syncTouch && r && n.type === `touchstart` && !this.isStopped && !this.isLocked)) return void this.reset();
                            let a = e === 0 && t === 0,
                                o = (this.options.gestureOrientation === `vertical` && t === 0) || (this.options.gestureOrientation === `horizontal` && e === 0);
                            if (a || o) return;
                            let s = n.composedPath();
                            s = s.slice(0, s.indexOf(this.rootElement));
                            let c = this.options.prevent;
                            if (
                                s.find((e) => {
                                    var t, n, a, o, s;
                                    return (
                                        (typeof c == `function` ? c?.(e) : c) ||
                                        (t = e.hasAttribute)?.call(e, `data-lenis-prevent`) ||
                                        (r && (n = e.hasAttribute)?.call(e, `data-lenis-prevent-touch`)) ||
                                        (i && (a = e.hasAttribute)?.call(e, `data-lenis-prevent-wheel`)) ||
                                        ((o = e.classList)?.contains(`lenis`) && !(s = e.classList)?.contains(`lenis-stopped`))
                                    );
                                })
                            )
                                return;
                            if (this.isStopped || this.isLocked) return void n.preventDefault();
                            if (!((this.options.syncTouch && r) || (this.options.smoothWheel && i))) return (this.isScrolling = `native`), void this.animate.stop();
                            n.preventDefault();
                            let l = t;
                            this.options.gestureOrientation === `both` ? (l = Math.abs(t) > Math.abs(e) ? t : e) : this.options.gestureOrientation === `horizontal` && (l = e);
                            let u = r && this.options.syncTouch,
                                d = r && n.type === `touchend` && Math.abs(l) > 5;
                            d && (l = this.velocity * this.options.touchInertiaMultiplier),
                                this.scrollTo(
                                    this.targetScroll + l,
                                    Object.assign({ programmatic: !1 }, u ? { lerp: d ? this.options.syncTouchLerp : 1 } : { lerp: this.options.lerp, duration: this.options.duration, easing: this.options.easing })
                                );
                        }),
                        (this.onNativeScroll = () => {
                            if ((clearTimeout(this.__resetVelocityTimeout), delete this.__resetVelocityTimeout, this.__preventNextNativeScrollEvent)) delete this.__preventNextNativeScrollEvent;
                            else if (!1 === this.isScrolling || this.isScrolling === `native`) {
                                let e = this.animatedScroll;
                                (this.animatedScroll = this.targetScroll = this.actualScroll),
                                    (this.lastVelocity = this.velocity),
                                    (this.velocity = this.animatedScroll - e),
                                    (this.direction = Math.sign(this.animatedScroll - e)),
                                    (this.isScrolling = `native`),
                                    this.emit(),
                                    this.velocity !== 0 &&
                                        (this.__resetVelocityTimeout = setTimeout(() => {
                                            (this.lastVelocity = this.velocity), (this.velocity = 0), (this.isScrolling = !1), this.emit();
                                        }, 400));
                            }
                        }),
                        (h.lenisVersion = `1.1.2`),
                        (e !== document.documentElement && e !== document.body) || (e = h),
                        (this.options = {
                            wrapper: e,
                            content: t,
                            wheelEventsTarget: n,
                            eventsTarget: r,
                            smoothWheel: i,
                            syncTouch: a,
                            syncTouchLerp: o,
                            touchInertiaMultiplier: s,
                            duration: c,
                            easing: l,
                            lerp: u,
                            infinite: d,
                            gestureOrientation: p,
                            orientation: f,
                            touchMultiplier: m,
                            wheelMultiplier: g,
                            autoResize: _,
                            prevent: v,
                            __experimental__naiveDimensions: y,
                        }),
                        (this.animate = new We()),
                        (this.emitter = new Ke()),
                        (this.dimensions = new Ge({ wrapper: e, content: t, autoResize: _ })),
                        this.updateClassName(),
                        (this.userData = {}),
                        (this.time = 0),
                        (this.velocity = this.lastVelocity = 0),
                        (this.isLocked = !1),
                        (this.isStopped = !1),
                        (this.isScrolling = !1),
                        (this.targetScroll = this.animatedScroll = this.actualScroll),
                        this.options.wrapper.addEventListener(`scroll`, this.onNativeScroll, !1),
                        (this.virtualScroll = new Je(r, { touchMultiplier: m, wheelMultiplier: g })),
                        this.virtualScroll.on(`scroll`, this.onVirtualScroll);
                }
                destroy() {
                    this.emitter.destroy(), this.options.wrapper.removeEventListener(`scroll`, this.onNativeScroll, !1), this.virtualScroll.destroy(), this.dimensions.destroy(), this.cleanUpClassName();
                }
                on(e, t) {
                    return this.emitter.on(e, t);
                }
                off(e, t) {
                    return this.emitter.off(e, t);
                }
                setScroll(e) {
                    this.isHorizontal ? (this.rootElement.scrollLeft = e) : (this.rootElement.scrollTop = e);
                }
                resize() {
                    this.dimensions.resize();
                }
                emit({ userData: e = {} } = {}) {
                    (this.userData = e), this.emitter.emit(`scroll`, this), (this.userData = {});
                }
                reset() {
                    (this.isLocked = !1), (this.isScrolling = !1), (this.animatedScroll = this.targetScroll = this.actualScroll), (this.lastVelocity = this.velocity = 0), this.animate.stop();
                }
                start() {
                    this.isStopped && ((this.isStopped = !1), this.reset());
                }
                stop() {
                    this.isStopped || ((this.isStopped = !0), this.animate.stop(), this.reset());
                }
                raf(e) {
                    let t = e - (this.time || e);
                    (this.time = e), this.animate.advance(0.001 * t);
                }
                scrollTo(
                    e,
                    {
                        offset: t = 0,
                        immediate: n = !1,
                        lock: r = !1,
                        duration: i = this.options.duration,
                        easing: a = this.options.easing,
                        lerp: o = !i && this.options.lerp,
                        onStart: s,
                        onComplete: c,
                        force: l = !1,
                        programmatic: u = !0,
                        userData: d = {},
                    } = {}
                ) {
                    if ((!this.isStopped && !this.isLocked) || l) {
                        if ([`top`, `left`, `start`].includes(e)) e = 0;
                        else if ([`bottom`, `right`, `end`].includes(e)) e = this.limit;
                        else {
                            let n;
                            if ((typeof e == `string` ? (n = document.querySelector(e)) : e != null && e.nodeType && (n = e), n)) {
                                if (this.options.wrapper !== h) {
                                    let e = this.options.wrapper.getBoundingClientRect();
                                    t -= this.isHorizontal ? e.left : e.top;
                                }
                                let r = n.getBoundingClientRect();
                                e = (this.isHorizontal ? r.left : r.top) + this.animatedScroll;
                            }
                        }
                        if (typeof e == `number`) {
                            if (((e += t), (e = Math.round(e)), this.options.infinite ? u && (this.targetScroll = this.animatedScroll = this.scroll) : (e = Ue(0, e, this.limit)), n))
                                return (this.animatedScroll = this.targetScroll = e), this.setScroll(this.scroll), this.reset(), void (c == null || c(this));
                            e !== this.targetScroll &&
                                (u || (this.targetScroll = e),
                                this.animate.fromTo(this.animatedScroll, e, {
                                    duration: i,
                                    easing: a,
                                    lerp: o,
                                    onStart: () => {
                                        r && (this.isLocked = !0), (this.isScrolling = `smooth`), s?.(this);
                                    },
                                    onUpdate: (e, t) => {
                                        (this.isScrolling = `smooth`),
                                            (this.lastVelocity = this.velocity),
                                            (this.velocity = e - this.animatedScroll),
                                            (this.direction = Math.sign(this.velocity)),
                                            (this.animatedScroll = e),
                                            this.setScroll(this.scroll),
                                            u && (this.targetScroll = e),
                                            t || this.emit({ userData: d }),
                                            t && (this.reset(), this.emit({ userData: d }), c?.(this), (this.__preventNextNativeScrollEvent = !0));
                                    },
                                }));
                        }
                    }
                }
                get rootElement() {
                    return this.options.wrapper === h ? document.documentElement : this.options.wrapper;
                }
                get limit() {
                    return this.options.__experimental__naiveDimensions
                        ? this.isHorizontal
                            ? this.rootElement.scrollWidth - this.rootElement.clientWidth
                            : this.rootElement.scrollHeight - this.rootElement.clientHeight
                        : this.dimensions.limit[this.isHorizontal ? `x` : `y`];
                }
                get isHorizontal() {
                    return this.options.orientation === `horizontal`;
                }
                get actualScroll() {
                    return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop;
                }
                get scroll() {
                    return this.options.infinite
                        ? (function (e, t) {
                              return ((e % t) + t) % t;
                          })(this.animatedScroll, this.limit)
                        : this.animatedScroll;
                }
                get progress() {
                    return this.limit === 0 ? 1 : this.scroll / this.limit;
                }
                get isScrolling() {
                    return this.__isScrolling;
                }
                set isScrolling(e) {
                    this.__isScrolling !== e && ((this.__isScrolling = e), this.updateClassName());
                }
                get isStopped() {
                    return this.__isStopped;
                }
                set isStopped(e) {
                    this.__isStopped !== e && ((this.__isStopped = e), this.updateClassName());
                }
                get isLocked() {
                    return this.__isLocked;
                }
                set isLocked(e) {
                    this.__isLocked !== e && ((this.__isLocked = e), this.updateClassName());
                }
                get isSmooth() {
                    return this.isScrolling === `smooth`;
                }
                get className() {
                    let e = `lenis`;
                    return this.isStopped && (e += ` lenis-stopped`), this.isLocked && (e += ` lenis-locked`), this.isScrolling && (e += ` lenis-scrolling`), this.isScrolling === `smooth` && (e += ` lenis-smooth`), e;
                }
                updateClassName() {
                    this.cleanUpClassName(), (this.rootElement.className = `${this.rootElement.className} ${this.className}`.trim());
                }
                cleanUpClassName() {
                    this.rootElement.className = this.rootElement.className.replace(/lenis(-\w+)?/g, ``).trim();
                }
            });
    });
function Ze(e) {
    let { intensity: t } = e,
        n = l(null);
    return (
        m(() => {
            if (n.current)
                try {
                    n.current.scrollTo(0, { immediate: !0 });
                } catch (e) {
                    console.error(`Error scrolling to top:`, e);
                }
        }, [n]),
        m(() => {
            let e = () => {
                try {
                    let e = document.querySelector(`[data-frameruni-stop-scroll]`),
                        t = document.documentElement,
                        r = t && t.style && t.style.overflow === `hidden`;
                    n.current && (e || r ? n.current.stop() : n.current.start());
                } catch (e) {
                    console.error(`Error in checkForStopScroll:`, e);
                }
            };
            e();
            let t, r;
            try {
                (t = new MutationObserver(e)),
                    (r = new MutationObserver(e)),
                    document &&
                        document.documentElement &&
                        (t.observe(document.documentElement, { childList: !0, subtree: !0, attributes: !0, attributeFilter: [`data-frameruni-stop-scroll`] }),
                        r.observe(document.documentElement, { attributes: !0, attributeFilter: [`style`] }));
            } catch (e) {
                console.error(`Error setting up observers:`, e);
            }
            return () => {
                try {
                    t && t.disconnect(), r && r.disconnect();
                } catch (e) {
                    console.error(`Error disconnecting observers:`, e);
                }
            };
        }, []),
        m(() => {
            try {
                if (!document) return;
                let e = document.getElementsByTagName(`*`);
                for (let t = 0; t < e.length; t++) {
                    let n = e[t];
                    if (n)
                        try {
                            let e = h.getComputedStyle(n);
                            e && e.getPropertyValue(`overflow`) === `auto` && n.setAttribute(`data-lenis-prevent`, `true`);
                        } catch (e) {
                            console.error(`Error getting computed style:`, e);
                        }
                }
            } catch (e) {
                console.error(`Error in overflow detection:`, e);
            }
        }, []),
        m(() => {
            try {
                if (typeof Ye != `function`) {
                    console.error(`Lenis is not available`);
                    return;
                }
                n.current = new Ye({ duration: (t || 10) / 10 });
                let e = (t) => {
                        if (n.current)
                            try {
                                n.current.raf(t), requestAnimationFrame(e);
                            } catch (e) {
                                console.error(`Error in animation frame:`, e);
                            }
                    },
                    r = requestAnimationFrame(e);
                return () => {
                    if ((cancelAnimationFrame(r), n.current))
                        try {
                            n.current.destroy(), (n.current = null);
                        } catch (e) {
                            console.error(`Error destroying Lenis:`, e);
                        }
                };
            } catch (e) {
                return console.error(`Error initializing Lenis:`, e), () => {};
            }
        }, [t]),
        m(() => {
            try {
                if (!document || !n.current) return;
                let e = Array.from(document.querySelectorAll(`a[href]`) || [])
                        .filter((e) => {
                            if (!e) return !1;
                            let t = e;
                            if (!t.href) return !1;
                            let n = t.href.startsWith(h.location.origin) || t.href.startsWith(`./`) || t.href.startsWith(`/`),
                                r = t.href.includes(`#`);
                            return n && r;
                        })
                        .map((e) => {
                            try {
                                let t = e,
                                    n = t.href.includes(`#`) ? `#${t.href.split(`#`).pop()}` : ``,
                                    r = n ? decodeURIComponent(n) : ``,
                                    i = 0;
                                try {
                                    if (r) {
                                        let e = document.querySelector(r);
                                        if (e) {
                                            let t = h.getComputedStyle(e).scrollMarginTop;
                                            i = (t && parseInt(t)) || 0;
                                        }
                                    }
                                } catch (e) {
                                    console.error(`Error finding target element:`, e);
                                }
                                return { href: n, scrollMargin: i, anchorElement: t };
                            } catch (e) {
                                return console.error(`Error processing anchor:`, e), null;
                            }
                        })
                        .filter(Boolean),
                    t = (e, t, r) => {
                        try {
                            e && e.preventDefault && e.preventDefault(), n.current && t && n.current.scrollTo(t, { offset: -(r || 0) });
                        } catch (e) {
                            console.error(`Error in anchor click handler:`, e);
                        }
                    },
                    r = e.map(({ href: e, scrollMargin: n }) => (r) => t(r, e, n));
                return (
                    e.forEach(({ anchorElement: e }, t) => {
                        e && r[t] && e.addEventListener(`click`, r[t]);
                    }),
                    () => {
                        e.forEach(({ anchorElement: e }, t) => {
                            e && r[t] && e.removeEventListener(`click`, r[t]);
                        });
                    }
                );
            } catch (e) {
                return console.error(`Error setting up anchor links:`, e), () => {};
            }
        }, [n]),
        c(`div`, { style: e.style })
    );
}
var Qe,
    $e = e(() => {
        o(),
            i(),
            B(),
            Xe(),
            a(),
            (Qe = K(
                Ze,
                [
                    `html.lenis { height: auto; }`,
                    `.lenis.lenis-smooth { scroll-behavior: auto !important; }`,
                    `.lenis.lenis-smooth [data-lenis-prevent] { overscroll-behavior: contain; }`,
                    `.lenis.lenis-stopped { overflow: hidden; }`,
                    `.lenis.lenis-scrolling iframe { pointer-events: none; }`,
                ],
                ``
            )),
            (Qe.displayName = `Smooth Scroll`),
            N(Qe, { intensity: { title: `Intensity`, type: T.Number, defaultValue: 10, min: 0, description: `More components at [Framer University](https://frameruni.link/cc).` } });
    });
function et(e) {
    let [t, n] = _(null);
    m(() => {
        let t = e.customSvgCode;
        r(t);
    });
    let r = (t) => {
            let r = [
                    [/width="[^"]*"/, `width="100%"`],
                    [/height="[^"]*"/, `height="100%"`],
                ],
                i = t.includes(`stroke="`),
                a = t.includes(`stroke-width="`),
                o = t.includes(`stroke-linecap="`),
                s = t.includes(`stroke-linejoin="`);
            if (t.includes(`<circle`)) {
                let n = /<circle[^>]*fill="([^"]*)"/,
                    i = t.match(n);
                if (i) {
                    let r = i[0].replace(i[1], e.customColor);
                    t = t.replace(n, r);
                } else r.push([/<circle/g, `<circle fill="${e.customColor}"`]);
            }
            i
                ? (o ? r.push([/<path/g, `<path stroke="${e.customColor}" stroke-linecap="${e.lineCap}"`]) : r.push([/<path/g, `<path stroke="${e.customColor}"`]),
                  a && r.push([/stroke-width="(?!0\b)\d+(\.\d+)?"/g, `stroke-width="${e.customStrokeWidth}"`]))
                : r.push([/<path/g, `<path fill="${e.customColor}"`]),
                t.includes(`overflow="`) ? r.push([/overflow="[^"]*"/, `overflow="visible"`]) : r.push([/<svg/, `<svg overflow="visible"`]),
                s ? r.push([/stroke-linejoin="[^"]*"/, `stroke-linejoin="${e.lineJoin}"`]) : r.push([/<path/g, `<path stroke-linejoin="${e.lineJoin}"`]),
                r.forEach(([e, n]) => {
                    t = t.replace(e, n);
                }),
                n(t);
        },
        i = { padding: `${e.customPadding}px`, display: `flex`, flexDirection: `column`, alignItems: `center`, justifyContent: `center`, overflow: `visible` },
        a = { role: `img`, ...(e.title && { "aria-label": e.title }), ...(e.description && { "aria-description": e.description }) };
    return c(`div`, { dangerouslySetInnerHTML: { __html: t }, style: i, ...a });
}
var tt = e(() => {
        i(),
            a(),
            B(),
            (et.displayName = `SVG`),
            (et.defaultProps = {
                customSvgCode: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_967_124)"> <path d="M18 6.09674C18 6.0348 18.0246 5.97539 18.0684 5.93159L23.6013 0.398708C23.7484 0.251575 24 0.35578 24 0.563858V11.9033C24 11.9652 23.9754 12.0246 23.9316 12.0684L18 18V6.09674Z" fill="white"/> <path d="M6 18V6.56386C6 6.35578 5.74843 6.25158 5.60129 6.39871L0.0684074 11.9316C0.0246069 11.9754 0 12.0348 0 12.0967V23.7664C0 23.8954 0.104567 24 0.233557 24H11.9033C11.9652 24 12.0246 23.9754 12.0684 23.9316L18 18H6Z" fill="white"/> </g> <defs> <clipPath id="clip0_967_124"> <rect width="24" height="24" fill="white"/> </clipPath> </defs> </svg>`,
                customColor: `#ffffff`,
                customPadding: 0,
                customStrokeWidth: 2,
                lineCap: `butt`,
                lineJoin: `miter`,
                title: ``,
                description: ``,
            }),
            N(et, {
                customSvgCode: { type: T.String, title: `SVG Code`, displayTextArea: !1 },
                customColor: { type: T.Color, title: `Color`, defaultValue: `#ffffff` },
                customPadding: { type: T.Number, title: `Padding`, defaultValue: 0, min: 0, step: 1, displayStepper: !0 },
                customStrokeWidth: { type: T.Number, title: `Stroke`, defaultValue: 2, min: 0, step: 0.1, displayStepper: !0, hidden: (e) => !e.customSvgCode.includes(`stroke="`) },
                lineCap: { type: T.Enum, title: `Line Cap`, options: [`butt`, `round`, `square`], optionTitles: [`Butt`, `Round`, `Square`], defaultValue: `butt`, hidden: (e) => !e.customSvgCode.includes(`stroke="`) },
                lineJoin: { type: T.Enum, title: `Line Join`, options: [`round`, `miter`, `bevel`], optionTitles: [`Round`, `Miter`, `Bevel`], defaultValue: `miter`, hidden: (e) => !e.customSvgCode.includes(`stroke="`) },
                title: { type: T.String, title: `Title`, defaultValue: ``, placeholder: `Icon name...` },
                description: { type: T.String, title: `Description`, defaultValue: ``, placeholder: `Icon purpose...`, description: `More components at [Framer University](https://frameruni.link/cc).` },
            });
    }),
    nt,
    rt,
    it,
    at = e(() => {
        B(),
            F.loadFonts([`CUSTOM;Delight Regular`]),
            (nt = [{ explicitInter: !0, fonts: [{ family: `Delight Regular`, source: `custom`, url: `https://framerusercontent.com/assets/pR4AjJlW0OWZiykVbHWQPugHiVk.woff2` }] }]),
            (rt = [
                `.framer-JVd07 .framer-styles-preset-gflfq8:not(.rich-text-wrapper), .framer-JVd07 .framer-styles-preset-gflfq8.rich-text-wrapper p { --framer-font-family: "Delight Regular", "Delight Regular Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 24px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-letter-spacing: 0.02em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 0px; --framer-text-alignment: center; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
                `@media (max-width: 1199px) and (min-width: 768px) { .framer-JVd07 .framer-styles-preset-gflfq8:not(.rich-text-wrapper), .framer-JVd07 .framer-styles-preset-gflfq8.rich-text-wrapper p { --framer-font-family: "Delight Regular", "Delight Regular Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-letter-spacing: 0.02em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 0px; --framer-text-alignment: center; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
                `@media (max-width: 767px) and (min-width: 0px) { .framer-JVd07 .framer-styles-preset-gflfq8:not(.rich-text-wrapper), .framer-JVd07 .framer-styles-preset-gflfq8.rich-text-wrapper p { --framer-font-family: "Delight Regular", "Delight Regular Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-letter-spacing: 0.02em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 0px; --framer-text-alignment: center; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
            ]),
            (it = `framer-JVd07`);
    });
function ot(e, ...t) {
    let n = {};
    return t?.forEach((t) => t && Object.assign(n, e[t])), n;
}
var st,
    ct,
    lt,
    ut,
    dt,
    ft,
    pt,
    mt,
    ht,
    gt,
    _t,
    vt,
    yt,
    bt,
    xt,
    St,
    Ct,
    wt,
    Tt,
    Et,
    Dt = e(() => {
        i(),
            B(),
            b(),
            a(),
            tt(),
            at(),
            (st = I(et)),
            (ct = z(et)),
            (lt = [`nILK10RBC`, `RxGG1nUwH`]),
            (ut = `framer-ydN6l`),
            (dt = { nILK10RBC: `framer-v-1nf43oe`, RxGG1nUwH: `framer-v-12z5xgl` }),
            (ft = { delay: 0, duration: 0.4, ease: [0.93, 0.21, 0.42, 0.97], type: `tween` }),
            (pt = { bounce: 0.2, delay: 0, duration: 0.8, type: `spring` }),
            (mt = (e, t) => `translate(-50%, -50%) ${t}`),
            (ht = (e, t) => `translateX(-50%) ${t}`),
            (gt = (e, t) => `translateY(-50%) ${t}`),
            (_t = ({ value: e, children: t }) => {
                let n = u(y),
                    r = e ?? n.transition,
                    i = d(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
                return c(y.Provider, { value: i, children: t });
            }),
            (vt = S.create(g)),
            (yt = { Bevel: `bevel`, Miter: `miter`, Round: `round` }),
            (bt = { Butt: `butt`, Round: `round`, Square: `square` }),
            (xt = { "Variant 2": `RxGG1nUwH`, Variant: `nILK10RBC` }),
            (St = ({ height: e, iconColor: t, iconDescription: n, iconLineCap: r, iconLineJoin: i, iconPadding: a, iconStroke: o, iconTitle: s, iconVisibile: c, id: l, sVGCode: u, textColor: d, textTitle: f, width: p, ...m }) => ({
                ...m,
                AynQ3OysG: a ?? m.AynQ3OysG,
                cKeueTKkp: yt[i] ?? i ?? m.cKeueTKkp ?? `miter`,
                Evkc3Kal1: bt[r] ?? r ?? m.Evkc3Kal1 ?? `butt`,
                GunC9dqPa: n ?? m.GunC9dqPa,
                IxK7i8Rro:
                    u ??
                    m.IxK7i8Rro ??
                    `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path d="M 6.604 11.399 L 12.004 16.799 L 17.403 11.399" fill="transparent" stroke-width="2.25" stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 12.006 16.799 L 12.006 2.399" fill="transparent" stroke-width="2.25" stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 1.201 20.399 C 8.203 22.739 15.799 22.739 22.801 20.399" fill="transparent" stroke-width="2.25" stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-linejoin="round"></path></svg>`,
                jzGivz_i8: o ?? m.jzGivz_i8 ?? 2,
                nxaRaqvOu: s ?? m.nxaRaqvOu,
                o6I_W0QYY: c ?? m.o6I_W0QYY ?? !0,
                OX5GubsKx: f ?? m.OX5GubsKx ?? `Button`,
                PUgFdB1KN: d ?? m.PUgFdB1KN ?? `rgb(255, 255, 255)`,
                variant: xt[m.variant] ?? m.variant ?? `nILK10RBC`,
                XBfxa8aDH: t ?? m.XBfxa8aDH ?? `rgb(255, 255, 255)`,
            })),
            (Ct = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
            (wt = n(function (e, t) {
                let n = l(null),
                    i = t ?? n,
                    a = r(),
                    { activeLocale: o, setLocale: s } = U();
                V();
                let { style: u, className: d, layoutId: f, variant: m, o6I_W0QYY: h, OX5GubsKx: _, PUgFdB1KN: y, IxK7i8Rro: b, XBfxa8aDH: x, AynQ3OysG: C, jzGivz_i8: T, cKeueTKkp: E, nxaRaqvOu: D, GunC9dqPa: O, Evkc3Kal1: A, ...M } = St(e),
                    { baseVariant: N, classNames: F, clearLoadingGesture: I, gestureHandlers: L, gestureVariant: R, isLoading: z, setGestureState: B, setVariant: ee, variants: H } = G({
                        cycleOrder: lt,
                        defaultVariant: `nILK10RBC`,
                        ref: i,
                        variant: m,
                        variantClassNames: dt,
                    }),
                    W = Ct(e, H),
                    K = [it],
                    te = P(ut, ...K);
                return c(v, {
                    id: f ?? a,
                    children: c(vt, {
                        animate: H,
                        initial: !1,
                        children: c(_t, {
                            value: ft,
                            ...ot({ RxGG1nUwH: { value: pt } }, N, R),
                            children: c(S.div, {
                                ...M,
                                ...L,
                                className: P(te, `framer-1nf43oe`, d, F),
                                layoutDependency: W,
                                layoutId: `nILK10RBC`,
                                ref: i,
                                style: { ...u },
                                ...ot({ RxGG1nUwH: { "data-framer-name": `Variant 2` } }, N, R),
                                children: p(S.div, {
                                    className: `framer-1im7qkv`,
                                    "data-framer-name": `Desktop`,
                                    layoutDependency: W,
                                    layoutId: `lRb2FuCfF`,
                                    style: { borderBottomLeftRadius: 50, borderBottomRightRadius: 50, borderTopLeftRadius: 50, borderTopRightRadius: 50 },
                                    children: [
                                        p(S.div, {
                                            className: `framer-1fc90pt`,
                                            "data-framer-name": `Text`,
                                            layoutDependency: W,
                                            layoutId: `CLd_Xe3wP`,
                                            style: { borderBottomLeftRadius: 100, borderBottomRightRadius: 100, borderTopLeftRadius: 100, borderTopRightRadius: 100 },
                                            children: [
                                                c(k, {
                                                    __fromCanvasComponent: !0,
                                                    children: c(g, {
                                                        children: c(S.p, {
                                                            className: `framer-styles-preset-gflfq8`,
                                                            "data-styles-preset": `W1Ccjr0iR`,
                                                            style: { "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-PUgFdB1KN-bl7TfuCSh))` },
                                                            children: `Button`,
                                                        }),
                                                    }),
                                                    className: `framer-1sd3xvg`,
                                                    "data-framer-name": `Relative`,
                                                    fonts: [`Inter`],
                                                    layoutDependency: W,
                                                    layoutId: `fRf0oZFzQ`,
                                                    style: {
                                                        "--extracted-r6o4lv": `var(--variable-reference-PUgFdB1KN-bl7TfuCSh)`,
                                                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                                                        "--framer-link-text-decoration": `underline`,
                                                        "--variable-reference-PUgFdB1KN-bl7TfuCSh": y,
                                                        opacity: 0,
                                                    },
                                                    text: _,
                                                    verticalAlignment: `top`,
                                                    withExternalLayout: !0,
                                                }),
                                                c(k, {
                                                    __fromCanvasComponent: !0,
                                                    children: c(g, {
                                                        children: c(S.p, {
                                                            className: `framer-styles-preset-gflfq8`,
                                                            "data-styles-preset": `W1Ccjr0iR`,
                                                            style: { "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-PUgFdB1KN-bl7TfuCSh))` },
                                                            children: `Button`,
                                                        }),
                                                    }),
                                                    className: `framer-1l2eac0`,
                                                    "data-framer-name": `Text 1`,
                                                    fonts: [`Inter`],
                                                    layoutDependency: W,
                                                    layoutId: `BdrdWH3Pg`,
                                                    style: {
                                                        "--extracted-r6o4lv": `var(--variable-reference-PUgFdB1KN-bl7TfuCSh)`,
                                                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                                                        "--framer-link-text-decoration": `underline`,
                                                        "--variable-reference-PUgFdB1KN-bl7TfuCSh": y,
                                                        opacity: 1,
                                                        rotateX: 0,
                                                        transformPerspective: 500,
                                                    },
                                                    text: _,
                                                    transformTemplate: mt,
                                                    variants: { RxGG1nUwH: { opacity: 0, rotateX: 90 } },
                                                    verticalAlignment: `top`,
                                                    withExternalLayout: !0,
                                                    ...ot({ RxGG1nUwH: { transformTemplate: void 0 } }, N, R),
                                                }),
                                                c(k, {
                                                    __fromCanvasComponent: !0,
                                                    children: c(g, {
                                                        children: c(S.p, {
                                                            className: `framer-styles-preset-gflfq8`,
                                                            "data-styles-preset": `W1Ccjr0iR`,
                                                            style: { "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-PUgFdB1KN-bl7TfuCSh))` },
                                                            children: `Button`,
                                                        }),
                                                    }),
                                                    className: `framer-1qovlgs`,
                                                    "data-framer-name": `Text 2`,
                                                    fonts: [`Inter`],
                                                    layoutDependency: W,
                                                    layoutId: `ledPUfhyP`,
                                                    style: {
                                                        "--extracted-r6o4lv": `var(--variable-reference-PUgFdB1KN-bl7TfuCSh)`,
                                                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                                                        "--framer-link-text-decoration": `underline`,
                                                        "--variable-reference-PUgFdB1KN-bl7TfuCSh": y,
                                                        opacity: 0,
                                                        rotateX: -90,
                                                        transformPerspective: 500,
                                                    },
                                                    text: _,
                                                    transformTemplate: ht,
                                                    variants: { RxGG1nUwH: { opacity: 1, rotateX: 0 } },
                                                    verticalAlignment: `top`,
                                                    withExternalLayout: !0,
                                                    ...ot({ RxGG1nUwH: { transformTemplate: gt } }, N, R),
                                                }),
                                            ],
                                        }),
                                        h &&
                                            p(S.div, {
                                                className: `framer-d9lznt`,
                                                "data-framer-name": `icon`,
                                                layoutDependency: W,
                                                layoutId: `rcSfwAXmC`,
                                                children: [
                                                    c(w, {
                                                        children: c(j, {
                                                            className: `framer-1qgvmhf-container`,
                                                            isAuthoredByUser: !0,
                                                            isModuleExternal: !0,
                                                            layoutDependency: W,
                                                            layoutId: `n4RSyF4Qz-container`,
                                                            nodeId: `n4RSyF4Qz`,
                                                            rendersWithMotion: !0,
                                                            scopeId: `bl7TfuCSh`,
                                                            style: { opacity: 0, rotateX: 0, transformPerspective: 500 },
                                                            variants: { RxGG1nUwH: { rotateX: 90 } },
                                                            children: c(et, {
                                                                customColor: x,
                                                                customPadding: C,
                                                                customStrokeWidth: T,
                                                                customSvgCode: b,
                                                                description: O,
                                                                height: `100%`,
                                                                id: `n4RSyF4Qz`,
                                                                layoutId: `n4RSyF4Qz`,
                                                                lineCap: A,
                                                                lineJoin: E,
                                                                style: { height: `100%`, width: `100%` },
                                                                title: D,
                                                                width: `100%`,
                                                            }),
                                                        }),
                                                    }),
                                                    c(w, {
                                                        children: c(j, {
                                                            className: `framer-1xbln1t-container`,
                                                            isAuthoredByUser: !0,
                                                            isModuleExternal: !0,
                                                            layoutDependency: W,
                                                            layoutId: `XSnoyRrrr-container`,
                                                            nodeId: `XSnoyRrrr`,
                                                            rendersWithMotion: !0,
                                                            scopeId: `bl7TfuCSh`,
                                                            style: { opacity: 1, rotateX: 0, transformPerspective: 500 },
                                                            variants: { RxGG1nUwH: { opacity: 0, rotateX: 90 } },
                                                            children: c(et, {
                                                                customColor: x,
                                                                customPadding: C,
                                                                customStrokeWidth: T,
                                                                customSvgCode: b,
                                                                description: O,
                                                                height: `100%`,
                                                                id: `XSnoyRrrr`,
                                                                layoutId: `XSnoyRrrr`,
                                                                lineCap: A,
                                                                lineJoin: E,
                                                                style: { height: `100%`, width: `100%` },
                                                                title: D,
                                                                width: `100%`,
                                                            }),
                                                        }),
                                                    }),
                                                    c(w, {
                                                        children: c(j, {
                                                            className: `framer-xb9gl0-container`,
                                                            isAuthoredByUser: !0,
                                                            isModuleExternal: !0,
                                                            layoutDependency: W,
                                                            layoutId: `QLOSa_Pj_-container`,
                                                            nodeId: `QLOSa_Pj_`,
                                                            rendersWithMotion: !0,
                                                            scopeId: `bl7TfuCSh`,
                                                            style: { opacity: 0, rotateX: -90, transformPerspective: 500 },
                                                            variants: { RxGG1nUwH: { opacity: 1, rotateX: 0 } },
                                                            children: c(et, {
                                                                customColor: x,
                                                                customPadding: C,
                                                                customStrokeWidth: T,
                                                                customSvgCode: b,
                                                                description: O,
                                                                height: `100%`,
                                                                id: `QLOSa_Pj_`,
                                                                layoutId: `QLOSa_Pj_`,
                                                                lineCap: A,
                                                                lineJoin: E,
                                                                style: { height: `100%`, width: `100%` },
                                                                title: D,
                                                                width: `100%`,
                                                            }),
                                                        }),
                                                    }),
                                                ],
                                            }),
                                    ],
                                }),
                            }),
                        }),
                    }),
                });
            })),
            (Tt = [
                `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
                `.framer-ydN6l.framer-2ryynh, .framer-ydN6l .framer-2ryynh { display: block; }`,
                `.framer-ydN6l.framer-1nf43oe { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
                `.framer-ydN6l .framer-1im7qkv { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 24px 0px 24px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
                `.framer-ydN6l .framer-1fc90pt { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 44px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
                `.framer-ydN6l .framer-1sd3xvg { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }`,
                `.framer-ydN6l .framer-1l2eac0 { -webkit-user-select: none; flex: none; height: auto; left: 50%; position: absolute; top: 50%; user-select: none; white-space: pre; width: auto; z-index: 1; }`,
                `.framer-ydN6l .framer-1qovlgs { -webkit-user-select: none; bottom: 0px; flex: none; height: auto; left: 50%; position: absolute; user-select: none; white-space: pre; width: auto; z-index: 1; }`,
                `.framer-ydN6l .framer-d9lznt { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: 24px; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 24px; }`,
                `.framer-ydN6l .framer-1qgvmhf-container { flex: 1 0 0px; height: 1px; position: relative; width: 100%; }`,
                `.framer-ydN6l .framer-1xbln1t-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; z-index: 1; }`,
                `.framer-ydN6l .framer-xb9gl0-container { bottom: -12px; flex: none; height: 24px; left: calc(50.00000000000002% - 24px / 2); position: absolute; width: 24px; z-index: 1; }`,
                `.framer-ydN6l.framer-v-12z5xgl.framer-1nf43oe, .framer-ydN6l.framer-v-12z5xgl .framer-d9lznt { justify-content: flex-end; }`,
                `.framer-ydN6l.framer-v-12z5xgl .framer-1l2eac0 { left: unset; right: 0px; top: -12px; }`,
                `.framer-ydN6l.framer-v-12z5xgl .framer-1qovlgs { bottom: unset; left: unset; right: 0px; top: 50%; }`,
                `.framer-ydN6l.framer-v-12z5xgl .framer-1xbln1t-container { bottom: unset; height: 24px; top: -12px; }`,
                `.framer-ydN6l.framer-v-12z5xgl .framer-xb9gl0-container { bottom: 0px; left: 0px; right: 0px; width: unset; }`,
                ...rt,
            ]),
            (Et = K(wt, Tt, `framer-ydN6l`)),
            (Et.displayName = `Hover stagger text`),
            (Et.defaultProps = { height: 44, width: 162 }),
            N(Et, {
                variant: { options: [`nILK10RBC`, `RxGG1nUwH`], optionTitles: [`Variant`, `Variant 2`], title: `Variant`, type: T.Enum },
                o6I_W0QYY: { defaultValue: !0, title: `Icon visibile`, type: T.Boolean },
                OX5GubsKx: { defaultValue: `Button`, displayTextArea: !1, title: `Text title`, type: T.String },
                PUgFdB1KN: { defaultValue: `rgb(255, 255, 255)`, title: `Text color`, type: T.Color },
                IxK7i8Rro: {
                    defaultValue: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path d="M 6.604 11.399 L 12.004 16.799 L 17.403 11.399" fill="transparent" stroke-width="2.25" stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 12.006 16.799 L 12.006 2.399" fill="transparent" stroke-width="2.25" stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 1.201 20.399 C 8.203 22.739 15.799 22.739 22.801 20.399" fill="transparent" stroke-width="2.25" stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-linejoin="round"></path></svg>`,
                    displayTextArea: !1,
                    title: `SVG Code`,
                    type: T.String,
                },
                XBfxa8aDH: { defaultValue: `rgb(255, 255, 255)`, title: `Icon color`, type: T.Color },
                AynQ3OysG: { defaultValue: 0, displayStepper: !0, min: 0, step: 1, title: `Icon Padding`, type: T.Number },
                jzGivz_i8: { defaultValue: 2, displayStepper: !0, min: 0, step: 0.1, title: `Icon Stroke`, type: T.Number },
                cKeueTKkp: ct?.lineJoin && { ...ct.lineJoin, defaultValue: `miter`, description: void 0, hidden: void 0, title: `Icon Line Join` },
                nxaRaqvOu: { defaultValue: ``, placeholder: `Icon name...`, title: `Icon Title`, type: T.String },
                GunC9dqPa: { defaultValue: ``, placeholder: `Icon purpose...`, title: `Icon Description`, type: T.String },
                Evkc3Kal1: ct?.lineCap && { ...ct.lineCap, defaultValue: `butt`, description: void 0, hidden: void 0, title: `Icon Line Cap` },
            }),
            M(
                Et,
                [
                    {
                        explicitInter: !0,
                        fonts: [
                            {
                                family: `Inter`,
                                source: `framer`,
                                style: `normal`,
                                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                                weight: `400`,
                            },
                            {
                                family: `Inter`,
                                source: `framer`,
                                style: `normal`,
                                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                                weight: `400`,
                            },
                            { family: `Inter`, source: `framer`, style: `normal`, unicodeRange: `U+1F00-1FFF`, url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`, weight: `400` },
                            { family: `Inter`, source: `framer`, style: `normal`, unicodeRange: `U+0370-03FF`, url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`, weight: `400` },
                            {
                                family: `Inter`,
                                source: `framer`,
                                style: `normal`,
                                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                                weight: `400`,
                            },
                            {
                                family: `Inter`,
                                source: `framer`,
                                style: `normal`,
                                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                                url: `https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2`,
                                weight: `400`,
                            },
                            {
                                family: `Inter`,
                                source: `framer`,
                                style: `normal`,
                                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                                weight: `400`,
                            },
                        ],
                    },
                    ...st,
                    ...L(nt),
                ],
                { supportsExplicitInterCodegen: !0 }
            );
    });
function Ot(e, ...t) {
    let n = {};
    return t?.forEach((t) => t && Object.assign(n, e[t])), n;
}
var kt,
    At,
    jt,
    Mt,
    Nt,
    Pt,
    Ft,
    It,
    Lt,
    Rt,
    zt,
    Bt,
    Vt,
    Ht,
    Ut,
    Wt,
    Gt,
    Kt,
    qt,
    Jt,
    Yt,
    Xt,
    Zt = e(() => {
        i(),
            B(),
            b(),
            a(),
            tt(),
            at(),
            Dt(),
            (kt = I(et)),
            (At = z(Et)),
            (jt = { h1mEo53NR: { hover: !0, pressed: !0 }, r5YKLsCP0: { hover: !0, pressed: !0 }, s2QYckn8i: { hover: !0, pressed: !0 } }),
            (Mt = [`s2QYckn8i`, `r5YKLsCP0`, `h1mEo53NR`]),
            (Nt = `framer-1mVVh`),
            (Pt = { h1mEo53NR: `framer-v-1k8al26`, r5YKLsCP0: `framer-v-1b71lu2`, s2QYckn8i: `framer-v-9vwnw6` }),
            (Ft = (e) => {
                if (typeof e != `number`) return e;
                if (Number.isFinite(e)) return Math.max(0, e) + `px`;
            }),
            (It = (e, t) => {
                if (typeof e == `number` && Number.isFinite(e)) return Math.max(0, e) + `px`;
                if (typeof e != `string` || typeof t != `number`) return;
                let n = e.split(` `);
                return n[t] || n[t - 2] || n[0];
            }),
            (Lt = { bounce: 0.4, delay: 0, duration: 0.8, type: `spring` }),
            (Rt = (e, t) => `translate(-50%, -50%) ${t}`),
            (zt = (e, t) => `translateX(-50%) ${t}`),
            (Bt = (e, t) => `translateY(-50%) ${t}`),
            (Vt = ({ value: e, children: t }) => {
                let n = u(y),
                    r = e ?? n.transition,
                    i = d(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
                return c(y.Provider, { value: i, children: t });
            }),
            (Ht = S.create(g)),
            (Ut = { Bevel: `bevel`, Miter: `miter`, Round: `round` }),
            (Wt = { Butt: `butt`, Round: `round`, Square: `square` }),
            (Gt = { Desktop: `s2QYckn8i`, Mobile: `h1mEo53NR`, Tablet: `r5YKLsCP0` }),
            (Kt = ({
                backgroundBlur: e,
                buttonBorder: t,
                buttonColor: n,
                buttonPadding: r,
                buttonRadius: i,
                cursor: a,
                height: o,
                iconColor: s,
                iconDescription: c,
                iconLineCap: l,
                iconLineJoin: u,
                iconPadding: d,
                iconStroke: f,
                iconTitle: p,
                iconVisibility: m,
                id: h,
                link: g,
                linkNewTab: _,
                linkSmoothScroll: v,
                sVGCode: y,
                textColor2: b,
                titleText: x,
                width: S,
                ...C
            }) => ({
                ...C,
                aKLLB10i3: r ?? C.aKLLB10i3 ?? `24px 48px 24px 48px`,
                cO_mGVWDB: n ?? C.cO_mGVWDB ?? `rgb(0, 0, 0)`,
                HmuqdYPcL: _ ?? C.HmuqdYPcL,
                IvTGu1hfX: p ?? C.IvTGu1hfX,
                jtitP8ffZ: f ?? C.jtitP8ffZ ?? 2,
                k23akfVrc: e ?? C.k23akfVrc,
                meCbsYmGR: d ?? C.meCbsYmGR,
                ndUu0pbiv: c ?? C.ndUu0pbiv,
                NLEM4LU4C: v ?? C.NLEM4LU4C,
                nzqTq0Y6K: s ?? C.nzqTq0Y6K ?? `rgb(255, 255, 255)`,
                oNZz4rwkc: g ?? C.oNZz4rwkc,
                qBiTWd5sf: m ?? C.qBiTWd5sf ?? !0,
                sRrAucc9a: t ?? C.sRrAucc9a ?? { borderColor: `black`, borderStyle: `solid`, borderWidth: 0 },
                U6yLJvTDC: Wt[l] ?? l ?? C.U6yLJvTDC ?? `butt`,
                variant: Gt[C.variant] ?? C.variant ?? `s2QYckn8i`,
                VLNSZqzsR:
                    y ??
                    C.VLNSZqzsR ??
                    `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M19.2401 7.90625L27.3334 15.9996L19.2401 24.0929" stroke="#F5F5F5" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/> <path d="M4.66663 16H27.1066" stroke="#F5F5F5" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/> </svg>`,
                vmOPFsvOW: b ?? C.vmOPFsvOW ?? `rgb(255, 255, 255)`,
                YAlo1ESSl: i ?? C.YAlo1ESSl ?? `100px`,
                YXyYmCES5: Ut[u] ?? u ?? C.YXyYmCES5 ?? `miter`,
                ZN3dhuSgc: x ?? C.ZN3dhuSgc ?? `Button`,
                zuVEBVelt: a ?? C.zuVEBVelt,
            })),
            (qt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
            (Jt = n(function (e, t) {
                let n = l(null),
                    i = t ?? n,
                    a = r(),
                    { activeLocale: o, setLocale: s } = U();
                V();
                let {
                        style: u,
                        className: d,
                        layoutId: f,
                        variant: m,
                        VLNSZqzsR: h,
                        nzqTq0Y6K: _,
                        meCbsYmGR: y,
                        jtitP8ffZ: b,
                        ZN3dhuSgc: x,
                        vmOPFsvOW: C,
                        YXyYmCES5: T,
                        IvTGu1hfX: E,
                        ndUu0pbiv: O,
                        U6yLJvTDC: A,
                        aKLLB10i3: M,
                        cO_mGVWDB: N,
                        YAlo1ESSl: F,
                        oNZz4rwkc: I,
                        HmuqdYPcL: L,
                        NLEM4LU4C: R,
                        sRrAucc9a: z,
                        k23akfVrc: B,
                        zuVEBVelt: ee,
                        qBiTWd5sf: H,
                        ...W
                    } = Kt(e),
                    { baseVariant: K, classNames: te, clearLoadingGesture: q, gestureHandlers: ne, gestureVariant: J, isLoading: Y, setGestureState: re, setVariant: ie, variants: ae } = G({
                        cycleOrder: Mt,
                        defaultVariant: `s2QYckn8i`,
                        enabledGestures: jt,
                        ref: i,
                        variant: m,
                        variantClassNames: Pt,
                    }),
                    oe = qt(e, ae),
                    se = [it],
                    ce = P(Nt, ...se);
                return c(v, {
                    id: f ?? a,
                    children: c(Ht, {
                        animate: ae,
                        initial: !1,
                        children: c(Vt, {
                            value: Lt,
                            children: c(D, {
                                href: I,
                                motionChild: !0,
                                nodeId: `s2QYckn8i`,
                                openInNewTab: L,
                                scopeId: `DFbaCIQLb`,
                                smoothScroll: R,
                                children: c(S.a, {
                                    ...W,
                                    ...ne,
                                    className: `${P(ce, `framer-9vwnw6`, d, te)} framer-19ijjqs`,
                                    "data-border": !0,
                                    "data-framer-cursor": ee,
                                    "data-framer-name": `Desktop`,
                                    layoutDependency: oe,
                                    layoutId: `s2QYckn8i`,
                                    ref: i,
                                    style: {
                                        "--1u4xy01": Ft(M),
                                        "--border-bottom-width": (z.borderBottomWidth ?? z.borderWidth) + `px`,
                                        "--border-color": z.borderColor,
                                        "--border-left-width": (z.borderLeftWidth ?? z.borderWidth) + `px`,
                                        "--border-right-width": (z.borderRightWidth ?? z.borderWidth) + `px`,
                                        "--border-style": z.borderStyle,
                                        "--border-top-width": (z.borderTopWidth ?? z.borderWidth) + `px`,
                                        backdropFilter: `blur(${B}px)`,
                                        backgroundColor: N,
                                        borderBottomLeftRadius: It(F, 3),
                                        borderBottomRightRadius: It(F, 2),
                                        borderTopLeftRadius: It(F, 0),
                                        borderTopRightRadius: It(F, 1),
                                        ...u,
                                    },
                                    ...Ot(
                                        {
                                            "h1mEo53NR-hover": { "data-framer-name": void 0 },
                                            "h1mEo53NR-pressed": { "data-framer-name": void 0 },
                                            "r5YKLsCP0-hover": { "data-framer-name": void 0 },
                                            "r5YKLsCP0-pressed": { "data-framer-name": void 0 },
                                            "s2QYckn8i-hover": { "data-framer-name": void 0 },
                                            "s2QYckn8i-pressed": { "data-framer-name": void 0 },
                                            h1mEo53NR: { "data-framer-name": `Mobile` },
                                            r5YKLsCP0: { "data-framer-name": `Tablet` },
                                        },
                                        K,
                                        J
                                    ),
                                    children: c(S.div, {
                                        className: `framer-dxio0q meet-me-here`,
                                         onClick: () => {
    document.getElementById("calendlyModal").style.display = "flex";
  },
                                        "data-framer-name": `Hover stagger text`,
                                        layoutDependency: oe,
                                        layoutId: `CPta5nNdA`,
                                        children: p(S.div, {
                                            className: `framer-141rk91`,
                                            "data-framer-name": `Desktop`,
                                            layoutDependency: oe,
                                            layoutId: `z42Jbgn_2`,
                                            children: [
                                                p(S.div, {
                                                    className: `framer-ymog0s`,
                                                    "data-framer-name": `Text`,
                                                    layoutDependency: oe,
                                                    layoutId: `cpcwJOPXa`,
                                                    style: { borderBottomLeftRadius: 16, borderBottomRightRadius: 16, borderTopLeftRadius: 16, borderTopRightRadius: 16 },
                                                    children: [
                                                        c(k, {
                                                            __fromCanvasComponent: !0,
                                                            children: c(g, {
                                                                children: c(S.p, {
                                                                    className: `framer-styles-preset-gflfq8`,
                                                                    "data-styles-preset": `W1Ccjr0iR`,
                                                                    style: { "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-vmOPFsvOW-DFbaCIQLb))` },
                                                                    children: `Button`,
                                                                }),
                                                            }),
                                                            className: `framer-1pfx6by`,
                                                            "data-framer-name": `Relative`,
                                                            fonts: [`Inter`],
                                                            layoutDependency: oe,
                                                            layoutId: `InnuDLVjg`,
                                                            style: {
                                                                "--extracted-r6o4lv": `var(--variable-reference-vmOPFsvOW-DFbaCIQLb)`,
                                                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                                                "--framer-link-text-decoration": `underline`,
                                                                "--variable-reference-vmOPFsvOW-DFbaCIQLb": C,
                                                                opacity: 0,
                                                            },
                                                            text: x,
                                                            verticalAlignment: `top`,
                                                            withExternalLayout: !0,
                                                        }),
                                                        c(k, {
                                                            __fromCanvasComponent: !0,
                                                            children: c(g, {
                                                                children: c(S.p, {
                                                                    className: `framer-styles-preset-gflfq8`,
                                                                    "data-styles-preset": `W1Ccjr0iR`,
                                                                    style: { "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-vmOPFsvOW-DFbaCIQLb))` },
                                                                    children: `Button`,
                                                                }),
                                                            }),
                                                            className: `framer-12iytkk`,
                                                            "data-framer-name": `Text 1`,
                                                            fonts: [`Inter`],
                                                            layoutDependency: oe,
                                                            layoutId: `QiCwR_y3s`,
                                                            style: {
                                                                "--extracted-r6o4lv": `var(--variable-reference-vmOPFsvOW-DFbaCIQLb)`,
                                                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                                                "--framer-link-text-decoration": `underline`,
                                                                "--variable-reference-vmOPFsvOW-DFbaCIQLb": C,
                                                                opacity: 1,
                                                                rotateX: 0,
                                                                transformPerspective: 500,
                                                            },
                                                            text: x,
                                                            transformTemplate: Rt,
                                                            variants: {
                                                                "h1mEo53NR-hover": { opacity: 0, rotateX: 90 },
                                                                "h1mEo53NR-pressed": { opacity: 0, rotateX: 90 },
                                                                "r5YKLsCP0-hover": { opacity: 0, rotateX: 90 },
                                                                "r5YKLsCP0-pressed": { opacity: 0, rotateX: 90 },
                                                                "s2QYckn8i-hover": { opacity: 0, rotateX: 90 },
                                                                "s2QYckn8i-pressed": { opacity: 0, rotateX: 90 },
                                                            },
                                                            verticalAlignment: `top`,
                                                            withExternalLayout: !0,
                                                            ...Ot(
                                                                {
                                                                    "h1mEo53NR-hover": { transformTemplate: zt },
                                                                    "h1mEo53NR-pressed": { transformTemplate: zt },
                                                                    "r5YKLsCP0-hover": { transformTemplate: zt },
                                                                    "r5YKLsCP0-pressed": { transformTemplate: zt },
                                                                    "s2QYckn8i-hover": { transformTemplate: zt },
                                                                    "s2QYckn8i-pressed": { transformTemplate: zt },
                                                                },
                                                                K,
                                                                J
                                                            ),
                                                        }),
                                                        c(k, {
                                                            __fromCanvasComponent: !0,
                                                            children: c(g, {
                                                                children: c(S.p, {
                                                                    className: `framer-styles-preset-gflfq8`,
                                                                    "data-styles-preset": `W1Ccjr0iR`,
                                                                    style: { "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-vmOPFsvOW-DFbaCIQLb))` },
                                                                    children: `Button`,
                                                                }),
                                                            }),
                                                            className: `framer-11u79jl`,
                                                            "data-framer-name": `Text 2`,
                                                            fonts: [`Inter`],
                                                            layoutDependency: oe,
                                                            layoutId: `blLzXKHse`,
                                                            style: {
                                                                "--extracted-r6o4lv": `var(--variable-reference-vmOPFsvOW-DFbaCIQLb)`,
                                                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                                                "--framer-link-text-decoration": `underline`,
                                                                "--variable-reference-vmOPFsvOW-DFbaCIQLb": C,
                                                                opacity: 0,
                                                                rotateX: -90,
                                                                transformPerspective: 500,
                                                            },
                                                            text: x,
                                                            transformTemplate: zt,
                                                            variants: {
                                                                "h1mEo53NR-hover": { opacity: 1, rotateX: 0 },
                                                                "h1mEo53NR-pressed": { opacity: 1, rotateX: 0 },
                                                                "r5YKLsCP0-hover": { opacity: 1, rotateX: 0 },
                                                                "r5YKLsCP0-pressed": { opacity: 1, rotateX: 0 },
                                                                "s2QYckn8i-hover": { opacity: 1, rotateX: 0 },
                                                                "s2QYckn8i-pressed": { opacity: 1, rotateX: 0 },
                                                            },
                                                            verticalAlignment: `top`,
                                                            withExternalLayout: !0,
                                                            ...Ot(
                                                                {
                                                                    "h1mEo53NR-hover": { transformTemplate: Bt },
                                                                    "h1mEo53NR-pressed": { transformTemplate: Bt },
                                                                    "r5YKLsCP0-hover": { transformTemplate: Rt },
                                                                    "r5YKLsCP0-pressed": { transformTemplate: Rt },
                                                                    "s2QYckn8i-hover": { transformTemplate: Rt },
                                                                    "s2QYckn8i-pressed": { transformTemplate: Rt },
                                                                },
                                                                K,
                                                                J
                                                            ),
                                                        }),
                                                    ],
                                                }),
                                                H &&
                                                    p(S.div, {
                                                        className: `framer-160h2wz`,
                                                        "data-framer-name": `icon`,
                                                        layoutDependency: oe,
                                                        layoutId: `hmpaCfhxa`,
                                                        children: [
                                                            c(w, {
                                                                children: c(j, {
                                                                    className: `framer-adgjbd-container`,
                                                                    isAuthoredByUser: !0,
                                                                    isModuleExternal: !0,
                                                                    layoutDependency: oe,
                                                                    layoutId: `uCWPfEOr0-container`,
                                                                    nodeId: `uCWPfEOr0`,
                                                                    rendersWithMotion: !0,
                                                                    scopeId: `DFbaCIQLb`,
                                                                    style: { opacity: 0, transformPerspective: 500 },
                                                                    children: c(et, {
                                                                        customColor: _,
                                                                        customPadding: y,
                                                                        customStrokeWidth: b,
                                                                        customSvgCode: h,
                                                                        description: O,
                                                                        height: `100%`,
                                                                        id: `uCWPfEOr0`,
                                                                        layoutId: `uCWPfEOr0`,
                                                                        lineCap: A,
                                                                        lineJoin: T,
                                                                        style: { height: `100%`, width: `100%` },
                                                                        title: E,
                                                                        width: `100%`,
                                                                    }),
                                                                }),
                                                            }),
                                                            c(w, {
                                                                children: c(j, {
                                                                    className: `framer-i2u0ci-container`,
                                                                    isAuthoredByUser: !0,
                                                                    isModuleExternal: !0,
                                                                    layoutDependency: oe,
                                                                    layoutId: `tQooxk8Nr-container`,
                                                                    nodeId: `tQooxk8Nr`,
                                                                    rendersWithMotion: !0,
                                                                    scopeId: `DFbaCIQLb`,
                                                                    style: { opacity: 1, rotateX: 0, transformPerspective: 500 },
                                                                    variants: {
                                                                        "h1mEo53NR-hover": { opacity: 0, rotateX: 90 },
                                                                        "h1mEo53NR-pressed": { opacity: 0, rotateX: 90 },
                                                                        "r5YKLsCP0-hover": { opacity: 0, rotateX: 90 },
                                                                        "r5YKLsCP0-pressed": { opacity: 0, rotateX: 90 },
                                                                        "s2QYckn8i-hover": { opacity: 0, rotateX: 90 },
                                                                        "s2QYckn8i-pressed": { opacity: 0, rotateX: 90 },
                                                                    },
                                                                    children: c(et, {
                                                                        customColor: _,
                                                                        customPadding: y,
                                                                        customStrokeWidth: b,
                                                                        customSvgCode: h,
                                                                        description: O,
                                                                        height: `100%`,
                                                                        id: `tQooxk8Nr`,
                                                                        layoutId: `tQooxk8Nr`,
                                                                        lineCap: A,
                                                                        lineJoin: T,
                                                                        style: { height: `100%`, width: `100%` },
                                                                        title: E,
                                                                        width: `100%`,
                                                                    }),
                                                                }),
                                                            }),
                                                            c(w, {
                                                                children: c(j, {
                                                                    className: `framer-rzzeak-container`,
                                                                    isAuthoredByUser: !0,
                                                                    isModuleExternal: !0,
                                                                    layoutDependency: oe,
                                                                    layoutId: `h7uPjPaZg-container`,
                                                                    nodeId: `h7uPjPaZg`,
                                                                    rendersWithMotion: !0,
                                                                    scopeId: `DFbaCIQLb`,
                                                                    style: { opacity: 0, rotateX: -90, transformPerspective: 500 },
                                                                    variants: {
                                                                        "h1mEo53NR-hover": { opacity: 1, rotateX: 0 },
                                                                        "h1mEo53NR-pressed": { opacity: 1, rotateX: 0 },
                                                                        "r5YKLsCP0-hover": { opacity: 1, rotateX: 0 },
                                                                        "r5YKLsCP0-pressed": { opacity: 1, rotateX: 0 },
                                                                        "s2QYckn8i-hover": { opacity: 1, rotateX: 0 },
                                                                        "s2QYckn8i-pressed": { opacity: 1, rotateX: 0 },
                                                                    },
                                                                    children: c(et, {
                                                                        customColor: _,
                                                                        customPadding: y,
                                                                        customStrokeWidth: b,
                                                                        customSvgCode: h,
                                                                        description: O,
                                                                        height: `100%`,
                                                                        id: `h7uPjPaZg`,
                                                                        layoutId: `h7uPjPaZg`,
                                                                        lineCap: A,
                                                                        lineJoin: T,
                                                                        style: { height: `100%`, width: `100%` },
                                                                        title: E,
                                                                        width: `100%`,
                                                                    }),
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                            ],
                                        }),
                                    }),
                                }),
                            }),
                        }),
                    }),
                });
            })),
            (Yt = [
                `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
                `.framer-1mVVh.framer-19ijjqs, .framer-1mVVh .framer-19ijjqs { display: block; }`,
                `.framer-1mVVh.framer-9vwnw6 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: hidden; padding: var(--1u4xy01); position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
                `.framer-1mVVh .framer-dxio0q { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
                `.framer-1mVVh .framer-141rk91 { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 24px 0px 24px; position: relative; width: min-content; }`,
                `.framer-1mVVh .framer-ymog0s { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: 44px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
                `.framer-1mVVh .framer-1pfx6by { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }`,
                `.framer-1mVVh .framer-12iytkk { -webkit-user-select: none; flex: none; height: auto; left: 50%; position: absolute; top: 50%; user-select: none; white-space: pre; width: auto; z-index: 1; }`,
                `.framer-1mVVh .framer-11u79jl { -webkit-user-select: none; bottom: -12px; flex: none; height: auto; left: 49%; position: absolute; user-select: none; white-space: pre; width: auto; z-index: 1; }`,
                `.framer-1mVVh .framer-160h2wz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 24px; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 24px; }`,
                `.framer-1mVVh .framer-adgjbd-container { flex: none; height: 24px; position: relative; width: 24px; }`,
                `.framer-1mVVh .framer-i2u0ci-container { flex: none; height: 24px; left: calc(50.00000000000002% - 24px / 2); position: absolute; top: calc(50.00000000000002% - 24px / 2); width: 24px; z-index: 1; }`,
                `.framer-1mVVh .framer-rzzeak-container { bottom: -12px; flex: none; height: 24px; left: calc(50.00000000000002% - 24px / 2); position: absolute; width: 24px; z-index: 1; }`,
                `.framer-1mVVh.framer-v-1b71lu2 .framer-160h2wz, .framer-1mVVh.framer-v-1b71lu2 .framer-adgjbd-container { height: 20px; width: 20px; }`,
                `.framer-1mVVh.framer-v-1b71lu2 .framer-i2u0ci-container { height: 20px; left: calc(50.00000000000002% - 20px / 2); top: calc(50.00000000000002% - 20px / 2); width: 20px; }`,
                `.framer-1mVVh.framer-v-1b71lu2 .framer-rzzeak-container { height: 20px; left: calc(50.00000000000002% - 20px / 2); width: 20px; }`,
                `.framer-1mVVh.framer-v-1k8al26 .framer-160h2wz, .framer-1mVVh.framer-v-1k8al26 .framer-adgjbd-container { height: 16px; width: 16px; }`,
                `.framer-1mVVh.framer-v-1k8al26 .framer-i2u0ci-container { height: 16px; left: calc(50.00000000000002% - 16px / 2); top: calc(50.00000000000002% - 16px / 2); width: 16px; }`,
                `.framer-1mVVh.framer-v-1k8al26 .framer-rzzeak-container { height: 16px; left: calc(50.00000000000002% - 16px / 2); width: 16px; }`,
                `.framer-1mVVh.framer-v-9vwnw6.hover .framer-12iytkk, .framer-1mVVh.framer-v-9vwnw6.pressed .framer-12iytkk { left: 50%; top: -12px; }`,
                `.framer-1mVVh.framer-v-9vwnw6.hover .framer-11u79jl, .framer-1mVVh.framer-v-9vwnw6.pressed .framer-11u79jl { bottom: unset; left: 50%; top: 50%; }`,
                `.framer-1mVVh.framer-v-9vwnw6.hover .framer-i2u0ci-container, .framer-1mVVh.framer-v-9vwnw6.pressed .framer-i2u0ci-container { top: -12px; }`,
                `.framer-1mVVh.framer-v-9vwnw6.hover .framer-rzzeak-container, .framer-1mVVh.framer-v-9vwnw6.pressed .framer-rzzeak-container { bottom: unset; top: calc(50.00000000000002% - 24px / 2); }`,
                `.framer-1mVVh.framer-v-1b71lu2.hover .framer-12iytkk, .framer-1mVVh.framer-v-1k8al26.hover .framer-12iytkk, .framer-1mVVh.framer-v-1k8al26.pressed .framer-12iytkk, .framer-1mVVh.framer-v-1b71lu2.pressed .framer-12iytkk { left: 49%; top: -12px; }`,
                `.framer-1mVVh.framer-v-1b71lu2.hover .framer-11u79jl, .framer-1mVVh.framer-v-1b71lu2.pressed .framer-11u79jl { bottom: unset; top: 50%; }`,
                `.framer-1mVVh.framer-v-1b71lu2.hover .framer-i2u0ci-container, .framer-1mVVh.framer-v-1b71lu2.pressed .framer-i2u0ci-container { top: calc(2.220446049250313e-14% - 20px / 2); }`,
                `.framer-1mVVh.framer-v-1b71lu2.hover .framer-rzzeak-container, .framer-1mVVh.framer-v-1b71lu2.pressed .framer-rzzeak-container { bottom: unset; top: calc(50.00000000000002% - 20px / 2); }`,
                `.framer-1mVVh.framer-v-1k8al26.hover .framer-11u79jl, .framer-1mVVh.framer-v-1k8al26.pressed .framer-11u79jl { bottom: unset; left: -1px; top: 50%; }`,
                `.framer-1mVVh.framer-v-1k8al26.hover .framer-i2u0ci-container, .framer-1mVVh.framer-v-1k8al26.pressed .framer-i2u0ci-container { top: calc(2.220446049250313e-14% - 16px / 2); }`,
                `.framer-1mVVh.framer-v-1k8al26.hover .framer-rzzeak-container, .framer-1mVVh.framer-v-1k8al26.pressed .framer-rzzeak-container { bottom: unset; top: calc(50.00000000000002% - 16px / 2); }`,
                ...rt,
                `.framer-1mVVh[data-border="true"]::after, .framer-1mVVh [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
            ]),
            (Xt = K(Jt, Yt, `framer-1mVVh`)),
            (Xt.displayName = `Primary Button`),
            (Xt.defaultProps = { height: 92, width: 253.5 }),
            N(Xt, {
                variant: { options: [`s2QYckn8i`, `r5YKLsCP0`, `h1mEo53NR`], optionTitles: [`Desktop`, `Tablet`, `Mobile`], title: `Variant`, type: T.Enum },
                VLNSZqzsR: {
                    defaultValue: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M19.2401 7.90625L27.3334 15.9996L19.2401 24.0929" stroke="#F5F5F5" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/> <path d="M4.66663 16H27.1066" stroke="#F5F5F5" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/> </svg>`,
                    displayTextArea: !1,
                    placeholder: ``,
                    title: `SVG Code`,
                    type: T.String,
                },
                nzqTq0Y6K: { defaultValue: `rgb(255, 255, 255)`, title: `Icon color`, type: T.Color },
                meCbsYmGR: { defaultValue: 0, displayStepper: !0, min: 0, step: 1, title: `icon padding`, type: T.Number },
                jtitP8ffZ: { defaultValue: 2, displayStepper: !0, min: 0, step: 0.1, title: `icon stroke`, type: T.Number },
                ZN3dhuSgc: { defaultValue: `Button`, displayTextArea: !1, title: `Title Text`, type: T.String },
                vmOPFsvOW: { defaultValue: `rgb(255, 255, 255)`, title: `Text Color 2`, type: T.Color },
                YXyYmCES5: At?.cKeueTKkp && { ...At.cKeueTKkp, defaultValue: `miter`, description: void 0, hidden: void 0, title: `Icon Line Join` },
                IvTGu1hfX: { defaultValue: ``, placeholder: `Icon name...`, title: `Icon Title`, type: T.String },
                ndUu0pbiv: { defaultValue: ``, placeholder: `Icon purpose...`, title: `Icon Description`, type: T.String },
                U6yLJvTDC: At?.Evkc3Kal1 && { ...At.Evkc3Kal1, defaultValue: `butt`, description: void 0, hidden: void 0, title: `Icon Line Cap` },
                aKLLB10i3: { defaultValue: `24px 48px 24px 48px`, title: `Button Padding`, type: T.Padding },
                cO_mGVWDB: { defaultValue: `rgb(0, 0, 0)`, title: `Button color`, type: T.Color },
                YAlo1ESSl: { defaultValue: `100px`, description: ``, title: `Button Radius`, type: T.BorderRadius },
                oNZz4rwkc: { title: `Link`, type: T.Link },
                HmuqdYPcL: { defaultValue: !1, title: `Link New Tab`, type: T.Boolean },
                NLEM4LU4C: { defaultValue: !1, title: `Link Smooth Scroll`, type: T.Boolean },
                sRrAucc9a: { defaultValue: { borderColor: `black`, borderStyle: `solid`, borderWidth: 0 }, title: `Button Border`, type: T.Border },
                k23akfVrc: { defaultValue: 0, displayStepper: !1, title: `Background Blur`, type: T.Number },
                zuVEBVelt: { title: `Cursor`, type: T.CustomCursor },
                qBiTWd5sf: { defaultValue: !0, title: `Icon visibility`, type: T.Boolean },
            }),
            M(
                Xt,
                [
                    {
                        explicitInter: !0,
                        fonts: [
                            {
                                family: `Inter`,
                                source: `framer`,
                                style: `normal`,
                                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                                weight: `400`,
                            },
                            {
                                family: `Inter`,
                                source: `framer`,
                                style: `normal`,
                                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                                weight: `400`,
                            },
                            { family: `Inter`, source: `framer`, style: `normal`, unicodeRange: `U+1F00-1FFF`, url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`, weight: `400` },
                            { family: `Inter`, source: `framer`, style: `normal`, unicodeRange: `U+0370-03FF`, url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`, weight: `400` },
                            {
                                family: `Inter`,
                                source: `framer`,
                                style: `normal`,
                                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                                weight: `400`,
                            },
                            {
                                family: `Inter`,
                                source: `framer`,
                                style: `normal`,
                                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                                url: `https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2`,
                                weight: `400`,
                            },
                            {
                                family: `Inter`,
                                source: `framer`,
                                style: `normal`,
                                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                                weight: `400`,
                            },
                        ],
                    },
                    ...kt,
                    ...L(nt),
                ],
                { supportsExplicitInterCodegen: !0 }
            );
    }),
    Qt = e(() => {
        ae(), le(), ue(), de(), fe(), pe(), me(), _e(), ve(), ye(), be(), Ce(), we(), ke();
    });
function $t({ type: e, url: t, html: n, zoom: r, radius: i, border: a, style: o = {} }) {
    return e === `url` && t ? c(tn, { url: t, zoom: r, radius: i, border: a, style: o }) : e === `html` && n ? c(rn, { html: n, style: o }) : c(en, { style: o });
}
function en({ style: e }) {
    return c(`div`, { style: { minHeight: dn(e), ...J, overflow: `hidden`, ...e }, children: c(`div`, { style: mn, children: `To embed a website or widget, add it to the properties\xA0panel.` }) });
}
function tn({ url: e, zoom: t, radius: n, border: r, style: i }) {
    let a = !i.height;
    /[a-z]+:\/\//.test(e) || (e = `https://` + e);
    let o = Se(),
        [s, l] = _(o ? void 0 : !1);
    if (
        (m(() => {
            if (!o) return;
            let t = !0;
            l(void 0);
            async function n() {
                let n = await fetch(`https://api.framer.com/functions/check-iframe-url?url=` + encodeURIComponent(e));
                if (n.status == 200) {
                    let { isBlocked: e } = await n.json();
                    t && l(e);
                } else {
                    let e = await n.text();
                    console.error(e);
                    let t = Error(`This site canâ€™t be reached.`);
                    l(t);
                }
            }
            return (
                n().catch((e) => {
                    console.error(e), l(e);
                }),
                () => {
                    t = !1;
                }
            );
        }, [e]),
        o && a)
    )
        return c(un, { message: `URL embeds do not support auto height.`, style: i });
    if (!e.startsWith(`https://`)) return c(un, { message: `Unsupported protocol.`, style: i });
    if (s === void 0) return c(ln, {});
    if (s instanceof Error) return c(un, { message: s.message, style: i });
    if (s === !0) {
        let t = `Canâ€™t embed ${e} due to its content security policy.`;
        return c(un, { message: t, style: i });
    }
    return c(`iframe`, { src: e, style: { ...fn, ...i, ...r, zoom: t, borderRadius: n, transformOrigin: `top center` }, loading: `lazy`, fetchPriority: o ? `low` : `auto`, referrerPolicy: `no-referrer`, sandbox: nn(o) });
}
function nn(e) {
    let t = [`allow-same-origin`, `allow-scripts`];
    return (
        e ||
            t.push(
                `allow-downloads`,
                `allow-forms`,
                `allow-modals`,
                `allow-orientation-lock`,
                `allow-pointer-lock`,
                `allow-popups`,
                `allow-popups-to-escape-sandbox`,
                `allow-presentation`,
                `allow-storage-access-by-user-activation`,
                `allow-top-navigation-by-user-activation`
            ),
        t.join(` `)
    );
}
function rn({ html: e, ...t }) {
    let n = e.includes(`<\/script>`);
    if (n) {
        let n = e.includes(`</spline-viewer>`),
            r = e.includes(`<!-- framer-direct-embed -->`);
        return c(n || r ? on : an, { html: e, ...t });
    }
    return c(sn, { html: e, ...t });
}
function an({ html: e, style: t }) {
    let n = l(),
        [r, i] = _(0);
    m(() => {
        let e = n.current?.contentWindow;
        function t(t) {
            if (t.source !== e) return;
            let n = t.data;
            if (typeof n != `object` || !n) return;
            let r = n.embedHeight;
            typeof r == `number` && i(r);
        }
        return (
            h.addEventListener(`message`, t),
            e?.postMessage(`getEmbedHeight`, `*`),
            () => {
                h.removeEventListener(`message`, t);
            }
        );
    }, []);
    let a = `
<html>
    <head>
        <style>
            html, body {
                margin: 0;
                padding: 0;
            }

            body {
                display: flex;
                justify-content: center;
                align-items: center;
            }

            :root {
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
            }

            * {
                box-sizing: border-box;
                -webkit-font-smoothing: inherit;
            }

            h1, h2, h3, h4, h5, h6, p, figure {
                margin: 0;
            }

            body, input, textarea, select, button {
                font-size: 12px;
                font-family: sans-serif;
            }
        </style>
    </head>
    <body>
        ${e}
        <script type="module">
            let height = 0

            function sendEmbedHeight() {
                window.parent.postMessage({
                    embedHeight: height
                }, "*")
            }

            const observer = new ResizeObserver((entries) => {
                if (entries.length !== 1) return
                const entry = entries[0]
                if (entry.target !== document.body) return

                height = entry.contentRect.height
                sendEmbedHeight()
            })

            observer.observe(document.body)

            window.addEventListener("message", (event) => {
                if (event.source !== window.parent) return
                if (event.data !== "getEmbedHeight") return
                sendEmbedHeight()
            })
        <\/script>
    <body>
</html>
`,
        o = { ...fn, ...t },
        s = !t.height;
    return s && (o.height = r + `px`), c(`iframe`, { ref: n, style: o, srcDoc: a });
}
function on({ html: e, style: t }) {
    let n = l();
    return (
        m(() => {
            let t = n.current;
            if (t)
                return (
                    (t.innerHTML = e),
                    cn(t),
                    () => {
                        t.innerHTML = ``;
                    }
                );
        }, [e]),
        c(`div`, { ref: n, style: { ...pn, ...t } })
    );
}
function sn({ html: e, style: t }) {
    return c(`div`, { style: { ...pn, ...t }, dangerouslySetInnerHTML: { __html: e } });
}
function cn(e) {
    if (e instanceof Element && e.tagName === `SCRIPT`) {
        let t = document.createElement(`script`);
        t.text = e.innerHTML;
        for (let { name: n, value: r } of e.attributes) t.setAttribute(n, r);
        e.parentElement.replaceChild(t, e);
    } else for (let t of e.childNodes) cn(t);
}
function ln() {
    return c(`div`, { className: `framerInternalUI-componentPlaceholder`, style: { ...ne, overflow: `hidden` }, children: c(`div`, { style: mn, children: `Loadingâ€¦` }) });
}
function un({ message: e, style: t }) {
    return c(`div`, { className: `framerInternalUI-errorPlaceholder`, style: { minHeight: dn(t), ...ne, overflow: `hidden`, ...t }, children: c(`div`, { style: mn, children: e }) });
}
function dn(e) {
    let t = !e.height;
    if (t) return 200;
}
var fn,
    pn,
    mn,
    hn = e(() => {
        o(),
            i(),
            a(),
            B(),
            Qt(),
            N($t, {
                type: { type: T.Enum, defaultValue: `url`, displaySegmentedControl: !0, options: [`url`, `html`], optionTitles: [`URL`, `HTML`] },
                url: {
                    title: `URL`,
                    type: T.String,
                    description: `Some websites donâ€™t support embedding.`,
                    hidden(e) {
                        return e.type !== `url`;
                    },
                },
                html: {
                    title: `HTML`,
                    type: T.String,
                    displayTextArea: !0,
                    hidden(e) {
                        return e.type !== `html`;
                    },
                },
                border: {
                    title: `Border`,
                    type: T.Border,
                    optional: !0,
                    hidden(e) {
                        return e.type !== `url`;
                    },
                },
                radius: {
                    type: T.BorderRadius,
                    title: `Radius`,
                    hidden(e) {
                        return e.type !== `url`;
                    },
                },
                zoom: {
                    title: `Zoom`,
                    defaultValue: 1,
                    type: T.Number,
                    hidden(e) {
                        return e.type !== `url`;
                    },
                    min: 0.1,
                    max: 1,
                    step: 0.1,
                    displayStepper: !0,
                },
            }),
            (fn = { width: `100%`, height: `100%`, border: `none` }),
            (pn = { width: `100%`, height: `100%`, display: `flex`, flexDirection: `column`, justifyContent: `center`, alignItems: `center` }),
            (mn = { textAlign: `center`, minWidth: 140 });
    });
function gn(e, ...t) {
    let n = {};
    return t?.forEach((t) => t && Object.assign(n, e[t])), n;
}
var _n,
    vn,
    yn,
    bn,
    xn,
    Sn,
    Cn,
    wn,
    Tn,
    En,
    Dn,
    On,
    kn,
    An = e(() => {
        i(),
            B(),
            b(),
            a(),
            hn(),
            (_n = I($t)),
            (vn = [`AzE0PyzkV`, `GSm5UB7pj`, `XcvYwtEca`]),
            (yn = `framer-PkvTV`),
            (bn = { AzE0PyzkV: `framer-v-km65us`, GSm5UB7pj: `framer-v-1uytxak`, XcvYwtEca: `framer-v-1cfrg3t` }),
            (xn = { bounce: 0.1, delay: 0, duration: 0.6, type: `spring` }),
            (Sn = ({ value: e, children: t }) => {
                let n = u(y),
                    r = e ?? n.transition,
                    i = d(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
                return c(y.Provider, { value: i, children: t });
            }),
            (Cn = S.create(g)),
            (wn = { Black: `XcvYwtEca`, Teal: `AzE0PyzkV`, White: `GSm5UB7pj` }),
            (Tn = ({ height: e, id: t, width: n, ...r }) => ({ ...r, variant: wn[r.variant] ?? r.variant ?? `AzE0PyzkV` })),
            (En = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
            (Dn = n(function (e, t) {
                let n = l(null),
                    i = t ?? n,
                    a = r(),
                    { activeLocale: o, setLocale: s } = U();
                V();
                let { style: u, className: d, layoutId: f, variant: p, ...m } = Tn(e),
                    { baseVariant: h, classNames: g, clearLoadingGesture: _, gestureHandlers: y, gestureVariant: b, isLoading: x, setGestureState: C, setVariant: T, variants: E } = G({
                        cycleOrder: vn,
                        defaultVariant: `AzE0PyzkV`,
                        ref: i,
                        variant: p,
                        variantClassNames: bn,
                    }),
                    O = En(e, E),
                    k = [],
                    A = P(yn, ...k);
                return c(v, {
                    id: f ?? a,
                    children: c(Cn, {
                        animate: E,
                        initial: !1,
                        children: c(Sn, {
                            value: xn,
                            children: c(S.div, {
                                ...m,
                                ...y,
                                className: P(A, `framer-km65us`, d, g),
                                "data-framer-name": `Teal`,
                                layoutDependency: O,
                                layoutId: `AzE0PyzkV`,
                                ref: i,
                                style: { ...u },
                                ...gn({ GSm5UB7pj: { "data-framer-name": `White` }, XcvYwtEca: { "data-framer-name": `Black` } }, h, b),
                                children: c(D, {
                                    clickTrackingId: ``,
                                    href: `  " target="_blank">`,
                                    motionChild: !0,
                                    nodeId: `RmU7Z90of`,
                                    style: { display: "none" },
                                    openInNewTab: !0,
                                    preserveParams: !0,
                                    scopeId: `fP5XgwLy4`,
                                    children: c(S.a, {
                                        className: `framer-1cczq8i framer-193927p`,
                                        layoutDependency: O,
                                        layoutId: `RmU7Z90of`,
                                        children: c(w, {
                                            children: c(j, {
                                                className: `framer-m1iacr-container`,
                                                isAuthoredByUser: !0,
                                                isModuleExternal: !0,
                                                style: { display: "none" },
                                                style: { display: "none" },
                                                layoutDependency: O,
                                                layoutId: `YaqNe0wHf-container`,
                                                nodeId: `YaqNe0wHf`,
                                                rendersWithMotion: !0,
                                                scopeId: `fP5XgwLy4`,
                                                style: { scale: 0.8 },
                                                children: c($t, {
                                                    height: `100%`,
                                                    style: { display: "none" },
                                                     id: `YaqNe0wHf`,
                                                    layoutId: `YaqNe0wHf`,
                                                    radius: `0px`,
                                                    style: { height: `100%`, width: `100%` },
                                                    type: `html`,
                                                    url: ``,
                                                    width: `100%`,
                                                    zoom: 1,
                                                    ...gn(
                                                        {
                                                            GSm5UB7pj: {
                                                                html: `<div id="awwwards" style="position: fixed; z-index: 999; transform: translateY(-50%); top: 50%;  right: 0"><svg width="53.08" height="171.358"><path class="js-color-bg" fill="white" d="M0 0h53.08v171.358H0z"></path><g class="js-color-text" fill="black"><path d="M20.047 153.665v-1.9h3.888v-4.093h-3.888v-1.9h10.231v1.9h-4.59v4.093h4.59v1.9zM29.898 142.236c-.331.565-.784.997-1.359 1.294s-1.222.446-1.944.446c-.721 0-1.369-.149-1.943-.446a3.316 3.316 0 0 1-1.36-1.294c-.331-.564-.497-1.232-.497-2.002s.166-1.438.497-2.002a3.316 3.316 0 0 1 1.36-1.294c.574-.297 1.223-.445 1.943-.445.723 0 1.369.148 1.944.445a3.307 3.307 0 0 1 1.359 1.294c.331.564.497 1.232.497 2.002s-.166 1.438-.497 2.002m-1.703-3.347c-.435-.33-.967-.496-1.601-.496-.633 0-1.166.166-1.601.496-.433.332-.649.78-.649 1.346 0 .564.217 1.013.649 1.345.435.331.968.497 1.601.497.634 0 1.166-.166 1.601-.497.435-.332.649-.78.649-1.345.001-.566-.214-1.014-.649-1.346M22.911 134.852v-1.813h1.186a3.335 3.335 0 0 1-.951-1.009 2.423 2.423 0 0 1-.352-1.271c0-.682.19-1.229.57-1.645.381-.413.932-.621 1.652-.621h5.262v1.812h-4.721c-.419 0-.727.096-.921.285-.195.19-.292.447-.292.769 0 .302.115.58.35.833.234.254.577.458 1.03.613.454.156.993.234 1.616.234h2.938v1.813h-7.367zM29.898 125.136a3.314 3.314 0 0 1-1.359 1.294c-.575.297-1.222.445-1.944.445-.721 0-1.369-.148-1.943-.445a3.322 3.322 0 0 1-1.36-1.294c-.331-.565-.497-1.232-.497-2.002 0-.771.166-1.438.497-2.003a3.313 3.313 0 0 1 1.36-1.293c.574-.297 1.223-.446 1.943-.446.723 0 1.369.149 1.944.446s1.028.728 1.359 1.293.497 1.232.497 2.003c.001.769-.166 1.436-.497 2.002m-1.703-3.347c-.435-.331-.967-.497-1.601-.497-.633 0-1.166.166-1.601.497-.433.331-.649.778-.649 1.345 0 .564.217 1.013.649 1.344.435.332.968.498 1.601.498.634 0 1.166-.166 1.601-.498.435-.331.649-.779.649-1.344.001-.567-.214-1.014-.649-1.345M22.911 117.75v-1.812h1.199c-.419-.265-.742-.586-.972-.966s-.345-.784-.345-1.213c0-.272.05-.569.146-.892l1.682.336a1.429 1.429 0 0 0-.205.76c0 .576.261 1.048.783 1.418.521.37 1.342.557 2.461.557h2.617v1.812h-7.366zM29.812 111.252c-.391.511-.857.851-1.403 1.016l-.776-1.446c.381-.138.68-.329.893-.577.215-.249.321-.544.321-.885a1.2 1.2 0 0 0-.168-.658c-.112-.175-.294-.263-.548-.263-.225 0-.406.105-.548.313-.142.21-.291.534-.446.973-.019.068-.058.17-.117.307-.224.565-.506 1.004-.848 1.315-.34.313-.779.467-1.314.467-.381 0-.727-.102-1.039-.306a2.185 2.185 0 0 1-.744-.84 2.554 2.554 0 0 1-.279-1.207c0-.497.105-.949.314-1.359.211-.408.506-.725.886-.949l.993 1.082c-.43.292-.644.686-.644 1.184a.84.84 0 0 0 .154.504.471.471 0 0 0 .401.212c.176 0 .338-.103.49-.307.15-.205.334-.604.547-1.199.205-.564.474-1.001.805-1.308.332-.308.756-.46 1.271-.46.721 0 1.299.229 1.732.687s.65 1.057.65 1.797c.001.759-.194 1.396-.583 1.907M35.481 17.006l-4.782 14.969h-3.266l-2.584-9.682-2.584 9.682h-3.268l-4.782-14.969h3.713l2.673 10.276 2.525-10.276h3.445l2.524 10.276 2.674-10.276zM37.978 27.163c1.426 0 2.496 1.068 2.496 2.495 0 1.425-1.07 2.495-2.496 2.495-1.425 0-2.494-1.07-2.494-2.495-.001-1.427 1.069-2.495 2.494-2.495"></path></g></svg></div>`,
                                                            },
                                                            XcvYwtEca: {
                                                                html: `<div id="awwwards" style="position: fixed; z-index: 999; transform: translateY(-50%); top: 50%;  right: 0"><svg width="53.08" height="171.358"><path class="js-color-bg" fill="black" d="M0 0h53.08v171.358H0z"></path><g class="js-color-text" fill="white"><path d="M20.047 153.665v-1.9h3.888v-4.093h-3.888v-1.9h10.231v1.9h-4.59v4.093h4.59v1.9zM29.898 142.236c-.331.565-.784.997-1.359 1.294s-1.222.446-1.944.446c-.721 0-1.369-.149-1.943-.446a3.316 3.316 0 0 1-1.36-1.294c-.331-.564-.497-1.232-.497-2.002s.166-1.438.497-2.002a3.316 3.316 0 0 1 1.36-1.294c.574-.297 1.223-.445 1.943-.445.723 0 1.369.148 1.944.445a3.307 3.307 0 0 1 1.359 1.294c.331.564.497 1.232.497 2.002s-.166 1.438-.497 2.002m-1.703-3.347c-.435-.33-.967-.496-1.601-.496-.633 0-1.166.166-1.601.496-.433.332-.649.78-.649 1.346 0 .564.217 1.013.649 1.345.435.331.968.497 1.601.497.634 0 1.166-.166 1.601-.497.435-.332.649-.78.649-1.345.001-.566-.214-1.014-.649-1.346M22.911 134.852v-1.813h1.186a3.335 3.335 0 0 1-.951-1.009 2.423 2.423 0 0 1-.352-1.271c0-.682.19-1.229.57-1.645.381-.413.932-.621 1.652-.621h5.262v1.812h-4.721c-.419 0-.727.096-.921.285-.195.19-.292.447-.292.769 0 .302.115.58.35.833.234.254.577.458 1.03.613.454.156.993.234 1.616.234h2.938v1.813h-7.367zM29.898 125.136a3.314 3.314 0 0 1-1.359 1.294c-.575.297-1.222.445-1.944.445-.721 0-1.369-.148-1.943-.445a3.322 3.322 0 0 1-1.36-1.294c-.331-.565-.497-1.232-.497-2.002 0-.771.166-1.438.497-2.003a3.313 3.313 0 0 1 1.36-1.293c.574-.297 1.223-.446 1.943-.446.723 0 1.369.149 1.944.446s1.028.728 1.359 1.293.497 1.232.497 2.003c.001.769-.166 1.436-.497 2.002m-1.703-3.347c-.435-.331-.967-.497-1.601-.497-.633 0-1.166.166-1.601.497-.433.331-.649.778-.649 1.345 0 .564.217 1.013.649 1.344.435.332.968.498 1.601.498.634 0 1.166-.166 1.601-.498.435-.331.649-.779.649-1.344.001-.567-.214-1.014-.649-1.345M22.911 117.75v-1.812h1.199c-.419-.265-.742-.586-.972-.966s-.345-.784-.345-1.213c0-.272.05-.569.146-.892l1.682.336a1.429 1.429 0 0 0-.205.76c0 .576.261 1.048.783 1.418.521.37 1.342.557 2.461.557h2.617v1.812h-7.366zM29.812 111.252c-.391.511-.857.851-1.403 1.016l-.776-1.446c.381-.138.68-.329.893-.577.215-.249.321-.544.321-.885a1.2 1.2 0 0 0-.168-.658c-.112-.175-.294-.263-.548-.263-.225 0-.406.105-.548.313-.142.21-.291.534-.446.973-.019.068-.058.17-.117.307-.224.565-.506 1.004-.848 1.315-.34.313-.779.467-1.314.467-.381 0-.727-.102-1.039-.306a2.185 2.185 0 0 1-.744-.84 2.554 2.554 0 0 1-.279-1.207c0-.497.105-.949.314-1.359.211-.408.506-.725.886-.949l.993 1.082c-.43.292-.644.686-.644 1.184a.84.84 0 0 0 .154.504.471.471 0 0 0 .401.212c.176 0 .338-.103.49-.307.15-.205.334-.604.547-1.199.205-.564.474-1.001.805-1.308.332-.308.756-.46 1.271-.46.721 0 1.299.229 1.732.687s.65 1.057.65 1.797c.001.759-.194 1.396-.583 1.907M35.481 17.006l-4.782 14.969h-3.266l-2.584-9.682-2.584 9.682h-3.268l-4.782-14.969h3.713l2.673 10.276 2.525-10.276h3.445l2.524 10.276 2.674-10.276zM37.978 27.163c1.426 0 2.496 1.068 2.496 2.495 0 1.425-1.07 2.495-2.496 2.495-1.425 0-2.494-1.07-2.494-2.495-.001-1.427 1.069-2.495 2.494-2.495"></path></g></svg></div>`,
                                                            },
                                                        },
                                                        h,
                                                        b
                                                    ),
                                                }),
                                            }),
                                        }),
                                    }),
                                }),
                            }),
                        }),
                    }),
                });
            })),
            (On = [
                `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
                `.framer-PkvTV.framer-193927p, .framer-PkvTV .framer-193927p { display: block; }`,
                `.framer-PkvTV.framer-km65us { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 156px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 40px; }`,
                `.framer-PkvTV .framer-1cczq8i { flex: none; height: 138px; left: -2px; overflow: visible; position: absolute; text-decoration: none; top: calc(50.00000000000002% - 138px / 2); width: 38px; }`,
                `.framer-PkvTV .framer-m1iacr-container { bottom: -17px; flex: none; left: -4px; position: absolute; right: -4px; top: -17px; z-index: 1; }`,
            ]),
            (kn = K(Dn, On, `framer-PkvTV`)),
            (kn.displayName = `Awwwards Ribbon`),
            (kn.defaultProps = { height: 156, width: 40 }),
            N(kn, { variant: { options: [`AzE0PyzkV`, `GSm5UB7pj`, `XcvYwtEca`], optionTitles: [`Teal`, `White`, `Black`], title: `Variant`, type: T.Enum } }),
            M(kn, [{ explicitInter: !0, fonts: [] }, ..._n], { supportsExplicitInterCodegen: !0 });
    }),
    jn,
    Mn,
    Nn,
    Pn = e(() => {
        B(),
            F.loadFonts([`CUSTOM;Delight Regular`, `CUSTOM;Delight Bold`]),
            (jn = [
                {
                    explicitInter: !0,
                    fonts: [
                        { family: `Delight Regular`, source: `custom`, url: `https://framerusercontent.com/assets/pR4AjJlW0OWZiykVbHWQPugHiVk.woff2` },
                        { family: `Delight Bold`, source: `custom`, url: `https://framerusercontent.com/assets/9O6XpwFtIabQD3l43bWmfwFrY3Y.woff2` },
                    ],
                },
            ]),
            (Mn = [
                `.framer-uobpe .framer-styles-preset-1conq5k:not(.rich-text-wrapper), .framer-uobpe .framer-styles-preset-1conq5k.rich-text-wrapper p { --framer-font-family: "Delight Regular", "Delight Regular Placeholder", sans-serif; --framer-font-family-bold: "Delight Bold", "Delight Bold Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 400; --framer-letter-spacing: 0.02em; --framer-line-height: 130%; --framer-paragraph-spacing: 10px; --framer-text-alignment: start; --framer-text-color: #131313; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
                `@media (max-width: 1727px) and (min-width: 1200px) { .framer-uobpe .framer-styles-preset-1conq5k:not(.rich-text-wrapper), .framer-uobpe .framer-styles-preset-1conq5k.rich-text-wrapper p { --framer-font-family: "Delight Regular", "Delight Regular Placeholder", sans-serif; --framer-font-family-bold: "Delight Bold", "Delight Bold Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 17px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 400; --framer-letter-spacing: 0.02em; --framer-line-height: 130%; --framer-paragraph-spacing: 10px; --framer-text-alignment: start; --framer-text-color: #131313; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
                `@media (max-width: 1199px) and (min-width: 1025px) { .framer-uobpe .framer-styles-preset-1conq5k:not(.rich-text-wrapper), .framer-uobpe .framer-styles-preset-1conq5k.rich-text-wrapper p { --framer-font-family: "Delight Regular", "Delight Regular Placeholder", sans-serif; --framer-font-family-bold: "Delight Bold", "Delight Bold Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 400; --framer-letter-spacing: 0.02em; --framer-line-height: 130%; --framer-paragraph-spacing: 10px; --framer-text-alignment: start; --framer-text-color: #131313; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
                `@media (max-width: 1024px) and (min-width: 768px) { .framer-uobpe .framer-styles-preset-1conq5k:not(.rich-text-wrapper), .framer-uobpe .framer-styles-preset-1conq5k.rich-text-wrapper p { --framer-font-family: "Delight Regular", "Delight Regular Placeholder", sans-serif; --framer-font-family-bold: "Delight Bold", "Delight Bold Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 15px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 400; --framer-letter-spacing: 0.02em; --framer-line-height: 130%; --framer-paragraph-spacing: 10px; --framer-text-alignment: start; --framer-text-color: #131313; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
                `@media (max-width: 767px) and (min-width: 0px) { .framer-uobpe .framer-styles-preset-1conq5k:not(.rich-text-wrapper), .framer-uobpe .framer-styles-preset-1conq5k.rich-text-wrapper p { --framer-font-family: "Delight Regular", "Delight Regular Placeholder", sans-serif; --framer-font-family-bold: "Delight Bold", "Delight Bold Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 400; --framer-letter-spacing: 0.02em; --framer-line-height: 130%; --framer-paragraph-spacing: 10px; --framer-text-alignment: start; --framer-text-color: #131313; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
            ]),
            (Nn = `framer-uobpe`);
    }),
    Fn,
    In,
    Ln,
    Rn = e(() => {
        B(),
            F.loadFonts([`CUSTOM;Delight Regular`, `CUSTOM;Delight Bold`]),
            (Fn = [
                {
                    explicitInter: !0,
                    fonts: [
                        { family: `Delight Regular`, source: `custom`, url: `https://framerusercontent.com/assets/pR4AjJlW0OWZiykVbHWQPugHiVk.woff2` },
                        { family: `Delight Bold`, source: `custom`, url: `https://framerusercontent.com/assets/9O6XpwFtIabQD3l43bWmfwFrY3Y.woff2` },
                    ],
                },
            ]),
            (In = [
                `.framer-ZysYn .framer-styles-preset-cl58b8:not(.rich-text-wrapper), .framer-ZysYn .framer-styles-preset-cl58b8.rich-text-wrapper h5 { --framer-font-family: "Delight Regular", "Delight Regular Placeholder", sans-serif; --framer-font-family-bold: "Delight Bold", "Delight Bold Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 24px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 400; --framer-letter-spacing: 0.02em; --framer-line-height: 140%; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: #131313; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; }`,
                `@media (max-width: 1199px) and (min-width: 810px) { .framer-ZysYn .framer-styles-preset-cl58b8:not(.rich-text-wrapper), .framer-ZysYn .framer-styles-preset-cl58b8.rich-text-wrapper h5 { --framer-font-family: "Delight Regular", "Delight Regular Placeholder", sans-serif; --framer-font-family-bold: "Delight Bold", "Delight Bold Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 400; --framer-letter-spacing: 0.02em; --framer-line-height: 140%; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: #131313; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; } }`,
                `@media (max-width: 809px) and (min-width: 0px) { .framer-ZysYn .framer-styles-preset-cl58b8:not(.rich-text-wrapper), .framer-ZysYn .framer-styles-preset-cl58b8.rich-text-wrapper h5 { --framer-font-family: "Delight Regular", "Delight Regular Placeholder", sans-serif; --framer-font-family-bold: "Delight Bold", "Delight Bold Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 400; --framer-letter-spacing: 0.02em; --framer-line-height: 140%; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: #131313; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; } }`,
            ]),
            (Ln = `framer-ZysYn`);
    });
function zn({ layers: e = [], text: t, slot: n, font: r, color: i, layerGap: a, transform: o, layerAlign: s, decoration: l, balance: u, userSelect: d, tag: f, style: p }) {
    let m = f,
        h = t.split(n),
        g = [];
    for (let t = 0; t < h.length; t++) g.push(h[t]), t < h.length - 1 && (t < e.length ? g.push(c(Bn, { align: s, gap: a, children: e[t] }, `layer-${t}`)) : g.push(n));
    if (e.length > h.length - 1) for (let t = h.length - 1; t < e.length; t++) g.push(c(Bn, { align: s, gap: a, children: e[t] }, `layer-${t}`));
    return c(m, {
        style: {
            color: i,
            margin: 0,
            whiteSpace: p?.width ? `pre` : `nowrap`,
            fontWeight: 400,
            textAlign: `center`,
            userSelect: d ? `auto` : `none`,
            textDecoration: l,
            textWrap: u ? `balance` : void 0,
            textTransform: o,
            ...(i.mode == `solid` ? { color: i.color } : { WebkitBackgroundClip: `text`, WebkitTextFillColor: `transparent`, backgroundImage: `linear-gradient(${i.angle}deg, ${i.endColor}, ${i.startColor})` }),
            ...r,
            ...p,
        },
        children: g,
    });
}
function Bn({ children: e, align: t = `middle`, gap: n = 0 }) {
    return c(`span`, { style: { display: `inline-block`, verticalAlign: t, marginLeft: n, marginRight: n }, children: e });
}
var Vn = e(() => {
    i(),
        B(),
        (zn.displayName = `Text Wrap`),
        N(zn, {
            text: { type: T.String, defaultValue: `Learn [] Framer With [] Framer University`, displayTextArea: !0 },
            layers: { type: T.Array, control: { type: T.ComponentInstance } },
            slot: { type: T.String, defaultValue: `[]` },
            font: { type: `font`, controls: `extended`, defaultFontType: `sans-serif`, defaultValue: { fontSize: 32, lineHeight: 1.4 } },
            color: {
                type: T.Object,
                icon: `color`,
                controls: {
                    mode: { type: T.Enum, defaultValue: `solid`, options: [`solid`, `gradient`], optionTitles: [`Solid`, `Gradient`], displaySegmentedControl: !0 },
                    color: { type: T.Color, defaultValue: `#999999`, hidden: (e) => e.mode !== `solid` },
                    startColor: { type: T.Color, defaultValue: `#000`, hidden: (e) => e.mode !== `gradient` },
                    endColor: { type: T.Color, defaultValue: `#FFF`, hidden: (e) => e.mode !== `gradient` },
                    angle: { type: T.Number, defaultValue: 0, min: -360, max: 360, unit: `Â°`, hidden: (e) => e.mode !== `gradient` },
                },
            },
            layerAlign: { type: T.Enum, defaultValue: `baseline`, options: [`baseline`, `middle`], optionTitles: [`Baseline`, `Middle`], displaySegmentedControl: !0, title: `Align` },
            layerGap: { type: T.Number, defaultValue: 0, min: 0, step: 1 },
            transform: { type: T.Enum, defaultValue: `none`, options: [`none`, `inherit`, `capitalize`, `uppercase`, `lowercase`], optionTitles: [`None`, `Inherit`, `Capitalize`, `Uppercase`, `Lowercase`] },
            decoration: { type: T.Enum, defaultValue: `none`, options: [`none`, `underline`, `line-through`], optionTitles: [`None`, `Underline`, `Strikethrough`] },
            balance: { type: T.Boolean, defaultValue: !1 },
            userSelect: { type: T.Boolean, defaultValue: !0 },
            tag: { type: T.Enum, defaultValue: `h1`, options: [`h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `p`, `span`], description: `More components at [Framer University](https://frameruni.link/cc).` },
        });
});
function Hn(e, ...t) {
    let n = {};
    return t?.forEach((t) => t && Object.assign(n, e[t])), n;
}
var Un,
    Wn,
    Gn,
    Kn,
    qn,
    Jn,
    Yn,
    Xn,
    Zn,
    Qn,
    $n,
    er,
    tr,
    nr = e(() => {
        i(),
            B(),
            b(),
            a(),
            Vn(),
            (Un = I(zn)),
            (Wn = [`nK8QvKOAn`, `WkPR5rCgT`, `qBiOct06L`]),
            (Gn = `framer-Pqhrh`),
            (Kn = { nK8QvKOAn: `framer-v-iml9gj`, qBiOct06L: `framer-v-5q2ikf`, WkPR5rCgT: `framer-v-1mdfc62` }),
            (qn = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
            (Jn = ({ value: e, children: t }) => {
                let n = u(y),
                    r = e ?? n.transition,
                    i = d(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
                return c(y.Provider, { value: i, children: t });
            }),
            (Yn = S.create(g)),
            (Xn = { "Variant 1": `nK8QvKOAn`, "Variant 2": `WkPR5rCgT`, "Variant 3": `qBiOct06L` }),
            (Zn = ({ height: e, id: t, width: n, ...r }) => ({ ...r, variant: Xn[r.variant] ?? r.variant ?? `nK8QvKOAn` })),
            (Qn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
            ($n = n(function (e, t) {
                let n = l(null),
                    i = t ?? n,
                    a = r(),
                    { activeLocale: o, setLocale: s } = U();
                V();
                let { style: u, className: d, layoutId: f, variant: p, ...m } = Zn(e),
                    { baseVariant: h, classNames: g, clearLoadingGesture: _, gestureHandlers: y, gestureVariant: b, isLoading: x, setGestureState: C, setVariant: T, variants: D } = G({
                        cycleOrder: Wn,
                        defaultVariant: `nK8QvKOAn`,
                        ref: i,
                        variant: p,
                        variantClassNames: Kn,
                    }),
                    O = Qn(e, D),
                    k = [],
                    A = P(Gn, ...k);
                return c(v, {
                    id: f ?? a,
                    children: c(Yn, {
                        animate: D,
                        initial: !1,
                        children: c(Jn, {
                            value: qn,
                            children: c(S.div, {
                                ...m,
                                ...y,
                                className: P(A, `framer-iml9gj`, d, g),
                                "data-framer-name": `Variant 1`,
                                layoutDependency: O,
                                layoutId: `nK8QvKOAn`,
                                ref: i,
                                style: { ...u },
                                ...Hn({ qBiOct06L: { "data-framer-name": `Variant 3` }, WkPR5rCgT: { "data-framer-name": `Variant 2` } }, h, b),
                                children: c(w, {
                                    children: c(j, {
                                        className: `framer-1oekiyx-container`,
                                        isAuthoredByUser: !0,
                                        isModuleExternal: !0,
                                        layoutDependency: O,
                                        layoutId: `V9QmRCPgO-container`,
                                        nodeId: `V9QmRCPgO`,
                                        rendersWithMotion: !0,
                                        scopeId: `OCRCJ81tK`,
                                        children: c(zn, {
                                            balance: !0,
                                            color: { angle: 45, color: `rgb(19, 19, 19)`, endColor: `rgb(255, 255, 255)`, mode: `solid`, startColor: `rgb(237, 237, 237)` },
                                            decoration: `none`,
                                            font: { fontFamily: `"Delight Regular", "Delight Regular Placeholder", sans-serif`, fontSize: `24px`, letterSpacing: `0.02em`, lineHeight: `120%`, textAlign: `center` },
                                            height: `100%`,
                                            id: `V9QmRCPgO`,
                                            layerAlign: `middle`,
                                            layerGap: 0,
                                            layers: [
                                                c(E, {
                                                    background: {
                                                        alt: ``,
                                                        fit: `fill`,
                                                        pixelHeight: 256,
                                                        pixelWidth: 256,
                                                        positionX: `center`,
                                                        positionY: `bottom`,
                                                        src: `./images/ZiZgyN2NKpQpLRnBoorffwhq60.png`,
                                                    },
                                                    className: `framer-1h5qwaj`,
                                                    style: { display: "none" },
                                                    "data-framer-name": `eye_in_speech_bubble_3d`,
                                                    layoutDependency: O,
                                                    layoutId: `rUMqB3LzC`,
                                                }),
                                                c(E, {
                                                    background: {
                                                        alt: ``,
                                                        fit: `fill`,
                                                        intrinsicHeight: 256,
                                                        intrinsicWidth: 256,
                                                        pixelHeight: 256,
                                                        pixelWidth: 256,
                                                        src: `./images/7fMdP0t7xGe3sGtyOspr0SWmqY.webp`,
                                                    },
                                                    className: `framer-13o1vwy`,
                                                    style: { display: "none" },
                                                    "data-framer-name": `FoldedHandsLightSkinTone-ezgif.com-apng-to-webp-converter`,
                                                    layoutDependency: O,
                                                    layoutId: `PGWor7lc4`,
                                                }),
                                                c(E, {
                                                    background: {
                                                        alt: ``,
                                                        fit: `fill`,
                                                        intrinsicHeight: 256,
                                                        intrinsicWidth: 256,
                                                        pixelHeight: 256,
                                                        pixelWidth: 256,
                                                        src: `./images/tTyzdkTeh3tC4p90hTGHf9uYfw.webp`,
                                                    },
                                                    className: `framer-dv1nc0`,
                                                    style: { display: "none" },
                                                    "data-framer-name": `Brain-ezgif.com-apng-to-webp-converter `,
                                                    layoutDependency: O,
                                                    layoutId: `qFkydXcdy`,
                                                }),
                                                c(E, {
                                                    background: { alt: ``, fit: `fill`, pixelHeight: 256, pixelWidth: 256, src: `./images/OBYaoO1gOnr8brwFdX5C56U0wU.png` },
                                                    className: `framer-1g7v0sy`,
                                                    style: { display: "none" },
                                                    "data-framer-name": `puzzle_piece_3d`,
                                                    layoutDependency: O,
                                                    layoutId: `gSsodx9Nh`,
                                                }),
                                                c(E, {
                                                    background: { alt: ``, fit: `fill`, pixelHeight: 256, pixelWidth: 256, src: `./images/ynNe7gT5X3gQmSlBw5z6eY9mCoo.png` },
                                                    className: `framer-v1ds53`,
                                                    "data-framer-name": `chess_pawn_3d`,
                                                    style: { display: "none" },
                                                    layoutDependency: O,
                                                    layoutId: `zuuVFKSss`,
                                                }),
                                            ],
                                            layoutId: `V9QmRCPgO`,
                                            slot: `[]`,
                                            style: { width: `100%` },
                                            tag: `h1`,
                                            text: `Your vision deserves exceptional design. Share your story, and let's build something meaningful.`,
                                            transform: `inherit`,
                                            userSelect: !1,
                                            width: `100%`,
                                            ...Hn(
                                                {
                                                    qBiOct06L: {
                                                        balance: !1,
                                                        font: { fontFamily: `"Delight Regular", "Delight Regular Placeholder", sans-serif`, fontSize: `16px`, letterSpacing: `0.02em`, lineHeight: `120%`, textAlign: `left` },
                                                    },
                                                    WkPR5rCgT: { font: { fontFamily: `"Delight Regular", "Delight Regular Placeholder", sans-serif`, fontSize: `24px`, letterSpacing: `0.02em`, lineHeight: `120%`, textAlign: `left` } },
                                                },
                                                h,
                                                b
                                            ),
                                        }),
                                    }),
                                }),
                            }),
                        }),
                    }),
                });
            })),
            (er = [
                `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
                `.framer-Pqhrh.framer-1fqfhyg, .framer-Pqhrh .framer-1fqfhyg { display: block; }`,
                `.framer-Pqhrh.framer-iml9gj { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1200px; }`,
                `.framer-Pqhrh .framer-1oekiyx-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
                `.framer-Pqhrh .framer-1h5qwaj { height: 25px; position: relative; width: 32px; }`,
                `.framer-Pqhrh .framer-13o1vwy { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 60px); overflow: visible; position: relative; width: 32px; }`,
                `.framer-Pqhrh .framer-dv1nc0 { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 32px); overflow: visible; position: relative; width: 32px; }`,
                `.framer-Pqhrh .framer-1g7v0sy { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 32px); position: relative; width: 32px; }`,
                `.framer-Pqhrh .framer-v1ds53 { aspect-ratio: 0.75 / 1; height: var(--framer-aspect-ratio-supported, 28px); position: relative; width: 21px; }`,
            ]),
            (tr = K($n, er, `framer-Pqhrh`)),
            (tr.displayName = `Footer: Open to conversation`),
            (tr.defaultProps = { height: 32, width: 1200 }),
            N(tr, { variant: { options: [`nK8QvKOAn`, `WkPR5rCgT`, `qBiOct06L`], optionTitles: [`Variant 1`, `Variant 2`, `Variant 3`], title: `Variant`, type: T.Enum } }),
            M(tr, [{ explicitInter: !0, fonts: [{ family: `Delight Regular`, source: `custom`, url: `https://framerusercontent.com/assets/pR4AjJlW0OWZiykVbHWQPugHiVk.woff2` }] }, ...Un], { supportsExplicitInterCodegen: !0 });
    }),
    rr,
    ir,
    ar,
    or = e(() => {
        B(),
            F.loadFonts([`CUSTOM;Delight Regular`, `CUSTOM;Delight Bold`, `CUSTOM;Delight Bold`]),
            (rr = [
                {
                    explicitInter: !0,
                    fonts: [
                        { family: `Delight Regular`, source: `custom`, url: `https://framerusercontent.com/assets/pR4AjJlW0OWZiykVbHWQPugHiVk.woff2` },
                        { family: `Delight Bold`, source: `custom`, url: `https://framerusercontent.com/assets/9O6XpwFtIabQD3l43bWmfwFrY3Y.woff2` },
                    ],
                },
            ]),
            (ir = [
                `.framer-npSPy .framer-styles-preset-1m5ko0:not(.rich-text-wrapper), .framer-npSPy .framer-styles-preset-1m5ko0.rich-text-wrapper p { --framer-font-family: "Delight Regular", "Delight Regular Placeholder", sans-serif; --framer-font-family-bold: "Delight Bold", "Delight Bold Placeholder", sans-serif; --framer-font-family-bold-italic: "Delight Bold", "Delight Bold Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 400; --framer-font-weight-bold-italic: 400; --framer-letter-spacing: 0.025em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 0px; --framer-text-alignment: center; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
                `@media (max-width: 1023px) and (min-width: 480px) { .framer-npSPy .framer-styles-preset-1m5ko0:not(.rich-text-wrapper), .framer-npSPy .framer-styles-preset-1m5ko0.rich-text-wrapper p { --framer-font-family: "Delight Regular", "Delight Regular Placeholder", sans-serif; --framer-font-family-bold: "Delight Bold", "Delight Bold Placeholder", sans-serif; --framer-font-family-bold-italic: "Delight Bold", "Delight Bold Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 400; --framer-font-weight-bold-italic: 400; --framer-letter-spacing: 0.025em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 0px; --framer-text-alignment: center; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
                `@media (max-width: 479px) and (min-width: 0px) { .framer-npSPy .framer-styles-preset-1m5ko0:not(.rich-text-wrapper), .framer-npSPy .framer-styles-preset-1m5ko0.rich-text-wrapper p { --framer-font-family: "Delight Regular", "Delight Regular Placeholder", sans-serif; --framer-font-family-bold: "Delight Bold", "Delight Bold Placeholder", sans-serif; --framer-font-family-bold-italic: "Delight Bold", "Delight Bold Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 400; --framer-font-weight-bold-italic: 400; --framer-letter-spacing: 0.025em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 0px; --framer-text-alignment: center; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
            ]),
            (ar = `framer-npSPy`);
    });
function sr(e, ...t) {
    let n = {};
    return t?.forEach((t) => t && Object.assign(n, e[t])), n;
}
var cr,
    lr,
    ur,
    dr,
    fr,
    pr,
    mr,
    hr,
    gr,
    _r,
    vr,
    yr,
    br,
    xr,
    Sr,
    Cr,
    wr = e(() => {
        i(),
            B(),
            b(),
            a(),
            or(),
            (cr = [`EDBaaxi00`, `SVB6OUNjN`, `OG9kKkHUS`, `zO8amlX0K`, `WEYdxPyp9`, `gxC6iC8C1`]),
            (lr = `framer-TGZEF`),
            (ur = { EDBaaxi00: `framer-v-126n9zn`, gxC6iC8C1: `framer-v-t6ptor`, OG9kKkHUS: `framer-v-cym7b6`, SVB6OUNjN: `framer-v-fazdno`, WEYdxPyp9: `framer-v-nxy4np`, zO8amlX0K: `framer-v-7m00yn` }),
            (dr = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: `spring` }),
            (fr = (e) => (typeof e == `object` && e && typeof e.src == `string` ? e : typeof e == `string` ? { src: e } : void 0)),
            (pr = (e, t) => `translateX(-50%) ${t}`),
            (mr = (e, t) => `translate(-50%, -50%) ${t}`),
            (hr = { bounce: 0, delay: 0, duration: 0.2, type: `spring` }),
            (gr = ({ value: e, children: t }) => {
                let n = u(y),
                    r = e ?? n.transition,
                    i = d(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
                return c(y.Provider, { value: i, children: t });
            }),
            (_r = S.create(g)),
            (vr = { L: `gxC6iC8C1`, Large: `OG9kKkHUS`, M: `WEYdxPyp9`, Mid: `SVB6OUNjN`, S: `zO8amlX0K`, Small: `EDBaaxi00` }),
            (yr = ({ height: e, id: t, image: n, link: r, mouseEnter: i, title: a, width: o, ...s }) => ({
                ...s,
                FDiXPEMZH: r ?? s.FDiXPEMZH,
                qvhN_G7CK: i ?? s.qvhN_G7CK,
                ShQn9z5kX: a ?? s.ShQn9z5kX ?? `Text`,
                variant: vr[s.variant] ?? s.variant ?? `EDBaaxi00`,
                VP1qORBR7: n ?? s.VP1qORBR7 ?? { pixelHeight: 256, pixelWidth: 256, src: `./images/bYwcP9Q3uOVIB2XG26C81MA2Qsw.png` },
            })),
            (br = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
            (xr = n(function (e, t) {
                let n = l(null),
                    i = t ?? n,
                    a = r(),
                    { activeLocale: o, setLocale: s } = U(),
                    u = V(),
                    { style: d, className: f, layoutId: m, variant: h, VP1qORBR7: _, qvhN_G7CK: y, FDiXPEMZH: b, ShQn9z5kX: x, ...C } = yr(e),
                    { baseVariant: w, classNames: T, clearLoadingGesture: O, gestureHandlers: A, gestureVariant: j, isLoading: M, setGestureState: N, setVariant: F, variants: I } = G({
                        cycleOrder: cr,
                        defaultVariant: `EDBaaxi00`,
                        ref: i,
                        variant: h,
                        variantClassNames: ur,
                    }),
                    L = br(e, I),
                    { activeVariantCallback: z, delay: B } = ee(w),
                    H = z(async (...e) => {
                        if ((N({ isHovered: !0 }), y)) {
                            let t = await y(...e);
                            if (t === !1) return !1;
                        }
                    }),
                    W = [ar],
                    K = P(lr, ...W),
                    te = () => !![`OG9kKkHUS`, `gxC6iC8C1`].includes(w);
                return c(v, {
                    id: m ?? a,
                    children: c(_r, {
                        animate: I,
                        initial: !1,
                        children: c(gr, {
                            value: dr,
                            children: c(D, {
                                href: b,
                                motionChild: !0,
                                nodeId: `EDBaaxi00`,
                                openInNewTab: !0,
                                scopeId: `ivE1EpR5o`,
                                children: c(S.a, {
                                    ...C,
                                    ...A,
                                    className: `${P(K, `framer-126n9zn`, f, T)} framer-aa67xs`,
                                    "data-framer-name": `Small`,
                                    "data-highlight": !0,
                                    layoutDependency: L,
                                    layoutId: `EDBaaxi00`,
                                    onMouseEnter: H,
                                    ref: i,
                                    style: { ...d },
                                    ...sr(
                                        {
                                            gxC6iC8C1: { "data-framer-name": `L` },
                                            OG9kKkHUS: { "data-framer-name": `Large` },
                                            SVB6OUNjN: { "data-framer-name": `Mid` },
                                            WEYdxPyp9: { "data-framer-name": `M` },
                                            zO8amlX0K: { "data-framer-name": `S` },
                                        },
                                        w,
                                        j
                                    ),
                                    children: p(S.div, {
                                        className: `framer-1r6v3k`,
                                        layoutDependency: L,
                                        layoutId: `fAjZowhOJ`,
                                        children: [
                                            c(E, {
                                                background: {
                                                    alt: ``,
                                                    fit: `fill`,
                                                    intrinsicHeight: 128,
                                                    intrinsicWidth: 128,
                                                    loading: R((u?.y || 0) + 0 + ((u?.height || 70) - 0 - 110 + 0 + 0) + 110 - 70),
                                                    pixelHeight: 256,
                                                    pixelWidth: 256,
                                                    sizes: `70px`,
                                                    ...fr(_),
                                                },
                                                className: `framer-1jfriqo`,
                                                "data-framer-name": `Image`,
                                                layoutDependency: L,
                                                layoutId: `uVZtKb920`,
                                                transformTemplate: pr,
                                                ...sr(
                                                    {
                                                        gxC6iC8C1: {
                                                            background: {
                                                                alt: ``,
                                                                fit: `fill`,
                                                                intrinsicHeight: 128,
                                                                intrinsicWidth: 128,
                                                                loading: R((u?.y || 0) + 0 + ((u?.height || 70) - 0 - 110 + 0 + 0) + 110 - 66),
                                                                pixelHeight: 256,
                                                                pixelWidth: 256,
                                                                sizes: `66px`,
                                                                ...fr(_),
                                                            },
                                                        },
                                                        OG9kKkHUS: {
                                                            background: {
                                                                alt: ``,
                                                                fit: `fill`,
                                                                intrinsicHeight: 128,
                                                                intrinsicWidth: 128,
                                                                loading: R((u?.y || 0) + 0 + ((u?.height || 110) - 0 - 110 + 0 + 0) + -8),
                                                                pixelHeight: 256,
                                                                pixelWidth: 256,
                                                                sizes: `110px`,
                                                                ...fr(_),
                                                                positionX: `center`,
                                                                positionY: `center`,
                                                            },
                                                            transformTemplate: void 0,
                                                        },
                                                        SVB6OUNjN: {
                                                            background: {
                                                                alt: ``,
                                                                fit: `fill`,
                                                                intrinsicHeight: 128,
                                                                intrinsicWidth: 128,
                                                                loading: R((u?.y || 0) + 0 + ((u?.height || 90) - 0 - 110 + 0 + 0) + 110 - 90),
                                                                pixelHeight: 256,
                                                                pixelWidth: 256,
                                                                sizes: `90px`,
                                                                ...fr(_),
                                                            },
                                                        },
                                                        WEYdxPyp9: {
                                                            background: {
                                                                alt: ``,
                                                                fit: `fill`,
                                                                intrinsicHeight: 128,
                                                                intrinsicWidth: 128,
                                                                loading: R((u?.y || 0) + 0 + ((u?.height || 70) - 0 - 110 + 0 + 0) + 110 - 54),
                                                                pixelHeight: 256,
                                                                pixelWidth: 256,
                                                                sizes: `54px`,
                                                                ...fr(_),
                                                            },
                                                        },
                                                        zO8amlX0K: {
                                                            background: {
                                                                alt: ``,
                                                                fit: `fill`,
                                                                intrinsicHeight: 128,
                                                                intrinsicWidth: 128,
                                                                loading: R((u?.y || 0) + 0 + ((u?.height || 70) - 0 - 110 + 0 + 0) + 110 - 42),
                                                                pixelHeight: 256,
                                                                pixelWidth: 256,
                                                                sizes: `42px`,
                                                                ...fr(_),
                                                            },
                                                        },
                                                    },
                                                    w,
                                                    j
                                                ),
                                            }),
                                            te() &&
                                                c(gr, {
                                                    value: hr,
                                                    children: c(k, {
                                                        __fromCanvasComponent: !0,
                                                        children: c(g, {
                                                            children: c(S.p, {
                                                                className: `framer-styles-preset-1m5ko0`,
                                                                "data-styles-preset": `MxRbawjh0`,
                                                                style: { "--framer-text-alignment": `center`, "--framer-text-color": `var(--extracted-r6o4lv, rgba(19, 19, 19, 0.5))` },
                                                                children: `Text`,
                                                            }),
                                                        }),
                                                        className: `framer-lms06q`,
                                                        fonts: [`Inter`],
                                                        layoutDependency: L,
                                                        layoutId: `Dj8gQwPqC`,
                                                        style: { "--extracted-r6o4lv": `rgba(19, 19, 19, 0.5)`, "--framer-link-text-color": `rgb(0, 153, 255)`, "--framer-link-text-decoration": `underline` },
                                                        text: x,
                                                        transformTemplate: mr,
                                                        verticalAlignment: `top`,
                                                        withExternalLayout: !0,
                                                    }),
                                                }),
                                        ],
                                    }),
                                }),
                            }),
                        }),
                    }),
                });
            })),
            (Sr = [
                `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
                `.framer-TGZEF.framer-aa67xs, .framer-TGZEF .framer-aa67xs { display: block; }`,
                `.framer-TGZEF.framer-126n9zn { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 70px; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: 70px; }`,
                `.framer-TGZEF .framer-1r6v3k { flex: none; height: 110px; overflow: visible; position: relative; width: 110px; }`,
                `.framer-TGZEF .framer-1jfriqo { aspect-ratio: 1 / 1; bottom: 0px; flex: none; height: var(--framer-aspect-ratio-supported, 70px); left: 50%; overflow: visible; position: absolute; width: 70px; }`,
                `.framer-TGZEF .framer-lms06q { flex: none; height: auto; left: 50%; position: absolute; top: 50%; white-space: pre; width: auto; }`,
                `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-TGZEF.framer-126n9zn { gap: 0px; } .framer-TGZEF.framer-126n9zn > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-TGZEF.framer-126n9zn > :first-child { margin-top: 0px; } .framer-TGZEF.framer-126n9zn > :last-child { margin-bottom: 0px; } }`,
                `.framer-TGZEF.framer-v-fazdno.framer-126n9zn { height: 90px; width: 90px; }`,
                `.framer-TGZEF.framer-v-fazdno .framer-1jfriqo { height: var(--framer-aspect-ratio-supported, 90px); width: 90px; }`,
                `.framer-TGZEF.framer-v-cym7b6.framer-126n9zn { height: 110px; width: 110px; }`,
                `.framer-TGZEF.framer-v-cym7b6 .framer-1jfriqo { bottom: unset; height: var(--framer-aspect-ratio-supported, 110px); left: 0px; right: 0px; top: -8px; width: unset; z-index: 1; }`,
                `.framer-TGZEF.framer-v-cym7b6 .framer-lms06q { top: 95%; }`,
                `.framer-TGZEF.framer-v-7m00yn .framer-1jfriqo { height: var(--framer-aspect-ratio-supported, 42px); width: 42px; }`,
                `.framer-TGZEF.framer-v-nxy4np .framer-1jfriqo { height: var(--framer-aspect-ratio-supported, 54px); width: 54px; }`,
                `.framer-TGZEF.framer-v-t6ptor .framer-1jfriqo { height: var(--framer-aspect-ratio-supported, 66px); width: 66px; }`,
                ...ir,
            ]),
            (Cr = K(xr, Sr, `framer-TGZEF`)),
            (Cr.displayName = `Mail icon`),
            (Cr.defaultProps = { height: 70, width: 70 }),
            N(Cr, {
                variant: { options: [`EDBaaxi00`, `SVB6OUNjN`, `OG9kKkHUS`, `zO8amlX0K`, `WEYdxPyp9`, `gxC6iC8C1`], optionTitles: [`Small`, `Mid`, `Large`, `S`, `M`, `L`], title: `Variant`, type: T.Enum },
                VP1qORBR7: { __defaultAssetReference: `data:framer/asset-reference,bYwcP9Q3uOVIB2XG26C81MA2Qsw.png?originalFilename=image.png&preferredSize=auto`, title: `Image`, type: T.ResponsiveImage },
                qvhN_G7CK: { title: `Mouse Enter`, type: T.EventHandler },
                FDiXPEMZH: { title: `Link`, type: T.Link },
                ShQn9z5kX: { defaultValue: `Text`, displayTextArea: !1, title: `Title`, type: T.String },
            }),
            M(
                Cr,
                [
                    {
                        explicitInter: !0,
                        fonts: [
                            {
                                family: `Inter`,
                                source: `framer`,
                                style: `normal`,
                                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                                weight: `400`,
                            },
                            {
                                family: `Inter`,
                                source: `framer`,
                                style: `normal`,
                                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                                weight: `400`,
                            },
                            { family: `Inter`, source: `framer`, style: `normal`, unicodeRange: `U+1F00-1FFF`, url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`, weight: `400` },
                            { family: `Inter`, source: `framer`, style: `normal`, unicodeRange: `U+0370-03FF`, url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`, weight: `400` },
                            {
                                family: `Inter`,
                                source: `framer`,
                                style: `normal`,
                                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                                weight: `400`,
                            },
                            {
                                family: `Inter`,
                                source: `framer`,
                                style: `normal`,
                                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                                url: `https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2`,
                                weight: `400`,
                            },
                            {
                                family: `Inter`,
                                source: `framer`,
                                style: `normal`,
                                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                                weight: `400`,
                            },
                        ],
                    },
                    ...L(rr),
                ],
                { supportsExplicitInterCodegen: !0 }
            );
    });
function Tr(e, ...t) {
    let n = {};
    return t?.forEach((t) => t && Object.assign(n, e[t])), n;
}
var Er,
    Dr,
    Or,
    kr,
    Ar,
    jr,
    Mr,
    Nr,
    Pr,
    Fr,
    Ir,
    Lr,
    Rr,
    zr,
    Br = e(() => {
        i(),
            B(),
            b(),
            a(),
            wr(),
            (Er = I(Cr)),
            (Dr = [`kYEEexEwY`, `axi0wBcJd`, `N2TP1atQh`, `ZjQyKChtA`, `m8RGpMJs6`, `eV8IPykZD`]),
            (Or = `framer-oOgRI`),
            (kr = { axi0wBcJd: `framer-v-ekwm6y`, eV8IPykZD: `framer-v-1igxtko`, kYEEexEwY: `framer-v-z9jkpy`, m8RGpMJs6: `framer-v-1hqzhuy`, N2TP1atQh: `framer-v-1wnw3v5`, ZjQyKChtA: `framer-v-1nyb7yw` }),
            (Ar = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: `spring` }),
            (jr = (e, t) => {
                if (!(!e || typeof e != `object`)) return { ...e, alt: t };
            }),
            (Mr = ({ value: e, children: t }) => {
                let n = u(y),
                    r = e ?? n.transition,
                    i = d(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
                return c(y.Provider, { value: i, children: t });
            }),
            (Nr = S.create(g)),
            (Pr = { "D-1": `axi0wBcJd`, "D-2": `N2TP1atQh`, "D-3": `kYEEexEwY`, "D-4": `ZjQyKChtA`, "D-5": `m8RGpMJs6`, "D-Default": `eV8IPykZD` }),
            (Fr = ({ behance: e, dribbble: t, email: n, height: r, id: i, instagram: a, width: o, ...s }) => ({
                ...s,
                AttoKB5hh: t ?? s.AttoKB5hh,
                fs7Djptuu: a ?? s.fs7Djptuu,
                PnyjYm0XM: n ?? s.PnyjYm0XM,
                variant: Pr[s.variant] ?? s.variant ?? `kYEEexEwY`,
                YXMqM43IZ: e ?? s.YXMqM43IZ,
            })),
            (Ir = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
            (Lr = n(function (e, t) {
                let n = l(null),
                    i = t ?? n,
                    a = r(),
                    { activeLocale: o, setLocale: s } = U(),
                    u = V(),
                    { style: d, className: f, layoutId: m, variant: h, fs7Djptuu: g, PnyjYm0XM: _, AttoKB5hh: y, YXMqM43IZ: b, ...x } = Fr(e),
                    { baseVariant: C, classNames: T, clearLoadingGesture: E, gestureHandlers: D, gestureVariant: O, isLoading: k, setGestureState: A, setVariant: M, variants: N } = G({
                        cycleOrder: Dr,
                        defaultVariant: `kYEEexEwY`,
                        ref: i,
                        variant: h,
                        variantClassNames: kr,
                    }),
                    F = Ir(e, N),
                    { activeVariantCallback: I, delay: L } = ee(C),
                    R = I(async (...e) => {
                        A({ isHovered: !1 }), M(`eV8IPykZD`);
                    }),
                    z = I(async (...e) => {
                        M(`N2TP1atQh`);
                    }),
                    B = I(async (...e) => {
                        M(`kYEEexEwY`);
                    }),
                    H = I(async (...e) => {
                        M(`ZjQyKChtA`);
                    }),
                    W = I(async (...e) => {
                        M(`m8RGpMJs6`);
                    }),
                    K = [],
                    te = P(Or, ...K);
                return c(v, {
                    id: m ?? a,
                    children: c(Nr, {
                        animate: N,
                        initial: !1,
                        children: c(Mr, {
                            value: Ar,
                            children: p(S.div, {
                                ...x,
                                ...D,
                                className: P(te, `framer-z9jkpy`, f, T),
                                "data-framer-name": `D-3`,
                                "data-highlight": !0,
                                layoutDependency: F,
                                layoutId: `kYEEexEwY`,
                                onMouseLeave: R,
                                ref: i,
                                style: { ...d },
                                ...Tr(
                                    {
                                        axi0wBcJd: { "data-framer-name": `D-1` },
                                        eV8IPykZD: { "data-framer-name": `D-Default` },
                                        m8RGpMJs6: { "data-framer-name": `D-5` },
                                        N2TP1atQh: { "data-framer-name": `D-2` },
                                        ZjQyKChtA: { "data-framer-name": `D-4` },
                                    },
                                    C,
                                    O
                                ),
                                children: [
                                    c(w, {
                                        height: 70,
                                        y: (u?.y || 0) + 0 + ((u?.height || 70) - 0 - 70),
                                        children: c(j, {
                                            className: `framer-ljki90-container`,
                                            layoutDependency: F,
                                            layoutId: `XRspaON5d-container`,
                                            nodeId: `XRspaON5d`,
                                            rendersWithMotion: !0,
                                            scopeId: `UK2BTXBs_`,
                                            children: c(Cr, {
                                                FDiXPEMZH: g,
                                                height: `100%`,
                                                id: `XRspaON5d`,
                                                layoutId: `XRspaON5d`,
                                                qvhN_G7CK: z,
                                                ShQn9z5kX: `Instagram`,
                                                variant: `SVB6OUNjN`,
                                                VP1qORBR7: jr({ pixelHeight: 180, pixelWidth: 180, src: `./images/7s8tYWB0jKALVwvWjBLzgrKJbG0.png` }, ``),
                                                width: `100%`,
                                                ...Tr({ eV8IPykZD: { variant: `EDBaaxi00` }, m8RGpMJs6: { variant: `EDBaaxi00` }, N2TP1atQh: { variant: `OG9kKkHUS` }, ZjQyKChtA: { variant: `EDBaaxi00` } }, C, O),
                                            }),
                                        }),
                                    }),
                                    c(w, {
                                        height: 70,
                                        y: (u?.y || 0) + 0 + ((u?.height || 70) - 0 - 70),
                                        children: c(j, {
                                            className: `framer-3gl0p0-container`,
                                            layoutDependency: F,
                                            layoutId: `TRkmyQH3c-container`,
                                            nodeId: `TRkmyQH3c`,
                                            rendersWithMotion: !0,
                                            scopeId: `UK2BTXBs_`,
                                            children: c(Cr, {
                                                FDiXPEMZH: _,
                                                height: `100%`,
                                                id: `TRkmyQH3c`,
                                                layoutId: `TRkmyQH3c`,
                                                qvhN_G7CK: B,
                                                ShQn9z5kX: `Email`,
                                                variant: `OG9kKkHUS`,
                                                VP1qORBR7: jr({ pixelHeight: 180, pixelWidth: 180, src: `./images/u3VFaZTUcFjVZ9wz66JAqI3zsY.png` }, ``),
                                                width: `100%`,
                                                ...Tr(
                                                    { axi0wBcJd: { variant: `EDBaaxi00` }, eV8IPykZD: { variant: `EDBaaxi00` }, m8RGpMJs6: { variant: `EDBaaxi00` }, N2TP1atQh: { variant: `SVB6OUNjN` }, ZjQyKChtA: { variant: `SVB6OUNjN` } },
                                                    C,
                                                    O
                                                ),
                                            }),
                                        }),
                                    }),
                                    c(w, {
                                        height: 70,
                                        y: (u?.y || 0) + 0 + ((u?.height || 70) - 0 - 70),
                                        children: c(j, {
                                            className: `framer-x79jfz-container`,
                                            layoutDependency: F,
                                            layoutId: `CJqPeyW3u-container`,
                                            nodeId: `CJqPeyW3u`,
                                            rendersWithMotion: !0,
                                            scopeId: `UK2BTXBs_`,
                                            children: c(Cr, {
                                                FDiXPEMZH: y,
                                                height: `100%`,
                                                id: `CJqPeyW3u`,
                                                layoutId: `CJqPeyW3u`,
                                                qvhN_G7CK: H,
                                                ShQn9z5kX: `Dribbble`,
                                                variant: `SVB6OUNjN`,
                                                VP1qORBR7: jr({ pixelHeight: 180, pixelWidth: 180, src: `./images/dL7lni9dolLP3WQ2FZ8kC8wNAM.png` }, ``),
                                                width: `100%`,
                                                ...Tr({ axi0wBcJd: { variant: `EDBaaxi00` }, eV8IPykZD: { variant: `EDBaaxi00` }, N2TP1atQh: { variant: `EDBaaxi00` }, ZjQyKChtA: { variant: `OG9kKkHUS` } }, C, O),
                                            }),
                                        }),
                                    }),
                                    c(w, {
                                        height: 70,
                                        y: (u?.y || 0) + 0 + ((u?.height || 70) - 0 - 70),
                                        children: c(j, {
                                            className: `framer-1rqyli-container`,
                                            layoutDependency: F,
                                            layoutId: `SnEQOgCfu-container`,
                                            nodeId: `SnEQOgCfu`,
                                            rendersWithMotion: !0,
                                            scopeId: `UK2BTXBs_`,
                                            children: c(Cr, {
                                                FDiXPEMZH: b,
                                                height: `100%`,
                                                id: `SnEQOgCfu`,
                                                layoutId: `SnEQOgCfu`,
                                                qvhN_G7CK: W,
                                                ShQn9z5kX: `Behance`,
                                                variant: `EDBaaxi00`,
                                                VP1qORBR7: jr({ pixelHeight: 180, pixelWidth: 180, src: `./images/fPuiw3FxkMR5XeRWta60wcFjQOI.png` }, ``),
                                                width: `100%`,
                                                ...Tr({ m8RGpMJs6: { variant: `OG9kKkHUS` }, ZjQyKChtA: { variant: `SVB6OUNjN` } }, C, O),
                                            }),
                                        }),
                                    }),
                                ],
                            }),
                        }),
                    }),
                });
            })),
            (Rr = [
                `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
                `.framer-oOgRI.framer-1qivy00, .framer-oOgRI .framer-1qivy00 { display: block; }`,
                `.framer-oOgRI.framer-z9jkpy { align-content: flex-end; align-items: flex-end; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 70px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
                `.framer-oOgRI .framer-ljki90-container, .framer-oOgRI .framer-3gl0p0-container, .framer-oOgRI .framer-x79jfz-container, .framer-oOgRI .framer-1rqyli-container { flex: none; height: auto; position: relative; width: auto; }`,
            ]),
            (zr = K(Lr, Rr, `framer-oOgRI`)),
            (zr.displayName = `Desktop-Dock`),
            (zr.defaultProps = { height: 70, width: 360 }),
            N(zr, {
                variant: { options: [`kYEEexEwY`, `axi0wBcJd`, `N2TP1atQh`, `ZjQyKChtA`, `m8RGpMJs6`, `eV8IPykZD`], optionTitles: [`D-3`, `D-1`, `D-2`, `D-4`, `D-5`, `D-Default`], title: `Variant`, type: T.Enum },
                fs7Djptuu: { title: `Instagram`, type: T.Link },
                PnyjYm0XM: { title: `email`, type: T.Link },
                AttoKB5hh: { title: `Dribbble`, type: T.Link },
                YXMqM43IZ: { title: `Behance`, type: T.Link },
            }),
            M(zr, [{ explicitInter: !0, fonts: [] }, ...Er], { supportsExplicitInterCodegen: !0 });
    });
function Vr({ eyeWidth: e, eyeHeight: t, pupilWidth: n, pupilHeight: r, pupilStartX: i, pupilStartY: a, eyeColor: o, pupilColor: s, borderColor: u, borderWidth: d, isBlinking: f }) {
    let p = l(null),
        [g, v] = _({ x: i, y: a });
    return (
        m(() => {
            let i = (i) => {
                if (!p.current) return;
                let a = p.current.getBoundingClientRect(),
                    o = a.left + a.width / 2,
                    s = a.top + a.height / 2,
                    c = i.clientX - o,
                    l = i.clientY - s;
                Math.sqrt(c * c + l * l);
                let u = (e - n) / 2,
                    d = (t - r) / 2,
                    f = Math.atan2(l, c),
                    m = Math.cos(f) * Math.min(Math.abs(c), u),
                    h = Math.sin(f) * Math.min(Math.abs(l), d);
                v({ x: m, y: h });
            };
            return h.addEventListener(`mousemove`, i), () => h.removeEventListener(`mousemove`, i);
        }, [e, t, n, r]),
        c(`div`, {
            ref: p,
            style: {
                width: e,
                height: t,
                backgroundColor: o,
                borderRadius: `50%`,
                overflow: `hidden`,
                position: `relative`,
                border: `${d}px solid ${u}`,
                transform: f ? `scaleY(0.1)` : `scaleY(1)`,
                transition: `transform 0.3s ease-in-out`,
            },
            children: c(`div`, {
                style: { width: n, height: r, backgroundColor: s, borderRadius: `50%`, position: `absolute`, top: `50%`, left: `50%`, transform: `translate(-50%, -50%) translate(${g.x}px, ${g.y}px)`, transition: `transform 0.05s linear` },
            }),
        })
    );
}
function Hr(e) {
    let {
            numberOfEyes: t,
            eyeSpacing: n,
            eyeWidth: r,
            eyeHeight: i,
            pupilWidth: a,
            pupilHeight: o,
            pupilStartX: s,
            pupilStartY: l,
            eyeColor: u,
            pupilColor: d,
            borderColor: f,
            borderWidth: p,
            blinkInterval: g,
            blinkDuration: v,
            blinkEnabled: y,
            winkEnabled: b,
            sleepEnabled: x,
            sleepAfter: S,
        } = e,
        [C, w] = _(Array(t).fill(!1)),
        [T, E] = _(Date.now()),
        D = Array.from({ length: t });
    return (
        m(() => {
            let e = () => {
                E(Date.now());
            };
            return h.addEventListener(`mousemove`, e), () => h.removeEventListener(`mousemove`, e);
        }, []),
        m(() => {
            let e = setInterval(() => {
                let e = Date.now();
                if (x && e - T >= S * 1e3) w(Array(t).fill(!0));
                else if (b) {
                    let e = Math.floor(Math.random() * t),
                        n = C.map((t, n) => n === e);
                    w(n),
                        setTimeout(() => {
                            w(Array(t).fill(!1));
                        }, v * 1e3);
                } else
                    y &&
                        (w(Array(t).fill(!0)),
                        setTimeout(() => {
                            w(Array(t).fill(!1));
                        }, v * 1e3));
            }, g * 1e3);
            return () => clearInterval(e);
        }, [t, g, v, y, b, x, T, S]),
        c(`div`, {
            style: { display: `flex`, flexWrap: `wrap`, justifyContent: `center`, alignItems: `center`, gap: n, padding: 20, ...e.style },
            children: D.map((e, t) => c(Vr, { eyeWidth: r, eyeHeight: i, pupilWidth: a, pupilHeight: o, pupilStartX: s, pupilStartY: l, eyeColor: u, pupilColor: d, borderColor: f, borderWidth: p, isBlinking: C[t] }, t)),
        })
    );
}
var Ur = e(() => {
    o(),
        i(),
        B(),
        a(),
        (Hr.displayName = `MultiEye`),
        N(Hr, {
            numberOfEyes: { type: T.Number, title: `No. of Eyes`, defaultValue: 2, min: 1, max: 100 },
            eyeSpacing: { type: T.Number, title: `Eye Spacing`, defaultValue: 40, min: 0, max: 100 },
            eyeWidth: { type: T.Number, title: `Eye Width`, defaultValue: 100, min: 10, max: 300 },
            eyeHeight: { type: T.Number, title: `Eye Height`, defaultValue: 100, min: 10, max: 300 },
            pupilWidth: { type: T.Number, title: `Pupil Width`, defaultValue: 30, min: 5, max: 100 },
            pupilHeight: { type: T.Number, title: `Pupil Height`, defaultValue: 30, min: 5, max: 100 },
            pupilStartX: { type: T.Number, title: `Pupil Start X`, defaultValue: 0, min: -50, max: 50 },
            pupilStartY: { type: T.Number, title: `Pupil Start Y`, defaultValue: 0, min: -50, max: 50 },
            eyeColor: { type: T.Color, title: `Eye Colour`, defaultValue: `#FFFFFF` },
            pupilColor: { type: T.Color, title: `Pupil Colour`, defaultValue: `#000000` },
            borderColor: { type: T.Color, title: `Border Colour`, defaultValue: `#000000` },
            borderWidth: { type: T.Number, title: `Border Width`, defaultValue: 2, min: 0, max: 10 },
            blinkInterval: { type: T.Number, title: `Interval (sec)`, defaultValue: 3, min: 1, max: 10 },
            blinkDuration: { type: T.Number, title: `Blink Duration (sec)`, defaultValue: 0.2, min: 0.05, max: 2 },
            blinkEnabled: { type: T.Boolean, title: `Enable Blink`, defaultValue: !0 },
            winkEnabled: { type: T.Boolean, title: `Enable Wink`, defaultValue: !0 },
            sleepEnabled: { type: T.Boolean, title: `Enable Sleep`, defaultValue: !0 },
            sleepAfter: { type: T.Number, title: `Sleep After (sec)`, defaultValue: 10, min: 5, max: 120 },
        });
});
function Wr(e, ...t) {
    let n = {};
    return t?.forEach((t) => t && Object.assign(n, e[t])), n;
}
var Gr,
    Kr,
    qr,
    Jr,
    Yr,
    Xr,
    Zr,
    Qr,
    $r,
    ei,
    ti,
    ni,
    ri,
    ii,
    ai,
    oi = e(() => {
        i(),
            B(),
            b(),
            a(),
            Ur(),
            Vn(),
            (Gr = I(Hr)),
            (Kr = I(zn)),
            (qr = [`MmgqVFurI`, `gipsB7VcH`, `yhAE4rE9i`, `zEXnaqk6s`, `xMI0uSncy`]),
            (Jr = `framer-iAQrp`),
            (Yr = { gipsB7VcH: `framer-v-nqqd23`, MmgqVFurI: `framer-v-qgfpkd`, xMI0uSncy: `framer-v-bd52rv`, yhAE4rE9i: `framer-v-1r4r5fs`, zEXnaqk6s: `framer-v-kt20ja` }),
            (Xr = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
            (Zr = (e, t) => `translateX(-50%) ${t}`),
            (Qr = ({ value: e, children: t }) => {
                let n = u(y),
                    r = e ?? n.transition,
                    i = d(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
                return c(y.Provider, { value: i, children: t });
            }),
            ($r = S.create(g)),
            (ei = { "medium left": `zEXnaqk6s`, "Small left": `xMI0uSncy`, "Variant 1": `MmgqVFurI`, medium: `gipsB7VcH`, Small: `yhAE4rE9i` }),
            (ti = ({ height: e, id: t, width: n, ...r }) => ({ ...r, variant: ei[r.variant] ?? r.variant ?? `MmgqVFurI` })),
            (ni = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
            (ri = n(function (e, t) {
                let n = l(null),
                    i = t ?? n,
                    a = r(),
                    { activeLocale: o, setLocale: s } = U();
                V();
                let { style: u, className: d, layoutId: f, variant: m, ...h } = ti(e),
                    { baseVariant: g, classNames: _, clearLoadingGesture: y, gestureHandlers: b, gestureVariant: x, isLoading: C, setGestureState: T, setVariant: D, variants: O } = G({
                        cycleOrder: qr,
                        defaultVariant: `MmgqVFurI`,
                        ref: i,
                        variant: m,
                        variantClassNames: Yr,
                    }),
                    k = ni(e, O),
                    A = [],
                    M = P(Jr, ...A),
                    N = () => ![`gipsB7VcH`, `yhAE4rE9i`, `zEXnaqk6s`, `xMI0uSncy`].includes(g),
                    F = () => !![`gipsB7VcH`, `zEXnaqk6s`].includes(g),
                    I = () => !![`yhAE4rE9i`, `xMI0uSncy`].includes(g);
                return c(v, {
                    id: f ?? a,
                    children: c($r, {
                        animate: O,
                        initial: !1,
                        children: c(Qr, {
                            value: Xr,
                            children: p(S.div, {
                                ...h,
                                ...b,
                                className: P(M, `framer-qgfpkd`, d, _),
                                "data-framer-name": `Variant 1`,
                                layoutDependency: k,
                                layoutId: `MmgqVFurI`,
                                ref: i,
                                style: { ...u },
                                ...Wr({ gipsB7VcH: { "data-framer-name": `medium` }, xMI0uSncy: { "data-framer-name": `Small left` }, yhAE4rE9i: { "data-framer-name": `Small` }, zEXnaqk6s: { "data-framer-name": `medium left` } }, g, x),
                                children: [
                                    N() &&
                                        c(w, {
                                            
                                           children: c(j, {
  className: `framer-2mmjng-container`,
  "data-framer-name": `L`,
  isAuthoredByUser: !0,
  isModuleExternal: !0,
  layoutDependency: k,
  layoutId: `EgjcZjHO1-container`,
  name: `L`,
  nodeId: `EgjcZjHO1`,
  rendersWithMotion: !0,
  scopeId: `xMwxXr1VI`,
  children: c(zn, {
    balance: !0,
    color: {
      angle: 0,
      color: `rgb(19, 19, 19)`,
      endColor: `rgb(255, 255, 255)`,
      mode: `solid`,
      startColor: `rgb(0, 0, 0)`
    },
    decoration: `none`,
    font: {
      fontFamily: `"Mango Grotesque Extra Bold", "Mango Grotesque Extra Bold Placeholder", sans-serif`,
      fontSize: window.innerWidth <= 480 ? `61px` : `96px`,
      letterSpacing: `0.01em`,
      lineHeight: `1em`
    },
    height: `100%`,
    id: `EgjcZjHO1`,
    layerAlign: `middle`,
    layerGap: 8,
    layers: [
      p(S.div, {
        className: `framer-1et0ao2s`,
        layoutDependency: k,
        style: { display: "none" },
        layoutId: `m7XKGy7Mf`,
        children: [
          c(w, {
            children: c(j, {
              className: `framer-1hx6jc4-containers`,
              inComponentSlot: !0,
              isAuthoredByUser: !0,
              isModuleExternal: !0,
              layoutDependency: k,
              layoutId: `w0miC9NPA-container`,
              nodeId: `w0miC9NPA`,
              rendersWithMotion: !0,
              scopeId: `xMwxXr1VI`,
              children: c(Hr, {
                blinkDuration: 0.4,
                blinkEnabled: !1,
                blinkInterval: 3,
                borderColor: `rgba(0, 0, 0, 0)`,
                borderWidth: 1,
                eyeColor: `rgb(254, 229, 253)`,
                eyeHeight: 36,
                eyeSpacing: 8,
                eyeWidth: 36,
                height: `100%`,
                id: `w0miC9NPA`,
                layoutId: `w0miC9NPA`,
                numberOfEyes: 1,
                pupilColor: `rgb(0, 0, 0)`,
                pupilHeight: 20,
                pupilStartX: 4,
                pupilStartY: 0,
                pupilWidth: 20,
                sleepAfter: 5,
                sleepEnabled: !1,
                width: `100%`,
                winkEnabled: !1
              })
            })
          }),
          c(w, {
            children: c(j, {
              className: `framer-ain5kn-containers`,
              inComponentSlot: !0,
              style: { display: "none" },
              isAuthoredByUser: !0,
              isModuleExternal: !0,
              layoutDependency: k,
              layoutId: `Qtl7LDJ_1-container`,
              nodeId: `Qtl7LDJ_1`,
              rendersWithMotion: !0,
              scopeId: `xMwxXr1VI`,
              children: c(Hr, {
                blinkDuration: 0.4,
                blinkEnabled: !1,
                blinkInterval: 3,
                borderColor: `rgba(0, 0, 0, 0)`,
                borderWidth: 1,
                eyeColor: `rgb(254, 229, 253)`,
                eyeHeight: 36,
                eyeSpacing: 8,
                eyeWidth: 36,
                height: `100%`,
                id: `Qtl7LDJ_1`,
                layoutId: `Qtl7LDJ_1`,
                numberOfEyes: 1,
                pupilColor: `rgb(0, 0, 0)`,
                pupilHeight: 20,
                pupilStartX: -4,
                pupilStartY: 0,
                pupilWidth: 20,
                sleepAfter: 5,
                sleepEnabled: !1,
                width: `100%`,
                winkEnabled: !1
              })
            })
          }),
          p(S.div, {
            className: `framer-1ufuq4u`,
            layoutDependency: k,
            layoutId: `AWIskDUT7`,
            children: [
              c(E, {
                background: {
                  alt: ``,
                  fit: `fill`,
                  intrinsicHeight: 72,
                  intrinsicWidth: 144,
                  pixelHeight: 72,
                  pixelWidth: 144,
                  src: `./images/jeUZ8rlV5Ub8LugWfDfCHsg3Sc.png`
                },
                className: `framer-15d4te8`,
                "data-framer-name": `Mouth`,
                layoutDependency: k,
                layoutId: `vwD9U8igE`,
                transformTemplate: Zr
              }),
              c(E, {
                background: {
                  alt: ``,
                  fit: `fill`,
                  intrinsicHeight: 256,
                  intrinsicWidth: 256,
                  pixelHeight: 256,
                  pixelWidth: 256,
                  src: `./images/ObiD4Bglu37zchN81nDkOr3qsk.png`
                },
                className: `framer-2fwqib`,
                "data-framer-name": `Grinning face_with_smiling_eyes_3d 1`,
                layoutDependency: k,
                layoutId: `SGOfV3lhd`
              })
            ]
          })
        ]
      })
    ],
    layoutId: `EgjcZjHO1`,
    name: `L`,
    slot: `[]`,
    style: { width: `100%` },
    tag: `h1`,
    text: `Let's Create Together`,
    transform: `none`,
    userSelect: !0,
    width: `100%`
  })
})
,
                                        }),
                                    F() &&
                                        c(w, {
                                            children: c(j, {
                                                className: `framer-12oo26q-container`,
                                                "data-framer-name": `m`,
                                                isAuthoredByUser: !0,
                                                isModuleExternal: !0,
                                                layoutDependency: k,
                                                layoutId: `WqxCmLP66-container`,
                                                name: `m`,
                                                nodeId: `WqxCmLP66`,
                                                rendersWithMotion: !0,
                                                scopeId: `xMwxXr1VI`,
                                                children: c(zn, {
                                                    balance: !0,
                                                    color: { angle: 0, color: `rgb(19, 19, 19)`, endColor: `rgb(255, 255, 255)`, mode: `solid`, startColor: `rgb(0, 0, 0)` },
                                                    decoration: `none`,
                                                    font: { fontFamily: `"Mango Grotesque Extra Bold", "Mango Grotesque Extra Bold Placeholder", sans-serif`, fontSize: `80px`, letterSpacing: `0.01em`, lineHeight: `1em` },
                                                    height: `100%`,
                                                    id: `WqxCmLP66`,
                                                    layerAlign: `middle`,
                                                    layerGap: 0,
                                                    layers: [
                                                       c(E, {
  background: { 
    alt: "", 
    fit: "fill", 
    pixelHeight: 256, 
    pixelWidth: 256, 
    src: "./images/LlqvXjKyiYc8iWxYxvvGYRx2g0.gif" 
  },
  className: "framer-7zn0mf",
  "data-framer-name": "grinning_face_with_smiling_eyes_3d 1",
  layoutDependency: k,
  layoutId: "aZfxpbpN_",
  style: { display: "none" },
}),

                                                    ],
                                                    layoutId: `WqxCmLP66`,
                                                    name: `m`,
                                                    slot: `[]`,
                                                    style: { width: `100%` },
                                                    tag: `h1`,
                                                    text: `Let's Create Together`,
                                                    transform: `none`,
                                                    userSelect: !0,
                                                    width: `100%`,
                                                    ...Wr(
                                                        {
                                                            zEXnaqk6s: {
                                                                font: {
                                                                    fontFamily: `"Mango Grotesque Extra Bold", "Mango Grotesque Extra Bold Placeholder", sans-serif`,
                                                                    fontSize: `80px`,
                                                                    letterSpacing: `0.01em`,
                                                                    lineHeight: `1em`,
                                                                    textAlign: `left`,
                                                                },
                                                            },
                                                        },
                                                        g,
                                                        x
                                                    ),
                                                }),
                                            }),
                                        }),
                                    I() &&
                                        c(w, {
                                            children: c(j, {
                                                className: `framer-1h5y7vd-container`,
                                                "data-framer-name": `s`,
                                                isAuthoredByUser: !0,
                                                isModuleExternal: !0,
                                                layoutDependency: k,
                                                layoutId: `Jm6nleeIF-container`,
                                                name: `s`,
                                                nodeId: `Jm6nleeIF`,
                                                rendersWithMotion: !0,
                                                scopeId: `xMwxXr1VI`,
                                                children: c(zn, {
                                                    balance: !0,
                                                    color: { angle: 0, color: `rgb(19, 19, 19)`, endColor: `rgb(255, 255, 255)`, mode: `solid`, startColor: `rgb(0, 0, 0)` },
                                                    decoration: `none`,
                                                    font: { fontFamily: `"Mango Grotesque Extra Bold", "Mango Grotesque Extra Bold Placeholder", sans-serif`, fontSize: `64px`, letterSpacing: `0.01em`, lineHeight: `1em` },
                                                    height: `100%`,
                                                    id: `Jm6nleeIF`,
                                                    layerAlign: `middle`,
                                                    layerGap: 0,
                                                    layers: [
                                                       c(E, {
  background: { alt: "", fit: "fill", pixelHeight: 256, pixelWidth: 256, src: "" },
  className: "framer-17rgshv",
  "data-framer-name": "grinning_face_with_smiling_eyes_3d 1",
  layoutDependency: k,
  layoutId: "PdBysYxwt",
  style: { display: "none" },
}),

                                                    ],
                                                    layoutId: `Jm6nleeIF`,
                                                    name: `s`,
                                                    slot: `[]`,
                                                    style: { width: `100%` },
                                                    tag: `h1`,
                                                    text: `Let's Create Together`,
                                                    transform: `none`,
                                                    userSelect: !0,
                                                    width: `100%`,
                                                    ...Wr(
                                                        {
                                                            xMI0uSncy: {
                                                                font: {
                                                                    fontFamily: `"Mango Grotesque Extra Bold", "Mango Grotesque Extra Bold Placeholder", sans-serif`,
                                                                    fontSize: `64px`,
                                                                    letterSpacing: `0.01em`,
                                                                    lineHeight: `1em`,
                                                                    textAlign: `left`,
                                                                },
                                                            },
                                                        },
                                                        g,
                                                        x
                                                    ),
                                                }),
                                            }),
                                        }),
                                ],
                            }),
                        }),
                    }),
                });
            })),
            (ii = [
                `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
                `.framer-iAQrp.framer-1h0lm09, .framer-iAQrp .framer-1h0lm09 { display: block; }`,
                `.framer-iAQrp.framer-qgfpkd { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 178px; }`,
                `.framer-iAQrp .framer-2mmjng-container, .framer-iAQrp .framer-12oo26q-container, .framer-iAQrp .framer-1h5y7vd-container { flex: none; height: auto; position: relative; width: 100%; }`,
                `.framer-iAQrp .framer-1et0ao2 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
                `.framer-iAQrp .framer-1hx6jc4-container { flex: none; height: auto; left: 1px; position: absolute; top: 3px; width: auto; z-index: 1; }`,
                `.framer-iAQrp .framer-ain5kn-container { flex: none; height: auto; left: 43px; position: absolute; top: 3px; width: auto; z-index: 1; }`,
                `.framer-iAQrp .framer-1ufuq4u { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 120px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 120px; }`,
                `.framer-iAQrp .framer-15d4te8 { aspect-ratio: 2 / 1; bottom: 18px; flex: none; height: var(--framer-aspect-ratio-supported, 34px); left: 50%; overflow: visible; position: absolute; width: 68px; z-index: 1; }`,
                `.framer-iAQrp .framer-2fwqib { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 120px); overflow: visible; position: relative; width: 120px; }`,
                `.framer-iAQrp .framer-7zn0mf { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 80px); position: relative; width: 80px; }`,
                `.framer-iAQrp .framer-17rgshv { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 60px); position: relative; width: 60px; }`,
            ]),
            (ai = K(ri, ii, `framer-iAQrp`)),
            (ai.displayName = `Footer: Reachout Text`),
            (ai.defaultProps = { height: 600, width: 178 }),
            N(ai, { variant: { options: [`MmgqVFurI`, `gipsB7VcH`, `yhAE4rE9i`, `zEXnaqk6s`, `xMI0uSncy`], optionTitles: [`Variant 1`, `medium`, `Small`, `medium left`, `Small left`], title: `Variant`, type: T.Enum } }),
            M(ai, [{ explicitInter: !0, fonts: [{ family: `Mango Grotesque Extra Bold`, source: `custom`, url: `https://framerusercontent.com/assets/8KzAecyKuBSYwpL42QqGoo75yk.woff2` }] }, ...Gr, ...Kr], {
                supportsExplicitInterCodegen: !0,
            });
    });
function si(e, ...t) {
    let n = {};
    return t?.forEach((t) => t && Object.assign(n, e[t])), n;
}
var ci,
    li,
    ui,
    di,
    fi,
    pi,
    mi,
    hi,
    gi,
    _i,
    vi,
    yi,
    bi,
    xi = e(() => {
        i(),
            B(),
            b(),
            a(),
            Vn(),
            (ci = I(zn)),
            (li = [`UOrsMq2Oy`, `VCqelXjE_`, `igKSWOEA_`]),
            (ui = `framer-LG9dm`),
            (di = { igKSWOEA_: `framer-v-pdc6fh`, UOrsMq2Oy: `framer-v-18dldoz`, VCqelXjE_: `framer-v-izxj46` }),
            (fi = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
            (pi = ({ value: e, children: t }) => {
                let n = u(y),
                    r = e ?? n.transition,
                    i = d(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
                return c(y.Provider, { value: i, children: t });
            }),
            (mi = S.create(g)),
            (hi = { "Variant 1": `UOrsMq2Oy`, "Variant 2": `VCqelXjE_`, "Variant 3": `igKSWOEA_` }),
            (gi = ({ height: e, id: t, width: n, ...r }) => ({ ...r, variant: hi[r.variant] ?? r.variant ?? `UOrsMq2Oy` })),
            (_i = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
            (vi = n(function (e, t) {
                let n = l(null),
                    i = t ?? n,
                    a = r(),
                    { activeLocale: o, setLocale: s } = U();
                V();
                let { style: u, className: d, layoutId: f, variant: m, ...h } = gi(e),
                    { baseVariant: g, classNames: _, clearLoadingGesture: y, gestureHandlers: b, gestureVariant: x, isLoading: C, setGestureState: T, setVariant: D, variants: O } = G({
                        cycleOrder: li,
                        defaultVariant: `UOrsMq2Oy`,
                        ref: i,
                        variant: m,
                        variantClassNames: di,
                    }),
                    k = _i(e, O),
                    A = [],
                    M = P(ui, ...A),
                    N = () => ![`VCqelXjE_`, `igKSWOEA_`].includes(g),
                    F = () => g === `VCqelXjE_`,
                    I = () => g === `igKSWOEA_`;
                return c(v, {
                    id: f ?? a,
                    children: c(mi, {
                        animate: O,
                        initial: !1,
                        children: c(pi, {
                            value: fi,
                            children: p(S.div, {
                                ...h,
                                ...b,
                                className: P(M, `framer-18dldoz`, d, _),
                                "data-framer-name": `Variant 1`,
                                layoutDependency: k,
                                layoutId: `UOrsMq2Oy`,
                                ref: i,
                                style: { ...u },
                                ...si({ igKSWOEA_: { "data-framer-name": `Variant 3` }, VCqelXjE_: { "data-framer-name": `Variant 2` } }, g, x),
                                children: [
                                    N() &&
                                        c(w, {
                                            children: c(j, {
                                                className: `framer-m5q38r-container`,
                                                "data-framer-name": `L`,
                                                isAuthoredByUser: !0,
                                                isModuleExternal: !0,
                                                
                                                layoutDependency: k,
                                                layoutId: `MFoG9luCl-container`,
                                                name: `L`,
                                                nodeId: `MFoG9luCl`,
                                                rendersWithMotion: !0,
                                                scopeId: `zcRjGMsHm`,
                                                children: c(zn, {
                                                    balance: !0,
                                                    color: { angle: 0, color: `rgb(19, 19, 19)`, endColor: `rgb(255, 255, 255)`, mode: `solid`, startColor: `rgb(0, 0, 0)` },
                                                    decoration: `none`,
                                                    font: { fontFamily: `"Delight Regular", "Delight Regular Placeholder", sans-serif`, fontSize: `16px`, letterSpacing: `0.02em`, lineHeight: `130%`, textAlign: `center` },
                                                    height: `100%`,
                                                    id: `MFoG9luCl`,
                                                    layerAlign: `middle`,
                                                    layerGap: 0,
                                                    layers: [
                                                        c(E, {
                                                            background: {
                                                                alt: ``,
                                                                fit: `fill`,
                                                                intrinsicHeight: 256,
                                                                intrinsicWidth: 256,
                                                                pixelHeight: 256,
                                                                pixelWidth: 256,
                                                                src: ``,
                                                            },
                                                            className: `framer-5yfmd1`,style: { display: "none" },

                                                            "data-framer-name": `ThinkingFace-ezgif.com-apng-to-webp-converter`,
                                                            layoutDependency: k,style: { display: "none" },

                                                            layoutId: `OY6JnTMXt`,
                                                        }),
                                                        c(E, {
                                                            background: {
                                                                alt: ``,
                                                                fit: `fill`,
                                                                intrinsicHeight: 256,
                                                                intrinsicWidth: 256,
                                                                pixelHeight: 256,
                                                                pixelWidth: 256,
                                                                src: `  `,
                                                            },
                                                            className: `framer-1brmd90`,style: { display: "none" },

                                                            "data-framer-name": `HotBeverage-ezgif.com-apng-to-webp-converter`,
                                                            layoutDependency: k,
                                                            layoutId: `RdsaQWrnD`,
                                                        }),
                                                        c(E, {
                                                            background: {
                                                                alt: ``,
                                                                fit: `fill`,
                                                                intrinsicHeight: 256,
                                                                intrinsicWidth: 256,
                                                                pixelHeight: 256,
                                                                pixelWidth: 256,
                                                                src: `  `,
                                                            },
                                                            className: `framer-npfime`,style: { display: "none" },

                                                            "data-framer-name": `SparklingHeart-ezgif.com-apng-to-webp-converter`,
                                                            layoutDependency: k,
                                                            layoutId: `pD4fv_eR4`,
                                                        }),
                                                        c(E, {
                                                            background: {
                                                                alt: ``,
                                                                fit: `fill`,
                                                                intrinsicHeight: 256,
                                                                intrinsicWidth: 256,
                                                                pixelHeight: 256,
                                                                pixelWidth: 256,
                                                                src: `  `,
                                                            },
                                                            className: `framer-1ufcn8q`,style: { display: "none" },

                                                            "data-framer-name": `ManShruggingMediumSkinTone-ezgif.com-apng-to-webp-converter`,
                                                            layoutDependency: k,
                                                            layoutId: `QXD5d7QhG`,
                                                        }),
                                                        c(E, {
                                                            background: {
                                                                alt: ``,
                                                                fit: `fill`,
                                                                intrinsicHeight: 256,
                                                                intrinsicWidth: 256,
                                                                pixelHeight: 256,
                                                                pixelWidth: 256,
                                                                src: `  `,
                                                            },
                                                            className: `framer-1ujycfu`,style: { display: "none" },

                                                            "data-framer-name": `Laptop 3d-ezgif.com-apng-to-webp-converter`,
                                                            layoutDependency: k,style: { display: "none" },

                                                            layoutId: `bdeyRG3HS`,
                                                        }),
                                                    ],
                                                    layoutId: `MFoG9luCl`,
                                                    name: `L`,
                                                    slot: `[]`,
                                                    tag: `h1`,
                                                    text: ` Developed through rigorous analysis and a commitment to excellence. We appreciate your engagement. Thank you for your time and attention.`,
                                                    transform: `none`,
                                                    userSelect: !0,
                                                    width: `100%`,
                                                }),
                                            }),
                                        }),
                                    F() &&
                                        c(w, {
                                            children: c(j, {
                                                className: `framer-1e6wfk4-container`,
                                                "data-framer-name": `M`,
                                                isAuthoredByUser: !0,
                                                isModuleExternal: !0,
                                                layoutDependency: k,
                                                layoutId: `lOOl5v_bP-container`,
                                                name: `M`,
                                                nodeId: `lOOl5v_bP`,
                                                rendersWithMotion: !0,
                                                scopeId: `zcRjGMsHm`,
                                                children: c(zn, {
                                                    balance: !1,
                                                    color: { angle: 0, color: `rgb(19, 19, 19)`, endColor: `rgb(255, 255, 255)`, mode: `solid`, startColor: `rgb(0, 0, 0)` },
                                                    decoration: `none`,
                                                    font: { fontFamily: `"Delight Regular", "Delight Regular Placeholder", sans-serif`, fontSize: `14px`, letterSpacing: `0.02em`, lineHeight: `120%` },
                                                    height: `100%`,
                                                    id: `lOOl5v_bP`,
                                                    layerAlign: `middle`,
                                                    layerGap: 0,
                                                    layers: [
                                                        c(E, {
                                                            background: {
                                                                alt: ``,
                                                                fit: `fill`,
                                                                intrinsicHeight: 256,
                                                                intrinsicWidth: 256,
                                                                pixelHeight: 256,
                                                                pixelWidth: 256,
                                                                src: `  `,
                                                            },
                                                            className: `framer-ihyhjf`,
                                                            "data-framer-name": `ThinkingFace-ezgif.com-apng-to-webp-converter`,
                                                            layoutDependency: k,
                                                            layoutId: `kvROKRiDu`,
                                                            style: { display: "none" }
                                                        }),
                                                        c(E, {
                                                            background: {
                                                                alt: ``,
                                                                fit: `fill`,
                                                                intrinsicHeight: 256,
                                                                intrinsicWidth: 256,
                                                                pixelHeight: 256,
                                                                pixelWidth: 256,
                                                                src: `  `,
                                                            },
                                                            className: `framer-1c96q9y`,
                                                            "data-framer-name": `SparklingHeart-ezgif.com-apng-to-webp-converter`,
                                                            layoutDependency: k,
                                                            layoutId: `wCzXfdrR0`,
                                                        }),
                                                        c(E, {
                                                            background: {
                                                                alt: ``,
                                                                fit: `fill`,
                                                                intrinsicHeight: 256,
                                                                intrinsicWidth: 256,
                                                                pixelHeight: 256,
                                                                pixelWidth: 256,
                                                                src: `  `,
                                                            },
                                                            className: `framer-130s1ws`,
                                                            "data-framer-name": `HotBeverage-ezgif.com-apng-to-webp-converter`,
                                                            layoutDependency: k,
                                                            layoutId: `JYjF3S3_S`,
                                                        }),
                                                        c(E, {
                                                            background: {
                                                                alt: ``,
                                                                fit: `fill`,
                                                                intrinsicHeight: 256,
                                                                intrinsicWidth: 256,
                                                                pixelHeight: 256,
                                                                pixelWidth: 256,
                                                                src: `  `,
                                                            },
                                                            className: `framer-1kuoray`,
                                                            "data-framer-name": `ManShruggingMediumSkinTone-ezgif.com-apng-to-webp-converter`,
                                                            layoutDependency: k,
                                                            layoutId: `BWqIt9VnS`,
                                                        }),
                                                        c(E, {
                                                            background: {
                                                                alt: ``,
                                                                fit: `fill`,
                                                                intrinsicHeight: 256,
                                                                intrinsicWidth: 256,
                                                                pixelHeight: 256,
                                                                pixelWidth: 256,
                                                                src: `  `,
                                                            },
                                                            className: `framer-ow1eyw`,
                                                            "data-framer-name": `Laptop 3d-ezgif.com-apng-to-webp-converter`,
                                                            layoutDependency: k,
                                                            layoutId: `O82f2ZaAv`,
                                                        }),
                                                    ],
                                                    layoutId: `lOOl5v_bP`,
                                                    name: `M`,
                                                    slot: `[]`,
                                                    tag: `h1`,
                                                    text: `Developed through rigorous analysis and a commitment to excellence. We appreciate your engagement. Thank you for your time and attention.`,
                                                    transform: `none`,
                                                    userSelect: !0,
                                                    width: `100%`,
                                                }),
                                            }),
                                        }),
                                    I() &&
                                        c(w, {
                                            children: c(j, {
                                                className: `framer-1cq1ouz-container`,
                                                "data-framer-name": `S`,
                                                isAuthoredByUser: !0,
                                                isModuleExternal: !0,
                                                layoutDependency: k,
                                                layoutId: `KtcihIzUQ-container`,
                                                name: `S`,
                                                nodeId: `KtcihIzUQ`,
                                                rendersWithMotion: !0,
                                                scopeId: `zcRjGMsHm`,
                                                children: c(zn, {
                                                    balance: !1,
                                                    color: { angle: 0, color: `rgb(19, 19, 19)`, endColor: `rgb(255, 255, 255)`, mode: `solid`, startColor: `rgb(0, 0, 0)` },
                                                    decoration: `none`,
                                                    font: { fontFamily: `"Delight Regular", "Delight Regular Placeholder", sans-serif`, fontSize: `14px`, letterSpacing: `0.02em`, lineHeight: `130%`, textAlign: `center` },
                                                    height: `100%`,
                                                    id: `KtcihIzUQ`,
                                                    layerAlign: `middle`,
                                                    layerGap: 0,
                                                    layers: [
                                                        c(E, {
                                                            background: {
                                                                alt: ``,
                                                                fit: `fill`,
                                                                intrinsicHeight: 256,
                                                                intrinsicWidth: 256,
                                                                pixelHeight: 256,
                                                                pixelWidth: 256,
                                                                src: `  `,
                                                            },
                                                            className: `framer-5yfmd1`,style: { display: "none" },

                                                            "data-framer-name": `ThinkingFace-ezgif.com-apng-to-webp-converter`,
                                                            layoutDependency: k,
                                                            layoutId: `OY6JnTMXt`,
                                                        }),
                                                        c(E, {
                                                            background: {
                                                                alt: ``,
                                                                fit: `fill`,
                                                                intrinsicHeight: 256,
                                                                intrinsicWidth: 256,
                                                                pixelHeight: 256,
                                                                pixelWidth: 256,
                                                                src: `  `,
                                                            },
                                                            className: `framer-1brmd90`,style: { display: "none" },

                                                            "data-framer-name": `HotBeverage-ezgif.com-apng-to-webp-converter`,
                                                            layoutDependency: k,
                                                            layoutId: `RdsaQWrnD`,
                                                        }),
                                                        c(E, {
                                                            background: {
                                                                alt: ``,
                                                                fit: `fill`,
                                                                intrinsicHeight: 256,
                                                                intrinsicWidth: 256,
                                                                pixelHeight: 256,
                                                                pixelWidth: 256,
                                                                src: `  `,
                                                            },
                                                            className: `framer-npfime`,style: { display: "none" },

                                                            "data-framer-name": `SparklingHeart-ezgif.com-apng-to-webp-converter`,
                                                            layoutDependency: k,
                                                            layoutId: `pD4fv_eR4`,
                                                        }),
                                                        c(E, {
                                                            background: {
                                                                alt: ``,
                                                                fit: `fill`,
                                                                intrinsicHeight: 256,
                                                                intrinsicWidth: 256,
                                                                pixelHeight: 256,
                                                                pixelWidth: 256,
                                                                src: `  `,
                                                            },
                                                            className: `framer-1ufcn8q`,style: { display: "none" },

                                                            "data-framer-name": `ManShruggingMediumSkinTone-ezgif.com-apng-to-webp-converter`,
                                                            layoutDependency: k,
                                                            layoutId: `QXD5d7QhG`,
                                                        }),
                                                        c(E, {
                                                            background: {
                                                                alt: ``,
                                                                fit: `fill`,
                                                                intrinsicHeight: 256,
                                                                intrinsicWidth: 256,
                                                                pixelHeight: 256,
                                                                pixelWidth: 256,
                                                                src: `  `,
                                                            },
                                                            className: `framer-1ujycfu`,style: { display: "none" },

                                                            "data-framer-name": `Laptop 3d-ezgif.com-apng-to-webp-converter`,
                                                            layoutDependency: k,
                                                            layoutId: `bdeyRG3HS`,
                                                        }),
                                                    ],
                                                    layoutId: `KtcihIzUQ`,
                                                    name: `S`,
                                                    slot: `[]`,
                                                    tag: `h1`,
                                                    text: ` Developed through rigorous analysis and a commitment to excellence. We appreciate your engagement. Thank you for your time and attention.`,
                                                    transform: `none`,
                                                    userSelect: !0,
                                                    width: `100%`,
                                                }),
                                            }),
                                        }),
                                ],
                            }),
                        }),
                    }),
                });
            })),
            (yi = [
                `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
                `.framer-LG9dm.framer-sdawyn, .framer-LG9dm .framer-sdawyn { display: block; }`,
                `.framer-LG9dm.framer-18dldoz { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: 50px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 700px; }`,
                `.framer-LG9dm .framer-m5q38r-container, .framer-LG9dm .framer-1e6wfk4-container, .framer-LG9dm .framer-1cq1ouz-container { flex: none; height: auto; position: relative; width: auto; }`,
                `.framer-LG9dm .framer-5yfmd1, .framer-LG9dm .framer-1brmd90, .framer-LG9dm .framer-npfime, .framer-LG9dm .framer-1ufcn8q, .framer-LG9dm .framer-1ujycfu { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 20px); overflow: visible; position: relative; width: 20px; }`,
                `.framer-LG9dm .framer-ihyhjf, .framer-LG9dm .framer-1c96q9y, .framer-LG9dm .framer-130s1ws, .framer-LG9dm .framer-1kuoray, .framer-LG9dm .framer-ow1eyw { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 14px); overflow: visible; position: relative; width: 14px; display:none;}`,
                `.framer-LG9dm.framer-v-pdc6fh.framer-18dldoz { width: 626px; }`,
            ]),
            (bi = K(vi, yi, `framer-LG9dm`)),
            (bi.displayName = `Footer Note: Thanks`),
            (bi.defaultProps = { height: 50, width: 700 }),
            N(bi, { variant: { options: [`UOrsMq2Oy`, `VCqelXjE_`, `igKSWOEA_`], optionTitles: [`Variant 1`, `Variant 2`, `Variant 3`], title: `Variant`, type: T.Enum } }),
            M(bi, [{ explicitInter: !0, fonts: [{ family: `Delight Regular`, source: `custom`, url: `https://framerusercontent.com/assets/pR4AjJlW0OWZiykVbHWQPugHiVk.woff2` }] }, ...ci], { supportsExplicitInterCodegen: !0 });
    });
function Si(e, ...t) {
    let n = {};
    return t?.forEach((t) => t && Object.assign(n, e[t])), n;
}
var Ci,
    wi,
    Ti,
    Ei,
    Di,
    Oi,
    ki,
    Ai,
    ji,
    Mi,
    Ni,
    Pi,
    Fi,
    Ii,
    Li,
    Ri,
    zi,
    Bi,
    Vi = e(() => {
        i(),
            B(),
            b(),
            a(),
            Pn(),
            Rn(),
            Zt(),
            nr(),
            Br(),
            oi(),
            xi(),
            (Ci = I(ai)),
            (wi = I(tr)),
            (Ti = I(Xt)),
            (Ei = I(zr)),
            (Di = I(bi)),
            (Oi = [`gKZWOGzXO`, `a5d826QCP`, `cYxbgb5zu`]),
            (ki = `framer-XTkyo`),
            (Ai = { a5d826QCP: `framer-v-u6ogfp`, cYxbgb5zu: `framer-v-i796mb`, gKZWOGzXO: `framer-v-166m08c` }),
            (ji = { bounce: 0.1, delay: 0, duration: 1, type: `spring` }),
            (Mi = (e, t) => `translate(-50%, -50%) ${t}`),
            (Ni = ({ value: e, children: t }) => {
                let n = u(y),
                    r = e ?? n.transition,
                    i = d(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
                return c(y.Provider, { value: i, children: t });
            }),
            (Pi = S.create(g)),
            (Fi = { "Sticker - Left": `cYxbgb5zu`, Desktop: `gKZWOGzXO`, Tablet: `a5d826QCP` }),
            (Ii = ({ backToTop: e, height: t, id: n, width: r, ...i }) => ({ ...i, iHqoTUVyw: e ?? i.iHqoTUVyw, variant: Fi[i.variant] ?? i.variant ?? `gKZWOGzXO` })),
            (Li = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
            (Ri = n(function (e, t) {
                let n = l(null),
                    i = t ?? n,
                    a = r(),
                    { activeLocale: o, setLocale: s } = U(),
                    u = V(),
                    { style: d, className: f, layoutId: m, variant: h, iHqoTUVyw: _, ...y } = Ii(e),
                    { baseVariant: b, classNames: x, clearLoadingGesture: C, gestureHandlers: T, gestureVariant: E, isLoading: O, setGestureState: M, setVariant: N, variants: F } = G({
                        cycleOrder: Oi,
                        defaultVariant: `gKZWOGzXO`,
                        ref: i,
                        variant: h,
                        variantClassNames: Ai,
                    }),
                    I = Li(e, F),
                    L = [Ln, Nn],
                    R = P(ki, ...L),
                    z = () => ![`a5d826QCP`, `cYxbgb5zu`].includes(b),
                    B = () => !![`a5d826QCP`, `cYxbgb5zu`].includes(b);
                return c(v, {
                    id: m ?? a,
                    children: c(Pi, {
                        animate: F,
                        initial: !1,
                        children: c(Ni, {
                            value: ji,
                            children: p(S.div, {
                                ...y,
                                ...T,
                                className: P(R, `framer-166m08c`, f, x),
                                "data-framer-name": `Desktop`,
                                layoutDependency: I,
                                layoutId: `gKZWOGzXO`,
                                ref: i,
                                style: { backgroundColor: `rgb(245, 245, 245)`, ...d },
                                ...Si({ a5d826QCP: { "data-framer-name": `Tablet` }, cYxbgb5zu: { "data-framer-name": `Sticker - Left` } }, b, E),
                                children: [
                                    c(S.div, {
                                        className: `framer-14iebyq`,
                                        id: `contactsection`,
                                        layoutDependency: I,
                                        layoutId: `v4Otjzafg`,
                                        children: p(S.div, {
                                            className: `framer-140wge1`,
                                            "data-framer-name": `Group 8599`,
                                            layoutDependency: I,
                                            layoutId: `knrgKCxGx`,
                                            children: [
                                                p(S.div, {
                                                    className: `framer-1ocef54`,
                                                    layoutDependency: I,
                                                    layoutId: `ei2Zm6Whb`,
                                                    children: [
                                                        c(k, {
                                                            __fromCanvasComponent: !0,
                                                            children: c(g, {
                                                                children: c(S.h5, {
                                                                    className: `framer-styles-preset-cl58b8`,
                                                                    "data-styles-preset": `uyx206U5p`,
                                                                    style: { "--framer-text-alignment": `center`, "--framer-text-color": `var(--extracted-1lwpl3i, rgb(19, 19, 19))` },
                                                                    children: ` `,
                                                                }),
                                                            }),
                                                            className: `framer-1pgiab1`,
                                                            "data-framer-name": ` `,
                                                            fonts: [`Inter`],
                                                            layoutDependency: I,
                                                            layoutId: `yJrOZsGPf`,
                                                            style: { "--extracted-1lwpl3i": `rgb(19, 19, 19)`, "--framer-paragraph-spacing": `0px` },
                                                            verticalAlignment: `top`,
                                                            withExternalLayout: !0,
                                                            ...Si(
                                                                {
                                                                    cYxbgb5zu: {
                                                                        children: c(g, {
                                                                            children: c(S.h5, {
                                                                                className: `framer-styles-preset-cl58b8`,
                                                                                "data-styles-preset": `uyx206U5p`,
                                                                                style: { "--framer-text-alignment": `left`, "--framer-text-color": `var(--extracted-1lwpl3i, rgb(19, 19, 19))` },
                                                                                children: ` `,
                                                                            }),
                                                                        }),
                                                                    },
                                                                },
                                                                b,
                                                                E
                                                            ),
                                                        }),
                                                        c(w, {
                                                            height: 600,
                                                            width: `min((${u?.width || `100vw`} - 96px) * 0.9, 1000px)`,
                                                            y: (u?.y || 0) + 0 + ((u?.height || 960) - 0 - 960 + 0 + 0) + 48 + -314.6 + 24 + 0 + 0 + 45.6,
                                                            ...Si(
                                                                {
                                                                    a5d826QCP: { y: (u?.y || 0) + 0 + ((u?.height || 981.5) - 0 - 982 + 0 + 0) + 48 + -314.6 + 24 + 0 + 0 + 45.6 },
                                                                    cYxbgb5zu: { width: `min(${u?.width || `100vw`} - 32px, 1000px)`, y: (u?.y || 0) + 0 + ((u?.height || 815.5) - 0 - 816 + 0 + 0) + 24 + -450.6 + 24 + 0 + 0 + 45.6 },
                                                                },
                                                                b,
                                                                E
                                                            ),
                                                            children: c(j, {
                                                                className: `framer-1x1cqmb-container`,
                                                                layoutDependency: I,
                                                                layoutId: `xj9NNgKOA-container`,
                                                                nodeId: `xj9NNgKOA`,
                                                                rendersWithMotion: !0,
                                                                scopeId: `h8HwKROiq`,
                                                                children: c(ai, {
                                                                    height: `100%`,
                                                                    id: `xj9NNgKOA`,
                                                                    layoutId: `xj9NNgKOA`,
                                                                    style: { width: `100%` },
                                                                    variant: `MmgqVFurI`,
                                                                    width: `100%`,
                                                                    ...Si({ a5d826QCP: { variant: `gipsB7VcH` }, cYxbgb5zu: { variant: `xMI0uSncy` } }, b, E),
                                                                }),
                                                            }),
                                                        }),
                                                        c(w, {
                                                            height: 32,
                                                            width: `min((${u?.width || `100vw`} - 96px) * 0.9, 1000px)`,
                                                            y: (u?.y || 0) + 0 + ((u?.height || 960) - 0 - 960 + 0 + 0) + 48 + -314.6 + 24 + 0 + 0 + 657.6,
                                                            ...Si(
                                                                {
                                                                    a5d826QCP: { y: (u?.y || 0) + 0 + ((u?.height || 981.5) - 0 - 982 + 0 + 0) + 48 + -314.6 + 24 + 0 + 0 + 657.6 },
                                                                    cYxbgb5zu: { width: `min(${u?.width || `100vw`} - 32px, 1000px)`, y: (u?.y || 0) + 0 + ((u?.height || 815.5) - 0 - 816 + 0 + 0) + 24 + -450.6 + 24 + 0 + 0 + 657.6 },
                                                                },
                                                                b,
                                                                E
                                                            ),
                                                            children: c(j, {
                                                                className: `framer-1k97q75-container`,
                                                                layoutDependency: I,
                                                                layoutId: `QCFyIsH2b-container`,
                                                                nodeId: `QCFyIsH2b`,
                                                                rendersWithMotion: !0,
                                                                scopeId: `h8HwKROiq`,
                                                                children: c(tr, {
                                                                    height: `100%`,
                                                                    id: `QCFyIsH2b`,
                                                                    layoutId: `QCFyIsH2b`,
                                                                    style: { width: `100%` },
                                                                    variant: `nK8QvKOAn`,
                                                                    width: `100%`,
                                                                    ...Si({ cYxbgb5zu: { variant: `qBiOct06L` } }, b, E),
                                                                }),
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                                p(S.div, {
                                                    className: `framer-1u0g4zo`,
                                                    "data-framer-name": `CTA`,
                                                    layoutDependency: I,
                                                    layoutId: `YGmsmRmU8`,
                                                    children: [
                                                        c(S.div, {
                                                            className: `framer-1pdzqek`,
                                                            layoutDependency: I,
                                                            layoutId: `ezun_pgFU`,
                                                            style: { borderBottomLeftRadius: 0, borderBottomRightRadius: 0, borderTopLeftRadius: 0, borderTopRightRadius: 0 },
                                                            variants: { cYxbgb5zu: { borderBottomLeftRadius: 200, borderBottomRightRadius: 200, borderTopLeftRadius: 200, borderTopRightRadius: 200 } },
                                                            children: c(w, {
                                                                height: 92,
                                                                y: (u?.y || 0) + 0 + ((u?.height || 960) - 0 - 960 + 0 + 0) + 48 + -314.6 + 24 + 729.6 + 0 + 0 + -4,
                                                                ...Si(
                                                                    {
                                                                        a5d826QCP: { y: (u?.y || 0) + 0 + ((u?.height || 981.5) - 0 - 982 + 0 + 0) + 48 + -314.6 + 24 + 729.6 + 0 + 0 + -4 },
                                                                        cYxbgb5zu: { y: (u?.y || 0) + 0 + ((u?.height || 815.5) - 0 - 816 + 0 + 0) + 24 + -450.6 + 24 + 729.6 + 0 + 0 + -4 },
                                                                    },
                                                                    b,
                                                                    E
                                                                ),
                                                                children: c(j, {
                                                                    className: `framer-a8ka6a-container meet-me-here`,
                                                                    layoutDependency: I,
                                                                    layoutId: `N3ZxZ3fz9-container`,
                                                                    nodeId: `N3ZxZ3fz9`,
                                                                    rendersWithMotion: !0,
                                                                    scopeId: `h8HwKROiq`,
                                                                    transformTemplate: Mi,
                                                                    children: c(Xt, {
                                                                        aKLLB10i3: `24px 48px 24px 48px`,
                                                                        cO_mGVWDB: `rgb(0, 0, 0)`,
                                                                        height: `100%`,
                                                                        HmuqdYPcL: !0,
                                                                        id: `N3ZxZ3fz9`,
                                                                        IvTGu1hfX: ``,
                                                                        jtitP8ffZ: 2,
                                                                        k23akfVrc: 0,
                                                                        layoutId: `N3ZxZ3fz9`,
                                                                        meCbsYmGR: 0,
                                                                        ndUu0pbiv: ``,
                                                                        NLEM4LU4C: !1,
                                                                        nzqTq0Y6K: `rgb(255, 255, 255)`,
                                                                        oNZz4rwkc: ``,
                                                                        sRrAucc9a: { borderColor: `rgb(0, 0, 0)`, borderStyle: `solid`, borderWidth: 0 },
                                                                        U6yLJvTDC: `butt`,
                                                                        variant: `s2QYckn8i`,
                                                                        VLNSZqzsR: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M19.2401 7.90625L27.3334 15.9996L19.2401 24.0929" stroke="#F5F5F5" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/> <path d="M4.66663 16H27.1066" stroke="#F5F5F5" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/> </svg>`,
                                                                        vmOPFsvOW: `rgb(255, 255, 255)`,
                                                                        width: `100%`,
                                                                        YAlo1ESSl: `100px`,
                                                                        YXyYmCES5: `miter`,
                                                                        ZN3dhuSgc: `Let's Meet`,
                                                                        ...Si({ cYxbgb5zu: { aKLLB10i3: `16px 72px 16px 72px`, cO_mGVWDB: `rgb(19, 19, 19)` } }, b, E),
                                                                    }),
                                                                }),
                                                            }),
                                                        }),
                                                      c(k, {
  __fromCanvasComponent: !0,
  style: { pointerEvents: "auto" },
  children: c(g, {
    style: { pointerEvents: "auto" },
    children: c(S.p, {
      className: `framer-styles-preset-1conq5k`,
      "data-styles-preset": `gbd6XYWXs`,
      style: {
        "--framer-text-alignment": `center`,
        "--framer-text-color": `var(--extracted-r6o4lv, rgb(19, 19, 19))`,
        cursor: "pointer",
        pointerEvents: "auto",
        userSelect: "none",
        textDecoration: "none", // removes underline
        transition: "opacity 0.3s ease",
      },
      onClick: () => window.open("terms&condiction.html", "_self"), // your link
      onMouseEnter: (e) => (e.target.style.opacity = 0.7),
      onMouseLeave: (e) => (e.target.style.opacity = 1),
      children: `Terms & Conditions`,
    }),
  }),
  className: `framer-628w4w`,
  "data-framer-name": ` `,
  fonts: [`Inter`],
  layoutDependency: I,
  layoutId: `ZPzRmbDUI`,
  style: {
    "--extracted-r6o4lv": `rgb(19, 19, 19)`,
    "--framer-paragraph-spacing": `0px`,
    opacity: 0.8,
    pointerEvents: "auto",
  },
  verticalAlignment: `top`,
  withExternalLayout: !0,
})
,
                                                    ],
                                                }),
                                                c(S.div, {
                                                    className: `framer-1cnx47x`,
                                                    "data-framer-name": `Social`,
                                                    style: { display: "none" },
                                                    layoutDependency: I,
                                                    layoutId: `eU0HKs7dV`,
                                                    children: c(w, {
                                                        height: 77,
                                                        y: (u?.y || 0) + 0 + ((u?.height || 960) - 0 - 960 + 0 + 0) + 48 + -314.6 + 24 + 986.6 + 0 + -14.5,
                                                        ...Si(
                                                            {
                                                                a5d826QCP: { y: (u?.y || 0) + 0 + ((u?.height || 981.5) - 0 - 982 + 0 + 0) + 48 + -314.6 + 24 + 986.6 + 0 + -14.5 },
                                                                cYxbgb5zu: { y: (u?.y || 0) + 0 + ((u?.height || 815.5) - 0 - 816 + 0 + 0) + 24 + -450.6 + 24 + 986.6 + 0 + -14.5 },
                                                            },
                                                            b,
                                                            E
                                                        ),
                                                        children: c(j, {
                                                            className: `framer-suy7ms-container`,
                                                            layoutDependency: I,
                                                            layoutId: `eajBDefKA-container`,
                                                            nodeId: `eajBDefKA`,
                                                            rendersWithMotion: !0,
                                                            scopeId: `h8HwKROiq`,
                                                            style: { scale: 0.8, display: "none" },  // 👈 added here
                                                            style: { scale: 0.8 },
                                                            children: c(zr, {
                                                                AttoKB5hh: `#`,
                                                                fs7Djptuu: `#`,
                                                                height: `100%`,
                                                                id: `eajBDefKA`,
                                                                layoutId: `eajBDefKA`,
                                                                PnyjYm0XM: `#`,
                                                                style: { height: `100%` },
                                                                variant: `eV8IPykZD`,
                                                                width: `100%`,
                                                                YXMqM43IZ: ``,
                                                            }),
                                                        }),
                                                    }),
                                                }),
                                            ],
                                        }),
                                    }),
                                    c(S.div, {
                                        className: `framer-1cw4d0a`,
                                        layoutDependency: I,
                                        layoutId: `CqhNOnZuc`,
                                        children: p(S.div, {
                                            className: `framer-1a6kw3s`,
                                            "data-border": !0,
                                            layoutDependency: I,
                                            layoutId: `k8DrtRPAs`,
                                            style: {
                                                "--border-bottom-width": `0px`,
                                                "--border-color": `rgba(19, 19, 19, 0.3)`,
                                                "--border-left-width": `0px`,
                                                "--border-right-width": `0px`,
                                                "--border-style": `solid`,
                                                "--border-top-width": `2px`,
                                            },
                                            children: [
                                                z() &&
                                                    c(k, {
                                                        __fromCanvasComponent: !0,
                                                        children: c(g, { children: c(S.p, { className: `framer-styles-preset-1conq5k`, "data-styles-preset": `gbd6XYWXs`, children: `© Copyright Designik Agency` }) }),
                                                        className: `framer-tbw6q1`,
                                                        "data-framer-name": `© Copyright Designik Agency`,
                                                        fonts: [`Inter`],
                                                        layoutDependency: I,
                                                        layoutId: `wBmcpnVUh`,
                                                        style: { "--framer-paragraph-spacing": `0px` },
                                                        verticalAlignment: `top`,
                                                        withExternalLayout: !0,
                                                    }),
                                                c(w, {
                                                    height: 50,
                                                    y: (u?.y || 0) + 0 + ((u?.height || 960) - 0 - 960 + 864 + 0) + 0 + 0 + 23,
                                                    ...Si(
                                                        {
                                                            a5d826QCP: { width: `calc(${u?.width || `100vw`} - 128px)`, y: (u?.y || 0) + 0 + ((u?.height || 981.5) - 0 - 982 + 864 + 0) + 0 + 0 + 16 + 0 },
                                                            cYxbgb5zu: { width: `calc(${u?.width || `100vw`} - 32px)`, y: (u?.y || 0) + 0 + ((u?.height || 815.5) - 0 - 816 + 670 + 0) + 0 + 0 + 32 + 0 },
                                                        },
                                                        b,
                                                        E
                                                    ),
                                                    children: c(j, {
                                                        className: `framer-15jf1ts-container`,
                                                        layoutDependency: I,
                                                        layoutId: `fJi18Myl6-container`,
                                                        nodeId: `fJi18Myl6`,
                                                        rendersWithMotion: !0,
                                                        scopeId: `h8HwKROiq`,
                                                        children: c(bi, {
                                                            height: `100%`,
                                                            id: `fJi18Myl6`,
                                                            layoutId: `fJi18Myl6`,
                                                            style: { height: `100%` },
                                                            variant: `UOrsMq2Oy`,
                                                            width: `100%`,
                                                            ...Si({ a5d826QCP: { style: { width: `100%` }, variant: `VCqelXjE_` }, cYxbgb5zu: { style: { width: `100%` }, variant: `igKSWOEA_` } }, b, E),
                                                        }),
                                                    }),
                                                }),
                                                B() &&
                                                    p(S.div, {
                                                        className: `framer-1avsmwl`,
                                                        layoutDependency: I,
                                                        layoutId: `sSpx8exfM`,
                                                        children: [
                                                            B() &&
                                                                c(k, {
                                                                    __fromCanvasComponent: !0,
                                                                    children: c(g, { children: c(S.p, { className: `framer-styles-preset-1conq5k`, "data-styles-preset": `gbd6XYWXs`, children: `© Copyright Designik Agency` }) }),
                                                                    className: `framer-crnck9`,
                                                                    "data-framer-name": `© Copyright Designik Agency`,
                                                                    fonts: [`Inter`],
                                                                    layoutDependency: I,
                                                                    layoutId: `Ss3v2cxOT`,
                                                                    style: { "--framer-paragraph-spacing": `0px` },
                                                                    verticalAlignment: `top`,
                                                                    withExternalLayout: !0,
                                                                }),
                                                            B() &&
                                                                c(D, {
                                                                    href: { hash: `:ZiJw5ykaT`, webPageId: `augiA20Il` },
                                                                    motionChild: !0,
                                                                    nodeId: `GNBZdPVl_`,
                                                                    openInNewTab: !1,
                                                                    scopeId: `h8HwKROiq`,
                                                                    smoothScroll: !0,
                                                                    children: p(S.a, {
                                                                        className: `framer-mqe1z8 framer-1hb1o1w`,
                                                                        "data-framer-name": `Group 8600`,
                                                                        layoutDependency: I,
                                                                        layoutId: `GNBZdPVl_`,
                                                                        children: [
                                                                            c(k, {
                                                                                __fromCanvasComponent: !0,
                                                                                children: c(g, { children: c(S.p, { className: `framer-styles-preset-1conq5k`, "data-styles-preset": `gbd6XYWXs`, children: `Back to top` }) }),
                                                                                className: `framer-ff3amr`,
                                                                                "data-framer-name": `© Copyright Designik Agency`,
                                                                                fonts: [`Inter`],
                                                                                layoutDependency: I,
                                                                                layoutId: `L45GYmKf6`,
                                                                                style: { "--framer-paragraph-spacing": `0px` },
                                                                                verticalAlignment: `top`,
                                                                                withExternalLayout: !0,
                                                                            }),
                                                                            c(S.div, {
                                                                                className: `framer-1reqe9h`,
                                                                                "data-framer-name": `vuesax/linear/arrow-up`,
                                                                                layoutDependency: I,
                                                                                layoutId: `oY3rMIvtU`,
                                                                                children: c(A, {
                                                                                    className: `framer-1popdcd`,
                                                                                    "data-framer-name": `vuesax/linear/arrow-up`,
                                                                                    layout: `position`,
                                                                                    layoutDependency: I,
                                                                                    layoutId: `XlMwvpjbi`,
                                                                                    opacity: 1,
                                                                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16"><path d="M 12.047 6.38 L 8 2.333 L 3.953 6.38" fill="transparent" stroke="rgb(19, 19, 19)" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 8 13.667 L 8 2.447" fill="transparent" stroke="rgb(19, 19, 19)" stroke-linecap="round" stroke-linejoin="round"></path></svg>`,
                                                                                    svgContentId: 11098541955,
                                                                                    withExternalLayout: !0,
                                                                                }),
                                                                            }),
                                                                        ],
                                                                    }),
                                                                }),
                                                        ],
                                                    }),
                                                z() &&
                                                    c(D, {
                                                        href: _,
                                                        motionChild: !0,
                                                        nodeId: `pJ83L0igN`,
                                                        openInNewTab: !1,
                                                        scopeId: `h8HwKROiq`,
                                                        smoothScroll: !0,
                                                        children: p(S.a, {
                                                            className: `framer-cisv5z framer-1hb1o1w`,
                                                            "data-framer-name": `Group 8600`,
                                                            layoutDependency: I,
                                                            layoutId: `pJ83L0igN`,
                                                            children: [
                                                                c(k, {
                                                                    __fromCanvasComponent: !0,
                                                                    children: c(g, { children: c(S.p, { className: `framer-styles-preset-1conq5k`, "data-styles-preset": `gbd6XYWXs`, children: `Back to top ` }) }),
                                                                    className: `framer-1gqo8ia`,
                                                                    "data-framer-name": `© Copyright Designik Agency`,
                                                                    fonts: [`Inter`],
                                                                    layoutDependency: I,
                                                                    layoutId: `lWTyLSqMG`,
                                                                    style: { "--framer-paragraph-spacing": `0px` },
                                                                    verticalAlignment: `top`,
                                                                    withExternalLayout: !0,
                                                                }),
                                                                c(S.div, {
                                                                    className: `framer-1a6m2s0`,
                                                                    "data-framer-name": `vuesax/linear/arrow-up`,
                                                                    layoutDependency: I,
                                                                    layoutId: `UWlEWWbdi`,
                                                                    children: c(A, {
                                                                        className: `framer-czam46`,
                                                                        "data-framer-name": `vuesax/linear/arrow-up`,
                                                                        layout: `position`,
                                                                        layoutDependency: I,
                                                                        layoutId: `WGc3AD7uS`,
                                                                        opacity: 1,
                                                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M 18.07 9.57 L 12 3.5 L 5.93 9.57" fill="transparent" stroke-width="1.5" stroke="rgb(19, 19, 19)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 12 20.5 L 12 3.67" fill="transparent" stroke-width="1.5" stroke="rgb(19, 19, 19)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                                                                        svgContentId: 11826925722,
                                                                        withExternalLayout: !0,
                                                                    }),
                                                                }),
                                                            ],
                                                        }),
                                                    }),
                                            ],
                                        }),
                                    }),
                                ],
                            }),
                        }),
                    }),
                });
            })),
            (zi = [
                `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
                `.framer-XTkyo.framer-1hb1o1w, .framer-XTkyo .framer-1hb1o1w { display: block; }`,
                `.framer-XTkyo.framer-166m08c { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-end; min-height: calc(var(--framer-viewport-height, 100vh) * 1); overflow: hidden; padding: 0px; position: relative; width: 1728px; }`,
                `.framer-XTkyo .framer-14iebyq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 573px !important; justify-content: flex-end; overflow: visible; padding: 48px; position: relative; width: 100%; }`,
                `.framer-XTkyo .framer-140wge1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; max-width: 1000px; overflow: visible; padding: 24px 0px 24px 0px; position: relative; width: 90%; z-index: 9; }`,
                `.framer-XTkyo .framer-1ocef54 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; max-width: 1000px; overflow: visible; padding: 0px; pointer-events: auto; position: relative; width: 100%; z-index: 1; }`,
                `.framer-XTkyo .framer-1pgiab1 { flex: none; height: auto; pointer-events: none; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: -1; }`,
                `.framer-XTkyo .framer-1x1cqmb-container { flex: none; height: auto; pointer-events: none; position: relative; width: 100%; z-index: 1; }`,
                `.framer-XTkyo .framer-1k97q75-container { flex: none; height: auto; pointer-events: none; position: relative; width: 100%; z-index: -1; }`,
                `.framer-XTkyo .framer-1u0g4zo { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 292px; }`,
                `.framer-XTkyo .framer-1pdzqek { flex: none; height: 84px; overflow: visible; position: relative; width: 276px; }`,
                `.framer-XTkyo .framer-a8ka6a-container { flex: none; height: auto; left: 50%; position: absolute; top: 50%; width: auto; z-index: 1; }`,
                `.framer-XTkyo .framer-628w4w { flex: none; height: auto; pointer-events: none; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 1; }`,
                `.framer-XTkyo .framer-1cnx47x {display:none; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: 48px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 460px; z-index: 1; }`,
                `.framer-XTkyo .framer-suy7ms-container { flex: none; height: 77px; position: relative; width: auto; }`,
                `.framer-XTkyo .framer-1cw4d0a { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: visible; padding: 0px 48px 0px 48px; position: relative; width: 100%; z-index: 9; }`,
                `.framer-XTkyo .framer-1a6kw3s { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: 96px; justify-content: space-between; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
                `.framer-XTkyo .framer-tbw6q1, .framer-XTkyo .framer-crnck9, .framer-XTkyo .framer-ff3amr, .framer-XTkyo .framer-1gqo8ia { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
                `.framer-XTkyo .framer-15jf1ts-container { flex: none; height: 50px; position: relative; width: auto; }`,
                `.framer-XTkyo .framer-1avsmwl { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; min-height: 72px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
                `.framer-XTkyo .framer-mqe1z8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
                `.framer-XTkyo .framer-1reqe9h { aspect-ratio: 1 / 1; flex: none; gap: 0px; height: var(--framer-aspect-ratio-supported, 24px); overflow: visible; position: relative; width: 16px; }`,
                `.framer-XTkyo .framer-1popdcd { flex: none; height: 16px; left: 0px; position: absolute; top: 0px; width: 16px; }`,
                `.framer-XTkyo .framer-cisv5z { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
                `.framer-XTkyo .framer-1a6m2s0 { flex: none; gap: 0px; height: 24px; overflow: visible; position: relative; width: 24px; }`,
                `.framer-XTkyo .framer-czam46 { flex: none; height: 24px; left: 0px; position: absolute; top: 0px; width: 24px; }`,
                `.framer-XTkyo.framer-v-u6ogfp.framer-166m08c { min-height: calc(var(--framer-viewport-height, 100vh) * 0.6); }`,
                `.framer-XTkyo.framer-v-u6ogfp .framer-1a6kw3s { flex-direction: column; gap: 12px; height: min-content; justify-content: center; padding: 16px; }`,
                `.framer-XTkyo.framer-v-u6ogfp .framer-15jf1ts-container { height: auto; width: 100%; }`,
                `.framer-XTkyo.framer-v-u6ogfp .framer-1avsmwl { flex: none; min-height: unset; width: 100%; }`,
                `.framer-XTkyo.framer-v-u6ogfp .framer-1reqe9h, .framer-XTkyo.framer-v-i796mb .framer-1reqe9h { height: var(--framer-aspect-ratio-supported, 16px); }`,
                `.framer-XTkyo.framer-v-i796mb.framer-166m08c { width: 480px; }`,
                `.framer-XTkyo.framer-v-i796mb .framer-14iebyq { align-content: flex-start; align-items: flex-start; height: 670px; padding: 24px 16px 14px 16px; }`,
                `.framer-XTkyo.framer-v-i796mb .framer-140wge1 { align-content: flex-start; align-items: flex-start; width: 100%; }`,
                `.framer-XTkyo.framer-v-i796mb .framer-1u0g4zo, .framer-XTkyo.framer-v-i796mb .framer-1pdzqek, .framer-XTkyo.framer-v-i796mb .framer-1cnx47x { width: 100%; }`,
                `.framer-XTkyo.framer-v-i796mb .framer-a8ka6a-container { left: 50%; }`,
                `.framer-XTkyo.framer-v-i796mb .framer-628w4w { width: 292px; }`,
                `.framer-XTkyo.framer-v-i796mb .framer-1cw4d0a { padding: 0px 16px 0px 16px; }`,
                `.framer-XTkyo.framer-v-i796mb .framer-1a6kw3s { flex-direction: column; gap: 24px; height: min-content; justify-content: flex-start; padding: 32px 0px 16px 0px; }`,
                `.framer-XTkyo.framer-v-i796mb .framer-15jf1ts-container { height: auto; order: 0; width: 100%; }`,
                `.framer-XTkyo.framer-v-i796mb .framer-1avsmwl { flex: none; min-height: unset; order: 2; width: 100%; }`,
                `.framer-XTkyo.framer-v-i796mb .framer-crnck9 { order: 1; }`,
                `.framer-XTkyo.framer-v-i796mb .framer-mqe1z8 { order: 0; }`,
                ...In,
                ...Mn,
                `.framer-XTkyo[data-border="true"]::after, .framer-XTkyo [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
            ]),
            (Bi = K(Ri, zi, `framer-XTkyo`)),
            (Bi.displayName = `Footer`),
            (Bi.defaultProps = { height: 960, width: 1728 }),
            N(Bi, { variant: { options: [`gKZWOGzXO`, `a5d826QCP`, `cYxbgb5zu`], optionTitles: [`Desktop`, `Tablet`, `Sticker - Left`], title: `Variant`, type: T.Enum }, iHqoTUVyw: { title: `Back to top`, type: T.Link } }),
            M(
                Bi,
                [
                    {
                        explicitInter: !0,
                        fonts: [
                            {
                                family: `Inter`,
                                source: `framer`,
                                style: `normal`,
                                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                                weight: `400`,
                            },
                            {
                                family: `Inter`,
                                source: `framer`,
                                style: `normal`,
                                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                                weight: `400`,
                            },
                            { family: `Inter`, source: `framer`, style: `normal`, unicodeRange: `U+1F00-1FFF`, url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`, weight: `400` },
                            { family: `Inter`, source: `framer`, style: `normal`, unicodeRange: `U+0370-03FF`, url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`, weight: `400` },
                            {
                                family: `Inter`,
                                source: `framer`,
                                style: `normal`,
                                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                                weight: `400`,
                            },
                            {
                                family: `Inter`,
                                source: `framer`,
                                style: `normal`,
                                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                                url: `https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2`,
                                weight: `400`,
                            },
                            {
                                family: `Inter`,
                                source: `framer`,
                                style: `normal`,
                                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                                weight: `400`,
                            },
                        ],
                    },
                    ...Ci,
                    ...wi,
                    ...Ti,
                    ...Ei,
                    ...Di,
                    ...L(Fn),
                    ...L(jn),
                ],
                { supportsExplicitInterCodegen: !0 }
            );
    }),
    Hi,
    Ui,
    Wi,
    Gi = e(() => {
        B(),
            F.loadFonts([`CUSTOM;Delight Regular`, `CUSTOM;Delight Bold`]),
            (Hi = [
                {
                    explicitInter: !0,
                    fonts: [
                        { family: `Delight Regular`, source: `custom`, url: `https://framerusercontent.com/assets/pR4AjJlW0OWZiykVbHWQPugHiVk.woff2` },
                        { family: `Delight Bold`, source: `custom`, url: `https://framerusercontent.com/assets/9O6XpwFtIabQD3l43bWmfwFrY3Y.woff2` },
                    ],
                },
            ]),
            (Ui = [
                `.framer-1NkI1 .framer-styles-preset-1wjjzog:not(.rich-text-wrapper), .framer-1NkI1 .framer-styles-preset-1wjjzog.rich-text-wrapper p { --framer-font-family: "Delight Regular", "Delight Regular Placeholder", sans-serif; --framer-font-family-bold: "Delight Bold", "Delight Bold Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 400; --framer-letter-spacing: 0.02em; --framer-line-height: 140%; --framer-paragraph-spacing: 16px; --framer-text-alignment: left; --framer-text-color: #131313; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
                `@media (max-width: 1727px) and (min-width: 1440px) { .framer-1NkI1 .framer-styles-preset-1wjjzog:not(.rich-text-wrapper), .framer-1NkI1 .framer-styles-preset-1wjjzog.rich-text-wrapper p { --framer-font-family: "Delight Regular", "Delight Regular Placeholder", sans-serif; --framer-font-family-bold: "Delight Bold", "Delight Bold Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 400; --framer-letter-spacing: 0.02em; --framer-line-height: 140%; --framer-paragraph-spacing: 16px; --framer-text-alignment: left; --framer-text-color: #131313; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
                `@media (max-width: 1439px) and (min-width: 1024px) { .framer-1NkI1 .framer-styles-preset-1wjjzog:not(.rich-text-wrapper), .framer-1NkI1 .framer-styles-preset-1wjjzog.rich-text-wrapper p { --framer-font-family: "Delight Regular", "Delight Regular Placeholder", sans-serif; --framer-font-family-bold: "Delight Bold", "Delight Bold Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 400; --framer-letter-spacing: 0.02em; --framer-line-height: 120%; --framer-paragraph-spacing: 16px; --framer-text-alignment: left; --framer-text-color: #131313; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
                `@media (max-width: 1023px) and (min-width: 768px) { .framer-1NkI1 .framer-styles-preset-1wjjzog:not(.rich-text-wrapper), .framer-1NkI1 .framer-styles-preset-1wjjzog.rich-text-wrapper p { --framer-font-family: "Delight Regular", "Delight Regular Placeholder", sans-serif; --framer-font-family-bold: "Delight Bold", "Delight Bold Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 400; --framer-letter-spacing: 0.02em; --framer-line-height: 120%; --framer-paragraph-spacing: 16px; --framer-text-alignment: left; --framer-text-color: #131313; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
                `@media (max-width: 767px) and (min-width: 0px) { .framer-1NkI1 .framer-styles-preset-1wjjzog:not(.rich-text-wrapper), .framer-1NkI1 .framer-styles-preset-1wjjzog.rich-text-wrapper p { --framer-font-family: "Delight Regular", "Delight Regular Placeholder", sans-serif; --framer-font-family-bold: "Delight Bold", "Delight Bold Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 400; --framer-letter-spacing: 0.02em; --framer-line-height: 120%; --framer-paragraph-spacing: 16px; --framer-text-alignment: left; --framer-text-color: #131313; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
            ]),
            (Wi = `framer-1NkI1`);
    });
function Ki(e, ...t) {
    let n = {};
    return t?.forEach((t) => t && Object.assign(n, e[t])), n;
}
var qi,
    Ji,
    Yi,
    Xi,
    Zi,
    Qi,
    $i,
    ea,
    ta,
    na,
    ra,
    ia,
    aa = e(() => {
        i(),
            B(),
            b(),
            a(),
            (qi = [`D8E0IBVn5`, `yFDZkqkds`, `W01nQ3NTm`]),
            (Ji = `framer-Bu1Mq`),
            (Yi = { D8E0IBVn5: `framer-v-1y6kfat`, W01nQ3NTm: `framer-v-1155q0h`, yFDZkqkds: `framer-v-14mj3c7` }),
            (Xi = { bounce: 0.1, delay: 0, duration: 0.6, type: `spring` }),
            (Zi = ({ value: e, children: t }) => {
                let n = u(y),
                    r = e ?? n.transition,
                    i = d(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
                return c(y.Provider, { value: i, children: t });
            }),
            (Qi = S.create(g)),
            ($i = { "Variant 1": `D8E0IBVn5`, "Variant 2": `yFDZkqkds`, "Variant 3": `W01nQ3NTm` }),
            (ea = ({ height: e, id: t, mouseEnter: n, width: r, ...i }) => ({ ...i, AhaOGR7uV: n ?? i.AhaOGR7uV, variant: $i[i.variant] ?? i.variant ?? `D8E0IBVn5` })),
            (ta = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
            (na = n(function (e, t) {
                let n = l(null),
                    i = t ?? n,
                    a = r(),
                    { activeLocale: o, setLocale: s } = U();
                V();
                let { style: u, className: d, layoutId: f, variant: m, AhaOGR7uV: h, ...g } = ea(e),
                    { baseVariant: _, classNames: y, clearLoadingGesture: b, gestureHandlers: x, gestureVariant: C, isLoading: w, setGestureState: T, setVariant: E, variants: O } = G({
                        cycleOrder: qi,
                        defaultVariant: `D8E0IBVn5`,
                        ref: i,
                        variant: m,
                        variantClassNames: Yi,
                    }),
                    k = ta(e, O),
                    { activeVariantCallback: j, delay: M } = ee(_),
                    N = j(async (...e) => {
                        if ((T({ isHovered: !0 }), h)) {
                            let t = await h(...e);
                            if (t === !1) return !1;
                        }
                    }),
                    F = j(async (...e) => {
                        T({ isHovered: !1 }), E(`yFDZkqkds`);
                    }),
                    I = j(async (...e) => {
                        if ((T({ isHovered: !0 }), h)) {
                            let t = await h(...e);
                            if (t === !1) return !1;
                        }
                        E(`D8E0IBVn5`);
                    }),
                    L = [],
                    R = P(Ji, ...L),
                    z = () => _ === `W01nQ3NTm`;
                return c(v, {
                    id: f ?? a,
                    children: c(Qi, {
                        animate: O,
                        initial: !1,
                        children: c(Zi, {
                            value: Xi,
                            children: c(D, {
                                clickTrackingId: `meet-vora-mv`,
                                href: { webPageId: `augiA20Il` },
                                motionChild: !0,
                                nodeId: `D8E0IBVn5`,
                                openInNewTab: !1,
                                scopeId: `AL4Ahkyn5`,
                                smoothScroll: !0,
                                children: p(S.a, {
                                    ...g,
                                    ...x,
                                    className: `${P(R, `framer-1y6kfat`, d, y)} framer-qtlqpq`,
                                    "data-framer-name": `Variant 1`,
                                    "data-highlight": !0,
                                    layoutDependency: k,
                                    layoutId: `D8E0IBVn5`,
                                    onMouseEnter: N,
                                    onMouseLeave: F,
                                    ref: i,
                                    style: { ...u },
                                    ...Ki({ W01nQ3NTm: { "data-framer-name": `Variant 3`, "data-highlight": void 0, onMouseEnter: void 0, onMouseLeave: void 0 }, yFDZkqkds: { "data-framer-name": `Variant 2`, onMouseEnter: I } }, _, C),
                                    children: [
                                        z() &&
                                            p(S.div, {
                                                className: `framer-16ypiiz`,
                                                "data-framer-name": `Meet Vora`,
                                                layoutDependency: k,
                                                layoutId: `Sp7ZLvlyQ`,
                                                children: [
                                                    c(A, {
                                                        className: `framer-1uyw7qq`,
                                                        "data-framer-name": `a`,
                                                        layout: `position`,
                                                        layoutDependency: k,
                                                        layoutId: `AJCJrQhA7`,
                                                        opacity: 1,
                                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 22.99 42.25"><path d="M 21.387 40.749 L 14.465 40.749 L 13.642 34.786 L 13.368 34.786 C 13.139 35.562 12.82 36.316 12.408 37.047 C 11.997 37.733 11.517 38.35 10.969 38.898 C 10.466 39.446 9.895 39.88 9.255 40.2 C 8.616 40.566 7.93 40.749 7.199 40.749 C 5.463 40.749 4.092 39.835 3.087 38.007 C 2.127 36.133 1.647 33.46 1.647 29.988 L 1.647 27.246 C 1.647 23.773 2.127 21.146 3.087 19.364 C 4.092 17.536 5.531 16.622 7.405 16.622 C 8.639 16.622 9.667 17.033 10.489 17.856 C 11.357 18.633 11.997 19.775 12.408 21.283 L 12.682 21.283 L 12.682 11.002 C 12.682 10.271 12.591 9.768 12.408 9.494 C 12.226 9.174 11.929 9.014 11.517 9.014 C 11.106 9.014 10.809 9.174 10.626 9.494 C 10.443 9.768 10.352 10.271 10.352 11.002 L 10.352 14.977 L 1.647 14.977 L 1.647 12.304 C 1.647 8.786 2.493 6.135 4.183 4.353 C 5.92 2.571 8.342 1.68 11.449 1.68 C 14.602 1.68 17.046 2.594 18.783 4.422 C 20.519 6.204 21.387 8.831 21.387 12.304 Z M 11.38 32.684 C 11.791 32.684 12.111 32.456 12.34 31.999 C 12.568 31.542 12.682 30.857 12.682 29.943 L 12.682 25.213 C 12.682 24.574 12.568 24.094 12.34 23.774 C 12.111 23.408 11.791 23.226 11.38 23.226 C 11.015 23.226 10.74 23.386 10.558 23.705 C 10.375 23.98 10.284 24.482 10.284 25.213 L 10.284 30.628 C 10.284 31.359 10.375 31.885 10.558 32.205 C 10.74 32.524 11.015 32.684 11.38 32.684 Z" fill="rgb(245,245,245)"></path></svg>`,
                                                        svgContentId: 11436780231,
                                                        withExternalLayout: !0,
                                                        ...Ki(
                                                            {
                                                                W01nQ3NTm: {
                                                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 22.99 42.25"><path d="M 21.396 40.72 L 14.474 40.72 L 13.651 34.757 L 13.377 34.757 C 13.149 35.533 12.829 36.287 12.417 37.018 C 12.006 37.704 11.526 38.321 10.978 38.869 C 10.475 39.417 9.904 39.851 9.265 40.171 C 8.625 40.537 7.939 40.72 7.208 40.72 C 5.472 40.72 4.101 39.806 3.096 37.978 C 2.136 36.105 1.656 33.431 1.656 29.959 L 1.656 27.217 C 1.656 23.744 2.136 21.117 3.096 19.335 C 4.101 17.507 5.54 16.593 7.414 16.593 C 8.648 16.593 9.676 17.004 10.498 17.827 C 11.366 18.604 12.006 19.746 12.417 21.254 L 12.692 21.254 L 12.692 10.973 C 12.692 10.242 12.6 9.739 12.417 9.465 C 12.235 9.145 11.938 8.985 11.526 8.985 C 11.115 8.985 10.818 9.145 10.635 9.465 C 10.453 9.739 10.361 10.242 10.361 10.973 L 10.361 14.948 L 1.656 14.948 L 1.656 12.275 C 1.656 8.757 2.502 6.106 4.193 4.324 C 5.929 2.542 8.351 1.651 11.458 1.651 C 14.611 1.651 17.055 2.565 18.792 4.393 C 20.528 6.175 21.396 8.802 21.396 12.275 Z M 11.437 32.655 C 11.849 32.655 12.168 32.427 12.397 31.97 C 12.625 31.513 12.74 30.828 12.74 29.914 L 12.74 25.184 C 12.74 24.545 12.625 24.065 12.397 23.745 C 12.168 23.379 11.849 23.197 11.437 23.197 C 11.072 23.197 10.798 23.357 10.615 23.676 C 10.432 23.951 10.341 24.453 10.341 25.184 L 10.341 30.599 C 10.341 31.33 10.432 31.856 10.615 32.176 C 10.798 32.495 11.072 32.655 11.437 32.655 Z" fill="rgb(245,245,245)"></path></svg>`,
                                                                    svgContentId: 12370587123,
                                                                },
                                                            },
                                                            _,
                                                            C
                                                        ),
                                                    }),
                                                    c(A, {
                                                        className: `framer-d2g9b5`,
                                                        "data-framer-name": `r`,
                                                        layout: `position`,
                                                        layoutDependency: k,
                                                        layoutId: `FMkg0jdd3`,
                                                        opacity: 1,
                                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 18.13 42.43"><path d="M 1.538 1.679 L 9.077 1.679 L 9.557 8.053 L 9.694 8.053 C 9.74 6.5 9.9 5.289 10.174 4.421 C 10.494 3.553 10.928 2.936 11.476 2.57 C 12.07 2.159 12.778 1.908 13.601 1.816 C 14.469 1.725 15.474 1.679 16.617 1.679 L 16.617 10.795 C 15.474 10.795 14.492 10.864 13.669 11.001 C 12.847 11.092 12.184 11.298 11.682 11.618 C 11.179 11.937 10.814 12.417 10.585 13.057 C 10.357 13.651 10.242 14.428 10.242 15.387 L 10.242 40.755 L 1.538 40.755 Z" fill="rgb(245,245,245)"></path></svg>`,
                                                        svgContentId: 8836943759,
                                                        withExternalLayout: !0,
                                                    }),
                                                    c(A, {
                                                        className: `framer-1dwvf7t`,
                                                        "data-framer-name": `o`,
                                                        layout: `position`,
                                                        layoutDependency: k,
                                                        layoutId: `LyOGofQUT`,
                                                        opacity: 1,
                                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 22.8 42.25"><path d="M 21.218 12.304 L 21.218 29.988 C 21.218 33.552 20.35 36.248 18.614 38.075 C 16.878 39.858 14.456 40.749 11.349 40.749 C 8.287 40.749 5.888 39.858 4.152 38.075 C 2.415 36.248 1.547 33.552 1.547 29.988 L 1.547 12.304 C 1.547 8.831 2.415 6.204 4.152 4.422 C 5.888 2.594 8.31 1.68 11.417 1.68 C 14.524 1.68 16.923 2.571 18.614 4.353 C 20.35 6.135 21.218 8.786 21.218 12.304 Z M 12.467 10.761 C 12.467 10.03 12.375 9.527 12.192 9.253 C 12.01 8.933 11.713 8.774 11.301 8.774 C 10.936 8.774 10.639 8.933 10.41 9.253 C 10.228 9.527 10.136 10.03 10.136 10.761 L 10.136 31.118 C 10.136 31.849 10.228 32.374 10.41 32.694 C 10.639 33.014 10.936 33.174 11.301 33.174 C 11.713 33.174 12.01 33.014 12.192 32.694 C 12.375 32.374 12.467 31.849 12.467 31.118 Z" fill="rgb(245,245,245)"></path></svg>`,
                                                        svgContentId: 10328229035,
                                                        withExternalLayout: !0,
                                                        ...Ki(
                                                            {
                                                                W01nQ3NTm: {
                                                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 22.8 42.25"><path d="M 21.218 12.275 L 21.218 29.959 C 21.218 33.523 20.35 36.219 18.614 38.047 C 16.878 39.829 14.456 40.72 11.349 40.72 C 8.287 40.72 5.888 39.829 4.152 38.047 C 2.415 36.219 1.547 33.523 1.547 29.959 L 1.547 12.275 C 1.547 8.802 2.415 6.175 4.152 4.393 C 5.888 2.565 8.31 1.651 11.417 1.651 C 14.524 1.651 16.923 2.542 18.614 4.324 C 20.35 6.106 21.218 8.757 21.218 12.275 Z M 12.514 10.732 C 12.514 10.001 12.423 9.499 12.24 9.224 C 12.057 8.905 11.76 8.745 11.349 8.745 C 10.983 8.745 10.686 8.905 10.458 9.224 C 10.275 9.499 10.184 10.001 10.184 10.732 L 10.184 31.089 C 10.184 31.82 10.275 32.346 10.458 32.666 C 10.686 32.985 10.983 33.145 11.349 33.145 C 11.76 33.145 12.057 32.985 12.24 32.666 C 12.423 32.346 12.514 31.82 12.514 31.089 Z" fill="rgb(245,245,245)"></path></svg>`,
                                                                    svgContentId: 9584062646,
                                                                },
                                                            },
                                                            _,
                                                            C
                                                        ),
                                                    }),
                                                    c(A, {
                                                        className: `framer-1p9jcs2`,
                                                        "data-framer-name": `V`,
                                                        layout: `position`,
                                                        layoutDependency: k,
                                                        layoutId: `GWDk7yZPa`,
                                                        opacity: 1,
                                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24.11 52.15"><path d="M 18.06 50.625 L 5.996 50.625 L 1.61 1.647 L 10.726 1.647 L 11.617 32.285 L 11.822 37.22 L 12.234 37.22 L 12.439 32.285 L 13.33 1.647 L 22.515 1.647 Z" fill="rgb(245,245,245)"></path></svg>`,
                                                        svgContentId: 10515457528,
                                                        withExternalLayout: !0,
                                                    }),
                                                    c(A, {
                                                        className: `framer-1x7m6pz`,
                                                        "data-framer-name": `t`,
                                                        layout: `position`,
                                                        layoutDependency: k,
                                                        layoutId: `qEjjKtjZT`,
                                                        opacity: 1,
                                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 19.06 51.78"><path d="M 10.304 50.453 C 8.122 50.453 6.452 49.971 5.293 49.005 C 4.154 48.04 3.585 45.936 3.585 42.692 L 3.585 18.951 L 1.413 18.951 L 1.413 11.363 L 1.673 11.363 C 2.175 11.363 2.648 11.247 3.092 11.015 C 3.556 10.783 3.952 10.426 4.28 9.944 C 4.608 9.442 4.869 8.814 5.062 8.061 C 5.255 7.308 5.351 6.42 5.351 5.397 L 14.184 1.453 L 14.184 5.397 C 14.184 6.169 14.127 6.874 14.011 7.511 C 13.914 8.129 13.74 8.669 13.489 9.133 C 13.238 9.596 12.9 9.953 12.476 10.204 C 12.07 10.455 11.568 10.59 10.97 10.61 L 10.97 11.363 L 17.756 11.363 L 17.756 18.951 L 12.418 18.951 L 12.418 41.649 C 12.418 42.074 12.485 42.383 12.621 42.576 C 12.756 42.769 12.968 42.866 13.258 42.866 L 17.756 42.866 L 17.756 50.453 C 16.077 50.453 11.983 50.453 10.304 50.453 Z" fill="rgb(245,245,245)"></path></svg>`,
                                                        svgContentId: 11265554048,
                                                        withExternalLayout: !0,
                                                    }),
                                                    c(A, {
                                                        className: `framer-4uocvv`,
                                                        "data-framer-name": `e`,
                                                        layout: `position`,
                                                        layoutDependency: k,
                                                        layoutId: `rsPJuAstm`,
                                                        opacity: 1,
                                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 22.8 42.25"><path d="M 12.495 11.001 C 12.495 10.27 12.403 9.767 12.221 9.493 C 12.038 9.173 11.741 9.013 11.33 9.013 C 10.964 9.013 10.667 9.173 10.439 9.493 C 10.256 9.767 10.164 10.27 10.164 11.001 L 10.164 31.358 C 10.164 32.089 10.256 32.614 10.439 32.934 C 10.667 33.254 10.964 33.414 11.33 33.414 C 11.741 33.414 12.038 33.254 12.221 32.934 C 12.403 32.614 12.495 32.089 12.495 31.358 L 12.495 25.189 L 21.199 25.189 L 21.199 29.987 C 21.199 33.551 20.331 36.247 18.595 38.075 C 16.859 39.857 14.437 40.748 11.33 40.748 C 8.268 40.748 5.869 39.857 4.133 38.075 C 2.396 36.247 1.528 33.551 1.528 29.987 L 1.528 12.303 C 1.528 8.83 2.396 6.203 4.133 4.421 C 5.869 2.593 8.291 1.679 11.398 1.679 C 14.505 1.679 16.904 2.57 18.595 4.352 C 20.331 6.134 21.199 8.785 21.199 12.303 L 21.199 23.338 L 8.656 23.338 L 8.656 17.169 L 12.495 17.169 Z" fill="rgb(245,245,245)"></path></svg>`,
                                                        svgContentId: 9526291730,
                                                        withExternalLayout: !0,
                                                    }),
                                                    c(A, {
                                                        className: `framer-pn2qhz`,
                                                        "data-framer-name": `e`,
                                                        layout: `position`,
                                                        layoutDependency: k,
                                                        layoutId: `E9ynfHLZc`,
                                                        opacity: 1,
                                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 22.8 42.25"><path d="M 12.504 11.001 C 12.504 10.27 12.413 9.767 12.23 9.493 C 12.047 9.173 11.75 9.013 11.339 9.013 C 10.973 9.013 10.676 9.173 10.448 9.493 C 10.265 9.767 10.174 10.27 10.174 11.001 L 10.174 31.358 C 10.174 32.089 10.265 32.614 10.448 32.934 C 10.676 33.254 10.973 33.414 11.339 33.414 C 11.75 33.414 12.047 33.254 12.23 32.934 C 12.413 32.614 12.504 32.089 12.504 31.358 L 12.504 25.189 L 21.209 25.189 L 21.209 29.987 C 21.209 33.551 20.341 36.247 18.604 38.075 C 16.868 39.857 14.446 40.748 11.339 40.748 C 8.277 40.748 5.878 39.857 4.142 38.075 C 2.406 36.247 1.537 33.551 1.537 29.987 L 1.537 12.303 C 1.537 8.83 2.406 6.203 4.142 4.421 C 5.878 2.593 8.3 1.679 11.407 1.679 C 14.515 1.679 16.913 2.57 18.604 4.352 C 20.341 6.134 21.209 8.785 21.209 12.303 L 21.209 23.338 L 8.666 23.338 L 8.666 17.169 L 12.504 17.169 Z" fill="rgb(245,245,245)"></path></svg>`,
                                                        svgContentId: 11727917993,
                                                        withExternalLayout: !0,
                                                    }),
                                                    c(A, {
                                                        className: `framer-9maph0`,
                                                        "data-framer-name": `M`,
                                                        layout: `position`,
                                                        layoutDependency: k,
                                                        layoutId: `bwQjRwESO`,
                                                        opacity: 1,
                                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32.53 52.15"><path d="M 30.899 1.616 L 30.899 50.654 L 22.332 50.654 L 24.182 19.057 L 24.457 14.053 L 24.045 13.985 L 23.429 19.057 L 20.481 50.654 L 12.051 50.654 L 8.966 19.057 L 8.349 13.985 L 8.007 14.053 L 8.212 19.057 L 10.063 50.654 L 1.495 50.654 L 1.495 1.616 L 14.861 1.616 L 15.82 33.45 L 16.026 38.317 L 16.437 38.317 L 16.643 33.45 L 17.603 1.616 Z" fill="rgb(245,245,245)"></path></svg>`,
                                                        svgContentId: 9996094185,
                                                        withExternalLayout: !0,
                                                    }),
                                                ],
                                            }),
                                        p(S.div, {
                                            className: `framer-1ligbii`,
                                            "data-framer-name": `Meet Vora`,
                                            layoutDependency: k,
                                            layoutId: `B77heqhOt`,
                                            children: [
                                                c(A, {
                                                    className: `framer-1tch3r5`,
                                                    "data-framer-name": `a`,
                                                    layout: `position`,
                                                    layoutDependency: k,
                                                    layoutId: `bfDurGTKj`,
                                                    opacity: 1,
                                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 22.99 42.25"><path d="M 21.396 40.693 L 14.474 40.693 L 13.651 34.73 L 13.377 34.73 C 13.149 35.506 12.829 36.26 12.417 36.991 C 12.006 37.677 11.526 38.294 10.978 38.842 C 10.475 39.39 9.904 39.824 9.265 40.144 C 8.625 40.51 7.939 40.693 7.208 40.693 C 5.472 40.693 4.101 39.779 3.096 37.951 C 2.136 36.077 1.656 33.404 1.656 29.932 L 1.656 27.19 C 1.656 23.717 2.136 21.09 3.096 19.308 C 4.101 17.48 5.54 16.566 7.414 16.566 C 8.648 16.566 9.676 16.977 10.498 17.8 C 11.366 18.577 12.006 19.719 12.417 21.227 L 12.692 21.227 L 12.692 10.946 C 12.692 10.215 12.6 9.712 12.417 9.438 C 12.235 9.118 11.938 8.958 11.526 8.958 C 11.115 8.958 10.818 9.118 10.635 9.438 C 10.453 9.712 10.361 10.215 10.361 10.946 L 10.361 14.921 L 1.656 14.921 L 1.656 12.248 C 1.656 8.73 2.502 6.079 4.193 4.297 C 5.929 2.515 8.351 1.624 11.458 1.624 C 14.611 1.624 17.055 2.538 18.792 4.366 C 20.528 6.148 21.396 8.775 21.396 12.248 Z M 11.437 32.628 C 11.849 32.628 12.168 32.4 12.397 31.943 C 12.625 31.486 12.74 30.801 12.74 29.887 L 12.74 25.157 C 12.74 24.518 12.625 24.038 12.397 23.718 C 12.168 23.352 11.849 23.17 11.437 23.17 C 11.072 23.17 10.798 23.33 10.615 23.649 C 10.432 23.924 10.341 24.426 10.341 25.157 L 10.341 30.572 C 10.341 31.303 10.432 31.829 10.615 32.149 C 10.798 32.468 11.072 32.628 11.437 32.628 Z" fill="rgb(245,245,245)"></path></svg>`,
                                                    svgContentId: 12154952158,
                                                    withExternalLayout: !0,
                                                    ...Ki(
                                                        {
                                                            yFDZkqkds: {
                                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 23 42"><path d="M 21.396 40.693 L 14.474 40.693 L 13.651 34.73 L 13.377 34.73 C 13.149 35.506 12.829 36.26 12.417 36.991 C 12.006 37.677 11.526 38.294 10.978 38.842 C 10.475 39.39 9.904 39.824 9.265 40.144 C 8.625 40.51 7.939 40.693 7.208 40.693 C 5.472 40.693 4.101 39.779 3.096 37.951 C 2.136 36.077 1.656 33.404 1.656 29.932 L 1.656 27.19 C 1.656 23.717 2.136 21.09 3.096 19.308 C 4.101 17.48 5.54 16.566 7.414 16.566 C 8.648 16.566 9.676 16.977 10.498 17.8 C 11.366 18.577 12.006 19.719 12.417 21.227 L 12.692 21.227 L 12.692 10.946 C 12.692 10.215 12.6 9.712 12.417 9.438 C 12.235 9.118 11.938 8.958 11.526 8.958 C 11.115 8.958 10.818 9.118 10.635 9.438 C 10.453 9.712 10.361 10.215 10.361 10.946 L 10.361 14.921 L 1.656 14.921 L 1.656 12.248 C 1.656 8.73 2.502 6.079 4.193 4.297 C 5.929 2.515 8.351 1.624 11.458 1.624 C 14.611 1.624 17.055 2.538 18.792 4.366 C 20.528 6.148 21.396 8.775 21.396 12.248 Z M 11.437 32.628 C 11.849 32.628 12.168 32.4 12.397 31.943 C 12.625 31.486 12.74 30.801 12.74 29.887 L 12.74 25.157 C 12.74 24.518 12.625 24.038 12.397 23.718 C 12.168 23.352 11.849 23.17 11.437 23.17 C 11.072 23.17 10.798 23.33 10.615 23.649 C 10.432 23.924 10.341 24.426 10.341 25.157 L 10.341 30.572 C 10.341 31.303 10.432 31.829 10.615 32.149 C 10.798 32.468 11.072 32.628 11.437 32.628 Z" fill="rgb(245,245,245)"></path></svg>`,
                                                                svgContentId: 11059607380,
                                                            },
                                                        },
                                                        _,
                                                        C
                                                    ),
                                                }),
                                                c(A, {
                                                    className: `framer-1ie1gr2`,
                                                    "data-framer-name": `r`,
                                                    layout: `position`,
                                                    layoutDependency: k,
                                                    layoutId: `TuR5OHPSi`,
                                                    opacity: 1,
                                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 18.13 42.43"><path d="M 1.538 1.679 L 9.077 1.679 L 9.557 8.053 L 9.694 8.053 C 9.74 6.5 9.9 5.289 10.174 4.421 C 10.494 3.553 10.928 2.936 11.476 2.57 C 12.07 2.159 12.778 1.908 13.601 1.816 C 14.469 1.725 15.474 1.679 16.617 1.679 L 16.617 10.795 C 15.474 10.795 14.492 10.864 13.669 11.001 C 12.847 11.092 12.184 11.298 11.682 11.618 C 11.179 11.937 10.814 12.417 10.585 13.057 C 10.357 13.651 10.242 14.428 10.242 15.387 L 10.242 40.755 L 1.538 40.755 Z" fill="rgb(245,245,245)"></path></svg>`,
                                                    svgContentId: 8836943759,
                                                    withExternalLayout: !0,
                                                    ...Ki(
                                                        {
                                                            yFDZkqkds: {
                                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 18 43"><path d="M 1.538 1.679 L 9.077 1.679 L 9.557 8.053 L 9.694 8.053 C 9.74 6.5 9.9 5.289 10.174 4.421 C 10.494 3.553 10.928 2.936 11.476 2.57 C 12.07 2.159 12.778 1.908 13.601 1.816 C 14.469 1.725 15.474 1.679 16.617 1.679 L 16.617 10.795 C 15.474 10.795 14.492 10.864 13.669 11.001 C 12.847 11.092 12.184 11.298 11.682 11.618 C 11.179 11.937 10.814 12.417 10.585 13.057 C 10.357 13.651 10.242 14.428 10.242 15.387 L 10.242 40.755 L 1.538 40.755 Z" fill="rgb(245,245,245)"></path></svg>`,
                                                                svgContentId: 11229849143,
                                                            },
                                                        },
                                                        _,
                                                        C
                                                    ),
                                                }),
                                                c(A, {
                                                    className: `framer-1k99410`,
                                                    "data-framer-name": `o`,
                                                    layout: `position`,
                                                    layoutDependency: k,
                                                    layoutId: `b8Oyn5Kb3`,
                                                    opacity: 1,
                                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 22.8 42.25"><path d="M 21.218 12.248 L 21.218 29.932 C 21.218 33.496 20.35 36.192 18.614 38.02 C 16.878 39.802 14.456 40.693 11.349 40.693 C 8.287 40.693 5.888 39.802 4.152 38.02 C 2.415 36.192 1.547 33.496 1.547 29.932 L 1.547 12.248 C 1.547 8.775 2.415 6.148 4.152 4.366 C 5.888 2.538 8.31 1.624 11.417 1.624 C 14.524 1.624 16.923 2.515 18.614 4.297 C 20.35 6.079 21.218 8.73 21.218 12.248 Z M 12.514 10.705 C 12.514 9.974 12.423 9.472 12.24 9.197 C 12.057 8.877 11.76 8.718 11.349 8.718 C 10.983 8.718 10.686 8.877 10.458 9.197 C 10.275 9.472 10.184 9.974 10.184 10.705 L 10.184 31.062 C 10.184 31.793 10.275 32.319 10.458 32.639 C 10.686 32.958 10.983 33.118 11.349 33.118 C 11.76 33.118 12.057 32.958 12.24 32.639 C 12.423 32.319 12.514 31.793 12.514 31.062 Z" fill="rgb(245,245,245)"></path></svg>`,
                                                    svgContentId: 12569922560,
                                                    withExternalLayout: !0,
                                                    ...Ki(
                                                        {
                                                            yFDZkqkds: {
                                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 22 42"><path d="M 21.218 12.248 L 21.218 29.932 C 21.218 33.496 20.35 36.192 18.614 38.02 C 16.878 39.802 14.456 40.693 11.349 40.693 C 8.287 40.693 5.888 39.802 4.152 38.02 C 2.415 36.192 1.547 33.496 1.547 29.932 L 1.547 12.248 C 1.547 8.775 2.415 6.148 4.152 4.366 C 5.888 2.538 8.31 1.624 11.417 1.624 C 14.524 1.624 16.923 2.515 18.614 4.297 C 20.35 6.079 21.218 8.73 21.218 12.248 Z M 12.514 10.705 C 12.514 9.974 12.423 9.472 12.24 9.197 C 12.057 8.877 11.76 8.718 11.349 8.718 C 10.983 8.718 10.686 8.877 10.458 9.197 C 10.275 9.472 10.184 9.974 10.184 10.705 L 10.184 31.062 C 10.184 31.793 10.275 32.319 10.458 32.639 C 10.686 32.958 10.983 33.118 11.349 33.118 C 11.76 33.118 12.057 32.958 12.24 32.639 C 12.423 32.319 12.514 31.793 12.514 31.062 Z" fill="rgb(245,245,245)"></path></svg>`,
                                                                svgContentId: 8904189969,
                                                            },
                                                        },
                                                        _,
                                                        C
                                                    ),
                                                }),
                                                c(A, {
                                                    className: `framer-12wfkya`,
                                                    "data-framer-name": `V`,
                                                    layout: `position`,
                                                    layoutDependency: k,
                                                    layoutId: `ZvtJeZ46_`,
                                                    opacity: 1,
                                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24.11 52.15"><path d="M 18.06 50.625 L 5.996 50.625 L 1.61 1.647 L 10.726 1.647 L 11.617 32.285 L 11.822 37.22 L 12.234 37.22 L 12.439 32.285 L 13.33 1.647 L 22.515 1.647 Z" fill="rgb(245,245,245)"></path></svg>`,
                                                    svgContentId: 10515457528,
                                                    withExternalLayout: !0,
                                                    ...Ki({ yFDZkqkds: { svgContentId: 9077958073 } }, _, C),
                                                }),
                                                c(A, {
                                                    className: `framer-b21e6i`,
                                                    "data-framer-name": `t`,
                                                    layout: `position`,
                                                    layoutDependency: k,
                                                    layoutId: `Aq_N3x017`,
                                                    opacity: 1,
                                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 19.06 51.78"><path d="M 10.304 50.453 C 8.122 50.453 6.452 49.971 5.293 49.005 C 4.154 48.04 3.585 45.936 3.585 42.692 L 3.585 18.951 L 1.413 18.951 L 1.413 11.363 L 1.673 11.363 C 2.175 11.363 2.648 11.247 3.092 11.015 C 3.556 10.783 3.952 10.426 4.28 9.944 C 4.608 9.442 4.869 8.814 5.062 8.061 C 5.255 7.308 5.351 6.42 5.351 5.397 L 14.184 1.453 L 14.184 5.397 C 14.184 6.169 14.127 6.874 14.011 7.511 C 13.914 8.129 13.74 8.669 13.489 9.133 C 13.238 9.596 12.9 9.953 12.476 10.204 C 12.07 10.455 11.568 10.59 10.97 10.61 L 10.97 11.363 L 17.756 11.363 L 17.756 18.951 L 12.418 18.951 L 12.418 41.649 C 12.418 42.074 12.485 42.383 12.621 42.576 C 12.756 42.769 12.968 42.866 13.258 42.866 L 17.756 42.866 L 17.756 50.453 C 16.077 50.453 11.983 50.453 10.304 50.453 Z" fill="rgb(245,245,245)"></path></svg>`,
                                                    svgContentId: 11265554048,
                                                    withExternalLayout: !0,
                                                    ...Ki(
                                                        {
                                                            yFDZkqkds: {
                                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 19 52"><path d="M 10.304 50.453 C 8.122 50.453 6.452 49.971 5.293 49.005 C 4.154 48.04 3.585 45.936 3.585 42.692 L 3.585 18.951 L 1.413 18.951 L 1.413 11.363 L 1.673 11.363 C 2.175 11.363 2.648 11.247 3.092 11.015 C 3.556 10.783 3.952 10.426 4.28 9.944 C 4.608 9.442 4.869 8.814 5.062 8.061 C 5.255 7.308 5.351 6.42 5.351 5.397 L 14.184 1.453 L 14.184 5.397 C 14.184 6.169 14.127 6.874 14.011 7.511 C 13.914 8.129 13.74 8.669 13.489 9.133 C 13.238 9.596 12.9 9.953 12.476 10.204 C 12.07 10.455 11.568 10.59 10.97 10.61 L 10.97 11.363 L 17.756 11.363 L 17.756 18.951 L 12.418 18.951 L 12.418 41.649 C 12.418 42.074 12.485 42.383 12.621 42.576 C 12.756 42.769 12.968 42.866 13.258 42.866 L 17.756 42.866 L 17.756 50.453 C 16.077 50.453 11.983 50.453 10.304 50.453 Z" fill="rgb(245,245,245)"></path></svg>`,
                                                                svgContentId: 8593393328,
                                                            },
                                                        },
                                                        _,
                                                        C
                                                    ),
                                                }),
                                              c(A, {
    className: `framer-dcmv8t`,
    "data-framer-name": `e`,
    layout: `position`,
    layoutDependency: k,
    layoutId: `n31syNENt`,
    opacity: 1,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 52">
  <path d="M26 5 C20 2 12 2 6 5 C2 7 1 11 2 15 C3 19 7 21 12 22 C17 23 22 24 24 27 C26 30 26 33 24 36 C22 39 17 40 12 40 C7 40 2 39 1 36" 
        stroke="rgb(245,245,245)" 
        stroke-width="3" 
        fill="none" 
        stroke-linecap="round"/>
</svg>`,
    svgContentId: 9526291730,
    withExternalLayout: !0,
    ...Ki(
        {
            yFDZkqkds: {
                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32.53 52.15"><path d="M 10 30 C 10 25 15 20 20 20 C 25 20 30 25 30 30 C 30 35 25 40 20 40 C 15 40 10 35 10 30 Z" fill="rgb(245,245,245)"/><path d="M 20 20 L 20 15 C 20 10 25 5 30 5 L 35 5" fill="none" stroke="rgb(245,245,245)" stroke-width="2"/></svg>`,
                svgContentId: 11430761313,
            },
        },
        _,
        C
    ),
}),
                                                c(A, {
                                                    className: `framer-1tt83s6`,
                                                    "data-framer-name": `e`,
                                                    layout: `position`,
                                                    layoutDependency: k,
                                                    layoutId: `NVdtxOXA8`,
                                                    opacity: 1,
                                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 22.8 42.25"><path d="M 12.504 11.001 C 12.504 10.27 12.413 9.767 12.23 9.493 C 12.047 9.173 11.75 9.013 11.339 9.013 C 10.973 9.013 10.676 9.173 10.448 9.493 C 10.265 9.767 10.174 10.27 10.174 11.001 L 10.174 31.358 C 10.174 32.089 10.265 32.614 10.448 32.934 C 10.676 33.254 10.973 33.414 11.339 33.414 C 11.75 33.414 12.047 33.254 12.23 32.934 C 12.413 32.614 12.504 32.089 12.504 31.358 L 12.504 25.189 L 21.209 25.189 L 21.209 29.987 C 21.209 33.551 20.341 36.247 18.604 38.075 C 16.868 39.857 14.446 40.748 11.339 40.748 C 8.277 40.748 5.878 39.857 4.142 38.075 C 2.406 36.247 1.537 33.551 1.537 29.987 L 1.537 12.303 C 1.537 8.83 2.406 6.203 4.142 4.421 C 5.878 2.593 8.3 1.679 11.407 1.679 C 14.515 1.679 16.913 2.57 18.604 4.352 C 20.341 6.134 21.209 8.785 21.209 12.303 L 21.209 23.338 L 8.666 23.338 L 8.666 17.169 L 12.504 17.169 Z" fill="rgb(245,245,245)"></path></svg>`,
                                                    svgContentId: 11727917993,
                                                    withExternalLayout: !0,
                                                    ...Ki(
                                                        {
                                                            yFDZkqkds: {
                                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 23 42"><path d="M 12.504 11.001 C 12.504 10.27 12.413 9.767 12.23 9.493 C 12.047 9.173 11.75 9.013 11.339 9.013 C 10.973 9.013 10.676 9.173 10.448 9.493 C 10.265 9.767 10.174 10.27 10.174 11.001 L 10.174 31.358 C 10.174 32.089 10.265 32.614 10.448 32.934 C 10.676 33.254 10.973 33.414 11.339 33.414 C 11.75 33.414 12.047 33.254 12.23 32.934 C 12.413 32.614 12.504 32.089 12.504 31.358 L 12.504 25.189 L 21.209 25.189 L 21.209 29.987 C 21.209 33.551 20.341 36.247 18.604 38.075 C 16.868 39.857 14.446 40.748 11.339 40.748 C 8.277 40.748 5.878 39.857 4.142 38.075 C 2.406 36.247 1.537 33.551 1.537 29.987 L 1.537 12.303 C 1.537 8.83 2.406 6.203 4.142 4.421 C 5.878 2.593 8.3 1.679 11.407 1.679 C 14.515 1.679 16.913 2.57 18.604 4.352 C 20.341 6.134 21.209 8.785 21.209 12.303 L 21.209 23.338 L 8.666 23.338 L 8.666 17.169 L 12.504 17.169 Z" fill="rgb(245,245,245)"></path></svg>`,
                                                                svgContentId: 8626564716,
                                                            },
                                                        },
                                                        _,
                                                        C
                                                    ),
                                                }),
                                           c(A, {
    className: `framer-udutns`,
    "data-framer-name": `M`,
    layout: `position`,
    layoutDependency: k,
    layoutId: `W52PuUYoa`,
    opacity: 1,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32.53 52.15"><path d="M 1.495 1.616 L 1.495 50.654 L 6.5 50.654 L 6.5 1.616 Z" fill="rgb(245,245,245)"/><path d="M 6.5 1.616 L 20.5 1.616 C 25.5 1.616 30.899 6.5 30.899 13 L 30.899 39.5 C 30.899 46 25.5 50.654 20.5 50.654 L 6.5 50.654 Z" fill="rgb(245,245,245)"/></svg>`,
    svgContentId: 9996094185,
    withExternalLayout: !0
})
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                        }),
                    }),
                });
            })),
            (ra = [
                `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
                `.framer-Bu1Mq.framer-qtlqpq, .framer-Bu1Mq .framer-qtlqpq { display: block; }`,
                `.framer-Bu1Mq.framer-1y6kfat { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
                `.framer-Bu1Mq .framer-16ypiiz, .framer-Bu1Mq .framer-1ligbii { flex: none; gap: 0px; height: 52px; overflow: hidden; position: relative; width: 180px; }`,
                `.framer-Bu1Mq .framer-1uyw7qq, .framer-Bu1Mq .framer-1tch3r5 { bottom: 0px; flex: none; height: 42px; position: absolute; right: 0px; width: 23px; }`,
                `.framer-Bu1Mq .framer-d2g9b5, .framer-Bu1Mq .framer-1ie1gr2 { bottom: 0px; flex: none; height: 42px; position: absolute; right: 21px; width: 18px; }`,
                `.framer-Bu1Mq .framer-1dwvf7t, .framer-Bu1Mq .framer-1k99410 { bottom: 0px; flex: none; height: 42px; position: absolute; right: 38px; width: 23px; }`,
                `.framer-Bu1Mq .framer-1p9jcs2, .framer-Bu1Mq .framer-12wfkya { flex: none; height: 52px; position: absolute; right: 57px; top: 0px; width: 24px; }`,
                `.framer-Bu1Mq .framer-1x7m6pz, .framer-Bu1Mq .framer-b21e6i { flex: none; height: 52px; left: calc(46.313603322949135% - 19.06px / 2); position: absolute; top: 0px; width: 19px; }`,
                `.framer-Bu1Mq .framer-4uocvv, .framer-Bu1Mq .framer-dcmv8t { bottom: 0px; flex: none; height: 42px; left: 53px; position: absolute; width: 23px; }`,
                `.framer-Bu1Mq .framer-pn2qhz, .framer-Bu1Mq .framer-1tt83s6 { bottom: 0px; flex: none; height: 42px; left: 31px; position: absolute; width: 23px; }`,
                `.framer-Bu1Mq .framer-9maph0, .framer-Bu1Mq .framer-udutns { flex: none; height: 52px; left: 0px; position: absolute; top: calc(49.458483754512656% - 52.15px / 2); width: 33px; }`,
                `.framer-Bu1Mq.framer-v-14mj3c7 .framer-1ligbii { height: 52px; width: 56px; }`,
                `.framer-Bu1Mq.framer-v-14mj3c7 .framer-1tch3r5 { height: 42px; left: -75px; right: unset; width: 23px; }`,
                `.framer-Bu1Mq.framer-v-14mj3c7 .framer-1ie1gr2 { height: 43px; left: -96px; right: unset; width: 18px; }`,
                `.framer-Bu1Mq.framer-v-14mj3c7 .framer-1k99410 { height: 42px; left: -116px; right: unset; width: 22px; }`,
                `.framer-Bu1Mq.framer-v-14mj3c7 .framer-12wfkya { left: 32px; right: unset; top: calc(50.00000000000002% - 52.15px / 2); }`,
                `.framer-Bu1Mq.framer-v-14mj3c7 .framer-b21e6i { height: 52px; left: -134px; top: calc(50.00000000000002% - 52px / 2); width: 19px; }`,
                `.framer-Bu1Mq.framer-v-14mj3c7 .framer-dcmv8t { height: 42px; left: -155px; width: 23px; }`,
                `.framer-Bu1Mq.framer-v-14mj3c7 .framer-1tt83s6 { height: 42px; left: -169px; width: 23px; }`,
                `.framer-Bu1Mq.framer-v-1155q0h.framer-1y6kfat { height: 48px; }`,
            ]),
            (ia = K(na, ra, `framer-Bu1Mq`)),
            (ia.displayName = `Meet Vora`),
            (ia.defaultProps = { height: 52, width: 180 }),
            N(ia, { variant: { options: [`D8E0IBVn5`, `yFDZkqkds`, `W01nQ3NTm`], optionTitles: [`Variant 1`, `Variant 2`, `Variant 3`], title: `Variant`, type: T.Enum }, AhaOGR7uV: { title: `Mouse Enter`, type: T.EventHandler } }),
            M(ia, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 });
    });
function X(e, ...t) {
    let n = {};
    return t?.forEach((t) => t && Object.assign(n, e[t])), n;
}
var oa,
    sa,
    ca,
    la,
    ua,
    da,
    fa,
    pa,
    ma,
    ha,
    ga,
    _a,
    va,
    ya,
    ba,
    xa,
    Z,
    Sa = e(() => {
        i(),
            B(),
            b(),
            a(),
            or(),
            (oa = { aQvWFIEnA: { hover: !0, pressed: !0 }, HQGae3SrB: { hover: !0 }, Otejenld0: { hover: !0, pressed: !0 }, x0Gp9pFJk: { hover: !0 } }),
            (sa = [`HQGae3SrB`, `x0Gp9pFJk`, `aQvWFIEnA`, `Otejenld0`]),
            (ca = `framer-cDkRp`),
            (la = { aQvWFIEnA: `framer-v-1sjuzpc`, HQGae3SrB: `framer-v-1oyiq7u`, Otejenld0: `framer-v-w83q7r`, x0Gp9pFJk: `framer-v-16hrafv` }),
            (ua = { delay: 0, duration: 0.4, ease: [0.93, 0.21, 0.42, 0.97], type: `tween` }),
            (da = { bounce: 0.3, delay: 0, duration: 0.6, type: `spring` }),
            (fa = (e, t) => `translate(-50%, -50%) ${t}`),
            (pa = (e, t) => `translateX(-50%) ${t}`),
            (ma = (e, t) => `translateY(-50%) ${t}`),
            (ha = ({ value: e, children: t }) => {
                let n = u(y),
                    r = e ?? n.transition,
                    i = d(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
                return c(y.Provider, { value: i, children: t });
            }),
            (ga = S.create(g)),
            (_a = { "Mobile Nav items": `aQvWFIEnA`, "Mobile selected": `Otejenld0`, "Normal Nav Item": `HQGae3SrB`, Selected: `x0Gp9pFJk` }),
            (va = ({ height: e, iconVisibility: t, id: n, primaryTextColor: r, selectedTextColor: i, text: a, width: o, ...s }) => ({
                ...s,
                BEArdUrUv: r ?? s.BEArdUrUv ?? `rgb(255, 255, 255)`,
                MWuppPuA5: a ?? s.MWuppPuA5 ?? `Get started`,
                ND3loCKZn: t ?? s.ND3loCKZn ?? !0,
                pMW7b7CTY: i ?? s.pMW7b7CTY ?? `rgb(19, 19, 19)`,
                variant: _a[s.variant] ?? s.variant ?? `HQGae3SrB`,
            })),
            (ya = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
            (ba = n(function (e, t) {
                let n = l(null),
                    i = t ?? n,
                    a = r(),
                    { activeLocale: o, setLocale: s } = U();
                V();
                let { style: u, className: d, layoutId: f, variant: m, MWuppPuA5: h, ND3loCKZn: _, BEArdUrUv: y, pMW7b7CTY: b, ...x } = va(e),
                    { baseVariant: C, classNames: w, clearLoadingGesture: T, gestureHandlers: E, gestureVariant: D, isLoading: O, setGestureState: j, setVariant: M, variants: N } = G({
                        cycleOrder: sa,
                        defaultVariant: `HQGae3SrB`,
                        enabledGestures: oa,
                        ref: i,
                        variant: m,
                        variantClassNames: la,
                    }),
                    F = ya(e, N),
                    I = [ar],
                    L = P(ca, ...I),
                    R = () => !([`aQvWFIEnA-hover`, `Otejenld0-hover`, `aQvWFIEnA-pressed`, `Otejenld0-pressed`].includes(D) || [`aQvWFIEnA`, `Otejenld0`].includes(C)),
                    z = () => !!([`aQvWFIEnA-hover`, `Otejenld0-hover`, `aQvWFIEnA-pressed`, `Otejenld0-pressed`].includes(D) || [`aQvWFIEnA`, `Otejenld0`].includes(C)),
                    B = (e) => ([`aQvWFIEnA-hover`, `Otejenld0-hover`, `aQvWFIEnA-pressed`, `Otejenld0-pressed`].includes(D) || [`aQvWFIEnA`, `Otejenld0`].includes(C) ? e : !0);
                return c(v, {
                    id: f ?? a,
                    children: c(ga, {
                        animate: N,
                        initial: !1,
                        children: c(ha, {
                            value: ua,
                            ...X({ x0Gp9pFJk: { value: da } }, C, D),
                            children: p(S.div, {
                                ...x,
                                ...E,
                                className: P(L, `framer-1oyiq7u`, d, w),
                                "data-framer-name": `Normal Nav Item`,
                                layoutDependency: F,
                                layoutId: `HQGae3SrB`,
                                ref: i,
                                style: {
                                    "--border-bottom-width": `0px`,
                                    "--border-color": `rgba(0, 0, 0, 0)`,
                                    "--border-left-width": `0px`,
                                    "--border-right-width": `0px`,
                                    "--border-style": `solid`,
                                    "--border-top-width": `0px`,
                                    backgroundColor: `rgba(0, 0, 0, 0)`,
                                    borderBottomLeftRadius: 50,
                                    borderBottomRightRadius: 50,
                                    borderTopLeftRadius: 50,
                                    borderTopRightRadius: 50,
                                    ...u,
                                },
                                variants: {
                                    "aQvWFIEnA-hover": {
                                        "--border-bottom-width": `0.5px`,
                                        "--border-color": `rgba(255, 255, 255, 0.5)`,
                                        "--border-left-width": `0px`,
                                        "--border-right-width": `0px`,
                                        "--border-style": `solid`,
                                        "--border-top-width": `0px`,
                                        backgroundColor: `rgba(0, 0, 0, 0)`,
                                    },
                                    "aQvWFIEnA-pressed": {
                                        "--border-bottom-width": `0.5px`,
                                        "--border-color": `rgba(255, 255, 255, 0.5)`,
                                        "--border-left-width": `0px`,
                                        "--border-right-width": `0px`,
                                        "--border-style": `solid`,
                                        "--border-top-width": `0px`,
                                        backgroundColor: `rgba(0, 0, 0, 0)`,
                                    },
                                    "HQGae3SrB-hover": { backgroundColor: `rgba(0, 0, 0, 0)` },
                                    "Otejenld0-hover": { "--border-bottom-width": `0px`, "--border-left-width": `0px`, "--border-right-width": `0px`, "--border-top-width": `0px` },
                                    "Otejenld0-pressed": { "--border-bottom-width": `0px`, "--border-left-width": `0px`, "--border-right-width": `0px`, "--border-top-width": `0px` },
                                    "x0Gp9pFJk-hover": { backgroundColor: `rgba(0, 0, 0, 0)` },
                                    aQvWFIEnA: { borderBottomLeftRadius: 0, borderBottomRightRadius: 0, borderTopLeftRadius: 0, borderTopRightRadius: 0 },
                                    Otejenld0: { backgroundColor: `rgb(255, 255, 255)`, borderBottomLeftRadius: 0, borderBottomRightRadius: 0, borderTopLeftRadius: 0, borderTopRightRadius: 0 },
                                },
                                ...X(
                                    {
                                        "aQvWFIEnA-hover": { "data-border": !0, "data-framer-name": void 0 },
                                        "aQvWFIEnA-pressed": { "data-border": !0, "data-framer-name": void 0 },
                                        "HQGae3SrB-hover": { "data-framer-name": void 0 },
                                        "Otejenld0-hover": { "data-framer-name": void 0 },
                                        "Otejenld0-pressed": { "data-framer-name": void 0 },
                                        "x0Gp9pFJk-hover": { "data-framer-name": void 0 },
                                        aQvWFIEnA: { "data-framer-name": `Mobile Nav items` },
                                        Otejenld0: { "data-framer-name": `Mobile selected` },
                                        x0Gp9pFJk: { "data-framer-name": `Selected` },
                                    },
                                    C,
                                    D
                                ),
                                children: [
                                    R() &&
                                        p(S.div, {
                                            className: `framer-y23ajx`,
                                            "data-framer-name": `Desktop`,
                                            layoutDependency: F,
                                            layoutId: `HXIy4qYTX`,
                                            style: {
                                                "--border-bottom-width": `0px`,
                                                "--border-color": `rgba(0, 0, 0, 0)`,
                                                "--border-left-width": `0px`,
                                                "--border-right-width": `0px`,
                                                "--border-style": `solid`,
                                                "--border-top-width": `0px`,
                                                backgroundColor: `rgba(0, 0, 0, 0)`,
                                                borderBottomLeftRadius: 50,
                                                borderBottomRightRadius: 50,
                                                borderTopLeftRadius: 50,
                                                borderTopRightRadius: 50,
                                            },
                                            variants: {
                                                "HQGae3SrB-hover": {
                                                    "--border-bottom-width": `1.5px`,
                                                    "--border-color": `rgb(255, 255, 255)`,
                                                    "--border-left-width": `1.5px`,
                                                    "--border-right-width": `1.5px`,
                                                    "--border-style": `solid`,
                                                    "--border-top-width": `1.5px`,
                                                    backgroundColor: `rgba(0, 0, 0, 0)`,
                                                },
                                                x0Gp9pFJk: {
                                                    "--border-bottom-width": `1.5px`,
                                                    "--border-color": `rgb(255, 255, 255)`,
                                                    "--border-left-width": `1.5px`,
                                                    "--border-right-width": `1.5px`,
                                                    "--border-style": `solid`,
                                                    "--border-top-width": `1.5px`,
                                                    backgroundColor: `rgb(255, 255, 255)`,
                                                    borderBottomLeftRadius: 24,
                                                    borderBottomRightRadius: 24,
                                                    borderTopLeftRadius: 24,
                                                    borderTopRightRadius: 24,
                                                },
                                            },
                                            ...X({ "HQGae3SrB-hover": { "data-border": !0 }, x0Gp9pFJk: { "data-border": !0 } }, C, D),
                                            children: [
                                                p(S.div, {
                                                    className: `framer-1sydt2p`,
                                                    "data-framer-name": `Text`,
                                                    layoutDependency: F,
                                                    layoutId: `EEo6uojdQ`,
                                                    style: { borderBottomLeftRadius: 100, borderBottomRightRadius: 100, borderTopLeftRadius: 100, borderTopRightRadius: 100 },
                                                    children: [
                                                        c(k, {
                                                            __fromCanvasComponent: !0,
                                                            children: c(g, {
                                                                children: c(S.p, {
                                                                    className: `framer-styles-preset-1m5ko0`,
                                                                    "data-styles-preset": `MxRbawjh0`,
                                                                    style: { "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-BEArdUrUv-P_j6YT2Qg))` },
                                                                    children: `BUTTON`,
                                                                }),
                                                            }),
                                                            className: `framer-u9k9ex`,
                                                            "data-framer-name": `Relative`,
                                                            fonts: [`Inter`],
                                                            layoutDependency: F,
                                                            layoutId: `EEo6uojdQsJfoVjG9o`,
                                                            style: {
                                                                "--extracted-r6o4lv": `var(--variable-reference-BEArdUrUv-P_j6YT2Qg)`,
                                                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                                                "--framer-link-text-decoration": `underline`,
                                                                "--variable-reference-BEArdUrUv-P_j6YT2Qg": y,
                                                                opacity: 0,
                                                            },
                                                            text: h,
                                                            verticalAlignment: `top`,
                                                            withExternalLayout: !0,
                                                        }),
                                                        c(k, {
                                                            __fromCanvasComponent: !0,
                                                            children: c(g, {
                                                                children: c(S.p, {
                                                                    className: `framer-styles-preset-1m5ko0`,
                                                                    "data-styles-preset": `MxRbawjh0`,
                                                                    style: { "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-BEArdUrUv-P_j6YT2Qg))` },
                                                                    children: `BUTTON`,
                                                                }),
                                                            }),
                                                            className: `framer-32q8dp`,
                                                            "data-framer-name": `Text 1`,
                                                            fonts: [`Inter`],
                                                            layoutDependency: F,
                                                            layoutId: `EEo6uojdQw_u4oX2RQ`,
                                                            style: {
                                                                "--extracted-r6o4lv": `var(--variable-reference-BEArdUrUv-P_j6YT2Qg)`,
                                                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                                                "--framer-link-text-decoration": `underline`,
                                                                "--variable-reference-BEArdUrUv-P_j6YT2Qg": y,
                                                                "--variable-reference-pMW7b7CTY-P_j6YT2Qg": b,
                                                                opacity: 1,
                                                                rotateX: 0,
                                                                transformPerspective: 500,
                                                            },
                                                            text: h,
                                                            transformTemplate: fa,
                                                            variants: {
                                                                "HQGae3SrB-hover": { opacity: 0, rotateX: 90 },
                                                                "x0Gp9pFJk-hover": { opacity: 0, rotateX: 90 },
                                                                x0Gp9pFJk: { "--extracted-r6o4lv": `var(--variable-reference-pMW7b7CTY-P_j6YT2Qg)`, "--variable-reference-pMW7b7CTY-P_j6YT2Qg": b },
                                                            },
                                                            verticalAlignment: `top`,
                                                            withExternalLayout: !0,
                                                            ...X(
                                                                {
                                                                    "HQGae3SrB-hover": { transformTemplate: pa },
                                                                    "x0Gp9pFJk-hover": { transformTemplate: void 0 },
                                                                    x0Gp9pFJk: {
                                                                        children: c(g, {
                                                                            children: c(S.p, {
                                                                                className: `framer-styles-preset-1m5ko0`,
                                                                                "data-styles-preset": `MxRbawjh0`,
                                                                                style: { "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-pMW7b7CTY-P_j6YT2Qg))` },
                                                                                children: `Get started`,
                                                                            }),
                                                                        }),
                                                                    },
                                                                },
                                                                C,
                                                                D
                                                            ),
                                                        }),
                                                        c(k, {
                                                            __fromCanvasComponent: !0,
                                                            children: c(g, {
                                                                children: c(S.p, {
                                                                    className: `framer-styles-preset-1m5ko0`,
                                                                    "data-styles-preset": `MxRbawjh0`,
                                                                    style: { "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-BEArdUrUv-P_j6YT2Qg))` },
                                                                    children: `BUTTON`,
                                                                }),
                                                            }),
                                                            className: `framer-1x7vv1e`,
                                                            "data-framer-name": `Text 2`,
                                                            fonts: [`Inter`],
                                                            layoutDependency: F,
                                                            layoutId: `EEo6uojdQEjxiMy9KL`,
                                                            style: {
                                                                "--extracted-r6o4lv": `var(--variable-reference-BEArdUrUv-P_j6YT2Qg)`,
                                                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                                                "--framer-link-text-decoration": `underline`,
                                                                "--variable-reference-BEArdUrUv-P_j6YT2Qg": y,
                                                                "--variable-reference-pMW7b7CTY-P_j6YT2Qg": b,
                                                                opacity: 0,
                                                                rotateX: -90,
                                                                transformPerspective: 500,
                                                            },
                                                            text: h,
                                                            transformTemplate: pa,
                                                            variants: {
                                                                "HQGae3SrB-hover": { opacity: 1, rotateX: 0 },
                                                                "x0Gp9pFJk-hover": { opacity: 1, rotateX: 0 },
                                                                x0Gp9pFJk: { "--extracted-r6o4lv": `var(--variable-reference-pMW7b7CTY-P_j6YT2Qg)`, "--variable-reference-pMW7b7CTY-P_j6YT2Qg": b },
                                                            },
                                                            verticalAlignment: `top`,
                                                            withExternalLayout: !0,
                                                            ...X(
                                                                {
                                                                    "HQGae3SrB-hover": { transformTemplate: fa },
                                                                    "x0Gp9pFJk-hover": { transformTemplate: ma },
                                                                    x0Gp9pFJk: {
                                                                        children: c(g, {
                                                                            children: c(S.p, {
                                                                                className: `framer-styles-preset-1m5ko0`,
                                                                                "data-styles-preset": `MxRbawjh0`,
                                                                                style: { "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-pMW7b7CTY-P_j6YT2Qg))` },
                                                                                children: `Get started`,
                                                                            }),
                                                                        }),
                                                                    },
                                                                },
                                                                C,
                                                                D
                                                            ),
                                                        }),
                                                    ],
                                                }),
                                                _ &&
                                                    p(S.div, {
                                                        className: `framer-rvmvr8`,
                                                        layoutDependency: F,
                                                        layoutId: `b01XSD1ba`,
                                                        children: [
                                                            c(S.div, {
                                                                className: `framer-10v2kiq`,
                                                                layoutDependency: F,
                                                                layoutId: `ykt8wiShw`,
                                                                style: { opacity: 0 },
                                                                variants: { "x0Gp9pFJk-hover": { opacity: 1 } },
                                                                children: c(A, {
                                                                    className: `framer-12rt17e`,
                                                                    "data-framer-name": `vuesax/linear/receive-square`,
                                                                    layout: `position`,
                                                                    layoutDependency: F,
                                                                    layoutId: `YKnZOYiUa`,
                                                                    opacity: 1,
                                                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16"><path d="M 4.402 7.6 L 8.002 11.2 L 11.602 7.6" fill="transparent" stroke-width="1.5" stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 8.004 11.2 L 8.004 1.6" fill="transparent" stroke-width="1.5" stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 0.801 13.6 C 5.469 15.16 10.533 15.16 15.201 13.6" fill="transparent" stroke-width="1.5" stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                                                                    svgContentId: 9703014455,
                                                                    withExternalLayout: !0,
                                                                    ...X(
                                                                        {
                                                                            "x0Gp9pFJk-hover": {
                                                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 18 18"><path d="M 4.402 7.6 L 8.002 11.2 L 11.602 7.6" fill="transparent" stroke-width="1.5" stroke="rgb(19, 19, 19)" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 8.004 11.2 L 8.004 1.6" fill="transparent" stroke-width="1.5" stroke="rgb(19, 19, 19)" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 0.801 13.6 C 5.469 15.16 10.533 15.16 15.201 13.6" fill="transparent" stroke-width="1.5" stroke="rgb(19, 19, 19)" stroke-linecap="round" stroke-linejoin="round"></path></svg>`,
                                                                                svgContentId: 11310362277,
                                                                            },
                                                                            x0Gp9pFJk: {
                                                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16"><path d="M 4.402 7.6 L 8.002 11.2 L 11.602 7.6" fill="transparent" stroke-width="1.5" stroke="rgb(19, 19, 19)" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 8.004 11.2 L 8.004 1.6" fill="transparent" stroke-width="1.5" stroke="rgb(19, 19, 19)" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 0.801 13.6 C 5.469 15.16 10.533 15.16 15.201 13.6" fill="transparent" stroke-width="1.5" stroke="rgb(19, 19, 19)" stroke-linecap="round" stroke-linejoin="round"></path></svg>`,
                                                                                svgContentId: 9646681232,
                                                                            },
                                                                        },
                                                                        C,
                                                                        D
                                                                    ),
                                                                }),
                                                            }),
                                                            c(S.div, {
                                                                className: `framer-k4wcc`,
                                                                layoutDependency: F,
                                                                layoutId: `onvi9A84l`,
                                                                style: { opacity: 1, rotateX: 0, rotateY: 0, transformPerspective: 500 },
                                                                transformTemplate: fa,
                                                                variants: { "HQGae3SrB-hover": { opacity: 0, rotateX: 90 }, "x0Gp9pFJk-hover": { opacity: 0, rotateX: 90, rotateY: 20 } },
                                                                ...X({ "HQGae3SrB-hover": { transformTemplate: pa } }, C, D),
                                                                children: c(A, {
                                                                    className: `framer-13i85zn`,
                                                                    "data-framer-name": `vuesax/linear/receive-square`,
                                                                    layout: `position`,
                                                                    layoutDependency: F,
                                                                    layoutId: `Gki1K1YgX`,
                                                                    opacity: 1,
                                                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16"><path d="M 4.402 7.6 L 8.002 11.2 L 11.602 7.6" fill="transparent" stroke-width="1.5" stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 8.004 11.2 L 8.004 1.6" fill="transparent" stroke-width="1.5" stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 0.801 13.6 C 5.469 15.16 10.533 15.16 15.201 13.6" fill="transparent" stroke-width="1.5" stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                                                                    svgContentId: 9703014455,
                                                                    withExternalLayout: !0,
                                                                    ...X(
                                                                        {
                                                                            "x0Gp9pFJk-hover": {
                                                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 18 18"><path d="M 4.402 7.6 L 8.002 11.2 L 11.602 7.6" fill="transparent" stroke-width="2" stroke="rgb(19, 19, 19)" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 8.004 11.2 L 8.004 1.6" fill="transparent" stroke-width="2" stroke="rgb(19, 19, 19)" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 0.801 13.6 C 5.469 15.16 10.533 15.16 15.201 13.6" fill="transparent" stroke-width="2" stroke="rgb(19, 19, 19)" stroke-linecap="round" stroke-linejoin="round"></path></svg>`,
                                                                                svgContentId: 9856842946,
                                                                            },
                                                                            x0Gp9pFJk: {
                                                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16"><path d="M 4.402 7.6 L 8.002 11.2 L 11.602 7.6" fill="transparent" stroke-width="1.5" stroke="rgb(19, 19, 19)" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 8.004 11.2 L 8.004 1.6" fill="transparent" stroke-width="1.5" stroke="rgb(19, 19, 19)" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 0.801 13.6 C 5.469 15.16 10.533 15.16 15.201 13.6" fill="transparent" stroke-width="1.5" stroke="rgb(19, 19, 19)" stroke-linecap="round" stroke-linejoin="round"></path></svg>`,
                                                                                svgContentId: 9646681232,
                                                                            },
                                                                        },
                                                                        C,
                                                                        D
                                                                    ),
                                                                }),
                                                            }),
                                                            c(S.div, {
                                                                className: `framer-1x0klss`,
                                                                layoutDependency: F,
                                                                layoutId: `MZTHXlwFQ`,
                                                                style: { opacity: 0, rotateX: -90, transformPerspective: 500 },
                                                                transformTemplate: pa,
                                                                variants: { "HQGae3SrB-hover": { opacity: 1, rotateX: 0 }, "x0Gp9pFJk-hover": { rotateX: 0 } },
                                                                ...X({ "HQGae3SrB-hover": { transformTemplate: fa } }, C, D),
                                                                children: c(A, {
                                                                    className: `framer-mmzed`,
                                                                    "data-framer-name": `vuesax/linear/receive-square`,
                                                                    layout: `position`,
                                                                    layoutDependency: F,
                                                                    layoutId: `jj7TdzXKg`,
                                                                    opacity: 1,
                                                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16"><path d="M 4.402 7.6 L 8.002 11.2 L 11.602 7.6" fill="transparent" stroke-width="1.5" stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 8.004 11.2 L 8.004 1.6" fill="transparent" stroke-width="1.5" stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 0.801 13.6 C 5.469 15.16 10.533 15.16 15.201 13.6" fill="transparent" stroke-width="1.5" stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                                                                    svgContentId: 9703014455,
                                                                    withExternalLayout: !0,
                                                                    ...X(
                                                                        {
                                                                            "x0Gp9pFJk-hover": {
                                                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 18 18"><path d="M 5.402 8.6 L 9.002 12.2 L 12.602 8.6" fill="transparent" stroke-width="2" stroke="rgb(19, 19, 19)" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 9.004 12.2 L 9.004 2.6" fill="transparent" stroke-width="2" stroke="rgb(19, 19, 19)" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 1.801 14.6 C 6.469 16.16 11.533 16.16 16.201 14.6" fill="transparent" stroke-width="2" stroke="rgb(19, 19, 19)" stroke-linecap="round" stroke-linejoin="round"></path></svg>`,
                                                                                svgContentId: 11526763125,
                                                                            },
                                                                        },
                                                                        C,
                                                                        D
                                                                    ),
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                            ],
                                        }),
                                    z() &&
                                        p(S.div, {
                                            className: `framer-1yare5s`,
                                            "data-framer-name": `Mobile`,
                                            layoutDependency: F,
                                            layoutId: `uKw3goWBq`,
                                            style: { borderBottomLeftRadius: 50, borderBottomRightRadius: 50, borderTopLeftRadius: 50, borderTopRightRadius: 50 },
                                            children: [
                                                p(S.div, {
                                                    className: `framer-1tbnoom`,
                                                    "data-framer-name": `Text`,
                                                    layoutDependency: F,
                                                    layoutId: `YU9zg17dJ`,
                                                    style: { borderBottomLeftRadius: 100, borderBottomRightRadius: 100, borderTopLeftRadius: 100, borderTopRightRadius: 100 },
                                                    children: [
                                                        c(k, {
                                                            __fromCanvasComponent: !0,
                                                            children: c(g, {
                                                                children: c(S.p, {
                                                                    className: `framer-styles-preset-1m5ko0`,
                                                                    "data-styles-preset": `MxRbawjh0`,
                                                                    style: { "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-BEArdUrUv-P_j6YT2Qg))` },
                                                                    children: `BUTTON`,
                                                                }),
                                                            }),
                                                            className: `framer-sphxg0`,
                                                            "data-framer-name": `Relative`,
                                                            fonts: [`Inter`],
                                                            layoutDependency: F,
                                                            layoutId: `Z37zK9U9d`,
                                                            style: {
                                                                "--extracted-r6o4lv": `var(--variable-reference-BEArdUrUv-P_j6YT2Qg)`,
                                                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                                                "--framer-link-text-decoration": `underline`,
                                                                "--variable-reference-BEArdUrUv-P_j6YT2Qg": y,
                                                                opacity: 0,
                                                            },
                                                            text: h,
                                                            verticalAlignment: `top`,
                                                            withExternalLayout: !0,
                                                        }),
                                                        c(k, {
                                                            __fromCanvasComponent: !0,
                                                            children: c(g, {
                                                                children: c(S.p, {
                                                                    className: `framer-styles-preset-1m5ko0`,
                                                                    "data-styles-preset": `MxRbawjh0`,
                                                                    style: { "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-BEArdUrUv-P_j6YT2Qg))` },
                                                                    children: `BUTTON`,
                                                                }),
                                                            }),
                                                            className: `framer-o7wqth`,
                                                            "data-framer-name": `Text 1`,
                                                            fonts: [`Inter`],
                                                            layoutDependency: F,
                                                            layoutId: `decxIyNMr`,
                                                            style: {
                                                                "--extracted-r6o4lv": `var(--variable-reference-BEArdUrUv-P_j6YT2Qg)`,
                                                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                                                "--framer-link-text-decoration": `underline`,
                                                                "--variable-reference-BEArdUrUv-P_j6YT2Qg": y,
                                                                "--variable-reference-pMW7b7CTY-P_j6YT2Qg": b,
                                                                opacity: 1,
                                                                rotateX: 0,
                                                                transformPerspective: 500,
                                                            },
                                                            text: h,
                                                            transformTemplate: fa,
                                                            variants: {
                                                                "aQvWFIEnA-hover": { opacity: 0, rotateX: 90 },
                                                                "aQvWFIEnA-pressed": { opacity: 0, rotateX: 90 },
                                                                "Otejenld0-hover": { opacity: 0, rotateX: 90 },
                                                                "Otejenld0-pressed": { opacity: 0, rotateX: 90 },
                                                                Otejenld0: { "--extracted-r6o4lv": `var(--variable-reference-pMW7b7CTY-P_j6YT2Qg)`, "--variable-reference-pMW7b7CTY-P_j6YT2Qg": b },
                                                            },
                                                            verticalAlignment: `top`,
                                                            withExternalLayout: !0,
                                                            ...X(
                                                                {
                                                                    "aQvWFIEnA-hover": { transformTemplate: void 0 },
                                                                    "aQvWFIEnA-pressed": { transformTemplate: void 0 },
                                                                    "Otejenld0-hover": { transformTemplate: void 0 },
                                                                    "Otejenld0-pressed": { transformTemplate: void 0 },
                                                                    Otejenld0: {
                                                                        children: c(g, {
                                                                            children: c(S.p, {
                                                                                className: `framer-styles-preset-1m5ko0`,
                                                                                "data-styles-preset": `MxRbawjh0`,
                                                                                style: { "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-pMW7b7CTY-P_j6YT2Qg))` },
                                                                                children: `Get started`,
                                                                            }),
                                                                        }),
                                                                    },
                                                                },
                                                                C,
                                                                D
                                                            ),
                                                        }),
                                                        c(k, {
                                                            __fromCanvasComponent: !0,
                                                            children: c(g, {
                                                                children: c(S.p, {
                                                                    className: `framer-styles-preset-1m5ko0`,
                                                                    "data-styles-preset": `MxRbawjh0`,
                                                                    style: { "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-BEArdUrUv-P_j6YT2Qg))` },
                                                                    children: `BUTTON`,
                                                                }),
                                                            }),
                                                            className: `framer-5b3xld`,
                                                            "data-framer-name": `Text 2`,
                                                            fonts: [`Inter`],
                                                            layoutDependency: F,
                                                            layoutId: `HwMRO5P7h`,
                                                            style: {
                                                                "--extracted-r6o4lv": `var(--variable-reference-BEArdUrUv-P_j6YT2Qg)`,
                                                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                                                "--framer-link-text-decoration": `underline`,
                                                                "--variable-reference-BEArdUrUv-P_j6YT2Qg": y,
                                                                "--variable-reference-pMW7b7CTY-P_j6YT2Qg": b,
                                                                opacity: 0,
                                                                rotateX: -90,
                                                                transformPerspective: 500,
                                                            },
                                                            text: h,
                                                            transformTemplate: pa,
                                                            variants: {
                                                                "aQvWFIEnA-hover": { opacity: 1, rotateX: 0 },
                                                                "aQvWFIEnA-pressed": { opacity: 1, rotateX: 0 },
                                                                "Otejenld0-hover": { opacity: 1, rotateX: 0 },
                                                                "Otejenld0-pressed": { opacity: 1, rotateX: 0 },
                                                                Otejenld0: { "--extracted-r6o4lv": `var(--variable-reference-pMW7b7CTY-P_j6YT2Qg)`, "--variable-reference-pMW7b7CTY-P_j6YT2Qg": b },
                                                            },
                                                            verticalAlignment: `top`,
                                                            withExternalLayout: !0,
                                                            ...X(
                                                                {
                                                                    "aQvWFIEnA-hover": { transformTemplate: ma },
                                                                    "aQvWFIEnA-pressed": { transformTemplate: ma },
                                                                    "Otejenld0-hover": { transformTemplate: ma },
                                                                    "Otejenld0-pressed": { transformTemplate: ma },
                                                                    Otejenld0: {
                                                                        children: c(g, {
                                                                            children: c(S.p, {
                                                                                className: `framer-styles-preset-1m5ko0`,
                                                                                "data-styles-preset": `MxRbawjh0`,
                                                                                style: { "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-pMW7b7CTY-P_j6YT2Qg))` },
                                                                                children: `Get started`,
                                                                            }),
                                                                        }),
                                                                    },
                                                                },
                                                                C,
                                                                D
                                                            ),
                                                        }),
                                                    ],
                                                }),
                                                B(_) &&
                                                    p(S.div, {
                                                        className: `framer-14yuh0a`,
                                                        layoutDependency: F,
                                                        layoutId: `sl77bxCZH`,
                                                        children: [
                                                            c(S.div, {
                                                                className: `framer-1vtlu1s`,
                                                                layoutDependency: F,
                                                                layoutId: `ms29hyv6e`,
                                                                style: { opacity: 1, rotateX: 0, rotateY: 0 },
                                                                variants: {
                                                                    "aQvWFIEnA-hover": { opacity: 0, rotateX: 90, rotateY: 20 },
                                                                    "aQvWFIEnA-pressed": { opacity: 0, rotateX: 90, rotateY: 20 },
                                                                    "Otejenld0-hover": { opacity: 0, rotateX: 90, rotateY: 20 },
                                                                    "Otejenld0-pressed": { opacity: 0, rotateX: 90, rotateY: 20 },
                                                                },
                                                                children: c(A, {
                                                                    className: `framer-e1ppf2`,
                                                                    "data-framer-name": `vuesax/linear/receive-square`,
                                                                    layout: `position`,
                                                                    layoutDependency: F,
                                                                    layoutId: `ODkNkCvYp`,
                                                                    opacity: 1,
                                                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16"><path d="M 4.402 7.6 L 8.002 11.2 L 11.602 7.6" fill="transparent" stroke-width="1.5" stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 8.004 11.2 L 8.004 1.6" fill="transparent" stroke-width="1.5" stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 0.801 13.6 C 5.469 15.16 10.533 15.16 15.201 13.6" fill="transparent" stroke-width="1.5" stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                                                                    svgContentId: 9703014455,
                                                                    withExternalLayout: !0,
                                                                    ...X(
                                                                        {
                                                                            Otejenld0: {
                                                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16"><path d="M 4.402 7.6 L 8.002 11.2 L 11.602 7.6" fill="transparent" stroke-width="1.5" stroke="rgb(17, 17, 17)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 8.004 11.2 L 8.004 1.6" fill="transparent" stroke-width="1.5" stroke="rgb(17, 17, 17)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 0.801 13.6 C 5.469 15.16 10.533 15.16 15.201 13.6" fill="transparent" stroke-width="1.5" stroke="rgb(17, 17, 17)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                                                                                svgContentId: 12814880471,
                                                                            },
                                                                        },
                                                                        C,
                                                                        D
                                                                    ),
                                                                }),
                                                            }),
                                                            c(S.div, {
                                                                className: `framer-1qro43j`,
                                                                layoutDependency: F,
                                                                layoutId: `beNVt1Q31`,
                                                                style: { opacity: 1, rotateX: 90, rotateY: 20 },
                                                                variants: {
                                                                    "aQvWFIEnA-hover": { opacity: 1, rotateX: 0, rotateY: 0 },
                                                                    "aQvWFIEnA-pressed": { opacity: 1, rotateX: 0, rotateY: 0 },
                                                                    "Otejenld0-hover": { opacity: 1, rotateX: 0, rotateY: 0 },
                                                                    "Otejenld0-pressed": { opacity: 1, rotateX: 0, rotateY: 0 },
                                                                    aQvWFIEnA: { opacity: 0 },
                                                                    Otejenld0: { opacity: 0 },
                                                                },
                                                                children: c(A, {
                                                                    className: `framer-13etha6`,
                                                                    "data-framer-name": `vuesax/linear/receive-square`,
                                                                    layout: `position`,
                                                                    layoutDependency: F,
                                                                    layoutId: `ue2YJJTrP`,
                                                                    opacity: 1,
                                                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16"><path d="M 4.402 7.6 L 8.002 11.2 L 11.602 7.6" fill="transparent" stroke-width="1.5" stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 8.004 11.2 L 8.004 1.6" fill="transparent" stroke-width="1.5" stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 0.801 13.6 C 5.469 15.16 10.533 15.16 15.201 13.6" fill="transparent" stroke-width="1.5" stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                                                                    svgContentId: 9703014455,
                                                                    withExternalLayout: !0,
                                                                    ...X(
                                                                        {
                                                                            Otejenld0: {
                                                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16"><path d="M 4.402 7.6 L 8.002 11.2 L 11.602 7.6" fill="transparent" stroke-width="1.5" stroke="rgb(17, 17, 17)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 8.004 11.2 L 8.004 1.6" fill="transparent" stroke-width="1.5" stroke="rgb(17, 17, 17)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 0.801 13.6 C 5.469 15.16 10.533 15.16 15.201 13.6" fill="transparent" stroke-width="1.5" stroke="rgb(17, 17, 17)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                                                                                svgContentId: 12814880471,
                                                                            },
                                                                        },
                                                                        C,
                                                                        D
                                                                    ),
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                            ],
                                        }),
                                ],
                            }),
                        }),
                    }),
                });
            })),
            (xa = [
                `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
                `.framer-cDkRp.framer-1wls1zw, .framer-cDkRp .framer-1wls1zw { display: block; }`,
                `.framer-cDkRp.framer-1oyiq7u { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
                `.framer-cDkRp .framer-y23ajx { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 24px 0px 24px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
                `.framer-cDkRp .framer-1sydt2p, .framer-cDkRp .framer-1tbnoom { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 44px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
                `.framer-cDkRp .framer-u9k9ex, .framer-cDkRp .framer-sphxg0 { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }`,
                `.framer-cDkRp .framer-32q8dp, .framer-cDkRp .framer-o7wqth { -webkit-user-select: none; flex: none; height: auto; left: 50%; position: absolute; top: 50%; user-select: none; white-space: pre; width: auto; z-index: 1; }`,
                `.framer-cDkRp .framer-1x7vv1e, .framer-cDkRp .framer-5b3xld { -webkit-user-select: none; bottom: 0px; flex: none; height: auto; left: 50%; position: absolute; user-select: none; white-space: pre; width: auto; z-index: 1; }`,
                `.framer-cDkRp .framer-rvmvr8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: 16px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
                `.framer-cDkRp .framer-10v2kiq, .framer-cDkRp .framer-1vtlu1s { -webkit-user-select: none; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; padding: 0px; position: relative; user-select: none; width: min-content; }`,
                `.framer-cDkRp .framer-12rt17e, .framer-cDkRp .framer-13i85zn, .framer-cDkRp .framer-mmzed, .framer-cDkRp .framer-e1ppf2, .framer-cDkRp .framer-13etha6 { flex: none; height: 16px; position: relative; width: 16px; }`,
                `.framer-cDkRp .framer-k4wcc { -webkit-user-select: none; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; left: 50%; padding: 0px; position: absolute; top: 50%; user-select: none; width: min-content; z-index: 1; }`,
                `.framer-cDkRp .framer-1x0klss { align-content: center; align-items: center; bottom: -18px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; left: 50%; padding: 0px; position: absolute; width: min-content; z-index: 1; }`,
                `.framer-cDkRp .framer-1yare5s { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: hidden; padding: 8px 24px 0px 0px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
                `.framer-cDkRp .framer-14yuh0a { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: 16px; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
                `.framer-cDkRp .framer-1qro43j { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; padding: 0px; position: relative; width: min-content; }`,
                `.framer-cDkRp.framer-v-16hrafv .framer-y23ajx, .framer-cDkRp.framer-v-1oyiq7u.hover.framer-1oyiq7u, .framer-cDkRp.framer-v-1oyiq7u.hover .framer-y23ajx { overflow: visible; will-change: unset; }`,
                `.framer-cDkRp.framer-v-16hrafv .framer-rvmvr8 { gap: 8px; }`,
                `.framer-cDkRp.framer-v-1sjuzpc.framer-1oyiq7u, .framer-cDkRp.framer-v-w83q7r.framer-1oyiq7u { align-content: flex-start; align-items: flex-start; justify-content: flex-start; will-change: unset; }`,
                `.framer-cDkRp.framer-v-1sjuzpc .framer-1yare5s, .framer-cDkRp.framer-v-w83q7r .framer-1yare5s { gap: 8px; justify-content: flex-start; }`,
                `.framer-cDkRp.framer-v-1sjuzpc .framer-14yuh0a, .framer-cDkRp.framer-v-1sjuzpc .framer-1vtlu1s, .framer-cDkRp.framer-v-1sjuzpc .framer-1qro43j, .framer-cDkRp.framer-v-w83q7r .framer-14yuh0a, .framer-cDkRp.framer-v-w83q7r .framer-1vtlu1s, .framer-cDkRp.framer-v-w83q7r .framer-1qro43j { height: 24px; width: 24px; }`,
                `.framer-cDkRp.framer-v-1oyiq7u.hover .framer-32q8dp { left: 49%; top: -10px; }`,
                `.framer-cDkRp.framer-v-1oyiq7u.hover .framer-1x7vv1e { bottom: unset; left: 49%; top: 50%; }`,
                `.framer-cDkRp.framer-v-1oyiq7u.hover .framer-k4wcc { top: -8px; }`,
                `.framer-cDkRp.framer-v-1oyiq7u.hover .framer-1x0klss { bottom: unset; top: 50%; }`,
                `.framer-cDkRp.framer-v-16hrafv.hover .framer-y23ajx, .framer-cDkRp.framer-v-1sjuzpc.hover.framer-1oyiq7u, .framer-cDkRp.framer-v-w83q7r.hover.framer-1oyiq7u, .framer-cDkRp.framer-v-1sjuzpc.pressed.framer-1oyiq7u, .framer-cDkRp.framer-v-w83q7r.pressed.framer-1oyiq7u { will-change: unset; }`,
                `.framer-cDkRp.framer-v-16hrafv.hover .framer-32q8dp, .framer-cDkRp.framer-v-1sjuzpc.hover .framer-o7wqth, .framer-cDkRp.framer-v-w83q7r.hover .framer-o7wqth, .framer-cDkRp.framer-v-1sjuzpc.pressed .framer-o7wqth, .framer-cDkRp.framer-v-w83q7r.pressed .framer-o7wqth { left: unset; right: 0px; top: -10px; }`,
                `.framer-cDkRp.framer-v-16hrafv.hover .framer-1x7vv1e, .framer-cDkRp.framer-v-1sjuzpc.hover .framer-5b3xld, .framer-cDkRp.framer-v-w83q7r.hover .framer-5b3xld, .framer-cDkRp.framer-v-1sjuzpc.pressed .framer-5b3xld, .framer-cDkRp.framer-v-w83q7r.pressed .framer-5b3xld { bottom: unset; left: unset; right: 0px; top: 50%; }`,
                `.framer-cDkRp.framer-v-16hrafv.hover .framer-rvmvr8, .framer-cDkRp.framer-v-1sjuzpc.hover .framer-14yuh0a, .framer-cDkRp.framer-v-w83q7r.hover .framer-14yuh0a, .framer-cDkRp.framer-v-1sjuzpc.pressed .framer-14yuh0a, .framer-cDkRp.framer-v-w83q7r.pressed .framer-14yuh0a { justify-content: flex-end; }`,
                `.framer-cDkRp.framer-v-16hrafv.hover .framer-12rt17e, .framer-cDkRp.framer-v-16hrafv.hover .framer-13i85zn, .framer-cDkRp.framer-v-16hrafv.hover .framer-mmzed { height: 18px; width: 18px; }`,
                ...ir,
                `.framer-cDkRp[data-border="true"]::after, .framer-cDkRp [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
            ]),
            (Z = K(ba, xa, `framer-cDkRp`)),
            (Z.displayName = `Nav Items`),
            (Z.defaultProps = { height: 44, width: 156 }),
            N(Z, {
                variant: { options: [`HQGae3SrB`, `x0Gp9pFJk`, `aQvWFIEnA`, `Otejenld0`], optionTitles: [`Normal Nav Item`, `Selected`, `Mobile Nav items`, `Mobile selected`], title: `Variant`, type: T.Enum },
                MWuppPuA5: { defaultValue: `Get started`, displayTextArea: !1, title: `Text`, type: T.String },
                ND3loCKZn: { defaultValue: !0, title: `Icon Visibility`, type: T.Boolean },
                BEArdUrUv: { defaultValue: `rgb(255, 255, 255)`, title: `Primary Text color`, type: T.Color },
                pMW7b7CTY: { defaultValue: `rgb(19, 19, 19)`, title: `Selected Text Color`, type: T.Color },
            }),
            M(
                Z,
                [
                    {
                        explicitInter: !0,
                        fonts: [
                            {
                                family: `Inter`,
                                source: `framer`,
                                style: `normal`,
                                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                                weight: `400`,
                            },
                            {
                                family: `Inter`,
                                source: `framer`,
                                style: `normal`,
                                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                                weight: `400`,
                            },
                            { family: `Inter`, source: `framer`, style: `normal`, unicodeRange: `U+1F00-1FFF`, url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`, weight: `400` },
                            { family: `Inter`, source: `framer`, style: `normal`, unicodeRange: `U+0370-03FF`, url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`, weight: `400` },
                            {
                                family: `Inter`,
                                source: `framer`,
                                style: `normal`,
                                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                                weight: `400`,
                            },
                            {
                                family: `Inter`,
                                source: `framer`,
                                style: `normal`,
                                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                                url: `https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2`,
                                weight: `400`,
                            },
                            {
                                family: `Inter`,
                                source: `framer`,
                                style: `normal`,
                                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                                weight: `400`,
                            },
                        ],
                    },
                    ...L(rr),
                ],
                { supportsExplicitInterCodegen: !0 }
            );
    });
function Q(e, ...t) {
    let n = {};
    return t?.forEach((t) => t && Object.assign(n, e[t])), n;
}
var Ca,
    $,
    wa,
    Ta,
    Ea,
    Da,
    Oa,
    ka,
    Aa,
    ja,
    Ma,
    Na,
    Pa,
    Fa,
    Ia,
    La,
    Ra,
    za,
    Ba,
    Va,
    Ha,
    Ua,
    Wa,
    Ga,
    Ka,
    qa,
    Ja,
    Ya,
    Xa,
    Za,
    Qa,
    $a,
    eo,
    to,
    no,
    ro,
    io,
    ao,
    oo,
    so,
    co,
    lo,
    uo,
    fo,
    po,
    mo = e(() => {
        i(),
            B(),
            b(),
            a(),
            aa(),
            Sa(),
            (Ca = I(ia)),
            ($ = q(te(j))),
            (wa = te(S.div)),
            (Ta = I(Z)),
            (Ea = te(S.a)),
            (Da = z(Z)),
            (Oa = [`aloAPvp4t`, `saCAa680I`, `Wgt6tNYcC`, `cqEttCG8w`, `yLxHFQJHN`, `Lf4lR77TC`, `Fo4YO51sZ`]),
            (ka = `framer-ty8qd`),
            (Aa = { aloAPvp4t: `framer-v-182h7o1`, cqEttCG8w: `framer-v-1xmbucg`, Fo4YO51sZ: `framer-v-e9hkrs`, Lf4lR77TC: `framer-v-af7l8j`, saCAa680I: `framer-v-1qvabsx`, Wgt6tNYcC: `framer-v-156c3ua`, yLxHFQJHN: `framer-v-pk59xd` }),
            (ja = { bounce: 0.2, delay: 0, duration: 0.6, type: `spring` }),
            (Ma = { opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: -24 }),
            (Na = { bounce: 0, delay: 0, duration: 0.4, type: `spring` }),
            (Pa = { bounce: 0.1, delay: 0, duration: 0.6, type: `spring` }),
            (Fa = ({ value: e, children: t }) => {
                let n = u(y),
                    r = e ?? n.transition,
                    i = d(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
                return c(y.Provider, { value: i, children: t });
            }),
            (Ia = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
            (La = { opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: -50 }),
            (Ra = { opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, transition: Ia, x: 0, y: 0 }),
            (za = { opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: -70 }),
            (Ba = { opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 0.8, skewX: 0, skewY: 0, transition: Ia, x: 0, y: 0 }),
            (Va = { bounce: 0.2, delay: 0.3, duration: 0.4, type: `spring` }),
            (Ha = { opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, transition: Va, x: 0, y: 0 }),
            (Ua = { opacity: 0.001, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, x: -150, y: 0 }),
            (Wa = { bounce: 0.2, delay: 0.1, duration: 0.4, type: `spring` }),
            (Ga = { opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, transition: Wa, x: 0, y: 0 }),
            (Ka = { bounce: 0.2, delay: 0.2, duration: 0.4, type: `spring` }),
            (qa = { opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, transition: Ka, x: 0, y: 0 }),
            (Ja = { bounce: 0.2, delay: 0.4, duration: 0.4, type: `spring` }),
            (Ya = { opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, transition: Ja, x: 0, y: 0 }),
            (Xa = { bounce: 0.2, delay: 0.5, duration: 0.4, type: `spring` }),
            (Za = { opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, transition: Xa, x: 0, y: 0 }),
            (Qa = { bounce: 0.2, delay: 0.1, duration: 0.6, type: `spring` }),
            ($a = { opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, transition: Qa, x: 0, y: 0 }),
            (eo = { opacity: 0.001, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: -150 }),
            (to = { bounce: 0.2, delay: 0.3, duration: 0.6, type: `spring` }),
            (no = { opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, transition: to, x: 0, y: 0 }),
            (ro = { bounce: 0.2, delay: 0.2, duration: 0.6, type: `spring` }),
            (io = { opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, transition: ro, x: 0, y: 0 }),
            (ao = S.create(g)),
            (oo = { "Mobile Nav items": `aQvWFIEnA`, "Mobile selected": `Otejenld0`, "Normal Nav Item": `HQGae3SrB`, Selected: `x0Gp9pFJk` }),
            (so = { "Dekstop Open Expanded": `Wgt6tNYcC`, "Dekstop Open": `saCAa680I`, "Desktop - menu": `cqEttCG8w`, "Desktop Closed": `aloAPvp4t`, "Phone - Closed": `yLxHFQJHN`, "Phone - Open": `Lf4lR77TC`, Helper: `Fo4YO51sZ` }),
            (co = ({
                aboutButton: e,
                aboutLink: t,
                contactLink: n,
                height: r,
                id: i,
                playgroundLink: a,
                plygroundButton: o,
                primaryTextColor: s,
                resumeButton: c,
                resumeLink: l,
                selectedTextColor: u,
                sericesLink: d,
                servicesButton: f,
                variant2: p,
                width: m,
                workButton: h,
                workLink: g,
                ..._
            }) => ({
                ..._,
                fwaoUmA_Z: n ?? _.fwaoUmA_Z,
                fYmarm91k: d ?? _.fYmarm91k,
                iRWEqwIl1: oo[h] ?? h ?? _.iRWEqwIl1 ?? `HQGae3SrB`,
                KVzmZPGKq: t ?? _.KVzmZPGKq,
                mGvvvVz2X: oo[c] ?? c ?? _.mGvvvVz2X ?? `HQGae3SrB`,
                osilHFXuW: oo[o] ?? o ?? _.osilHFXuW ?? `HQGae3SrB`,
                q8l4ps8mS: l ?? _.q8l4ps8mS,
                SxCJQybfi: oo[e] ?? e ?? _.SxCJQybfi ?? `HQGae3SrB`,
                Ub2Z1SJUE: oo[f] ?? f ?? _.Ub2Z1SJUE ?? `HQGae3SrB`,
                uu_oF7GOl: a ?? _.uu_oF7GOl,
                variant: so[_.variant] ?? _.variant ?? `aloAPvp4t`,
                VDjmPFuBo: u ?? _.VDjmPFuBo ?? `rgb(19, 19, 19)`,
                VFMYpQwnN: g ?? _.VFMYpQwnN,
                VRshC2itk: s ?? _.VRshC2itk ?? `rgb(255, 255, 255)`,
                Ylb1AZB6y: oo[p] ?? p ?? _.Ylb1AZB6y ?? `HQGae3SrB`,
            })),
            (lo = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
            (uo = n(function (e, t) {
                let n = l(null),
                    i = t ?? n,
                    a = r(),
                    { activeLocale: o, setLocale: s } = U(),
                    u = V(),
                    {
                        style: d,
                        className: f,
                        layoutId: m,
                        variant: h,
                        VFMYpQwnN: g,
                        KVzmZPGKq: _,
                        fYmarm91k: y,
                        fwaoUmA_Z: b,
                        SxCJQybfi: x,
                        iRWEqwIl1: C,
                        osilHFXuW: T,
                        Ub2Z1SJUE: E,
                        mGvvvVz2X: O,
                        Ylb1AZB6y: k,
                        uu_oF7GOl: j,
                        VRshC2itk: M,
                        VDjmPFuBo: N,
                        q8l4ps8mS: F,
                        ...I
                    } = co(e),
                    { baseVariant: L, classNames: R, clearLoadingGesture: z, gestureHandlers: B, gestureVariant: H, isLoading: K, setGestureState: te, setVariant: q, variants: ne } = G({
                        cycleOrder: Oa,
                        defaultVariant: `aloAPvp4t`,
                        ref: i,
                        variant: h,
                        variantClassNames: Aa,
                    }),
                    J = lo(e, ne),
                    { activeVariantCallback: Y, delay: re } = ee(L),
                    ie = Y(async (...e) => {
                        te({ isHovered: !0 }), q(`saCAa680I`);
                    }),
                    ae = Y(async (...e) => {
                        te({ isHovered: !1 }), q(`aloAPvp4t`);
                    }),
                    oe = Y(async (...e) => {
                        await re(() => q(`saCAa680I`, !0), 7e3);
                    }),
                    se = Y(async (...e) => {
                        te({ isHovered: !1 }), q(`yLxHFQJHN`);
                    }),
                    ce = Y(async (...e) => {
                        q(`yLxHFQJHN`);
                    }),
                    le = Y(async (...e) => {
                        q(`Wgt6tNYcC`);
                    }),
                    ue = Y(async (...e) => {
                        q(`yLxHFQJHN`);
                    }),
                    de = Y(async (...e) => {
                        q(`cqEttCG8w`);
                    }),
                    fe = Y(async (...e) => {
                        q(`Lf4lR77TC`);
                    }),
                    pe = Y(async (...e) => {
                        q(`yLxHFQJHN`);
                    }),
                    me = Y(async (...e) => {
                        q(`aloAPvp4t`);
                    }),
                    he = Y(async (...e) => {
                        q(`saCAa680I`);
                    }),
                    ge = Y(async (...e) => {
                        q(`Wgt6tNYcC`);
                    });
                W(L, { Fo4YO51sZ: ce, Wgt6tNYcC: oe });
                let _e = [],
                    ve = P(ka, ..._e),
                    ye = () => !![`yLxHFQJHN`, `Lf4lR77TC`, `Fo4YO51sZ`].includes(L),
                    be = () => ![`yLxHFQJHN`, `Lf4lR77TC`, `Fo4YO51sZ`].includes(L),
                    xe = () => ![`yLxHFQJHN`, `Fo4YO51sZ`].includes(L),
                    Se = () => !![`saCAa680I`, `Wgt6tNYcC`].includes(L),
                    Ce = () => L !== `cqEttCG8w`;
                return c(v, {
                    id: m ?? a,
                    children: c(ao, {
                        animate: ne,
                        initial: !1,
                        children: c(Fa, {
                            value: Na,
                            children: p(wa, {
                                ...I,
                                ...B,
                                __framer__animate: { transition: ja },
                                __framer__animateOnce: !1,
                                __framer__scrollDirection: { direction: `down`, target: Ma },
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0.5,
                                __perspectiveFX: !1,
                                __smartComponentFX: !0,
                                __targetOpacity: 1,
                                className: P(ve, `framer-182h7o1`, f, R),
                                "data-framer-name": `Desktop Closed`,
                                "data-highlight": !0,
                                layoutDependency: J,
                                layoutId: `aloAPvp4t`,
                                onMouseEnter: ie,
                                ref: i,
                                style: { ...d },
                                ...Q(
                                    {
                                        cqEttCG8w: { "data-framer-name": `Desktop - menu` },
                                        Fo4YO51sZ: { "data-framer-name": `Helper`, onMouseEnter: void 0 },
                                        Lf4lR77TC: { __framer__styleAppearEffectEnabled: void 0, "data-framer-name": `Phone - Open`, onMouseEnter: void 0, onMouseLeave: se },
                                        saCAa680I: { __framer__styleAppearEffectEnabled: void 0, "data-framer-name": `Dekstop Open`, onMouseEnter: void 0, onMouseLeave: ae },
                                        Wgt6tNYcC: { __framer__styleAppearEffectEnabled: void 0, "data-framer-name": `Dekstop Open Expanded`, onMouseLeave: ae },
                                        yLxHFQJHN: { "data-framer-name": `Phone - Closed`, "data-highlight": void 0, onMouseEnter: void 0 },
                                    },
                                    L,
                                    H
                                ),
                                children: [
                                    ye() &&
                                        c(Fa, {
                                            ...Q({ Fo4YO51sZ: { value: Pa }, Lf4lR77TC: { value: Pa }, yLxHFQJHN: { value: Pa } }, L, H),
                                            children: p(S.div, {
                                                className: `framer-1ru7qgd`,
                                                "data-framer-name": `Mobile`,
                                                layoutDependency: J,
                                                layoutId: `wVzGrF2uE`,
                                                style: { backdropFilter: `none`, backgroundColor: `rgba(0, 0, 0, 0)`, WebkitBackdropFilter: `none` },
                                                variants: {
                                                    Fo4YO51sZ: { backdropFilter: `blur(9px)`, backgroundColor: `rgba(9, 12, 10, 0.4)`, WebkitBackdropFilter: `blur(9px)` },
                                                    Lf4lR77TC: { backdropFilter: `blur(10px)`, backgroundColor: `rgba(9, 12, 10, 0.8)`, WebkitBackdropFilter: `blur(10px)` },
                                                    yLxHFQJHN: { backdropFilter: `blur(9px)`, backgroundColor: `rgba(9, 12, 10, 0.4)`, WebkitBackdropFilter: `blur(9px)` },
                                                },
                                                children: [
                                                    be() &&
                                                        c(Fa, {
                                                            value: Pa,
                                                            children: c(S.div, {
                                                                className: `framer-if5bsr`,
                                                                "data-framer-name": `Notch`,
                                                                layoutDependency: J,
                                                                layoutId: `SkhQb7xDB`,
                                                                style: {
                                                                    backdropFilter: `blur(9px)`,
                                                                    backgroundColor: `rgba(9, 12, 10, 0.4)`,
                                                                    mask: `url('./images/UifaEHkKcfW7EhyLfaQO6ajJ8.png') alpha no-repeat bottom / contain add, url('./images/OPxOKBGTNp6eq3rgyKnBP4IP39g.png') luminance no-repeat bottom / contain add, url('./images/r6G1OKuLvCTmxaxRvsJxBEgDlk.png') luminance no-repeat bottom / contain add, linear-gradient(0deg, rgba(0,0,0,0) 61%, rgba(0,0,0,1) 61%) add`,
                                                                    WebkitBackdropFilter: `blur(9px)`,
                                                                    WebkitMask: `url('./images/UifaEHkKcfW7EhyLfaQO6ajJ8.png') alpha no-repeat bottom / contain add, url('./images/OPxOKBGTNp6eq3rgyKnBP4IP39g.png') luminance no-repeat bottom / contain add, url('./images/r6G1OKuLvCTmxaxRvsJxBEgDlk.png') luminance no-repeat bottom / contain add, linear-gradient(0deg, rgba(0,0,0,0) 61%, rgba(0,0,0,1) 61%) add`,
                                                                },
                                                            }),
                                                        }),
                                                    ye() &&
                                                        p(S.div, {
                                                            className: `framer-1lcsrmr`,
                                                            "data-framer-name": `Menu Head`,
                                                            layoutDependency: J,
                                                            layoutId: `fT14kiwFu`,
                                                            children: [
                                                                c(S.div, {
                                                                    className: `framer-92djo9`,
                                                                    "data-framer-name": `Menu `,
                                                                    layoutDependency: J,
                                                                    layoutId: `BeZsXpBQk`,
                                                                    children: c(wa, {
                                                                        __framer__animate: { transition: Ia },
                                                                        __framer__animateOnce: !1,
                                                                        __framer__scrollDirection: { direction: `down`, target: La },
                                                                        __framer__styleAppearEffectEnabled: !0,
                                                                        __framer__threshold: 0.5,
                                                                        __perspectiveFX: !1,
                                                                        __smartComponentFX: !0,
                                                                        __targetOpacity: 1,
                                                                        className: `framer-bln1tj`,
                                                                        "data-framer-name": `Name`,
                                                                        "data-highlight": !0,
                                                                        layoutDependency: J,
                                                                        layoutId: `uCC7Lvgg0`,
                                                                        onMouseEnter: le,
                                                                        ...Q(
                                                                            {
                                                                                Fo4YO51sZ: { __framer__styleAppearEffectEnabled: void 0, "data-highlight": void 0, onMouseEnter: void 0 },
                                                                                Lf4lR77TC: { __framer__styleAppearEffectEnabled: void 0, "data-highlight": void 0, onMouseEnter: void 0 },
                                                                                yLxHFQJHN: { __framer__styleAppearEffectEnabled: void 0, "data-highlight": void 0, onMouseEnter: void 0 },
                                                                            },
                                                                            L,
                                                                            H
                                                                        ),
                                                                        children: c(w, {
                                                                            height: 64,
                                                                            ...Q(
                                                                                {
                                                                                    Fo4YO51sZ: { y: (u?.y || 0) + 0 + 0 + 4 + 0 + -8 + 0 + 0 + 0 },
                                                                                    Lf4lR77TC: { y: (u?.y || 0) + 0 + 0 + 12 + 0 + 8 + 0 + 0 + 0 },
                                                                                    yLxHFQJHN: { y: (u?.y || 0) + 0 + 0 + 0 + 0 + -7.5 + 0 + 0 + 0 },
                                                                                },
                                                                                L,
                                                                                H
                                                                            ),
                                                                            children: c($, {
                                                                                __perspectiveFX: !1,
                                                                                __smartComponentFX: !0,
                                                                                __targetOpacity: 1,
                                                                                animate: Ra,
                                                                                className: `framer-sx9mt-container`,
                                                                                "data-framer-appear-id": `sx9mt`,
                                                                                initial: za,
                                                                                layoutDependency: J,
                                                                                layoutId: `xUpPfZLnq-container`,
                                                                                nodeId: `xUpPfZLnq`,
                                                                                optimized: !0,
                                                                                rendersWithMotion: !0,
                                                                                scopeId: `O8ATqqA0q`,
                                                                                style: { scale: 1 },
                                                                                variants: { Fo4YO51sZ: { scale: 0.8 }, Lf4lR77TC: { scale: 1 }, yLxHFQJHN: { scale: 0.8 } },
                                                                                ...Q({ Fo4YO51sZ: { animate: Ba }, yLxHFQJHN: { animate: Ba } }, L, H),
                                                                                children: c(ia, {
                                                                                    height: `100%`,
                                                                                    id: `xUpPfZLnq`,
                                                                                    layoutId: `xUpPfZLnq`,
                                                                                    style: { height: `100%` },
                                                                                    variant: `yFDZkqkds`,
                                                                                    width: `100%`,
                                                                                    ...Q({ Lf4lR77TC: { AhaOGR7uV: ue, variant: `D8E0IBVn5` } }, L, H),
                                                                                }),
                                                                            }),
                                                                        }),
                                                                    }),
                                                                }),
                                                                c(S.div, {
                                                                    className: `framer-15a8pay`,
                                                                    "data-framer-name": `Menu icon`,
                                                                    "data-highlight": !0,
                                                                    layoutDependency: J,
                                                                    layoutId: `ypsjZsGC3`,
                                                                    onMouseEnter: de,
                                                                    ...Q(
                                                                        { Fo4YO51sZ: { "data-highlight": void 0, onMouseEnter: void 0 }, Lf4lR77TC: { onMouseEnter: void 0, onTap: pe }, yLxHFQJHN: { onMouseEnter: void 0, onTap: fe } },
                                                                        L,
                                                                        H
                                                                    ),
                                                                    children: c(Fa, {
                                                                        ...Q({ Lf4lR77TC: { value: ja }, yLxHFQJHN: { value: ja } }, L, H),
                                                                        children: c(A, {
                                                                            className: `framer-6xzl58`,
                                                                            "data-framer-name": `vuesax/linear/menu`,
                                                                            layout: `position`,
                                                                            layoutDependency: J,
                                                                            layoutId: `LnWsY8jeH`,
                                                                            opacity: 1,
                                                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 30"><path d="M 6 9.074 L 26 9.074" fill="transparent" stroke-width="1.5" stroke="rgb(237,237,237)" stroke-linecap="round" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 2 15 L 30 15" fill="transparent" stroke-width="1.5" stroke="rgb(237,237,237)" stroke-linecap="round" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 6 20.926 L 26 20.926" fill="transparent" stroke-width="1.5" stroke="rgb(237,237,237)" stroke-linecap="round" stroke-miterlimit="10" stroke-dasharray=""></path></svg>`,
                                                                            svgContentId: 9266263021,
                                                                            withExternalLayout: !0,
                                                                            ...Q(
                                                                                {
                                                                                    Lf4lR77TC: {
                                                                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 30"><path d="M 0 0 L 28 0" transform="translate(1.828 14.246) rotate(-45 14 0.5)" fill="transparent" stroke-width="1.5" stroke="rgb(237,237,237)" stroke-linecap="round" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0 0 L 28 0" transform="translate(1.828 14.754) rotate(45 14 0.5)" fill="transparent" stroke-width="1.5" stroke="rgb(237,237,237)" stroke-linecap="round" stroke-miterlimit="10" stroke-dasharray=""></path></svg>`,
                                                                                        svgContentId: 10689988808,
                                                                                    },
                                                                                    yLxHFQJHN: { svgContentId: 12407822771 },
                                                                                },
                                                                                L,
                                                                                H
                                                                            ),
                                                                        }),
                                                                    }),
                                                                }),
                                                            ],
                                                        }),
                                                    xe() &&
                                                        p(S.div, {
                                                            className: `framer-wlj7xd`,
                                                            "data-framer-name": `Nav Items`,
                                                            layoutDependency: J,
                                                            layoutId: `zuB3ru02C`,
                                                            children: [
                                                                c(D, {
                                                                    href: _,
                                                                    motionChild: !0,
                                                                    nodeId: `xie47HZF0`,
                                                                    scopeId: `O8ATqqA0q`,
                                                                    smoothScroll: !0,
                                                                    children: c(S.a, {
                                                                        className: `framer-1rge0i9 framer-tzin30`,
                                                                        "data-framer-name": `Nav Item 4`,
                                                                        layoutDependency: J,
                                                                        layoutId: `xie47HZF0`,
                                                                        children: c(w, {
                                                                            height: 44,
                                                                            ...Q({ Lf4lR77TC: { width: `calc(${u?.width || `100vw`} * 0.9)`, y: (u?.y || 0) + 0 + 0 + 12 + 90 + 0 + 0 + 0 } }, L, H),
                                                                            children: c($, {
                                                                                __perspectiveFX: !1,
                                                                                __smartComponentFX: !0,
                                                                                __targetOpacity: 1,
                                                                                animate: Ha,
                                                                                className: `framer-1n0la0k-container`,
                                                                                "data-framer-appear-id": `1n0la0k`,
                                                                                initial: Ua,
                                                                                layoutDependency: J,
                                                                                layoutId: `RiRg0gnVr-container`,
                                                                                nodeId: `RiRg0gnVr`,
                                                                                optimized: !0,
                                                                                rendersWithMotion: !0,
                                                                                scopeId: `O8ATqqA0q`,
                                                                                children: c(Z, {
                                                                                    BEArdUrUv: `rgb(255, 255, 255)`,
                                                                                    height: `100%`,
                                                                                    id: `RiRg0gnVr`,
                                                                                    layoutId: `RiRg0gnVr`,
                                                                                    MWuppPuA5: `About`,
                                                                                    ND3loCKZn: !1,
                                                                                    pMW7b7CTY: `rgb(19, 19, 19)`,
                                                                                    style: { width: `100%` },
                                                                                    variant: `aQvWFIEnA`,
                                                                                    width: `100%`,
                                                                                }),
                                                                            }),
                                                                        }),
                                                                    }),
                                                                }),
                                                                c(D, {
                                                                    href: g,
                                                                    motionChild: !0,
                                                                    nodeId: `txFN5gdJi`,
                                                                    scopeId: `O8ATqqA0q`,
                                                                    smoothScroll: !0,
                                                                    children: c(S.a, {
                                                                        className: `framer-8elzd framer-tzin30`,
                                                                        "data-framer-name": `Nav item 1`,
                                                                        layoutDependency: J,
                                                                        layoutId: `txFN5gdJi`,
                                                                        children: c(w, {
                                                                            height: 44,
                                                                            ...Q({ Lf4lR77TC: { width: `calc(${u?.width || `100vw`} * 0.9)`, y: (u?.y || 0) + 0 + 0 + 12 + 90 + 0 + 44 + 0 } }, L, H),
                                                                            children: c($, {
                                                                                __perspectiveFX: !1,
                                                                                __smartComponentFX: !0,
                                                                                __targetOpacity: 1,
                                                                                animate: Ra,
                                                                                className: `framer-2zfco7-container`,
                                                                                "data-framer-appear-id": `2zfco7`,
                                                                                initial: Ua,
                                                                                layoutDependency: J,
                                                                                layoutId: `r9oAX3e4D-container`,
                                                                                nodeId: `r9oAX3e4D`,
                                                                                optimized: !0,
                                                                                rendersWithMotion: !0,
                                                                                scopeId: `O8ATqqA0q`,
                                                                                children: c(Z, {
                                                                                    BEArdUrUv: `rgb(255, 255, 255)`,
                                                                                    height: `100%`,
                                                                                    id: `r9oAX3e4D`,
                                                                                    layoutId: `r9oAX3e4D`,
                                                                                    MWuppPuA5: `Work`,
                                                                                    ND3loCKZn: !1,
                                                                                    pMW7b7CTY: `rgb(19, 19, 19)`,
                                                                                    style: { width: `100%` },
                                                                                    variant: `aQvWFIEnA`,
                                                                                    width: `100%`,
                                                                                }),
                                                                            }),
                                                                        }),
                                                                    }),
                                                                }),
                                                                c(D, {
                                                                    href: y,
                                                                    motionChild: !0,
                                                                    nodeId: `HBblI9Mtg`,
                                                                    scopeId: `O8ATqqA0q`,
                                                                    smoothScroll: !0,
                                                                    children: c(S.a, {
                                                                        className: `framer-wnh0s1 framer-tzin30`,
                                                                        "data-framer-name": `Nav Item 2`,
                                                                        layoutDependency: J,
                                                                        layoutId: `HBblI9Mtg`,
                                                                        children: c(w, {
                                                                            height: 44,
                                                                            ...Q({ Lf4lR77TC: { width: `calc(${u?.width || `100vw`} * 0.9)`, y: (u?.y || 0) + 0 + 0 + 12 + 90 + 0 + 88 + 0 } }, L, H),
                                                                            children: c($, {
                                                                                __perspectiveFX: !1,
                                                                                __smartComponentFX: !0,
                                                                                __targetOpacity: 1,
                                                                                animate: Ga,
                                                                                className: `framer-uuuddc-container`,
                                                                                "data-framer-appear-id": `uuuddc`,
                                                                                initial: Ua,
                                                                                layoutDependency: J,
                                                                                layoutId: `FAm0VlYl1-container`,
                                                                                nodeId: `FAm0VlYl1`,
                                                                                optimized: !0,
                                                                                rendersWithMotion: !0,
                                                                                scopeId: `O8ATqqA0q`,
                                                                                children: c(Z, {
                                                                                    BEArdUrUv: `rgb(255, 255, 255)`,
                                                                                    height: `100%`,
                                                                                    id: `FAm0VlYl1`,
                                                                                    layoutId: `FAm0VlYl1`,
                                                                                    MWuppPuA5: `Services`,
                                                                                    ND3loCKZn: !1,
                                                                                    pMW7b7CTY: `rgb(19, 19, 19)`,
                                                                                    style: { width: `100%` },
                                                                                    variant: `aQvWFIEnA`,
                                                                                    width: `100%`,
                                                                                }),
                                                                            }),
                                                                        }),
                                                                    }),
                                                                }),
                                                                c(D, {
                                                                    href: j,
                                                                    motionChild: !0,
                                                                    nodeId: `kfhol69mo`,
                                                                    openInNewTab: !1,
                                                                    scopeId: `O8ATqqA0q`,
                                                                    smoothScroll: !0,
                                                                    children: c(S.a, {
                                                                        className: `framer-1swesof framer-tzin30`,
                                                                        "data-framer-name": `Nav Item 3`,
                                                                        layoutDependency: J,
                                                                        layoutId: `kfhol69mo`,
                                                                        children: c(w, {
                                                                            height: 44,
                                                                            ...Q({ Lf4lR77TC: { width: `calc(${u?.width || `100vw`} * 0.9)`, y: (u?.y || 0) + 0 + 0 + 12 + 90 + 0 + 132 + 0 } }, L, H),
                                                                            children: c($, {
                                                                                __perspectiveFX: !1,
                                                                                __smartComponentFX: !0,
                                                                                __targetOpacity: 1,
                                                                                animate: qa,
                                                                                className: `framer-lhu55k-container`,
                                                                                "data-framer-appear-id": `lhu55k`,
                                                                                initial: Ua,
                                                                                layoutDependency: J,
                                                                                layoutId: `I98GpY7_q-container`,
                                                                                nodeId: `I98GpY7_q`,
                                                                                optimized: !0,
                                                                                rendersWithMotion: !0,
                                                                                scopeId: `O8ATqqA0q`,
                                                                                children: c(Z, {
                                                                                    BEArdUrUv: `rgb(255, 255, 255)`,
                                                                                    height: `100%`,
                                                                                    id: `I98GpY7_q`,
                                                                                    layoutId: `I98GpY7_q`,
                                                                                    MWuppPuA5: `Playground`,
                                                                                    ND3loCKZn: !1,
                                                                                    pMW7b7CTY: `rgb(19, 19, 19)`,
                                                                                    style: { width: `100%` },
                                                                                    variant: `aQvWFIEnA`,
                                                                                    width: `100%`,
                                                                                }),
                                                                            }),
                                                                        }),
                                                                    }),
                                                                }),
                                                                c(D, {
                                                                    href: F,
                                                                    motionChild: !0,
                                                                    nodeId: `vKeEPirPc`,
                                                                    openInNewTab: !0,
                                                                    scopeId: `O8ATqqA0q`,
                                                                    children: c(S.a, {
                                                                        className: `framer-16g275g framer-tzin30`,
                                                                        "data-framer-name": `Nav Item 5`,
                                                                        layoutDependency: J,
                                                                        layoutId: `vKeEPirPc`,
                                                                        children: c(w, {
                                                                            height: 44,
                                                                            ...Q({ Lf4lR77TC: { width: `calc(${u?.width || `100vw`} * 0.9)`, y: (u?.y || 0) + 0 + 0 + 12 + 90 + 0 + 176 + 0 } }, L, H),
                                                                            children: c($, {
                                                                                __perspectiveFX: !1,
                                                                                __smartComponentFX: !0,
                                                                                __targetOpacity: 1,
                                                                                animate: Ya,
                                                                                className: `framer-1w60vdd-container`,
                                                                                "data-framer-appear-id": `1w60vdd`,
                                                                                initial: Ua,
                                                                                layoutDependency: J,
                                                                                layoutId: `lMOBqw3pM-container`,
                                                                                nodeId: `lMOBqw3pM`,
                                                                                optimized: !0,
                                                                                rendersWithMotion: !0,
                                                                                scopeId: `O8ATqqA0q`,
                                                                                children: c(Z, {
                                                                                    BEArdUrUv: `rgb(255, 255, 255)`,
                                                                                    height: `100%`,
                                                                                    id: `lMOBqw3pM`,
                                                                                    layoutId: `lMOBqw3pM`,
                                                                                    MWuppPuA5: `Resume`,
                                                                                    ND3loCKZn: !0,
                                                                                    pMW7b7CTY: `rgb(19, 19, 19)`,
                                                                                    style: { width: `100%` },
                                                                                    variant: `aQvWFIEnA`,
                                                                                    width: `100%`,
                                                                                }),
                                                                            }),
                                                                        }),
                                                                    }),
                                                                }),
                                                                c(D, {
                                                                    href: b,
                                                                    motionChild: !0,
                                                                    nodeId: `lK15qhIou`,
                                                                    scopeId: `O8ATqqA0q`,
                                                                    smoothScroll: !0,
                                                                    children: c(S.a, {
                                                                        className: `framer-c9ib3e framer-tzin30`,
                                                                        "data-framer-name": `Nav Item 6`,
                                                                        layoutDependency: J,
                                                                        layoutId: `lK15qhIou`,
                                                                        children: c(w, {
                                                                            height: 44,
                                                                            ...Q({ Lf4lR77TC: { width: `calc(${u?.width || `100vw`} * 0.9)`, y: (u?.y || 0) + 0 + 0 + 12 + 90 + 0 + 220 + 0 } }, L, H),
                                                                            children: c($, {
                                                                                __perspectiveFX: !1,
                                                                                __smartComponentFX: !0,
                                                                                __targetOpacity: 1,
                                                                                animate: Za,
                                                                                className: `framer-18v9lv3-container`,
                                                                                "data-framer-appear-id": `18v9lv3`,
                                                                                initial: Ua,
                                                                                layoutDependency: J,
                                                                                layoutId: `gAAvkSMKk-container`,
                                                                                nodeId: `gAAvkSMKk`,
                                                                                optimized: !0,
                                                                                rendersWithMotion: !0,
                                                                                scopeId: `O8ATqqA0q`,
                                                                                children: c(Z, {
                                                                                    BEArdUrUv: `rgb(255, 255, 255)`,
                                                                                    height: `100%`,
                                                                                    id: `gAAvkSMKk`,
                                                                                    layoutId: `gAAvkSMKk`,
                                                                                    MWuppPuA5: `Contact`,
                                                                                    ND3loCKZn: !1,
                                                                                    pMW7b7CTY: `rgb(19, 19, 19)`,
                                                                                    style: { width: `100%` },
                                                                                    variant: `aQvWFIEnA`,
                                                                                    width: `100%`,
                                                                                }),
                                                                            }),
                                                                        }),
                                                                    }),
                                                                }),
                                                            ],
                                                        }),
                                                ],
                                            }),
                                        }),
                                    be() &&
                                        p(S.div, {
                                            className: `framer-3dh3kq`,
                                              style: { display: "none" },

                                            "data-framer-name": `Desktop`,
                                            layoutDependency: J,
                                            layoutId: `BbpfvD8fr`,
                                            children: [
                                                c(Fa, {
                                                    value: Pa,
                                                    children: c(S.div, {
                                                        className: `framer-1k2fldy`,
                                                        "data-framer-name": `Notch`,
                                                        layoutDependency: J,
                                                        layoutId: `NqjA7Bran`,
                                                        style: {
                                                            backdropFilter: `blur(9px)`,
                                                            backgroundColor: `rgba(0, 0, 0, 0.4)`,
                                                            mask: `url('./images/UifaEHkKcfW7EhyLfaQO6ajJ8.png') alpha no-repeat bottom / contain add, url('./images/OPxOKBGTNp6eq3rgyKnBP4IP39g.png') luminance no-repeat bottom / contain add, url('./images/r6G1OKuLvCTmxaxRvsJxBEgDlk.png') luminance no-repeat bottom / contain add, linear-gradient(0deg, rgba(0,0,0,0) 61%, rgba(0,0,0,1) 61%) add`,
                                                            WebkitBackdropFilter: `blur(9px)`,
                                                            WebkitMask: `url('./images/UifaEHkKcfW7EhyLfaQO6ajJ8.png') alpha no-repeat bottom / contain add, url('./images/OPxOKBGTNp6eq3rgyKnBP4IP39g.png') luminance no-repeat bottom / contain add, url('./images/r6G1OKuLvCTmxaxRvsJxBEgDlk.png') luminance no-repeat bottom / contain add, linear-gradient(0deg, rgba(0,0,0,0) 61%, rgba(0,0,0,1) 61%) add`,
                                                        },
                                                        variants: {
                                                            saCAa680I: {
                                                                mask: `url('./images/UifaEHkKcfW7EhyLfaQO6ajJ8.png') alpha no-repeat bottom / contain add, url('./images/OPxOKBGTNp6eq3rgyKnBP4IP39g.png') alpha no-repeat bottom / contain add, url('./images/r6G1OKuLvCTmxaxRvsJxBEgDlk.png') luminance no-repeat bottom / contain add, linear-gradient(0deg, rgba(0,0,0,0) 61%, rgba(0,0,0,1) 61%) add`,
                                                                WebkitMask: `url('./images/UifaEHkKcfW7EhyLfaQO6ajJ8.png') alpha no-repeat bottom / contain add, url('./images/OPxOKBGTNp6eq3rgyKnBP4IP39g.png') alpha no-repeat bottom / contain add, url('./images/r6G1OKuLvCTmxaxRvsJxBEgDlk.png') luminance no-repeat bottom / contain add, linear-gradient(0deg, rgba(0,0,0,0) 61%, rgba(0,0,0,1) 61%) add`,
                                                            },
                                                            Wgt6tNYcC: {
                                                                mask: `url('./images/UifaEHkKcfW7EhyLfaQO6ajJ8.png') alpha no-repeat bottom / contain add, url('./images/OPxOKBGTNp6eq3rgyKnBP4IP39g.png') alpha no-repeat bottom / contain add, url('./images/r6G1OKuLvCTmxaxRvsJxBEgDlk.png') alpha no-repeat bottom / contain add, linear-gradient(0deg, rgba(0,0,0,0) 61%, rgba(0,0,0,1) 61%) add`,
                                                                WebkitMask: `url('./images/UifaEHkKcfW7EhyLfaQO6ajJ8.png') alpha no-repeat bottom / contain add, url('./images/OPxOKBGTNp6eq3rgyKnBP4IP39g.png') alpha no-repeat bottom / contain add, url('./images/r6G1OKuLvCTmxaxRvsJxBEgDlk.png') alpha no-repeat bottom / contain add, linear-gradient(0deg, rgba(0,0,0,0) 61%, rgba(0,0,0,1) 61%) add`,
                                                            },
                                                        },
                                                    }),
                                                }),
                                                c(S.div, {
                                                    className: `framer-hl9rzu`,
                                                    "data-framer-name": `Menu icon`,
                                                    "data-highlight": !0,
                                                     layoutDependency: J,
                                                    layoutId: `LdjsDz4dN`,
                                                    onMouseEnter: de,
                                                    ...Q({ cqEttCG8w: { onMouseEnter: me } }, L, H),
                                                    children: c(A, {
                                                        className: `framer-14k4gig`,
                                                        "data-framer-name": `vuesax/linear/menu`,
                                                        layout: `position`,
                                                        layoutDependency: J,
                                                        layoutId: `eUjZWlTLH`,
                                                        opacity: 1,
                                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 30"><path d="M 6 9.074 L 26 9.074" fill="transparent" stroke-width="1.5" stroke="rgb(237,237,237)" stroke-linecap="round" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 2 15 L 30 15" fill="transparent" stroke-width="1.5" stroke="rgb(237,237,237)" stroke-linecap="round" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 6 20.926 L 26 20.926" fill="transparent" stroke-width="1.5" stroke="rgb(237,237,237)" stroke-linecap="round" stroke-miterlimit="10" stroke-dasharray=""></path></svg>`,
                                                        svgContentId: 9266263021,
                                                        withExternalLayout: !0,
                                                    }),
                                                }),
                                                c(S.div, {
                                                    className: `framer-lmbu0m`,
                                                    "data-framer-name": `Menu `,
                                                    layoutDependency: J,
                                                      style: { display: "none" }, // ✅ fixed
                                                    layoutId: `lV4bZsyL7`,
                                                    children: p(S.div, {
                                                        className: `framer-wzi7do`,
                                                        layoutDependency: J,
                                                      
                                                        layoutId: `n1F1jj_ny`,
                                                        children: [
                                                            Se() &&
                                                                p(S.div, {
                                                                    className: `framer-1qsai9a`,
                                                                    layoutDependency: J,
                                                                    layoutId: `k0vtGosDA`,
                                                                    children: [
                                                                        c(D, {
                                                                            href: _,
                                                                            motionChild: !0,
                                                                            nodeId: `uiVUABDXF`,
                                                                            scopeId: `O8ATqqA0q`,
                                                                            smoothScroll: !0,
                                                                            children: c(Ea, {
                                                                                __framer__animate: { transition: Wa },
                                                                                __framer__animateOnce: !1,
                                                                                __framer__scrollDirection: { direction: `down`, target: La },
                                                                                __framer__styleAppearEffectEnabled: !0,
                                                                                __framer__threshold: 0.5,
                                                                                __perspectiveFX: !1,
                                                                                __smartComponentFX: !0,
                                                                                __targetOpacity: 1,
                                                                                className: `framer-8kddmo framer-tzin30`,
                                                                                "data-framer-name": `Nav Item 4`,
                                                                                layoutDependency: J,
                                                                                layoutId: `uiVUABDXF`,
                                                                                ...Q({ saCAa680I: { __framer__styleAppearEffectEnabled: void 0 }, Wgt6tNYcC: { __framer__styleAppearEffectEnabled: void 0 } }, L, H),
                                                                                children: c(w, {
                                                                                    height: 44,
                                                                                    ...Q({ saCAa680I: { y: (u?.y || 0) + 0 + 0 + 0 + 0 + 10 + 0 + 0 }, Wgt6tNYcC: { y: (u?.y || 0) + 0 + 0 + 0 + 0 + 10 + 0 + 0 } }, L, H),
                                                                                    children: c($, {
                                                                                        __perspectiveFX: !1,
                                                                                        __smartComponentFX: !0,
                                                                                        __targetOpacity: 1,
                                                                                        animate: $a,
                                                                                        className: `framer-heqfuf-container`,
                                                                                        "data-framer-appear-id": `heqfuf`,
                                                                                        initial: eo,
                                                                                        layoutDependency: J,
                                                                                        layoutId: `Vsm0wCrW2-container`,
                                                                                        nodeId: `Vsm0wCrW2`,
                                                                                        optimized: !0,
                                                                                        rendersWithMotion: !0,
                                                                                        scopeId: `O8ATqqA0q`,
                                                                                        children: c(Z, {
                                                                                            BEArdUrUv: `rgb(255, 255, 255)`,
                                                                                            height: `100%`,
                                                                                            id: `Vsm0wCrW2`,
                                                                                            layoutId: `Vsm0wCrW2`,
                                                                                            MWuppPuA5: `About`,
                                                                                            ND3loCKZn: !1,
                                                                                            pMW7b7CTY: `rgb(19, 19, 19)`,
                                                                                            variant: x,
                                                                                            width: `100%`,
                                                                                            ...Q({ saCAa680I: { BEArdUrUv: M, pMW7b7CTY: N } }, L, H),
                                                                                        }),
                                                                                    }),
                                                                                }),
                                                                            }),
                                                                        }),
                                                                        c(D, {
                                                                            href: g,
                                                                            motionChild: !0,
                                                                            nodeId: `wgagkfznF`,
                                                                            scopeId: `O8ATqqA0q`,
                                                                            smoothScroll: !0,
                                                                            children: c(Ea, {
                                                                                __framer__animate: { transition: Va },
                                                                                __framer__animateOnce: !1,
                                                                                __framer__scrollDirection: { direction: `down`, target: La },
                                                                                __framer__styleAppearEffectEnabled: !0,
                                                                                __framer__threshold: 0.5,
                                                                                __perspectiveFX: !1,
                                                                                __smartComponentFX: !0,
                                                                                __targetOpacity: 1,
                                                                                className: `framer-cn924 framer-tzin30`,
                                                                                "data-framer-name": `Nav item 1`,
                                                                                layoutDependency: J,
                                                                                layoutId: `wgagkfznF`,
                                                                                ...Q({ saCAa680I: { __framer__styleAppearEffectEnabled: void 0 }, Wgt6tNYcC: { __framer__styleAppearEffectEnabled: void 0 } }, L, H),
                                                                                children: c(w, {
                                                                                    height: 44,
                                                                                    ...Q({ saCAa680I: { y: (u?.y || 0) + 0 + 0 + 0 + 0 + 10 + 0 + 0 }, Wgt6tNYcC: { y: (u?.y || 0) + 0 + 0 + 0 + 0 + 10 + 0 + 0 } }, L, H),
                                                                                    children: c($, {
                                                                                        __perspectiveFX: !1,
                                                                                        __smartComponentFX: !0,
                                                                                        __targetOpacity: 1,
                                                                                        animate: no,
                                                                                        className: `framer-qho7bq-container`,
                                                                                        "data-framer-appear-id": `qho7bq`,
                                                                                        initial: eo,
                                                                                        layoutDependency: J,
                                                                                        layoutId: `obAilpyCI-container`,
                                                                                        nodeId: `obAilpyCI`,
                                                                                        optimized: !0,
                                                                                        rendersWithMotion: !0,
                                                                                        scopeId: `O8ATqqA0q`,
                                                                                        children: c(Z, {
                                                                                            BEArdUrUv: `rgb(255, 255, 255)`,
                                                                                            height: `100%`,
                                                                                            id: `obAilpyCI`,
                                                                                            layoutId: `obAilpyCI`,
                                                                                            MWuppPuA5: `Work`,
                                                                                            ND3loCKZn: !1,
                                                                                            pMW7b7CTY: `rgb(19, 19, 19)`,
                                                                                            variant: C,
                                                                                            width: `100%`,
                                                                                            ...Q({ saCAa680I: { BEArdUrUv: M, pMW7b7CTY: N } }, L, H),
                                                                                        }),
                                                                                    }),
                                                                                }),
                                                                            }),
                                                                        }),
                                                                        c(D, {
                                                                            href: j,
                                                                            motionChild: !0,
                                                                            nodeId: `iEgeAMjDE`,
                                                                            openInNewTab: !1,
                                                                            scopeId: `O8ATqqA0q`,
                                                                            smoothScroll: !0,
                                                                            children: c(Ea, {
                                                                                __framer__animate: { transition: Wa },
                                                                                __framer__animateOnce: !1,
                                                                                __framer__scrollDirection: { direction: `down`, target: La },
                                                                                __framer__styleAppearEffectEnabled: !0,
                                                                                __framer__threshold: 0.5,
                                                                                __perspectiveFX: !1,
                                                                                __smartComponentFX: !0,
                                                                                __targetOpacity: 1,
                                                                                className: `framer-1i8k3i7 framer-tzin30`,
                                                                                "data-framer-name": `Nav Item 3`,
                                                                                layoutDependency: J,
                                                                                layoutId: `iEgeAMjDE`,
                                                                                ...Q({ saCAa680I: { __framer__styleAppearEffectEnabled: void 0 }, Wgt6tNYcC: { __framer__styleAppearEffectEnabled: void 0 } }, L, H),
                                                                                children: c(w, {
                                                                                    height: 44,
                                                                                    ...Q({ saCAa680I: { y: (u?.y || 0) + 0 + 0 + 0 + 0 + 10 + 0 + 0 }, Wgt6tNYcC: { y: (u?.y || 0) + 0 + 0 + 0 + 0 + 10 + 0 + 0 } }, L, H),
                                                                                    children: c($, {
                                                                                        __perspectiveFX: !1,
                                                                                        __smartComponentFX: !0,
                                                                                        __targetOpacity: 1,
                                                                                        animate: $a,
                                                                                        className: `framer-u3lorm-container`,
                                                                                        "data-framer-appear-id": `u3lorm`,
                                                                                        initial: eo,
                                                                                        layoutDependency: J,
                                                                                        layoutId: `wKquw79n5-container`,
                                                                                        nodeId: `wKquw79n5`,
                                                                                        optimized: !0,
                                                                                        rendersWithMotion: !0,
                                                                                        scopeId: `O8ATqqA0q`,
                                                                                        children: c(Z, {
                                                                                            BEArdUrUv: `rgb(255, 255, 255)`,
                                                                                            height: `100%`,
                                                                                            id: `wKquw79n5`,
                                                                                            layoutId: `wKquw79n5`,
                                                                                            MWuppPuA5: `Playground`,
                                                                                            ND3loCKZn: !1,
                                                                                            pMW7b7CTY: `rgb(19, 19, 19)`,
                                                                                            variant: T,
                                                                                            width: `100%`,
                                                                                            ...Q({ saCAa680I: { BEArdUrUv: M, pMW7b7CTY: N } }, L, H),
                                                                                        }),
                                                                                    }),
                                                                                }),
                                                                            }),
                                                                        }),
                                                                    ],
                                                                }),
                                                            Ce() &&
                                                                c(wa, {
                                                                    __framer__animate: { transition: Ia },
                                                                    __framer__animateOnce: !1,
                                                                    __framer__scrollDirection: { direction: `down`, target: La },
                                                                    __framer__styleAppearEffectEnabled: !0,
                                                                    __framer__threshold: 0.5,
                                                                    __perspectiveFX: !1,
                                                                    __smartComponentFX: !0,
                                                                    __targetOpacity: 1,
                                                                    className: `framer-101n1ei`,
                                                                    "data-framer-name": `Name`,
                                                                    
                                                                    "data-highlight": !0,
                                                                    layoutDependency: J,
                                                                    layoutId: `BaFbLmSjy`,
                                                                    onMouseEnter: le,
                                                                    ...Q({ saCAa680I: { __framer__styleAppearEffectEnabled: void 0 }, Wgt6tNYcC: { __framer__styleAppearEffectEnabled: void 0, onMouseLeave: he } }, L, H),
                                                                    children: c(w, {
                                                                        height: 64,
                                                                        y: (u?.y || 0) + 0 + 0 + 0 + 0 + 0 + 0 + 0,
                                                                        children: c($, {
                                                                            __perspectiveFX: !1,
                                                                            __smartComponentFX: !0,
                                                                            __targetOpacity: 1,
                                                                            animate: Ra,
                                                                            className: `framer-4sef1f-container`,
                                                                            "data-framer-appear-id": `4sef1f`,
                                                                            initial: za,
                                                                            layoutDependency: J,
                                                                            layoutId: `qYr5QU0uJ-container`,
                                                                            nodeId: `qYr5QU0uJ`,
                                                                            optimized: !0,
                                                                            rendersWithMotion: !0,
                                                                            scopeId: `O8ATqqA0q`,
                                                                            children: c(ia, {
                                                                                height: `100%`,
                                                                                id: `qYr5QU0uJ`,
                                                                                layoutId: `qYr5QU0uJ`,
                                                                                style: { height: `100%` },
                                                                                variant: `yFDZkqkds`,
                                                                                width: `100%`,
                                                                                ...Q({ saCAa680I: { AhaOGR7uV: ge }, Wgt6tNYcC: { variant: `D8E0IBVn5` } }, L, H),
                                                                            }),
                                                                        }),
                                                                    }),
                                                                }),
                                                            Se() &&
                                                                p(S.div, {
                                                                    className: `framer-t6l0wz`,
                                                                    layoutDependency: J,
                                                                    layoutId: `bdI5DaikW`,
                                                                    children: [
                                                                        c(D, {
                                                                            href: y,
                                                                            motionChild: !0,
                                                                            nodeId: `c5914qE2P`,
                                                                            scopeId: `O8ATqqA0q`,
                                                                            smoothScroll: !0,
                                                                            children: c(Ea, {
                                                                                __framer__animate: { transition: Ka },
                                                                                __framer__animateOnce: !1,
                                                                                __framer__scrollDirection: { direction: `down`, target: La },
                                                                                __framer__styleAppearEffectEnabled: !0,
                                                                                __framer__threshold: 0.5,
                                                                                __perspectiveFX: !1,
                                                                                __smartComponentFX: !0,
                                                                                __targetOpacity: 1,
                                                                                className: `framer-yazcvp framer-tzin30`,
                                                                                "data-framer-name": `Nav Item 2`,
                                                                                layoutDependency: J,
                                                                                layoutId: `c5914qE2P`,
                                                                                ...Q({ saCAa680I: { __framer__styleAppearEffectEnabled: void 0 }, Wgt6tNYcC: { __framer__styleAppearEffectEnabled: void 0 } }, L, H),
                                                                                children: c(w, {
                                                                                    height: 44,
                                                                                    ...Q({ saCAa680I: { y: (u?.y || 0) + 0 + 0 + 0 + 0 + 10 + 0 + 0 }, Wgt6tNYcC: { y: (u?.y || 0) + 0 + 0 + 0 + 0 + 10 + 0 + 0 } }, L, H),
                                                                                    children: c($, {
                                                                                        __perspectiveFX: !1,
                                                                                        __smartComponentFX: !0,
                                                                                        __targetOpacity: 1,
                                                                                        animate: io,
                                                                                        className: `framer-1oak7fv-container`,
                                                                                        "data-framer-appear-id": `1oak7fv`,
                                                                                        initial: eo,
                                                                                        layoutDependency: J,
                                                                                        layoutId: `qkwH0CLsE-container`,
                                                                                        nodeId: `qkwH0CLsE`,
                                                                                        optimized: !0,
                                                                                        rendersWithMotion: !0,
                                                                                        scopeId: `O8ATqqA0q`,
                                                                                        children: c(Z, {
                                                                                            BEArdUrUv: `rgb(255, 255, 255)`,
                                                                                            height: `100%`,
                                                                                            id: `qkwH0CLsE`,
                                                                                            layoutId: `qkwH0CLsE`,
                                                                                            MWuppPuA5: `Services`,
                                                                                            ND3loCKZn: !1,
                                                                                            pMW7b7CTY: `rgb(19, 19, 19)`,
                                                                                            variant: E,
                                                                                            width: `100%`,
                                                                                            ...Q({ saCAa680I: { BEArdUrUv: M, pMW7b7CTY: N } }, L, H),
                                                                                        }),
                                                                                    }),
                                                                                }),
                                                                            }),
                                                                        }),
                                                                        c(D, {
                                                                            href: b,
                                                                            motionChild: !0,
                                                                            nodeId: `K1lCWNK8m`,
                                                                            scopeId: `O8ATqqA0q`,
                                                                            smoothScroll: !0,
                                                                            children: c(Ea, {
                                                                                __framer__animate: { transition: Va },
                                                                                __framer__animateOnce: !1,
                                                                                __framer__scrollDirection: { direction: `down`, target: La },
                                                                                __framer__styleAppearEffectEnabled: !0,
                                                                                __framer__threshold: 0.5,
                                                                                __perspectiveFX: !1,
                                                                                __smartComponentFX: !0,
                                                                                __targetOpacity: 1,
                                                                                className: `framer-19ez4sx framer-tzin30`,
                                                                                "data-framer-name": `Nav Item 6`,
                                                                                layoutDependency: J,
                                                                                layoutId: `K1lCWNK8m`,
                                                                                ...Q({ saCAa680I: { __framer__styleAppearEffectEnabled: void 0 }, Wgt6tNYcC: { __framer__styleAppearEffectEnabled: void 0 } }, L, H),
                                                                                children: c(w, {
                                                                                    height: 44,
                                                                                    ...Q({ saCAa680I: { y: (u?.y || 0) + 0 + 0 + 0 + 0 + 10 + 0 + 0 }, Wgt6tNYcC: { y: (u?.y || 0) + 0 + 0 + 0 + 0 + 10 + 0 + 0 } }, L, H),
                                                                                    children: c($, {
                                                                                        __perspectiveFX: !1,
                                                                                        __smartComponentFX: !0,
                                                                                        __targetOpacity: 1,
                                                                                        animate: no,
                                                                                        className: `framer-s103ir-container`,
                                                                                        "data-framer-appear-id": `s103ir`,
                                                                                        initial: eo,
                                                                                        layoutDependency: J,
                                                                                        layoutId: `vKhJHeba8-container`,
                                                                                        nodeId: `vKhJHeba8`,
                                                                                        optimized: !0,
                                                                                        rendersWithMotion: !0,
                                                                                        scopeId: `O8ATqqA0q`,
                                                                                        children: c(Z, {
                                                                                            BEArdUrUv: `rgb(255, 255, 255)`,
                                                                                            height: `100%`,
                                                                                            id: `vKhJHeba8`,
                                                                                            layoutId: `vKhJHeba8`,
                                                                                            MWuppPuA5: `Contact`,
                                                                                            ND3loCKZn: !1,
                                                                                            pMW7b7CTY: `rgb(19, 19, 19)`,
                                                                                            variant: k,
                                                                                            width: `100%`,
                                                                                            ...Q({ saCAa680I: { BEArdUrUv: M, pMW7b7CTY: N } }, L, H),
                                                                                        }),
                                                                                    }),
                                                                                }),
                                                                            }),
                                                                        }),
                                                                        c(D, {
                                                                            href: F,
                                                                            motionChild: !0,
                                                                            nodeId: `yvEYUlPRb`,
                                                                            openInNewTab: !0,
                                                                            scopeId: `O8ATqqA0q`,
                                                                            smoothScroll: !0,
                                                                            children: c(Ea, {
                                                                                __framer__animate: { transition: Ka },
                                                                                __framer__animateOnce: !1,
                                                                                __framer__scrollDirection: { direction: `down`, target: La },
                                                                                __framer__styleAppearEffectEnabled: !0,
                                                                                __framer__threshold: 0.5,
                                                                                __perspectiveFX: !1,
                                                                                __smartComponentFX: !0,
                                                                                __targetOpacity: 1,
                                                                                className: `framer-t2pl8l framer-tzin30`,
                                                                                "data-framer-name": `Nav Item 5`,
                                                                                layoutDependency: J,
                                                                                layoutId: `yvEYUlPRb`,
                                                                                ...Q({ saCAa680I: { __framer__styleAppearEffectEnabled: void 0 }, Wgt6tNYcC: { __framer__styleAppearEffectEnabled: void 0 } }, L, H),
                                                                                children: c(w, {
                                                                                    height: 44,
                                                                                    ...Q({ saCAa680I: { y: (u?.y || 0) + 0 + 0 + 0 + 0 + 10 + 0 + 0 }, Wgt6tNYcC: { y: (u?.y || 0) + 0 + 0 + 0 + 0 + 10 + 0 + 0 } }, L, H),
                                                                                    children: c($, {
                                                                                        __perspectiveFX: !1,
                                                                                        __smartComponentFX: !0,
                                                                                        __targetOpacity: 1,
                                                                                        animate: io,
                                                                                        className: `framer-1nejlzj-container`,
                                                                                        "data-framer-appear-id": `1nejlzj`,
                                                                                        initial: eo,
                                                                                        layoutDependency: J,
                                                                                        layoutId: `NpudF2vPJ-container`,
                                                                                        nodeId: `NpudF2vPJ`,
                                                                                        optimized: !0,
                                                                                        rendersWithMotion: !0,
                                                                                        scopeId: `O8ATqqA0q`,
                                                                                        children: c(Z, {
                                                                                            BEArdUrUv: `rgb(255, 255, 255)`,
                                                                                            height: `100%`,
                                                                                            id: `NpudF2vPJ`,
                                                                                            layoutId: `NpudF2vPJ`,
                                                                                            MWuppPuA5: `Resume`,
                                                                                            ND3loCKZn: !0,
                                                                                            pMW7b7CTY: `rgb(19, 19, 19)`,
                                                                                            variant: O,
                                                                                            width: `100%`,
                                                                                            ...Q({ saCAa680I: { BEArdUrUv: M, pMW7b7CTY: N } }, L, H),
                                                                                        }),
                                                                                    }),
                                                                                }),
                                                                            }),
                                                                        }),
                                                                    ],
                                                                }),
                                                        ],
                                                    }),
                                                }),
                                            ],
                                        }),
                                ],
                            }),
                        }),
                    }),
                });
            })),
            (fo = [
                `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
                `.framer-ty8qd.framer-tzin30, .framer-ty8qd .framer-tzin30 { display: block; }`,
                `.framer-ty8qd.framer-182h7o1 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 64px; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1728px; }`,
                `.framer-ty8qd .framer-1ru7qgd { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: 1px; justify-content: space-between; overflow: visible; padding: 0px 20px 0px 20px; position: relative; width: 1728px; }`,
                `.framer-ty8qd .framer-if5bsr { flex: none; height: 64px; position: relative; width: 100%; z-index: 1; }`,
                `.framer-ty8qd .framer-1lcsrmr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: 102px; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
                `.framer-ty8qd .framer-92djo9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; z-index: 2; }`,
                `.framer-ty8qd .framer-bln1tj { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 64px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 60px; }`,
                `.framer-ty8qd .framer-sx9mt-container, .framer-ty8qd .framer-4sef1f-container { flex: 1 0 0px; height: 1px; position: relative; width: auto; z-index: 1; }`,
                `.framer-ty8qd .framer-15a8pay { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 30px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 32px; z-index: 2; }`,
                `.framer-ty8qd .framer-6xzl58 { flex: none; height: 30px; position: relative; width: 32px; }`,
                `.framer-ty8qd .framer-wlj7xd { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 90%; }`,
                `.framer-ty8qd .framer-1rge0i9, .framer-ty8qd .framer-wnh0s1, .framer-ty8qd .framer-1swesof, .framer-ty8qd .framer-16g275g, .framer-ty8qd .framer-c9ib3e { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: 100%; }`,
                `.framer-ty8qd .framer-1n0la0k-container, .framer-ty8qd .framer-2zfco7-container, .framer-ty8qd .framer-uuuddc-container, .framer-ty8qd .framer-lhu55k-container, .framer-ty8qd .framer-1w60vdd-container, .framer-ty8qd .framer-18v9lv3-container { flex: none; height: auto; position: relative; width: 100%; }`,
                `.framer-ty8qd .framer-8elzd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: 100%; }`,
                `.framer-ty8qd .framer-3dh3kq { flex: none; height: 102px; overflow: visible; position: relative; width: 100%; }`,
                `.framer-ty8qd .framer-1k2fldy { flex: none; height: 64px; left: calc(50.00000000000002% - 100% / 2); position: absolute; top: 0px; width: 100%; z-index: 1; }`,
                `.framer-ty8qd .framer-hl9rzu { bottom: 0px; flex: none; height: 30px; left: calc(50.00000000000002% - 32px / 2); overflow: visible; position: absolute; width: 32px; z-index: 2; }`,
                `.framer-ty8qd .framer-14k4gig { flex: none; height: 30px; left: 0px; position: absolute; top: 0px; width: 32px; }`,
                `.framer-ty8qd .framer-lmbu0m { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: 64px; justify-content: center; left: calc(50.00000000000002% - 100% / 2); overflow: hidden; padding: 0px; position: absolute; top: 0px; width: 100%; z-index: 2; }`,
                `.framer-ty8qd .framer-wzi7do { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; max-width: 900px; min-width: 800px; overflow: visible; padding: 0px; position: relative; width: 52%; }`,
                `.framer-ty8qd .framer-1qsai9a { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; width: 36%; }`,
                `.framer-ty8qd .framer-8kddmo, .framer-ty8qd .framer-1i8k3i7, .framer-ty8qd .framer-yazcvp, .framer-ty8qd .framer-19ez4sx, .framer-ty8qd .framer-t2pl8l { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
                `.framer-ty8qd .framer-heqfuf-container, .framer-ty8qd .framer-qho7bq-container, .framer-ty8qd .framer-u3lorm-container, .framer-ty8qd .framer-1oak7fv-container, .framer-ty8qd .framer-s103ir-container, .framer-ty8qd .framer-1nejlzj-container { flex: none; height: auto; position: relative; width: auto; }`,
                `.framer-ty8qd .framer-cn924 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
                `.framer-ty8qd .framer-101n1ei { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 64px; justify-content: center; overflow: visible; padding: 0px 12px 0px 12px; position: relative; width: min-content; }`,
                `.framer-ty8qd .framer-t6l0wz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 36%; }`,
                `.framer-ty8qd.framer-v-1qvabsx .framer-3dh3kq, .framer-ty8qd.framer-v-af7l8j .framer-wlj7xd { order: 1; }`,
                `.framer-ty8qd.framer-v-1qvabsx .framer-1k2fldy, .framer-ty8qd.framer-v-156c3ua .framer-1k2fldy { left: 0px; top: calc(31.372549019607867% - 64px / 2); }`,
                `.framer-ty8qd.framer-v-1qvabsx .framer-101n1ei { padding: 0px 8px 0px 8px; }`,
                `.framer-ty8qd.framer-v-1xmbucg .framer-hl9rzu { height: unset; top: 26px; }`,
                `.framer-ty8qd.framer-v-1xmbucg .framer-wzi7do { min-height: 64px; }`,
                `.framer-ty8qd.framer-v-pk59xd.framer-182h7o1, .framer-ty8qd.framer-v-af7l8j.framer-182h7o1, .framer-ty8qd.framer-v-e9hkrs.framer-182h7o1 { height: min-content; width: 1200px; }`,
                `.framer-ty8qd.framer-v-pk59xd .framer-1ru7qgd { align-content: center; align-items: center; flex: none; flex-direction: column; gap: 0px; height: min-content; justify-content: center; overflow: unset; padding: 0px; width: 100%; z-index: 1; }`,
                `.framer-ty8qd.framer-v-pk59xd .framer-1lcsrmr { height: 49px; order: 0; width: 90%; }`,
                `.framer-ty8qd.framer-v-pk59xd .framer-bln1tj, .framer-ty8qd.framer-v-af7l8j .framer-bln1tj, .framer-ty8qd.framer-v-e9hkrs .framer-bln1tj { align-content: flex-start; align-items: flex-start; justify-content: flex-start; width: min-content; }`,
                `.framer-ty8qd.framer-v-pk59xd .framer-15a8pay { cursor: pointer; height: 64px; }`,
                `.framer-ty8qd.framer-v-af7l8j .framer-1ru7qgd { align-content: center; align-items: center; flex: none; flex-direction: column; gap: 10px; height: calc(var(--framer-viewport-height, 100vh) * 1); justify-content: flex-start; overflow: unset; padding: 12px 0px 12px 0px; width: 100%; z-index: 1; }`,
                `.framer-ty8qd.framer-v-af7l8j .framer-1lcsrmr { height: 80px; order: 0; width: 90%; }`,
                `.framer-ty8qd.framer-v-af7l8j .framer-15a8pay { cursor: pointer; }`,
                `.framer-ty8qd.framer-v-e9hkrs .framer-1ru7qgd { flex: none; flex-direction: column; gap: 0px; height: min-content; justify-content: center; overflow: unset; padding: 4px 20px 4px 20px; width: 100%; z-index: 1; }`,
                `.framer-ty8qd.framer-v-e9hkrs .framer-1lcsrmr { height: 48px; order: 0; }`,
                `.framer-ty8qd.framer-v-e9hkrs .framer-15a8pay { height: 64px; }`,
            ]),
            (po = K(uo, fo, `framer-ty8qd`)),
            (po.displayName = `Header`),
            (po.defaultProps = { height: 64, width: 1728 }),
            N(po, {
                variant: {
                    options: [`aloAPvp4t`, `saCAa680I`, `Wgt6tNYcC`, `cqEttCG8w`, `yLxHFQJHN`, `Lf4lR77TC`, `Fo4YO51sZ`],
                    optionTitles: [`Desktop Closed`, `Dekstop Open`, `Dekstop Open Expanded`, `Desktop - menu`, `Phone - Closed`, `Phone - Open`, `Helper`],
                    title: `Variant`,
                    type: T.Enum,
                },
                VFMYpQwnN: { title: `Work Link`, type: T.Link },
                KVzmZPGKq: { title: `About Link`, type: T.Link },
                fYmarm91k: { title: `Serices Link`, type: T.Link },
                fwaoUmA_Z: { title: `Contact Link`, type: T.Link },
                SxCJQybfi: Da?.variant && { ...Da.variant, defaultValue: `HQGae3SrB`, description: void 0, hidden: void 0, title: `About button` },
                iRWEqwIl1: Da?.variant && { ...Da.variant, defaultValue: `HQGae3SrB`, description: ``, hidden: void 0, title: `Work button` },
                osilHFXuW: Da?.variant && { ...Da.variant, defaultValue: `HQGae3SrB`, description: void 0, hidden: void 0, title: `Plyground button` },
                Ub2Z1SJUE: Da?.variant && { ...Da.variant, defaultValue: `HQGae3SrB`, description: void 0, hidden: void 0, title: `Services button` },
                mGvvvVz2X: Da?.variant && { ...Da.variant, defaultValue: `HQGae3SrB`, description: void 0, hidden: void 0, title: `` },
                Ylb1AZB6y: Da?.variant && { ...Da.variant, defaultValue: `HQGae3SrB`, description: void 0, hidden: void 0, title: `Variant 2` },
                uu_oF7GOl: { title: `Playground Link`, type: T.Link },
                VRshC2itk: { defaultValue: `rgb(255, 255, 255)`, title: `Primary Text Color`, type: T.Color },
                VDjmPFuBo: { defaultValue: `rgb(19, 19, 19)`, title: `Selected Text Color`, type: T.Color },
                q8l4ps8mS: { description: ``, title: `Resume Link`, type: T.Link },
            }),
            M(po, [{ explicitInter: !0, fonts: [] }, ...Ca, ...Ta], { supportsExplicitInterCodegen: !0 });
    });
function ho(e, ...t) {
    let n = {};
    return t?.forEach((t) => t && Object.assign(n, e[t])), n;
}
var go,
    _o,
    vo,
    yo,
    bo,
    xo,
    So,
    Co,
    wo,
    To,
    Eo,
    Do,
    Oo,
    ko,
    Ao,
    jo,
    Mo = e(() => {
        i(),
            B(),
            b(),
            a(),
            Gi(),
            (go = [`C7xkp8U64`, `XXyB0yzkX`, `LfalMEqXV`, `Ha0A6L3jB`, `DY5OHT4nI`, `mj4LXdADQ`, `Kp3Ob2rW_`]),
            (_o = `framer-bfEjz`),
            (vo = { C7xkp8U64: `framer-v-18unmuy`, DY5OHT4nI: `framer-v-12ly4wm`, Ha0A6L3jB: `framer-v-yhykuv`, Kp3Ob2rW_: `framer-v-16b902k`, LfalMEqXV: `framer-v-rtnuw2`, mj4LXdADQ: `framer-v-dnhctm`, XXyB0yzkX: `framer-v-mg4czg` }),
            (yo = { delay: 0, duration: 0.4, ease: [0, 0, 1, 1], type: `tween` }),
            (bo = { delay: 0, duration: 0.2, ease: [0, 0, 1, 1], type: `tween` }),
            (xo = (e, t) => `translate(-50%, -50%) ${t}`),
            (So = { damping: 60, delay: 0.04, mass: 1, stiffness: 500, type: `spring` }),
            (Co = ({ value: e, children: t }) => {
                let n = u(y),
                    r = e ?? n.transition,
                    i = d(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
                return c(y.Provider, { value: i, children: t });
            }),
            (wo = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: `spring` }),
            (To = S.create(g)),
            (Eo = { "Curser blend": `mj4LXdADQ`, "Drag me": `LfalMEqXV`, "Variant 1": `C7xkp8U64`, Arrow: `XXyB0yzkX`, Comet: `Kp3Ob2rW_`, Eye: `DY5OHT4nI`, Scroll: `Ha0A6L3jB` }),
            (Do = ({ height: e, id: t, width: n, ...r }) => ({ ...r, variant: Eo[r.variant] ?? r.variant ?? `C7xkp8U64` })),
            (Oo = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
            (ko = n(function (e, t) {
                let n = l(null),
                    i = t ?? n,
                    a = r(),
                    { activeLocale: o, setLocale: s } = U(),
                    u = V(),
                    { style: d, className: f, layoutId: m, variant: h, ..._ } = Do(e),
                    { baseVariant: y, classNames: b, clearLoadingGesture: x, gestureHandlers: C, gestureVariant: w, isLoading: T, setGestureState: D, setVariant: O, variants: A } = G({
                        cycleOrder: go,
                        defaultVariant: `C7xkp8U64`,
                        ref: i,
                        variant: h,
                        variantClassNames: vo,
                    }),
                    j = Oo(e, A),
                    M = [Wi],
                    N = P(_o, ...M),
                    F = () => y !== `Kp3Ob2rW_`;
                return c(v, {
                    id: m ?? a,
                    children: c(To, {
                        animate: A,
                        initial: !1,
                        children: c(Co, {
                            value: yo,
                            ...ho({ DY5OHT4nI: { value: bo }, Kp3Ob2rW_: { value: bo } }, y, w),
                            children: c(S.div, {
                                ..._,
                                ...C,
                                className: P(N, `framer-18unmuy`, f, b),
                                "data-framer-name": `Variant 1`,
                                layoutDependency: j,
                                layoutId: `C7xkp8U64`,
                                ref: i,
                                style: { backdropFilter: `none`, borderBottomLeftRadius: 0, borderBottomRightRadius: 0, borderTopLeftRadius: 0, borderTopRightRadius: 0, WebkitBackdropFilter: `none`, ...d },
                                variants: {
                                    DY5OHT4nI: { backdropFilter: `none`, borderBottomLeftRadius: 0, borderBottomRightRadius: 0, borderTopLeftRadius: 0, borderTopRightRadius: 0, WebkitBackdropFilter: `none` },
                                    Ha0A6L3jB: { backdropFilter: `blur(4px)`, borderBottomLeftRadius: 1e3, borderBottomRightRadius: 1e3, borderTopLeftRadius: 1e3, borderTopRightRadius: 1e3, WebkitBackdropFilter: `blur(4px)` },
                                    Kp3Ob2rW_: { backdropFilter: `none`, borderBottomLeftRadius: 0, borderBottomRightRadius: 0, borderTopLeftRadius: 0, borderTopRightRadius: 0, WebkitBackdropFilter: `none` },
                                    mj4LXdADQ: { backdropFilter: `none`, borderBottomLeftRadius: 0, borderBottomRightRadius: 0, borderTopLeftRadius: 0, borderTopRightRadius: 0, WebkitBackdropFilter: `none` },
                                },
                                ...ho(
                                    {
                                        DY5OHT4nI: { "data-framer-name": `Eye` },
                                        Ha0A6L3jB: { "data-framer-name": `Scroll` },
                                        Kp3Ob2rW_: { "data-framer-name": `Comet` },
                                        LfalMEqXV: { "data-framer-name": `Drag me` },
                                        mj4LXdADQ: { "data-framer-name": `Curser blend` },
                                        XXyB0yzkX: { "data-framer-name": `Arrow` },
                                    },
                                    y,
                                    w
                                ),
                                children: p(S.div, {
                                    className: `framer-y2m2fo`,
                                    layoutDependency: j,
                                    layoutId: `jGRxnigWg`,
                                    children: [
                                        F() &&
                                            c(k, {
                                                __fromCanvasComponent: !0,
                                                children: c(g, {
                                                    children: c(S.p, {
                                                        className: `framer-styles-preset-1wjjzog`,
                                                        "data-styles-preset": `HgKWRU5cM`,
                                                        style: { "--framer-text-color": `var(--extracted-r6o4lv, rgb(245, 245, 245))` },
                                                        children: ` `,
                                                    }),
                                                }),
                                                className: `framer-1rnf2uq`,
                                                fonts: [`Inter`],
                                                layoutDependency: j,
                                                layoutId: `QU5i0WsMd`,
                                                style: { "--extracted-r6o4lv": `rgb(245, 245, 245)`, "--framer-link-text-color": `rgb(0, 153, 255)`, "--framer-link-text-decoration": `underline`, opacity: 0 },
                                                variants: { Ha0A6L3jB: { opacity: 1 }, LfalMEqXV: { "--extracted-r6o4lv": `rgb(255, 255, 255)`, opacity: 1 } },
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                                ...ho(
                                                    {
                                                        Ha0A6L3jB: {
                                                            children: c(g, {
                                                                children: c(S.p, {
                                                                    className: `framer-styles-preset-1wjjzog`,
                                                                    "data-styles-preset": `HgKWRU5cM`,
                                                                    style: { "--framer-text-color": `var(--extracted-r6o4lv, rgb(245, 245, 245))` },
                                                                    children: `Scroll`,
                                                                }),
                                                            }),
                                                            transformTemplate: xo,
                                                        },
                                                        LfalMEqXV: {
                                                            children: c(g, {
                                                                children: c(S.p, {
                                                                    className: `framer-styles-preset-1wjjzog`,
                                                                    "data-styles-preset": `HgKWRU5cM`,
                                                                    style: { "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))` },
                                                                    children: `Drag`,
                                                                }),
                                                            }),
                                                            transformTemplate: xo,
                                                        },
                                                    },
                                                    y,
                                                    w
                                                ),
                                            }),
                                        c(Co, {
                                            value: So,
                                            children: c(S.div, {
                                                className: `framer-x2scjl`,
                                                layoutDependency: j,
                                                layoutId: `V40ftSYKP`,
                                                style: {
                                                    "--border-bottom-width": `0px`,
                                                    "--border-color": `rgba(0, 0, 0, 0)`,
                                                    "--border-left-width": `0px`,
                                                    "--border-right-width": `0px`,
                                                    "--border-style": `solid`,
                                                    "--border-top-width": `0px`,
                                                    backdropFilter: `none`,
                                                    backgroundColor: `rgb(255, 255, 255)`,
                                                    borderBottomLeftRadius: 1e3,
                                                    borderBottomRightRadius: 1e3,
                                                    borderTopLeftRadius: 1e3,
                                                    borderTopRightRadius: 1e3,
                                                    scale: 0.1,
                                                    WebkitBackdropFilter: `none`,
                                                },
                                                variants: {
                                                    DY5OHT4nI: {
                                                        "--border-bottom-width": `0px`,
                                                        "--border-left-width": `0px`,
                                                        "--border-right-width": `0px`,
                                                        "--border-top-width": `0px`,
                                                        backdropFilter: `none`,
                                                        WebkitBackdropFilter: `none`,
                                                    },
                                                    Ha0A6L3jB: {
                                                        "--border-bottom-width": `0px`,
                                                        "--border-left-width": `0px`,
                                                        "--border-right-width": `0px`,
                                                        "--border-top-width": `0px`,
                                                        backdropFilter: `blur(4px)`,
                                                        backgroundColor: `rgba(255, 255, 255, 0.3)`,
                                                        scale: 1,
                                                        WebkitBackdropFilter: `blur(4px)`,
                                                    },
                                                    Kp3Ob2rW_: {
                                                        "--border-bottom-width": `0px`,
                                                        "--border-left-width": `0px`,
                                                        "--border-right-width": `0px`,
                                                        "--border-top-width": `0px`,
                                                        backdropFilter: `none`,
                                                        WebkitBackdropFilter: `none`,
                                                    },
                                                    LfalMEqXV: {
                                                        "--border-bottom-width": `0px`,
                                                        "--border-left-width": `0px`,
                                                        "--border-right-width": `0px`,
                                                        "--border-top-width": `0px`,
                                                        backdropFilter: `blur(4px)`,
                                                        backgroundColor: `rgba(255, 255, 255, 0.3)`,
                                                        scale: 1,
                                                        WebkitBackdropFilter: `blur(4px)`,
                                                    },
                                                    mj4LXdADQ: {
                                                        "--border-bottom-width": `0px`,
                                                        "--border-left-width": `0px`,
                                                        "--border-right-width": `0px`,
                                                        "--border-top-width": `0px`,
                                                        backdropFilter: `none`,
                                                        WebkitBackdropFilter: `none`,
                                                    },
                                                    XXyB0yzkX: {
                                                        "--border-bottom-width": `4px`,
                                                        "--border-color": `rgb(255, 255, 255)`,
                                                        "--border-left-width": `4px`,
                                                        "--border-right-width": `4px`,
                                                        "--border-style": `solid`,
                                                        "--border-top-width": `4px`,
                                                        backgroundColor: `rgba(0, 0, 0, 0)`,
                                                        scale: 0.4,
                                                    },
                                                },
                                                ...ho({ XXyB0yzkX: { "data-border": !0 } }, y, w),
                                            }),
                                        }),
                                        F() &&
                                            c(Co, {
                                                value: wo,
                                                children: c(E, {
                                                    background: {
                                                        alt: ``,
                                                        fit: `fill`,
                                                        loading: R((u?.y || 0) + (0 + ((u?.height || 130) - 0 - 100) / 2) + 25),
                                                        pixelHeight: 130,
                                                        pixelWidth: 130,
                                                        src: `./images/nyyVG7N6UOz2JLw3yIOumT1BsI.svg`,
                                                    },
                                                    className: `framer-61qkhw`,
                                                    layoutDependency: j,
                                                    layoutId: `Y3KjJ6biC`,
                                                    style: { opacity: 0, scale: 0.4 },
                                                    variants: { XXyB0yzkX: { opacity: 1 } },
                                                    ...ho(
                                                        {
                                                            DY5OHT4nI: {
                                                                background: {
                                                                    alt: ``,
                                                                    fit: `fill`,
                                                                    loading: R((u?.y || 0) + (0 + ((u?.height || 100) - 0 - 100) / 2) + 25),
                                                                    pixelHeight: 130,
                                                                    pixelWidth: 130,
                                                                    src: `./images/nyyVG7N6UOz2JLw3yIOumT1BsI.svg`,
                                                                },
                                                            },
                                                            Ha0A6L3jB: {
                                                                background: {
                                                                    alt: ``,
                                                                    fit: `fill`,
                                                                    loading: R((u?.y || 0) + (0 + ((u?.height || 130) - 0 - 100) / 2) + -15),
                                                                    pixelHeight: 130,
                                                                    pixelWidth: 130,
                                                                    src: `./images/nyyVG7N6UOz2JLw3yIOumT1BsI.svg`,
                                                                },
                                                            },
                                                            LfalMEqXV: {
                                                                background: {
                                                                    alt: ``,
                                                                    fit: `fill`,
                                                                    loading: R((u?.y || 0) + (0 + ((u?.height || 130) - 0 - 100) / 2) + -15),
                                                                    pixelHeight: 130,
                                                                    pixelWidth: 130,
                                                                    src: `./images/nyyVG7N6UOz2JLw3yIOumT1BsI.svg`,
                                                                },
                                                            },
                                                            XXyB0yzkX: {
                                                                background: {
                                                                    alt: ``,
                                                                    fit: `fill`,
                                                                    loading: R((u?.y || 0) + (0 + ((u?.height || 130) - 0 - 100) / 2) + 0),
                                                                    pixelHeight: 130,
                                                                    pixelWidth: 130,
                                                                    src: `./images/nyyVG7N6UOz2JLw3yIOumT1BsI.svg`,
                                                                },
                                                            },
                                                        },
                                                        y,
                                                        w
                                                    ),
                                                }),
                                            }),
                                        c(E, {
                                            background: {
                                                alt: ``,
                                                fit: `fill`,
                                                intrinsicHeight: 256,
                                                intrinsicWidth: 256,
                                                loading: R((u?.y || 0) + (0 + ((u?.height || 130) - 0 - 100) / 2) + 0),
                                                pixelHeight: 256,
                                                pixelWidth: 256,
                                                src: `./images/e9dKCdPKwqWbFokhAYwVwxZ6os.png`,
                                            },
                                            className: `framer-12veste`,
                                            "data-framer-name": `Comet-ezgif.com-apng-to-webp-converter`,
                                            layoutDependency: j,
                                            layoutId: `dLJILL9oh`,
                                            style: { rotateY: 180, scale: 0 },
                                            variants: { Kp3Ob2rW_: { scale: 1 } },
                                            ...ho(
                                                {
                                                    DY5OHT4nI: {
                                                        background: {
                                                            alt: ``,
                                                            fit: `fill`,
                                                            intrinsicHeight: 256,
                                                            intrinsicWidth: 256,
                                                            loading: R((u?.y || 0) + (0 + ((u?.height || 100) - 0 - 100) / 2) + 0),
                                                            pixelHeight: 256,
                                                            pixelWidth: 256,
                                                            src: `./images/e9dKCdPKwqWbFokhAYwVwxZ6os.png`,
                                                        },
                                                    },
                                                    Kp3Ob2rW_: {
                                                        background: {
                                                            alt: ``,
                                                            fit: `fill`,
                                                            intrinsicHeight: 256,
                                                            intrinsicWidth: 256,
                                                            loading: R((u?.y || 0) + (0 + ((u?.height || 120) - 0 - 130) / 2) + 0),
                                                            pixelHeight: 256,
                                                            pixelWidth: 256,
                                                            src: `./images/e9dKCdPKwqWbFokhAYwVwxZ6os.png`,
                                                        },
                                                    },
                                                },
                                                y,
                                                w
                                            ),
                                        }),
                                        F() &&
                                            c(E, {
                                                background: {
                                                    alt: ``,
                                                    fit: `fill`,
                                                    intrinsicHeight: 256,
                                                    intrinsicWidth: 256,
                                                    loading: R((u?.y || 0) + (0 + ((u?.height || 130) - 0 - 100) / 2) + 46),
                                                    pixelHeight: 256,
                                                    pixelWidth: 256,
                                                    positionX: `center`,
                                                    positionY: `bottom`,
                                                    src: `./images/TkqybcqzjmYFK1t0ZSMlDGhRp8.webp`,
                                                },
                                                className: `framer-15se9r9`,
                                                "data-framer-name": `Eyes-ezgif.com-apng-to-webp-converter`,
                                                layoutDependency: j,
                                                layoutId: `KOiixK1WW`,
                                                style: { opacity: 0 },
                                                transformTemplate: xo,
                                                variants: { DY5OHT4nI: { opacity: 1 } },
                                                ...ho(
                                                    {
                                                        DY5OHT4nI: {
                                                            background: {
                                                                alt: ``,
                                                                fit: `fill`,
                                                                intrinsicHeight: 256,
                                                                intrinsicWidth: 256,
                                                                loading: R((u?.y || 0) + (0 + ((u?.height || 100) - 0 - 100) / 2) + 4),
                                                                pixelHeight: 256,
                                                                pixelWidth: 256,
                                                                positionX: `center`,
                                                                positionY: `bottom`,
                                                                src: `./images/TkqybcqzjmYFK1t0ZSMlDGhRp8.webp`,
                                                            },
                                                        },
                                                    },
                                                    y,
                                                    w
                                                ),
                                            }),
                                    ],
                                }),
                            }),
                        }),
                    }),
                });
            })),
            (Ao = [
                `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
                `.framer-bfEjz.framer-47z3b4, .framer-bfEjz .framer-47z3b4 { display: block; }`,
                `.framer-bfEjz.framer-18unmuy { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 130px; justify-content: center; mix-blend-mode: difference; padding: 0px; position: relative; width: 130px; }`,
                `.framer-bfEjz .framer-y2m2fo { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100px; justify-content: center; overflow: visible; padding: 0px; pointer-events: none; position: relative; width: 100px; }`,
                `.framer-bfEjz .framer-1rnf2uq { bottom: -40px; flex: none; height: auto; left: -40px; position: absolute; white-space: pre; width: auto; z-index: 1; }`,
                `.framer-bfEjz .framer-x2scjl { flex: none; height: 130px; overflow: visible; position: relative; width: 130px; }`,
                `.framer-bfEjz .framer-61qkhw { flex: none; height: 130px; left: -25px; position: absolute; top: 25px; width: 130px; z-index: 1; }`,
                `.framer-bfEjz .framer-12veste { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 100px); left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; z-index: 1; }`,
                `.framer-bfEjz .framer-15se9r9 { aspect-ratio: 1.2 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 9px); left: 50%; overflow: visible; position: absolute; top: 50%; width: 10px; z-index: 1; }`,
                `.framer-bfEjz.framer-v-mg4czg .framer-61qkhw { bottom: 0px; height: unset; left: 0px; right: 0px; top: 0px; width: unset; }`,
                `.framer-bfEjz.framer-v-rtnuw2 .framer-1rnf2uq, .framer-bfEjz.framer-v-yhykuv .framer-1rnf2uq { bottom: unset; left: 50%; top: 50%; }`,
                `.framer-bfEjz.framer-v-rtnuw2 .framer-61qkhw, .framer-bfEjz.framer-v-yhykuv .framer-61qkhw { left: -15px; top: -15px; }`,
                `.framer-bfEjz.framer-v-yhykuv .framer-x2scjl { overflow: hidden; will-change: var(--framer-will-change-override, transform); }`,
                `.framer-bfEjz.framer-v-12ly4wm.framer-18unmuy, .framer-bfEjz.framer-v-16b902k.framer-18unmuy { height: min-content; mix-blend-mode: unset; width: min-content; }`,
                `.framer-bfEjz.framer-v-12ly4wm .framer-x2scjl, .framer-bfEjz.framer-v-16b902k .framer-x2scjl { height: 100px; width: 100px; }`,
                `.framer-bfEjz.framer-v-12ly4wm .framer-15se9r9 { height: var(--framer-aspect-ratio-supported, 84px); width: 100px; }`,
                `.framer-bfEjz.framer-v-dnhctm .framer-x2scjl { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 300px); width: 300px; }`,
                `.framer-bfEjz.framer-v-16b902k .framer-y2m2fo { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 120px); width: 120px; }`,
                `.framer-bfEjz.framer-v-16b902k .framer-12veste { height: var(--framer-aspect-ratio-supported, 120px); }`,
                ...Ui,
                `.framer-bfEjz[data-border="true"]::after, .framer-bfEjz [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
            ]),
            (jo = K(ko, Ao, `framer-bfEjz`)),
            (jo.displayName = `Cusror`),
            (jo.defaultProps = { height: 130, width: 130 }),
            N(jo, {
                variant: {
                    options: [`C7xkp8U64`, `XXyB0yzkX`, `LfalMEqXV`, `Ha0A6L3jB`, `DY5OHT4nI`, `mj4LXdADQ`, `Kp3Ob2rW_`],
                    optionTitles: [`Variant 1`, `Arrow`, `Drag me`, `Scroll`, `Eye`, `Curser blend`, `Comet`],
                    title: `Variant`,
                    type: T.Enum,
                },
            }),
            M(
                jo,
                [
                    {
                        explicitInter: !0,
                        fonts: [
                            {
                                family: `Inter`,
                                source: `framer`,
                                style: `normal`,
                                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                                weight: `400`,
                            },
                            {
                                family: `Inter`,
                                source: `framer`,
                                style: `normal`,
                                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                                weight: `400`,
                            },
                            { family: `Inter`, source: `framer`, style: `normal`, unicodeRange: `U+1F00-1FFF`, url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`, weight: `400` },
                            { family: `Inter`, source: `framer`, style: `normal`, unicodeRange: `U+0370-03FF`, url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`, weight: `400` },
                            {
                                family: `Inter`,
                                source: `framer`,
                                style: `normal`,
                                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                                weight: `400`,
                            },
                            {
                                family: `Inter`,
                                source: `framer`,
                                style: `normal`,
                                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                                url: `https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2`,
                                weight: `400`,
                            },
                            {
                                family: `Inter`,
                                source: `framer`,
                                style: `normal`,
                                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                                weight: `400`,
                            },
                        ],
                    },
                    ...L(Hi),
                ],
                { supportsExplicitInterCodegen: !0 }
            );
    }),
    No,
    Po,
    Fo,
    Io = e(() => {
        B(),
            F.loadFonts([`CUSTOM;Mango Grotesque Bold`]),
            (No = [{ explicitInter: !0, fonts: [{ family: `Mango Grotesque Bold`, source: `custom`, url: `https://framerusercontent.com/assets/gBZuuNKNCyBkXqbw0nPRN8nBdaY.woff2` }] }]),
            (Po = [
                `.framer-r0sq8 .framer-styles-preset-f5g82m:not(.rich-text-wrapper), .framer-r0sq8 .framer-styles-preset-f5g82m.rich-text-wrapper h3 { --framer-font-family: "Mango Grotesque Bold", "Mango Grotesque Bold Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 60px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-letter-spacing: 0.01em; --framer-line-height: 100%; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: #131313; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
                `@media (max-width: 1199px) and (min-width: 768px) { .framer-r0sq8 .framer-styles-preset-f5g82m:not(.rich-text-wrapper), .framer-r0sq8 .framer-styles-preset-f5g82m.rich-text-wrapper h3 { --framer-font-family: "Mango Grotesque Bold", "Mango Grotesque Bold Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 48px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-letter-spacing: 0.01em; --framer-line-height: 100%; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: #131313; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
                `@media (max-width: 767px) and (min-width: 0px) { .framer-r0sq8 .framer-styles-preset-f5g82m:not(.rich-text-wrapper), .framer-r0sq8 .framer-styles-preset-f5g82m.rich-text-wrapper h3 { --framer-font-family: "Mango Grotesque Bold", "Mango Grotesque Bold Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 36px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-letter-spacing: 0.01em; --framer-line-height: 100%; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: #131313; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
            ]),
            (Fo = `framer-r0sq8`);
    });
function Lo(e) {
    return (t) => (
        m(() => {
            let e = document.createElement(`style`);
            return (
                (e.innerHTML = `
                
                ::-webkit-scrollbar {
                    width: ${Ro}px;
                }
                ::-webkit-scrollbar-track {
                    background: ${Bo};
                    padding: 0px;
                    // border: 4px solid transparent;
                    // border-radius: ${zo}px;,
                }
                ::-webkit-scrollbar-thumb {
                    background-color: ${Ho};
                    // border: 4px solid ${Bo};
                    // border-radius: ${Vo}px;
                }
                ::-webkit-scrollbar-thumb:hover {
                    background-color: ${Uo};
                }
                ::-webkit-scrollbar-thumb:active {
                    background-color: ${Wo};
                }
            `),
                document.head.appendChild(e),
                () => {
                    document.head.removeChild(e);
                }
            );
        }, [Ro, Ho, Bo, zo, Vo, Uo, Wo]),
        c(e, { ...t })
    );
}
var Ro,
    zo,
    Bo,
    Vo,
    Ho,
    Uo,
    Wo,
    Go = e(() => {
        i(), a(), (Ro = 4), (zo = 0), (Bo = `#333333`), (Vo = 30), (Ho = `#f2f2f2`), (Uo = `#808080`), (Wo = `#208fdf`);
    });
export {
    Xt as FramerDFbaCIQLb,
    po as FramerO8ATqqA0q,
    kn as FramerfP5XgwLy4,
    Bi as Framerh8HwKROiq,
    jo as FramerotyTDheAG,
    et as SVG,
    Qe as SmoothScroll,
    zn as TextWrap,
    Me as Video,
    Fo as className,
    Wi as className$1,
    ar as className$2,
    Ln as className$3,
    Nn as className$4,
    it as className$5,
    Po as css,
    Ui as css$1,
    ir as css$2,
    In as css$3,
    Mn as css$4,
    rt as css$5,
    Lo as customScrollbar,
    No as fonts,
    Hi as fonts$1,
    rr as fonts$2,
    Fn as fonts$3,
    jn as fonts$4,
    nt as fonts$5,
    Zt as init_DFbaCIQLb,
    Gi as init_HgKWRU5cM,
    or as init_MxRbawjh0,
    mo as init_O8ATqqA0q,
    tt as init_SVG_Prod,
    Go as init_Scrollbar,
    $e as init_SmoothScroll_Prod,
    Vn as init_TextWrap_Prod,
    He as init_Video,
    at as init_W1Ccjr0iR,
    de as init_colorFromToken,
    ae as init_constants,
    Io as init_d5RbNAYXS,
    An as init_fP5XgwLy4,
    Pn as init_gbd6XYWXs,
    Vi as init_h8HwKROiq,
    _e as init_isBrowser,
    fe as init_isMotionValue,
    Mo as init_otyTDheAG,
    ke as init_propUtils,
    ye as init_useAutoMotionValue,
    ue as init_useConstant,
    we as init_useControlledState,
    be as init_useFontControls,
    ve as init_useOnChange,
    le as init_useOnNavigationTargetChange,
    Ce as init_useRenderTarget,
    pe as init_useUniqueClassName,
    Rn as init_uyx206U5p,
    me as init_variantUtils,
    Oe as paddingControl,
    Ee as usePadding,
};
//# sourceMappingURL=shared-lib.CA8-M1mQ.mjs.map
