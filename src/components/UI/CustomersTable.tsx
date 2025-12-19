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
import { CheckBox } from "./checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { Input } from "./input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";
import { NavLink } from "react-router-dom";
import { RouteDashboardCustomers } from "../../pages/Routes";

export const data: Payment[] = [
  {
    id: "m5gr84i9",
    amount: 316,
    status: "Completed",
    email: "ken99@example.com",
    name: "Kenneth Green",
    phone: "+1-202-555-0134",
    orders: 5,
    orderTotal: 1200,
    customerSince: "2021-03-12",

    // NEW FIELDS
    lastOrder: "12 Sept 2022 – 12:55 pm",
    homeAddress: "No. 15 Adekunle Street, Yaba, Lagos State",
    billingAddress: "No. 15 Adekunle Street, Yaba, Lagos State",
    abandonedCart: 2,

    allOrders: 10,
    pending: 2,
    completed: 8,
    canceled: 0,
    returned: 0,
    damaged: 0,

    totalOrdersAmount: 25000,

    ordersList: [
      {
        date: "12 Aug 2022 - 12:25 am",
        type: "Home Delivery",
        tracking: "9348fj73",
        total: 25000,
        action: "Completed",
        status: "Completed",
      },
      {
        date: "12 Aug 2022 - 12:25 am",
        type: "Home Delivery",
        tracking: "9348fj73",
        total: 25000,
        action: "In-Progress",
        status: "In-Progress",
      },
      {
        date: "12 Aug 2022 - 12:25 am",
        type: "Pick Up",
        tracking: "9348fj73",
        total: 25000,
        action: "Pending",
        status: "Pending",
      },
    ],
  },

  {
    id: "3u1reuv4",
    amount: 242,
    status: "Completed",
    email: "Abe45@example.com",
    name: "Abel Johnson",
    phone: "+1-202-555-0178",
    orders: 3,
    orderTotal: 650,
    customerSince: "2022-01-05",

    lastOrder: "10 Sept 2022 – 04:30 pm",
    homeAddress: "Block 3, Lekki Phase 1, Lagos",
    billingAddress: "Block 3, Lekki Phase 1, Lagos",
    abandonedCart: 1,

    allOrders: 5,
    pending: 1,
    completed: 4,
    canceled: 0,
    returned: 0,
    damaged: 0,

    totalOrdersAmount: 12000,

    ordersList: [
      {
        date: "05 Aug 2022",
        type: "Home Delivery",
        tracking: "7438fd92",
        total: 12000,
        action: "Completed",
        status: "Completed",
      },
    ],
  },

  {
    id: "derv1ws0",
    amount: 837,
    status: "In-Progress",
    email: "Monserrat44@example.com",
    name: "Monserrat Diaz",
    phone: "+1-202-555-0199",
    orders: 7,
    orderTotal: 3500,
    customerSince: "2020-07-21",

    lastOrder: "03 Sept 2022 – 08:10 pm",
    homeAddress: "Apt 22, Downtown Street, NY",
    billingAddress: "Apt 22, Downtown Street, NY",
    abandonedCart: 0,

    allOrders: 15,
    pending: 3,
    completed: 10,
    canceled: 1,
    returned: 0,
    damaged: 1,

    totalOrdersAmount: 37000,

    ordersList: [
      {
        date: "20 Aug 2022",
        type: "Pick Up",
        tracking: "9983lp12",
        total: 37000,
        action: "In-Progress",
        status: "In-Progress",
      },
    ],
  },

  {
    id: "5kma53ae",
    amount: 874,
    status: "Completed",
    email: "Silas22@example.com",
    name: "Silas Thompson",
    phone: "+1-202-555-0145",
    orders: 10,
    orderTotal: 5500,
    customerSince: "2019-11-11",

    lastOrder: "01 Sept 2022 – 10:00 am",
    homeAddress: "6th Avenue, Manhattan, NY",
    billingAddress: "6th Avenue, Manhattan, NY",
    abandonedCart: 0,

    allOrders: 20,
    pending: 2,
    completed: 18,
    canceled: 0,
    returned: 0,
    damaged: 0,

    totalOrdersAmount: 58000,

    ordersList: [
      {
        date: "15 Aug 2022",
        type: "Home Delivery",
        tracking: "abc94212",
        total: 58000,
        action: "Completed",
        status: "Completed",
      },
    ],
  },

  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    email: "carmella@example.com",
    name: "Carmella Smith",
    phone: "+1-202-555-0167",
    orders: 4,
    orderTotal: 1800,
    customerSince: "2021-06-02",

    lastOrder: "02 Sept 2022 – 06:40 pm",
    homeAddress: "Westwood St, California",
    billingAddress: "Westwood St, California",
    abandonedCart: 3,

    allOrders: 12,
    pending: 4,
    completed: 5,
    canceled: 2,
    returned: 1,
    damaged: 0,

    totalOrdersAmount: 15000,

    ordersList: [
      {
        date: "18 Aug 2022",
        type: "Home Delivery",
        tracking: "pqr99822",
        total: 15000,
        action: "Failed",
        status: "Failed",
      },
    ],
  },
];

export type Payment = {
  id: string;
  amount: number;
  orders: number;
  orderTotal: number;
  status: "pending" | "In-Progress" | "Completed" | "failed";
  email: string;
  name: string;
  phone: string;
  customerSince: string;

  // NEW FIELDS
  lastOrder: string;
  homeAddress: string;
  billingAddress: string;

  abandonedCart: number;

  allOrders: number;
  pending: number;
  completed: number;
  canceled: number;
  returned: number;
  damaged: number;

  totalOrdersAmount: number;

  ordersList: {
    date: string;
    type: string;
    tracking: string;
    total: number;
    action: string;
    status: "Completed" | "In-Progress" | "Pending" | "Failed";
  }[];
};

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <CheckBox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value: boolean) =>
          table.toggleAllPageRowsSelected(!!value)
        }
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <CheckBox
        checked={row.getIsSelected()}
        onCheckedChange={(value: boolean) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "phone",
    header: () => {
      return <div>Phone</div>;
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("phone")}</div>,
  },
  {
    accessorKey: "orders",
    header: () => {
      return <div>Orders</div>;
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("orders")}</div>
    ),
  },
  {
    accessorKey: "orderTotal",
    header: () => {
      return <div>Order Total</div>;
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("orderTotal")}</div>
    ),
  },
  {
    accessorKey: "customerSince",
    header: () => {
      return <div>Customer Since</div>;
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("customerSince")}</div>
    ),
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
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
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              {
                <NavLink to={`${RouteDashboardCustomers}/${payment.id}`}>
                  View customer
                </NavLink>
              }
            </DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
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
        className={`capitalize rounded-xl text-center px-2 p-0.5 ${
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

function CustomersTable() {
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
          placeholder="Filter emails..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Handle Layout <ChevronDown />
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
                    onCheckedChange={(value: boolean) =>
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
      <div className="overflow-hidden rounded-md border max-h-[150px] overflow-y-auto">
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
export default CustomersTable;
