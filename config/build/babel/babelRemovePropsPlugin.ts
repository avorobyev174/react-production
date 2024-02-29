import { type PluginItem } from '@babel/core';

export default function (): PluginItem {
  return {
    visitor: {
      Program(path, state) {
        const forbiddenTags = state.opts.props || [];
        path.traverse({
          JSXIdentifier(current) {
            const nodeName = current.node.name;

            if (forbiddenTags.includes(nodeName)) {
              current.parentPath.remove();
            }
          },
        })
      },
    },
  };
}
