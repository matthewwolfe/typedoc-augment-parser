import { CodeHighlight } from '@mantine/code-highlight';
import { Container, Loader, Title } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useMemo } from 'react';
import { parser } from 'typedoc-augment-parser';

import { ReflectionKind, type JSONOutput } from 'typedoc';

function AntDesign() {
  const { data, isFetching } = useQuery({
    queryKey: ['ant-design'],
    queryFn: async () => {
      const { data } = await axios.get<JSONOutput.ProjectReflection>(
        '/ant-design.json'
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
      <Title>Ant Design</Title>

      {parsed.groups().map((group, index) => (
        <Container key={index} p="md">
          <Title order={2}>{group.title}</Title>

          {group.children
            .filter((child) => !child.flags.isExternal)
            .map((child, index) => (
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

export { AntDesign };
