# ember-cli-input-helpers

Helper functions for binding HTML input elements to properties.

## Installation

    ember install ember-cli-input-helpers

## Features

* Computed properties for transforming input strings to JavaScript objects
* Works well with Ember.Data

## Usage

### Date

Use the `date` computed property to convert the date input string to/from a
JavaScript `Date` object.

```javascript
import { date as dateInput } from 'ember-cli-input-helpers/computed';

const Person = DS.Model ({
  // The birthday as a date type.
  birthday: DS.attr ('date'),
  
  // Property specifically for inputs.
  birthdayInput: dateInput ('birthday')
});
```

Then use the `birthdayInput` property in the `{{input}}` helper, and not `birthday`
property.

```html
{{input value=model.birthdayInput}}
```
