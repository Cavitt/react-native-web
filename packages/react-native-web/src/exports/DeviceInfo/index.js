/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import type { DisplayMetrics } from '../Dimensions';

import ExecutionEnvironment from 'fbjs/lib/ExecutionEnvironment';
import Dimensions from '../Dimensions';

const DeviceInfo = {
  Dimensions: {
    get windowPhysicalPixels(): DisplayMetrics {
      const { width, height, fontScale, scale } = Dimensions.get('window');
      return {
        width: width * scale,
        height: height * scale,
        scale,
        fontScale
      };
    },
    get screenPhysicalPixels(): DisplayMetrics {
      const { width, height, fontScale, scale } = Dimensions.get('screen');
      return {
        width: width * scale,
        height: height * scale,
        scale,
        fontScale
      };
    }
  },

  get locale(): string | void {
    if (ExecutionEnvironment.canUseDOM) {
      if (navigator.languages) {
        return navigator.languages[0];
      } else {
        return navigator.language;
      }
    }
  },

  get totalMemory(): number | void {
    // $FlowIssue deviceMemory not defined in navigator
    return ExecutionEnvironment.canUseDOM ? navigator.deviceMemory : undefined;
  },

  get userAgent(): string {
    return ExecutionEnvironment.canUseDOM ? navigator.userAgent : '';
  }
};

export default DeviceInfo;
