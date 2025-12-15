"use client";

import * as React from "react";
import type {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
} from "@tanstack/react-table";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";

import { Button } from "./Button";
import { Checkbox } from "./CheckBox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./Dropdown-menu";
import { Input } from "./Input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./Table";
import { NavLink } from "react-router-dom";
import { RouteDashboardInventory } from "../../pages/Routes";

export type Purchases = {
  orderDate: string;
  orderType: string;
  unitPrice: string;
  qty: number;
  discount: string;
  orderTotal: string;
  status: string;
};

export type Products = {
  id: string;
  productName: string;
  category: string;
  unitPrice: string;
  inStock: string | number;
  discount: string;
  totalValue: string;
  action: string;
  status: string;
  productImageUrl: string;
  lastOrder: string;
  published: string;
  allTimePrice: string;
  priceChange: string;
  allTimeInStock: number;
  inStockChange: string;
  totalOrders: number;
  ordersChange: string;
  views: number;
  viewsChange: string;
  favourite: number;
  favouriteChange: string;
  allOrders: number;
  allOrdersChange: string;
  pending: number;
  pendingChange: string;
  completed: number;
  completedChange: string;
  canceled: number;
  canceledChange: string;
  returned: number;
  returnedChange: string;
  damaged: number;
  damagedChange: string;
  purchases: Purchases[];
};

