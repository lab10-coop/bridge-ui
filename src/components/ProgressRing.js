import React, { Component } from 'react';

export class ProgressRing extends Component {
  state = {
    normalizedRadius: this.props.radius - this.props.stroke * 2,
    circumference: (this.props.radius - this.props.stroke * 2) * 2 * Math.PI
  }

  render() {
    const { radius, stroke, progress, confirmationNumber, hideConfirmationNumber } = this.props
    const { circumference, normalizedRadius } = this.state
    const strokeDashoffset = circumference - progress / 100 * circumference
    const confirmations = hideConfirmationNumber ? '' : `${confirmationNumber}/8`
    return (
      <svg
        height={radius * 2}
        width={radius * 2}
      >
        <circle
          className="progress_upcomming"
          strokeWidth={ stroke }
          strokeDasharray={ circumference + ' ' + circumference }
          style={ { strokeDashoffset: 0 } }
          r={ normalizedRadius }
          cx={ radius }
          cy={ radius }
        />
        <circle
          className="progress_done"
          strokeWidth={ stroke }
          strokeDasharray={ circumference + ' ' + circumference }
          style={ { strokeDashoffset } }
          r={ normalizedRadius }
          cx={ radius }
          cy={ radius }
        />
        <text x="28" y="47" className="progress_text">
          {confirmations}
        </text>
      </svg>
    );
  }
}
