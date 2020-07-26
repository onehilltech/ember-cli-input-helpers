ember-cli-input-helpers
==============================================================================

<<<<<<< HEAD
Helper functions for binding HTML input elements to properties.
=======
[Short description of the addon.]
>>>>>>> a8f3c1a... v2.18.2...v3.16.2


<<<<<<< HEAD
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
=======
Compatibility
------------------------------------------------------------------------------

* Ember.js v3.12 or above
* Ember CLI v2.13 or above
* Node.js v10 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-cli-input-helpers
```


Usage
------------------------------------------------------------------------------

[Longer description of how to use the addon in apps.]


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
>>>>>>> a8f3c1a... v2.18.2...v3.16.2
