"use client";

import React, { useState } from "react";
import { useRouter } from 'next/navigation'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input} from "@nextui-org/react";
import { DomainIcon } from "../Icons/DomainIcon";
import toast from "react-hot-toast";
import Cookies from 'js-cookie'

export function PCButtonHeaderSignup() {
    const router = useRouter()
  return (
    <>
      <button
      onClick={() => router.push('/signup')}
       className="justify-center px-5 py-2.5 bg-blue-600 rounded-xl">
        Đăng ký
      </button>
    </>
  );
}

export function PCButtonHeaderLogin() {
    const router = useRouter()
    const {isOpen, onOpen, onOpenChange, onClose} = useDisclosure();
    const [inputValue, setInputValue] = useState("")

    const handleSubmit = () => {
      const checkCookie = Cookies.get('agencyDomain')
      if(checkCookie){
        Cookies.remove('agencyDomain')
      }
      if (inputValue == "") {
        toast.error("Vui lòng nhập đường link liên kết của bạn")
      } else {
        router.push(`http://${inputValue}.webweldingstore.vercel.app`)
        // Cookies.set('agencyDomain', inputValue)
        router.push(`/login`)
        toast.success("Submit success, go to login!")
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
      className="justify-center text-white font-bold px-5 py-2.5 bg-fuchsia-800 rounded-xl"
      >
        Đăng nhập
      </Button>
      
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
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
