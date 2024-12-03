import React, { Fragment } from 'react'
import GenericModal from '../../../components/GenericModal';
import { Controller, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from "@/components/ui/button";

export default function PostForm({ setModal, onSubmit }) {
  
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const closeModal = () => {
    setModal(false);
    reset()
  }

  return (
    <Fragment>
      <GenericModal
        title="Registrar un post"
        close={closeModal}
      > 
        <form onSubmit={handleSubmit((data)=> {onSubmit(data); closeModal()})} className='py-5 space-y-3 flex flex-col'>
          <label>
            <p>User</p>
            <Controller
              name="userId"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value} className="w-full bg-gray-100 py-2 px-4 rounded-md">
                  <SelectTrigger>
                    <SelectValue placeholder="Select an user" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">User 1</SelectItem>
                    <SelectItem value="2">User 2</SelectItem>
                    <SelectItem value="3">User 3</SelectItem>
                    <SelectItem value="4">User 4</SelectItem>
                    <SelectItem value="5">User 5</SelectItem>
                    <SelectItem value="6">User 6</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          {errors.userId && <span className='text-sm text-red-700'>El Usuario es requerido</span>}
          </label>

          <label>
            <p>Title</p>
            <Input
              {...register("title", {
                required: true,
              })}
              type="text"
              id="title"
              className="bg-gray-100 py-2 px-4 rounded-md w-full resize-none"
            />
            {errors.title && <span className='text-sm text-red-700'>El titulo es requerido</span>}
          </label>

          <label>
            <p>Body</p>
            <Textarea
              {...register("body", {
                required: true,
              })}
              id="body"
              className="bg-gray-100 py-2 px-4 rounded-md w-full resize-none h-36"
            />
            {errors.body && <span className='text-sm text-red-700'>El body es requerido</span>}
          </label>

          <Button
              className="rounded-full bg-cyan text-white font-bold  py-2 px-4 hover:scale-105 duration-300 bg-sky-500 hover:bg-sky-600"
              type="submit"
          >
              <FontAwesomeIcon icon={faSave} className='mr-2' />
              Registrar
          </Button>
        </form>
      </GenericModal>
    </Fragment>
  )
}
