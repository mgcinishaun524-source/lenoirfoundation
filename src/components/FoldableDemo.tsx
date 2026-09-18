import React from 'react';
import { useFoldable } from '../hooks/useFoldable';

export default function FoldableDemo() {
  const foldable = useFoldable();

  return (
    <div className="fixed bottom-4 right-4 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl p-4 text-xs font-mono shadow-lg z-50">
      <div className="font-bold text-gray-800 mb-2">iPhone Duo Status</div>
      <div className="space-y-1 text-gray-600">
        <div>Width: {foldable.viewportWidth}px</div>
        <div>Height: {foldable.viewportHeight}px</div>
        <div>Orientation: {foldable.orientation}</div>
        <div className="text-orange-600 font-semibold">
          {foldable.isOuterScreen && '📱 Outer (5.4")'}
          {foldable.isUnfolded && '📖 Unfolded (7.6")'}
          {foldable.isTentMode && '⛺ Tent Mode'}
          {foldable.screenSpanning === 'dual' && ' | Dual Screen'}
        </div>
      </div>
    </div>
  );
}