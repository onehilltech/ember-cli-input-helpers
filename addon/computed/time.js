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

const DEFAULT_TIME_FORMAT = 'HH:mm';

/**
 * Convert an input with type="time" to and from a JavaScript date object. This helper
 * will preserve the date portion of the existing date, if present.
 *
 * @param dependentKey
 * @return {*}
 */
export default function (dependentKey) {
  return computed (dependentKey, {
    get () {
      const date = get (this, dependentKey);
      return date ? moment (date).format (DEFAULT_TIME_FORMAT) : null;
    },

    set (name, value) {
      let newTime = moment (value, [DEFAULT_TIME_FORMAT]);
      let currentTime = moment (get (this, dependentKey));

      if (newTime.isValid ()) {
        if (currentTime.isValid ()) {
          // Update only the date (i.e., month, day, year) portion of the date object.
          const hour = newTime.get ('hour');
          const second = newTime.get ('second');
          const minute = newTime.get ('minute');
          const millisecond = newTime.get ('millisecond');

          currentTime.set ({hour, second, minute, millisecond});
        }
        else {
          // Replace the current date with the new date.
          currentTime = newTime;
        }

        set (this, dependentKey, currentTime.toDate ());
      }
      else {
        // Do not replace the current date.
        set (this, dependentKey, currentTime.toDate ());
      }

      return value;
    }
  });
}