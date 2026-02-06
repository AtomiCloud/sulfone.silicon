"use client"

import { type CustomPreProps, InnerPre, getPreRef } from "codehike/code"
import {
  type TokenTransitionsSnapshot,
  calculateTransitions,
  getStartingSnapshot,
} from "codehike/utils/token-transitions"
import React from "react"

const MAX_TRANSITION_DURATION = 900 // milliseconds

export class SmoothPre extends React.Component<CustomPreProps> {
  ref: React.RefObject<HTMLPreElement>
  constructor(props: CustomPreProps) {
    super(props)
    this.ref = getPreRef(this.props)
  }

  render() {
    return <InnerPre merge={this.props} style={{ position: "relative" }} />
  }

  getSnapshotBeforeUpdate() {
    const currentRef = this.ref.current;
    if (!currentRef) return null;
    return getStartingSnapshot(currentRef);
  }

  componentDidUpdate(
    prevProps: never,
    prevState: never,
    snapshot: TokenTransitionsSnapshot | null
  ) {
    const currentRef = this.ref.current;
    if (!currentRef || !snapshot) return;
    const transitions = calculateTransitions(currentRef, snapshot);
    for (const { element, keyframes, options } of transitions) {
      const { translateX, translateY, ...kf } = keyframes;
      if (translateX && translateY) {
        (kf as {translate: string[]}).translate = [
          `${translateX[0]}px ${translateY[0]}px`,
          `${translateX[1]}px ${translateY[1]}px`,
        ];
      }
      element.animate(kf, {
        duration: options.duration * MAX_TRANSITION_DURATION,
        delay: options.delay * MAX_TRANSITION_DURATION,
        easing: options.easing,
        fill: "both",
      });
    }
  }
}