export const data: Products[] = [
  {
    id: "1",
    productName: "iPhone 13 Pro",
    category: "Gadgets",
    unitPrice: "₦1,225,000.00",
    inStock: 8,
    discount: "₦0.00",
    totalValue: "₦50,000.00",
    action: "Publish",
    status: "Published",
    productImageUrl:
      "https://img-prd-pim.poorvika.com/product/apple-iphone-13-pro-alpine-green-1TBgb-front-side-view.png",
    lastOrder: "12 Sept 2022",
    published: "Published",
    allTimePrice: "₦25,000.00",
    priceChange: "+0.00%",
    allTimeInStock: 20,
    inStockChange: "+0.00%",
    totalOrders: 1200,
    ordersChange: "+0.00%",
    views: 23,
    viewsChange: "+0.00%",
    favourite: 50,
    favouriteChange: "+0.00%",
    allOrders: 1,
    allOrdersChange: "+0.00%",
    pending: 0,
    pendingChange: "+0.00%",
    completed: 1,
    completedChange: "+0.00%",
    canceled: 0,
    canceledChange: "-20%",
    returned: 0,
    returnedChange: "+0.00%",
    damaged: 0,
    damagedChange: "+0.00%",
    purchases: [
      {
        orderDate: "12 Aug 2022 - 12:25 am",
        orderType: "Home Delivery",
        unitPrice: "₦25,000.00",
        qty: 2,
        discount: "₦0.00",
        orderTotal: "₦50,000.00",
        status: "Completed",
      },
    ],
  },
  {
    id: "2",
    productName: "iPhone 12 Pro",
    category: "Gadgets",
    unitPrice: "₦725,000.00",
    inStock: 12,
    discount: "₦0.00",
    totalValue: "₦50,000.00",
    action: "Publish",
    status: "Published",
    productImageUrl:
      "https://i.ebayimg.com/images/g/eacAAOSwR-li6O-m/s-l640.jpg",
    lastOrder: "12 Sept 2022",
    published: "Published",
    allTimePrice: "₦25,000.00",
    priceChange: "+0.00%",
    allTimeInStock: 20,
    inStockChange: "+0.00%",
    totalOrders: 1200,
    ordersChange: "+0.00%",
    views: 23,
    viewsChange: "+0.00%",
    favourite: 50,
    favouriteChange: "+0.00%",
    allOrders: 1,
    allOrdersChange: "+0.00%",
    pending: 0,
    pendingChange: "+0.00%",
    completed: 1,
    completedChange: "+0.00%",
    canceled: 0,
    canceledChange: "-20%",
    returned: 0,
    returnedChange: "+0.00%",
    damaged: 0,
    damagedChange: "+0.00%",
    purchases: [
      {
        orderDate: "12 Aug 2022 - 12:25 am",
        orderType: "Home Delivery",
        unitPrice: "₦25,000.00",
        qty: 2,
        discount: "₦0.00",
        orderTotal: "₦50,000.00",
        status: "Completed",
      },
    ],
  },
  {
    id: "3",
    productName: "Polo T-Shirt",
    category: "Fashion",
    unitPrice: "₦125,000.00",
    inStock: 120,
    discount: "₦0.00",
    totalValue: "₦50,000.00",
    action: "Unpublish",
    status: "Unpublished",
    productImageUrl:
      "https://avatars.mds.yandex.net/get-mpic/12280826/2a00000195e38318b76f8ff8802815b2a9fe/orig",
    lastOrder: "12 Sept 2022",
    published: "Published",
    allTimePrice: "₦25,000.00",
    priceChange: "+0.00%",
    allTimeInStock: 20,
    inStockChange: "+0.00%",
    totalOrders: 1200,
    ordersChange: "+0.00%",
    views: 23,
    viewsChange: "+0.00%",
    favourite: 50,
    favouriteChange: "+0.00%",
    allOrders: 1,
    allOrdersChange: "+0.00%",
    pending: 0,
    pendingChange: "+0.00%",
    completed: 1,
    completedChange: "+0.00%",
    canceled: 0,
    canceledChange: "-20%",
    returned: 0,
    returnedChange: "+0.00%",
    damaged: 0,
    damagedChange: "+0.00%",
    purchases: [
      {
        orderDate: "12 Aug 2022 - 12:25 am",
        orderType: "Home Delivery",
        unitPrice: "₦25,000.00",
        qty: 2,
        discount: "₦0.00",
        orderTotal: "₦50,000.00",
        status: "Completed",
      },
    ],
  },
  {
    id: "4",
    productName: "Polo T-Shirt",
    category: "Fashion",
    unitPrice: "₦125,000.00",
    inStock: "Out of Stock",
    discount: "₦0.00",
    totalValue: "₦0.00",
    action: "Unpublish",
    status: "Unpublished",
    productImageUrl:
      "https://i.ebayimg.com/images/g/5HEAAOSwn6hnC8lk/s-l500.jpg",
    lastOrder: "12 Sept 2022",
    published: "Published",
    allTimePrice: "₦25,000.00",
    priceChange: "+0.00%",
    allTimeInStock: 20,
    inStockChange: "+0.00%",
    totalOrders: 1200,
    ordersChange: "+0.00%",
    views: 23,
    viewsChange: "+0.00%",
    favourite: 50,
    favouriteChange: "+0.00%",
    allOrders: 1,
    allOrdersChange: "+0.00%",
    pending: 0,
    pendingChange: "+0.00%",
    completed: 1,
    completedChange: "+0.00%",
    canceled: 0,
    canceledChange: "-20%",
    returned: 0,
    returnedChange: "+0.00%",
    damaged: 0,
    damagedChange: "+0.00%",
    purchases: [
      {
        orderDate: "12 Aug 2022 - 12:25 am",
        orderType: "Home Delivery",
        unitPrice: "₦25,000.00",
        qty: 2,
        discount: "₦0.00",
        orderTotal: "₦50,000.00",
        status: "Completed",
      },
    ],
  },
  {
    id: "5",
    productName: "Polo T-Shirt",
    category: "Fashion",
    unitPrice: "₦125,000.00",
    inStock: "Out of Stock",
    discount: "₦0.00",
    totalValue: "₦0.00",
    action: "Unpublish",
    status: "Unpublished",
    productImageUrl:
      "https://img.joomcdn.net/29c7ffc83741e9a079c2b839c40abade1ef26225_original.jpeg",
    lastOrder: "12 Sept 2022",
    published: "Published",
    allTimePrice: "₦25,000.00",
    priceChange: "+0.00%",
    allTimeInStock: 20,
    inStockChange: "+0.00%",
    totalOrders: 1200,
    ordersChange: "+0.00%",
    views: 23,
    viewsChange: "+0.00%",
    favourite: 50,
    favouriteChange: "+0.00%",
    allOrders: 1,
    allOrdersChange: "+0.00%",
    pending: 0,
    pendingChange: "+0.00%",
    completed: 1,
    completedChange: "+0.00%",
    canceled: 0,
    canceledChange: "-20%",
    returned: 0,
    returnedChange: "+0.00%",
    damaged: 0,
    damagedChange: "+0.00%",
    purchases: [
      {
        orderDate: "12 Aug 2022 - 12:25 am",
        orderType: "Home Delivery",
        unitPrice: "₦25,000.00",
        qty: 2,
        discount: "₦0.00",
        orderTotal: "₦50,000.00",
        status: "Completed",
      },
    ],
  },
  {
    id: "6",
    productName: "iPhone 13 Pro",
    category: "Gadgets",
    unitPrice: "₦1,225,000.00",
    inStock: 8,
    discount: "₦0.00",
    totalValue: "₦50,000.00",
    action: "Publish",
    status: "Published",
    productImageUrl:
      "https://i.moyo.ua/img/products/6385/82_4000.jpg?1742556685",
    lastOrder: "12 Sept 2022",
    published: "Published",
    allTimePrice: "₦25,000.00",
    priceChange: "+0.00%",
    allTimeInStock: 20,
    inStockChange: "+0.00%",
    totalOrders: 1200,
    ordersChange: "+0.00%",
    views: 23,
    viewsChange: "+0.00%",
    favourite: 50,
    favouriteChange: "+0.00%",
    allOrders: 1,
    allOrdersChange: "+0.00%",
    pending: 0,
    pendingChange: "+0.00%",
    completed: 1,
    completedChange: "+0.00%",
    canceled: 0,
    canceledChange: "-20%",
    returned: 0,
    returnedChange: "+0.00%",
    damaged: 0,
    damagedChange: "+0.00%",
    purchases: [
      {
        orderDate: "12 Aug 2022 - 12:25 am",
        orderType: "Home Delivery",
        unitPrice: "₦25,000.00",
        qty: 2,
        discount: "₦0.00",
        orderTotal: "₦50,000.00",
        status: "Completed",
      },
    ],
  },
  {
    id: "7",
    productName: "iPhone 12 Pro",
    category: "Gadgets",
    unitPrice: "₦725,000.00",
    inStock: 12,
    discount: "₦0.00",
    totalValue: "₦50,000.00",
    action: "Publish",
    status: "Published",
    productImageUrl:
      "https://i.ebayimg.com/images/g/e1oAAOSwOzRjLBOt/s-l640.jpg",
    lastOrder: "12 Sept 2022",
    published: "Published",
    allTimePrice: "₦25,000.00",
    priceChange: "+0.00%",
    allTimeInStock: 20,
    inStockChange: "+0.00%",
    totalOrders: 1200,
    ordersChange: "+0.00%",
    views: 23,
    viewsChange: "+0.00%",
    favourite: 50,
    favouriteChange: "+0.00%",
    allOrders: 1,
    allOrdersChange: "+0.00%",
    pending: 0,
    pendingChange: "+0.00%",
    completed: 1,
    completedChange: "+0.00%",
    canceled: 0,
    canceledChange: "-20%",
    returned: 0,
    returnedChange: "+0.00%",
    damaged: 0,
    damagedChange: "+0.00%",
    purchases: [
      {
        orderDate: "12 Aug 2022 - 12:25 am",
        orderType: "Home Delivery",
        unitPrice: "₦25,000.00",
        qty: 2,
        discount: "₦0.00",
        orderTotal: "₦50,000.00",
        status: "Completed",
      },
    ],
  },
  {
    id: "8",
    productName: "iPhone 13 Pro",
    category: "Gadgets",
    unitPrice: "₦1,225,000.00",
    inStock: 8,
    discount: "₦0.00",
    totalValue: "₦50,000.00",
    action: "Publish",
    status: "Published",
    productImageUrl:
      "https://avatars.mds.yandex.net/get-marketpic/1847688/pic96d006648fb503611985e24f7b6152ab/orig",
    lastOrder: "12 Sept 2022",
    published: "Published",
    allTimePrice: "₦25,000.00",
    priceChange: "+0.00%",
    allTimeInStock: 20,
    inStockChange: "+0.00%",
    totalOrders: 1200,
    ordersChange: "+0.00%",
    views: 23,
    viewsChange: "+0.00%",
    favourite: 50,
    favouriteChange: "+0.00%",
    allOrders: 1,
    allOrdersChange: "+0.00%",
    pending: 0,
    pendingChange: "+0.00%",
    completed: 1,
    completedChange: "+0.00%",
    canceled: 0,
    canceledChange: "-20%",
    returned: 0,
    returnedChange: "+0.00%",
    damaged: 0,
    damagedChange: "+0.00%",
    purchases: [
      {
        orderDate: "12 Aug 2022 - 12:25 am",
        orderType: "Home Delivery",
        unitPrice: "₦25,000.00",
        qty: 2,
        discount: "₦0.00",
        orderTotal: "₦50,000.00",
        status: "Completed",
      },
    ],
  },
  {
    id: "9",
    productName: "iPhone 12 Pro",
    category: "Gadgets",
    unitPrice: "₦725,000.00",
    inStock: 12,
    discount: "₦0.00",
    totalValue: "₦50,000.00",
    action: "Publish",
    status: "Published",
    productImageUrl:
      "https://i.ebayimg.com/images/g/a4QAAOSwnGljcQWv/s-l960.jpg",
    lastOrder: "12 Sept 2022",
    published: "Published",
    allTimePrice: "₦25,000.00",
    priceChange: "+0.00%",
    allTimeInStock: 20,
    inStockChange: "+0.00%",
    totalOrders: 1200,
    ordersChange: "+0.00%",
    views: 23,
    viewsChange: "+0.00%",
    favourite: 50,
    favouriteChange: "+0.00%",
    allOrders: 1,
    allOrdersChange: "+0.00%",
    pending: 0,
    pendingChange: "+0.00%",
    completed: 1,
    completedChange: "+0.00%",
    canceled: 0,
    canceledChange: "-20%",
    returned: 0,
    returnedChange: "+0.00%",
    damaged: 0,
    damagedChange: "+0.00%",
    purchases: [
      {
        orderDate: "12 Aug 2022 - 12:25 am",
        orderType: "Home Delivery",
        unitPrice: "₦25,000.00",
        qty: 2,
        discount: "₦0.00",
        orderTotal: "₦50,000.00",
        status: "Completed",
      },
    ],
  },
  {
    id: "10",
    productName: "Polo T-Shirt",
    category: "Fashion",
    unitPrice: "₦125,000.00",
    inStock: 120,
    discount: "₦0.00",
    totalValue: "₦50,000.00",
    action: "Unpublish",
    status: "Unpublished",
    productImageUrl:
      "https://i5.walmartimages.com/asr/17da7bc4-65a4-4139-b63c-93ccfff463d1.8828fed73be308bdade072722e6954ac.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFFhttps://contents.mediadecathlon.com/p2080002/k$3cc4239c8f88d49fc45b0c153d983ee5/sq/polo-shirt.jpg",
    lastOrder: "12 Sept 2022",
    published: "Published",
    allTimePrice: "₦25,000.00",
    priceChange: "+0.00%",
    allTimeInStock: 20,
    inStockChange: "+0.00%",
    totalOrders: 1200,
    ordersChange: "+0.00%",
    views: 23,
    viewsChange: "+0.00%",
    favourite: 50,
    favouriteChange: "+0.00%",
    allOrders: 1,
    allOrdersChange: "+0.00%",
    pending: 0,
    pendingChange: "+0.00%",
    completed: 1,
    completedChange: "+0.00%",
    canceled: 0,
    canceledChange: "-20%",
    returned: 0,
    returnedChange: "+0.00%",
    damaged: 0,
    damagedChange: "+0.00%",
    purchases: [
      {
        orderDate: "12 Aug 2022 - 12:25 am",
        orderType: "Home Delivery",
        unitPrice: "₦25,000.00",
        qty: 2,
        discount: "₦0.00",
        orderTotal: "₦50,000.00",
        status: "Completed",
      },
    ],
  },
];

