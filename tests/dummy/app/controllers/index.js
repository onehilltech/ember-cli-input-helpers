import Controller from '@ember/controller';
import { date as dateInput, time as timeInput } from 'ember-cli-input-helpers/computed';

export default Controller.extend({
  date: null,

  dateInput: dateInput ('date'),
  timeInput: timeInput ('date')
});
