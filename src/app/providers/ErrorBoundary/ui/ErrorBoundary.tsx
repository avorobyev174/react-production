import { Component, type ErrorInfo, type ReactNode, Suspense } from 'react';
import { PageError } from 'widgets/PageError';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor (props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  // eslint-disable-next-line n/handle-callback-err
  static getDerivedStateFromError () {
    return { hasError: true };
  }

  componentDidCatch (error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo);
  }

  render () {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <Suspense fallback="">
          <PageError />
        </Suspense>
      );
    }
    return children;
  }
}

export default ErrorBoundary;
