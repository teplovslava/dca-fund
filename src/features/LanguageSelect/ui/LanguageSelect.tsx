import Select from "@shared/ui/components/Select";
import useLanguage from "../model/useLanguage";

const fakeData = [
  {
    title: "RU",
    value: "RU",
  },
  {
    title: "EN",
    value: "EN",
  },
  {
    title: "GE",
    value: "GE",
  },
  {
    title: "CH",
    value: "CH",
  },
];

type ItemType = typeof fakeData;

function LanguageSelect() {
  const langs = useLanguage(); // получаем данные, но пока фэйковые будут

  return (
    <div className="w-[88px]">
      <Select
        listItems={fakeData}
        cb={(item: ItemType, i: number) => alert(i)}
      />
    </div>
  );
}

export default LanguageSelect;
