"use client"

import { Component, ReactNode } from "react"

type Props = {
  children: ReactNode
}

type State = {
  hasError: boolean
}

export default class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-6 text-sm text-red-400">
          Something went wrong. Please refresh the page.
        </div>
      )
    }

    return this.props.children
  }
}
