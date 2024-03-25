import React, { useState, useEffect } from "react";
import { Box, Heading, List, ListItem, Text } from "@chakra-ui/react";

const Index = () => {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    const fetchColors = async () => {
      const response = await fetch("https://api.color.pizza/v1/");
      const data = await response.json();
      setColors(data.colors);
    };

    fetchColors();
  }, []);

  return (
    <Box maxWidth="500px" margin="auto" padding={4}>
      <Heading as="h1" size="xl" marginBottom={4}>
        Color List
      </Heading>
      <List spacing={3}>
        {colors.map((color) => (
          <ListItem key={color.hex} display="flex" alignItems="center">
            <Box backgroundColor={`#${color.hex}`} borderRadius="md" height="40px" width="40px" marginRight={4} />
            <Text>{color.name}</Text>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Index;
