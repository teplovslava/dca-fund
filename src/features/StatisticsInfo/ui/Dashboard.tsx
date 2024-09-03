import lang from "@/../lang.json";
import { Table, RowItem } from "@shared/ui/components/Table";
import { Row } from "@shared/ui/components/Table";
import Button from "@shared/ui/components/Button";

const fakeData = [
  {
    number: "1",
    data: "23.09.2024",
    period: "23.09.2024 - 23.09.2024",
    sum: "454",
    percent: "5",
    added: "+837$",
    withdrawn: "+837$",
  },
  {
    number: "2",
    data: "23.09.2024",
    period: "23.09.2024 - 23.09.2024",
    sum: "454",
    percent: "5",
    added: "+837$",
    withdrawn: "+837$",
  },
  {
    number: "3",
    data: "23.09.2024",
    period: "23.09.2024 - 23.09.2024",
    sum: "454",
    percent: "5",
    added: "+837$",
    withdrawn: "+837$",
  },
  {
    number: "4",
    data: "23.09.2024",
    period: "23.09.2024 - 23.09.2024",
    sum: "454",
    percent: "5",
    added: "+837$",
    withdrawn: "+837$",
  },
  {
    number: "5",
    data: "23.09.2024",
    period: "23.09.2024 - 23.09.2024",
    sum: "454",
    percent: "5",
    added: "+837$",
    withdrawn: "+837$",
  },
];

const tableHeader = [
  "№",
  "Дата",
  "Период стерирования",
  "Сумма",
  "%",
  "Начислено",
  "Получено",
];

function Dashboard() {
  return (
    <>
      <div className="element-background flex flex-col gap-[15px]">
        <div className="flex flex-row items-center justify-between max-[787px]:items-start max-[576px]:flex-col">
          <div>
            <div className="text-[14px] text-[#8296A4]">
              {lang.stacking.ru.availableForReceipt}
            </div>
            <div className="text-[20px] text-[#fff] font-[700]">LP 800</div>
          </div>
          <div className="flex flex-row items-center gap-[15px] max-[787px]:flex-col ">
            <Button type="button" view="primary">
              Вывести прибыль
            </Button>
            <Button type="button" view="secondary">
              Реинвестировать
            </Button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <Table
            header={tableHeader}
            rows={fakeData}
            rowItem={(row: Row, i: number) => (
              <tr key={row.number}>
                <RowItem
                  item={row.number}
                  optionalStyle={`${
                    i % 2 === 0 ? "" : "bg-[#262D39] rounded-l-md"
                  }`}
                />
                <RowItem
                  item={row.data}
                  optionalStyle={`${i % 2 === 0 ? "" : "bg-[#262D39]"}`}
                />
                <RowItem
                  item={row.period}
                  optionalStyle={`${i % 2 === 0 ? "" : "bg-[#262D39]"}`}
                />
                <RowItem
                  item={row.sum}
                  optionalStyle={`${i % 2 === 0 ? "" : "bg-[#262D39]"}`}
                />
                <RowItem
                  item={row.percent}
                  optionalStyle={`${i % 2 === 0 ? "" : "bg-[#262D39]"}`}
                />
                <RowItem
                  item={row.added}
                  optionalStyle={`${i % 2 === 0 ? "" : "bg-[#262D39]"}`}
                />
                <RowItem
                  item={row.withdrawn}
                  optionalStyle={`${
                    i % 2 === 0 ? "" : "bg-[#262D39] rounded-r-md"
                  }`}
                />
              </tr>
            )}
          />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
