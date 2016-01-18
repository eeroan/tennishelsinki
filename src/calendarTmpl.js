module.exports = o => { with(o) return `BEGIN:VCALENDAR
VERSION:2.0
PRODID:Tennisvuorot.fi
X-WR-CALNAME:Tennisvuoro
CALSCALE:GREGORIAN
BEGIN:VTIMEZONE
TZID:Europe/Helsinki
TZURL:http://tzurl.org/zoneinfo-outlook/Europe/Helsinki
X-LIC-LOCATION:Europe/Helsinki
BEGIN:DAYLIGHT
TZOFFSETFROM:+0200
TZOFFSETTO:+0300
TZNAME:EEST
DTSTART:19700329T030000
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU
END:DAYLIGHT
BEGIN:STANDARD
TZOFFSETFROM:+0300
TZOFFSETTO:+0200
TZNAME:EET
DTSTART:19701025T040000
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU
END:STANDARD
END:VTIMEZONE
BEGIN:VEVENT
DTSTAMP:${now}
UID:${username}
DTSTART;TZID="Europe/Helsinki":${start}
DTEND;TZID="Europe/Helsinki":${end}
SUMMARY:${summary}
URL:tennisvuorot.fi
DESCRIPTION: ${description}
LOCATION:${location}
END:VEVENT
END:VCALENDAR`}
