import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
    p_type: DS.attr('string'),
    p_description: DS.attr('string'),
    p_price: DS.attr('number'),
    p_qtt: DS.attr('number', { defaultValue: 0.0 }),
    p_detail: DS.attr('string'),
    p_available: computed('p_qtt', function () {
        //Check if there is an available product there
        return (`${this.get('p_qtt')}` > 0) ? true : false;
    }),
    //Date of record creation
    p_createdAt: DS.attr('date', {
        defaultValue() { return new Date(); }
    })
});
