/*
Note: local links require a leading and trailing slash.
*/
module.exports = {
    title: "OpenStack Foundation",
    description: "The Home of Open Infrastructure",
    head: [["link", { rel: "icon", href: "/favicons/logo-openstack.ico" }]],
    themeConfig: {
        nav: [
            {
              "text": "Projects",
              "items": [
                { "text": 'All projects', "link": '/projects/' },
                { "text": 'Services', "link": '/projects/services/' },
                { "text": 'Host at OSF', "link": '/projects/hosting/' },
              ]
            },
            {
              "text": "Membership",
              "items": [
                { "text": 'Supporting Companies', "link": '/companies/' },
                { "text": 'Join OSF', "link": 'https://www.openstack.org/join' },
              ]
            },
            {
              "text": "Events",
              "items": [
                { "text": 'Open Infra Summit', "link": 'https://www.openstack.org/summit/' },
                { "text": 'Open Infra  / OpenStack days', "link": 'https://www.openstack.org/community/events/#openstack_days' },
                { "text": 'Community Meetups', "link": 'https://www.meetup.com/topics/openstack/' },
              ]
            },
            {
              "text": "About",
              "items": [
                { "text": '4 Opens', "link": '/about/four-opens/' },
                { "text": 'Annual report', "link": 'https://www.openstack.org/foundation/2018-openstack-foundation-annual-report' },
                { "text": 'Foundation Staff', "link": '/about/staff/' },
                { "text": 'Board of Directors', "link": '/about/board/' },
              ]
            }
          ],
      sidebar: 'auto',
    },
  };
  