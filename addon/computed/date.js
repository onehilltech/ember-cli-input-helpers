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

import { computed } from '@ember/object';
import moment from 'moment';

const DEFAULT_DATE_FORMAT = 'YYYY-MM-DD';

/**
 * Convert an input with type="date" to and from a JavaScript date object.
 *
 * @param dependentKey
 * @return {*}
 */
export default function (dependentKey) {
  return computed (dependentKey, {
    get () {
      const date = this.get (dependentKey);
      return moment (date).format (DEFAULT_DATE_FORMAT);
    },

    set (name, value) {
      const date = moment (value, [DEFAULT_DATE_FORMAT]);
      this.set (dependentKey, date.toDate ());

      return value;
    }
  });
}