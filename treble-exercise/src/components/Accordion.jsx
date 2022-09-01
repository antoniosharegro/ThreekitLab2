import { Children, useState, cloneElement } from 'react';
import { AttributeValue, CaretDownIcon } from '@threekit-tools/treble';

export function AccordionItem(props) {
  const { selected, handleSelect, label, children } = props;

  return (
    <div className="h-max my-6 w-full mb-1 bg-white border border-solid border-x-0 border-b-0 border-gray-300 rounded-sm">
      <div
        onClick={handleSelect}
        className="h-12 flex flex-row place-content-between cursor-pointer px-3 items-center"
      >
        <div className="flex-column">
          <div className="h-max w-max flex-grow text-lg tracking-widef font-sans font-bold">
            {label}
          </div>
          <div className="h-max flex-grow text-sm tracking-widef font-sans">
            <AttributeValue attribute={label}></AttributeValue>
          </div>
        </div>
        <div></div>
        <div className="h-max">
          <CaretDownIcon />
        </div>
      </div>
      <div
        className={`overflow-x-hidden overflow-y-scroll transition-all duration-300 ${
          selected ? 'max-h-80' : 'max-h-0'
        }`}
      >
        <div className="px-3 pb-4">
          <div className="pt-1">{children}</div>
        </div>
      </div>
    </div>
  );
}

function Accordion(props) {
  const [selected, setSelected] = useState(undefined);

  const handleSelect = (idx) => setSelected(idx === selected ? undefined : idx);

  if (!props.children) return null;

  return Children.map(props.children, (child, idx) => {
    if (child.type !== AccordionItem) return null;
    return cloneElement(child, {
      selected: selected === idx,
      handleSelect: () => {
        if (child.props.onClick) child.props.onClick();
        handleSelect(idx);
      },
    });
  });
}

Accordion.AccordionItem = AccordionItem;

export default Accordion;
