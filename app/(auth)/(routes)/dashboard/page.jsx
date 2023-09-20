import { user, overlay, macbook } from "@/assets";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow, } from "@/components/ui/table";
import Image from "next/image";
import React from "react";

const statusBoard = [
  { title: 'Jumlah User', user: 150, name: 'User' },
  { title: 'Jumlah User Aktif', user: 150, name: 'User' },
  { title: 'Jumlah Product', user: 150, name: 'Product' },
  { title: 'Jumlah Product Active', user: 150, name: 'Product' },
]

export default function page() {

  return (
    <>
      <section>
        <h3 className="text-xl font-semibold">Dashboard</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-2 mb-4">
          {statusBoard.map((item, index) => (
            <>
              <div className="flex items-center mt-12 justify-start h-24 rounded relative">
                <div className="absolute inset-0">
                  <Image
                    src={overlay}
                    alt="overlay"
                    className="w-full h-[180px] object-fill bg-center"
                  />
                </div>

                <div className="relative z-10 space-y-2 pt-10 pl-10">
                  <h1 className="text-sm">{item.title}</h1>
                  <h2 className="text-sm flex items-center text-gray-400 dark:text-gray-500">
                    {item.user} {item.name}
                  </h2>
                </div>
              </div>
            </>
          ))}
        </div>
        <div className="mt-20">
          <Tables/>
        </div>
      </section>
    </>
  );
}


function Tables (){
  return (
    <>
      <div className="p-4 space-y-5 ">
          <h1>Product Terbaru</h1>
          <Table className="p-3 md:w-[600px]">
            <TableCaption>Products</TableCaption>
            <TableHeader className="bg-blue-500">
                <TableRow className="rounded-lg">
                  <TableHead className="text-white">Product</TableHead>
                  <TableHead className="text-white">Tanggal Dibuat</TableHead>
                  <TableHead className="text-white">Harga (RP)</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="flex gap-2 items-center">
                  <Image src={macbook} alt="overlay" className="rounded-lg h-10 w-10" />
                  <span>Laptop Macbook Pro</span>
                </TableCell>
                <TableCell>12 Mei 2023</TableCell>
                <TableCell>1.000</TableCell>
              </TableRow>
            </TableBody>
          </Table>
      </div>
    </>
  )
}
