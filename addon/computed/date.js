/*
 * Copyright (c) 2018 One Hill Technologies, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

import { computed, get, set } from '@ember/object';
import moment from 'moment';

const DEFAULT_DATE_FORMAT = 'YYYY-MM-DD';

/**
 * Convert an input with type="date" to and from a JavaScript date object. This helper
 * will preserve the time portion of the existing date, if present.
 *
 * @param dependentKey
 * @param format
 * @return {*}
 */
export default function (dependentKey, format) {
  let displayFormat = format || DEFAULT_DATE_FORMAT;

  return computed (dependentKey, {
    get () {
      const date = get (this, dependentKey);
      return date ? moment (date).format (displayFormat) : null;
    },

    set (name, value) {
      let newDate = moment (value, [displayFormat]);
      let currentDate = moment (get (this, dependentKey));

      if (newDate.isValid ()) {
        if (currentDate.isValid ()) {
          // Update only the date (i.e., month, day, year) portion of the date object.
          const month = newDate.get ('month');
          const date = newDate.get ('date');
          const year = newDate.get ('year');

          currentDate.set ({month, date, year});
        }
        else {
          // Replace the current date with the new date.
          currentDate = newDate;
        }

        set (this, dependentKey, currentDate.toDate ());
      }
      else {
        // Do not replace the current date.
        set (this, dependentKey, null);
      }

      return value;
    }
  });
}