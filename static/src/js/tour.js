odoo.define('example.tour', function(require) {
"use strict";

var core = require('web.core');
var tour = require('web_tour.tour');

var _t = core._t;

tour.register('example_tour', {
    url: "/web",
    }, [tour.STEPS.MENU_MORE, {
    trigger: '.o_app[data-menu-xmlid="openacademy.session"]',
    content: _t('Want to <b>create sessions</b>?<br/><i>Click on Sessions to start.</i>'),
    position: 'bottom',
    }, {
    trigger:'.o-kanban-button-new',
    content: _t('Lets create your first session.'),
    position: 'bottom',
    width: 200,
    }, {
    trigger:'input[placeholder="Name"]',
    extra_trigger: '.o_form_editable',
    content: _t('Fill in the name of the session.'),
    run: 'text Aerospace session',
    position: 'right',
    }, {
    trigger:'input[placeholder="Start Date"]',
    extra_trigger: '.o_form_editable',
    content: _t('Fill in the start date of the session.'),
    run: 'text 11/10/2020',
    position: 'right',
    }, {
    trigger:'input[placeholder="Duration"]',
    extra_trigger: '.o_form_editable',
    content: _t('Fill in the start date of the session.'),
    run: 'text 11/10/2020',
    position: 'right',
    }, {
    trigger:'input[placeholder="Number of seats"]',
    extra_trigger: '.o_form_editable',
    content: _t('Fill in the number of seats of the session.'),
    run: 'text 10',
    position: 'right',
    }, {
    trigger:'input[placeholder="Instructor"]',
    extra_trigger: '.o_form_editable',
    content: _t('Fill in the instructor of the session.'),
    run: 'text Alice',
    position: 'right',
    }, {
    trigger:'input[placeholder="Course"]',
    extra_trigger: '.o_form_editable',
    content: _t('Fill in the course of the session.'),
    run: 'text Aerospace',
    position: 'right',
    }, {
    trigger:'input[placeholder="Attendees"]',
    extra_trigger: '.o_form_editable',
    content: _t('Fill in the attendees of the session.'),
    run: 'text Tiya',
    position: 'right',
    }, {
    trigger: '.o_form_button_save',
    content: _t('Save this session and the modifications you have made to it.'),
    position: 'bottom',
    }]);
    }]);
});