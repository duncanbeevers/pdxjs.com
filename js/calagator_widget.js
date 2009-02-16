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
  activate_calendars: function() {
                        var that = this;
                        jQuery('a[rel=calendar][type=application/json]').each(function(i, e) { that.create(e); });
                      },

  create: function(calendar_link) {
            var calendar = Object.create(this);
            alert('creating');

            calendar.href = calendar_link.attr('href');
            calendar.container = jQuery(calendar_link).replaceWith('<div class="calendar"></div>');
            calendar.container = jQuery('div.calendar');
            calendar.events = [];

            jQuery.getJSON(calendar.href + '&callback=?',
              function(events) {
                jQuery.each(events, function(i, item) {
                  calendar.Item.create(item, calendar);
                });
              });
          },

  Item: {
    create: function(data, calendar) {
              var item = Object.create(this),
                  start_time = new Date(data.start_time),
                  now = new Date();
              if (start_time > now) {
                item.item = data;
                item.calendar = calendar;
                item.calendar.container.append('<div class="vevent">' + item.summary() + item.start_and_end() + item.venue() + item.description() + '</div>');
                this.calendar.events.push(this);
              }
            },
    summary: function() {
               return '<h3 class="summary title">' + this.item.title + '</h3>';
             },
    start_time: function() {
                  var pretty_time = (new Date(this.item.start_time)).strftime('%A, %B %d from %I:%M %p');
                  return '<abbr class="dtstart" title="' + this.iso8601(this.item.start_time) + '">' + pretty_time + '</abbr>';
                },
    end_time: function() {
                var pretty_time = (new Date(this.item.end_time)).strftime('%I:%M');
                return '<abbr class="dtend" title="' + this.iso8601(this.item.end_time) + '">' + pretty_time + '</abbr>';
              },
    start_and_end: function() {
                     return '<span class="date">' + this.start_time() + ' &ndash; ' + this.end_time() + '</span>';
                   },
    venue: function() {
             return '<a rel="venue" type="application/json" href="' + this.item.venue_id + '" />';
           },
    description: function() {
                   return '<p class="description">' + this.item.description + '</p>';
                 },
    iso8601: function(time) {
               var tz_offset = time.toString().match(/\sGMT([+\-]\d+)/)[1];
               return time.strftime('%Y-%m-%dT%H:%M:%S') + tz_offset;
             }
        }
};

/*

 var load_calendar = function(calendar_link) {
 calendar_link = jQuery(calendar_link);
 var calendar_address = calendar_link.attr('href');

 jQuery.getJSON(calendar_address + '&callback=?',
   function(events) {
   var calendar = calendar_link.replaceWith('<div class="calendar"></div>');
   calendar = jQuery('div.calendar');
   jQuery.each(events, function(i, item) {
     //console.log(item);
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
     formatted_start_time = '<abbr class="dtstart" title="' + iso8601(start_time) + '">' + start_time.strftime('%A, %B %d from %I:%M %p') + '</abbr>';
     formatted_end_time = '<abbr class="dtend" title="' + iso8601(end_time) + '">' + end_time.strftime('%I:%M') + '</abbr>';
     start_and_end = '<span class="date">' + formatted_start_time + ' &ndash; ' + formatted_end_time + '</span>';
     venue = '<a rel="venue" type="application/json" href="' + item.venue_id + '" />';
     description = '<p class="description">' + item.description + '</p>';

     calendar.append('<div class="vevent">' + summary + start_and_end + venue + description + '</div>');
     }
   });
   });

 };

 var load_venue = function(venue_link) {

 };
 */

jQuery(document).ready(function() {
  Calagator.activate_calendars();
});
