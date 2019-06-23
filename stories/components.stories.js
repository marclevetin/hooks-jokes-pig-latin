import React from "react";

import { storiesOf } from "@storybook/react";
import {
  withKnobs,
  text,
  number,
  radios
} from "@storybook/addon-knobs";

import { action } from "@storybook/addon-actions";

import {
  Button,
  Input,
  Header1,
  Header2,
  Paragraph,
  Label,
  List,
  ListItem,
  Subtitle
} from "../src/styledComponents";

storiesOf("Components|Button", module)
  .addDecorator(withKnobs)
  .add("Get a new joke", () => {
    const label = "Button text";
    const options = {
      random: "Get a new joke",
      search: "Search!"
    };
    const defaultValue = "Get a new joke";

    const value = radios(label, options, defaultValue);

    return <Button onClick={action("clicked")}>{value}</Button>;
  });

storiesOf("Components|Input", module)
  .addDecorator(withKnobs)
  .add(
    "with text",
    () => {
      const defaultText = text("Input placeholder text", "Enter a search term");
      return <Input placeholder={defaultText} />;
    },
    { notes: "A very simple component" }
  );

storiesOf("Components|Header1", module)
  .addDecorator(withKnobs)
  .add("with text", () => {
    const defaultText = text("Header", "Bacon Ipsum Dolor");
    return <Header1 onClick={action("clicked")}>{defaultText}</Header1>;
  });

  storiesOf("Components|Header2", module)
  .addDecorator(withKnobs)
  .add("with text", () => {
    const defaultText = text("Header", "Bacon Ipsum Dolor");
    return <Header2 onClick={action("clicked")}>{defaultText}</Header2>;
  });

storiesOf("Components|Subtitle", module)
  .addDecorator(withKnobs)
  .add("with text", () => {
    const defaultText = text("Subtitle", "Bacon Ipsum Dolor");
    return <Subtitle onClick={action("clicked")}>{defaultText}</Subtitle>;
  });


storiesOf("Components|Paragraph", module)
  .addDecorator(withKnobs)
  .add("with text", () => {
    const defaultText = text("Text", "Bacon Ipsum Dolor");
    return <Paragraph onClick={action("clicked")}>{defaultText}</Paragraph>;
  });

storiesOf("Components|Label", module)
  .addDecorator(withKnobs)
  .add("with text", () => {
    const defaultText = text("Label text", "Bacon Ipsum Dolor");
    return <Label onClick={action("clicked")}>{defaultText}</Label>;
  });

storiesOf("Components|List", module)
  .addDecorator(withKnobs)
  .add("full list", () => {
    const label = "Number of list items";
    const defaultValue = 3;
    const value = number(label, defaultValue);
    const defaultText = text(
      "List Item Text",
      "Why was the picture sent to prison? It was framed."
    );

    const allListItems = Array(value).fill(<ListItem>{defaultText}</ListItem>);

    return <List>{allListItems}</List>;
  });

storiesOf("Components|ListItem", module)
  .addDecorator(withKnobs)
  .add("with text", () => {
    return (
      <ListItem>
        A weasel walks into a bar. The bartender says, "Wow, I've never served a
        weasel before. What can I get for you?" "Pop," goes the weasel.
      </ListItem>
    );
  });
