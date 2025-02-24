'use client';

import { Component, ReactNode } from 'react';

export default class ErrorBoundary extends Component<
  { fallback: ReactNode; children: ReactNode },
  { hasError: boolean; message: string | null }
> {
  state = { hasError: false, message: null };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, message: error.message };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className='error'>
          <h2>An error occurred!</h2>
          <p>{this.state.message}</p>
          <p>{this.props.fallback}</p>
        </div>
      );
    }

    return this.props.children;
  }
}
