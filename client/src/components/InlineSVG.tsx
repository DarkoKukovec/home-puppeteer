import * as React from 'react';

export class InlineSVG extends React.Component<{
  src: string;
  className?: string;
}, { image: string }> {
  constructor(props: { src: string }) {
    super(props);
    this.state = { image: '' };
    window.fetch(props.src)
      .then((res) => res.text())
      .then((image) => this.setState({ image }));
  }
  public render() {
    return (
      <div
        className={this.props.className}
        dangerouslySetInnerHTML={{ __html: this.state.image }}
      />
    );
  }
}
