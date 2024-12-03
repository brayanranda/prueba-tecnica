import React from 'react'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DataTable } from '../../../components/DataTable';


export default function PostList({ dataPost }) {

  const columns = [
    {
      accessorKey: "status",
      header: "Status",
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "amount",
      header: "Amount",
    },
    {
      id: "actions",
      cell: ({ row }) => (
        <Button onClick={() => handleAction(row.original)} size="sm">
          <FontAwesomeIcon icon={faPencil} />
          Editar
        </Button>
      ),
    },
  ];
  
  function handleAction(dataPost) {
    console.log(dataPost);
  }

  return (
    <div>
        <DataTable columns={columns} data={dataPost} />
        PostList
    </div>
  )
}
