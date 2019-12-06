import Controller from '@ember/controller';
import { date as dateInput, time as timeInput, dateTimeLocal as dateTimeLocalInput } from 'ember-cli-input-helpers/computed';

export default Controller.extend({
  date: null,

  dateInput: dateInput ('date'),
  timeInput: timeInput ('date'),
  dateTimeLocalInput: dateTimeLocalInput ('date'),
});
