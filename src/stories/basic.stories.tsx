import Checkbox from "../components/Checkbox";
import Button from "../components/Button";
import NumberInput from "../components/NumberInput";
import CheckListItem from "../components/CheckListItem";

export const CheckboxStory = () => <Checkbox />;
export const ButtonStory = () => <Button>Button</Button>;
export const NumberInputStory = () => <NumberInput />;
export const CheckListItemStory = () => (
  <CheckListItem
    title="Welcome to the career path"
    totalContent="6 Chapters"
    totalTime={25}
  />
);
