import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsCheck, BsChevronDown } from "react-icons/bs"

interface Props {
  onSelectSortOrder: (sortOrder: string) => void
  selectedSortOrder: string
}

const SortSelector = ({ onSelectSortOrder, selectedSortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ]

  const currentSortOrderLabel =
    sortOrders.find((order) => order.value === selectedSortOrder)?.label ||
    sortOrders[0].label

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSortOrderLabel}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            key={order.value}
            onClick={() => onSelectSortOrder(order.value)}
            justifyContent="space-between"
          >
            {order.label}
            {currentSortOrderLabel === order.label && <BsCheck size={20} />}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default SortSelector
