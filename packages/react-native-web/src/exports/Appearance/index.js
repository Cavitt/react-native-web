/**
 * Copyright (c) Nicolas Gallagher.
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import ExecutionEnvironment from 'fbjs/lib/ExecutionEnvironment';

export type ColorSchemeName = 'light' | 'dark';

export type AppearancePreferences = {|
  colorScheme: ColorSchemeName
|};

type AppearanceListener = (preferences: AppearancePreferences) => void;
type DOMAppearanceListener = (ev: MediaQueryListEvent) => any;

function getQuery(): MediaQueryList | null {
  return ExecutionEnvironment.canUseDOM && window.matchMedia != null
    ? window.matchMedia('(prefers-color-scheme: dark)')
    : null;
}

const query = getQuery();
const listenerMapping = new WeakMap<AppearanceListener, DOMAppearanceListener>();

const Appearance = {
  getColorScheme(): ColorSchemeName {
    return query && query.matches ? 'dark' : 'light';
  },

  addChangeListener(listener: AppearanceListener): void {
    let mappedListener = listenerMapping.get(listener);
    if (!mappedListener) {
      mappedListener = ({ matches }: MediaQueryListEvent) => {
        listener({ colorScheme: matches ? 'dark' : 'light' });
      };
      listenerMapping.set(listener, mappedListener);
    }
    if (query) {
      query.addListener(mappedListener);
    }
  },

  removeChangeListener(listener: AppearanceListener): void {
    const mappedListener = listenerMapping.get(listener);
    if (mappedListener) {
      if (query) {
        query.removeListener(mappedListener);
      }
      listenerMapping.delete(listener);
    }
  }
};

export default Appearance;
