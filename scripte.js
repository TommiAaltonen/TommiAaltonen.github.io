var CONFIG = {
        background: "image",
        overlay: 0,
        skin: "black",
        canvasEffect: !0,
        parallax: !0
    },
    youtubeBG, solidBG, imageBG, sliderBG, youtubeBGstart, youtubeBGend, overlayAnimation, overlayContentAnimation, screenTime, fadeDuration, sliderTransition, kenburnsEffect, bgOverlayOpacity, bgPatternOpacity, bgOverlayMode, bgOverlayColor, subscribeMail, contactMail;
bgOverlayMode = "solid", bgOverlayColor = "rgb(0,0,0)", bgOverlayOpacity = .5, bgPatternOpacity = .5, imageBG = "1.jpg", sliderBG = [{
    src: "assets/img/1.jpg"
}, {
    src: "assets/img/2.jpg"
}, {
    src: "assets/img/3.jpg"
}], fadeDuration = 800, screenTime = 6e3, sliderTransition = "fade", kenburnsEffect = "random", youtubeBG = "#", youtubeBGstart = 0, youtubeBGend = 170, solidBG = "rgb(0, 114, 255)", overlayAnimation = "fade", overlayContentAnimation = "slide";
$(document).ready(function() {
    function e() {
        $("#intro .container-mid").fadeOut(0)
    }

    function t() {
        $(".social-icons li a").tooltip({
            container: "body",
            delay: {
                show: 150,
                hide: 0
            }
        }), setTimeout(function() {
            blockEvents = !1
        }, 550), $("#intro .container-mid").fadeIn("slow"), $("#intro.intro-1 img.logo").addClass("animated fadeInDown"), setTimeout(function() {
            $("#intro.intro-1 h1").addClass("animated fadeInUp"), setTimeout(function() {
                $("#intro.intro-1 p").addClass("animated fadeInUp"), setTimeout(function() {
                    $("#intro.intro-1 .arrow-wrap").addClass("animated fadeInUp"), setTimeout(function() {
                        $("#bg-effect-1 canvas").addClass("animated fadeInUp"), setTimeout(function() {
                            activeOverlays = 1, $("#bg-effect-1 canvas").css("opacity", "1"), $("#intro.intro-1 .arrow-wrap").css("opacity", "1"), $("#intro.intro-1 p").css("opacity", "1"), $("#home-screen .content-block h1").css("opacity", "1"), $("#intro.intro-1 img.logo").css("opacity", "1")
                        }, 1e3)
                    }, 500)
                }, 500)
            }, 500)
        }, 500)
    }
    e(), $(window).load(function() {
        setTimeout(function() {
            $("#page-load").addClass("remove"), $("#intro").addClass("show"), t()
        }, 1250)
    })
}), $(document).ready(function() {
    function e() {
        $("#bg-youtube").YTPUnmute(), $(".volume-button").removeClass("fa-volume-off").addClass("fa-volume-up")
    }

    function t() {
        $("#bg-youtube").YTPMute(), $(".volume-button").removeClass("fa-volume-up").addClass("fa-volume-off")
    }

    function a() {
        $("#bg-youtube").YTPPlay(), $(".stop-button").removeClass("ti-control-play").addClass("ti-control-pause")
    }

    function o() {
        $("#bg-youtube").YTPPause(), $(".stop-button").removeClass("ti-control-pause").addClass("ti-control-play")
    }

    function n() {
        if (void 0 !== $) {
            var e = c[d[0]],
                t = c[d[1]],
                a = c[d[2]],
                o = c[d[3]],
                n = 1 - l,
                s = Math.round(n * e[0] + l * t[0]),
                r = Math.round(n * e[1] + l * t[1]),
                f = Math.round(n * e[2] + l * t[2]),
                m = "rgb(" + s + "," + r + "," + f + ")",
                b = Math.round(n * a[0] + l * o[0]),
                v = Math.round(n * a[1] + l * o[1]),
                g = Math.round(n * a[2] + l * o[2]),
                y = "rgb(" + b + "," + v + "," + g + ")";
            "color" != i && $("#bg-overlay").css({
                background: "-webkit-gradient(linear, left top, right top, from(" + m + "), to(" + y + "))"
            }).css({
                background: "-moz-linear-gradient(left, " + m + " 0%, " + y + " 100%)"
            }), l += u, l >= 1 && (l %= 1, d[0] = d[1], d[2] = d[3], d[1] = (d[1] + Math.floor(1 + Math.random() * (c.length - 1))) % c.length, d[3] = (d[3] + Math.floor(1 + Math.random() * (c.length - 1))) % c.length)
        }
    }
    var i = CONFIG.background;
    switch (i) {
        case "color":
            $("#bg-pattern").fadeOut(), $("#bg-overlay").css("opacity", "1"), $("#bg-overlay").css("background-color", solidBG);
            break;
        case "image":
            $("#bg-image").backstretch(imageBG);
            break;
        case "slider":
            $("#bg-image").vegas({
                slides: sliderBG,
                transition: sliderTransition,
                delay: screenTime,
                transitionDuration: fadeDuration,
                timer: !1,
                walk: function(e, t) {
                    $(".slider").cycle("next")
                }
            });
            break;
        case "kenburns":
            $("#bg-image").vegas({
                slides: sliderBG,
                transition: sliderTransition,
                delay: screenTime,
                transitionDuration: fadeDuration,
                timer: !1,
                animation: kenburnsEffect,
                walk: function(e, t) {
                    $(".slider").cycle("next")
                }
            });
            break;
        case "youtube":
            if (jQuery.browser.mobile) $("#bg-image").backstretch(imageBG);
            else {
                $(".showOn-video-bg").css("display", "block"), $("#bg-overlay").css("opacity", ".7"), $(".player").mb_YTPlayer();
                var s = 0;
                0 === s && $(".volume-button").click(function() {
                    s = 1, t()
                }), $("#bg-youtube").on("YTPMuted", function() {
                    1 === s && $(".volume-button").click(function() {
                        s = 2, e()
                    })
                }), $("#bg-youtube").on("YTPUnmuted", function() {
                    2 === s && $(".volume-button").click(function() {
                        s = 1, t()
                    })
                });
                var r = 0;
                0 === r && $(".stop-button").click(function() {
                    r = 1, o()
                }), $("#bg-youtube").on("YTPPause", function() {
                    1 === r && $(".stop-button").click(function() {
                        r = 2, a()
                    })
                }), $("#bg-youtube").on("YTPPlay", function() {
                    2 === r && $(".stop-button").click(function() {
                        r = 1, o()
                    })
                })
            }
            break;
        default:
            $("#bg-overlay").css("opacity", "1")
    }
    switch (bgOverlayMode) {
        case "solid":
            "color" != i && $("#bg-overlay").css("background", bgOverlayColor);
            break;
        case "gradient":
            var c = new Array([62, 35, 255], [60, 255, 60], [255, 35, 98], [45, 175, 230], [255, 0, 255], [255, 128, 0]),
                l = 0,
                d = [0, 1, 2, 3],
                u = .002;
            setInterval(n, 10);
            break;
        default:
            $("#bg-overlay").css("background", bgOverlayColor)
    }
    var f = CONFIG.skin;
    switch (f) {
        case "black":
            break;
        case "white":
            $("body").addClass("white")
    }
    $("#bg-overlay").css("opacity", bgOverlayOpacity), $("#bg-pattern").css("opacity", bgPatternOpacity),
        function(e) {
            (jQuery.browser = jQuery.browser || {}).mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|android|ipad|playbook|silk|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))
        }(navigator.userAgent || navigator.vendor || window.opera)
}), $(document).ready(function() {
    $(".slider").cycle({
        fx: "scrollVert",
        timeout: screenTime,
        delay: 0,
        speed: fadeDuration,
        slides: ".slide"
    })
}), $(document).ready(function() {
    function e() {
        frontpage.fadeIn(400)
    }

    function t() {
        frontpage.animate({
            opacity: "hide",
            bottom: "hide",
            height: "hide"
        }, 600)
    }

    function a() {
        downBtn.removeClass("active")
    }

    function o() {
        downBtn.addClass("active")
    }

    function n() {
        upBtn.removeClass("active")
    }

    function i() {
        upBtn.addClass("active")
    }

    function s() {
        $(".social-icons li a").tooltip("hide")
    }

    function r() {
        switch (killOverlay = !1, disableOverlay2 = !1, $(".social-icons li a.go-down").closest(".li").fadeIn(1), CONFIG.overlay) {
            case 1:
                overlay1 = $(".overlay-1"), disableOverlay2 = !0, $(".social-icons li a.go-down").parent().fadeOut(1);
                break;
            case 2:
                overlay1 = $(".overlay-2"), disableOverlay2 = !0;
                break;
            case 3:
                killOverlay = !0;
                break;
            default:
                overlay1 = $(".overlay-1")
        }
    }

    function c() {
        if (r(), killOverlay === !1 && blockEvents === !1) switch (blockEvents = !0, overlayStatus) {
            case 1:
                t(), a(), setTimeout(function() {
                    overlay.addClass("open"), setTimeout(function() {
                        overlay1.addClass("active"), setTimeout(function() {
                            i(), setTimeout(function() {
                                overlayStatus = 2, blockEvents = !1
                            }, 800)
                        }, 400)
                    }, 800)
                }, 200);
                break;
            case 2:
                0 == disableOverlay2 ? (overlay1.removeClass("active"), s(), setTimeout(function() {
                    overlay2.addClass("active"), setTimeout(function() {
                        overlayStatus = 3, blockEvents = !1
                    }, 800)
                }, 800)) : blockEvents = !1;
                break;
            case 3:
                blockEvents = !1;
                break;
            default:
                alert("SOMETHING WENT WRONG!")
        }
    }

    function l() {
        if (0 == blockEvents) switch (blockEvents = !0, overlayStatus) {
            case 1:
                blockEvents = !1;
                break;
            case 2:
                overlay1.removeClass("active"), n(), s(), setTimeout(function() {
                    overlay.removeClass("open"), setTimeout(function() {
                        e(), o(), setTimeout(function() {
                            overlayStatus = 1, blockEvents = !1
                        }, 800)
                    }, 600)
                }, 800);
                break;
            case 3:
                overlay2.removeClass("active"), setTimeout(function() {
                    overlay1.addClass("active"), setTimeout(function() {
                        overlayStatus = 2, blockEvents = !1
                    }, 800)
                }, 800);
                break;
            default:
                alert("SOMETHING WENT WRONG!")
        }
    }
    switch (overlay = $("#overlay"), overlay1 = $(".overlay-1"), overlay2 = $(".overlay-2"), overlayContent = $("#overlay section"), upBtn = $(".go-up"), downBtn = $(".go-down"), frontpage = $("#intro .container-mid"), blockEvents = !0, overlayStatus = 1, downBtn.click(function() {
        c()
    }), upBtn.click(function() {
        l()
    }), $("html").bind("DOMMouseScroll mousewheel", function(e) {
        var t = e.originalEvent.wheelDelta || -1 * e.originalEvent.detail;
        0 > t / 120 && c()
    }), $("html").bind("DOMMouseScroll mousewheel", function(e) {
        var t = e.originalEvent.wheelDelta || -1 * e.originalEvent.detail;
        t / 120 > 0 && l()
    }), $(document).keydown(function(e) {
        switch (e.which) {
            case 37:
                break;
            case 38:
                l();
                break;
            case 39:
                break;
            case 40:
                c();
                break;
            default:
                return
        }
        e.preventDefault()
    }), overlayAnimation) {
        case "fade":
            overlay.addClass("fade-In");
            break;
        case "slide":
            overlay.addClass("slide-from-bottom");
            break;
        default:
            overlay.addClass("fade-In")
    }
    switch (overlayContentAnimation) {
        case "fade":
            overlayContent.addClass("fade-In");
            break;
        case "slide":
            overlayContent.addClass("slide-from-bottom");
            break;
        default:
            overlayContent.addClass("slide-from-bottom")
    }
}), $(document).ready(function() {
    switch (CONFIG.canvasEffect === !0 && (backgroundEffect = 1), CONFIG.parallax === !0 && $("#main-container").parallax({
        scalarX: 24,
        scalarY: 15,
        frictionX: .1,
        frictionY: .1
    }), backgroundEffect) {
        case 1:
            ! function(e, t) {
                function a(a, o) {
                    function n() {
                        this.x = Math.random() * a.width, this.y = Math.random() * a.height, this.vx = m.velocity - .5 * Math.random(), this.vy = m.velocity - .5 * Math.random(), this.radius = Math.random() * m.star.width
                    }
                    var i = 12e3,
                        s = .1,
                        r = e(".bg-effect").width(),
                        c = e(".bg-effect").height(),
                        l = Math.round(c * r / i),
                        d = e(a),
                        u = a.getContext("2d"),
                        f = {
                            star: {
                                color: "rgba(255, 255, 255, .8)",
                                width: 1
                            },
                            line: {
                                color: "rgba(255, 255, 255, .8)",
                                width: .1
                            },
                            position: {
                                x: 0,
                                y: 0
                            },
                            width: r,
                            height: c,
                            velocity: s,
                            length: l,
                            distance: 120,
                            radius: 180,
                            stars: []
                        },
                        m = e.extend(!0, {}, f, o);
                    n.prototype = {
                        create: function() {
                            u.beginPath(), u.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, !1), u.fill()
                        },
                        animate: function() {
                            var e;
                            for (e = 0; e < m.length; e++) {
                                var t = m.stars[e];
                                t.y < 0 || t.y > a.height ? (t.vx = t.vx, t.vy = -t.vy) : (t.x < 0 || t.x > a.width) && (t.vx = -t.vx, t.vy = t.vy), t.x += t.vx, t.y += t.vy
                            }
                        },
                        line: function() {
                            var e, t, a, o, n = m.length;
                            for (a = 0; n > a; a++)
                                for (o = 0; n > o; o++) e = m.stars[a], t = m.stars[o], e.x - t.x < m.distance && e.y - t.y < m.distance && e.x - t.x > -m.distance && e.y - t.y > -m.distance && e.x - m.position.x < m.radius && e.y - m.position.y < m.radius && e.x - m.position.x > -m.radius && e.y - m.position.y > -m.radius && (u.beginPath(), u.moveTo(e.x, e.y), u.lineTo(t.x, t.y), u.stroke(), u.closePath())
                        }
                    }, this.createStars = function() {
                        var e, t, o = m.length;
                        for (u.clearRect(0, 0, a.width, a.height), t = 0; o > t; t++) m.stars.push(new n), e = m.stars[t], e.create();
                        e.line(), e.animate()
                    }, this.setCanvas = function() {
                        a.width = m.width, a.height = m.height
                    }, this.setContext = function() {
                        u.fillStyle = m.star.color, u.strokeStyle = m.line.color, u.lineWidth = m.line.width
                    }, this.setInitialPosition = function() {
                        o && o.hasOwnProperty("position") || (m.position = {
                            x: .5 * a.width,
                            y: .5 * a.height
                        })
                    }, this.loop = function(e) {
                        e(), t.requestAnimationFrame(function() {
                            this.loop(e)
                        }.bind(this))
                    }, this.bind = function() {
                        e(t).on("mousemove", function(e) {
                            m.position.x = e.pageX - d.offset().left, m.position.y = e.pageY - d.offset().top
                        })
                    }, this.init = function() {
                        this.setCanvas(), this.setContext(), this.setInitialPosition(), this.loop(this.createStars), this.bind()
                    }
                }
                e.fn.constellation = function(e) {
                    return this.each(function() {
                        var t = new a(this, e);
                        t.init()
                    })
                }
            }($, window), $("canvas").constellation({}), window.requestAnimationFrame || (window.requestAnimationFrame = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function(e) {
                return window.setTimeout(e, 1e3 / 60)
            });
            var e = function() {
                var e = {};
                return function(t, a, o) {
                    o || (o = "Don't call this twice without a uniqueId"), e[o] && clearTimeout(e[o]), e[o] = setTimeout(t, a)
                }
            }();
            $(window).resize(function() {
                e(function() {
                    $("canvas").constellation({})
                }, 400, "some unique string")
            }), $("#bg-effect-1").fadeIn(), $("#bg-effect-2").fadeOut(), $("#bg-effect-3").fadeOut();
            break;
        case 2:
            $("#bg-effect-1").fadeOut(), $("#bg-effect-2").fadeIn(), $("#bg-effect-3").fadeOut();
            break;
        case 3:
            $("#bg-effect-1").fadeOut(), $("#bg-effect-2").fadeOut(), $("#bg-effect-3").fadeIn();
            break;
        case 0:
            $("#bg-pattern").fadeIn(), $("#bg-effect-1").fadeOut(), $("#bg-effect-2").fadeOut(), $("#bg-effect-3").fadeOut(), $(".bg-effect-1").removeClass("layer"), $(".bg-effect-2").removeClass("layer"), $("#bg-effect-3").removeClass("layer");
            break;
        default:
            $("#bg-effect-1").fadeOut(), $("#bg-effect-2").fadeOut(), $("#bg-effect-3").fadeOut(), $("#bg-effect-1").removeClass("layer"), $("#bg-effect-2").removeClass("layer"), $("#bg-effect-3").removeClass("layer")
    }
}), $(document).ready(function() {
    $(".subscribe-form").submit(function() {
        var e = $(".subscribe-form").serialize();
        return $.ajax({
            type: "POST",
            url: "assets/subscribe.php",
            data: e,
            dataType: "json",
            success: function(e) {
                0 === e.valid ? ($(".subscribe-form").addClass("error"), $(".subscribe-form input").attr("placeholder", e.error)) : ($(".subscribe-form input,.subscribe-form button").val("").prop("disabled", !0), $(".subscribe-form input").attr("placeholder", e.message), $(".subscribe-form").removeClass("error").addClass("success"))
            }
        }), !1
    })
}), $(document).ready(function() {
    $(".contact-form").submit(function() {
        $(".contact-form label .status").remove(), $("#contact .contact-form.error input,#contact .contact-form.error textarea").removeClass("active");
        var e = $(".contact-form").serialize();
        return $.ajax({
            type: "POST",
            url: "assets/sendmail.php",
            data: e,
            dataType: "json",
            success: function(e) {
                "" !== e.nameMessage && ($("#contact .contact-form #name").addClass("active").attr("placeholder", e.nameMessage), $(".contact-form").addClass("error")), "" !== e.emailMessage && ($("#contact .contact-form #email").addClass("active").attr("placeholder", e.emailMessage), $(".contact-form").addClass("error")), "" !== e.messageMessage && ($("#contact .contact-form #message").addClass("active").attr("placeholder", e.messageMessage), $(".contact-form").addClass("error")), "" === e.nameMessage && "" === e.emailMessage && "" === e.messageMessage && ($(".contact-form").removeClass("error").addClass("success"), $("#contact .contact-form #message,#contact .contact-form #email,#contact .contact-form #name").attr("placeholder", ""), $("#contact .contact-form #message").attr("placeholder", e.succes), $(".contact-form input,.contact-form button,.contact-form textarea").val("").prop("disabled", !0))
            }
        }), !1
    })
});
(function() {
    var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X = [].slice,
        Y = {}.hasOwnProperty,
        Z = function(a, b) {
            function c() {
                this.constructor = a
            }
            for (var d in b) Y.call(b, d) && (a[d] = b[d]);
            return c.prototype = b.prototype, a.prototype = new c, a.__super__ = b.prototype, a
        },
        $ = [].indexOf || function(a) {
            for (var b = 0, c = this.length; c > b; b++)
                if (b in this && this[b] === a) return b;
            return -1
        };
    for (u = {
            catchupTime: 100,
            initialRate: .03,
            minTime: 250,
            ghostTime: 100,
            maxProgressPerFrame: 20,
            easeFactor: 1.25,
            startOnPageLoad: !0,
            restartOnPushState: !0,
            restartOnRequestAfter: 500,
            target: "body",
            elements: {
                checkInterval: 100,
                selectors: ["body"]
            },
            eventLag: {
                minSamples: 10,
                sampleCount: 3,
                lagThreshold: 3
            },
            ajax: {
                trackMethods: ["GET"],
                trackWebSockets: !0,
                ignoreURLs: []
            }
        }, C = function() {
            var a;
            return null != (a = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance.now() : void 0) ? a : +new Date
        }, E = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, t = window.cancelAnimationFrame || window.mozCancelAnimationFrame, null == E && (E = function(a) {
            return setTimeout(a, 50)
        }, t = function(a) {
            return clearTimeout(a)
        }), G = function(a) {
            var b, c;
            return b = C(), (c = function() {
                var d;
                return d = C() - b, d >= 33 ? (b = C(), a(d, function() {
                    return E(c)
                })) : setTimeout(c, 33 - d)
            })()
        }, F = function() {
            var a, b, c;
            return c = arguments[0], b = arguments[1], a = 3 <= arguments.length ? X.call(arguments, 2) : [], "function" == typeof c[b] ? c[b].apply(c, a) : c[b]
        }, v = function() {
            var a, b, c, d, e, f, g;
            for (b = arguments[0], d = 2 <= arguments.length ? X.call(arguments, 1) : [], f = 0, g = d.length; g > f; f++)
                if (c = d[f])
                    for (a in c) Y.call(c, a) && (e = c[a], null != b[a] && "object" == typeof b[a] && null != e && "object" == typeof e ? v(b[a], e) : b[a] = e);
            return b
        }, q = function(a) {
            var b, c, d, e, f;
            for (c = b = 0, e = 0, f = a.length; f > e; e++) d = a[e], c += Math.abs(d), b++;
            return c / b
        }, x = function(a, b) {
            var c, d, e;
            if (null == a && (a = "options"), null == b && (b = !0), e = document.querySelector("[data-pace-" + a + "]")) {
                if (c = e.getAttribute("data-pace-" + a), !b) return c;
                try {
                    return JSON.parse(c)
                } catch (f) {
                    return d = f, "undefined" != typeof console && null !== console ? console.error("Error parsing inline pace options", d) : void 0
                }
            }
        }, g = function() {
            function a() {}
            return a.prototype.on = function(a, b, c, d) {
                var e;
                return null == d && (d = !1), null == this.bindings && (this.bindings = {}), null == (e = this.bindings)[a] && (e[a] = []), this.bindings[a].push({
                    handler: b,
                    ctx: c,
                    once: d
                })
            }, a.prototype.once = function(a, b, c) {
                return this.on(a, b, c, !0)
            }, a.prototype.off = function(a, b) {
                var c, d, e;
                if (null != (null != (d = this.bindings) ? d[a] : void 0)) {
                    if (null == b) return delete this.bindings[a];
                    for (c = 0, e = []; c < this.bindings[a].length;) e.push(this.bindings[a][c].handler === b ? this.bindings[a].splice(c, 1) : c++);
                    return e
                }
            }, a.prototype.trigger = function() {
                var a, b, c, d, e, f, g, h, i;
                if (c = arguments[0], a = 2 <= arguments.length ? X.call(arguments, 1) : [], null != (g = this.bindings) ? g[c] : void 0) {
                    for (e = 0, i = []; e < this.bindings[c].length;) h = this.bindings[c][e], d = h.handler, b = h.ctx, f = h.once, d.apply(null != b ? b : this, a), i.push(f ? this.bindings[c].splice(e, 1) : e++);
                    return i
                }
            }, a
        }(), j = window.Pace || {}, window.Pace = j, v(j, g.prototype), D = j.options = v({}, u, window.paceOptions, x()), U = ["ajax", "document", "eventLag", "elements"], Q = 0, S = U.length; S > Q; Q++) K = U[Q], D[K] === !0 && (D[K] = u[K]);
    i = function(a) {
        function b() {
            return V = b.__super__.constructor.apply(this, arguments)
        }
        return Z(b, a), b
    }(Error), b = function() {
        function a() {
            this.progress = 0
        }
        return a.prototype.getElement = function() {
            var a;
            if (null == this.el) {
                if (a = document.querySelector(D.target), !a) throw new i;
                this.el = document.createElement("div"), this.el.className = "pace pace-active", document.body.className = document.body.className.replace(/pace-done/g, ""), document.body.className += " pace-running", this.el.innerHTML = '<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>', null != a.firstChild ? a.insertBefore(this.el, a.firstChild) : a.appendChild(this.el)
            }
            return this.el
        }, a.prototype.finish = function() {
            var a;
            return a = this.getElement(), a.className = a.className.replace("pace-active", ""), a.className += " pace-inactive", document.body.className = document.body.className.replace("pace-running", ""), document.body.className += " pace-done"
        }, a.prototype.update = function(a) {
            return this.progress = a, this.render()
        }, a.prototype.destroy = function() {
            try {
                this.getElement().parentNode.removeChild(this.getElement())
            } catch (a) {
                i = a
            }
            return this.el = void 0
        }, a.prototype.render = function() {
            var a, b, c, d, e, f, g;
            if (null == document.querySelector(D.target)) return !1;
            for (a = this.getElement(), d = "translate3d(" + this.progress + "%, 0, 0)", g = ["webkitTransform", "msTransform", "transform"], e = 0, f = g.length; f > e; e++) b = g[e], a.children[0].style[b] = d;
            return (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) && (a.children[0].setAttribute("data-progress-text", "" + (0 | this.progress) + "%"), this.progress >= 100 ? c = "99" : (c = this.progress < 10 ? "0" : "", c += 0 | this.progress), a.children[0].setAttribute("data-progress", "" + c)), this.lastRenderedProgress = this.progress
        }, a.prototype.done = function() {
            return this.progress >= 100
        }, a
    }(), h = function() {
        function a() {
            this.bindings = {}
        }
        return a.prototype.trigger = function(a, b) {
            var c, d, e, f, g;
            if (null != this.bindings[a]) {
                for (f = this.bindings[a], g = [], d = 0, e = f.length; e > d; d++) c = f[d], g.push(c.call(this, b));
                return g
            }
        }, a.prototype.on = function(a, b) {
            var c;
            return null == (c = this.bindings)[a] && (c[a] = []), this.bindings[a].push(b)
        }, a
    }(), P = window.XMLHttpRequest, O = window.XDomainRequest, N = window.WebSocket, w = function(a, b) {
        var c, d, e, f;
        f = [];
        for (d in b.prototype) try {
            e = b.prototype[d], f.push(null == a[d] && "function" != typeof e ? a[d] = e : void 0)
        } catch (g) {
            c = g
        }
        return f
    }, A = [], j.ignore = function() {
        var a, b, c;
        return b = arguments[0], a = 2 <= arguments.length ? X.call(arguments, 1) : [], A.unshift("ignore"), c = b.apply(null, a), A.shift(), c
    }, j.track = function() {
        var a, b, c;
        return b = arguments[0], a = 2 <= arguments.length ? X.call(arguments, 1) : [], A.unshift("track"), c = b.apply(null, a), A.shift(), c
    }, J = function(a) {
        var b;
        if (null == a && (a = "GET"), "track" === A[0]) return "force";
        if (!A.length && D.ajax) {
            if ("socket" === a && D.ajax.trackWebSockets) return !0;
            if (b = a.toUpperCase(), $.call(D.ajax.trackMethods, b) >= 0) return !0
        }
        return !1
    }, k = function(a) {
        function b() {
            var a, c = this;
            b.__super__.constructor.apply(this, arguments), a = function(a) {
                var b;
                return b = a.open, a.open = function(d, e) {
                    return J(d) && c.trigger("request", {
                        type: d,
                        url: e,
                        request: a
                    }), b.apply(a, arguments)
                }
            }, window.XMLHttpRequest = function(b) {
                var c;
                return c = new P(b), a(c), c
            };
            try {
                w(window.XMLHttpRequest, P)
            } catch (d) {}
            if (null != O) {
                window.XDomainRequest = function() {
                    var b;
                    return b = new O, a(b), b
                };
                try {
                    w(window.XDomainRequest, O)
                } catch (d) {}
            }
            if (null != N && D.ajax.trackWebSockets) {
                window.WebSocket = function(a, b) {
                    var d;
                    return d = null != b ? new N(a, b) : new N(a), J("socket") && c.trigger("request", {
                        type: "socket",
                        url: a,
                        protocols: b,
                        request: d
                    }), d
                };
                try {
                    w(window.WebSocket, N)
                } catch (d) {}
            }
        }
        return Z(b, a), b
    }(h), R = null, y = function() {
        return null == R && (R = new k), R
    }, I = function(a) {
        var b, c, d, e;
        for (e = D.ajax.ignoreURLs, c = 0, d = e.length; d > c; c++)
            if (b = e[c], "string" == typeof b) {
                if (-1 !== a.indexOf(b)) return !0
            } else if (b.test(a)) return !0;
        return !1
    }, y().on("request", function(b) {
        var c, d, e, f, g;
        return f = b.type, e = b.request, g = b.url, I(g) ? void 0 : j.running || D.restartOnRequestAfter === !1 && "force" !== J(f) ? void 0 : (d = arguments, c = D.restartOnRequestAfter || 0, "boolean" == typeof c && (c = 0), setTimeout(function() {
            var b, c, g, h, i, k;
            if (b = "socket" === f ? e.readyState < 2 : 0 < (h = e.readyState) && 4 > h) {
                for (j.restart(), i = j.sources, k = [], c = 0, g = i.length; g > c; c++) {
                    if (K = i[c], K instanceof a) {
                        K.watch.apply(K, d);
                        break
                    }
                    k.push(void 0)
                }
                return k
            }
        }, c))
    }), a = function() {
        function a() {
            var a = this;
            this.elements = [], y().on("request", function() {
                return a.watch.apply(a, arguments)
            })
        }
        return a.prototype.watch = function(a) {
            var b, c, d, e;
            return d = a.type, b = a.request, e = a.url, I(e) ? void 0 : (c = "socket" === d ? new n(b) : new o(b), this.elements.push(c))
        }, a
    }(), o = function() {
        function a(a) {
            var b, c, d, e, f, g, h = this;
            if (this.progress = 0, null != window.ProgressEvent)
                for (c = null, a.addEventListener("progress", function(a) {
                        return h.progress = a.lengthComputable ? 100 * a.loaded / a.total : h.progress + (100 - h.progress) / 2
                    }, !1), g = ["load", "abort", "timeout", "error"], d = 0, e = g.length; e > d; d++) b = g[d], a.addEventListener(b, function() {
                    return h.progress = 100
                }, !1);
            else f = a.onreadystatechange, a.onreadystatechange = function() {
                var b;
                return 0 === (b = a.readyState) || 4 === b ? h.progress = 100 : 3 === a.readyState && (h.progress = 50), "function" == typeof f ? f.apply(null, arguments) : void 0
            }
        }
        return a
    }(), n = function() {
        function a(a) {
            var b, c, d, e, f = this;
            for (this.progress = 0, e = ["error", "open"], c = 0, d = e.length; d > c; c++) b = e[c], a.addEventListener(b, function() {
                return f.progress = 100
            }, !1)
        }
        return a
    }(), d = function() {
        function a(a) {
            var b, c, d, f;
            for (null == a && (a = {}), this.elements = [], null == a.selectors && (a.selectors = []), f = a.selectors, c = 0, d = f.length; d > c; c++) b = f[c], this.elements.push(new e(b))
        }
        return a
    }(), e = function() {
        function a(a) {
            this.selector = a, this.progress = 0, this.check()
        }
        return a.prototype.check = function() {
            var a = this;
            return document.querySelector(this.selector) ? this.done() : setTimeout(function() {
                return a.check()
            }, D.elements.checkInterval)
        }, a.prototype.done = function() {
            return this.progress = 100
        }, a
    }(), c = function() {
        function a() {
            var a, b, c = this;
            this.progress = null != (b = this.states[document.readyState]) ? b : 100, a = document.onreadystatechange, document.onreadystatechange = function() {
                return null != c.states[document.readyState] && (c.progress = c.states[document.readyState]), "function" == typeof a ? a.apply(null, arguments) : void 0
            }
        }
        return a.prototype.states = {
            loading: 0,
            interactive: 50,
            complete: 100
        }, a
    }(), f = function() {
        function a() {
            var a, b, c, d, e, f = this;
            this.progress = 0, a = 0, e = [], d = 0, c = C(), b = setInterval(function() {
                var g;
                return g = C() - c - 50, c = C(), e.push(g), e.length > D.eventLag.sampleCount && e.shift(), a = q(e), ++d >= D.eventLag.minSamples && a < D.eventLag.lagThreshold ? (f.progress = 100, clearInterval(b)) : f.progress = 100 * (3 / (a + 3))
            }, 50)
        }
        return a
    }(), m = function() {
        function a(a) {
            this.source = a, this.last = this.sinceLastUpdate = 0, this.rate = D.initialRate, this.catchup = 0, this.progress = this.lastProgress = 0, null != this.source && (this.progress = F(this.source, "progress"))
        }
        return a.prototype.tick = function(a, b) {
            var c;
            return null == b && (b = F(this.source, "progress")), b >= 100 && (this.done = !0), b === this.last ? this.sinceLastUpdate += a : (this.sinceLastUpdate && (this.rate = (b - this.last) / this.sinceLastUpdate), this.catchup = (b - this.progress) / D.catchupTime, this.sinceLastUpdate = 0, this.last = b), b > this.progress && (this.progress += this.catchup * a), c = 1 - Math.pow(this.progress / 100, D.easeFactor), this.progress += c * this.rate * a, this.progress = Math.min(this.lastProgress + D.maxProgressPerFrame, this.progress), this.progress = Math.max(0, this.progress), this.progress = Math.min(100, this.progress), this.lastProgress = this.progress, this.progress
        }, a
    }(), L = null, H = null, r = null, M = null, p = null, s = null, j.running = !1, z = function() {
        return D.restartOnPushState ? j.restart() : void 0
    }, null != window.history.pushState && (T = window.history.pushState, window.history.pushState = function() {
        return z(), T.apply(window.history, arguments)
    }), null != window.history.replaceState && (W = window.history.replaceState, window.history.replaceState = function() {
        return z(), W.apply(window.history, arguments)
    }), l = {
        ajax: a,
        elements: d,
        document: c,
        eventLag: f
    }, (B = function() {
        var a, c, d, e, f, g, h, i;
        for (j.sources = L = [], g = ["ajax", "elements", "document", "eventLag"], c = 0, e = g.length; e > c; c++) a = g[c], D[a] !== !1 && L.push(new l[a](D[a]));
        for (i = null != (h = D.extraSources) ? h : [], d = 0, f = i.length; f > d; d++) K = i[d], L.push(new K(D));
        return j.bar = r = new b, H = [], M = new m
    })(), j.stop = function() {
        return j.trigger("stop"), j.running = !1, r.destroy(), s = !0, null != p && ("function" == typeof t && t(p), p = null), B()
    }, j.restart = function() {
        return j.trigger("restart"), j.stop(), j.start()
    }, j.go = function() {
        var a;
        return j.running = !0, r.render(), a = C(), s = !1, p = G(function(b, c) {
            var d, e, f, g, h, i, k, l, n, o, p, q, t, u, v, w;
            for (l = 100 - r.progress, e = p = 0, f = !0, i = q = 0, u = L.length; u > q; i = ++q)
                for (K = L[i], o = null != H[i] ? H[i] : H[i] = [], h = null != (w = K.elements) ? w : [K], k = t = 0, v = h.length; v > t; k = ++t) g = h[k], n = null != o[k] ? o[k] : o[k] = new m(g), f &= n.done, n.done || (e++, p += n.tick(b));
            return d = p / e, r.update(M.tick(b, d)), r.done() || f || s ? (r.update(100), j.trigger("done"), setTimeout(function() {
                return r.finish(), j.running = !1, j.trigger("hide")
            }, Math.max(D.ghostTime, Math.max(D.minTime - (C() - a), 0)))) : c()
        })
    }, j.start = function(a) {
        v(D, a), j.running = !0;
        try {
            r.render()
        } catch (b) {
            i = b
        }
        return document.querySelector(".pace") ? (j.trigger("start"), j.go()) : setTimeout(j.start, 50)
    }, "function" == typeof define && define.amd ? define(function() {
        return j
    }) : "object" == typeof exports ? module.exports = j : D.startOnPageLoad && j.start()
}).call(this);
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(a) {
    "use strict";
    var b = a.fn.jquery.split(" ")[0].split(".");
    if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] > 2) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")
}(jQuery), + function(a) {
    "use strict";

    function b() {
        var a = document.createElement("bootstrap"),
            b = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var c in b)
            if (void 0 !== a.style[c]) return {
                end: b[c]
            };
        return !1
    }
    a.fn.emulateTransitionEnd = function(b) {
        var c = !1,
            d = this;
        a(this).one("bsTransitionEnd", function() {
            c = !0
        });
        var e = function() {
            c || a(d).trigger(a.support.transition.end)
        };
        return setTimeout(e, b), this
    }, a(function() {
        a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
            bindType: a.support.transition.end,
            delegateType: a.support.transition.end,
            handle: function(b) {
                return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var c = a(this),
                e = c.data("bs.alert");
            e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c)
        })
    }
    var c = '[data-dismiss="alert"]',
        d = function(b) {
            a(b).on("click", c, this.close)
        };
    d.VERSION = "3.3.6", d.TRANSITION_DURATION = 150, d.prototype.close = function(b) {
        function c() {
            g.detach().trigger("closed.bs.alert").remove()
        }
        var e = a(this),
            f = e.attr("data-target");
        f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
        var g = a(f);
        b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c())
    };
    var e = a.fn.alert;
    a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function() {
        return a.fn.alert = e, this
    }, a(document).on("click.bs.alert.data-api", c, d.prototype.close)
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.button"),
                f = "object" == typeof b && b;
            e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b)
        })
    }
    var c = function(b, d) {
        this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1
    };
    c.VERSION = "3.3.6", c.DEFAULTS = {
        loadingText: "loading..."
    }, c.prototype.setState = function(b) {
        var c = "disabled",
            d = this.$element,
            e = d.is("input") ? "val" : "html",
            f = d.data();
        b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function() {
            d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c))
        }, this), 0)
    }, c.prototype.toggle = function() {
        var a = !0,
            b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
            var c = this.$element.find("input");
            "radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), a && c.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var d = a.fn.button;
    a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function() {
        return a.fn.button = d, this
    }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(c) {
        var d = a(c.target);
        d.hasClass("btn") || (d = d.closest(".btn")), b.call(d, "toggle"), a(c.target).is('input[type="radio"]') || a(c.target).is('input[type="checkbox"]') || c.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(b) {
        a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type))
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.carousel"),
                f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
                g = "string" == typeof b ? b : f.slide;
            e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
        })
    }
    var c = function(b, c) {
        this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
    };
    c.VERSION = "3.3.6", c.TRANSITION_DURATION = 600, c.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, c.prototype.keydown = function(a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
            switch (a.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            a.preventDefault()
        }
    }, c.prototype.cycle = function(b) {
        return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
    }, c.prototype.getItemIndex = function(a) {
        return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active)
    }, c.prototype.getItemForDirection = function(a, b) {
        var c = this.getItemIndex(b),
            d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;
        if (d && !this.options.wrap) return b;
        var e = "prev" == a ? -1 : 1,
            f = (c + e) % this.$items.length;
        return this.$items.eq(f)
    }, c.prototype.to = function(a) {
        var b = this,
            c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return a > this.$items.length - 1 || 0 > a ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            b.to(a)
        }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a))
    }, c.prototype.pause = function(b) {
        return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, c.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, c.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, c.prototype.slide = function(b, d) {
        var e = this.$element.find(".item.active"),
            f = d || this.getItemForDirection(b, e),
            g = this.interval,
            h = "next" == b ? "left" : "right",
            i = this;
        if (f.hasClass("active")) return this.sliding = !1;
        var j = f[0],
            k = a.Event("slide.bs.carousel", {
                relatedTarget: j,
                direction: h
            });
        if (this.$element.trigger(k), !k.isDefaultPrevented()) {
            if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var l = a(this.$indicators.children()[this.getItemIndex(f)]);
                l && l.addClass("active")
            }
            var m = a.Event("slid.bs.carousel", {
                relatedTarget: j,
                direction: h
            });
            return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function() {
                f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function() {
                    i.$element.trigger(m)
                }, 0)
            }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this
        }
    };
    var d = a.fn.carousel;
    a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function() {
        return a.fn.carousel = d, this
    };
    var e = function(c) {
        var d, e = a(this),
            f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
        if (f.hasClass("carousel")) {
            var g = a.extend({}, f.data(), e.data()),
                h = e.attr("data-slide-to");
            h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault()
        }
    };
    a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function() {
        a('[data-ride="carousel"]').each(function() {
            var c = a(this);
            b.call(c, c.data())
        })
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
        return a(d)
    }

    function c(b) {
        return this.each(function() {
            var c = a(this),
                e = c.data("bs.collapse"),
                f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
            !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]()
        })
    }
    var d = function(b, c) {
        this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    d.VERSION = "3.3.6", d.TRANSITION_DURATION = 350, d.DEFAULTS = {
        toggle: !0
    }, d.prototype.dimension = function() {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height"
    }, d.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
                var f = a.Event("show.bs.collapse");
                if (this.$element.trigger(f), !f.isDefaultPrevented()) {
                    e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
                    var g = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var h = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!a.support.transition) return h.call(this);
                    var i = a.camelCase(["scroll", g].join("-"));
                    this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])
                }
            }
        }
    }, d.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var e = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this)
            }
        }
    }, d.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, d.prototype.getParent = function() {
        return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function(c, d) {
            var e = a(d);
            this.addAriaAndCollapsedClass(b(e), e)
        }, this)).end()
    }, d.prototype.addAriaAndCollapsedClass = function(a, b) {
        var c = a.hasClass("in");
        a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c)
    };
    var e = a.fn.collapse;
    a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function() {
        return a.fn.collapse = e, this
    }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(d) {
        var e = a(this);
        e.attr("data-target") || d.preventDefault();
        var f = b(e),
            g = f.data("bs.collapse"),
            h = g ? "toggle" : e.data();
        c.call(f, h)
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        var c = b.attr("data-target");
        c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        var d = c && a(c);
        return d && d.length ? d : b.parent()
    }

    function c(c) {
        c && 3 === c.which || (a(e).remove(), a(f).each(function() {
            var d = a(this),
                e = b(d),
                f = {
                    relatedTarget: this
                };
            e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", f)))))
        }))
    }

    function d(b) {
        return this.each(function() {
            var c = a(this),
                d = c.data("bs.dropdown");
            d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c)
        })
    }
    var e = ".dropdown-backdrop",
        f = '[data-toggle="dropdown"]',
        g = function(b) {
            a(b).on("click.bs.dropdown", this.toggle)
        };
    g.VERSION = "3.3.6", g.prototype.toggle = function(d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var f = b(e),
                g = f.hasClass("open");
            if (c(), !g) {
                "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);
                var h = {
                    relatedTarget: this
                };
                if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
                e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h))
            }
            return !1
        }
    }, g.prototype.keydown = function(c) {
        if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
            var d = a(this);
            if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) {
                var e = b(d),
                    g = e.hasClass("open");
                if (!g && 27 != c.which || g && 27 == c.which) return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click");
                var h = " li:not(.disabled):visible a",
                    i = e.find(".dropdown-menu" + h);
                if (i.length) {
                    var j = i.index(c.target);
                    38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus")
                }
            }
        }
    };
    var h = a.fn.dropdown;
    a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function() {
        return a.fn.dropdown = h, this
    }, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
        a.stopPropagation()
    }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown)
}(jQuery), + function(a) {
    "use strict";

    function b(b, d) {
        return this.each(function() {
            var e = a(this),
                f = e.data("bs.modal"),
                g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
            f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d)
        })
    }
    var c = function(b, c) {
        this.options = c, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    c.VERSION = "3.3.6", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, c.prototype.toggle = function(a) {
        return this.isShown ? this.hide() : this.show(a)
    }, c.prototype.show = function(b) {
        var d = this,
            e = a.Event("show.bs.modal", {
                relatedTarget: b
            });
        this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            d.$element.one("mouseup.dismiss.bs.modal", function(b) {
                a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var e = a.support.transition && d.$element.hasClass("fade");
            d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus();
            var f = a.Event("shown.bs.modal", {
                relatedTarget: b
            });
            e ? d.$dialog.one("bsTransitionEnd", function() {
                d.$element.trigger("focus").trigger(f)
            }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f)
        }))
    }, c.prototype.hide = function(b) {
        b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal())
    }, c.prototype.enforceFocus = function() {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
            this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
        }, this))
    }, c.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function(a) {
            27 == a.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, c.prototype.resize = function() {
        this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal")
    }, c.prototype.hideModal = function() {
        var a = this;
        this.$element.hide(), this.backdrop(function() {
            a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal")
        })
    }, c.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, c.prototype.backdrop = function(b) {
        var d = this,
            e = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var f = a.support.transition && e;
            if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function(a) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
            f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var g = function() {
                d.removeBackdrop(), b && b()
            };
            a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g()
        } else b && b()
    }, c.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, c.prototype.adjustDialog = function() {
        var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
        })
    }, c.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, c.prototype.checkScrollbar = function() {
        var a = window.innerWidth;
        if (!a) {
            var b = document.documentElement.getBoundingClientRect();
            a = b.right - Math.abs(b.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar()
    }, c.prototype.setScrollbar = function() {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
    }, c.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }, c.prototype.measureScrollbar = function() {
        var a = document.createElement("div");
        a.className = "modal-scrollbar-measure", this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a), b
    };
    var d = a.fn.modal;
    a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function() {
        return a.fn.modal = d, this
    }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(c) {
        var d = a(this),
            e = d.attr("href"),
            f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
            g = f.data("bs.modal") ? "toggle" : a.extend({
                remote: !/#/.test(e) && e
            }, f.data(), d.data());
        d.is("a") && c.preventDefault(), f.one("show.bs.modal", function(a) {
            a.isDefaultPrevented() || f.one("hidden.bs.modal", function() {
                d.is(":visible") && d.trigger("focus")
            })
        }), b.call(f, g, this)
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.tooltip"),
                f = "object" == typeof b && b;
            (e || !/destroy|hide/.test(b)) && (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }
    var c = function(a, b) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b)
    };
    c.VERSION = "3.3.6", c.TRANSITION_DURATION = 150, c.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, c.prototype.init = function(b, c, d) {
        if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
            var g = e[f];
            if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
            else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter" : "focusin",
                    i = "hover" == g ? "mouseleave" : "focusout";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = a.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, c.prototype.getDefaults = function() {
        return c.DEFAULTS
    }, c.prototype.getOptions = function(b) {
        return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
            show: b.delay,
            hide: b.delay
        }), b
    }, c.prototype.getDelegateOptions = function() {
        var b = {},
            c = this.getDefaults();
        return this._options && a.each(this._options, function(a, d) {
            c[a] != d && (b[a] = d)
        }), b
    }, c.prototype.enter = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? void(c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function() {
            "in" == c.hoverState && c.show()
        }, c.options.delay.show)) : c.show())
    }, c.prototype.isInStateTrue = function() {
        for (var a in this.inState)
            if (this.inState[a]) return !0;
        return !1
    }, c.prototype.leave = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), c.isInStateTrue() ? void 0 : (clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function() {
            "out" == c.hoverState && c.hide()
        }, c.options.delay.hide)) : c.hide())
    }, c.prototype.show = function() {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(b);
            var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (b.isDefaultPrevented() || !d) return;
            var e = this,
                f = this.tip(),
                g = this.getUID(this.type);
            this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
            var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
                i = /\s?auto?\s?/i,
                j = i.test(h);
            j && (h = h.replace(i, "") || "top"), f.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var k = this.getPosition(),
                l = f[0].offsetWidth,
                m = f[0].offsetHeight;
            if (j) {
                var n = h,
                    o = this.getPosition(this.$viewport);
                h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h)
            }
            var p = this.getCalculatedOffset(h, k, l, m);
            this.applyPlacement(p, h);
            var q = function() {
                var a = e.hoverState;
                e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e)
            };
            a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q()
        }
    }, c.prototype.applyPlacement = function(b, c) {
        var d = this.tip(),
            e = d[0].offsetWidth,
            f = d[0].offsetHeight,
            g = parseInt(d.css("margin-top"), 10),
            h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({
            using: function(a) {
                d.css({
                    top: Math.round(a.top),
                    left: Math.round(a.left)
                })
            }
        }, b), 0), d.addClass("in");
        var i = d[0].offsetWidth,
            j = d[0].offsetHeight;
        "top" == c && j != f && (b.top = b.top + f - j);
        var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? b.left += k.left : b.top += k.top;
        var l = /top|bottom/.test(c),
            m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
            n = l ? "offsetWidth" : "offsetHeight";
        d.offset(b), this.replaceArrow(m, d[0][n], l)
    }, c.prototype.replaceArrow = function(a, b, c) {
        this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "")
    }, c.prototype.setContent = function() {
        var a = this.tip(),
            b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
    }, c.prototype.hide = function(b) {
        function d() {
            "in" != e.hoverState && f.detach(), e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b()
        }
        var e = this,
            f = a(this.$tip),
            g = a.Event("hide.bs." + this.type);
        return this.$element.trigger(g), g.isDefaultPrevented() ? void 0 : (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this)
    }, c.prototype.fixTitle = function() {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
    }, c.prototype.hasContent = function() {
        return this.getTitle()
    }, c.prototype.getPosition = function(b) {
        b = b || this.$element;
        var c = b[0],
            d = "BODY" == c.tagName,
            e = c.getBoundingClientRect();
        null == e.width && (e = a.extend({}, e, {
            width: e.right - e.left,
            height: e.bottom - e.top
        }));
        var f = d ? {
                top: 0,
                left: 0
            } : b.offset(),
            g = {
                scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()
            },
            h = d ? {
                width: a(window).width(),
                height: a(window).height()
            } : null;
        return a.extend({}, e, g, h, f)
    }, c.prototype.getCalculatedOffset = function(a, b, c, d) {
        return "bottom" == a ? {
            top: b.top + b.height,
            left: b.left + b.width / 2 - c / 2
        } : "top" == a ? {
            top: b.top - d,
            left: b.left + b.width / 2 - c / 2
        } : "left" == a ? {
            top: b.top + b.height / 2 - d / 2,
            left: b.left - c
        } : {
            top: b.top + b.height / 2 - d / 2,
            left: b.left + b.width
        }
    }, c.prototype.getViewportAdjustedDelta = function(a, b, c, d) {
        var e = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return e;
        var f = this.options.viewport && this.options.viewport.padding || 0,
            g = this.getPosition(this.$viewport);
        if (/right|left/.test(a)) {
            var h = b.top - f - g.scroll,
                i = b.top + f - g.scroll + d;
            h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
        } else {
            var j = b.left - f,
                k = b.left + f + c;
            j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k)
        }
        return e
    }, c.prototype.getTitle = function() {
        var a, b = this.$element,
            c = this.options;
        return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
    }, c.prototype.getUID = function(a) {
        do a += ~~(1e6 * Math.random()); while (document.getElementById(a));
        return a
    }, c.prototype.tip = function() {
        if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, c.prototype.enable = function() {
        this.enabled = !0
    }, c.prototype.disable = function() {
        this.enabled = !1
    }, c.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, c.prototype.toggle = function(b) {
        var c = this;
        b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
    }, c.prototype.destroy = function() {
        var a = this;
        clearTimeout(this.timeout), this.hide(function() {
            a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null
        })
    };
    var d = a.fn.tooltip;
    a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function() {
        return a.fn.tooltip = d, this
    }
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.popover"),
                f = "object" == typeof b && b;
            (e || !/destroy|hide/.test(b)) && (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }
    var c = function(a, b) {
        this.init("popover", a, b)
    };
    if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
    c.VERSION = "3.3.6", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function() {
        return c.DEFAULTS
    }, c.prototype.setContent = function() {
        var a = this.tip(),
            b = this.getTitle(),
            c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
    }, c.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, c.prototype.getContent = function() {
        var a = this.$element,
            b = this.options;
        return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
    }, c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var d = a.fn.popover;
    a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function() {
        return a.fn.popover = d, this
    }
}(jQuery), + function(a) {
    "use strict";

    function b(c, d) {
        this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process()
    }

    function c(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.scrollspy"),
                f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }
    b.VERSION = "3.3.6", b.DEFAULTS = {
        offset: 10
    }, b.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, b.prototype.refresh = function() {
        var b = this,
            c = "offset",
            d = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var b = a(this),
                e = b.data("target") || b.attr("href"),
                f = /^#./.test(e) && a(e);
            return f && f.length && f.is(":visible") && [
                [f[c]().top + d, e]
            ] || null
        }).sort(function(a, b) {
            return a[0] - b[0]
        }).each(function() {
            b.offsets.push(this[0]), b.targets.push(this[1])
        })
    }, b.prototype.process = function() {
        var a, b = this.$scrollElement.scrollTop() + this.options.offset,
            c = this.getScrollHeight(),
            d = this.options.offset + c - this.$scrollElement.height(),
            e = this.offsets,
            f = this.targets,
            g = this.activeTarget;
        if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);
        if (g && b < e[0]) return this.activeTarget = null, this.clear();
        for (a = e.length; a--;) g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a])
    }, b.prototype.activate = function(b) {
        this.activeTarget = b, this.clear();
        var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
            d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy")
    }, b.prototype.clear = function() {
        a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var d = a.fn.scrollspy;
    a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function() {
        return a.fn.scrollspy = d, this
    }, a(window).on("load.bs.scrollspy.data-api", function() {
        a('[data-spy="scroll"]').each(function() {
            var b = a(this);
            c.call(b, b.data())
        })
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.tab");
            e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]()
        })
    }
    var c = function(b) {
        this.element = a(b)
    };
    c.VERSION = "3.3.6", c.TRANSITION_DURATION = 150, c.prototype.show = function() {
        var b = this.element,
            c = b.closest("ul:not(.dropdown-menu)"),
            d = b.data("target");
        if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
            var e = c.find(".active:last a"),
                f = a.Event("hide.bs.tab", {
                    relatedTarget: b[0]
                }),
                g = a.Event("show.bs.tab", {
                    relatedTarget: e[0]
                });
            if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
                var h = a(d);
                this.activate(b.closest("li"), c), this.activate(h, h.parent(), function() {
                    e.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: b[0]
                    }), b.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: e[0]
                    })
                })
            }
        }
    }, c.prototype.activate = function(b, d, e) {
        function f() {
            g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e()
        }
        var g = d.find("> .active"),
            h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
        g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in")
    };
    var d = a.fn.tab;
    a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function() {
        return a.fn.tab = d, this
    };
    var e = function(c) {
        c.preventDefault(), b.call(a(this), "show")
    };
    a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.affix"),
                f = "object" == typeof b && b;
            e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]()
        })
    }
    var c = function(b, d) {
        this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    c.VERSION = "3.3.6", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
        offset: 0,
        target: window
    }, c.prototype.getState = function(a, b, c, d) {
        var e = this.$target.scrollTop(),
            f = this.$element.offset(),
            g = this.$target.height();
        if (null != c && "top" == this.affixed) return c > e ? "top" : !1;
        if ("bottom" == this.affixed) return null != c ? e + this.unpin <= f.top ? !1 : "bottom" : a - d >= e + g ? !1 : "bottom";
        var h = null == this.affixed,
            i = h ? e : f.top,
            j = h ? g : b;
        return null != c && c >= e ? "top" : null != d && i + j >= a - d ? "bottom" : !1
    }, c.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix");
        var a = this.$target.scrollTop(),
            b = this.$element.offset();
        return this.pinnedOffset = b.top - a
    }, c.prototype.checkPositionWithEventLoop = function() {
        setTimeout(a.proxy(this.checkPosition, this), 1)
    }, c.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var b = this.$element.height(),
                d = this.options.offset,
                e = d.top,
                f = d.bottom,
                g = Math.max(a(document).height(), a(document.body).height());
            "object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));
            var h = this.getState(g, b, e, f);
            if (this.affixed != h) {
                null != this.unpin && this.$element.css("top", "");
                var i = "affix" + (h ? "-" + h : ""),
                    j = a.Event(i + ".bs.affix");
                if (this.$element.trigger(j), j.isDefaultPrevented()) return;
                this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == h && this.$element.offset({
                top: g - b - f
            })
        }
    };
    var d = a.fn.affix;
    a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function() {
        return a.fn.affix = d, this
    }, a(window).on("load", function() {
        a('[data-spy="affix"]').each(function() {
            var c = a(this),
                d = c.data();
            d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d)
        })
    })
}(jQuery);
! function(t) {
    "use strict";
    var s = {
            slide: 0,
            delay: 5e3,
            preload: !1,
            preloadImage: !1,
            preloadVideo: !1,
            timer: !0,
            overlay: !1,
            autoplay: !0,
            shuffle: !1,
            cover: !0,
            color: null,
            align: "center",
            valign: "center",
            transition: "fade",
            transitionDuration: 1e3,
            transitionRegister: [],
            animation: null,
            animationDuration: "auto",
            animationRegister: [],
            init: function() {},
            play: function() {},
            pause: function() {},
            walk: function() {},
            slides: []
        },
        i = {},
        e = function(i, e) {
            this.elmt = i, this.settings = t.extend({}, s, t.vegas.defaults, e), this.slide = this.settings.slide, this.total = this.settings.slides.length, this.noshow = this.total < 2, this.paused = !this.settings.autoplay || this.noshow, this.$elmt = t(i), this.$timer = null, this.$overlay = null, this.$slide = null, this.timeout = null, this.transitions = ["fade", "fade2", "blur", "blur2", "flash", "flash2", "negative", "negative2", "burn", "burn2", "slideLeft", "slideLeft2", "slideRight", "slideRight2", "slideUp", "slideUp2", "slideDown", "slideDown2", "zoomIn", "zoomIn2", "zoomOut", "zoomOut2", "swirlLeft", "swirlLeft2", "swirlRight", "swirlRight2"], this.animations = ["kenburns", "kenburnsLeft", "kenburnsRight", "kenburnsUp", "kenburnsUpLeft", "kenburnsUpRight", "kenburnsDown", "kenburnsDownLeft", "kenburnsDownRight"], this.settings.transitionRegister instanceof Array == !1 && (this.settings.transitionRegister = [this.settings.transitionRegister]), this.settings.animationRegister instanceof Array == !1 && (this.settings.animationRegister = [this.settings.animationRegister]), this.transitions = this.transitions.concat(this.settings.transitionRegister), this.animations = this.animations.concat(this.settings.animationRegister), this.support = {
                objectFit: "objectFit" in document.body.style,
                transition: "transition" in document.body.style || "WebkitTransition" in document.body.style,
                video: t.vegas.isVideoCompatible()
            }, this.settings.shuffle === !0 && this.shuffle(), this._init()
        };
    e.prototype = {
        _init: function() {
            var s, i, e, n = "BODY" === this.elmt.tagName,
                o = this.settings.timer,
                a = this.settings.overlay,
                r = this;
            this._preload(), n || (this.$elmt.css("height", this.$elmt.css("height")), s = t('<div class="vegas-wrapper">').css("overflow", this.$elmt.css("overflow")).css("padding", this.$elmt.css("padding")), this.$elmt.css("padding") || s.css("padding-top", this.$elmt.css("padding-top")).css("padding-bottom", this.$elmt.css("padding-bottom")).css("padding-left", this.$elmt.css("padding-left")).css("padding-right", this.$elmt.css("padding-right")), this.$elmt.clone(!0).children().appendTo(s), this.elmt.innerHTML = ""), o && this.support.transition && (e = t('<div class="vegas-timer"><div class="vegas-timer-progress">'), this.$timer = e, this.$elmt.prepend(e)), a && (i = t('<div class="vegas-overlay">'), "string" == typeof a && i.css("background-image", "url(" + a + ")"), this.$overlay = i, this.$elmt.prepend(i)), this.$elmt.addClass("vegas-container"), n || this.$elmt.append(s), setTimeout(function() {
                r.trigger("init"), r._goto(r.slide), r.settings.autoplay && r.trigger("play")
            }, 1)
        },
        _preload: function() {
            var t, s, i;
            for (i = 0; i < this.settings.slides.length; i++)(this.settings.preload || this.settings.preloadImages) && this.settings.slides[i].src && (s = new Image, s.src = this.settings.slides[i].src), (this.settings.preload || this.settings.preloadVideos) && this.support.video && this.settings.slides[i].video && (t = this._video(this.settings.slides[i].video instanceof Array ? this.settings.slides[i].video : this.settings.slides[i].video.src))
        },
        _random: function(t) {
            return t[Math.floor(Math.random() * (t.length - 1))]
        },
        _slideShow: function() {
            var t = this;
            this.total > 1 && !this.paused && !this.noshow && (this.timeout = setTimeout(function() {
                t.next()
            }, this._options("delay")))
        },
        _timer: function(t) {
            var s = this;
            clearTimeout(this.timeout), this.$timer && (this.$timer.removeClass("vegas-timer-running").find("div").css("transition-duration", "0ms"), this.paused || this.noshow || t && setTimeout(function() {
                s.$timer.addClass("vegas-timer-running").find("div").css("transition-duration", s._options("delay") - 100 + "ms")
            }, 100))
        },
        _video: function(t) {
            var s, e, n = t.toString();
            return i[n] ? i[n] : (t instanceof Array == !1 && (t = [t]), s = document.createElement("video"), s.preload = !0, t.forEach(function(t) {
                e = document.createElement("source"), e.src = t, s.appendChild(e)
            }), i[n] = s, s)
        },
        _fadeOutSound: function(t, s) {
            var i = this,
                e = s / 10,
                n = t.volume - .09;
            n > 0 ? (t.volume = n, setTimeout(function() {
                i._fadeOutSound(t, s)
            }, e)) : t.pause()
        },
        _fadeInSound: function(t, s) {
            var i = this,
                e = s / 10,
                n = t.volume + .09;
            1 > n && (t.volume = n, setTimeout(function() {
                i._fadeInSound(t, s)
            }, e))
        },
        _options: function(t, s) {
            return void 0 === s && (s = this.slide), void 0 !== this.settings.slides[s][t] ? this.settings.slides[s][t] : this.settings[t]
        },
        _goto: function(s) {
            function i() {
                f._timer(!0), setTimeout(function() {
                    y && (f.support.transition ? (h.css("transition", "all " + _ + "ms").addClass("vegas-transition-" + y + "-out"), h.each(function() {
                        var t = h.find("video").get(0);
                        t && (t.volume = 1, f._fadeOutSound(t, _))
                    }), e.css("transition", "all " + _ + "ms").addClass("vegas-transition-" + y + "-in")) : e.fadeIn(_));
                    for (var t = 0; t < h.length - 4; t++) h.eq(t).remove();
                    f.trigger("walk"), f._slideShow()
                }, 100)
            }
            "undefined" == typeof this.settings.slides[s] && (s = 0), this.slide = s;
            var e, n, o, a, r, h = this.$elmt.children(".vegas-slide"),
                l = this.settings.slides[s].src,
                d = this.settings.slides[s].video,
                g = this._options("delay"),
                u = this._options("align"),
                c = this._options("valign"),
                p = this._options("color") || this.$elmt.css("background-color"),
                m = this._options("cover") ? "cover" : "contain",
                f = this,
                v = h.length,
                y = this._options("transition"),
                _ = this._options("transitionDuration"),
                w = this._options("animation"),
                b = this._options("animationDuration");
            ("random" === y || y instanceof Array) && (y = this._random(y instanceof Array ? y : this.transitions)), ("random" === w || w instanceof Array) && (w = this._random(w instanceof Array ? w : this.animations)), ("auto" === _ || _ > g) && (_ = g), "auto" === b && (b = g), e = t('<div class="vegas-slide"></div>'), this.support.transition && y && e.addClass("vegas-transition-" + y), this.support.video && d ? (a = this._video(d instanceof Array ? d : d.src), a.loop = void 0 !== d.loop ? d.loop : !0, a.muted = void 0 !== d.mute ? d.mute : !0, a.muted === !1 ? (a.volume = 0, this._fadeInSound(a, _)) : a.pause(), o = t(a).addClass("vegas-video").css("background-color", p), this.support.objectFit ? o.css("object-position", u + " " + c).css("object-fit", m).css("width", "100%").css("height", "100%") : "contain" === m && o.css("width", "100%").css("height", "100%"), e.append(o)) : (r = new Image, n = t('<div class="vegas-slide-inner"></div>').css("background-image", "url(" + l + ")").css("background-color", p).css("background-position", u + " " + c).css("background-size", m), this.support.transition && w && n.addClass("vegas-animation-" + w).css("animation-duration", b + "ms"), e.append(n)), this.support.transition || e.css("display", "none"), v ? h.eq(v - 1).after(e) : this.$elmt.prepend(e), f._timer(!1), a ? (4 === a.readyState && (a.currentTime = 0), a.play(), i()) : (r.src = l, r.onload = i)
        },
        shuffle: function() {
            for (var t, s, i = this.total - 1; i > 0; i--) s = Math.floor(Math.random() * (i + 1)), t = this.settings.slides[i], this.settings.slides[i] = this.settings.slides[s], this.settings.slides[s] = t
        },
        play: function() {
            this.paused && (this.paused = !1, this.next(), this.trigger("play"))
        },
        pause: function() {
            this._timer(!1), this.paused = !0, this.trigger("pause")
        },
        toggle: function() {
            this.paused ? this.play() : this.pause()
        },
        playing: function() {
            return !this.paused && !this.noshow
        },
        current: function(t) {
            return t ? {
                slide: this.slide,
                data: this.settings.slides[this.slide]
            } : this.slide
        },
        jump: function(t) {
            0 > t || t > this.total - 1 || t === this.slide || (this.slide = t, this._goto(this.slide))
        },
        next: function() {
            this.slide++, this.slide >= this.total && (this.slide = 0), this._goto(this.slide)
        },
        previous: function() {
            this.slide--, this.slide < 0 && (this.slide = this.total - 1), this._goto(this.slide)
        },
        trigger: function(t) {
            var s = [];
            s = "init" === t ? [this.settings] : [this.slide, this.settings.slides[this.slide]], this.$elmt.trigger("vegas" + t, s), "function" == typeof this.settings[t] && this.settings[t].apply(this.$elmt, s)
        },
        options: function(i, e) {
            var n = this.settings.slides.slice();
            if ("object" == typeof i) this.settings = t.extend({}, s, t.vegas.defaults, i);
            else {
                if ("string" != typeof i) return this.settings;
                if (void 0 === e) return this.settings[i];
                this.settings[i] = e
            }
            this.settings.slides !== n && (this.total = this.settings.slides.length, this.noshow = this.total < 2, this._preload())
        },
        destroy: function() {
            clearTimeout(this.timeout), this.$elmt.removeClass("vegas-container"), this.$elmt.find("> .vegas-slide").remove(), this.$elmt.find("> .vegas-wrapper").clone(!0).children().appendTo(this.$elmt), this.$elmt.find("> .vegas-wrapper").remove(), this.settings.timer && this.$timer.remove(), this.settings.overlay && this.$overlay.remove(), this.elmt._vegas = null
        }
    }, t.fn.vegas = function(t) {
        var s, i = arguments,
            n = !1;
        if (void 0 === t || "object" == typeof t) return this.each(function() {
            this._vegas || (this._vegas = new e(this, t))
        });
        if ("string" == typeof t) {
            if (this.each(function() {
                    var e = this._vegas;
                    if (!e) throw new Error("No Vegas applied to this element.");
                    "function" == typeof e[t] && "_" !== t[0] ? s = e[t].apply(e, [].slice.call(i, 1)) : n = !0
                }), n) throw new Error('No method "' + t + '" in Vegas.');
            return void 0 !== s ? s : this
        }
    }, t.vegas = {}, t.vegas.defaults = s, t.vegas.isVideoCompatible = function() {
        return !/(Android|webOS|Phone|iPad|iPod|BlackBerry|Windows Phone)/i.test(navigator.userAgent)
    }
}(window.jQuery || window.Zepto);
! function(t, i, e, s) {
    "use strict";

    function o(i, e) {
        this.element = i, this.$context = t(i).data("api", this), this.$layers = this.$context.find(".layer");
        var s = {
            calibrateX: this.$context.data("calibrate-x") || null,
            calibrateY: this.$context.data("calibrate-y") || null,
            invertX: this.$context.data("invert-x") || null,
            invertY: this.$context.data("invert-y") || null,
            limitX: parseFloat(this.$context.data("limit-x")) || null,
            limitY: parseFloat(this.$context.data("limit-y")) || null,
            scalarX: parseFloat(this.$context.data("scalar-x")) || null,
            scalarY: parseFloat(this.$context.data("scalar-y")) || null,
            frictionX: parseFloat(this.$context.data("friction-x")) || null,
            frictionY: parseFloat(this.$context.data("friction-y")) || null,
            originX: parseFloat(this.$context.data("origin-x")) || null,
            originY: parseFloat(this.$context.data("origin-y")) || null
        };
        for (var o in s) null === s[o] && delete s[o];
        t.extend(this, r, e, s), this.calibrationTimer = null, this.calibrationFlag = !0, this.enabled = !1, this.depths = [], this.raf = null, this.bounds = null, this.ex = 0, this.ey = 0, this.ew = 0, this.eh = 0, this.ecx = 0, this.ecy = 0, this.erx = 0, this.ery = 0, this.cx = 0, this.cy = 0, this.ix = 0, this.iy = 0, this.mx = 0, this.my = 0, this.vx = 0, this.vy = 0, this.onMouseMove = this.onMouseMove.bind(this), this.onDeviceOrientation = this.onDeviceOrientation.bind(this), this.onOrientationTimer = this.onOrientationTimer.bind(this), this.onCalibrationTimer = this.onCalibrationTimer.bind(this), this.onAnimationFrame = this.onAnimationFrame.bind(this), this.onWindowResize = this.onWindowResize.bind(this), this.initialise()
    }
    var n = "parallax",
        a = 30,
        r = {
            relativeInput: !1,
            clipRelativeInput: !1,
            calibrationThreshold: 100,
            calibrationDelay: 500,
            supportDelay: 500,
            calibrateX: !1,
            calibrateY: !0,
            invertX: !0,
            invertY: !0,
            limitX: !1,
            limitY: !1,
            scalarX: 10,
            scalarY: 10,
            frictionX: .1,
            frictionY: .1,
            originX: .5,
            originY: .5
        };
    o.prototype.transformSupport = function(t) {
        for (var o = e.createElement("div"), n = !1, a = null, r = !1, h = null, l = null, p = 0, c = this.vendors.length; c > p; p++)
            if (null !== this.vendors[p] ? (h = this.vendors[p][0] + "transform", l = this.vendors[p][1] + "Transform") : (h = "transform", l = "transform"), o.style[l] !== s) {
                n = !0;
                break
            }
        switch (t) {
            case "2D":
                r = n;
                break;
            case "3D":
                if (n) {
                    var m = e.body || e.createElement("body"),
                        u = e.documentElement,
                        y = u.style.overflow;
                    e.body || (u.style.overflow = "hidden", u.appendChild(m), m.style.overflow = "hidden", m.style.background = ""), m.appendChild(o), o.style[l] = "translate3d(1px,1px,1px)", a = i.getComputedStyle(o).getPropertyValue(h), r = a !== s && a.length > 0 && "none" !== a, u.style.overflow = y, m.removeChild(o)
                }
        }
        return r
    }, o.prototype.ww = null, o.prototype.wh = null, o.prototype.wcx = null, o.prototype.wcy = null, o.prototype.wrx = null, o.prototype.wry = null, o.prototype.portrait = null, o.prototype.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), o.prototype.vendors = [null, ["-webkit-", "webkit"],
        ["-moz-", "Moz"],
        ["-o-", "O"],
        ["-ms-", "ms"]
    ], o.prototype.motionSupport = !!i.DeviceMotionEvent, o.prototype.orientationSupport = !!i.DeviceOrientationEvent, o.prototype.orientationStatus = 0, o.prototype.transform2DSupport = o.prototype.transformSupport("2D"), o.prototype.transform3DSupport = o.prototype.transformSupport("3D"), o.prototype.propertyCache = {}, o.prototype.initialise = function() {
        "static" === this.$context.css("position") && this.$context.css({
            position: "relative"
        }), this.accelerate(this.$context), this.updateLayers(), this.updateDimensions(), this.enable(), this.queueCalibration(this.calibrationDelay)
    }, o.prototype.updateLayers = function() {
        this.$layers = this.$context.find(".layer"), this.depths = [], this.$layers.css({
            position: "absolute",
            display: "block",
            left: 0,
            top: 0
        }), this.$layers.first().css({
            position: "relative"
        }), this.accelerate(this.$layers), this.$layers.each(t.proxy(function(i, e) {
            this.depths.push(t(e).data("depth") || 0)
        }, this))
    }, o.prototype.updateDimensions = function() {
        this.ww = i.innerWidth, this.wh = i.innerHeight, this.wcx = this.ww * this.originX, this.wcy = this.wh * this.originY, this.wrx = Math.max(this.wcx, this.ww - this.wcx), this.wry = Math.max(this.wcy, this.wh - this.wcy)
    }, o.prototype.updateBounds = function() {
        this.bounds = this.element.getBoundingClientRect(), this.ex = this.bounds.left, this.ey = this.bounds.top, this.ew = this.bounds.width, this.eh = this.bounds.height, this.ecx = this.ew * this.originX, this.ecy = this.eh * this.originY, this.erx = Math.max(this.ecx, this.ew - this.ecx), this.ery = Math.max(this.ecy, this.eh - this.ecy)
    }, o.prototype.queueCalibration = function(t) {
        clearTimeout(this.calibrationTimer), this.calibrationTimer = setTimeout(this.onCalibrationTimer, t)
    }, o.prototype.enable = function() {
        this.enabled || (this.enabled = !0, this.orientationSupport ? (this.portrait = null, i.addEventListener("deviceorientation", this.onDeviceOrientation), setTimeout(this.onOrientationTimer, this.supportDelay)) : (this.cx = 0, this.cy = 0, this.portrait = !1, i.addEventListener("mousemove", this.onMouseMove)), i.addEventListener("resize", this.onWindowResize), this.raf = requestAnimationFrame(this.onAnimationFrame))
    }, o.prototype.disable = function() {
        this.enabled && (this.enabled = !1, this.orientationSupport ? i.removeEventListener("deviceorientation", this.onDeviceOrientation) : i.removeEventListener("mousemove", this.onMouseMove), i.removeEventListener("resize", this.onWindowResize), cancelAnimationFrame(this.raf))
    }, o.prototype.calibrate = function(t, i) {
        this.calibrateX = t === s ? this.calibrateX : t, this.calibrateY = i === s ? this.calibrateY : i
    }, o.prototype.invert = function(t, i) {
        this.invertX = t === s ? this.invertX : t, this.invertY = i === s ? this.invertY : i
    }, o.prototype.friction = function(t, i) {
        this.frictionX = t === s ? this.frictionX : t, this.frictionY = i === s ? this.frictionY : i
    }, o.prototype.scalar = function(t, i) {
        this.scalarX = t === s ? this.scalarX : t, this.scalarY = i === s ? this.scalarY : i
    }, o.prototype.limit = function(t, i) {
        this.limitX = t === s ? this.limitX : t, this.limitY = i === s ? this.limitY : i
    }, o.prototype.origin = function(t, i) {
        this.originX = t === s ? this.originX : t, this.originY = i === s ? this.originY : i
    }, o.prototype.clamp = function(t, i, e) {
        return t = Math.max(t, i), t = Math.min(t, e)
    }, o.prototype.css = function(i, e, o) {
        var n = this.propertyCache[e];
        if (!n)
            for (var a = 0, r = this.vendors.length; r > a; a++)
                if (n = null !== this.vendors[a] ? t.camelCase(this.vendors[a][1] + "-" + e) : e, i.style[n] !== s) {
                    this.propertyCache[e] = n;
                    break
                }
        i.style[n] = o
    }, o.prototype.accelerate = function(t) {
        for (var i = 0, e = t.length; e > i; i++) {
            var s = t[i];
            this.css(s, "transform", "translate3d(0,0,0)"), this.css(s, "transform-style", "preserve-3d"), this.css(s, "backface-visibility", "hidden")
        }
    }, o.prototype.setPosition = function(t, i, e) {
        i += "px", e += "px", this.transform3DSupport ? this.css(t, "transform", "translate3d(" + i + "," + e + ",0)") : this.transform2DSupport ? this.css(t, "transform", "translate(" + i + "," + e + ")") : (t.style.left = i, t.style.top = e)
    }, o.prototype.onOrientationTimer = function(t) {
        this.orientationSupport && 0 === this.orientationStatus && (this.disable(), this.orientationSupport = !1, this.enable())
    }, o.prototype.onCalibrationTimer = function(t) {
        this.calibrationFlag = !0
    }, o.prototype.onWindowResize = function(t) {
        this.updateDimensions()
    }, o.prototype.onAnimationFrame = function() {
        this.updateBounds();
        var t = this.ix - this.cx,
            i = this.iy - this.cy;
        (Math.abs(t) > this.calibrationThreshold || Math.abs(i) > this.calibrationThreshold) && this.queueCalibration(0), this.portrait ? (this.mx = this.calibrateX ? i : this.iy, this.my = this.calibrateY ? t : this.ix) : (this.mx = this.calibrateX ? t : this.ix, this.my = this.calibrateY ? i : this.iy), this.mx *= this.ew * (this.scalarX / 100), this.my *= this.eh * (this.scalarY / 100), isNaN(parseFloat(this.limitX)) || (this.mx = this.clamp(this.mx, -this.limitX, this.limitX)), isNaN(parseFloat(this.limitY)) || (this.my = this.clamp(this.my, -this.limitY, this.limitY)), this.vx += (this.mx - this.vx) * this.frictionX, this.vy += (this.my - this.vy) * this.frictionY;
        for (var e = 0, s = this.$layers.length; s > e; e++) {
            var o = this.depths[e],
                n = this.$layers[e],
                a = this.vx * o * (this.invertX ? -1 : 1),
                r = this.vy * o * (this.invertY ? -1 : 1);
            this.setPosition(n, a, r)
        }
        this.raf = requestAnimationFrame(this.onAnimationFrame)
    }, o.prototype.onDeviceOrientation = function(t) {
        if (!this.desktop && null !== t.beta && null !== t.gamma) {
            this.orientationStatus = 1;
            var e = (t.beta || 0) / a,
                s = (t.gamma || 0) / a,
                o = i.innerHeight > i.innerWidth;
            this.portrait !== o && (this.portrait = o, this.calibrationFlag = !0), this.calibrationFlag && (this.calibrationFlag = !1, this.cx = e, this.cy = s), this.ix = e, this.iy = s
        }
    }, o.prototype.onMouseMove = function(t) {
        var i = t.clientX,
            e = t.clientY;
        !this.orientationSupport && this.relativeInput ? (this.clipRelativeInput && (i = Math.max(i, this.ex), i = Math.min(i, this.ex + this.ew), e = Math.max(e, this.ey), e = Math.min(e, this.ey + this.eh)), this.ix = (i - this.ex - this.ecx) / this.erx, this.iy = (e - this.ey - this.ecy) / this.ery) : (this.ix = (i - this.wcx) / this.wrx, this.iy = (e - this.wcy) / this.wry)
    };
    var h = {
        enable: o.prototype.enable,
        disable: o.prototype.disable,
        updateLayers: o.prototype.updateLayers,
        calibrate: o.prototype.calibrate,
        friction: o.prototype.friction,
        invert: o.prototype.invert,
        scalar: o.prototype.scalar,
        limit: o.prototype.limit,
        origin: o.prototype.origin
    };
    t.fn[n] = function(i) {
        var e = arguments;
        return this.each(function() {
            var s = t(this),
                a = s.data(n);
            a || (a = new o(this, i), s.data(n, a)), h[i] && a[i].apply(a, Array.prototype.slice.call(e, 1))
        })
    }
}(window.jQuery || window.Zepto, window, document),
function() {
    for (var t = 0, i = ["ms", "moz", "webkit", "o"], e = 0; e < i.length && !window.requestAnimationFrame; ++e) window.requestAnimationFrame = window[i[e] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[i[e] + "CancelAnimationFrame"] || window[i[e] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function(i, e) {
        var s = (new Date).getTime(),
            o = Math.max(0, 16 - (s - t)),
            n = window.setTimeout(function() {
                i(s + o)
            }, o);
        return t = s + o, n
    }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
        clearTimeout(t)
    })
}();
(function(a, d, p) {
    a.fn.backstretch = function(c, b) {
        (c === p || 0 === c.length) && a.error("No images were supplied for Backstretch");
        0 === a(d).scrollTop() && d.scrollTo(0, 0);
        return this.each(function() {
            var d = a(this),
                g = d.data("backstretch");
            if (g) {
                if ("string" == typeof c && "function" == typeof g[c]) {
                    g[c](b);
                    return
                }
                b = a.extend(g.options, b);
                g.destroy(!0)
            }
            g = new q(this, c, b);
            d.data("backstretch", g)
        })
    };
    a.backstretch = function(c, b) {
        return a("body").backstretch(c, b).data("backstretch")
    };
    a.expr[":"].backstretch = function(c) {
        return a(c).data("backstretch") !== p
    };
    a.fn.backstretch.defaults = {
        centeredX: !0,
        centeredY: !0,
        duration: 5E3,
        fade: 0
    };
    var r = {
            left: 0,
            top: 0,
            overflow: "hidden",
            margin: 0,
            padding: 0,
            height: "100%",
            width: "100%",
            zIndex: -999999
        },
        s = {
            position: "absolute",
            display: "none",
            margin: 0,
            padding: 0,
            border: "none",
            width: "auto",
            height: "auto",
            maxHeight: "none",
            maxWidth: "none",
            zIndex: -999999
        },
        q = function(c, b, e) {
            this.options = a.extend({}, a.fn.backstretch.defaults, e || {});
            this.images = a.isArray(b) ? b : [b];
            a.each(this.images, function() {
                a("<img />")[0].src = this
            });
            this.isBody = c === document.body;
            this.$container = a(c);
            this.$root = this.isBody ? l ? a(d) : a(document) : this.$container;
            c = this.$container.children(".backstretch").first();
            this.$wrap = c.length ? c : a('<div class="backstretch"></div>').css(r).appendTo(this.$container);
            this.isBody || (c = this.$container.css("position"), b = this.$container.css("zIndex"), this.$container.css({
                position: "static" === c ? "relative" : c,
                zIndex: "auto" === b ? 0 : b,
                background: "none"
            }), this.$wrap.css({
                zIndex: -999998
            }));
            this.$wrap.css({
                position: this.isBody && l ? "fixed" : "absolute"
            });
            this.index = 0;
            this.show(this.index);
            a(d).on("resize.backstretch", a.proxy(this.resize, this)).on("orientationchange.backstretch", a.proxy(function() {
                this.isBody && 0 === d.pageYOffset && (d.scrollTo(0, 1), this.resize())
            }, this))
        };
    q.prototype = {
        resize: function() {
            try {
                var a = {
                        left: 0,
                        top: 0
                    },
                    b = this.isBody ? this.$root.width() : this.$root.innerWidth(),
                    e = b,
                    g = this.isBody ? d.innerHeight ? d.innerHeight : this.$root.height() : this.$root.innerHeight(),
                    j = e / this.$img.data("ratio"),
                    f;
                j >= g ? (f = (j - g) / 2, this.options.centeredY && (a.top = "-" + f + "px")) : (j = g, e = j * this.$img.data("ratio"), f = (e - b) / 2, this.options.centeredX && (a.left = "-" + f + "px"));
                this.$wrap.css({
                    width: b,
                    height: g
                }).find("img:not(.deleteable)").css({
                    width: e,
                    height: j
                }).css(a)
            } catch (h) {}
            return this
        },
        show: function(c) {
            if (!(Math.abs(c) > this.images.length - 1)) {
                var b = this,
                    e = b.$wrap.find("img").addClass("deleteable"),
                    d = {
                        relatedTarget: b.$container[0]
                    };
                b.$container.trigger(a.Event("backstretch.before", d), [b, c]);
                this.index = c;
                clearInterval(b.interval);
                b.$img = a("<img />").css(s).bind("load", function(f) {
                    var h = this.width || a(f.target).width();
                    f = this.height || a(f.target).height();
                    a(this).data("ratio", h / f);
                    a(this).fadeIn(b.options.speed || b.options.fade, function() {
                        e.remove();
                        b.paused || b.cycle();
                        a(["after", "show"]).each(function() {
                            b.$container.trigger(a.Event("backstretch." + this, d), [b, c])
                        })
                    });
                    b.resize()
                }).appendTo(b.$wrap);
                b.$img.attr("src", b.images[c]);
                return b
            }
        },
        next: function() {
            return this.show(this.index < this.images.length - 1 ? this.index + 1 : 0)
        },
        prev: function() {
            return this.show(0 === this.index ? this.images.length - 1 : this.index - 1)
        },
        pause: function() {
            this.paused = !0;
            return this
        },
        resume: function() {
            this.paused = !1;
            this.next();
            return this
        },
        cycle: function() {
            1 < this.images.length && (clearInterval(this.interval), this.interval = setInterval(a.proxy(function() {
                this.paused || this.next()
            }, this), this.options.duration));
            return this
        },
        destroy: function(c) {
            a(d).off("resize.backstretch orientationchange.backstretch");
            clearInterval(this.interval);
            c || this.$wrap.remove();
            this.$container.removeData("backstretch")
        }
    };
    var l, f = navigator.userAgent,
        m = navigator.platform,
        e = f.match(/AppleWebKit\/([0-9]+)/),
        e = !!e && e[1],
        h = f.match(/Fennec\/([0-9]+)/),
        h = !!h && h[1],
        n = f.match(/Opera Mobi\/([0-9]+)/),
        t = !!n && n[1],
        k = f.match(/MSIE ([0-9]+)/),
        k = !!k && k[1];
    l = !((-1 < m.indexOf("iPhone") || -1 < m.indexOf("iPad") || -1 < m.indexOf("iPod")) && e && 534 > e || d.operamini && "[object OperaMini]" === {}.toString.call(d.operamini) || n && 7458 > t || -1 < f.indexOf("Android") && e && 533 > e || h && 6 > h || "palmGetResource" in d && e && 534 > e || -1 < f.indexOf("MeeGo") && -1 < f.indexOf("NokiaBrowser/8.5.0") || k && 6 >= k)
})(jQuery, window);

