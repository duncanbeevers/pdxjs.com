/*jslint browser:true */
/*globals jQuery */

if (typeof Object.create !== 'function') {
    Object.create = function(o) {
        var F = function() {};
        F.prototype = o;
        return new F();
    };
}

var Calagator = {
    create: function(calendar_link) {
                var calendar = Object.create(this);
                
            },


};

(function($) {

    var load_calendar = function(calendar_link) {
        calendar_link = $(calendar_link);
        var calendar_address = calendar_link.attr('href');

        $.getJSON(calendar_address + '&callback=?',
            function(events) {
                var calendar = calendar_link.replaceWith('<div class="calendar"></div>');
                calendar = $('div.calendar');
                $.each(events, function(i, item) {
                    console.log(item);
                    var start_time = new Date(item.start_time);
                    var end_time   = new Date(item.end_time);
                    var now        = new Date();

                    var summary,
                        formatted_start_time,
                        formatted_end_time,
                        start_and_end,
                        venue,
                        description;
                    if (start_time >= now) {
                        summary = '<h3 class="summary title">' + item.title + '</h3>';
                        formatted_start_time = '<abbr class="dtstart" title="' + start_time + '">' + start_time.strftime('%A, %B %d from %I:%M %p') + '</abbr>';
                        formatted_end_time = '<abbr class="dtend" title="' + end_time + '">' + end_time.strftime('%I:%M') + '</abbr>';
                        start_and_end = '<span class="date">' + formatted_start_time + ' &ndash; ' + formatted_end_time + '</span>';
                        venue = '<a rel="venue" type="application/json" href="' + item.venue_id + '" />';
                        description = '<p class="description"' + item.description + '</p>';

                        calendar.append('<div class="vevent">' + summary + start_and_end + venue + description + '</div>');
                    }
                });
            });

    };

    var load_venue = function(venue_link) {

    };

    $(document).ready(function() {
    
        $('a[rel=calendar][type=application/json]').each(function(i, e) { load_calendar(e); });
    
    });

})(jQuery);
