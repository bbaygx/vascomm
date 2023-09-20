import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import React from 'react'
import { BiEdit } from 'react-icons/bi'
import { BsEye } from 'react-icons/bs'
import { RiDeleteBinLine } from 'react-icons/ri'
import { FiToggleRight } from 'react-icons/fi'

export default function page() {


  return (
    <div>
      <div className="flex justify-end">
       <Button className="bg-blue-500">
          <ModalBox title="Tambah Data "><span>Tambah Data User</span></ModalBox>
       </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>No</TableHead>
            <TableHead>Nama Lengkap</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>No Telepon</TableHead>
            <TableHead>Status</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* Loop Here */}
          <TableRow className="bg-gray-200">
            <TableCell>1</TableCell>
            <TableCell>Bayu Putra Efendi</TableCell>
            <TableCell>bayuputraefendi993@gmail.com</TableCell>
            <TableCell>081380952872</TableCell>
            <TableCell>
              <Badge className="bg-green-500">Active</Badge>
              {/* <span className="py-2 text-sm px-5 rounded-full bg-green-400">Active</span> */}
            </TableCell>
            <TableCell className="flex gap-3 text-2xl">
              <div>
                <BsEye className='p-1 bg-green-500 rounded-full text-white'/>
              </div>
              <div>
                <ModalBox title="Ubah Data">
                  <BiEdit className='p-1 bg-yellow-500 rounded-full text-white' />
                </ModalBox>
              </div>
              <div>
                <DeleteBox><RiDeleteBinLine className='p-1 bg-red-500 rounded-full text-white' /></DeleteBox>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}


function ModalBox ({title, children}){
  return (
        <Dialog>
        <DialogTrigger asChild>
          {children}
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-center">{title} User</DialogTitle>
          </DialogHeader>
          <form action='#' className="space-y-8">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="nama">Nama</Label>
          <Input type="text" id="nama" placeholder="Masukkan Nama" required/>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="no_telp">Nomor Telepon</Label>
          <Input type="number" id="no_telp" placeholder="Masukkan Nomor Telepon" required/>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Masukkan Email" required/>
        </div>
        <div className="">
          <Button className="bg-blue-600 w-full">Simpan</Button>
        </div>
        </form>
        </DialogContent>

      </Dialog>
  )
}

function DeleteBox({children}){
  return(
    <Dialog>
      <DialogTrigger >{children}</DialogTrigger>
      <DialogContent>
          <div className="">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" d="M0,192L80,202.7C160,213,320,235,480,224C640,213,800,171,960,176C1120,181,1280,235,1360,261.3L1440,288L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
          </div>
          <div className="flex justify-center -translate-y-12">
           <FiToggleRight size={70} className='p-4 text-white rounded-full bg-red-700'/>
          </div>
          <DialogTitle className="text-center text-xl">Konfirmasi Hapus</DialogTitle>
          <DialogDescription className="text-center">Apa kamu yakin ingin menghapus {`{ Nama user }`} ?</DialogDescription>
          <hr className='border'/>
          <div className="flex w-full gap-3 justify-end">
              <Button className="bg-red-600">Hapus</Button>
          </div>
      </DialogContent>
    </Dialog>
  )
}