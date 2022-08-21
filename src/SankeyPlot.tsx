import React from 'react';
import Plot from 'react-plotly.js';
import { Link, Node } from './Types';

type Props = {
  links: Array<Link>,
  nodes: Array<Node>,
}

export default (props: Props) => {
  const {links, nodes} = props;
  let source: Array<string> = [];
  let target: Array<string> = [];
  let value: Array<string> = [];
  links.map(link => {
      source.push(link.source);
      target.push(link.target);
      value.push(link.value);
  })
  let labels: Array<string> = nodes.map(node => node.label);
  return (<Plot
      data={[
        {
          type: "sankey",
          orientation: "h",
          node: {
            pad: 15,
            thickness: 30,
            line: {
              color: "black",
              width: 0.5
            },
          label: labels,
              },

          link: {
            source: source,
            target: target,
            value:  value
          }

        },
      ]}
      layout={ {width: 1200, height: 600, title: ' Total Compensation'} }
    />)
}