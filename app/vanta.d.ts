declare module 'vanta/dist/vanta.clouds.min.js' {
  interface VantaEffect {
    destroy: () => void;
  }
  
  interface VantaConfig {
    el: HTMLElement | null;
    THREE: any;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    backgroundColor?: number;
    skyColor?: number;
    cloudColor?: number;
    cloudShadowColor?: number;
    sunColor?: number;
    sunGlareColor?: number;
    sunlightColor?: number;
    speed?: number;
  }
  
  const vanta: (config: VantaConfig) => VantaEffect;
  export default vanta;
}

declare module 'vanta/dist/vanta.net.min.js' {
  interface VantaEffect {
    destroy: () => void;
  }
  
  interface VantaConfig {
    el: HTMLElement | null;
    THREE: any;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    scale?: number;
    scaleMobile?: number;
    color?: number;
    backgroundColor?: number;
    points?: number;
    maxDistance?: number;
    spacing?: number;
    showLines?: boolean;
    lineColor?: number;
    lineWidth?: number;
    showDots?: boolean;
    dotColor?: number;
    dotSize?: number;
    speed?: number;
  }
  
  const vanta: (config: VantaConfig) => VantaEffect;
  export default vanta;
}

declare module 'vanta/dist/vanta.rings.min.js' {
  interface VantaEffect {
    destroy: () => void;
  }
  
  interface VantaConfig {
    el: HTMLElement | null;
    THREE: any;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    backgroundColor?: number;
    backgroundAlpha?: number;
    color?: number;
    color2?: number;
    size?: number;
    rings?: number;
    maxDistance?: number;
    spacing?: number;
    speed?: number;
  }
  
  const vanta: (config: VantaConfig) => VantaEffect;
  export default vanta;
}
