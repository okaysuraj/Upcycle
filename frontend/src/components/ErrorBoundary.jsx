import { Component } from 'react';

export default class ErrorBoundary extends Component {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  componentDidCatch(error) {
    console.error('Upcycle screen failed:', error);
  }
  render() {
    if (!this.state.failed) return this.props.children;
    return (
      <main className="flex min-h-screen items-center justify-center bg-stone-50 p-6 text-stone-900 dark:bg-stone-950 dark:text-stone-100">
        <section className="max-w-md space-y-4" role="alert">
          <h1 className="text-2xl font-semibold">This screen could not load</h1>
          <p>Refresh Upcycle to try again. Your saved records remain in the database.</p>
          <button
            type="button"
            className="min-h-11 rounded-xl bg-emerald-700 px-5 py-3 font-medium text-white"
            onClick={() => window.location.reload()}
          >
            Reload Upcycle
          </button>
        </section>
      </main>
    );
  }
}
