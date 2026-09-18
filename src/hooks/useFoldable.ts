import { useState, useEffect } from 'react';

interface FoldableState {
  isUnfolded: boolean;
  isTentMode: boolean;
  isOuterScreen: boolean;
  screenSpanning: 'single' | 'dual' | 'none';
  orientation: 'portrait' | 'landscape';
  viewportWidth: number;
  viewportHeight: number;
}

export const useFoldable = (): FoldableState => {
  const [foldableState, setFoldableState] = useState<FoldableState>({
    isUnfolded: false,
    isTentMode: false,
    isOuterScreen: true,
    screenSpanning: 'none',
    orientation: 'portrait',
    viewportWidth: window.innerWidth,
    viewportHeight: window.innerHeight,
  });

  useEffect(() => {
    const detectFoldableState = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const aspectRatio = width / height;
      
      // iPhone Duo detection logic
      const isOuterScreen = width <= 430 && height <= 932;
      const isUnfolded = width >= 768 && width <= 1024 && aspectRatio >= 0.8 && aspectRatio <= 1.2;
      const isTentMode = width <= 430 && height <= 500 && aspectRatio > 1;
      
      // Check for CSS screen spanning support
      const screenSpanning = CSS.supports('(spanning: single-fold-vertical)') && 
                            window.matchMedia('(spanning: single-fold-vertical)').matches ? 'dual' : 'single';
      
      const orientation = width > height ? 'landscape' : 'portrait';

      setFoldableState({
        isUnfolded,
        isTentMode,
        isOuterScreen,
        screenSpanning: screenSpanning === 'dual' ? 'dual' : 'none',
        orientation,
        viewportWidth: width,
        viewportHeight: height,
      });
    };

    // Initial detection
    detectFoldableState();

    // Listen for viewport changes (fold/unfold events)
    window.addEventListener('resize', detectFoldableState);
    window.addEventListener('orientationchange', detectFoldableState);

    return () => {
      window.removeEventListener('resize', detectFoldableState);
      window.removeEventListener('orientationchange', detectFoldableState);
    };
  }, []);

  return foldableState;
};