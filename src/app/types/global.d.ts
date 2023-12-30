declare module '*.scss' {
  const classes: Record<string, string>;
  export default classes;
}

declare module '*.svg' {
  import type React from 'react';
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}
declare module '*.png';
declare module '*.jpe';
declare module '*.jpeg';
declare module '*.gif';

// eslint-disable-next-line @typescript-eslint/naming-convention
declare const __IS_DEV__: boolean;
