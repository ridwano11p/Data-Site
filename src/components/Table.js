import Tableimage from "./Tableimage";

const ShoppingTable = (props) => {
  const { items } = props;

  return (
    <>
      <table className="w-full table-auto">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2">Item Details</th>
            <th className="px-4 py-2">Purchase Cost</th>
            <th className="px-4 py-2">Selling Price</th>
            <th className="px-4 py-2">Stock on Hand</th>
            <th className="px-4 py-2">Reorder Level</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr>
              <td className="px-4 py-2 flex items-center border-t border-gray-200">
                <Tableimage />
                <span className=" ml-5 text-blue-500">{item.name}</span>
              </td>
              <td className="px-4 py-2 border-t border-gray-200">
                ${item.purchaseCost}
              </td>
              <td className="px-4 py-2 border-t border-gray-200">
                $ {item.sellingPrice}
              </td>
              <td className="px-4 py-2 border-t border-gray-200">
                {item.stocksOnHand}
              </td>
              <td className="px-4 py-2 border-t border-gray-200">
                {item.reOrderLevel}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ShoppingTable;
