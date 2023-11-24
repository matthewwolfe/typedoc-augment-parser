import { CodeHighlight } from '@mantine/code-highlight';
import { Container, Loader, Title } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useMemo } from 'react';
import { parser } from 'typedoc-augment-parser';

import type { JSONOutput } from 'typedoc';

function BedrockUtils() {
  const { data, isFetching } = useQuery({
    queryKey: ['bedrock-ui-utils'],
    queryFn: async () => {
      const { data } = await axios.get<JSONOutput.ProjectReflection>(
        '/bedrock-ui-utils.json'
      );
      return data;
    },
  });

  const parsed = useMemo(() => {
    if (data) {
      return parser.augment(data);
    }

    return undefined;
  }, [data]);

  if (!parsed || isFetching) {
    return (
      <Container>
        <Loader />
      </Container>
    );
  }

  return (
    <Container p="md">
      <Title>@bedrock-ui/utils</Title>

      {parsed.groups().map((group, index) => (
        <Container key={index} p="md">
          <Title order={2}>{group.title}</Title>

          {group.children.map((child, index) => (
            <Container key={index} my="md">
              <Title mb="sm" order={3}>
                {child.name}
              </Title>

              <CodeHighlight code={child.typeToString()} />
            </Container>
          ))}
        </Container>
      ))}
    </Container>
  );
}

export { BedrockUtils };