function onYouTubeIframeAPIReady() {
    ytp.YTAPIReady || (ytp.YTAPIReady = !0, jQuery(document).trigger("YTAPIReady"))
}

function uncamel(a) {
    return a.replace(/([A-Z])/g, function(a) {
        return "-" + a.toLowerCase()
    })
}

function setUnit(a, b) {
    return "string" != typeof a || a.match(/^[\-0-9\.]+jQuery/) ? "" + a + b : a
}

function setFilter(a, b, c) {
    var d = uncamel(b),
        e = jQuery.browser.mozilla ? "" : jQuery.CSS.sfx;
    a[e + "filter"] = a[e + "filter"] || "", c = setUnit(c > jQuery.CSS.filters[b].max ? jQuery.CSS.filters[b].max : c, jQuery.CSS.filters[b].unit), a[e + "filter"] += d + "(" + c + ") ", delete a[b]
}
var ytp = ytp || {},
    getYTPVideoID = function(a) {
        var b, c;
        return a.indexOf("youtu.be") > 0 ? (b = a.substr(a.lastIndexOf("/") + 1, a.length), c = b.indexOf("?list=") > 0 ? b.substr(b.lastIndexOf("="), b.length) : null, b = c ? b.substr(0, b.lastIndexOf("?")) : b) : a.indexOf("http") > -1 ? (b = a.match(/[\\?&]v=([^&#]*)/)[1], c = a.indexOf("list=") > 0 ? a.match(/[\\?&]list=([^&#]*)/)[1] : null) : (b = a.length > 15 ? null : a, c = b ? null : a), {
            videoID: b,
            playlistID: c
        }
    };
! function(jQuery, ytp) {
    jQuery.mbYTPlayer = {
        name: "jquery.mb.YTPlayer",
        version: "2.9.7",
        build: "5748",
        author: "Matteo Bicocchi",
        apiKey: "",
        defaults: {
            containment: "body",
            ratio: "auto",
            videoURL: null,
            playlistURL: null,
            startAt: 0,
            stopAt: 0,
            autoPlay: !0,
            vol: 50,
            addRaster: !1,
            opacity: 1,
            quality: "default",
            mute: !1,
            loop: !0,
            showControls: !0,
            showAnnotations: !1,
            showYTLogo: !0,
            stopMovieOnBlur: !0,
            realfullscreen: !0,
            gaTrack: !0,
            optimizeDisplay: !0,
            onReady: function(a) {}
        },
        controls: {
            play: "P",
            pause: "p",
            mute: "M",
            unmute: "A",
            onlyYT: "O",
            showSite: "R",
            ytLogo: "Y"
        },
        locationProtocol: "https:",
        buildPlayer: function(options) {
            return this.each(function() {
                var YTPlayer = this,
                    $YTPlayer = jQuery(YTPlayer);
                YTPlayer.loop = 0, YTPlayer.opt = {}, YTPlayer.state = {}, YTPlayer.filtersEnabled = !0, YTPlayer.filters = {
                    grayscale: {
                        value: 0,
                        unit: "%"
                    },
                    hue_rotate: {
                        value: 0,
                        unit: "deg"
                    },
                    invert: {
                        value: 0,
                        unit: "%"
                    },
                    opacity: {
                        value: 0,
                        unit: "%"
                    },
                    saturate: {
                        value: 0,
                        unit: "%"
                    },
                    sepia: {
                        value: 0,
                        unit: "%"
                    },
                    brightness: {
                        value: 0,
                        unit: "%"
                    },
                    contrast: {
                        value: 0,
                        unit: "%"
                    },
                    blur: {
                        value: 0,
                        unit: "px"
                    }
                }, $YTPlayer.addClass("mb_YTPlayer");
                var property = $YTPlayer.data("property") && "string" == typeof $YTPlayer.data("property") ? eval("(" + $YTPlayer.data("property") + ")") : $YTPlayer.data("property");
                "undefined" != typeof property && "undefined" != typeof property.vol && (property.vol = 0 === property.vol ? property.vol = 1 : property.vol), jQuery.extend(YTPlayer.opt, jQuery.mbYTPlayer.defaults, options, property), YTPlayer.hasChanged || (YTPlayer.defaultOpt = {}, jQuery.extend(YTPlayer.defaultOpt, jQuery.mbYTPlayer.defaults, options, property)), "true" == YTPlayer.opt.loop && (YTPlayer.opt.loop = 9999), YTPlayer.isRetina = window.retina || window.devicePixelRatio > 1;
                var isIframe = function() {
                    var a = !1;
                    try {
                        self.location.href != top.location.href && (a = !0)
                    } catch (b) {
                        a = !0
                    }
                    return a
                };
                YTPlayer.canGoFullScreen = !(jQuery.browser.msie || jQuery.browser.opera || isIframe()), YTPlayer.canGoFullScreen || (YTPlayer.opt.realfullscreen = !1), $YTPlayer.attr("id") || $YTPlayer.attr("id", "video_" + (new Date).getTime());
                var playerID = "mbYTP_" + YTPlayer.id;
                YTPlayer.isAlone = !1, YTPlayer.hasFocus = !0;
                var videoID = this.opt.videoURL ? getYTPVideoID(this.opt.videoURL).videoID : $YTPlayer.attr("href") ? getYTPVideoID($YTPlayer.attr("href")).videoID : !1,
                    playlistID = this.opt.videoURL ? getYTPVideoID(this.opt.videoURL).playlistID : $YTPlayer.attr("href") ? getYTPVideoID($YTPlayer.attr("href")).playlistID : !1;
                YTPlayer.videoID = videoID, YTPlayer.playlistID = playlistID, YTPlayer.opt.showAnnotations = YTPlayer.opt.showAnnotations ? "0" : "3";
                var playerVars = {
                    autoplay: 0,
                    modestbranding: 1,
                    controls: 0,
                    showinfo: 0,
                    rel: 0,
                    enablejsapi: 1,
                    version: 3,
                    playerapiid: playerID,
                    origin: "*",
                    allowfullscreen: !0,
                    wmode: "transparent",
                    iv_load_policy: YTPlayer.opt.showAnnotations
                };
                document.createElement("video").canPlayType && jQuery.extend(playerVars, {
                    html5: 1
                }), jQuery.browser.msie && jQuery.browser.version < 9 && (this.opt.opacity = 1);
                var playerBox = jQuery("<div/>").attr("id", playerID).addClass("playerBox"),
                    overlay = jQuery("<div/>").css({
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%"
                    }).addClass("YTPOverlay");
                if (YTPlayer.isSelf = "self" == YTPlayer.opt.containment, YTPlayer.defaultOpt.containment = YTPlayer.opt.containment = jQuery("self" == YTPlayer.opt.containment ? this : YTPlayer.opt.containment), YTPlayer.isBackground = "body" == YTPlayer.opt.containment.get(0).tagName.toLowerCase(), !YTPlayer.isBackground || !ytp.backgroundIsInited) {
                    var isPlayer = YTPlayer.opt.containment.is(jQuery(this));
                    if (YTPlayer.canPlayOnMobile = isPlayer && 0 === jQuery(this).children().length, isPlayer ? YTPlayer.isPlayer = !0 : $YTPlayer.hide(), jQuery.browser.mobile && !YTPlayer.canPlayOnMobile) return void $YTPlayer.remove();
                    var wrapper = jQuery("<div/>").addClass("mbYTP_wrapper").attr("id", "wrapper_" + playerID);
                    if (wrapper.css({
                            position: "absolute",
                            zIndex: 0,
                            minWidth: "100%",
                            minHeight: "100%",
                            left: 0,
                            top: 0,
                            overflow: "hidden",
                            opacity: 0
                        }), playerBox.css({
                            position: "absolute",
                            zIndex: 0,
                            width: "100%",
                            height: "100%",
                            top: 0,
                            left: 0,
                            overflow: "hidden"
                        }), wrapper.append(playerBox), YTPlayer.opt.containment.children().not("script, style").each(function() {
                            "static" == jQuery(this).css("position") && jQuery(this).css("position", "relative")
                        }), YTPlayer.isBackground ? (jQuery("body").css({
                            boxSizing: "border-box"
                        }), wrapper.css({
                            position: "fixed",
                            top: 0,
                            left: 0,
                            zIndex: 0
                        }), $YTPlayer.hide()) : "static" == YTPlayer.opt.containment.css("position") && YTPlayer.opt.containment.css({
                            position: "relative"
                        }), YTPlayer.opt.containment.prepend(wrapper), YTPlayer.wrapper = wrapper, playerBox.css({
                            opacity: 1
                        }), jQuery.browser.mobile || (playerBox.after(overlay), YTPlayer.overlay = overlay), YTPlayer.isBackground || overlay.on("mouseenter", function() {
                            YTPlayer.controlBar && YTPlayer.controlBar.addClass("visible")
                        }).on("mouseleave", function() {
                            YTPlayer.controlBar && YTPlayer.controlBar.removeClass("visible")
                        }), ytp.YTAPIReady) setTimeout(function() {
                        jQuery(document).trigger("YTAPIReady")
                    }, 100);
                    else {
                        jQuery("#YTAPI").remove();
                        var tag = jQuery("<script></script>").attr({
                            src: jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/iframe_api?v=" + jQuery.mbYTPlayer.version,
                            id: "YTAPI"
                        });
                        jQuery("head").prepend(tag)
                    }
                    jQuery(document).on("YTAPIReady", function() {
                        YTPlayer.isBackground && ytp.backgroundIsInited || YTPlayer.isInit || (YTPlayer.isBackground && (ytp.backgroundIsInited = !0), YTPlayer.opt.autoPlay = "undefined" == typeof YTPlayer.opt.autoPlay ? YTPlayer.isBackground ? !0 : !1 : YTPlayer.opt.autoPlay, YTPlayer.opt.vol = YTPlayer.opt.vol ? YTPlayer.opt.vol : 100, jQuery.mbYTPlayer.getDataFromAPI(YTPlayer), jQuery(YTPlayer).on("YTPChanged", function() {
                            if (!YTPlayer.isInit) {
                                if (YTPlayer.isInit = !0, jQuery.browser.mobile && YTPlayer.canPlayOnMobile) {
                                    if (YTPlayer.opt.containment.outerWidth() > jQuery(window).width()) {
                                        YTPlayer.opt.containment.css({
                                            maxWidth: "100%"
                                        });
                                        var h = .6 * YTPlayer.opt.containment.outerWidth();
                                        YTPlayer.opt.containment.css({
                                            maxHeight: h
                                        })
                                    }
                                    return void new YT.Player(playerID, {
                                        videoId: YTPlayer.videoID.toString(),
                                        height: "100%",
                                        width: "100%",
                                        events: {
                                            onReady: function(a) {
                                                YTPlayer.player = a.target, playerBox.css({
                                                    opacity: 1
                                                }), YTPlayer.wrapper.css({
                                                    opacity: 1
                                                })
                                            }
                                        }
                                    })
                                }
                                new YT.Player(playerID, {
                                    videoId: YTPlayer.videoID.toString(),
                                    playerVars: playerVars,
                                    events: {
                                        onReady: function(a) {
                                            YTPlayer.player = a.target, YTPlayer.isReady || (YTPlayer.isReady = YTPlayer.isPlayer && !YTPlayer.opt.autoPlay ? !1 : !0, YTPlayer.playerEl = YTPlayer.player.getIframe(), $(YTPlayer.playerEl).unselectable(), $YTPlayer.optimizeDisplay(), YTPlayer.videoID = videoID, jQuery(window).on("resize.YTP", function() {
                                                $YTPlayer.optimizeDisplay()
                                            }), jQuery.mbYTPlayer.checkForState(YTPlayer))
                                        },
                                        onStateChange: function(event) {
                                            if ("function" == typeof event.target.getPlayerState) {
                                                var state = event.target.getPlayerState();
                                                if (YTPlayer.state != state) {
                                                    if (YTPlayer.preventTrigger) return void(YTPlayer.preventTrigger = !1);
                                                    YTPlayer.state = state;
                                                    var eventType;
                                                    switch (state) {
                                                        case -1:
                                                            eventType = "YTPUnstarted";
                                                            break;
                                                        case 0:
                                                            eventType = "YTPEnd";
                                                            break;
                                                        case 1:
                                                            eventType = "YTPPlay", YTPlayer.controlBar && YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.pause), "undefined" != typeof _gaq && eval(YTPlayer.opt.gaTrack) && _gaq.push(["_trackEvent", "YTPlayer", "Play", YTPlayer.hasData ? YTPlayer.videoData.title : YTPlayer.videoID.toString()]), "undefined" != typeof ga && eval(YTPlayer.opt.gaTrack) && ga("send", "event", "YTPlayer", "play", YTPlayer.hasData ? YTPlayer.videoData.title : YTPlayer.videoID.toString());
                                                            break;
                                                        case 2:
                                                            eventType = "YTPPause", YTPlayer.controlBar && YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                                                            break;
                                                        case 3:
                                                            YTPlayer.player.setPlaybackQuality(YTPlayer.opt.quality), eventType = "YTPBuffering", YTPlayer.controlBar && YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                                                            break;
                                                        case 5:
                                                            eventType = "YTPCued"
                                                    }
                                                    var YTPEvent = jQuery.Event(eventType);
                                                    YTPEvent.time = YTPlayer.player.time, YTPlayer.canTrigger && jQuery(YTPlayer).trigger(YTPEvent)
                                                }
                                            }
                                        },
                                        onPlaybackQualityChange: function(a) {
                                            var b = a.target.getPlaybackQuality(),
                                                c = jQuery.Event("YTPQualityChange");
                                            c.quality = b, jQuery(YTPlayer).trigger(c)
                                        },
                                        onError: function(a) {
                                            150 == a.data && (console.log("Embedding this video is restricted by Youtube."), YTPlayer.isPlayList && jQuery(YTPlayer).playNext()), 2 == a.data && YTPlayer.isPlayList && jQuery(YTPlayer).playNext(), "function" == typeof YTPlayer.opt.onError && YTPlayer.opt.onError($YTPlayer, a)
                                        }
                                    }
                                })
                            }
                        }))
                    })
                }
            })
        },
        getDataFromAPI: function(a) {
            if (a.videoData = jQuery.mbStorage.get("YTPlayer_data_" + a.videoID), jQuery(a).off("YTPData.YTPlayer").on("YTPData.YTPlayer", function() {
                    if (a.hasData && a.isPlayer && !a.opt.autoPlay) {
                        var b = a.videoData.thumb_max || a.videoData.thumb_high || a.videoData.thumb_medium;
                        a.opt.containment.css({
                            background: "rgba(0,0,0,0.5) url(" + b + ") center center",
                            backgroundSize: "cover"
                        }), a.opt.backgroundUrl = b
                    }
                }), a.videoData) setTimeout(function() {
                a.opt.ratio = "auto" == a.opt.ratio ? "16/9" : a.opt.ratio, a.dataReceived = !0, jQuery(a).trigger("YTPChanged");
                var b = jQuery.Event("YTPData");
                b.prop = {};
                for (var c in a.videoData) b.prop[c] = a.videoData[c];
                jQuery(a).trigger(b)
            }, 500), a.hasData = !0;
            else if (jQuery.mbYTPlayer.apiKey) jQuery.getJSON(jQuery.mbYTPlayer.locationProtocol + "//www.googleapis.com/youtube/v3/videos?id=" + a.videoID + "&key=" + jQuery.mbYTPlayer.apiKey + "&part=snippet", function(b) {
                function c(b) {
                    a.videoData = {}, a.videoData.id = a.videoID, a.videoData.channelTitle = b.channelTitle, a.videoData.title = b.title, a.videoData.description = b.description.length < 400 ? b.description : b.description.substring(0, 400) + " ...", a.videoData.aspectratio = "auto" == a.opt.ratio ? "16/9" : a.opt.ratio, a.opt.ratio = a.videoData.aspectratio, a.videoData.thumb_max = b.thumbnails.maxres ? b.thumbnails.maxres.url : null, a.videoData.thumb_high = b.thumbnails.high ? b.thumbnails.high.url : null, a.videoData.thumb_medium = b.thumbnails.medium ? b.thumbnails.medium.url : null, jQuery.mbStorage.set("YTPlayer_data_" + a.videoID, a.videoData)
                }
                a.dataReceived = !0, jQuery(a).trigger("YTPChanged"), c(b.items[0].snippet), a.hasData = !0;
                var d = jQuery.Event("YTPData");
                d.prop = {};
                for (var e in a.videoData) d.prop[e] = a.videoData[e];
                jQuery(a).trigger(d)
            });
            else {
                if (setTimeout(function() {
                        jQuery(a).trigger("YTPChanged")
                    }, 50), a.isPlayer && !a.opt.autoPlay) {
                    var b = jQuery.mbYTPlayer.locationProtocol + "//i.ytimg.com/vi/" + a.videoID + "/hqdefault.jpg";
                    a.opt.containment.css({
                        background: "rgba(0,0,0,0.5) url(" + b + ") center center",
                        backgroundSize: "cover"
                    }), a.opt.backgroundUrl = b
                }
                a.videoData = null, a.opt.ratio = "auto" == a.opt.ratio ? "16/9" : a.opt.ratio
            }
            a.isPlayer && !a.opt.autoPlay && (a.loading = jQuery("<div/>").addClass("loading").html("Loading").hide(), jQuery(a).append(a.loading), a.loading.fadeIn())
        },
        removeStoredData: function() {
            jQuery.mbStorage.remove()
        },
        getVideoData: function() {
            var a = this.get(0);
            return a.videoData
        },
        getVideoID: function() {
            var a = this.get(0);
            return a.videoID || !1
        },
        setVideoQuality: function(a) {
            var b = this.get(0);
            jQuery.browser.chrome || b.player.setPlaybackQuality(a)
        },
        playlist: function(a, b, c) {
            var d = this,
                e = d.get(0);
            return e.isPlayList = !0, b && (a = jQuery.shuffle(a)), e.videoID || (e.videos = a, e.videoCounter = 0, e.videoLength = a.length, jQuery(e).data("property", a[0]), jQuery(e).mb_YTPlayer()), "function" == typeof c && jQuery(e).one("YTPChanged", function() {
                c(e)
            }), jQuery(e).on("YTPEnd", function() {
                jQuery(e).playNext()
            }), d
        },
        playNext: function() {
            var a = this.get(0);
            return a.videoCounter++, a.videoCounter >= a.videoLength && (a.videoCounter = 0), jQuery(a).changeMovie(a.videos[a.videoCounter]), this
        },
        playPrev: function() {
            var a = this.get(0);
            return a.videoCounter--, a.videoCounter < 0 && (a.videoCounter = a.videoLength - 1), jQuery(a).changeMovie(a.videos[a.videoCounter]), this
        },
        changeMovie: function(a) {
            var b = this.get(0);
            b.opt.startAt = 0, b.opt.stopAt = 0, b.opt.mute = !0, b.hasData = !1, b.hasChanged = !0, b.player.LoopTime = void 0, a && jQuery.extend(b.opt, b.defaultOpt, a), b.videoID = getYTPVideoID(b.opt.videoURL).videoID, "true" == b.opt.loop && (b.opt.loop = 9999), jQuery(b.playerEl).CSSAnimate({
                opacity: 0
            }, 200, function() {
                var a = jQuery.Event("YTPChangeMovie");
                return a.time = b.player.time, a.videoId = b.videoID, jQuery(b).trigger(a), jQuery(b).YTPGetPlayer().cueVideoByUrl(encodeURI(jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/v/" + b.videoID), 1, b.opt.quality), jQuery.mbYTPlayer.checkForState(b), jQuery(b).optimizeDisplay(), jQuery.mbYTPlayer.getDataFromAPI(b), this
            })
        },
        getPlayer: function() {
            return jQuery(this).get(0).player
        },
        playerDestroy: function() {
            var a = this.get(0);
            ytp.YTAPIReady = !1, ytp.backgroundIsInited = !1, a.isInit = !1, a.videoID = null;
            var b = a.wrapper;
            return b.remove(), jQuery("#controlBar_" + a.id).remove(), clearInterval(a.checkForStartAt), clearInterval(a.getState), this
        },
        fullscreen: function(real) {
            function hideMouse() {
                YTPlayer.overlay.css({
                    cursor: "none"
                })
            }

            function RunPrefixMethod(a, b) {
                for (var c, d, e = ["webkit", "moz", "ms", "o", ""], f = 0; f < e.length && !a[c];) {
                    if (c = b, "" == e[f] && (c = c.substr(0, 1).toLowerCase() + c.substr(1)), c = e[f] + c, d = typeof a[c], "undefined" != d) return e = [e[f]], "function" == d ? a[c]() : a[c];
                    f++
                }
            }

            function launchFullscreen(a) {
                RunPrefixMethod(a, "RequestFullScreen")
            }

            function cancelFullscreen() {
                (RunPrefixMethod(document, "FullScreen") || RunPrefixMethod(document, "IsFullScreen")) && RunPrefixMethod(document, "CancelFullScreen")
            }
            var YTPlayer = this.get(0);
            "undefined" == typeof real && (real = YTPlayer.opt.realfullscreen), real = eval(real);
            var controls = jQuery("#controlBar_" + YTPlayer.id),
                fullScreenBtn = controls.find(".mb_OnlyYT"),
                videoWrapper = YTPlayer.isSelf ? YTPlayer.opt.containment : YTPlayer.wrapper;
            if (real) {
                var fullscreenchange = jQuery.browser.mozilla ? "mozfullscreenchange" : jQuery.browser.webkit ? "webkitfullscreenchange" : "fullscreenchange";
                jQuery(document).off(fullscreenchange).on(fullscreenchange, function() {
                    var a = RunPrefixMethod(document, "IsFullScreen") || RunPrefixMethod(document, "FullScreen");
                    a ? (jQuery(YTPlayer).YTPSetVideoQuality("default"), jQuery(YTPlayer).trigger("YTPFullScreenStart")) : (YTPlayer.isAlone = !1, fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT), jQuery(YTPlayer).YTPSetVideoQuality(YTPlayer.opt.quality), videoWrapper.removeClass("fullscreen"), videoWrapper.CSSAnimate({
                        opacity: YTPlayer.opt.opacity
                    }, 500), videoWrapper.css({
                        zIndex: 0
                    }), YTPlayer.isBackground ? jQuery("body").after(controls) : YTPlayer.wrapper.before(controls), jQuery(window).resize(), jQuery(YTPlayer).trigger("YTPFullScreenEnd"))
                })
            }
            return YTPlayer.isAlone ? (jQuery(document).off("mousemove.YTPlayer"), YTPlayer.overlay.css({
                cursor: "auto"
            }), real ? cancelFullscreen() : (videoWrapper.CSSAnimate({
                opacity: YTPlayer.opt.opacity
            }, 500), videoWrapper.css({
                zIndex: 0
            })), fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT), YTPlayer.isAlone = !1) : (jQuery(document).on("mousemove.YTPlayer", function(a) {
                YTPlayer.overlay.css({
                    cursor: "auto"
                }), clearTimeout(YTPlayer.hideCursor), jQuery(a.target).parents().is(".mb_YTPBar") || (YTPlayer.hideCursor = setTimeout(hideMouse, 3e3))
            }), hideMouse(), real ? (videoWrapper.css({
                opacity: 0
            }), videoWrapper.addClass("fullscreen"), launchFullscreen(videoWrapper.get(0)), setTimeout(function() {
                videoWrapper.CSSAnimate({
                    opacity: 1
                }, 1e3), YTPlayer.wrapper.append(controls), jQuery(YTPlayer).optimizeDisplay(), YTPlayer.player.seekTo(YTPlayer.player.getCurrentTime() + .1, !0)
            }, 500)) : videoWrapper.css({
                zIndex: 1e4
            }).CSSAnimate({
                opacity: 1
            }, 1e3), fullScreenBtn.html(jQuery.mbYTPlayer.controls.showSite), YTPlayer.isAlone = !0), this
        },
        toggleLoops: function() {
            var a = this.get(0),
                b = a.opt;
            return 1 == b.loop ? b.loop = 0 : (b.startAt ? a.player.seekTo(b.startAt) : a.player.playVideo(), b.loop = 1), this
        },
        play: function() {
            var a = this.get(0);
            if (a.isReady) return a.player.playVideo(), a.wrapper.CSSAnimate({
                opacity: a.isAlone ? 1 : a.opt.opacity
            }, 2e3), jQuery(a.playerEl).CSSAnimate({
                opacity: 1
            }, 1e3), jQuery(a).css("background-image", "none"), this
        },
        togglePlay: function(a) {
            var b = this.get(0);
            return 1 == b.state ? this.YTPPause() : this.YTPPlay(), "function" == typeof a && a(b.state), this
        },
        stop: function() {
            var a = this.get(0),
                b = jQuery("#controlBar_" + a.id),
                c = b.find(".mb_YTPPlaypause");
            return c.html(jQuery.mbYTPlayer.controls.play), a.player.stopVideo(), this
        },
        pause: function() {
            var a = this.get(0);
            return a.player.pauseVideo(), this
        },
        seekTo: function(a) {
            var b = this.get(0);
            return b.player.seekTo(a, !0), this
        },
        setVolume: function(a) {
            var b = this.get(0);
            return a || b.opt.vol || 0 != b.player.getVolume() ? !a && b.player.getVolume() > 0 || a && b.opt.vol == a ? b.isMute ? jQuery(b).YTPUnmute() : jQuery(b).YTPMute() : (b.opt.vol = a, b.player.setVolume(b.opt.vol), b.volumeBar && b.volumeBar.length && b.volumeBar.updateSliderVal(a)) : jQuery(b).YTPUnmute(), this
        },
        mute: function() {
            var a = this.get(0);
            if (!a.isMute) {
                a.player.mute(), a.isMute = !0, a.player.setVolume(0), a.volumeBar && a.volumeBar.length && a.volumeBar.width() > 10 && a.volumeBar.updateSliderVal(0);
                var b = jQuery("#controlBar_" + a.id),
                    c = b.find(".mb_YTPMuteUnmute");
                c.html(jQuery.mbYTPlayer.controls.unmute), jQuery(a).addClass("isMuted"), a.volumeBar && a.volumeBar.length && a.volumeBar.addClass("muted");
                var d = jQuery.Event("YTPMuted");
                return d.time = a.player.time, a.canTrigger && jQuery(a).trigger(d), this
            }
        },
        unmute: function() {
            var a = this.get(0);
            if (a.isMute) {
                a.player.unMute(), a.isMute = !1, a.player.setVolume(a.opt.vol), a.volumeBar && a.volumeBar.length && a.volumeBar.updateSliderVal(a.opt.vol > 10 ? a.opt.vol : 10);
                var b = jQuery("#controlBar_" + a.id),
                    c = b.find(".mb_YTPMuteUnmute");
                c.html(jQuery.mbYTPlayer.controls.mute), jQuery(a).removeClass("isMuted"), a.volumeBar && a.volumeBar.length && a.volumeBar.removeClass("muted");
                var d = jQuery.Event("YTPUnmuted");
                return d.time = a.player.time, a.canTrigger && jQuery(a).trigger(d), this
            }
        },
        applyFilter: function(a, b) {
            var c = this.get(0);
            return c.filters[a].value = b, c.filtersEnabled && this.YTPEnableFilters(), this
        },
        applyFilters: function(a) {
            var b = this.get(0);
            return this.on("YTPReady", function() {
                for (var c in a) b.filters[c].value = a[c], jQuery(b).YTPApplyFilter(c, a[c]);
                jQuery(b).trigger("YTPFiltersApplied")
            }), this
        },
        toggleFilter: function(a, b) {
            return this.each(function() {
                var c = this;
                c.filters[a].value ? c.filters[a].value = 0 : c.filters[a].value = b, c.filtersEnabled && jQuery(this).YTPEnableFilters()
            })
        },
        toggleFilters: function(a) {
            return this.each(function() {
                var b = this;
                b.filtersEnabled ? (jQuery(b).trigger("YTPDisableFilters"), jQuery(b).YTPDisableFilters()) : (jQuery(b).YTPEnableFilters(), jQuery(b).trigger("YTPEnableFilters")), "function" == typeof a && a(b.filtersEnabled)
            })
        },
        disableFilters: function() {
            return this.each(function() {
                var a = this,
                    b = jQuery(a.playerEl);
                b.css("-webkit-filter", ""), b.css("filter", ""), a.filtersEnabled = !1
            })
        },
        enableFilters: function() {
            return this.each(function() {
                var a = this,
                    b = jQuery(a.playerEl),
                    c = "";
                for (var d in a.filters) a.filters[d].value && (c += d.replace("_", "-") + "(" + a.filters[d].value + a.filters[d].unit + ") ");
                b.css("-webkit-filter", c), b.css("filter", c), a.filtersEnabled = !0
            })
        },
        removeFilter: function(a, b) {
            return this.each(function() {
                "function" == typeof a && (b = a, a = null);
                var c = this;
                if (a) jQuery(this).YTPApplyFilter(a, 0), "function" == typeof b && b(a);
                else
                    for (var d in c.filters) jQuery(this).YTPApplyFilter(d, 0), "function" == typeof b && b(d)
            })
        },
        manageProgress: function() {
            var a = this.get(0),
                b = jQuery("#controlBar_" + a.id),
                c = b.find(".mb_YTPProgress"),
                d = b.find(".mb_YTPLoaded"),
                e = b.find(".mb_YTPseekbar"),
                f = c.outerWidth(),
                g = Math.floor(a.player.getCurrentTime()),
                h = Math.floor(a.player.getDuration()),
                i = g * f / h,
                j = 0,
                k = 100 * a.player.getVideoLoadedFraction();
            return d.css({
                left: j,
                width: k + "%"
            }), e.css({
                left: 0,
                width: i
            }), {
                totalTime: h,
                currentTime: g
            }
        },
        buildControls: function(YTPlayer) {
            var data = YTPlayer.opt;
            if (data.showYTLogo = data.showYTLogo || data.printUrl, !jQuery("#controlBar_" + YTPlayer.id).length) {
                YTPlayer.controlBar = jQuery("<span/>").attr("id", "controlBar_" + YTPlayer.id).addClass("mb_YTPBar").css({
                    whiteSpace: "noWrap",
                    position: YTPlayer.isBackground ? "fixed" : "absolute",
                    zIndex: YTPlayer.isBackground ? 1e4 : 1e3
                }).hide();
                var buttonBar = jQuery("<div/>").addClass("buttonBar"),
                    playpause = jQuery("<span>" + jQuery.mbYTPlayer.controls.play + "</span>").addClass("mb_YTPPlaypause ytpicon").click(function() {
                        1 == YTPlayer.player.getPlayerState() ? jQuery(YTPlayer).YTPPause() : jQuery(YTPlayer).YTPPlay()
                    }),
                    MuteUnmute = jQuery("<span>" + jQuery.mbYTPlayer.controls.mute + "</span>").addClass("mb_YTPMuteUnmute ytpicon").click(function() {
                        0 == YTPlayer.player.getVolume() ? jQuery(YTPlayer).YTPUnmute() : jQuery(YTPlayer).YTPMute()
                    }),
                    volumeBar = jQuery("<div/>").addClass("mb_YTPVolumeBar").css({
                        display: "inline-block"
                    });
                YTPlayer.volumeBar = volumeBar;
                var idx = jQuery("<span/>").addClass("mb_YTPTime"),
                    vURL = data.videoURL ? data.videoURL : "";
                vURL.indexOf("http") < 0 && (vURL = jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/watch?v=" + data.videoURL);
                var movieUrl = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.ytLogo).addClass("mb_YTPUrl ytpicon").attr("title", "view on YouTube").on("click", function() {
                        window.open(vURL, "viewOnYT")
                    }),
                    onlyVideo = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.onlyYT).addClass("mb_OnlyYT ytpicon").on("click", function() {
                        jQuery(YTPlayer).YTPFullscreen(data.realfullscreen)
                    }),
                    progressBar = jQuery("<div/>").addClass("mb_YTPProgress").css("position", "absolute").click(function(a) {
                        timeBar.css({
                            width: a.clientX - timeBar.offset().left
                        }), YTPlayer.timeW = a.clientX - timeBar.offset().left, YTPlayer.controlBar.find(".mb_YTPLoaded").css({
                            width: 0
                        });
                        var b = Math.floor(YTPlayer.player.getDuration());
                        YTPlayer["goto"] = timeBar.outerWidth() * b / progressBar.outerWidth(), YTPlayer.player.seekTo(parseFloat(YTPlayer["goto"]), !0), YTPlayer.controlBar.find(".mb_YTPLoaded").css({
                            width: 0
                        })
                    }),
                    loadedBar = jQuery("<div/>").addClass("mb_YTPLoaded").css("position", "absolute"),
                    timeBar = jQuery("<div/>").addClass("mb_YTPseekbar").css("position", "absolute");
                progressBar.append(loadedBar).append(timeBar), buttonBar.append(playpause).append(MuteUnmute).append(volumeBar).append(idx), data.showYTLogo && buttonBar.append(movieUrl), (YTPlayer.isBackground || eval(YTPlayer.opt.realfullscreen) && !YTPlayer.isBackground) && buttonBar.append(onlyVideo), YTPlayer.controlBar.append(buttonBar).append(progressBar), YTPlayer.isBackground ? jQuery("body").after(YTPlayer.controlBar) : (YTPlayer.controlBar.addClass("inlinePlayer"), YTPlayer.wrapper.before(YTPlayer.controlBar)), volumeBar.simpleSlider({
                    initialval: YTPlayer.opt.vol,
                    scale: 100,
                    orientation: "h",
                    callback: function(a) {
                        0 == a.value ? jQuery(YTPlayer).YTPMute() : jQuery(YTPlayer).YTPUnmute(), YTPlayer.player.setVolume(a.value), YTPlayer.isMute || (YTPlayer.opt.vol = a.value)
                    }
                })
            }
        },
        checkForState: function(YTPlayer) {
            var interval = YTPlayer.opt.showControls ? 100 : 400;
            return clearInterval(YTPlayer.getState), jQuery.contains(document, YTPlayer) ? (jQuery.mbYTPlayer.checkForStart(YTPlayer), void(YTPlayer.getState = setInterval(function() {
                var prog = jQuery(YTPlayer).YTPManageProgress(),
                    $YTPlayer = jQuery(YTPlayer),
                    data = YTPlayer.opt,
                    startAt = YTPlayer.opt.startAt ? YTPlayer.opt.startAt : 1,
                    stopAt = YTPlayer.opt.stopAt > YTPlayer.opt.startAt ? YTPlayer.opt.stopAt : 0;
                if (stopAt = stopAt < YTPlayer.player.getDuration() ? stopAt : 0, YTPlayer.player.time != prog.currentTime) {
                    var YTPEvent = jQuery.Event("YTPTime");
                    YTPEvent.time = YTPlayer.player.time, jQuery(YTPlayer).trigger(YTPEvent)
                }
                if (YTPlayer.player.time = prog.currentTime, 0 == YTPlayer.player.getVolume() ? $YTPlayer.addClass("isMuted") : $YTPlayer.removeClass("isMuted"), YTPlayer.opt.showControls && (prog.totalTime ? YTPlayer.controlBar.find(".mb_YTPTime").html(jQuery.mbYTPlayer.formatTime(prog.currentTime) + " / " + jQuery.mbYTPlayer.formatTime(prog.totalTime)) : YTPlayer.controlBar.find(".mb_YTPTime").html("-- : -- / -- : --")), eval(YTPlayer.opt.stopMovieOnBlur) && (document.hasFocus() ? document.hasFocus() && !YTPlayer.hasFocus && -1 != YTPlayer.state && 0 != YTPlayer.state && (YTPlayer.hasFocus = !0, $YTPlayer.YTPPlay()) : 1 == YTPlayer.state && (YTPlayer.hasFocus = !1, $YTPlayer.YTPPause())), YTPlayer.controlBar && YTPlayer.controlBar.outerWidth() <= 400 && !YTPlayer.isCompact ? (YTPlayer.controlBar.addClass("compact"), YTPlayer.isCompact = !0, !YTPlayer.isMute && YTPlayer.volumeBar && YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)) : YTPlayer.controlBar && YTPlayer.controlBar.outerWidth() > 400 && YTPlayer.isCompact && (YTPlayer.controlBar.removeClass("compact"), YTPlayer.isCompact = !1, !YTPlayer.isMute && YTPlayer.volumeBar && YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)), 1 == YTPlayer.player.getPlayerState() && (parseFloat(YTPlayer.player.getDuration() - 1.5) < YTPlayer.player.getCurrentTime() || stopAt > 0 && parseFloat(YTPlayer.player.getCurrentTime()) > stopAt)) {
                    if (YTPlayer.isEnded) return;
                    if (YTPlayer.isEnded = !0, setTimeout(function() {
                            YTPlayer.isEnded = !1
                        }, 1e3), YTPlayer.isPlayList) {
                        if (!data.loop || data.loop > 0 && YTPlayer.player.LoopTime === data.loop - 1) {
                            YTPlayer.player.LoopTime = void 0, clearInterval(YTPlayer.getState);
                            var YTPEnd = jQuery.Event("YTPEnd");
                            return YTPEnd.time = YTPlayer.player.time, void jQuery(YTPlayer).trigger(YTPEnd)
                        }
                    } else if (!data.loop || data.loop > 0 && YTPlayer.player.LoopTime === data.loop - 1) return YTPlayer.player.LoopTime = void 0, YTPlayer.preventTrigger = !0, $(YTPlayer).YTPPause(), void YTPlayer.wrapper.CSSAnimate({
                        opacity: 0
                    }, 1e3, function() {
                        var a = jQuery.Event("YTPEnd");
                        a.time = YTPlayer.player.time, jQuery(YTPlayer).trigger(a), YTPlayer.player.seekTo(startAt, !0), YTPlayer.isBackground || YTPlayer.opt.containment.css({
                            background: "rgba(0,0,0,0.5) url(" + YTPlayer.opt.backgroundUrl + ") center center",
                            backgroundSize: "cover"
                        })
                    });
                    YTPlayer.player.LoopTime = YTPlayer.player.LoopTime ? ++YTPlayer.player.LoopTime : 1, startAt = startAt || 1, YTPlayer.player.pauseVideo(), YTPlayer.player.seekTo(startAt, !0), $YTPlayer.YTPPlay()
                }
            }, interval))) : (jQuery(YTPlayer).YTPPlayerDestroy(), clearInterval(YTPlayer.getState), void clearInterval(YTPlayer.checkForStartAt))
        },
        checkForStart: function(a) {
            var b = jQuery(a);
            if (!jQuery.contains(document, a)) return void jQuery(a).YTPPlayerDestroy();
            if (jQuery.browser.chrome && (a.opt.quality = "default"), jQuery(a).muteYTPVolume(), jQuery("#controlBar_" + a.id).remove(), a.opt.showControls && jQuery.mbYTPlayer.buildControls(a), a.opt.addRaster) {
                var c = "dot" == a.opt.addRaster ? "raster-dot" : "raster";
                a.overlay.addClass(a.isRetina ? c + " retina" : c)
            } else a.overlay.removeClass(function(a, b) {
                var c = b.split(" "),
                    d = [];
                return jQuery.each(c, function(a, b) {
                    /raster.*/.test(b) && d.push(b)
                }), d.push("retina"), d.join(" ")
            });
            a.checkForStartAt = setInterval(function() {
                jQuery(a).YTPMute();
                var c = a.opt.startAt ? a.opt.startAt : 1,
                    d = a.player.getVideoLoadedFraction() > c / a.player.getDuration();
                if (a.player.getDuration() > 0 && a.player.getCurrentTime() >= c && d) {
                    clearInterval(a.checkForStartAt), a.isReady = !0, "function" == typeof a.opt.onReady && a.opt.onReady(a);
                    var e = jQuery.Event("YTPReady");
                    if (e.time = a.player.time, jQuery(a).trigger(e), a.opt.mute || jQuery(a).YTPUnmute(), a.canTrigger = !0, a.opt.autoPlay) {
                        b.YTPPlay();
                        var f = jQuery.Event("YTPStart");
                        f.time = a.player.time, jQuery(a).trigger(f), b.css("background-image", "none"), jQuery(a.playerEl).CSSAnimate({
                            opacity: 1
                        }, 1e3), a.wrapper.CSSAnimate({
                            opacity: a.isAlone ? 1 : a.opt.opacity
                        }, 1e3)
                    } else a.player.pauseVideo(), a.isPlayer || (jQuery(a.playerEl).CSSAnimate({
                        opacity: 1
                    }, 1e3), a.wrapper.CSSAnimate({
                        opacity: a.isAlone ? 1 : a.opt.opacity
                    }, 1e3));
                    a.isPlayer && !a.opt.autoPlay && (a.loading.html("Ready"), setTimeout(function() {
                        a.loading.fadeOut()
                    }, 100)), a.controlBar && a.controlBar.slideDown(1e3)
                } else c >= 0 && a.player.seekTo(c, !0)
            }, 1e3)
        },
        formatTime: function(a) {
            var b = Math.floor(a / 60),
                c = Math.floor(a - 60 * b);
            return (9 >= b ? "0" + b : b) + " : " + (9 >= c ? "0" + c : c)
        }
    }, jQuery.fn.toggleVolume = function() {
        var a = this.get(0);
        if (a) return a.player.isMuted() ? (jQuery(a).YTPUnmute(), !0) : (jQuery(a).YTPMute(), !1)
    }, jQuery.fn.optimizeDisplay = function() {
        var a = this.get(0),
            b = a.opt,
            c = jQuery(a.playerEl),
            d = {},
            e = a.wrapper;
        d.width = e.outerWidth(), d.height = e.outerHeight();
        var f = 24,
            g = 100,
            h = {};
        b.optimizeDisplay ? (h.width = d.width + d.width * f / 100, h.height = "16/9" == b.ratio ? Math.ceil(9 * d.width / 16) : Math.ceil(3 * d.width / 4), h.marginTop = -((h.height - d.height) / 2), h.marginLeft = -(d.width * (f / 2) / 100), h.height < d.height && (h.height = d.height + d.height * f / 100, h.width = "16/9" == b.ratio ? Math.floor(16 * d.height / 9) : Math.floor(4 * d.height / 3), h.marginTop = -(d.height * (f / 2) / 100), h.marginLeft = -((h.width - d.width) / 2)), h.width += g, h.height += g, h.marginTop -= g / 2, h.marginLeft -= g / 2) : (h.width = "100%", h.height = "100%", h.marginTop = 0, h.marginLeft = 0), c.css({
            width: h.width,
            height: h.height,
            marginTop: h.marginTop,
            marginLeft: h.marginLeft
        })
    }, jQuery.shuffle = function(a) {
        for (var b = a.slice(), c = b.length, d = c; d--;) {
            var e = parseInt(Math.random() * c),
                f = b[d];
            b[d] = b[e], b[e] = f
        }
        return b
    }, jQuery.fn.unselectable = function() {
        return this.each(function() {
            jQuery(this).css({
                "-moz-user-select": "none",
                "-webkit-user-select": "none",
                "user-select": "none"
            }).attr("unselectable", "on")
        })
    }, jQuery.fn.YTPlayer = jQuery.mbYTPlayer.buildPlayer, jQuery.fn.YTPGetPlayer = jQuery.mbYTPlayer.getPlayer, jQuery.fn.YTPGetVideoID = jQuery.mbYTPlayer.getVideoID, jQuery.fn.YTPChangeMovie = jQuery.mbYTPlayer.changeMovie, jQuery.fn.YTPPlayerDestroy = jQuery.mbYTPlayer.playerDestroy, jQuery.fn.YTPPlay = jQuery.mbYTPlayer.play, jQuery.fn.YTPTogglePlay = jQuery.mbYTPlayer.togglePlay, jQuery.fn.YTPStop = jQuery.mbYTPlayer.stop, jQuery.fn.YTPPause = jQuery.mbYTPlayer.pause, jQuery.fn.YTPSeekTo = jQuery.mbYTPlayer.seekTo, jQuery.fn.YTPlaylist = jQuery.mbYTPlayer.playlist, jQuery.fn.YTPPlayNext = jQuery.mbYTPlayer.playNext, jQuery.fn.YTPPlayPrev = jQuery.mbYTPlayer.playPrev, jQuery.fn.YTPMute = jQuery.mbYTPlayer.mute, jQuery.fn.YTPUnmute = jQuery.mbYTPlayer.unmute, jQuery.fn.YTPToggleVolume = jQuery.mbYTPlayer.toggleVolume, jQuery.fn.YTPSetVolume = jQuery.mbYTPlayer.setVolume, jQuery.fn.YTPGetVideoData = jQuery.mbYTPlayer.getVideoData, jQuery.fn.YTPFullscreen = jQuery.mbYTPlayer.fullscreen, jQuery.fn.YTPToggleLoops = jQuery.mbYTPlayer.toggleLoops, jQuery.fn.YTPSetVideoQuality = jQuery.mbYTPlayer.setVideoQuality, jQuery.fn.YTPManageProgress = jQuery.mbYTPlayer.manageProgress, jQuery.fn.YTPApplyFilter = jQuery.mbYTPlayer.applyFilter, jQuery.fn.YTPApplyFilters = jQuery.mbYTPlayer.applyFilters, jQuery.fn.YTPToggleFilter = jQuery.mbYTPlayer.toggleFilter, jQuery.fn.YTPToggleFilters = jQuery.mbYTPlayer.toggleFilters, jQuery.fn.YTPRemoveFilter = jQuery.mbYTPlayer.removeFilter, jQuery.fn.YTPDisableFilters = jQuery.mbYTPlayer.disableFilters, jQuery.fn.YTPEnableFilters = jQuery.mbYTPlayer.enableFilters, jQuery.fn.mb_YTPlayer = jQuery.mbYTPlayer.buildPlayer, jQuery.fn.playNext = jQuery.mbYTPlayer.playNext, jQuery.fn.playPrev = jQuery.mbYTPlayer.playPrev, jQuery.fn.changeMovie = jQuery.mbYTPlayer.changeMovie, jQuery.fn.getVideoID = jQuery.mbYTPlayer.getVideoID, jQuery.fn.getPlayer = jQuery.mbYTPlayer.getPlayer, jQuery.fn.playerDestroy = jQuery.mbYTPlayer.playerDestroy, jQuery.fn.fullscreen = jQuery.mbYTPlayer.fullscreen, jQuery.fn.buildYTPControls = jQuery.mbYTPlayer.buildControls, jQuery.fn.playYTP = jQuery.mbYTPlayer.play, jQuery.fn.toggleLoops = jQuery.mbYTPlayer.toggleLoops, jQuery.fn.stopYTP = jQuery.mbYTPlayer.stop, jQuery.fn.pauseYTP = jQuery.mbYTPlayer.pause, jQuery.fn.seekToYTP = jQuery.mbYTPlayer.seekTo, jQuery.fn.muteYTPVolume = jQuery.mbYTPlayer.mute, jQuery.fn.unmuteYTPVolume = jQuery.mbYTPlayer.unmute, jQuery.fn.setYTPVolume = jQuery.mbYTPlayer.setVolume, jQuery.fn.setVideoQuality = jQuery.mbYTPlayer.setVideoQuality, jQuery.fn.manageYTPProgress = jQuery.mbYTPlayer.manageProgress, jQuery.fn.YTPGetDataFromFeed = jQuery.mbYTPlayer.getVideoData
}(jQuery, ytp), jQuery.support.CSStransition = function() {
    var a = document.body || document.documentElement,
        b = a.style;
    return void 0 !== b.transition || void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.MsTransition || void 0 !== b.OTransition
}(), jQuery.CSS = {
    name: "mb.CSSAnimate",
    author: "Matteo Bicocchi",
    version: "2.0.0",
    transitionEnd: "transitionEnd",
    sfx: "",
    filters: {
        blur: {
            min: 0,
            max: 100,
            unit: "px"
        },
        brightness: {
            min: 0,
            max: 400,
            unit: "%"
        },
        contrast: {
            min: 0,
            max: 400,
            unit: "%"
        },
        grayscale: {
            min: 0,
            max: 100,
            unit: "%"
        },
        hueRotate: {
            min: 0,
            max: 360,
            unit: "deg"
        },
        invert: {
            min: 0,
            max: 100,
            unit: "%"
        },
        saturate: {
            min: 0,
            max: 400,
            unit: "%"
        },
        sepia: {
            min: 0,
            max: 100,
            unit: "%"
        }
    },
    normalizeCss: function(a) {
        var b = jQuery.extend(!0, {}, a);
        jQuery.browser.webkit || jQuery.browser.opera ? jQuery.CSS.sfx = "-webkit-" : jQuery.browser.mozilla ? jQuery.CSS.sfx = "-moz-" : jQuery.browser.msie && (jQuery.CSS.sfx = "-ms-");
        for (var c in b) {
            "transform" === c && (b[jQuery.CSS.sfx + "transform"] = b[c], delete b[c]), "transform-origin" === c && (b[jQuery.CSS.sfx + "transform-origin"] = a[c], delete b[c]), "filter" !== c || jQuery.browser.mozilla || (b[jQuery.CSS.sfx + "filter"] = a[c], delete b[c]), "blur" === c && setFilter(b, "blur", a[c]), "brightness" === c && setFilter(b, "brightness", a[c]), "contrast" === c && setFilter(b, "contrast", a[c]), "grayscale" === c && setFilter(b, "grayscale", a[c]), "hueRotate" === c && setFilter(b, "hueRotate", a[c]), "invert" === c && setFilter(b, "invert", a[c]), "saturate" === c && setFilter(b, "saturate", a[c]), "sepia" === c && setFilter(b, "sepia", a[c]);
            var d = "";
            "x" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " translateX(" + setUnit(a[c], "px") + ")", delete b[c]), "y" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " translateY(" + setUnit(a[c], "px") + ")", delete b[c]), "z" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " translateZ(" + setUnit(a[c], "px") + ")", delete b[c]), "rotate" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " rotate(" + setUnit(a[c], "deg") + ")", delete b[c]), "rotateX" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " rotateX(" + setUnit(a[c], "deg") + ")", delete b[c]), "rotateY" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " rotateY(" + setUnit(a[c], "deg") + ")", delete b[c]), "rotateZ" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " rotateZ(" + setUnit(a[c], "deg") + ")", delete b[c]), "scale" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " scale(" + setUnit(a[c], "") + ")", delete b[c]), "scaleX" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " scaleX(" + setUnit(a[c], "") + ")", delete b[c]), "scaleY" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " scaleY(" + setUnit(a[c], "") + ")", delete b[c]), "scaleZ" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " scaleZ(" + setUnit(a[c], "") + ")", delete b[c]), "skew" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " skew(" + setUnit(a[c], "deg") + ")", delete b[c]), "skewX" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " skewX(" + setUnit(a[c], "deg") + ")", delete b[c]), "skewY" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " skewY(" + setUnit(a[c], "deg") + ")", delete b[c]), "perspective" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " perspective(" + setUnit(a[c], "px") + ")", delete b[c])
        }
        return b
    },
    getProp: function(a) {
        var b = [];
        for (var c in a) b.indexOf(c) < 0 && b.push(uncamel(c));
        return b.join(",")
    },
    animate: function(a, b, c, d, e) {
        return this.each(function() {
            function f() {
                g.called = !0, g.CSSAIsRunning = !1, h.off(jQuery.CSS.transitionEnd + "." + g.id), clearTimeout(g.timeout), h.css(jQuery.CSS.sfx + "transition", ""), "function" == typeof e && e.apply(g), "function" == typeof g.CSSqueue && (g.CSSqueue(), g.CSSqueue = null)
            }
            var g = this,
                h = jQuery(this);
            g.id = g.id || "CSSA_" + (new Date).getTime();
            var i = i || {
                type: "noEvent"
            };
            if (g.CSSAIsRunning && g.eventType == i.type && !jQuery.browser.msie && jQuery.browser.version <= 9) return void(g.CSSqueue = function() {
                h.CSSAnimate(a, b, c, d, e)
            });
            if (g.CSSqueue = null, g.eventType = i.type, 0 !== h.length && a) {
                if (a = jQuery.normalizeCss(a), g.CSSAIsRunning = !0, "function" == typeof b && (e = b, b = jQuery.fx.speeds._default), "function" == typeof c && (d = c, c = 0), "string" == typeof c && (e = c, c = 0), "function" == typeof d && (e = d, d = "cubic-bezier(0.65,0.03,0.36,0.72)"), "string" == typeof b)
                    for (var j in jQuery.fx.speeds) {
                        if (b == j) {
                            b = jQuery.fx.speeds[j];
                            break
                        }
                        b = jQuery.fx.speeds._default
                    }
                if (b || (b = jQuery.fx.speeds._default), "string" == typeof e && (d = e, e = null), !jQuery.support.CSStransition) {
                    for (var k in a) {
                        if ("transform" === k && delete a[k], "filter" === k && delete a[k], "transform-origin" === k && delete a[k], "auto" === a[k] && delete a[k], "x" === k) {
                            var l = a[k],
                                m = "left";
                            a[m] = l, delete a[k]
                        }
                        if ("y" === k) {
                            var l = a[k],
                                m = "top";
                            a[m] = l, delete a[k]
                        }("-ms-transform" === k || "-ms-filter" === k) && delete a[k]
                    }
                    return void h.delay(c).animate(a, b, e)
                }
                var n = {
                    "default": "ease",
                    "in": "ease-in",
                    out: "ease-out",
                    "in-out": "ease-in-out",
                    snap: "cubic-bezier(0,1,.5,1)",
                    easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
                    easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
                    easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
                    easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
                    easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
                    easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
                    easeOutExpo: "cubic-bezier(.19,1,.22,1)",
                    easeInOutExpo: "cubic-bezier(1,0,0,1)",
                    easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
                    easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
                    easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
                    easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
                    easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
                    easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
                    easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
                    easeOutQuint: "cubic-bezier(.23,1,.32,1)",
                    easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
                    easeInSine: "cubic-bezier(.47,0,.745,.715)",
                    easeOutSine: "cubic-bezier(.39,.575,.565,1)",
                    easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
                    easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
                    easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
                    easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
                };
                n[d] && (d = n[d]), h.off(jQuery.CSS.transitionEnd + "." + g.id);
                var o = jQuery.CSS.getProp(a),
                    p = {};
                jQuery.extend(p, a), p[jQuery.CSS.sfx + "transition-property"] = o, p[jQuery.CSS.sfx + "transition-duration"] = b + "ms", p[jQuery.CSS.sfx + "transition-delay"] = c + "ms", p[jQuery.CSS.sfx + "transition-timing-function"] = d, setTimeout(function() {
                    h.one(jQuery.CSS.transitionEnd + "." + g.id, f), h.css(p)
                }, 1), g.timeout = setTimeout(function() {
                    return g.called || !e ? (g.called = !1, void(g.CSSAIsRunning = !1)) : (h.css(jQuery.CSS.sfx + "transition", ""), e.apply(g), g.CSSAIsRunning = !1, void("function" == typeof g.CSSqueue && (g.CSSqueue(), g.CSSqueue = null)))
                }, b + c + 10)
            }
        })
    }
}, jQuery.fn.CSSAnimate = jQuery.CSS.animate, jQuery.normalizeCss = jQuery.CSS.normalizeCss, jQuery.fn.css3 = function(a) {
    return this.each(function() {
        var b = jQuery(this),
            c = jQuery.normalizeCss(a);
        b.css(c)
    })
};
var nAgt = navigator.userAgent;
if (!jQuery.browser) {
    jQuery.browser = {}, jQuery.browser.mozilla = !1, jQuery.browser.webkit = !1, jQuery.browser.opera = !1, jQuery.browser.safari = !1, jQuery.browser.chrome = !1, jQuery.browser.msie = !1, jQuery.browser.ua = nAgt, jQuery.browser.name = navigator.appName, jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10);
    var nameOffset, verOffset, ix;
    if (-1 != (verOffset = nAgt.indexOf("Opera"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 6), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8));
    else if (-1 != (verOffset = nAgt.indexOf("OPR"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 4);
    else if (-1 != (verOffset = nAgt.indexOf("MSIE"))) jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5);
    else if (-1 != nAgt.indexOf("Trident")) {
        jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer";
        var start = nAgt.indexOf("rv:") + 3,
            end = start + 4;
        jQuery.browser.fullVersion = nAgt.substring(start, end)
    } else -1 != (verOffset = nAgt.indexOf("Chrome")) ? (jQuery.browser.webkit = !0, jQuery.browser.chrome = !0, jQuery.browser.name = "Chrome", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 != (verOffset = nAgt.indexOf("Safari")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("AppleWebkit")) ? (jQuery.browser.webkit = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("Firefox")) ? (jQuery.browser.mozilla = !0, jQuery.browser.name = "Firefox", jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)) : (nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/")) && (jQuery.browser.name = nAgt.substring(nameOffset, verOffset), jQuery.browser.fullVersion = nAgt.substring(verOffset + 1), jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() && (jQuery.browser.name = navigator.appName)); - 1 != (ix = jQuery.browser.fullVersion.indexOf(";")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), -1 != (ix = jQuery.browser.fullVersion.indexOf(" ")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), jQuery.browser.majorVersion = parseInt("" + jQuery.browser.fullVersion, 10), isNaN(jQuery.browser.majorVersion) && (jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10)), jQuery.browser.version = jQuery.browser.majorVersion
}
jQuery.browser.android = /Android/i.test(nAgt), jQuery.browser.blackberry = /BlackBerry|BB|PlayBook/i.test(nAgt), jQuery.browser.ios = /iPhone|iPad|iPod|webOS/i.test(nAgt), jQuery.browser.operaMobile = /Opera Mini/i.test(nAgt), jQuery.browser.windowsMobile = /IEMobile|Windows Phone/i.test(nAgt), jQuery.browser.kindle = /Kindle|Silk/i.test(nAgt), jQuery.browser.mobile = jQuery.browser.android || jQuery.browser.blackberry || jQuery.browser.ios || jQuery.browser.windowsMobile || jQuery.browser.operaMobile || jQuery.browser.kindle, jQuery.isMobile = jQuery.browser.mobile, jQuery.isTablet = jQuery.browser.mobile && jQuery(window).width() > 765, jQuery.isAndroidDefault = jQuery.browser.android && !/chrome/i.test(nAgt), ! function(a) {
    /iphone|ipod|ipad|android|ie|blackberry|fennec/.test(navigator.userAgent.toLowerCase());
    var b = "ontouchstart" in window || window.navigator && window.navigator.msPointerEnabled && window.MSGesture || window.DocumentTouch && document instanceof DocumentTouch || !1;
    a.simpleSlider = {
        defaults: {
            initialval: 0,
            scale: 100,
            orientation: "h",
            readonly: !1,
            callback: !1
        },
        events: {
            start: b ? "touchstart" : "mousedown",
            end: b ? "touchend" : "mouseup",
            move: b ? "touchmove" : "mousemove"
        },
        init: function(c) {
            return this.each(function() {
                var d = this,
                    e = a(d);
                e.addClass("simpleSlider"), d.opt = {}, a.extend(d.opt, a.simpleSlider.defaults, c), a.extend(d.opt, e.data());
                var f = "h" == d.opt.orientation ? "horizontal" : "vertical",
                    g = a("<div/>").addClass("level").addClass(f);
                e.prepend(g), d.level = g, e.css({
                    cursor: "default"
                }), "auto" == d.opt.scale && (d.opt.scale = a(d).outerWidth()), e.updateSliderVal(), d.opt.readonly || (e.on(a.simpleSlider.events.start, function(a) {
                    b && (a = a.changedTouches[0]), d.canSlide = !0, e.updateSliderVal(a), e.css({
                        cursor: "col-resize"
                    }), a.preventDefault(), a.stopPropagation()
                }), a(document).on(a.simpleSlider.events.move, function(c) {
                    b && (c = c.changedTouches[0]), d.canSlide && (a(document).css({
                        cursor: "default"
                    }), e.updateSliderVal(c), c.preventDefault(), c.stopPropagation())
                }).on(a.simpleSlider.events.end, function() {
                    a(document).css({
                        cursor: "auto"
                    }), d.canSlide = !1, e.css({
                        cursor: "auto"
                    })
                }))
            })
        },
        updateSliderVal: function(b) {
            function c(a, b) {
                return Math.floor(100 * a / b)
            }
            var d = this,
                e = d.get(0);
            e.opt.initialval = "number" == typeof e.opt.initialval ? e.opt.initialval : e.opt.initialval(e);
            var f = a(e).outerWidth(),
                g = a(e).outerHeight();
            e.x = "object" == typeof b ? b.clientX + document.body.scrollLeft - d.offset().left : "number" == typeof b ? b * f / e.opt.scale : e.opt.initialval * f / e.opt.scale, e.y = "object" == typeof b ? b.clientY + document.body.scrollTop - d.offset().top : "number" == typeof b ? (e.opt.scale - e.opt.initialval - b) * g / e.opt.scale : e.opt.initialval * g / e.opt.scale, e.y = d.outerHeight() - e.y, e.scaleX = e.x * e.opt.scale / f, e.scaleY = e.y * e.opt.scale / g, e.outOfRangeX = e.scaleX > e.opt.scale ? e.scaleX - e.opt.scale : e.scaleX < 0 ? e.scaleX : 0, e.outOfRangeY = e.scaleY > e.opt.scale ? e.scaleY - e.opt.scale : e.scaleY < 0 ? e.scaleY : 0, e.outOfRange = "h" == e.opt.orientation ? e.outOfRangeX : e.outOfRangeY, e.value = "undefined" != typeof b ? "h" == e.opt.orientation ? e.x >= d.outerWidth() ? e.opt.scale : e.x <= 0 ? 0 : e.scaleX : e.y >= d.outerHeight() ? e.opt.scale : e.y <= 0 ? 0 : e.scaleY : "h" == e.opt.orientation ? e.scaleX : e.scaleY, "h" == e.opt.orientation ? e.level.width(c(e.x, f) + "%") : e.level.height(c(e.y, g)), "function" == typeof e.opt.callback && e.opt.callback(e)
        }
    }, a.fn.simpleSlider = a.simpleSlider.init, a.fn.updateSliderVal = a.simpleSlider.updateSliderVal
}(jQuery), ! function(a) {
    a.mbCookie = {
        set: function(a, b, c, d) {
            b = JSON.stringify(b), c || (c = 7), d = d ? "; domain=" + d : "";
            var e, f = new Date;
            f.setTime(f.getTime() + 864e5 * c), e = "; expires=" + f.toGMTString(), document.cookie = a + "=" + b + e + "; path=/" + d
        },
        get: function(a) {
            for (var b = a + "=", c = document.cookie.split(";"), d = 0; d < c.length; d++) {
                for (var e = c[d];
                    " " == e.charAt(0);) e = e.substring(1, e.length);
                if (0 == e.indexOf(b)) return JSON.parse(e.substring(b.length, e.length))
            }
            return null
        },
        remove: function(b) {
            a.mbCookie.set(b, "", -1)
        }
    }, a.mbStorage = {
        set: function(a, b) {
            b = JSON.stringify(b), localStorage.setItem(a, b)
        },
        get: function(a) {
            return localStorage[a] ? JSON.parse(localStorage[a]) : null
        },
        remove: function(a) {
            a ? localStorage.removeItem(a) : localStorage.clear()
        }
    }
}(jQuery);
! function(a) {
    "use strict";

    function b(a) {
        return (a || "").toLowerCase()
    }
    var c = "2.1.6";
    a.fn.cycle = function(c) {
        var d;
        return 0 !== this.length || a.isReady ? this.each(function() {
            var d, e, f, g, h = a(this),
                i = a.fn.cycle.log;
            if (!h.data("cycle.opts")) {
                (h.data("cycle-log") === !1 || c && c.log === !1 || e && e.log === !1) && (i = a.noop), i("--c2 init--"), d = h.data();
                for (var j in d) d.hasOwnProperty(j) && /^cycle[A-Z]+/.test(j) && (g = d[j], f = j.match(/^cycle(.*)/)[1].replace(/^[A-Z]/, b), i(f + ":", g, "(" + typeof g + ")"), d[f] = g);
                e = a.extend({}, a.fn.cycle.defaults, d, c || {}), e.timeoutId = 0, e.paused = e.paused || !1, e.container = h, e._maxZ = e.maxZ, e.API = a.extend({
                    _container: h
                }, a.fn.cycle.API), e.API.log = i, e.API.trigger = function(a, b) {
                    return e.container.trigger(a, b), e.API
                }, h.data("cycle.opts", e), h.data("cycle.API", e.API), e.API.trigger("cycle-bootstrap", [e, e.API]), e.API.addInitialSlides(), e.API.preInitSlideshow(), e.slides.length && e.API.initSlideshow()
            }
        }) : (d = {
            s: this.selector,
            c: this.context
        }, a.fn.cycle.log("requeuing slideshow (dom not ready)"), a(function() {
            a(d.s, d.c).cycle(c)
        }), this)
    }, a.fn.cycle.API = {
        opts: function() {
            return this._container.data("cycle.opts")
        },
        addInitialSlides: function() {
            var b = this.opts(),
                c = b.slides;
            b.slideCount = 0, b.slides = a(), c = c.jquery ? c : b.container.find(c), b.random && c.sort(function() {
                return Math.random() - .5
            }), b.API.add(c)
        },
        preInitSlideshow: function() {
            var b = this.opts();
            b.API.trigger("cycle-pre-initialize", [b]);
            var c = a.fn.cycle.transitions[b.fx];
            c && a.isFunction(c.preInit) && c.preInit(b), b._preInitialized = !0
        },
        postInitSlideshow: function() {
            var b = this.opts();
            b.API.trigger("cycle-post-initialize", [b]);
            var c = a.fn.cycle.transitions[b.fx];
            c && a.isFunction(c.postInit) && c.postInit(b)
        },
        initSlideshow: function() {
            var b, c = this.opts(),
                d = c.container;
            c.API.calcFirstSlide(), "static" == c.container.css("position") && c.container.css("position", "relative"), a(c.slides[c.currSlide]).css({
                opacity: 1,
                display: "block",
                visibility: "visible"
            }), c.API.stackSlides(c.slides[c.currSlide], c.slides[c.nextSlide], !c.reverse), c.pauseOnHover && (c.pauseOnHover !== !0 && (d = a(c.pauseOnHover)), d.hover(function() {
                c.API.pause(!0)
            }, function() {
                c.API.resume(!0)
            })), c.timeout && (b = c.API.getSlideOpts(c.currSlide), c.API.queueTransition(b, b.timeout + c.delay)), c._initialized = !0, c.API.updateView(!0), c.API.trigger("cycle-initialized", [c]), c.API.postInitSlideshow()
        },
        pause: function(b) {
            var c = this.opts(),
                d = c.API.getSlideOpts(),
                e = c.hoverPaused || c.paused;
            b ? c.hoverPaused = !0 : c.paused = !0, e || (c.container.addClass("cycle-paused"), c.API.trigger("cycle-paused", [c]).log("cycle-paused"), d.timeout && (clearTimeout(c.timeoutId), c.timeoutId = 0, c._remainingTimeout -= a.now() - c._lastQueue, (c._remainingTimeout < 0 || isNaN(c._remainingTimeout)) && (c._remainingTimeout = void 0)))
        },
        resume: function(a) {
            var b = this.opts(),
                c = !b.hoverPaused && !b.paused;
            a ? b.hoverPaused = !1 : b.paused = !1, c || (b.container.removeClass("cycle-paused"), 0 === b.slides.filter(":animated").length && b.API.queueTransition(b.API.getSlideOpts(), b._remainingTimeout), b.API.trigger("cycle-resumed", [b, b._remainingTimeout]).log("cycle-resumed"))
        },
        add: function(b, c) {
            var d, e = this.opts(),
                f = e.slideCount,
                g = !1;
            "string" == a.type(b) && (b = a.trim(b)), a(b).each(function() {
                var b, d = a(this);
                c ? e.container.prepend(d) : e.container.append(d), e.slideCount++, b = e.API.buildSlideOpts(d), e.slides = c ? a(d).add(e.slides) : e.slides.add(d), e.API.initSlide(b, d, --e._maxZ), d.data("cycle.opts", b), e.API.trigger("cycle-slide-added", [e, b, d])
            }), e.API.updateView(!0), g = e._preInitialized && 2 > f && e.slideCount >= 1, g && (e._initialized ? e.timeout && (d = e.slides.length, e.nextSlide = e.reverse ? d - 1 : 1, e.timeoutId || e.API.queueTransition(e)) : e.API.initSlideshow())
        },
        calcFirstSlide: function() {
            var a, b = this.opts();
            a = parseInt(b.startingSlide || 0, 10), (a >= b.slides.length || 0 > a) && (a = 0), b.currSlide = a, b.reverse ? (b.nextSlide = a - 1, b.nextSlide < 0 && (b.nextSlide = b.slides.length - 1)) : (b.nextSlide = a + 1, b.nextSlide == b.slides.length && (b.nextSlide = 0))
        },
        calcNextSlide: function() {
            var a, b = this.opts();
            b.reverse ? (a = b.nextSlide - 1 < 0, b.nextSlide = a ? b.slideCount - 1 : b.nextSlide - 1, b.currSlide = a ? 0 : b.nextSlide + 1) : (a = b.nextSlide + 1 == b.slides.length, b.nextSlide = a ? 0 : b.nextSlide + 1, b.currSlide = a ? b.slides.length - 1 : b.nextSlide - 1)
        },
        calcTx: function(b, c) {
            var d, e = b;
            return e._tempFx ? d = a.fn.cycle.transitions[e._tempFx] : c && e.manualFx && (d = a.fn.cycle.transitions[e.manualFx]), d || (d = a.fn.cycle.transitions[e.fx]), e._tempFx = null, this.opts()._tempFx = null, d || (d = a.fn.cycle.transitions.fade, e.API.log('Transition "' + e.fx + '" not found.  Using fade.')), d
        },
        prepareTx: function(a, b) {
            var c, d, e, f, g, h = this.opts();
            return h.slideCount < 2 ? void(h.timeoutId = 0) : (!a || h.busy && !h.manualTrump || (h.API.stopTransition(), h.busy = !1, clearTimeout(h.timeoutId), h.timeoutId = 0), void(h.busy || (0 !== h.timeoutId || a) && (d = h.slides[h.currSlide], e = h.slides[h.nextSlide], f = h.API.getSlideOpts(h.nextSlide), g = h.API.calcTx(f, a), h._tx = g, a && void 0 !== f.manualSpeed && (f.speed = f.manualSpeed), h.nextSlide != h.currSlide && (a || !h.paused && !h.hoverPaused && h.timeout) ? (h.API.trigger("cycle-before", [f, d, e, b]), g.before && g.before(f, d, e, b), c = function() {
                h.busy = !1, h.container.data("cycle.opts") && (g.after && g.after(f, d, e, b), h.API.trigger("cycle-after", [f, d, e, b]), h.API.queueTransition(f), h.API.updateView(!0))
            }, h.busy = !0, g.transition ? g.transition(f, d, e, b, c) : h.API.doTransition(f, d, e, b, c), h.API.calcNextSlide(), h.API.updateView()) : h.API.queueTransition(f))))
        },
        doTransition: function(b, c, d, e, f) {
            var g = b,
                h = a(c),
                i = a(d),
                j = function() {
                    i.animate(g.animIn || {
                        opacity: 1
                    }, g.speed, g.easeIn || g.easing, f)
                };
            i.css(g.cssBefore || {}), h.animate(g.animOut || {}, g.speed, g.easeOut || g.easing, function() {
                h.css(g.cssAfter || {}), g.sync || j()
            }), g.sync && j()
        },
        queueTransition: function(b, c) {
            var d = this.opts(),
                e = void 0 !== c ? c : b.timeout;
            return 0 === d.nextSlide && 0 === --d.loop ? (d.API.log("terminating; loop=0"), d.timeout = 0, e ? setTimeout(function() {
                d.API.trigger("cycle-finished", [d])
            }, e) : d.API.trigger("cycle-finished", [d]), void(d.nextSlide = d.currSlide)) : void 0 !== d.continueAuto && (d.continueAuto === !1 || a.isFunction(d.continueAuto) && d.continueAuto() === !1) ? (d.API.log("terminating automatic transitions"), d.timeout = 0, void(d.timeoutId && clearTimeout(d.timeoutId))) : void(e && (d._lastQueue = a.now(), void 0 === c && (d._remainingTimeout = b.timeout), d.paused || d.hoverPaused || (d.timeoutId = setTimeout(function() {
                d.API.prepareTx(!1, !d.reverse)
            }, e))))
        },
        stopTransition: function() {
            var a = this.opts();
            a.slides.filter(":animated").length && (a.slides.stop(!1, !0), a.API.trigger("cycle-transition-stopped", [a])), a._tx && a._tx.stopTransition && a._tx.stopTransition(a)
        },
        advanceSlide: function(a) {
            var b = this.opts();
            return clearTimeout(b.timeoutId), b.timeoutId = 0, b.nextSlide = b.currSlide + a, b.nextSlide < 0 ? b.nextSlide = b.slides.length - 1 : b.nextSlide >= b.slides.length && (b.nextSlide = 0), b.API.prepareTx(!0, a >= 0), !1
        },
        buildSlideOpts: function(c) {
            var d, e, f = this.opts(),
                g = c.data() || {};
            for (var h in g) g.hasOwnProperty(h) && /^cycle[A-Z]+/.test(h) && (d = g[h], e = h.match(/^cycle(.*)/)[1].replace(/^[A-Z]/, b), f.API.log("[" + (f.slideCount - 1) + "]", e + ":", d, "(" + typeof d + ")"), g[e] = d);
            g = a.extend({}, a.fn.cycle.defaults, f, g), g.slideNum = f.slideCount;
            try {
                delete g.API, delete g.slideCount, delete g.currSlide, delete g.nextSlide, delete g.slides
            } catch (i) {}
            return g
        },
        getSlideOpts: function(b) {
            var c = this.opts();
            void 0 === b && (b = c.currSlide);
            var d = c.slides[b],
                e = a(d).data("cycle.opts");
            return a.extend({}, c, e)
        },
        initSlide: function(b, c, d) {
            var e = this.opts();
            c.css(b.slideCss || {}), d > 0 && c.css("zIndex", d), isNaN(b.speed) && (b.speed = a.fx.speeds[b.speed] || a.fx.speeds._default), b.sync || (b.speed = b.speed / 2), c.addClass(e.slideClass)
        },
        updateView: function(a, b) {
            var c = this.opts();
            if (c._initialized) {
                var d = c.API.getSlideOpts(),
                    e = c.slides[c.currSlide];
                !a && b !== !0 && (c.API.trigger("cycle-update-view-before", [c, d, e]), c.updateView < 0) || (c.slideActiveClass && c.slides.removeClass(c.slideActiveClass).eq(c.currSlide).addClass(c.slideActiveClass), a && c.hideNonActive && c.slides.filter(":not(." + c.slideActiveClass + ")").css("visibility", "hidden"), 0 === c.updateView && setTimeout(function() {
                    c.API.trigger("cycle-update-view", [c, d, e, a])
                }, d.speed / (c.sync ? 2 : 1)), 0 !== c.updateView && c.API.trigger("cycle-update-view", [c, d, e, a]), a && c.API.trigger("cycle-update-view-after", [c, d, e]))
            }
        },
        getComponent: function(b) {
            var c = this.opts(),
                d = c[b];
            return "string" == typeof d ? /^\s*[\>|\+|~]/.test(d) ? c.container.find(d) : a(d) : d.jquery ? d : a(d)
        },
        stackSlides: function(b, c, d) {
            var e = this.opts();
            b || (b = e.slides[e.currSlide], c = e.slides[e.nextSlide], d = !e.reverse), a(b).css("zIndex", e.maxZ);
            var f, g = e.maxZ - 2,
                h = e.slideCount;
            if (d) {
                for (f = e.currSlide + 1; h > f; f++) a(e.slides[f]).css("zIndex", g--);
                for (f = 0; f < e.currSlide; f++) a(e.slides[f]).css("zIndex", g--)
            } else {
                for (f = e.currSlide - 1; f >= 0; f--) a(e.slides[f]).css("zIndex", g--);
                for (f = h - 1; f > e.currSlide; f--) a(e.slides[f]).css("zIndex", g--)
            }
            a(c).css("zIndex", e.maxZ - 1)
        },
        getSlideIndex: function(a) {
            return this.opts().slides.index(a)
        }
    }, a.fn.cycle.log = function() {
        window.console && console.log && console.log("[cycle2] " + Array.prototype.join.call(arguments, " "))
    }, a.fn.cycle.version = function() {
        return "Cycle2: " + c
    }, a.fn.cycle.transitions = {
        custom: {},
        none: {
            before: function(a, b, c, d) {
                a.API.stackSlides(c, b, d), a.cssBefore = {
                    opacity: 1,
                    visibility: "visible",
                    display: "block"
                }
            }
        },
        fade: {
            before: function(b, c, d, e) {
                var f = b.API.getSlideOpts(b.nextSlide).slideCss || {};
                b.API.stackSlides(c, d, e), b.cssBefore = a.extend(f, {
                    opacity: 0,
                    visibility: "visible",
                    display: "block"
                }), b.animIn = {
                    opacity: 1
                }, b.animOut = {
                    opacity: 0
                }
            }
        },
        fadeout: {
            before: function(b, c, d, e) {
                var f = b.API.getSlideOpts(b.nextSlide).slideCss || {};
                b.API.stackSlides(c, d, e), b.cssBefore = a.extend(f, {
                    opacity: 1,
                    visibility: "visible",
                    display: "block"
                }), b.animOut = {
                    opacity: 0
                }
            }
        },
        scrollHorz: {
            before: function(a, b, c, d) {
                a.API.stackSlides(b, c, d);
                var e = a.container.css("overflow", "hidden").width();
                a.cssBefore = {
                    left: d ? e : -e,
                    top: 0,
                    opacity: 1,
                    visibility: "visible",
                    display: "block"
                }, a.cssAfter = {
                    zIndex: a._maxZ - 2,
                    left: 0
                }, a.animIn = {
                    left: 0
                }, a.animOut = {
                    left: d ? -e : e
                }
            }
        }
    }, a.fn.cycle.defaults = {
        allowWrap: !0,
        autoSelector: ".cycle-slideshow[data-cycle-auto-init!=false]",
        delay: 0,
        easing: null,
        fx: "fade",
        hideNonActive: !0,
        loop: 0,
        manualFx: void 0,
        manualSpeed: void 0,
        manualTrump: !0,
        maxZ: 100,
        pauseOnHover: !1,
        reverse: !1,
        slideActiveClass: "cycle-slide-active",
        slideClass: "cycle-slide",
        slideCss: {
            position: "absolute",
            top: 0,
            left: 0
        },
        slides: "> img",
        speed: 500,
        startingSlide: 0,
        sync: !0,
        timeout: 4e3,
        updateView: 0
    }, a(document).ready(function() {
        a(a.fn.cycle.defaults.autoSelector).cycle()
    })
}(jQuery), /*! Cycle2 autoheight plugin; Copyright (c) M.Alsup, 2012; version: 20130913 */
function(a) {
    "use strict";

    function b(b, d) {
        var e, f, g, h = d.autoHeight;
        if ("container" == h) f = a(d.slides[d.currSlide]).outerHeight(), d.container.height(f);
        else if (d._autoHeightRatio) d.container.height(d.container.width() / d._autoHeightRatio);
        else if ("calc" === h || "number" == a.type(h) && h >= 0) {
            if (g = "calc" === h ? c(b, d) : h >= d.slides.length ? 0 : h, g == d._sentinelIndex) return;
            d._sentinelIndex = g, d._sentinel && d._sentinel.remove(), e = a(d.slides[g].cloneNode(!0)), e.removeAttr("id name rel").find("[id],[name],[rel]").removeAttr("id name rel"), e.css({
                position: "static",
                visibility: "hidden",
                display: "block"
            }).prependTo(d.container).addClass("cycle-sentinel cycle-slide").removeClass("cycle-slide-active"), e.find("*").css("visibility", "hidden"), d._sentinel = e
        }
    }

    function c(b, c) {
        var d = 0,
            e = -1;
        return c.slides.each(function(b) {
            var c = a(this).height();
            c > e && (e = c, d = b)
        }), d
    }

    function d(b, c, d, e) {
        var f = a(e).outerHeight();
        c.container.animate({
            height: f
        }, c.autoHeightSpeed, c.autoHeightEasing)
    }

    function e(c, f) {
        f._autoHeightOnResize && (a(window).off("resize orientationchange", f._autoHeightOnResize), f._autoHeightOnResize = null), f.container.off("cycle-slide-added cycle-slide-removed", b), f.container.off("cycle-destroyed", e), f.container.off("cycle-before", d), f._sentinel && (f._sentinel.remove(), f._sentinel = null)
    }
    a.extend(a.fn.cycle.defaults, {
        autoHeight: 0,
        autoHeightSpeed: 250,
        autoHeightEasing: null
    }), a(document).on("cycle-initialized", function(c, f) {
        function g() {
            b(c, f)
        }
        var h, i = f.autoHeight,
            j = a.type(i),
            k = null;
        ("string" === j || "number" === j) && (f.container.on("cycle-slide-added cycle-slide-removed", b), f.container.on("cycle-destroyed", e), "container" == i ? f.container.on("cycle-before", d) : "string" === j && /\d+\:\d+/.test(i) && (h = i.match(/(\d+)\:(\d+)/), h = h[1] / h[2], f._autoHeightRatio = h), "number" !== j && (f._autoHeightOnResize = function() {
            clearTimeout(k), k = setTimeout(g, 50)
        }, a(window).on("resize orientationchange", f._autoHeightOnResize)), setTimeout(g, 30))
    })
}(jQuery), /*! caption plugin for Cycle2;  version: 20130306 */
function(a) {
    "use strict";
    a.extend(a.fn.cycle.defaults, {
        caption: "> .cycle-caption",
        captionTemplate: "{{slideNum}} / {{slideCount}}",
        overlay: "> .cycle-overlay",
        overlayTemplate: "<div>{{title}}</div><div>{{desc}}</div>",
        captionModule: "caption"
    }), a(document).on("cycle-update-view", function(b, c, d, e) {
        if ("caption" === c.captionModule) {
            a.each(["caption", "overlay"], function() {
                var a = this,
                    b = d[a + "Template"],
                    f = c.API.getComponent(a);
                f.length && b ? (f.html(c.API.tmpl(b, d, c, e)), f.show()) : f.hide()
            })
        }
    }), a(document).on("cycle-destroyed", function(b, c) {
        var d;
        a.each(["caption", "overlay"], function() {
            var a = this,
                b = c[a + "Template"];
            c[a] && b && (d = c.API.getComponent("caption"), d.empty())
        })
    })
}(jQuery), /*! command plugin for Cycle2;  version: 20140415 */
function(a) {
    "use strict";
    var b = a.fn.cycle;
    a.fn.cycle = function(c) {
        var d, e, f, g = a.makeArray(arguments);
        return "number" == a.type(c) ? this.cycle("goto", c) : "string" == a.type(c) ? this.each(function() {
            var h;
            return d = c, f = a(this).data("cycle.opts"), void 0 === f ? void b.log('slideshow must be initialized before sending commands; "' + d + '" ignored') : (d = "goto" == d ? "jump" : d, e = f.API[d], a.isFunction(e) ? (h = a.makeArray(g), h.shift(), e.apply(f.API, h)) : void b.log("unknown command: ", d))
        }) : b.apply(this, arguments)
    }, a.extend(a.fn.cycle, b), a.extend(b.API, {
        next: function() {
            var a = this.opts();
            if (!a.busy || a.manualTrump) {
                var b = a.reverse ? -1 : 1;
                a.allowWrap === !1 && a.currSlide + b >= a.slideCount || (a.API.advanceSlide(b), a.API.trigger("cycle-next", [a]).log("cycle-next"))
            }
        },
        prev: function() {
            var a = this.opts();
            if (!a.busy || a.manualTrump) {
                var b = a.reverse ? 1 : -1;
                a.allowWrap === !1 && a.currSlide + b < 0 || (a.API.advanceSlide(b), a.API.trigger("cycle-prev", [a]).log("cycle-prev"))
            }
        },
        destroy: function() {
            this.stop();
            var b = this.opts(),
                c = a.isFunction(a._data) ? a._data : a.noop;
            clearTimeout(b.timeoutId), b.timeoutId = 0, b.API.stop(), b.API.trigger("cycle-destroyed", [b]).log("cycle-destroyed"), b.container.removeData(), c(b.container[0], "parsedAttrs", !1), b.retainStylesOnDestroy || (b.container.removeAttr("style"), b.slides.removeAttr("style"), b.slides.removeClass(b.slideActiveClass)), b.slides.each(function() {
                var d = a(this);
                d.removeData(), d.removeClass(b.slideClass), c(this, "parsedAttrs", !1)
            })
        },
        jump: function(a, b) {
            var c, d = this.opts();
            if (!d.busy || d.manualTrump) {
                var e = parseInt(a, 10);
                if (isNaN(e) || 0 > e || e >= d.slides.length) return void d.API.log("goto: invalid slide index: " + e);
                if (e == d.currSlide) return void d.API.log("goto: skipping, already on slide", e);
                d.nextSlide = e, clearTimeout(d.timeoutId), d.timeoutId = 0, d.API.log("goto: ", e, " (zero-index)"), c = d.currSlide < d.nextSlide, d._tempFx = b, d.API.prepareTx(!0, c)
            }
        },
        stop: function() {
            var b = this.opts(),
                c = b.container;
            clearTimeout(b.timeoutId), b.timeoutId = 0, b.API.stopTransition(), b.pauseOnHover && (b.pauseOnHover !== !0 && (c = a(b.pauseOnHover)), c.off("mouseenter mouseleave")), b.API.trigger("cycle-stopped", [b]).log("cycle-stopped")
        },
        reinit: function() {
            var a = this.opts();
            a.API.destroy(), a.container.cycle()
        },
        remove: function(b) {
            for (var c, d, e = this.opts(), f = [], g = 1, h = 0; h < e.slides.length; h++) c = e.slides[h], h == b ? d = c : (f.push(c), a(c).data("cycle.opts").slideNum = g, g++);
            d && (e.slides = a(f), e.slideCount--, a(d).remove(), b == e.currSlide ? e.API.advanceSlide(1) : b < e.currSlide ? e.currSlide-- : e.currSlide++, e.API.trigger("cycle-slide-removed", [e, b, d]).log("cycle-slide-removed"), e.API.updateView())
        }
    }), a(document).on("click.cycle", "[data-cycle-cmd]", function(b) {
        b.preventDefault();
        var c = a(this),
            d = c.data("cycle-cmd"),
            e = c.data("cycle-context") || ".cycle-slideshow";
        a(e).cycle(d, c.data("cycle-arg"))
    })
}(jQuery), /*! hash plugin for Cycle2;  version: 20130905 */
function(a) {
    "use strict";

    function b(b, c) {
        var d;
        return b._hashFence ? void(b._hashFence = !1) : (d = window.location.hash.substring(1), void b.slides.each(function(e) {
            if (a(this).data("cycle-hash") == d) {
                if (c === !0) b.startingSlide = e;
                else {
                    var f = b.currSlide < e;
                    b.nextSlide = e, b.API.prepareTx(!0, f)
                }
                return !1
            }
        }))
    }
    a(document).on("cycle-pre-initialize", function(c, d) {
        b(d, !0), d._onHashChange = function() {
            b(d, !1)
        }, a(window).on("hashchange", d._onHashChange)
    }), a(document).on("cycle-update-view", function(a, b, c) {
        c.hash && "#" + c.hash != window.location.hash && (b._hashFence = !0, window.location.hash = c.hash)
    }), a(document).on("cycle-destroyed", function(b, c) {
        c._onHashChange && a(window).off("hashchange", c._onHashChange)
    })
}(jQuery), /*! loader plugin for Cycle2;  version: 20131121 */
function(a) {
    "use strict";
    a.extend(a.fn.cycle.defaults, {
        loader: !1
    }), a(document).on("cycle-bootstrap", function(b, c) {
        function d(b, d) {
            function f(b) {
                var f;
                "wait" == c.loader ? (h.push(b), 0 === j && (h.sort(g), e.apply(c.API, [h, d]), c.container.removeClass("cycle-loading"))) : (f = a(c.slides[c.currSlide]), e.apply(c.API, [b, d]), f.show(), c.container.removeClass("cycle-loading"))
            }

            function g(a, b) {
                return a.data("index") - b.data("index")
            }
            var h = [];
            if ("string" == a.type(b)) b = a.trim(b);
            else if ("array" === a.type(b))
                for (var i = 0; i < b.length; i++) b[i] = a(b[i])[0];
            b = a(b);
            var j = b.length;
            j && (b.css("visibility", "hidden").appendTo("body").each(function(b) {
                function g() {
                    0 === --i && (--j, f(k))
                }
                var i = 0,
                    k = a(this),
                    l = k.is("img") ? k : k.find("img");
                return k.data("index", b), l = l.filter(":not(.cycle-loader-ignore)").filter(':not([src=""])'), l.length ? (i = l.length, void l.each(function() {
                    this.complete ? g() : a(this).load(function() {
                        g()
                    }).on("error", function() {
                        0 === --i && (c.API.log("slide skipped; img not loaded:", this.src), 0 === --j && "wait" == c.loader && e.apply(c.API, [h, d]))
                    })
                })) : (--j, void h.push(k))
            }), j && c.container.addClass("cycle-loading"))
        }
        var e;
        c.loader && (e = c.API.add, c.API.add = d)
    })
}(jQuery), /*! pager plugin for Cycle2;  version: 20140415 */
function(a) {
    "use strict";

    function b(b, c, d) {
        var e, f = b.API.getComponent("pager");
        f.each(function() {
            var f = a(this);
            if (c.pagerTemplate) {
                var g = b.API.tmpl(c.pagerTemplate, c, b, d[0]);
                e = a(g).appendTo(f)
            } else e = f.children().eq(b.slideCount - 1);
            e.on(b.pagerEvent, function(a) {
                b.pagerEventBubble || a.preventDefault(), b.API.page(f, a.currentTarget)
            })
        })
    }

    function c(a, b) {
        var c = this.opts();
        if (!c.busy || c.manualTrump) {
            var d = a.children().index(b),
                e = d,
                f = c.currSlide < e;
            c.currSlide != e && (c.nextSlide = e, c._tempFx = c.pagerFx, c.API.prepareTx(!0, f), c.API.trigger("cycle-pager-activated", [c, a, b]))
        }
    }
    a.extend(a.fn.cycle.defaults, {
        pager: "> .cycle-pager",
        pagerActiveClass: "cycle-pager-active",
        pagerEvent: "click.cycle",
        pagerEventBubble: void 0,
        pagerTemplate: "<span>&bull;</span>"
    }), a(document).on("cycle-bootstrap", function(a, c, d) {
        d.buildPagerLink = b
    }), a(document).on("cycle-slide-added", function(a, b, d, e) {
        b.pager && (b.API.buildPagerLink(b, d, e), b.API.page = c)
    }), a(document).on("cycle-slide-removed", function(b, c, d) {
        if (c.pager) {
            var e = c.API.getComponent("pager");
            e.each(function() {
                var b = a(this);
                a(b.children()[d]).remove()
            })
        }
    }), a(document).on("cycle-update-view", function(b, c) {
        var d;
        c.pager && (d = c.API.getComponent("pager"), d.each(function() {
            a(this).children().removeClass(c.pagerActiveClass).eq(c.currSlide).addClass(c.pagerActiveClass)
        }))
    }), a(document).on("cycle-destroyed", function(a, b) {
        var c = b.API.getComponent("pager");
        c && (c.children().off(b.pagerEvent), b.pagerTemplate && c.empty())
    })
}(jQuery), /*! prevnext plugin for Cycle2;  version: 20140408 */
function(a) {
    "use strict";
    a.extend(a.fn.cycle.defaults, {
        next: "> .cycle-next",
        nextEvent: "click.cycle",
        disabledClass: "disabled",
        prev: "> .cycle-prev",
        prevEvent: "click.cycle",
        swipe: !1
    }), a(document).on("cycle-initialized", function(a, b) {
        if (b.API.getComponent("next").on(b.nextEvent, function(a) {
                a.preventDefault(), b.API.next()
            }), b.API.getComponent("prev").on(b.prevEvent, function(a) {
                a.preventDefault(), b.API.prev()
            }), b.swipe) {
            var c = b.swipeVert ? "swipeUp.cycle" : "swipeLeft.cycle swipeleft.cycle",
                d = b.swipeVert ? "swipeDown.cycle" : "swipeRight.cycle swiperight.cycle";
            b.container.on(c, function() {
                b._tempFx = b.swipeFx, b.API.next()
            }), b.container.on(d, function() {
                b._tempFx = b.swipeFx, b.API.prev()
            })
        }
    }), a(document).on("cycle-update-view", function(a, b) {
        if (!b.allowWrap) {
            var c = b.disabledClass,
                d = b.API.getComponent("next"),
                e = b.API.getComponent("prev"),
                f = b._prevBoundry || 0,
                g = void 0 !== b._nextBoundry ? b._nextBoundry : b.slideCount - 1;
            b.currSlide == g ? d.addClass(c).prop("disabled", !0) : d.removeClass(c).prop("disabled", !1), b.currSlide === f ? e.addClass(c).prop("disabled", !0) : e.removeClass(c).prop("disabled", !1)
        }
    }), a(document).on("cycle-destroyed", function(a, b) {
        b.API.getComponent("prev").off(b.nextEvent), b.API.getComponent("next").off(b.prevEvent), b.container.off("swipeleft.cycle swiperight.cycle swipeLeft.cycle swipeRight.cycle swipeUp.cycle swipeDown.cycle")
    })
}(jQuery), /*! progressive loader plugin for Cycle2;  version: 20130315 */
function(a) {
    "use strict";
    a.extend(a.fn.cycle.defaults, {
        progressive: !1
    }), a(document).on("cycle-pre-initialize", function(b, c) {
        if (c.progressive) {
            var d, e, f = c.API,
                g = f.next,
                h = f.prev,
                i = f.prepareTx,
                j = a.type(c.progressive);
            if ("array" == j) d = c.progressive;
            else if (a.isFunction(c.progressive)) d = c.progressive(c);
            else if ("string" == j) {
                if (e = a(c.progressive), d = a.trim(e.html()), !d) return;
                if (/^(\[)/.test(d)) try {
                    d = a.parseJSON(d)
                } catch (k) {
                    return void f.log("error parsing progressive slides", k)
                } else d = d.split(new RegExp(e.data("cycle-split") || "\n")), d[d.length - 1] || d.pop()
            }
            i && (f.prepareTx = function(a, b) {
                var e, f;
                return a || 0 === d.length ? void i.apply(c.API, [a, b]) : void(b && c.currSlide == c.slideCount - 1 ? (f = d[0], d = d.slice(1), c.container.one("cycle-slide-added", function(a, b) {
                    setTimeout(function() {
                        b.API.advanceSlide(1)
                    }, 50)
                }), c.API.add(f)) : b || 0 !== c.currSlide ? i.apply(c.API, [a, b]) : (e = d.length - 1, f = d[e], d = d.slice(0, e), c.container.one("cycle-slide-added", function(a, b) {
                    setTimeout(function() {
                        b.currSlide = 1, b.API.advanceSlide(-1)
                    }, 50)
                }), c.API.add(f, !0)))
            }), g && (f.next = function() {
                var a = this.opts();
                if (d.length && a.currSlide == a.slideCount - 1) {
                    var b = d[0];
                    d = d.slice(1), a.container.one("cycle-slide-added", function(a, b) {
                        g.apply(b.API), b.container.removeClass("cycle-loading")
                    }), a.container.addClass("cycle-loading"), a.API.add(b)
                } else g.apply(a.API)
            }), h && (f.prev = function() {
                var a = this.opts();
                if (d.length && 0 === a.currSlide) {
                    var b = d.length - 1,
                        c = d[b];
                    d = d.slice(0, b), a.container.one("cycle-slide-added", function(a, b) {
                        b.currSlide = 1, b.API.advanceSlide(-1), b.container.removeClass("cycle-loading")
                    }), a.container.addClass("cycle-loading"), a.API.add(c, !0)
                } else h.apply(a.API)
            })
        }
    })
}(jQuery),
function(a) {
    "use strict";
    a.extend(a.fn.cycle.defaults, {
        tmplRegex: "{{((.)?.*?)}}"
    }), a.extend(a.fn.cycle.API, {
        tmpl: function(b, c) {
            var d = new RegExp(c.tmplRegex || a.fn.cycle.defaults.tmplRegex, "g"),
                e = a.makeArray(arguments);
            return e.shift(), b.replace(d, function(b, c) {
                var d, f, g, h, i = c.split(".");
                for (d = 0; d < e.length; d++)
                    if (g = e[d]) {
                        if (i.length > 1)
                            for (h = g, f = 0; f < i.length; f++) g = h, h = h[i[f]] || c;
                        else h = g[c];
                        if (a.isFunction(h)) return h.apply(g, e);
                        if (void 0 !== h && null !== h && h != c) return h
                    }
                return c
            })
        }
    })
}(jQuery);
! function(a) {
    "use strict";

    function b(a, b, c) {
        if (a && c.style.filter) {
            b._filter = c.style.filter;
            try {
                c.style.removeAttribute("filter")
            } catch (d) {}
        } else !a && b._filter && (c.style.filter = b._filter)
    }
    a.extend(a.fn.cycle.transitions, {
        fade: {
            before: function(c, d, e, f) {
                var g = c.API.getSlideOpts(c.nextSlide).slideCss || {};
                c.API.stackSlides(d, e, f), c.cssBefore = a.extend(g, {
                    opacity: 0,
                    visibility: "visible",
                    display: "block"
                }), c.animIn = {
                    opacity: 1
                }, c.animOut = {
                    opacity: 0
                }, b(!0, c, e)
            },
            after: function(a, c, d) {
                b(!1, a, d)
            }
        },
        fadeout: {
            before: function(c, d, e, f) {
                var g = c.API.getSlideOpts(c.nextSlide).slideCss || {};
                c.API.stackSlides(d, e, f), c.cssAfter = a.extend(g, {
                    opacity: 0,
                    visibility: "hidden"
                }), c.cssBefore = a.extend(g, {
                    opacity: 1,
                    visibility: "visible",
                    display: "block"
                }), c.animOut = {
                    opacity: 0
                }, b(!0, c, e)
            },
            after: function(a, c, d) {
                b(!1, a, d)
            }
        }
    })
}(jQuery);
(function(e) {
    "use strict";
    e.fn.cycle.transitions.scrollVert = {
        before: function(e, i, t, n) {
            e.API.stackSlides(e, i, t, n);
            var s = e.container.css("overflow", "hidden").height();
            e.cssBefore = {
                top: n ? -s : s,
                left: 0,
                opacity: 1,
                display: "block",
                visibility: "visible"
            }, e.animIn = {
                top: 0
            }, e.animOut = {
                top: n ? s : -s
            }
        }
    }
})(jQuery);
0
