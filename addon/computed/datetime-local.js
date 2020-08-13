/*
 * Copyright (c) 2019 One Hill Technologies, LLC
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

const DEFAULT_DATETIME_LOCAL_FORMAT = 'YYYY-MM-DDTHH:mm';

/**
 * Convert an input with type="date" to and from a JavaScript date object. This helper
 * will preserve the time portion of the existing date, if present.
 *
 * @param dependentKey
 * @return {*}
 */
export default function (dependentKey) {
  return computed (dependentKey, {
    get () {
      const date = get (this, dependentKey);
      return date ? moment (date).format (DEFAULT_DATETIME_LOCAL_FORMAT) : null;
    },

    set (name, value) {
      let newDate = moment (value, [DEFAULT_DATETIME_LOCAL_FORMAT]);
      let currentDate = moment (get (this, dependentKey));

      if (newDate.isValid ()) {
        if (currentDate.isValid ()) {
          const month = newDate.get ('month');
          const date = newDate.get ('date');
          const year = newDate.get ('year');
          const hour = newDate.get ('hour');
          const minute = newDate.get ('minute');
          const second = newDate.get ('second');
          const millisecond = newDate.get ('millisecond');

          currentDate.set ({month, date, year, hour, minute, second, millisecond});
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