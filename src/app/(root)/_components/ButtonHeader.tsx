"use client";

import React, { useState } from "react";
import { useRouter } from 'next/navigation'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input} from "@nextui-org/react";
import toast from "react-hot-toast";
import { DomainIcon } from "@/src/components/Ui/Icons/DomainIcon";



export function ButtonHeaderSignup() {
    const router = useRouter()
  return (
    <>
      <Button
      onClick={() => router.push('/signup')}
       className="w-full justify-center text-white font-bold px-5 py-2.5 bg-blue-600 rounded-xl">
        Đăng ký
      </Button>
    </>
  );
}

export function ButtonHeaderLogin() {
    const router = useRouter()
    const {isOpen, onOpen, onOpenChange, onClose} = useDisclosure();
    const [inputValue, setInputValue] = useState("")

    const handleSubmit = () => {
      if (inputValue == "") {
        toast.error("Vui lòng nhập đường link liên kết của bạn")
      } else {
        router.push(`http://${inputValue}.${process.env.NEXT_PUBLIC_HOSTNAME_PATH}/login`)
        toast.success("Heading to login page!")
        onClose()
      }
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
    };
  return (
    <>
      <Button
      onPress={onOpen}
      className="w-full justify-center text-white font-bold px-5 py-2.5 bg-fuchsia-800 rounded-xl"
      >
        Đăng nhập
      </Button>
      
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1 font-bold text-lg">Đăng nhập tài khoản WeldingStore</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  endContent={
                    <DomainIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label=".webweldingstore.vercel.app"
                  onChange={handleChange}
                  value={inputValue}
                  placeholder="Địa chỉ truy cập cửa hàng"
                  variant="bordered"
                />
              </ModalBody>
              <ModalFooter>
                <Button 
                className="font-semibold" 
                color="primary" 
                onPress={handleSubmit}
                >
                  Vào cửa hàng
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