export const columns: ColumnDef<Products>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "productName", // yeh rehne do
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Product Name
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),

    cell: ({ row }) => {
      const item = row.original; // is me full row ka data hota hai

      return (
        <div className="flex items-center gap-3 capitalize">
          <img
            src={item.productImageUrl}
            alt={item.productName}
            className="w-10 h-10 rounded-md object-cover"
          />
          <span>{item.productName}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "category",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Category
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("category")}</div>
    ),
  },
  {
    accessorKey: "unitPrice",
    header: () => {
      return <div>Unit Price</div>;
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("unitPrice")}</div>
    ),
  },
  {
    accessorKey: "inStock",
    header: () => {
      return <div>In-Stock</div>;
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("inStock")}</div>
    ),
  },
  {
    accessorKey: "discount",
    header: () => {
      return <div>Discount</div>;
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("discount")}</div>
    ),
  },
  {
    accessorKey: "totalValue",
    header: () => {
      return <div>Total Value</div>;
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("totalValue")}</div>
    ),
  },
  {
    accessorKey: "action",
    header: () => <div className="text-right">Action</div>,
    cell: ({ row }) => {
      return (
        <div className="text-right font-medium">{row.getValue("action")}</div>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.productName)}
            >
              Copy Product Name
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              {
                <NavLink to={`${RouteDashboardInventory}/${payment.id}`}>
                  View Inventory Detailes
                </NavLink>
              }
            </DropdownMenuItem>
            {/* <DropdownMenuItem>View payment details</DropdownMenuItem> */}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div
        className={`capitalize rounded-xl text-center p-0.5 ${
          row.getValue("status") === "Completed"
            ? "bg-[#32936F29] text-[#519C66]"
            : row.getValue("status") === "In-Progress"
            ? "bg-[#5570F129] text-[#5570F1]"
            : row.getValue("status") === "failed"
            ? "bg-red-200 text-red-500"
            : row.getValue("status") === "Pending"
            ? "bg-[#FFF2E2] text-[#1C1D22]"
            : ""
        }`}
      >
        {row.getValue("status")}
      </div>
    ),
  },
];

function InventoryTable() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="lg:w-full! lg:overflow-auto! w-full bg-white p-4 rounded-xl">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter Product Name..."
          value={
            (table.getColumn("productName")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("productName")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="overflow-hidden rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="text-muted-foreground flex-1 text-sm">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
export default InventoryTable;
