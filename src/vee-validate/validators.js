import { Validator } from 'vee-validate';
import moment from 'moment';

const tomorrowDate = moment().add(1, 'days').format('YYYY-MM-DD');

Validator.extend('afterToday', {
    getMessage: () => 'The minimum date is tomorrow.',
    validate: value => value >= tomorrowDate
});
