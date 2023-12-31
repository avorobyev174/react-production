import { Component, type ErrorInfo, type ReactNode, Suspense } from 'react';
import { PageError } from 'widgets/PageError/ui/PageError';

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
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch (error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.log('-----------');
    console.log(error, errorInfo);
  }

  render () {
    const { hasError } = this.state;
    const { children } = this.props;
    console.log(hasError)
    console.log(children)
    if (hasError) {
      // You can render any custom fallback UI
      // eslint-disable-next-line i18next/no-literal-string
      return (
        <Suspense fallback="">
          <PageError />
        </Suspense>
      );
    }
    console.log(1234)
    return children;
  }
}

export default ErrorBoundary;
