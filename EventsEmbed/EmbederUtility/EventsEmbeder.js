(function() {
  'use strict';

  $.ajax({
    type: 'GET',
    url: 'https://www.eventbriteapi.com/v3/users/me/owned_events/?token=JAFCWY2PFQQPVWOCNVAO',
    dataType: 'JSON',
    success: function gotData(data) {
      console.log('success');
      console.log(data);
      createEventList(JSON.stringify(data));
    },
    error: function didNotGetData() {
      console.log('This is a flag because we blew it.');
    }
  });

  function createEventList(data) {
    let parsedData = JSON.parse(data);
    let elements = [];
    let count = 1;
    parsedData.events.forEach(function grabEventData(each) {
      let li = $('<li>').attr({
        'data-start': formatTime(each.start.local),
        'data-end': formatTime(each.end.local),
        'data-content': lowerCaseDashed(each.name.text),
        'data-event': identifyType(each.description.text)
      }).addClass('single-event');
      let anchor = $('<a>').attr('href', '#0');
      let em = $('<em>').addClass('event-name').text(each.name.text);
      let img;
      if (each.logo) {
        img = $('<img>').addClass('event-image').attr('src', each.logo.url);
      }

      li.append(anchor.append(em)).append(img);
      $(identifyRoom(each.description.text)).append(li);
      elements.push(li);
      count++;
    });
  }

  function lowerCaseDashed(string) {
    return string.split(' ').join('-').toLowerCase();
  }

  function formatTime(dateString) {
    return (new Date(dateString).getHours() + 4) + ':' + (new Date(dateString).getMinutes()<10?'0':'') + new Date(dateString).getMinutes();
  }

  function identifyRoom(description) {
    if (description.search('North Star') > -1) {
      return '.main-hall-north-star';
    } else if (description.search('Designers') > -1) {
      return '.main-hall-designers';
    } else if (description.search('Main Stage') > -1) {
      return '.main-hall-main-stage';
    } else if (description.search('West Lobby') > -1) {
      return '.west-lobby';
    } else if (description.search('Room 1') > -1) {
      return '.room-1';
    } else if (description.search('Room 3') > -1) {
      return '.room-3';
    } else if (description.search('Room 4') > -1) {
      return '.room-4';
    } else if (description.search('Room 5') > -1) {
      return '.room-5';
    } else if (description.search('Room 6') > -1) {
      return '.room-6';
    } else if (description.search('South Gallery') > -1) {
      return '.south-gallery';
    }
  }

  function identifyType(description) {
    if (description.search('Tournament') > -1) {
      return 'tournament';
    } else if (description.search('Panel') > -1) {
      return 'panel';
    } else if (description.search('RPG') > -1) {
      return 'rpg';
    } else if (description.search('Demo') > -1) {
      return 'demo';
    }
  }
})();
