import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function columns(handleEdit, handleDelete) {
  return [
    {
      accessorKey: "id",
      header: "#",
    },
    {
      accessorKey: "userId",
      header: "User",
    },
    {
      accessorKey: "title",
      header: "Title",
    },
    {
      accessorKey: "body",
      header: "Body",
    },
    {
      header: "Actions",
      id: "actions",
      cell: ({ row }) => (
        <div className="flex gap-3">
          <Button
            onClick={() => handleEdit(row.original)}
            size="sm"
            className="rounded-full p-2 bg-amber-600 hover:bg-amber-800"
          >
            <FontAwesomeIcon icon={faPencil} />
          </Button>
          <Button
            onClick={() => handleDelete(row.original)}
            size="sm"
            className="rounded-full p-2 bg-red-600 hover:bg-red-800"
          >
            <FontAwesomeIcon icon={faTrash} />
          </Button>
        </div>
      ),
    },
  ];
}