import { useAttribute } from '@threekit-tools/treble';
export function Tiles(props) {
  const { attribute } = props;
  if (!attribute) return <></>;
  return (
    <div className="mb-5">
      <div className="grid grid-cols-2 gap-1">
        {attribute?.values.map((item, i) => {
          return (
            <button
              key={i}
              type="button"
              onClick={item.handleSelect}
              className={`group rounded-md h-14 px-3 mb-1 mr-5 my-5 text-base cursor-pointer border border-solid hover:border-black-500 hover:bg-gray-200 ${
                item.selected
                  ? 'border-black-500 bg-gray-200 text-black-500 '
                  : 'text-gray-500 bg-gray-200 border-gray-300'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function TilesAttribute(props) {
  const [attribute] = useAttribute(props.attribute);
  if (!attribute) return <></>;
  return <Tiles attribute={attribute} />;
}
