/*************************************
*** ┌┈┈┈┈┈┈┈┈┈┈┈┈┈┐ ***
*** ┊  Powered By ChuKeer.com  ┊ ***
*** ┊  Last Modify 2012-12-01  ┊ ***
*** └┈┈┈┈┈┈┈┈┈┈┈┈┈┘ ***
*** ┌┈┈┈┈┈┈┈┈┈┈┈┈┈┐ ***
*** ┊Version:jquery.rating.1.01┊ ***
*** └┈┈┈┈┈┈┈┈┈┈┈┈┈┘ ***
*** ┌┈┈┈┈┈┈┈┈┈┈┈┈┈┐ ***
*** ┊mahongtao_2000@hotmail.com┊ ***
*** └┈┈┈┈┈┈┈┈┈┈┈┈┈┘ ***
*** ┌┈┈┈┈┈┈┈┈┈┈┈┈┈┐ ***
*** ┊Modified By afsharm       ┊ ***
*** ┊(Afshar Mohebbi)          ┊ ***
*** ┊2014-03-04                ┊ ***
*** ┊http://afsharm.com/       ┊ ***
*** ┊afshar.mohebbi@gmail.com  ┊ ***
*** └┈┈┈┈┈┈┈┈┈┈┈┈┈┘ ***
*************************************/

(function ($) {
    $.fn.rating = function (options) {
        var settings = $.extend(
            {
                rateEnd: function (value) { }
            }, options);

        function setRating(e, ul) {
            var i = parseInt(e.val());
            if (!i) { i = 0; }

            ul.find('a').removeAttr('class');
            ul.find('a:lt(' + i + ')').attr('class', 'full');
        }

        this.each(function () {
            var e = $(this);
            var c = parseInt(e.attr("class").match(/rating\d+/)[0].replace('rating', ''));
            var m = e.attr("class").match(/rating-size-\w+/);

            var rs = "";
            if (m !== null)
                rs = m[0].replace('rating-size', '');

            if (rs == "-normal") {
                rs = "";
            }

            var coef = 20;

            if (rs == "-medium") {
                coef = 15;
            }

            if (rs == "-small") {
                coef = 10;
            }

            var ul = $('<ul class="rating' + rs + '"></ul>').insertAfter(e).width(c * coef + 'px');

            if (c > 0) {
                for (k = 0; k < c; k++) {
                    ul.append('<li><a href="javascript:void(0);" title="' + (k + 1) + '">' + (k + 1) + '</a></li>')
                }
            }

            if (e.prop('readonly')) {
                var i = parseInt(e.val());

                if (!i) { i = 0; }

                ul.find('a').attr('title', i + ' / ' + c);
            }
            else {
                ul.find('a').each(function (index, link) {
                    var link = $(link);

                    link.hover(function () {
                        ul.find('a').removeAttr('class');
                        ul.find('a:lt(' + (index + 1) + ')').attr('class', 'hover');

                    }, function () {
                        setRating(e, ul);
                    });

                    link.click(function () {
                        e.val(index + 1);

                        setRating(e, ul);

                        settings.rateEnd(index + 1);
                    });
                });
            }

            setRating(e, ul);

            e.hide();
        });

        return this;
    }

})(jQuery);