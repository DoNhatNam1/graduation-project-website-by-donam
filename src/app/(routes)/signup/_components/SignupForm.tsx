"use client";

import {
  Button,
  Checkbox,
  Link,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { CgSpinner } from "react-icons/cg";
import React, { useRef, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import toast from "react-hot-toast";
import { app } from "@/src/libs/Firebase/firebase.config";
import { checkSignUpData } from "@/src/Actions/POST/HomePage/Authentication";
import { useRouter } from "next/navigation";
import countries from '@/src/Json/Countries.json'

type VerifyNumber = {
  "0": string;
  "1": string;
  "2": string;
  "3": string;
  "4": string;
  "5": string;
};

export default function SignupForm(): JSX.Element {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [checkboxStatus, setCheckboxStatus] = useState(false);
  const router = useRouter();
  const [ph, setPh] = useState("");
  const [name, setName] = useState("");
  const [area, setArea] = useState("");
  const [invalidError, setInvalidError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [verifyNumber, setVerifyNumber] = useState<VerifyNumber>({
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
  });

  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const auth = getAuth(app);



  const handleInputChange = (index: number, value: string) => {
    setInvalidError(false);

    // Create a copy of verifyNumber
    const newVerifyNumber = { ...verifyNumber };

    // Handle the value limitation for index 5
    if (index === 5) {
      // If backspace is pressed and value is empty, move the value to index 4
      if (value === "") {
        newVerifyNumber[index] = ""; // Clear current index
        newVerifyNumber[(index - 1).toString() as keyof VerifyNumber] =
          verifyNumber[index]; // Move value to previous index
      } else {
        // Limit index 5 to only one character
        newVerifyNumber[index] = value.charAt(0);
      }
    } else {
      // Update the value at the specified index
      newVerifyNumber[index.toString() as keyof VerifyNumber] = value;
    }

    // Set the updated verifyNumber state
    setVerifyNumber(newVerifyNumber);

    // Handle focusing based on conditions
    if (value === "" && index > 0) {
      inputRefs[index - 1].current?.focus();
    } else if (value.length === 1 && index < 5) {
      inputRefs[index + 1].current?.focus();
    }
  };

  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response: any) => {
            onSignup();
          },
          "expired-callback": () => {},
        }
      );
    }
  }

  function onSignup() {
    setLoading(true);
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = "+" + ph;

    if (!checkboxStatus) {
      toast.error("Vui lòng xác nhận lại thông tin!");
      setLoading(false);
      return;
    }

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        onOpen();
        toast.success("OTP sended successfully!");
      })
      .catch((error) => {
        console.log(error);
        toast.error(
          "Error 404! Please try again in a few second or contact to our support team to get help!"
        );
        setLoading(false);
      });
  }

  function onOTPVerify() {
    setLoading(true);

    const verificationNumber = Object.values(verifyNumber).join("");
    if (verificationNumber.length !== 6) {
      setInvalidError(true);
      setLoading(false);
      return;
    }

    window.confirmationResult
      .confirm(verificationNumber)
      .then(async () => {
        let country = "";
        let nationalNumber = "";
        let phLength = null;

        if (ph !== "") {
          phLength = String(ph).length;
        }
        switch (phLength) {
          case 10:
            country = ph.slice(0, 1);
            nationalNumber = ph.slice(1, 9);
            break;

          case 11:
            country = ph.slice(0, 2);
            nationalNumber = ph.slice(2, 10);
            break;

          case 12:
            country = ph.slice(0, 3);
            nationalNumber = ph.slice(3, 11);
            break;

          case 13:
            country = ph.slice(0, 4);
            nationalNumber = ph.slice(4, 12);
            break;

          default:
            break;
        }
        const foundCountry = countries.find(
          (countrys) => countrys.phone === parseInt(country!)
        );
        if (!foundCountry) {
          toast.error("Country Code invalid!");
        }

        const userData = {
          name,
          phone_number: parseInt(nationalNumber),
          area,
          country: foundCountry!.name,
        };
        await checkSignUpData(userData);
        setInvalidError(false);
        setLoading(false);
        toast.success(`Xác thực thành công!`);
        

        setVerifyNumber({
          0: "",
          1: "",
          2: "",
          3: "",
          4: "",
          5: "",
        });

        // Reset input fields to empty string
        inputRefs.forEach((ref) => {
          if (ref.current) {
            ref.current.value = "";
          }
        });

        onClose();

        router.push("/signup/choose-bussiness");
      })
      .catch((err: any) => {
        toast.error(err.message);
        setInvalidError(true);
        setLoading(false);

        setVerifyNumber({
          0: "",
          1: "",
          2: "",
          3: "",
          4: "",
          5: "",
        });

        // Reset input fields to empty string
        inputRefs.forEach((ref) => {
          if (ref.current) {
            ref.current.value = "";
          }
        });
      });
  }

  return (
    <>
      <form className="flex flex-col mt-7 text-zinc-400 max-md:max-w-full">
        <h2 className="justify-center p-2.5 text-xl font-semibold text-center text-black max-md:max-w-full">
          Tạo tài khoản dùng thử miễn phí
        </h2>
        <input
          className="justify-center px-4 py-2.5 mt-3.5 text-base bg-white rounded-xl border-2 border-solid border-zinc-400 w-full"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nhập họ và tên"
          aria-label="Nhập họ và tên"
        />
        <PhoneInput
          containerStyle={{
            marginTop: "14px",
            border: "2px solid",
            borderRadius: "15px",
          }}
          buttonStyle={{
            borderTopLeftRadius: "15px",
            borderBottomLeftRadius: "15px",
          }}
          searchStyle={{
            borderRadius: "15px",
          }}
          inputStyle={{
            width: "100%",
            justifyContent: "center",
            marginTop: "14px",
            paddingTop: "22px",
            paddingBottom: "22px",
            fontSize: "1rem",
            borderRadius: "15px",
          }}
          country={"in"}
          value={ph}
          onChange={setPh}
        />

        <input
          className="justify-center px-4 py-2.5 mt-3.5 text-base bg-white rounded-xl border-2 border-solid border-zinc-400 w-full"
          type="text"
          value={area}
          onChange={(e) => setArea(e.target.value)}
          placeholder="Nhập tên khu vực"
          aria-label="Nhập tên khu vực"
        />
        <div id="recaptcha-container"></div>
        <div className="flex flex-col justify-between mt-16 max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-wrap gap-2 content-start pb-12 text-base font-semibold">
            <Checkbox
              isSelected={checkboxStatus}
              onValueChange={setCheckboxStatus}></Checkbox>
            <p className="flex-1 max-md:max-w-full">
              Tôi đã đọc và đồng ý{" "}
              <Link
                href="/terms-of-use"
                className="text-blue-600 font-bold hover:text-blue-400">
                Điều khoản và chính sách sử dụng
              </Link>{" "}
              của WeldingStore
            </p>
          </div>
          <div className="flex flex-col justify-center items-end px-16 py-5 text-sm font-bold text-slate-50 max-md:pl-5 max-md:max-w-full">
            <Button
              onClick={onSignup}
              className="bg-blue-600 px-9 text-white font-bold">
              Tiếp tục
            </Button>
          </div>
        </div>
      </form>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Enter your OTP
              </ModalHeader>
              <ModalBody>
                <div className="w-full m-auto flex items-center justify-around">
                  {Object.keys(verifyNumber).map((key, index) => (
                    <input
                      type="number"
                      key={key}
                      ref={inputRefs[index]}
                      className={`w-[50px] h-[60px] bg-transparent border-[3px] rounded-[10px] flex items-center text-black justify-center text-[18px] font-Poppins outline-none text-center ${
                        invalidError ? "shake border-red-500" : "border-black"
                      }`}
                      placeholder=""
                      maxLength={1}
                      value={verifyNumber[key as keyof VerifyNumber]}
                      onChange={(e) => handleInputChange(index, e.target.value)}
                    />
                  ))}
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  onClick={onOTPVerify}
                  className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded">
                  {loading && (
                    <CgSpinner size={20} className="mt-1 animate-spin" />
                  )}
                  <span>Verify OTP</span>
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
